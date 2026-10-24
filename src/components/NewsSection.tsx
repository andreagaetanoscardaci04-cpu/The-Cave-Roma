/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Megaphone, CalendarDays, Clock, MapPin, PhoneCall, Award } from 'lucide-react';
import workshopPoster from '../assets/hyrox-workshop.jpeg';

const STATIONS = ['Sled Push', 'Sled Pull', 'SkiErg', 'RowErg', 'Wall Balls'];

const PHONES = [
  { label: '+39 339 643 8066', href: 'tel:+393396438066' },
  { label: '+39 342 862 5605', href: 'tel:+393428625605' },
];

export default function NewsSection() {
  return (
    <section id="news" className="bg-near-black py-16 md:py-24 px-4 md:px-6 relative border-b border-white/5 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent" />
      <div className="absolute inset-0 glow-yellow-radial opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        <div className="mb-10 md:mb-14 text-center md:text-left">
          <span className="inline-flex items-center gap-2 font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase mb-3">
            <Megaphone size={14} />
            NEWS DAL BOX
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase">
            HYROX <span className="text-outline-yellow">Technical Workshop</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Locandina */}
          <div className="lg:col-span-5 relative">
            <div className="border border-white/10 p-2 relative">
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-yellow z-10" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand-yellow z-10" />
              <img
                src={workshopPoster}
                alt="Locandina HYROX Technical Workshop — 7 novembre, The Cave Mandrione"
                loading="lazy"
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Contenuto */}
          <div className="lg:col-span-7 space-y-8">

            <div className="space-y-4">
              <p className="font-display text-3xl md:text-4xl text-white tracking-tight leading-tight uppercase">
                La tua prossima performance <span className="text-brand-yellow">parte dalla tecnica.</span>
              </p>
              <p className="font-sans text-base text-white/70 tracking-wide leading-relaxed">
                Il 7 novembre arriva a The Cave l'HYROX Technical Workshop: una giornata per lavorare sui dettagli che fanno la differenza in gara, con uno dei migliori atleti mondiali come ospite docente.
              </p>
            </div>

            {/* Data, orario, luogo */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-white/10 bg-[#0c0c0b]">
              {[
                { Icon: CalendarDays, label: 'Data', value: '7 Novembre' },
                { Icon: Clock, label: 'Orario', value: '9:00 – 17:00' },
                { Icon: MapPin, label: 'Dove', value: 'Via del Mandrione 105' },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="p-5 flex items-center gap-3">
                  <Icon size={18} className="text-brand-yellow shrink-0" />
                  <div>
                    <span className="font-sans text-[9px] tracking-[0.25em] text-white/40 uppercase block">{label}</span>
                    <span className="font-display text-lg text-white uppercase leading-tight">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Ospite docente */}
            <div className="flex items-center gap-4 border border-brand-yellow/30 bg-brand-yellow/5 p-5">
              <div className="w-10 h-10 bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center shrink-0">
                <Award size={18} className="text-brand-yellow" />
              </div>
              <div>
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-brand-yellow uppercase block mb-0.5">Ospite docente</span>
                <span className="font-display text-xl text-white uppercase leading-tight">Uno dei migliori atleti mondiali</span>
              </div>
            </div>

            {/* Stazioni */}
            <div className="space-y-3">
              <span className="font-sans text-xs font-bold tracking-[0.3em] text-white/50 uppercase block">
                Focus su 5 stazioni
              </span>
              <div className="flex flex-wrap gap-2">
                {STATIONS.map((station) => (
                  <span
                    key={station}
                    className="px-4 py-2 border border-white/15 bg-white/[0.03] font-sans text-xs font-bold tracking-widest text-white uppercase"
                  >
                    {station}
                  </span>
                ))}
              </div>
              <p className="font-sans text-sm text-white/60 tracking-wide leading-relaxed pt-1">
                Dalla tecnica alla pratica, con una <strong className="text-white">simulazione HYROX</strong> per mettere alla prova quanto appreso.
              </p>
            </div>

            {/* Iscrizioni */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-block bg-brand-yellow text-near-black font-sans font-extrabold text-xs tracking-[0.3em] px-3 py-1 uppercase">
                  Posti limitati
                </span>
                <span className="font-sans text-xs text-white/50 tracking-widest uppercase">Info e iscrizioni</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                {PHONES.map(({ label, href }, idx) => (
                  <a
                    key={href}
                    href={href}
                    className={`py-4 px-6 font-sans font-black text-sm tracking-widest uppercase btn-cut flex items-center justify-center gap-2 transition-all duration-300 ${
                      idx === 0
                        ? 'bg-brand-yellow text-near-black hover:bg-white'
                        : 'bg-near-black/50 border border-white/20 text-white hover:bg-white hover:text-near-black hover:border-white'
                    }`}
                  >
                    <PhoneCall size={15} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
