/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MARQUEE_KEYWORDS } from '../data.ts';

export default function MarqueeStrip() {
  // Let's duplicate the list to ensure there is enough content to loop seamlessly on huge screens
  const items = [...MARQUEE_KEYWORDS, ...MARQUEE_KEYWORDS, ...MARQUEE_KEYWORDS];

  return (
    <div className="relative w-full overflow-hidden bg-brand-yellow py-3 border-y border-near-black z-20 select-none">
      {/* We inject keyframes directly into a style tag for guaranteed smooth execution */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee-loop {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-loop:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="animate-marquee-loop flex items-center space-x-12">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-12 text-near-black font-display text-lg uppercase tracking-wider">
            <span>{item}</span>
            <span className="text-near-black/30 text-2xl">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export function HazardBanner() {
  return (
    <div className="w-full h-8 hazard-stripes border-y border-white/5 opacity-80 flex items-center justify-center">
      {/* Visual divider banner */}
    </div>
  );
}
