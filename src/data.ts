/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocationInfo, ProgramInfo, ReviewInfo, ProgramSchedule } from './types.ts';
import mandrioneImg from './assets/mandrione.webp';
import cinecittaImg from './assets/cinecitta.webp';

// Phone details
export const CONTACT_PHONE = "339 643 8066";
export const CONTACT_TEL_LINK = "tel:+393396438066";

// Instagram accounts per location
export const INSTAGRAM_ACCOUNTS = [
  { label: "Mandrione", handle: "@the.cave.crossfit.mandrione", url: "https://www.instagram.com/the.cave.crossfit.mandrione/" },
  { label: "Cinecittà", handle: "@the.cave.crossfit.cinecitta", url: "https://www.instagram.com/the.cave.crossfit.cinecitta/?hl=it" }
];

// Facebook accounts per location
export const FACEBOOK_ACCOUNTS = [
  { label: "Mandrione", url: "https://www.facebook.com/thecavecrossfitmandrione/?locale=it_IT" },
  { label: "Cinecittà", url: "https://www.facebook.com/p/The-Cave-CrossFit-Cinecitt%C3%A0-100067877744582/" }
];

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
    image: mandrioneImg
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
    image: cinecittaImg
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
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=800",
    longDescription: [
      "Il CrossFit® a The Cave segue una programmazione costruita su cicli di forza, ginnastica e metabolic conditioning. Ogni WOD è calibrato dai nostri coach L-1 e L-2 per spingerti oltre i tuoi limiti in sicurezza, con scaling personalizzato per ogni livello.",
      "Le classi includono warm-up tecnico, una parte dedicata a forza o skill ginnico, e il WOD finale ad alta intensità. Si lavora su bilancieri olimpionici, ginnastica (pull-up, muscle-up, handstand) e condizionamento metabolico, in un ambiente competitivo ma supportivo."
    ],
    details: [
      { label: "Durata classe", value: "60 minuti" },
      { label: "Livello", value: "Dal principiante all'atleta avanzato" },
      { label: "Coach", value: "Certificati CrossFit® L-1 & L-2" },
      { label: "Capienza media", value: "12-14 atleti per classe" }
    ]
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
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    longDescription: [
      "La nostra programmazione HYROX segue lo standard di gara ufficiale: 8 km di corsa alternati a 8 stazioni funzionali (ski erg, sled push/pull, burpee broad jump, rowing, farmers carry, lunges, wall balls). Allenamento specifico race-ready per chi vuole competere o semplicemente migliorare la propria endurance funzionale.",
      "Ogni sessione è pensata per costruire resistenza muscolare e cardiovascolare, gestione del ritmo e transizioni rapide tra le stazioni — esattamente come in gara."
    ],
    details: [
      { label: "Durata classe", value: "60-75 minuti" },
      { label: "Livello", value: "Intermedio / avanzato" },
      { label: "Focus", value: "Endurance funzionale race-ready" },
      { label: "Attrezzatura", value: "Sled, ski erg, rower, wall ball dedicati" }
    ]
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
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    longDescription: [
      "L'Open Gym ti dà accesso libero al box fuori dagli orari delle classi guidate. Porta la tua scheda personale o quella del tuo coach e allenati in autonomia su rig, pedane olimpiche e pesi liberi, con supervisione in sala per garantire sicurezza e corretto utilizzo dell'attrezzatura.",
      "Ideale per chi vuole lavorare su skill specifiche, recuperare un allenamento perso o semplicemente allenarsi con orari flessibili, mantenendo comunque accesso a tutta l'attrezzatura Rogue® e BLOR® del box."
    ],
    details: [
      { label: "Accesso", value: "Lun-Sab, fasce orarie dedicate" },
      { label: "Livello", value: "Autonomo (richiede esperienza base)" },
      { label: "Attrezzatura", value: "Rig, pedane olimpiche, pesi liberi" },
      { label: "Supervisione", value: "Staff in sala" }
    ]
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
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800",
    longDescription: [
      "Il Personal Training a The Cave è un percorso 1-a-1 costruito interamente sui tuoi obiettivi: performance atletica, ricomposizione corporea, mobilità o recupero da infortunio. Si parte da un check posturale e biomeccanico completo per individuare squilibri e priorità di lavoro.",
      "Il coach dedicato programma ogni sessione con progressioni mirate, monitorando costantemente i carichi e i progressi. Su richiesta è disponibile anche supporto nutrizionale per integrare l'allenamento con un piano alimentare coerente."
    ],
    details: [
      { label: "Durata sessione", value: "60 minuti" },
      { label: "Modalità", value: "1-a-1 con coach dedicato" },
      { label: "Check iniziale", value: "Valutazione posturale e biomeccanica" },
      { label: "Prenotazione", value: "Su fascia oraria preferenziale" }
    ]
  }
];

