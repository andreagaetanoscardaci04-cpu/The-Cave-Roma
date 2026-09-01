/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface MinimalRequest {
  method?: string;
  body?: any;
}

export interface MinimalResponse {
  status(code: number): MinimalResponse;
  json(body: any): void;
}
