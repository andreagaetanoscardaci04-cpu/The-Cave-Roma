/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Localized } from './i18n.tsx';

export interface LocationInfo {
  id: string;
  name: string;
  size: string;
  description: Localized;
  address: string;
  postalCode: string;
  city: string;
  programLabel: string;
  googleMapsUrl: string;
  image: string;
}

export interface ProgramDetail {
  label: Localized;
  value: Localized;
}

export interface ProgramInfo {
  id: string;
  title: string;
  quote: Localized;
  description: Localized;
  features: Localized<string[]>;
  image: string;
  longDescription: Localized<string[]>;
  details: ProgramDetail[];
}

export interface ReviewInfo {
  id: string;
  text: string;
  author: string;
  rating: number;
  source?: 'google' | 'trustpilot';
}

export interface ScheduleItem {
  dayGroup: string;
  times: string[];
}

export interface ProgramSchedule {
  programName: string;
  schedules: ScheduleItem[];
  weekendNote?: string;
}
