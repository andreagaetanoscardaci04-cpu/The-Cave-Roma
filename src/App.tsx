/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar.tsx';
import Stats from './components/Stats.tsx';
import MarqueeStrip, { HazardBanner } from './components/MarqueeStrip.tsx';
import heroDesktopBg from './assets/hero-desktop.png';
import heroMobileBg from './assets/hero-mobile.png';
import LocationsList from './components/LocationsList.tsx';
import ProgramCards from './components/ProgramCards.tsx';
import GallerySection from './components/GallerySection.tsx';
import CoachSection from './components/CoachSection.tsx';
import TestimonialCarousel from './components/TestimonialCarousel.tsx';
import ScheduleGrid from './components/ScheduleGrid.tsx';
import PromoBlock from './components/PromoBlock.tsx';
import Footer from './components/Footer.tsx';
import { CONTACT_TEL_LINK, CONTACT_PHONE } from './data.ts';
import { Star, Dumbbell, Flame, Compass, MapPin, CalendarDays, Users } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-[radial-gradient(ellipse_140%_80%_at_50%_-10%,_#15140f_0%,_#070706_55%)] text-white min-h-screen font-sans antialiased overflow-x-hidden relative film-grain">

      {/* Sticky Header Nav */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col pt-20 overflow-hidden lg:relative lg:min-h-screen">

        {/* Desktop-only: absolute background image */}
        <picture className="hidden lg:block lg:absolute lg:inset-0 lg:w-full lg:h-full z-0">
          <img
            src={heroDesktopBg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-[60%_center] brightness-90"
          />
        </picture>
        {/* Desktop-only gradient overlays */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#070706] via-[#070706]/95 lg:via-[#070706]/80 lg:to-[#070706]/10 to-[#070706]/80 z-0"></div>
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#070706]/80 via-transparent to-transparent z-0"></div>

        {/* Main content — left aligned */}
        <div className="flex-1 flex items-center lg:relative lg:z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full py-8">
            <div className="max-w-xl space-y-6 md:space-y-7">

              {/* THE CAVE Logo */}
              <div className="select-none">
                <h1 className="font-display leading-[0.82] tracking-tight uppercase">
                  <span className="block text-[clamp(90px,16vw,220px)] font-black text-white leading-none">
                    THE
                  </span>
                  <span className="block text-[clamp(100px,18vw,250px)] font-black text-brand-yellow leading-none">
                    CAVE
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="font-sans text-sm font-bold tracking-[0.22em] text-white/90 uppercase">
                THE CAVE: BOX DI CROSSFIT & HYROX
              </p>

              {/* Stats pill */}
              <p className="font-sans text-xs font-bold tracking-widest text-white/50 uppercase">
                900+ m² • 2 SEDI A ROMA • CROSSFIT® • HYROX
              </p>

              {/* Body copy */}
              <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed">
                Allenamenti funzionali ad alta intensità. Community reale. Zero compromessi.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={CONTACT_TEL_LINK}
                  className="w-full sm:w-auto py-4 px-8 bg-brand-yellow text-near-black font-sans font-black text-sm tracking-widest uppercase btn-cut flex items-center justify-center gap-2.5 hover:bg-white transition-all duration-300"
                >
                  <CalendarDays size={16} />
                  PRENOTA UNA PROVA
                </a>
                <a
                  href="#sedi"
                  className="w-full sm:w-auto py-4 px-8 bg-near-black/50 border border-white/20 text-white font-sans font-black text-sm tracking-widest uppercase btn-cut flex items-center justify-center gap-2.5 hover:bg-white hover:text-near-black hover:border-white transition-all duration-300"
                >
                  <MapPin size={16} />
                  SCOPRI LE SEDI
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom info bar */}
        <div className="lg:relative lg:z-10 border-t border-white/10 bg-near-black/60 lg:backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0">

            {/* Sedi badge + label */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5">
                <MapPin size={12} className="text-brand-yellow shrink-0" />
                <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-brand-yellow">DUE SEDI A ROMA</span>
              </div>
              <span className="font-sans text-xs text-white/50 tracking-wide">Mandrione & Cinecittà</span>
            </div>

            {/* Stats — right side on desktop */}
            <div className="flex items-stretch gap-0 sm:ml-auto divide-x divide-white/10">
              <div className="pr-6 sm:pr-8 flex items-center gap-2.5">
                <Users size={18} className="text-brand-yellow shrink-0" />
                <span className="font-sans text-[9px] text-white/50 tracking-widest uppercase whitespace-nowrap leading-relaxed">COACH<br/>CERTIFICATI</span>
              </div>
              <div className="px-6 sm:px-8 flex items-center gap-2.5">
                <Dumbbell size={18} className="text-brand-yellow shrink-0" />
                <span className="font-sans text-[9px] text-white/50 tracking-widest uppercase whitespace-nowrap leading-relaxed">ROGUE® /<br/>BLOR®</span>
              </div>
              <div className="pl-6 sm:pl-8 flex items-center gap-2.5">
                <Star size={16} className="fill-brand-yellow text-brand-yellow shrink-0" />
                <div>
                  <span className="font-display text-base text-brand-yellow block leading-none">4.85</span>
                  <span className="font-sans text-[9px] text-white/50 tracking-widest uppercase whitespace-nowrap">SU GOOGLE<br/>OLTRE 200 RECENSIONI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only: full-width photo below info bar */}
        <div className="block lg:hidden">
          <img
            src={heroMobileBg}
            alt=""
            aria-hidden="true"
            className="w-full"
          />
        </div>

        {/* Hazard stripe */}
        <div className="lg:relative lg:z-10 h-2.5 hazard-stripes opacity-80"></div>

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

      {/* Community & Events Section */}
      <section id="community" className="bg-near-black py-24 px-4 md:px-6 border-b border-white/5 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto">

          <div className="mb-14 text-center md:text-left">
            <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
              PEOPLE FIRST
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase">
              LA NOSTRA <span className="text-outline-yellow">COMMUNITY</span>
            </h2>
            <div className="w-24 h-1 bg-brand-yellow mt-4 mx-auto md:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5 space-y-5">
              <p className="font-sans text-lg sm:text-xl font-bold text-white tracking-wide leading-relaxed">
                A The Cave non ci si allena da soli.
              </p>
              <div className="space-y-4 font-sans text-sm text-white/60 tracking-wide leading-relaxed">
                <p>
                  La community è il cuore del box. Atleti di ogni livello, dal principiante assoluto all'agonista, condividono spazio, sudore e progressi. Qui si entra come nuovi e si esce come famiglia.
                </p>
                <p>
                  Organizziamo eventi regolari, sessioni a tema e gare interne per mantenere alta la motivazione e rinsaldare il legame tra i membri. Non è marketing: è il modo in cui funzionano i veri box CrossFit.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { Icon: Dumbbell, label: "WOD SOCIALI", desc: "Sessioni di gruppo speciali con WOD tematici e sfide collettive aperte a tutti i livelli." },
                { Icon: Flame, label: "GARE INTERNE", desc: "Competizioni amichevoli mensili per misurare i progressi e alimentare l'agonismo sano." },
                { Icon: Compass, label: "DROP-IN WELCOME", desc: "Atleti visitatori sempre benvenuti. Il tuo network di box si estende fino a Roma." }
              ].map(({ Icon, label, desc }, idx) => (
                <div key={idx} className="bg-[#0c0c0b] border border-white/10 p-6 hover:border-brand-yellow/30 transition-colors group">
                  <div className="mb-4 w-10 h-10 bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center group-hover:bg-brand-yellow/20 transition-colors">
                    <Icon size={20} className="text-brand-yellow" />
                  </div>
                  <h4 className="font-display text-lg text-white uppercase mb-2 tracking-tight group-hover:text-brand-yellow transition-colors">
                    {label}
                  </h4>
                  <p className="font-sans text-xs text-white/50 leading-relaxed tracking-wider">
                    {desc}
                  </p>
                </div>
              ))}
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

      {/* Convenzioni — sconto Forze Armate e Forze dell'Ordine */}
      <PromoBlock />

      {/* Affiliazioni ufficiali */}
      <section id="affiliazioni" className="bg-[#0c0c0b] py-20 px-4 md:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
              CERTIFICAZIONI E PARTNERSHIP
            </span>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-none text-white uppercase">
              AFFILIAZIONI <span className="text-outline-yellow">UFFICIALI</span>
            </h2>
            <div className="w-24 h-1 bg-brand-yellow mt-4 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="border border-white/10 p-8 text-center hover:border-brand-yellow/40 transition-colors group">
              <div className="w-16 h-16 bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-yellow/20 transition-colors">
                <span className="font-display text-xl text-brand-yellow leading-none">CF®</span>
              </div>
              <h4 className="font-display text-2xl text-white uppercase mb-3">CrossFit® Affiliate</h4>
              <p className="font-sans text-xs text-white/40 tracking-wider leading-relaxed">
                Box affiliato ufficiale CrossFit® LLC. Programmazione, standard e attrezzatura certificati.
              </p>
            </div>
            <div className="border border-white/10 p-8 text-center hover:border-brand-yellow/40 transition-colors group">
              <div className="w-16 h-16 bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-yellow/20 transition-colors">
                <span className="font-display text-xl text-brand-yellow leading-none">HRX</span>
              </div>
              <h4 className="font-display text-2xl text-white uppercase mb-3">HYROX Partner Box</h4>
              <p className="font-sans text-xs text-white/40 tracking-wider leading-relaxed">
                Partner Box ufficiale HYROX GmbH. Allenamento specifico race-ready per le gare ufficiali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer component with addresses, phone and links */}
      <Footer />

    </div>
  );
}
