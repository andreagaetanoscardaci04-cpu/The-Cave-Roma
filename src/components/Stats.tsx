/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star } from 'lucide-react';

export default function Stats() {
  const statsList = [
    { value: "900 m²+", label: "SPAZIO TOTALE", desc: "Attrezzato Rogue e BLOR" },
    { value: "12", label: "COACH CERTIFICATI", desc: "Esperti CrossFit® e HYROX L-1 & L-2" },
    { value: "2 SEDI", label: "LOCATION A ROMA", desc: "Mandrione + Cinecittà" },
    { value: "4.85 ★", label: "RATING GOOGLE", desc: "Punteggio di eccellenza basato su reviews" }
  ];

  return (
    <section className="bg-near-black border-y border-white/10" id="stats-band">
      <div className="max-w-infinite mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-white/10 sm:divide-y-0 sm:divide-x divide-white/10">
        {statsList.map((stat, index) => (
          <div 
            key={index} 
            className="p-8 md:p-12 flex flex-col justify-between items-start hover:bg-white/[0.02] transition-colors group relative overflow-hidden"
          >
            {/* Corner Industrial Accent */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#f2c200]/20 group-hover:border-brand-yellow transition-colors"></div>
            
            <div className="mb-6">
              <span className="font-sans text-xs tracking-[0.2em] text-white/50 block group-hover:text-brand-yellow transition-colors font-bold uppercase">
                {stat.label}
              </span>
            </div>
            
            <div>
              <div className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-none mb-2">
                {stat.value.includes("★") ? (
                  <span className="flex items-center gap-2">
                    4.85
                    <Star className="fill-brand-yellow text-brand-yellow w-8 h-8 inline" />
                  </span>
                ) : (
                  stat.value
                )}
              </div>
              <p className="font-sans text-sm text-white/40 tracking-wider">
                {stat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
