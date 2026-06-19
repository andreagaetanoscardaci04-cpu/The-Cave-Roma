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
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsList.map((stat, index) => (
          <div
            key={index}
            className="premium-card p-8 md:p-10 flex flex-col justify-between items-start bg-white/[0.02] border border-white/10 hover:border-brand-yellow/30 hover:bg-white/[0.04] transition-all group relative overflow-hidden"
          >
            {/* Corner Industrial Accent */}
            <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-[#f2c200]/20 group-hover:bg-brand-yellow transition-colors"></div>

            <div className="mb-6">
              <span className="font-sans text-xs tracking-[0.2em] text-white/50 block group-hover:text-brand-yellow transition-colors font-bold uppercase">
                {stat.label}
              </span>
            </div>
            
            <div>
              <div className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-none mb-2">
                {stat.value.includes("★") ? (
                  <span className="flex items-center gap-2.5">
                    4.85
                    <Star className="fill-brand-yellow text-brand-yellow w-7 h-7 md:w-8 md:h-8 inline" />
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
