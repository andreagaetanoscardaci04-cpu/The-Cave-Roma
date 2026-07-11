/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
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
