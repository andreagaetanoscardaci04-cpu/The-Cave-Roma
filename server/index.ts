/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const SESSION_LABELS: Record<string, string> = {
  crossfit: 'CrossFit',
  hyrox: 'HYROX',
};

app.post('/api/booking', async (req, res) => {
  const { nome, email, telefono, sessionType } = req.body ?? {};

  if (!nome || !email || !telefono || !sessionType) {
    return res.status(400).json({ ok: false, error: 'Dati mancanti.' });
  }

  const sessionLabel = SESSION_LABELS[sessionType] ?? sessionType;

  try {
    await transporter.sendMail({
      from: `"The Cave — Sito Web" <${process.env.SMTP_USER}>`,
      to: process.env.BOOKING_TO_EMAIL,
      replyTo: email,
      subject: `Richiesta prova gratuita — ${sessionLabel}`,
      text: [
        `Nome: ${nome}`,
        `Email: ${email}`,
        `Telefono: ${telefono}`,
        `Sessione richiesta: ${sessionLabel}`,
      ].join('\n'),
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Invio email fallito:', err);
    res.status(500).json({ ok: false, error: 'Invio email fallito.' });
  }
});

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

// Contatore invii persistito su file, così sopravvive ai riavvii del server.
const PROMO_COUNTS_FILE = path.resolve(__dirname, 'promo-counts.json');

function loadPromoCounts(): Record<string, number> {
  try {
    const raw = fs.readFileSync(PROMO_COUNTS_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    return { nuovo: parsed.nuovo ?? 0, esistente: parsed.esistente ?? 0 };
  } catch {
    return { nuovo: 0, esistente: 0 };
  }
}

const promoCounts = loadPromoCounts();

function savePromoCounts() {
  fs.writeFile(PROMO_COUNTS_FILE, JSON.stringify(promoCounts), (err) => {
    if (err) console.error('Salvataggio contatore promo fallito:', err);
  });
}

app.post('/api/promo-feedback', async (req, res) => {
  const { nomeCognome, telefono, clientType } = req.body ?? {};

  if (!nomeCognome || !telefono || !clientType || !(clientType in PROMO_LIMITS)) {
    return res.status(400).json({ ok: false, error: 'Dati mancanti.' });
  }

  const limit = PROMO_LIMITS[clientType];

  // Controllo e prenotazione dello slot in modo sincrono (nessun "await" fra le due righe),
  // così due richieste quasi simultanee non possono superare insieme la quota.
  if (promoCounts[clientType] >= limit) {
    return res.status(409).json({ ok: false, error: 'sold_out' });
  }
  promoCounts[clientType] += 1;
  savePromoCounts();

  const clientTypeLabel = CLIENT_TYPE_LABELS[clientType] ?? clientType;

  try {
    await transporter.sendMail({
      from: `"The Cave — Sito Web" <${process.env.SMTP_USER}>`,
      to: process.env.BOOKING_TO_EMAIL,
      subject: `Nuova richiesta promo — ${clientTypeLabel}`,
      text: [
        `Tipo: ${clientTypeLabel}`,
        `Nome e Cognome: ${nomeCognome}`,
        `Telefono: ${telefono}`,
        `Progressivo: ${promoCounts[clientType]}/${limit}`,
      ].join('\n'),
    });
    res.json({ ok: true });
  } catch (err) {
    // Invio fallito: libera lo slot appena prenotato.
    promoCounts[clientType] -= 1;
    savePromoCounts();
    console.error('Invio email fallito:', err);
    res.status(500).json({ ok: false, error: 'Invio email fallito.' });
  }
});

// In produzione questo server serve anche i file statici generati da "vite build".
if (process.env.NODE_ENV === 'production') {
  const distPath = path.resolve(__dirname, 'dist');
  app.use(express.static(distPath));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

const PORT = process.env.PORT ? Number(process.env.PORT) : 8787;
app.listen(PORT, () => {
  console.log(`API server in ascolto su http://localhost:${PORT}`);
});
