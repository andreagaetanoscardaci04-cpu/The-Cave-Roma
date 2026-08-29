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

// Official booking app
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.shaggyowl.cfthecave&pcampaignid=web_share";
export const APP_STORE_URL = "https://apps.apple.com/it/app/the-cave-crossfit/id1497429134";

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
    googleMapsUrl: "https://maps.app.goo.gl/qYJm9baFNdriiiNm8",
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
    googleMapsUrl: "https://maps.app.goo.gl/2ZY2RYBbr3uSZGfq8",
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
    quote: "Il connubio tra corsa e forza funzionale.",
    description: "La gara di fitness che mette alla prova la tua resistenza, forza e capacità aerobica.\nUn mix strategico di corsa e stazioni di forza per preparare un fisico inarrestabile e resistente ad ogni sforzo prolungato.\nUna programmazione strutturata in grado di portarti fino ad una vera competizione Hyrox.",
    features: [
      "Allenamento HIIT ad alto volume aerobico",
      "Sled push, rowers, wall balls dedicati",
      "Ideale per atleti da endurance e forza",
      "Focalizzazione completa sulla metabolic conditioning",
      "Preparazione e simulazioni Hyrox"
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
    quote: "Spazio libero, aperto alla tua programmazione.",
    description: "L'accesso completo ai nostri box al di fuori delle classi.\nSegui la tua programmazione utilizzando tutti gli strumenti che il box ti offre.\nInoltre in open gym potrai perfezionare le tue skill, sempre dietro la supervisione di un coach.",
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
    text: "Mi sono allenato in questo box dopo un weekend di vacanza a Roma, mi sono sentito subito a casa! Mi hanno accolto a braccia aperte e nonostante avessi un problema di mobilità alla spalla mi hanno seguito e aiutato a fare il workout, si respira atmosfera di famiglia! Bravi coach, bravi tutti! Merita davvero!",
    author: "Andrea G.",
    rating: 5
  },
  {
    id: "rev2",
    text: "Posto ideale per fare Crossfit su tutti per tutti i livelli. Il personale altamente qualificato segue scrupolosamente ogni iscritto e che guida verso la migliore esecuzione dei workout in pieno rispetto della sicurezza. 5 stelle so poche!",
    author: "Vincenzo V.",
    rating: 5
  },
  {
    id: "rev3",
    text: "I was in Rome on vacation and looking for a box for drop in. Loved it there. The owner really made us feel welcome. The WODs were very well planned, the trainers were very knowledgeable and helpful. The box was very clean and nice. I definitely recommend and would go there again.",
    author: "Viola D.",
    rating: 5
  },
  {
    id: "rev4",
    text: "Cercando un box nei paraggi mi sono imbattuto in The Cave, che propone interessanti alternative anche per chi è a Roma \"di passaggio\", raramente trovo una scelta così vasta di membership. I coach davvero professionali e simpatici, minuziosi nelle tecniche di weightlifting e attenti durante i WODs. Personale attento e ambiente \"familiare\", ci si diverte e ci si allena bene, complimenti, molto felice di avervi conosciuto! Ci tornerò sicuramente quando farò tappa a Roma!",
    author: "Mat",
    rating: 5
  },
  {
    id: "rev5",
    text: "The Cave CrossFit Mandrione è molto più di un box di CrossFit: è una vera e propria comunità. I coach sono estremamente competenti, attenti e sempre pronti a correggere e motivare. La programmazione è ben strutturata e bilanciata, pensata per far progredire in modo costante, sia chi è alle prime armi che chi ha già esperienza. Ma ciò che rende davvero speciale questo box è l'ambiente: accogliente, stimolante e pieno di energia positiva. Si lavora duro, si suda, si migliora, ma sempre con il sorriso e il supporto di un gruppo unito. Consigliatissimo a chi cerca un box di CrossFit di qualità, con persone vere e passione autentica.",
    author: "Blagoj N.",
    rating: 5
  },
  {
    id: "rev6",
    text: "Sono stato un paio di settimane a Roma e ho frequentato questo box. Iscrizione alle classi molto semplice tramite app dedicata con possibilità di acquistare pacchetto ad ingressi. Vari Coach molto preparati e simpatici. Quando tornerò a Roma ripasserò sicuramente. Box top, super consigliato.",
    author: "Michele F.",
    rating: 5
  },
  {
    id: "rev7",
    text: "Il miglior box di CrossFit che ci sia! Organizzazione e prenotazione delle classi in app dedicata, tanta attrezzatura e coach professionali che ti seguono durante le lezioni! CONSIGLIATISSIMO!!!!",
    author: "Alessandro M.",
    rating: 5
  },
  {
    id: "rev8",
    text: "Ho avuto il piacere di allenarmi al Box The Cave per una settimana ed è stata un'esperienza davvero molto positiva. Fin da subito mi sono sentito accolto e a mio agio, cosa per nulla scontata quando si è solo di passaggio. Un ringraziamento speciale a Paolo per la sua gentilezza, disponibilità e attenzione: persone così fanno davvero la differenza e rendono tutto ancora più piacevole. Mi sono trovato benissimo sotto tutti i punti di vista. Complimenti a tutto il team per il lavoro che fate ogni giorno! Tornerò sicuramente appena ne avrò occasione.",
    author: "Fabrizio B.",
    rating: 4
  },
  // Trustpilot reviews
  {
    id: "rev9",
    text: "Sono andata a The Cave per provare un box nuovo, di cui già avevo sentito parlare. Ho trovato un ambiente molto aperto, persone disponibili e accoglienti, e un livello davvero alto. Coach preparatissimi, box molto attrezzato e programmazione evidentemente studiata sul lungo periodo: mi sono sentita non solo subito accolta ma anche seguita con grande cura. Ho già acquistato l'abbonamento per il mese prossimo!",
    author: "Grazia C.",
    rating: 5,
    source: "trustpilot"
  },
  {
    id: "rev10",
    text: "Il box migliore, super consigliato sia per Hyrox che Crossfit! Esperienza super positiva, personale competente e sempre attento ai clienti. Paolo e Vasyl super disponibili, sempre pronti a soddisfare le esigenze di tutti noi promuovendo peraltro sempre tante iniziative carine. The Cave è casa, una seconda famiglia!",
    author: "Chiara",
    rating: 5,
    source: "trustpilot"
  },
  {
    id: "rev11",
    text: "Coach qualificati, ambiente familiare e il box è stupendo! Il miglior box di crossfit su Roma!",
    author: "Eleonora L.",
    rating: 5,
    source: "trustpilot"
  },
  {
    id: "rev12",
    text: "Frequento questo box di CrossFit da un po' di tempo e mi trovo davvero benissimo. L'ambiente è accogliente, pulito e ben organizzato, con una clientela rispettosa e piacevole che rende ogni allenamento ancora più motivante. I coach sono preparati, professionali e sempre disponibili: seguono gli atleti con attenzione, correggono la tecnica e adattano gli allenamenti in base al livello di ciascuno. Consiglio questo box a chiunque voglia allenarsi seriamente in un ambiente positivo, pulito e con istruttori davvero bravi.",
    author: "Salvatore S.",
    rating: 5,
    source: "trustpilot"
  },
  {
    id: "rev13",
    text: "Community da paura, spazi da paura, attrezzature da paura e coach super preparati, non inizia la giornata se non ci si va ad allenare tutti insieme al The Cave, bellissima realtà che ti sprona a fare sempre meglio e ti aiuta nella vita di tutti i giorni, insomma una grande famiglia, sempre ON FIRE.",
    author: "Emanuele P.",
    rating: 5,
    source: "trustpilot"
  },
  {
    id: "rev14",
    text: "Sono arrivata un anno fa e mi sono sentita subito a casa! I coach e le persone sono fantastiche! Ho sempre fatto Crossfit ma qui a The Cave ho provato anche Hyrox! Il box è super attrezzato e pulito. Entrare lì e woddare con gli altri è l'ora più bella della giornata.",
    author: "Talita T.",
    rating: 5,
    source: "trustpilot"
  },
  {
    id: "rev15",
    text: "Box grande e fornito, coach disponibili, ampia scelta di orari!",
    author: "Ludovica R.",
    rating: 5,
    source: "trustpilot"
  },
  {
    id: "rev16",
    text: "Ottimi coach, preparati e disponibili. Box grande, spazioso e ben attrezzato. Allenamenti sempre in linea con il Crossfit e l'Hyrox. Ogni giorno workout diversi e sfidanti.",
    author: "Angela E.",
    rating: 5,
    source: "trustpilot"
  },
  {
    id: "rev17",
    text: "Frequento il box da ormai quasi 3 anni e posso dire che è come se fosse una seconda casa, una seconda famiglia. Magari si entra spaventati, poi a poco a poco si progredisce, si diventa più bravi e si incontrano persone eccezionali, dai coach ai compagni di classe. Tutto diventa il momento più bello della giornata. Complimenti a tutti!",
    author: "Eugenio D.",
    rating: 5,
    source: "trustpilot"
  },
  {
    id: "rev18",
    text: "Frequento questo box da un anno e posso dire di aver trovato molto più di una semplice palestra. I coach sono preparati, qualificati e sempre attenti alla tecnica e alle esigenze di ogni atleta, indipendentemente dal livello di esperienza. Un box dove non sei un numero, vieni seguito con professionalità, disponibilità e passione. A questo si aggiunge lo spirito di community: fin dal primo giorno mi sono sentita accolta e parte di un gruppo che si sostiene, si motiva e cresce insieme.",
    author: "Erica S.",
    rating: 5,
    source: "trustpilot"
  },
  {
    id: "rev19",
    text: "I coach sono accoglienti e competenti, c'è tanta possibilità di crescita grazie all'aiuto perenne da parte loro. L'ambiente è accogliente e ci si inserisce velocemente nel gruppo. Gli orari dei corsi sono strategici nel corso della giornata, consiglio di provare sia CrossFit che Hyrox!",
    author: "Giorgia P.",
    rating: 5,
    source: "trustpilot"
  },
  {
    id: "rev20",
    text: "Box molto grande dotato di tutta la strumentazione necessaria, bravi i coach.",
    author: "Ilenia S.",
    rating: 5,
    source: "trustpilot"
  },
  {
    id: "rev21",
    text: "Bellissima esperienza, coach preparati, attrezzatura di prima scelta e persone accoglienti!",
    author: "Alessia N.",
    rating: 5,
    source: "trustpilot"
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
