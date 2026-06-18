/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocationInfo, ProgramInfo, ReviewInfo, ProgramSchedule } from './types.ts';

// Phone details
export const CONTACT_PHONE = "339 643 8066";
export const CONTACT_TEL_LINK = "tel:+393396438066";

// Locations details
export const BOX_LOCATIONS: LocationInfo[] = [
  {
    id: "mandrione",
    name: "The Cave — Mandrione",
    size: "300 m²",
    description: "La tana storica dell'underground romano dedicato alla pura performance sportiva. Un ambiente intimo, focalizzato e brutale.",
    address: "Via del Mandrione 105",
    postalCode: "00181",
    city: "Roma",
    programLabel: "CrossFit® + HYROX",
    googleMapsUrl: "https://maps.google.com/?q=Via+del+Mandrione+105,+00181+Roma",
    // These unsplash images are dark, gritty gym vibes representing the cave mood
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "cinecitta",
    name: "The Cave — Cinecittà",
    size: "600 m²",
    description: "Un open space immenso interamente attrezzato Rogue e BLOR per sessioni estreme di CrossFit® e classi HYROX strategiche.",
    address: "Via Silicella 103",
    postalCode: "00169",
    city: "Roma",
    programLabel: "HYROX + CrossFit®",
    googleMapsUrl: "https://maps.google.com/?q=Via+Silicella+103,+00169+Roma",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000"
  }
];

