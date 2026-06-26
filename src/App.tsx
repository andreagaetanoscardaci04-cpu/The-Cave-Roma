/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar.tsx';
import Stats from './components/Stats.tsx';
import MarqueeStrip, { HazardBanner } from './components/MarqueeStrip.tsx';
import LocationsList from './components/LocationsList.tsx';
import ProgramCards from './components/ProgramCards.tsx';
import GallerySection from './components/GallerySection.tsx';
import CoachSection from './components/CoachSection.tsx';
import TestimonialCarousel from './components/TestimonialCarousel.tsx';
import ScheduleGrid from './components/ScheduleGrid.tsx';
import PromoBlock from './components/PromoBlock.tsx';
import Footer from './components/Footer.tsx';
import { CONTACT_TEL_LINK, CONTACT_PHONE, REVIEWS } from './data.ts';
import { Star, ShieldAlert, Dumbbell, Flame, Compass } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-[radial-gradient(ellipse_140%_80%_at_50%_-10%,_#15140f_0%,_#070706_55%)] text-white min-h-screen font-sans antialiased overflow-x-hidden relative film-grain">

      {/* Sticky Header Nav */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden">
        {/* Background gym image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 filter grayscale contrast-125 brightness-[0.25]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000')`
          }}
        ></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-transparent to-black/50 z-0"></div>

        {/* Left industrial decoration line */}
        <div className="hidden lg:block absolute left-8 top-1/4 bottom-1/4 w-[1px] bg-white/10 z-10">
          <div className="absolute top-10 left-[-3px] w-1.5 h-1.5 bg-[#f2c200]"></div>
          <div className="absolute bottom-10 left-[-3px] w-1.5 h-1.5 bg-[#f2c200]"></div>
        </div>

        {/* Main centered content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center w-full py-8">
            <div className="space-y-5 md:space-y-7 animate-fade-in-up">

              {/* Google Rating Badge */}
              <div className="flex items-center justify-center">
                <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 backdrop-blur-sm">
                  <span className="font-display text-2xl text-brand-yellow leading-none">4.8</span>
                  <div className="flex flex-col items-start gap-1">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map((s) => (
                        <Star key={s} size={11} className="fill-brand-yellow text-brand-yellow" />
                      ))}
                    </div>
                    <span className="font-sans text-[9px] text-white/40 tracking-widest uppercase leading-none">Google Reviews</span>
                  </div>
                  <span className="text-white/20 text-sm">|</span>
                  <span className="font-sans text-[11px] text-white/50 tracking-wide">+100 recensioni</span>
                </div>
              </div>

              {/* THE CAVE Logo */}
              <div className="select-none py-2">
                <h1 className="font-display leading-[0.8] tracking-widest text-[#ffffff] uppercase flex flex-col items-center">
                  <span className="text-[clamp(80px,15vw,210px)] font-black text-white leading-none">
                    THE
                  </span>
                  <span className="text-[clamp(90px,17vw,240px)] font-black text-brand-yellow leading-none text-shadow-xl">
                    CAVE
                  </span>
                </h1>
              </div>

              {/* Subline */}
              <div className="max-w-3xl mx-auto border-t border-b border-white/10 py-4">
                <p className="font-sans text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-white/90">
                  900 m² • CrossFit® + HYROX • DUE SEDI A ROMA (MANDRIONE & CINECITTÀ)
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap max-w-2xl mx-auto">
                <a
                  href={CONTACT_TEL_LINK}
                  className="w-full sm:w-auto py-4 px-8 bg-brand-yellow text-near-black font-sans font-black text-sm tracking-widest uppercase btn-cut text-center hover:bg-white transition-all duration-300"
                >
                  PROVA GRATIS
                </a>
                <a
                  href="#sedi"
                  className="w-full sm:w-auto py-4 px-7 bg-near-black/70 border border-white/20 text-white font-sans font-black text-sm tracking-widest uppercase btn-cut text-center hover:bg-white hover:text-near-black hover:border-white transition-all duration-300"
                >
                  LE NOSTRE SEDI
                </a>
                <a
                  href="#coaches"
                  className="w-full sm:w-auto py-4 px-7 bg-near-black/70 border border-white/20 text-white font-sans font-black text-sm tracking-widest uppercase btn-cut text-center hover:bg-white hover:text-near-black hover:border-white transition-all duration-300"
                >
                  LO STAFF
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Mini Google Reviews Carousel — bottom of hero */}
        <div className="relative z-10 w-full overflow-hidden pb-10 md:pb-14">
          <style>{`
            @keyframes scrollHeroReviews {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-hero-reviews {
              display: flex;
              gap: 0.75rem;
              width: max-content;
              animation: scrollHeroReviews 55s linear infinite;
            }
            .animate-hero-reviews:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="absolute left-0 inset-y-0 w-10 md:w-20 bg-gradient-to-r from-[#070706] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 inset-y-0 w-10 md:w-20 bg-gradient-to-l from-[#070706] to-transparent z-10 pointer-events-none"></div>
          <div className="animate-hero-reviews px-3">
            {[...REVIEWS, ...REVIEWS].map((rev, idx) => (
              <div
                key={`hero-rev-${rev.id}-${idx}`}
                className="shrink-0 w-[230px] sm:w-[280px] bg-white/[0.04] border border-white/10 p-4 text-left"
              >
                <div className="flex gap-0.5 mb-2">
                  {[...Array(rev.rating)].map((_, s) => (
                    <Star key={s} size={11} className="fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                <p className="font-sans text-[11px] text-white/70 italic leading-relaxed mb-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  "{rev.text}"
                </p>
                <span className="font-sans text-[10px] text-white/40 uppercase tracking-wider">
                  {rev.author}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom seam */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/70 to-transparent z-10"></div>
      </section>

      {/* Yellow Marquee strip scrolling keywords */}
      <MarqueeStrip />

      {/* Stats Band Component */}
      <Stats />

      {/* About Split section: "Non è una palestra" */}
      <section id="box-philosophy" className="bg-[#0c0c0b] py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block - Statement & Description */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block">
              LA NOSTRA FILOSOFIA DI FORZA
            </span>
            
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase">
              NON È UNA <span className="text-outline-yellow">PALESTRA.</span>
            </h2>
            
            <p className="font-sans text-lg sm:text-xl font-bold text-white tracking-wide leading-relaxed">
              Il box The Cave elimina l'effimero, accoglie la pura prestazione. 
            </p>
            
            <div className="space-y-4 font-sans text-sm text-white/60 tracking-wide leading-relaxed">
              <p>
                Non troverai specchi decorativi, pavimentazioni scivolose o macchinari commerciali progettati per farti perdere tempo. Qui trovi bilancieri olimpionici Rogue®, bumper pesanti, pedane resistenti in gomma da 3 centimetri e la migliore attrezzatura BLOR® sul mercato.
              </p>
              <p>
                La nostra missione è costruire un fisico resiliente, flessibile ed efficiente preparando la mente alla fatica, alla disciplina e al superamento di ogni ostacolo. Che tu scelga il rig di CrossFit® o la pista aerobica di HYROX, ti aspetta una community unita, decisa e priva di fronzoli cosmetici.
              </p>
            </div>

            {/* Google Rating Verification Badge inside About */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="bg-[#070706] border border-[#f2c200]/30 p-4 shrink-0 flex items-center justify-center gap-3">
                <span className="text-3xl font-display text-brand-yellow">4.85</span>
                <div className="flex flex-col">
                  <div className="flex">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} size={12} className="fill-brand-yellow text-brand-yellow" />
                    ))}
                  </div>
                  <span className="font-sans text-[9px] tracking-wider text-white/50 uppercase mt-0.5">GOOGLE REVIEW RATING</span>
                </div>
              </div>
              <p className="font-sans text-xs text-white/40 uppercase tracking-widest leading-relaxed">
                Approvato da atleti di Roma. Certificazione di eccellenza nel CrossFit® e HYROX di livello agonistico.
              </p>
            </div>
          </div>

          {/* Right Block - Gym image and physical details */}
          <div className="lg:col-span-5 relative">
            <div className="border border-white/10 p-2 relative overflow-hidden group">
              {/* Corner industrial notches */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#f2c200] z-10"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#f2c200] z-10"></div>

              {/* Box Image */}
              <div className="relative h-96 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000" 
                  alt="Metabolic area at Rome Box"
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:brightness-105 duration-500 transition-all group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#070706]/20 group-hover:bg-transparent duration-300 transition-colors"></div>
              </div>
              
              {/* Overlay quote */}
              <div className="absolute bottom-6 inset-x-6 bg-[#070706]/90 border border-white/10 p-5 text-center">
                <span className="font-sans text-xs font-bold text-brand-yellow tracking-widest uppercase block mb-1">“ FORGIA IL TUO LIMITATORE ”</span>
                <span className="font-sans text-[10px] text-white/40 uppercase tracking-wider block">LA PREPARAZIONE MENTALE SUPERA OGNI FATICA FISICA.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Locations (Sedi) Component */}
      <LocationsList />

      {/* Programs (Programmi) Component */}
      <ProgramCards />

      {/* Gallery (La Cave in Foto) Component - placeholders until real photos are provided */}
      <GallerySection />

      {/* Testimonials Carousel Component */}
      <TestimonialCarousel />

      {/* Coaches Silhouette grid component */}
      <CoachSection />

      {/* Timetable (Orari) Grid Component */}
      <ScheduleGrid />

      {/* Armed forces discount Promo section */}
      <PromoBlock />

      {/* Final CALL TO ACTION: "Entra nella Cave" */}
      <section className="bg-near-black py-28 px-4 md:px-6 relative overflow-hidden text-center border-t border-white/5">
        
        {/* Soft premium yellow glow backdrop */}
        <div className="absolute inset-0 glow-yellow-radial pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-15 space-y-8">
          
          <span className="inline-block bg-brand-yellow text-near-black font-sans font-extrabold text-xs tracking-[0.3em] px-4 py-1.5 uppercase">
            TI PIACE SPINGERE PESANTE?
          </span>
          
          <h2 className="font-display text-5xl md:text-8xl tracking-tight leading-none text-white uppercase">
            ENTRA NELLA <br />
            <span className="text-shadow-md text-brand-yellow text-outline">THE CAVE</span>
          </h2>
          
          <p className="font-sans text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Prenota subito la tua lezione di prova gratuita. Scopri di persona perché non siamo la solita palestra ma una vera tana di agonismo, disciplina e rispetto sportivo.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={CONTACT_TEL_LINK}
              className="w-full sm:w-auto py-5 px-10 bg-brand-yellow text-near-black font-sans font-black text-base tracking-widest uppercase btn-cut text-shadow flex items-center justify-center gap-3 hover:bg-white transition-all duration-300"
            >
              PRENOTA ORA GRATIS
            </a>
            <a
              href="https://maps.google.com/?q=Via+del+Mandrione+105,+00181+Roma"
              className="w-full sm:w-auto py-5 px-8 bg-[#0c0c0b] border border-white/10 text-white font-sans font-bold text-sm tracking-wider uppercase btn-cut text-center hover:bg-white hover:text-near-black transition-all duration-300"
            >
              RAGGIUNGI MANDRIONE
            </a>
          </div>

          <div className="pt-6 text-white/30 font-sans text-xs tracking-widest uppercase">
            OPPURE CHIAMACI AL: <strong className="text-white">{CONTACT_PHONE}</strong>
          </div>

        </div>
      </section>

      {/* Footer component with addresses, phone and links */}
      <Footer />

    </div>
  );
}
