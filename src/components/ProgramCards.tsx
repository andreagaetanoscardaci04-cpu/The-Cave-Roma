/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PROGRAMS, CONTACT_TEL_LINK } from '../data.ts';
import { ProgramInfo } from '../types.ts';
import { ArrowUpRight, Check, X, Clock } from 'lucide-react';

export default function ProgramCards() {
  const [activeProgram, setActiveProgram] = useState<ProgramInfo | null>(null);

  const classiOrdinarie = PROGRAMS.filter(p => ['crossfit', 'hyrox', 'opengym'].includes(p.id));
  const programmazioni = PROGRAMS.filter(p => p.id === 'personaltraining');

  const renderCard = (prog: ProgramInfo, idx: number) => (
    <div
      key={prog.id}
      className="premium-card bg-near-black border border-white/10 p-8 md:p-10 flex flex-col justify-between group relative overflow-hidden hover:border-[#f2c200]/30 transition-colors"
    >
      <div className="absolute -bottom-10 -right-4 font-display text-[150px] leading-none text-white/[0.02] select-none pointer-events-none group-hover:text-brand-yellow/[0.03] transition-colors">
        0{idx + 1}
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-3xl md:text-4xl text-white tracking-tight uppercase group-hover:text-brand-yellow transition-colors">
            {prog.title}
          </h3>
          <button
            type="button"
            onClick={() => setActiveProgram(prog)}
            aria-label={`Più info su ${prog.title}`}
            className="p-2.5 border border-white/10 text-brand-yellow rounded-full group-hover:border-brand-yellow group-hover:bg-brand-yellow group-hover:text-near-black transition-all"
          >
            <ArrowUpRight size={18} />
          </button>
        </div>

        <p className="font-sans text-xs font-bold tracking-widest text-[#f2c200]/80 uppercase mb-4">
          " {prog.quote} "
        </p>

        <p className="font-sans text-sm text-white/50 tracking-wide leading-relaxed mb-6">
          {prog.description}
        </p>

        <ul className="space-y-3 mb-8">
          {prog.features.map((feat, fIdx) => (
            <li key={fIdx} className="flex items-start gap-2.5">
              <div className="bg-[#f2c200]/10 border border-[#f2c200]/30 rounded-full p-0.5 mt-0.5">
                <Check className="text-brand-yellow" size={12} />
              </div>
              <span className="font-sans text-xs font-semibold tracking-wide text-white/80 uppercase">
                {feat}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6 border-t border-white/5 flex items-center justify-between">
        <span className="font-sans text-[10px] tracking-widest text-white/30 uppercase">
          ATTREZZATURE D'ELITE Rogue & BLOR
        </span>
        <button
          type="button"
          onClick={() => setActiveProgram(prog)}
          className="font-sans text-xs tracking-widest text-brand-yellow font-bold uppercase hover:underline cursor-pointer"
        >
          INFO CORSO
        </button>
      </div>
    </div>
  );

  return (
    <section id="programmi" className="bg-[#0c0c0b] py-16 md:py-24 px-4 md:px-6 border-b border-white/5 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto">

        {/* Testata principale sezione */}
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
            COSA OFFRIAMO
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase">
            I NOSTRI <span className="text-outline-yellow">CORSI</span>
          </h2>
        </div>

        {/* Separatore visivo */}
        <div className="w-full h-px bg-white/5 mb-12 md:mb-20" />

        {/* ---- 01: Classi Ordinarie ---- */}
        <div className="mb-16 md:mb-28">
          <div className="mb-8 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
                01 / CLASSI ORDINARIE
              </span>
              <h3 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight leading-none text-white uppercase">
                ATTIVITÀ <span className="text-outline-yellow">CORSI</span>
              </h3>
              <p className="font-sans text-sm text-white/40 tracking-wider leading-relaxed mt-4 max-w-lg">
                Le classi regolari del box: CrossFit, HYROX e Open Gym. Programmate dai nostri coach certificati, aperte a ogni livello.
              </p>
            </div>
            <a
              href="#orari"
              className="inline-flex items-center gap-2 py-3 px-6 border border-brand-yellow/50 text-brand-yellow font-sans font-bold text-sm tracking-widest uppercase btn-cut hover:bg-brand-yellow hover:text-near-black transition-all duration-200 shrink-0 self-start md:self-auto"
            >
              <Clock size={15} />
              VEDI GLI ORARI
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classiOrdinarie.map((prog, idx) => renderCard(prog, idx))}
          </div>
        </div>

        {/* Separatore visivo tra le due sottosezioni */}
        <div className="w-full h-px bg-white/5 mb-16 md:mb-28" />

        {/* ---- 02: Programmi Personalizzati ---- */}
        <div>
          <div className="mb-8 md:mb-14">
            <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
              02 / PROGRAMMI PERSONALIZZATI
            </span>
            <h3 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight leading-none text-white uppercase">
              PERCORSI <span className="text-outline-yellow">SU MISURA</span>
            </h3>
            <p className="font-sans text-sm text-white/40 tracking-wider leading-relaxed mt-4 max-w-lg">
              Personal Training e programmazioni dedicate per chi vuole un percorso costruito sui propri obiettivi specifici.
            </p>
          </div>

          <div className="max-w-2xl">
            {programmazioni.map((prog, idx) => renderCard(prog, idx))}
          </div>
        </div>

      </div>

      {/* Program Info Modal */}
      {activeProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveProgram(null)}
        >
          <div
            className="premium-card relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-[#0c0c0b] border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={activeProgram.image}
                alt={activeProgram.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b] via-[#0c0c0b]/20 to-transparent"></div>
              <button
                type="button"
                onClick={() => setActiveProgram(null)}
                aria-label="Chiudi"
                className="absolute top-4 right-4 p-2 rounded-full bg-near-black/70 border border-white/10 text-white hover:bg-brand-yellow hover:text-near-black transition-all"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-8">
              <h3 className="font-display text-4xl text-white tracking-tight uppercase mb-3">
                {activeProgram.title}
              </h3>
              <p className="font-sans text-xs font-bold tracking-widest text-[#f2c200]/80 uppercase mb-4">
                " {activeProgram.quote} "
              </p>

              <div className="space-y-4 mb-6">
                {activeProgram.longDescription.map((para, pIdx) => (
                  <p key={pIdx} className="font-sans text-sm text-white/60 tracking-wide leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {activeProgram.details.map((d, dIdx) => (
                  <div key={dIdx} className="bg-white/[0.02] border border-white/5 p-3">
                    <span className="font-sans text-[10px] tracking-widest text-white/40 uppercase block mb-1">
                      {d.label}
                    </span>
                    <span className="font-sans text-xs font-bold text-white tracking-wide">
                      {d.value}
                    </span>
                  </div>
                ))}
              </div>

              <ul className="space-y-3 mb-8">
                {activeProgram.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <div className="bg-[#f2c200]/10 border border-[#f2c200]/30 rounded-full p-0.5 mt-0.5">
                      <Check className="text-brand-yellow" size={12} />
                    </div>
                    <span className="font-sans text-xs font-semibold tracking-wide text-white/80 uppercase">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={CONTACT_TEL_LINK}
                className="w-full py-4 bg-brand-yellow text-near-black font-sans font-bold text-sm text-center tracking-widest uppercase btn-cut flex items-center justify-center gap-2 hover:bg-white transition-all duration-200"
              >
                PRENOTA UNA PROVA
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
