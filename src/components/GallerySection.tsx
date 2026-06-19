/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Camera } from 'lucide-react';

export default function GallerySection() {
  const slots = Array.from({ length: 6 });

  return (
    <section id="galleria" className="bg-[#0c0c0b] py-24 px-4 md:px-6 border-b border-white/5 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 md:mb-20 text-left">
          <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
            // LA CAVE IN FOTO
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase">
            DENTRO LA <span className="text-outline-yellow">CAVE</span>
          </h2>
        </div>

        {/* Horizontal scroll of vertical placeholder cards */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:h-2">
          {slots.map((_, idx) => (
            <div
              key={idx}
              className="premium-card snap-start shrink-0 w-[220px] sm:w-[260px] aspect-[3/4] bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-brand-yellow/30 transition-colors flex flex-col items-center justify-center gap-3 relative overflow-hidden"
            >
              <div className="absolute inset-0 glow-yellow-radial opacity-60"></div>
              <div className="p-4 rounded-full border border-white/10 text-white/30 relative z-10">
                <Camera size={22} />
              </div>
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase relative z-10">
                Foto in arrivo
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
