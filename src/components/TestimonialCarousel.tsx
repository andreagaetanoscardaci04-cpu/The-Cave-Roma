/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { REVIEWS } from '../data.ts';
import { Star, X } from 'lucide-react';

type Review = (typeof REVIEWS)[0];

export default function TestimonialCarousel() {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [touchPaused, setTouchPaused] = useState(false);

  const tripled = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  useEffect(() => {
    if (!selectedReview) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedReview(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedReview]);

  useEffect(() => {
    document.body.style.overflow = selectedReview ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedReview]);

  return (
    <section id="reviews" className="bg-[#0c0c0b] py-16 md:py-24 border-b border-white/5 relative overflow-hidden select-none">
      <style>{`
        @keyframes reviewsScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .reviews-track {
          animation: reviewsScroll 93s linear infinite;
        }
        .reviews-track.is-paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-10 md:mb-16 text-center md:text-left">
        <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
          I NOSTRI MEMBRI DICONO DI NOI
        </span>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase">
          VOCI DI <span className="text-outline-yellow">SUCCESSO</span>
        </h2>
        <p className="font-sans text-sm text-white/40 tracking-wider mt-4 max-w-lg mx-auto md:mx-0">
          Leggi le recensioni certificate dei nostri iscritti che hanno forgiato la propria mente e il proprio corpo a The Cave.
        </p>
      </div>

      {/* Scrollable track */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 inset-y-0 w-16 md:w-40 bg-gradient-to-r from-[#0c0c0b] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 md:w-40 bg-gradient-to-l from-[#0c0c0b] to-transparent z-10 pointer-events-none" />

        <div
          className={`reviews-track flex gap-8 py-4 w-max ${touchPaused ? 'is-paused' : ''}`}
          onTouchStart={() => setTouchPaused(true)}
          onTouchEnd={() => setTouchPaused(false)}
        >
          {tripled.map((rev, idx) => (
            <div
              key={`${rev.id}-${idx}`}
              className="premium-card w-[300px] sm:w-[400px] bg-near-black border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-brand-yellow/30 hover:bg-white/[0.01] transition-all shrink-0 cursor-pointer group"
              onClick={() => setSelectedReview(rev)}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-brand-yellow text-brand-yellow shrink-0" />
                    ))}
                  </div>
                  <span className="text-[9px] font-sans text-white/20 tracking-widest uppercase group-hover:text-brand-yellow/60 transition-colors">
                    ESPANDI
                  </span>
                </div>
                <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed italic mb-6 line-clamp-4">
                  "{rev.text}"
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-sm text-white uppercase tracking-wider">{rev.author}</h4>
                  <div className="flex items-center space-x-1.5 mt-0.5">
                    <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-mono text-[9px] text-[#2ecd6c] tracking-widest uppercase">VERIFICATO</span>
                  </div>
                </div>
                <span className="font-sans text-[10px] text-white/30 tracking-widest font-extrabold uppercase">GOOGLE REVIEW</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Review Modal */}
      {selectedReview && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="bg-[#0c0c0b] border border-white/20 p-8 md:p-10 max-w-lg w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-4 right-4 w-8 h-8 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all"
              aria-label="Chiudi"
            >
              <X size={16} />
            </button>
            <div className="flex items-center space-x-1.5 mb-6">
              {[...Array(selectedReview.rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-brand-yellow text-brand-yellow" />
              ))}
            </div>
            <p className="font-sans text-lg md:text-xl text-white leading-relaxed italic mb-8">
              "{selectedReview.text}"
            </p>
            <div className="border-t border-white/10 pt-6 flex items-center justify-between">
              <div>
                <h4 className="font-sans font-bold text-base text-white uppercase tracking-wider">
                  {selectedReview.author}
                </h4>
                <div className="flex items-center space-x-1.5 mt-1">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-mono text-[10px] text-[#2ecd6c] tracking-widest uppercase">RECENSIONE VERIFICATA</span>
                </div>
              </div>
              <span className="font-sans text-xs text-white/30 tracking-widest font-extrabold uppercase">Google</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
