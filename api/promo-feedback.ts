/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import nodemailer from 'nodemailer';

interface MinimalRequest {
  method?: string;
  body?: any;
}

interface MinimalResponse {
  status(code: number): MinimalResponse;
  json(body: any): void;
}

const CLIENT_TYPE_LABELS: Record<string, string> = {
  nuovo: 'Nuovo iscritto — primo mese a 49,99€',
};

// NOTA: il tetto automatico a 10 richieste NON è ancora attivo qui.
// Va reintrodotto con un contatore condiviso vero (es. Upstash Redis via Vercel KV) — un
// contatore in memoria locale alla funzione serverless NON basta: ogni richiesta può arrivare
// a un'istanza diversa, quindi non blocca nulla in modo affidabile (causa del difetto del
// 2026-09-01, dove il limite non è mai stato realmente applicato). Fino a quel momento ogni
// richiesta va monitorata manualmente dalle email in arrivo.
export default async function handler(req: MinimalRequest, res: MinimalResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

  const { nomeCognome, telefono, clientType } = req.body ?? {};

  if (!nomeCognome || !telefono || !clientType || !(clientType in CLIENT_TYPE_LABELS)) {
    return res.status(400).json({ ok: false, error: 'Dati mancanti.' });
  }

  const clientTypeLabel = CLIENT_TYPE_LABELS[clientType] ?? clientType;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: `"The Cave — Sito Web" <${process.env.SMTP_USER}>`,
      to: process.env.BOOKING_TO_EMAIL,
      subject: `Nuova richiesta promo — ${clientTypeLabel}`,
      text: [
        `Tipo: ${clientTypeLabel}`,
        `Nome e Cognome: ${nomeCognome}`,
        `Telefono: ${telefono}`,
      ].join('\n'),
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Invio email fallito:', err);
    res.status(500).json({ ok: false, error: 'Invio email fallito.' });
  }
}
