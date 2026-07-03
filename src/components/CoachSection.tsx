/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { COACH_ROLES } from '../data.ts';
import { User } from 'lucide-react';

export default function CoachSection() {
  return (
    <section id="coaches" className="bg-near-black py-16 md:py-24 px-4 md:px-6 border-b border-white/5 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
            TEAM DI PROFESSIONISTI
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase">
            SQUADRA <span className="text-outline">DI FERRO</span>
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mt-4 mx-auto md:mx-0"></div>
        </div>

        {/* Coach Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COACH_ROLES.map((coach) => (
            <div 
              key={coach.id}
              className="bg-[#0c0c0b] border border-white/10 flex flex-col relative overflow-hidden group hover:border-[#f2c200]/30 transition-all duration-300"
            >
              {/* Graphic Silhouette Placeholder */}
              <div className="relative h-64 bg-[#141413] border-b border-white/10 flex flex-col items-center justify-between overflow-hidden">
                {/* Diagonal grid pattern background overlay */}
                <div className="absolute inset-0 opacity-15" style={{
                  backgroundImage: `linear-gradient(45deg, #070706 25%, transparent 25%), 
                                    linear-gradient(-45deg, #070706 25%, transparent 25%), 
                                    linear-gradient(45deg, transparent 75%, #070706 75%), 
                                    linear-gradient(-45deg, transparent 75%, #070706 75%)`,
                  backgroundSize: '16px 16px',
                  backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px'
                }}></div>

                {/* Animated scrolling industrial barcode lines in background */}
                <div className="absolute top-4 left-4 h-12 w-[1px] bg-[#f2c200]/20"></div>
                <div className="absolute top-4 left-6 h-8 w-[1px] bg-[#f2c200]/10"></div>
                <div className="absolute top-4 left-8 h-10 w-[1px] bg-[#f2c200]/15"></div>

                {/* Real-time rating badge mock */}
                <div className="absolute top-4 right-4 bg-[#070706] border border-brand-yellow/30 px-2 py-0.5 font-mono text-[9px] text-[#f2c200] uppercase tracking-widest">
                  SEC-L12
                </div>

                {/* Silhouette SVG */}
                <div className="mt-auto relative z-10 transition-transform duration-300 group-hover:scale-105">
                  <svg 
                    width="140" 
                    height="170" 
                    viewBox="0 0 100 100" 
                    className="text-[#1c1c1b] group-hover:text-brand-yellow/10 transition-colors duration-300"
                  >
                    {/* Abstract silhouette representing strong chest/shoulders */}
                    <path 
                      fill="currentColor" 
                      d="M50,22 C56.627,22 62,16.627 62,10 C62,3.373 56.627,-2 50,-2 C43.373,-2 38,3.373 38,10 C38,16.627 43.373,22 50,22 Z M14,103 L86,103 L80,50 C78,41 71,32 58,32 L42,32 C29,32 22,41 20,50 L14,103 Z" 
                    />
                    {/* Muscle details represented with technical lines */}
                    <path 
                      stroke="#070706" 
                      strokeWidth="1.5"
                      fill="none"
                      d="M30,32 L40,45 M70,32 L60,45"
                      className="opacity-40"
                    />
                  </svg>
                </div>

                {/* Large role text outlined in background */}
                <div className="absolute inset-x-0 bottom-2 text-center select-none pointer-events-none">
                  <span className="font-display text-4xl text-white/[0.02] tracking-tighter uppercase leading-none block">
                    THE CAVE
                  </span>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-2">
                    <span className="inline-block bg-brand-yellow text-near-black font-sans font-bold text-[10px] tracking-widest px-2.5 py-0.5 uppercase">
                      {coach.status}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-white tracking-tight uppercase mb-2 group-hover:text-brand-yellow transition-colors">
                    {coach.role}
                  </h3>
                  <p className="font-sans text-xs text-white/50 leading-relaxed tracking-wider">
                    {coach.desc}
                  </p>
                </div>

                {/* Underlined static text to represent high standards */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-white/30 font-sans text-[10px] tracking-widest uppercase">
                  <span>LIVELLO CERTIFICAZIONE</span>
                  <span className="text-brand-yellow/60 font-bold">L1/L2</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
