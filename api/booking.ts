/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { transporter, MinimalRequest, MinimalResponse } from './_lib/mail.ts';

const SESSION_LABELS: Record<string, string> = {
  crossfit: 'CrossFit',
  hyrox: 'HYROX',
};

export default async function handler(req: MinimalRequest, res: MinimalResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

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
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Invio email fallito:', err);
    res.status(500).json({ ok: false, error: 'Invio email fallito.' });
  }
}