// Programs Details
export const PROGRAMS: ProgramInfo[] = [
  {
    id: "crossfit",
    title: "CrossFit®",
    quote: "La forgia del carattere attraverso l'alta intensità.",
    description: "Movimenti funzionali variati in continuazione eseguiti ad alta intensità. Sollevamento pesi, ginnastica e condizionamento metabolico per cementare costanza, forza fisica e resilienza mentale.",
    features: [
      "Classi guidate da coach certificati",
      "Attrezzature Rogue® & BLOR®",
      "Programmazione scalabile per ogni livello",
      "Sviluppo di forza, coordinazione e potenza"
    ],
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "hyrox",
    title: "HYROX",
    quote: "Il connubio letale tra corsa e forza funzionale.",
    description: "La gara di fitness che mette alla prova la tua resistenza e stabilità globale. Un mix strategico di corsa e stazioni di forza per preparare un fisico inarrestabile e resistente ad ogni sforzo prolungato.",
    features: [
      "Allenamento HIIT ad alto volume aerobico",
      "Sled push, rowers, wall balls dedicati",
      "Ideale per atleti da endurance e forza",
      "Focalizzazione completa sulla metabolic conditioning"
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "opengym",
    title: "Open Gym",
    quote: "Spazio libero, nessun compromesso, solo i tuoi limiti.",
    description: "L'accesso completo ai nostri box al di fuori delle classi strutturate. Segui la tua scheda di allenamento individuale utilizzando il rig, le pedane olimpiche ed i pesi liberi nel massimo rispetto della disciplina e del focus individuale.",
    features: [
      "Accesso flessibile Lun-Sab",
      "Ampie pedane e rack olimpionici",
      "Attrezzi di calibrazione professionale Rogue/BLOR",
      "Supervisione e sicurezza in sala"
    ],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "personaltraining",
    title: "Personal Training",
    quote: "Accuratezza tecnica e programmazione maniacale.",
    description: "Personalizza il percorso per centrare obiettivi ambiziosi di prestazione atletica, potenza muscolare, mobilità o recupero motorio. Il massimo della professionalità con un coach dedicato esclusivamente a te.",
    features: [
      "Check posturale e biomeccanico iniziale",
      "Ottimizzazione maniacale dei gesti tecnici",
      "Nutrizione e programmazione mirate",
      "Lezioni su prenotazione oraria preferenziale"
    ],
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800"
  }
];

// Horizontal carousel reviews
export const REVIEWS: ReviewInfo[] = [
  {
    id: "rev1",
    text: "Un box incredibile. Attrezzatura Rogue top di gamma e coach fantastici che ti seguono passo dopo passo. Atmosfera unica, vera cultura del ferro.",
    author: "Marco G.",
    rating: 5
  },
  {
    id: "rev2",
    text: "Il miglior box per il CrossFit e HYROX a Roma. Gli spazi sono giganteschi (Cinecittà è pazzesco) e la community ti spinge oltre ogni limite.",
    author: "Valentina D.",
    rating: 5
  },
  {
    id: "rev3",
    text: "Brutale, pulito, focalizzato. Non è la solita palestra commerciale. Qui si lavora sodo e si forgia il carattere. Disciplina mentale al 100%.",
    author: "Alessandro M.",
    rating: 5
  },
  {
    id: "rev4",
    text: "Due sedi spettacolari a Roma. L'abbonamento permette di allenarsi con coach eccezionali e preparatissimi. Una vera tana di campioni.",
    author: "Giulia F.",
    rating: 5
  },
  {
    id: "rev5",
    text: "Frequento le classi HYROX e sono entusiasta. Programmazione studiata alla perfezione ed energia pazzesca durante i WOD. Rogue e BLOR di prim'ordine.",
    author: "Roberto T.",
    rating: 5
  },
  {
    id: "rev6",
    text: "Competenza, passione e disciplina. Se cerchi un posto dove superare i tuoi limiti fisici e mentali, The Cave è l'unica scelta possibile a Roma.",
    author: "Francesco S.",
    rating: 5
  }
];

// Timetables
export const TIMETABLES: ProgramSchedule[] = [
  {
    programName: "CrossFit®",
    schedules: [
      {
        dayGroup: "Lunedì – Venerdì",
        times: ["07:00", "08:00", "10:00", "13:00", "17:00", "18:00", "19:00", "20:00", "21:00"]
      },
      {
        dayGroup: "Sabato",
        times: ["10:30", "15:30"]
      }
    ],
    infoNotes: "Le classi hanno una durata di 60 minuti e richiedono la prenotazione tramite app di box."
  },
  {
    programName: "Open Gym",
    schedules: [
      {
        dayGroup: "Lunedì – Venerdì",
        times: ["09:00", "11:30", "14:00", "16:00 – 19:30"]
      },
      {
        dayGroup: "Sabato",
        times: ["12:30 – 15:30"]
      }
    ],
    infoNotes: "Accesso libero esclusivo all'area attrezzata per allenarsi sulla propria scheda tecnica di box."
  },
  {
    programName: "HYROX",
    schedules: [
      {
        dayGroup: "Lunedì",
        times: ["08:00", "18:00"]
      },
      {
        dayGroup: "Mercoledì",
        times: ["07:00", "17:00"]
      },
      {
        dayGroup: "Venerdì",
        times: ["09:00"]
      },
      {
        dayGroup: "Sabato",
        times: ["11:30"]
      }
    ],
    infoNotes: "Classi focalizzate sull'allenamento specifico in vista delle competizioni ufficiali HYROX."
  }
];

// Grid of 4 placeholder Coach cards
export const COACH_ROLES = [
  { id: "c1", role: "Head Coach CrossFit®", status: "Coach in arrivo", desc: "Coordinatore tecnico specializzato in pesistica olimpica e ginnastica." },
  { id: "c2", role: "HYROX Head Coach", status: "Coach in arrivo", desc: "Specialista in condizionamento metabolico profondo e gare ufficiali HYROX." },
  { id: "c3", role: "Strength & Conditioning Coach", status: "Coach in arrivo", desc: "Esperto in preparazione fisica generale e miglioramento dei massimali di forza corporale." },
  { id: "c4", role: "Gymnastics Specialist", status: "Coach in arrivo", desc: "Istruttore qualificato per lo sviluppo di skill avanzate agli anelli e alla sbarra." }
];

// Dynamic scrolling keywords for the marquee
export const MARQUEE_KEYWORDS = [
  "CrossFit®",
  "HYROX",
  "Open Gym",
  "Personal Training",
  "Rogue® Equipment",
  "BLOR® Gear",
  "12 Coach Certificati",
  "900 m² Totale Spazio",
  "2 Box a Roma",
  "Community di Acciaio",
  "Mandrione",
  "Cinecittà",
  "Disciplina",
  "Preparazione"
];
