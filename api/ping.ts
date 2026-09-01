import nodemailer from 'nodemailer';

export default function handler(req: any, res: any) {
  res.status(200).json({ ok: true, step: 'with-nodemailer-import-only', hasFn: typeof nodemailer.createTransport });
}
