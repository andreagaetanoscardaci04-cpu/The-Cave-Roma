/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { REVIEWS } from '../data.ts';
import { Star } from 'lucide-react';

export default function TestimonialCarousel() {
  // Triple the items to make sure it fills the screen width of even super-wide monitors seamlessly before looping.
  const tripledReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="bg-[#0c0c0b] py-24 border-b border-white/5 relative overflow-hidden select-none">
      {/* Absolute linear layout elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16 text-center md:text-left">
        <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
          I NOSTRI MEMBRI DICONO DI NOI
        </span>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase">
          VOCI DI <span className="text-outline-yellow">SUCCESSO</span>
        </h2>
        <p className="font-sans text-sm text-white/40 tracking-wider mt-4 max-w-lg">
          Leggi le recensioni certificate dei nostri iscritti che hanno forgiato la propria mente e il proprio corpo a The Cave.
        </p>
      </div>

      {/* Styled Inline CSS for Perfect Testimonial Scrolling Carousel */}
      <style>{`
        @keyframes scrollHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-scroll-reviews {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: scrollHorizontal 45s linear infinite;
        }
        .animate-scroll-reviews:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Scrolling Area */}
      <div className="w-full overflow-hidden py-4 premium-carousel-container relative">
        {/* Soft edge fade overlays */}
        <div className="absolute left-0 inset-y-0 w-16 md:w-40 bg-gradient-to-r from-[#0c0c0b] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 inset-y-0 w-16 md:w-40 bg-gradient-to-l from-[#0c0c0b] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-scroll-reviews px-4">
          {tripledReviews.map((rev, idx) => (
            <div 
              key={`${rev.id}-${idx}`}
              className="w-[300px] sm:w-[400px] bg-near-black border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-brand-yellow/30 hover:bg-white/[0.01] transition-all shrink-0 relative"
            >
              {/* Corner industrial touch */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-brand-yellow/10 border-t border-r border-[#f2c200]"></div>

              <div>
                {/* Gold Stars */}
                <div className="flex items-center space-x-1 mb-5">
                  {[...Array(rev.rating)].map((_, sIdx) => (
                    <Star key={sIdx} size={15} className="fill-brand-yellow text-brand-yellow shrink-0" />
                  ))}
                </div>

                {/* Testimony */}
                <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed italic mb-6">
                  “{rev.text}”
                </p>
              </div>

              {/* Author & platform */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-sm text-white uppercase tracking-wider">
                    {rev.author}
                  </h4>
                  <div className="flex items-center space-x-1.5 mt-0.5">
                    <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="font-mono text-[9px] text-[#2ecd6c] tracking-widest uppercase">VERIFICATO</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-sans text-[10px] text-white/30 tracking-widest font-extrabold uppercase block">
                    GOOGLE REVIEW
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