// Horizontal carousel reviews — sourced from real Google reviews
export const REVIEWS: ReviewInfo[] = [
  {
    id: "rev1",
    text: "Il mio posto del cuore. Partire da zero a The Cave CrossFit Mandrione non è un problema: sarai seguito da ottimi professionisti e i risultati non tarderanno ad arrivare.",
    author: "Rita R.",
    rating: 5
  },
  {
    id: "rev2",
    text: "Ottimo team, da un anno che mi alleno con loro ed ho già ottenuto i risultati che volevo. Grazie a tutti!!",
    author: "Andrea A.",
    rating: 5
  },
  {
    id: "rev3",
    text: "Ottima palestra dedicata al CrossFit. Istruttori competenti, simpatici e preparati.",
    author: "Riccardo V.",
    rating: 5
  },
  {
    id: "rev4",
    text: "Box super attrezzato per il CrossFit e coach perfetti!",
    author: "Erion B.",
    rating: 5
  },
  {
    id: "rev5",
    text: "Un posto dove ci si allena come una volta, da provare per capire come ci si allena. Grandi.",
    author: "Matteo D.P.",
    rating: 5
  },
  {
    id: "rev7",
    text: "Mi trovo abbastanza bene, tutto come in famiglia.",
    author: "Giulio C.",
    rating: 5
  },
  {
    id: "rev8",
    text: "5 stelle al coach Federica Guerrera.",
    author: "Antonio Francesco G.",
    rating: 5
  },
  {
    id: "rev9",
    text: "Veramente un bell'impianto per attrezzature e spazio.",
    author: "Aldo C.",
    rating: 5
  },
  {
    id: "rev10",
    text: "Very nice and welcoming owner and community. We were in Rome for a long weekend and visited the box, the WOD was great and the atmosphere nice! Thank you for a good time!!",
    author: "Mai-Britt N.",
    rating: 5
  },
  {
    id: "rev11",
    text: "A great box, the coach and the place were really nice. We had a blast the two times we visited during the same weekend. Friendly and quick to answer our Facebook message. Loved it.",
    author: "Emilia H.",
    rating: 5
  },
  {
    id: "rev12",
    text: "Very nice box, thanks a lot!",
    author: "Mehregan K.",
    rating: 5
  },
  {
    id: "rev13",
    text: "Box di CrossFit completo di tutto, dove c'è spazio per tutti! Ambiente divertente e sereno, con coach professionali e preparati. Sicuramente un posto dove tornare!",
    author: "Roberto M.",
    rating: 5
  },
  {
    id: "rev14",
    text: "Coach e proprietari simpatici. Ottimo ambiente. Ho provato altri box, ma solo loro mi hanno convinto!",
    author: "Salvo",
    rating: 5
  },
  {
    id: "rev15",
    text: "Istruttori bravi e qualificati. Ti seguono e ti spiegano bene i movimenti della pesistica e di ogni movimento del CrossFit.",
    author: "Mathias",
    rating: 5
  },
  {
    id: "rev16",
    text: "È stato molto figo.",
    author: "Alessandro B.",
    rating: 4
  },
  {
    id: "rev17",
    text: "Il The Cave è una garanzia!",
    author: "Eleonora S.",
    rating: 5
  },
  {
    id: "rev18",
    text: "Went to this box while staying in Rome for a couple of days. They recently opened and I did a drop-in open gym. They were really friendly and straightforward, the box offers everything a normal WOD asks for. Great experience!",
    author: "Simon H.",
    rating: 5
  },
  {
    id: "rev19",
    text: "Top!!",
    author: "Elisabetta R.",
    rating: 5
  },
  {
    id: "rev20",
    text: "Top",
    author: "Andrea C.",
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
        times: ["7:00 – 8:00", "8:00 – 9:00", "10:00 – 11:00", "13:00 – 14:00", "17:00 – 18:00", "18:00 – 19:00", "19:00 – 20:00", "20:00 – 21:00"]
      }
    ],
    weekendNote: "Sab 10:30 · 15:30"
  },
  {
    programName: "Open Gym",
    schedules: [
      {
        dayGroup: "Lunedì – Venerdì",
        times: ["9:00 – 10:00", "9:00 – 11:00", "11:30 – 13:00", "13:00 – 15:00", "14:00 – 15:30", "16:00 – 18:00", "18:00 – 19:30", "19:30 – 21:00"]
      }
    ],
    weekendNote: "Sab 12:30 – 15:30"
  },
  {
    programName: "HYROX",
    schedules: [
      {
        dayGroup: "Settimana",
        times: ["Lun 8:00 – 9:00", "Lun 18:00 – 19:00", "Mer 7:00 – 8:00", "Mer 17:00 – 18:00", "Ven 9:00 – 10:00", "Sab 11:30 – 12:30"]
      }
    ]
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
