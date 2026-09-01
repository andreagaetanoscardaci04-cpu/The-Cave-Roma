import { transporter } from './_lib/mail';

export default function handler(req: any, res: any) {
  res.status(200).json({ ok: true, step: 'with-mail-import', hasTransporter: !!transporter });
}
