/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BOX_LOCATIONS, CONTACT_TEL_LINK } from '../data.ts';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

export default function LocationsList() {
  return (
    <section id="sedi" className="bg-near-black py-24 px-4 md:px-6 border-b border-white/5 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 md:mb-20 text-left relative">
          <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
            LE NOSTRE SEDI / BOX AFFILIATI
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase">
            DUE <span className="text-outline">BOX</span> SUPERIORI
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mt-4"></div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {BOX_LOCATIONS.map((box) => (
            <div
              key={box.id}
              className="premium-card bg-[#0e0e0d] border border-white/10 flex flex-col relative overflow-hidden group hover:border-[#f2c200]/40 transition-colors"
            >
              {/* Image Container with hover scale */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={box.image}
                  alt={box.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0d] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Text Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-2">
                    {box.size} · {box.programLabel}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl text-white tracking-tight uppercase mb-4 group-hover:text-brand-yellow transition-colors">
                    {box.name}
                  </h3>
                  <p className="font-sans text-sm text-white/50 tracking-wide leading-relaxed mb-6">
                    {box.description}
                  </p>
                  
                  {/* Address Box */}
                  <div className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-4 mb-8">
                    <MapPin className="text-brand-yellow shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-sans text-xs tracking-wider text-white/40 block">INDIRIZZO</span>
                      <span className="font-sans text-sm font-semibold tracking-wide text-white">{box.address}, {box.postalCode} Roma</span>
                    </div>
                  </div>
                </div>

                {/* Brutalist Button Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                  <a
                    href={box.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-5 border border-white/20 text-white font-sans font-bold text-sm tracking-wider uppercase text-center btn-cut flex items-center justify-center gap-2 hover:bg-white hover:text-near-black hover:border-white transition-all duration-200"
                  >
                    <ExternalLink size={15} />
                    INDICAZIONI MAPS
                  </a>
                  <a
                    href={CONTACT_TEL_LINK}
                    className="py-3 px-5 bg-brand-yellow text-near-black font-sans font-bold text-sm tracking-wider uppercase text-center btn-cut flex items-center justify-center gap-2 hover:bg-white transition-all duration-200"
                  >
                    <Phone size={15} />
                    CHIAMA ORA
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
