/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TIMETABLES } from '../data.ts';
import { Calendar, Clock, AlertTriangle } from 'lucide-react';

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
              className="bg-[#0c0c0b] border border-white/10 flex flex-col justify-between group hover:border-brand-yellow/30 transition-all duration-300"
            >
              {/* Header Box */}
              <div>
                <div className="bg-white/[0.02] border-b border-white/10 p-6 flex items-center justify-between group-hover:bg-brand-yellow/[0.01] transition-colors">
                  <h3 className="font-display text-2xl tracking-wide text-white uppercase group-hover:text-brand-yellow transition-colors">
                    {table.programName}
                  </h3>
                  <Calendar size={18} className="text-brand-yellow/70" />
                </div>

                {/* Day Groups inside this category */}
                <div className="p-6 space-y-6">
                  {table.schedules.map((schedule, sIdx) => (
                    <div key={sIdx} className="space-y-3">
                      <span className="font-sans text-xs font-bold tracking-widest text-[#f2c200]/80 uppercase block">
                        {schedule.dayGroup}
                      </span>
                      
                      {/* Times list in a beautiful grid of slots */}
                      <div className="grid grid-cols-3 gap-2">
                        {schedule.times.map((time, tIdx) => (
                          <div 
                            key={tIdx} 
                            className="bg-white/[0.01] border border-white/5 py-2.5 px-3 text-center hover:bg-brand-yellow/10 hover:border-brand-yellow/30 transition-all flex items-center justify-center space-x-1.5"
                          >
                            <Clock size={11} className="text-white/30 shrink-0" />
                            <span className="font-mono text-xs font-bold text-white tracking-wide">
                              {time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Information Note */}
              {table.infoNotes && (
                <div className="p-6 bg-white/[0.01] border-t border-white/5 mx-6 mb-6 flex items-start gap-2.5">
                  <AlertTriangle size={15} className="text-brand-yellow shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-white/40 leading-relaxed tracking-wider">
                    {table.infoNotes}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
