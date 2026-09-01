/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { transporter, MinimalRequest, MinimalResponse } from './_lib/mail';

const CLIENT_TYPE_LABELS: Record<string, string> = {
  nuovo: 'Nuovo iscritto — primo mese a 49,90€',
  esistente: 'Già cliente — settimana in omaggio',
};

// Quota massima di invii per tipo di cliente.
// TEMP: +1 su entrambe le quote per permettere un invio di test reale prima del lancio.
// Riportare a nuovo: 10, esistente: 20 dopo il test.
const PROMO_LIMITS: Record<string, number> = {
  nuovo: 11,
  esistente: 21,
};

// Conteggio persistito su Vercel KV quando disponibile (env KV_REST_API_URL/KV_REST_API_TOKEN,
// aggiunti automaticamente collegando una KV al progetto Vercel). Senza KV configurata usa un
// contatore in memoria per singola istanza serverless: funziona ma non è garantito attendibile
// tra invocazioni/istanze diverse — da collegare una KV per un conteggio davvero affidabile.
const memoryCounts: Record<string, number> = { nuovo: 0, esistente: 0 };

async function kvIncrement(key: string): Promise<number | null> {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  try {
    const r = await fetch(`${url}/incr/${key}`, { headers: { Authorization: `Bearer ${token}` } });
    const data: any = await r.json();
    return typeof data.result === 'number' ? data.result : null;
  } catch {
    return null;
  }
}

async function kvDecrement(key: string): Promise<void> {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return;
  try {
    await fetch(`${url}/decr/${key}`, { headers: { Authorization: `Bearer ${token}` } });
  } catch {
    // best effort
  }
}

export default async function handler(req: MinimalRequest, res: MinimalResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

  const { nomeCognome, telefono, clientType } = req.body ?? {};

  if (!nomeCognome || !telefono || !clientType || !(clientType in PROMO_LIMITS)) {
    return res.status(400).json({ ok: false, error: 'Dati mancanti.' });
  }

  const limit = PROMO_LIMITS[clientType];
  const key = `promo:${clientType}`;

  const kvCount = await kvIncrement(key);
  const usingKv = kvCount !== null;
  const currentCount = usingKv ? (kvCount as number) : (memoryCounts[clientType] += 1);
  const isOverQuota = currentCount > limit;

  const clientTypeLabel = CLIENT_TYPE_LABELS[clientType] ?? clientType;
  const subject = isOverQuota
    ? `⚠️ FUORI QUOTA — ${clientTypeLabel}`
    : `Nuova richiesta promo — ${clientTypeLabel}`;

  try {
    // Anche oltre quota inviamo comunque l'email allo staff (segnalata come fuori quota):
    // sul sito, a chi invia, viene comunque mostrato "offerta esaurita".
    await transporter.sendMail({
      from: `"The Cave — Sito Web" <${process.env.SMTP_USER}>`,
      to: process.env.BOOKING_TO_EMAIL,
      subject,
      text: [
        isOverQuota ? `ATTENZIONE: richiesta arrivata oltre la quota di ${limit} (${clientTypeLabel}). Sul sito è stato mostrato "offerta esaurita".` : null,
        `Tipo: ${clientTypeLabel}`,
        `Nome e Cognome: ${nomeCognome}`,
        `Telefono: ${telefono}`,
        `Progressivo: ${currentCount}/${limit}`,
      ].filter(Boolean).join('\n'),
    });

    if (isOverQuota) {
      return res.status(409).json({ ok: false, error: 'sold_out' });
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    // Invio fallito: libera lo slot appena prenotato.
    if (usingKv) await kvDecrement(key);
    else memoryCounts[clientType] -= 1;
    console.error('Invio email fallito:', err);
    res.status(500).json({ ok: false, error: 'Invio email fallito.' });
  }
}
