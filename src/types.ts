/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface LocationInfo {
  id: string;
  name: string;
  size: string;
  description: string;
  address: string;
  postalCode: string;
  city: string;
  programLabel: string;
  googleMapsUrl: string;
  image: string;
}

export interface ProgramDetail {
  label: string;
  value: string;
}

export interface ProgramInfo {
  id: string;
  title: string;
  quote: string;
  description: string;
  features: string[];
  image: string;
  longDescription: string[];
  details: ProgramDetail[];
}

export interface ReviewInfo {
  id: string;
  text: string;
  author: string;
  rating: number;
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
