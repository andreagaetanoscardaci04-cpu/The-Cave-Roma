import nodemailer from 'nodemailer';

export default function handler(req: any, res: any) {
  try {
    const t = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    res.status(200).json({ ok: true, step: 'with-createTransport', hasTransport: !!t, hasSmtpUser: !!process.env.SMTP_USER, hasSmtpPass: !!process.env.SMTP_PASS });
  } catch (err: any) {
    res.status(200).json({ ok: false, step: 'createTransport-threw', message: String(err && err.message || err) });
  }
}
