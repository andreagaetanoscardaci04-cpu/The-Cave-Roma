/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PROGRAMS } from '../data.ts';
import { ArrowUpRight, Check } from 'lucide-react';

export default function ProgramCards() {
  return (
    <section id="programmi" className="bg-[#0c0c0b] py-24 px-4 md:px-6 border-b border-white/5 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 md:mb-20 text-right md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
              I NOSTRI CORSI / ATTIVITÀ
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase">
              PROGRAMMI DI <span className="text-outline-yellow">FORZA</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-white/40 tracking-wider max-w-md">
            Preparazione atletica, disciplina mentale e macchinari d'elite per aiutarti a superare ogni barriera fisica.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAMS.map((prog, idx) => (
            <div 
              key={prog.id}
              className="bg-near-black border border-white/10 p-8 md:p-10 flex flex-col justify-between group relative overflow-hidden hover:border-[#f2c200]/30 transition-colors"
            >
              {/* Massive subtle background index number */}
              <div className="absolute -bottom-10 -right-4 font-display text-[150px] leading-none text-white/[0.02] select-none pointer-events-none group-hover:text-brand-yellow/[0.03] transition-colors">
                0{idx + 1}
              </div>

              {/* Angle industrial accent */}
              <div className="absolute top-0 right-0 w-8 h-[2px] hazard-stripes"></div>

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-3xl md:text-4xl text-white tracking-tight uppercase group-hover:text-brand-yellow transition-colors">
                    {prog.title}
                  </h3>
                  <div className="p-2 border border-white/10 text-brand-yellow rounded-none group-hover:border-brand-yellow group-hover:bg-brand-yellow group-hover:text-near-black transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Quote */}
                <p className="font-sans text-xs font-bold tracking-widest text-[#f2c200]/80 uppercase mb-4">
                  “ {prog.quote} ”
                </p>

                {/* Description */}
                <p className="font-sans text-sm text-white/50 tracking-wide leading-relaxed mb-6">
                  {prog.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {prog.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <div className="bg-[#f2c200]/10 border border-[#f2c200]/30 p-0.5 mt-0.5">
                        <Check className="text-brand-yellow" size={12} />
                      </div>
                      <span className="font-sans text-xs font-semibold tracking-wide text-white/80 uppercase">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Decoration */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="font-sans text-[10px] tracking-widest text-white/30 uppercase">
                  ATTREZZATURE D'ELITE Rogue & BLOR
                </span>
                <span className="font-sans text-xs tracking-widest text-brand-yellow font-bold uppercase group-hover:underline cursor-pointer">
                  INFO CORSO
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
