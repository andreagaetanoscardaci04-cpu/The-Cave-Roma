/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TIMETABLES } from '../data.ts';
import { Calendar } from 'lucide-react';

export default function ScheduleGrid() {
  return (
    <section id="orari" className="bg-near-black py-24 px-4 md:px-6 border-b border-white/5 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 md:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
              I NOSTRI TURNI GIORNALIERI
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase">
              ORARI RUSH <span className="text-outline">HOUR</span>
            </h2>
            <div className="w-24 h-1 bg-brand-yellow mt-4 mx-auto md:mx-0"></div>
          </div>
          <p className="font-sans text-sm text-white/40 tracking-wider max-w-sm text-center md:text-right">
            Consulta gli orari delle nostre classi e programma i tuoi allenamenti settimanali. Prenotazioni rapide tramite l'app ufficiale dei box.
          </p>
        </div>

        {/* 3 Columns Grid for timetables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TIMETABLES.map((table, idx) => (
            <div
              key={idx}
              className="premium-card bg-[#0c0c0b] border border-white/10 flex flex-col overflow-hidden group hover:border-brand-yellow/30 transition-all duration-300"
            >
              {/* Header Box */}
              <div className="bg-white/[0.02] border-b border-white/10 p-6 flex items-center justify-between group-hover:bg-brand-yellow/[0.01] transition-colors">
                <h3 className="font-display text-2xl tracking-wide text-brand-yellow uppercase">
                  {table.programName}
                </h3>
                <Calendar size={18} className="text-brand-yellow/70" />
              </div>

              {/* Day Groups inside this category */}
              <div className="flex-1">
                {table.schedules.map((schedule, sIdx) => (
                  <div key={sIdx}>
                    {schedule.dayGroup && (
                      <span className="font-sans text-[11px] font-bold tracking-widest text-white/40 uppercase block px-6 pt-5 pb-2">
                        {schedule.dayGroup}
                      </span>
                    )}
                    <ul className="divide-y divide-white/5">
                      {schedule.times.map((time, tIdx) => (
                        <li
                          key={tIdx}
                          className="px-6 py-3 font-mono text-sm tracking-wider text-white/80 hover:bg-brand-yellow/5 transition-colors"
                        >
                          {time}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Weekend Highlight Bar */}
              {table.weekendNote && (
                <div className="border-t-2 border-brand-yellow bg-brand-yellow/10 px-6 py-3 text-xs font-black uppercase tracking-widest text-brand-yellow">
                  {table.weekendNote}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
