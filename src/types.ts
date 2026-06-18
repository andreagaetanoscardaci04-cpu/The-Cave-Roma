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

export interface ProgramInfo {
  id: string;
  title: string;
  quote: string;
  description: string;
  features: string[];
  image: string;
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
  infoNotes?: string;
}
