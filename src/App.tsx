/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import BookingModal from './components/BookingModal.tsx';
import LanguagePrompt from './components/LanguagePrompt.tsx';
import MarqueeStrip, { HazardBanner } from './components/MarqueeStrip.tsx';
import heroDesktopBg from './assets/hero-desktop.webp';
import heroMobileBg from './assets/hero-mobile.webp';
import theCaveLogo from './assets/the-cave-logo.webp';
import boxPhoto from './assets/box-photo.jpg';
import wodSocialePhoto from './assets/wod-sociale.jpeg';
import fotoGruppoPhoto from './assets/foto-gruppo.jpeg';
import manifestazioneInternaPhoto from './assets/manifestazione-interna.jpeg';
import LocationsList from './components/LocationsList.tsx';
import ProgramCards from './components/ProgramCards.tsx';
import GallerySection from './components/GallerySection.tsx';
import CoachSection from './components/CoachSection.tsx';
import TestimonialCarousel from './components/TestimonialCarousel.tsx';
import ScheduleGrid from './components/ScheduleGrid.tsx';
import PromoBlock from './components/PromoBlock.tsx';
import NewsSection from './components/NewsSection.tsx';
import AdditionalServices from './components/AdditionalServices.tsx';
import Footer from './components/Footer.tsx';
import { CONTACT_TEL_LINK, CONTACT_PHONE } from './data.ts';
import { Star, Dumbbell, Flame, Compass, MapPin, CalendarDays, Users, Smartphone } from 'lucide-react';
import { PLAY_STORE_URL, APP_STORE_URL } from './data.ts';
import { useLanguage } from './i18n.tsx';

function isIOSDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(ua) || (ua.includes('Macintosh') && navigator.maxTouchPoints > 1);
}

export default function App() {
  const { t } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);
  const appDownloadUrl = isIOSDevice() ? APP_STORE_URL : PLAY_STORE_URL;

  return (
    <div className="bg-[radial-gradient(ellipse_140%_80%_at_50%_-10%,_#15140f_0%,_#070706_55%)] text-white min-h-screen font-sans antialiased overflow-x-hidden relative film-grain">

      {/* Sticky Header Nav */}
      <Navbar />

      {/* Booking form modal — opens from the hero CTAs */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      {/* Scelta lingua alla prima visita */}
      <LanguagePrompt />

      {/* Hero Section */}
      <section className="overflow-hidden">

        {/* ===== MOBILE HERO — full-screen immersive ===== */}
        <div className="lg:hidden relative min-h-[100svh] flex flex-col">

          {/* Full-bleed background */}
          <div className="absolute inset-0 z-0">
            {/* Phone background — portrait framing of the athlete */}
            <img
              src={heroMobileBg}
              alt=""
              aria-hidden="true"
              className="md:hidden w-full h-full object-cover object-[62%_top]"
            />
            {/* Tablet background — swaps to the wide desktop frame so the athlete isn't cropped out on a wider viewport */}
            <img
              src={heroDesktopBg}
              alt=""
              aria-hidden="true"
              className="hidden md:block lg:hidden w-full h-full object-cover object-[60%_center] brightness-90"
            />
            {/* Top vignette — keeps logo readable over the bright gym ceiling; lighter on tablet so more of the shot reads through */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#070706]/90 via-[#070706]/25 to-transparent md:from-[#070706]/65 md:via-[#070706]/10" />
            {/* Bottom vignette — CTA area always on solid dark, softened higher up so the ROGUE branding on the sled stays visible */}
            <div className="md:hidden absolute inset-0" style={{ background: 'linear-gradient(to top, #070706 0%, rgba(7,7,6,0.85) 14%, rgba(7,7,6,0.55) 30%, rgba(7,7,6,0.15) 48%, transparent 62%)' }} />
            {/* Tablet bottom vignette — lighter, opens up more of the image above the CTA area */}
            <div className="hidden md:block lg:hidden absolute inset-0" style={{ background: 'linear-gradient(to top, #070706 0%, rgba(7,7,6,0.75) 10%, rgba(7,7,6,0.4) 22%, rgba(7,7,6,0.1) 36%, transparent 50%)' }} />
          </div>

          {/* Content stack */}
          <div className="relative z-10 flex flex-col flex-1 px-5 pt-[76px]">

            {/* Logo + location tag — top left */}
            <div className="pt-5 flex flex-col items-start gap-1.5">
              <img
                src={theCaveLogo}
                alt="THE CAVE"
                draggable={false}
                className="w-[85vw] max-w-[340px] md:max-w-[520px] -ml-8 select-none pointer-events-none"
              />
              <span className="font-sans text-[13px] md:text-lg font-bold tracking-[0.3em] text-brand-yellow/85 uppercase">
                {t('CROSSFIT® & HYROX — ROMA', 'CROSSFIT® & HYROX — ROME')}
              </span>
            </div>

            {/* Push bottom content to the bottom */}
            <div className="flex-1" />

            {/* Bottom block */}
            <div className="pb-safe-area-inset-bottom pb-8 md:pb-10 flex flex-col gap-4">

              {/* Social proof row */}
              <div className="order-1 flex items-center gap-2.5">
                <div className="flex gap-[2px]">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={12} className="fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                <span className="font-sans text-[10px] font-semibold tracking-[0.22em] text-white/45 uppercase">
                  4.85 · Google Reviews
                </span>
              </div>

              {/* CTA buttons — pushed below the stats strip on tablet so they sit lower and the shot above stays clearer */}
              <div className="order-2 md:order-3 flex flex-col gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="w-full py-[15px] bg-brand-yellow text-near-black font-sans font-black text-[11px] tracking-[0.22em] uppercase btn-cut flex items-center justify-center gap-2.5"
                >
                  <CalendarDays size={14} />
                  {t('PRENOTA UNA PROVA', 'BOOK A TRIAL CLASS')}
                </button>
                <a
                  href="#sedi"
                  className="w-full py-[13px] border border-white/25 text-white font-sans font-black text-[11px] tracking-[0.22em] uppercase btn-cut flex items-center justify-center gap-2.5 bg-white/5 backdrop-blur-sm"
                >
                  <MapPin size={14} />
                  {t('SCOPRI LE SEDI', 'DISCOVER OUR LOCATIONS')}
                </a>
                <a
                  href={appDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-[13px] border border-white/25 text-white font-sans font-black text-[11px] tracking-[0.22em] uppercase btn-cut flex items-center justify-center gap-2.5 bg-white/5 backdrop-blur-sm"
                >
                  <Smartphone size={14} />
                  {t("SCARICA L'APP THE CAVE", 'DOWNLOAD THE CAVE APP')}
                </a>
              </div>

              {/* Stats strip */}
              <div className="order-3 md:order-2 border-t border-white/10 pt-4 grid grid-cols-3 text-center divide-x divide-white/10">
                <div>
                  <span className="font-display text-[28px] leading-none text-brand-yellow">900m²</span>
                  <span className="font-sans text-[8px] tracking-[0.22em] text-white/30 uppercase mt-1 block">{t('Spazio Totale', 'Total Space')}</span>
                </div>
                <div>
                  <span className="font-display text-[28px] leading-none text-brand-yellow">2</span>
                  <span className="font-sans text-[8px] tracking-[0.22em] text-white/30 uppercase mt-1 block">{t('Sedi a Roma', 'Boxes in Rome')}</span>
                </div>
                <div>
                  <span className="font-display text-[28px] leading-none text-brand-yellow">12+</span>
                  <span className="font-sans text-[8px] tracking-[0.22em] text-white/30 uppercase mt-1 block">{t('Coach Cert.', 'Cert. Coaches')}</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ===== DESKTOP HERO ===== */}
        <div className="hidden lg:flex flex-col pt-20 relative min-h-screen overflow-hidden">

          {/* Background */}
          <picture className="absolute inset-0 w-full h-full z-0">
            <img
              src={heroDesktopBg}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-[60%_center] brightness-90"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#070706] via-[#070706]/95 to-[#070706]/10 z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070706]/80 via-transparent to-transparent z-0" />

          {/* Main content */}
          <div className="flex-1 flex items-center relative z-10">
            <div className="max-w-7xl mx-auto px-4 md:px-6 w-full py-8">
              <div className="max-w-xl space-y-6 lg:space-y-7">

                <div className="select-none -ml-[77px]">
                  <img
                    src={theCaveLogo}
                    alt="THE CAVE"
                    draggable={false}
                    className="w-full max-w-[clamp(460px,48vw,700px)] pointer-events-none select-none"
                  />
                </div>

                <p className="font-sans text-sm font-bold tracking-[0.22em] text-white/90 uppercase">
                  {t('THE CAVE: BOX DI CROSSFIT & HYROX', 'THE CAVE: CROSSFIT & HYROX BOX')}
                </p>

                <p className="font-sans text-xs font-bold tracking-widest text-white/50 uppercase">
                  {t('900+ m² • 2 SEDI A ROMA • CROSSFIT® • HYROX', '900+ m² • 2 BOXES IN ROME • CROSSFIT® • HYROX')}
                </p>

                <p className="font-sans text-base lg:text-lg text-white/70 leading-relaxed">
                  {t('Allenamenti funzionali ad alta intensità. Community reale. Zero compromessi.', 'High-intensity functional training. A real community. Zero compromises.')}
                </p>

                <div className="flex flex-col gap-3 pt-2 items-start">
                  <div className="flex flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setBookingOpen(true)}
                      className="py-4 px-8 bg-brand-yellow text-near-black font-sans font-black text-sm tracking-widest uppercase btn-cut flex items-center justify-center gap-2 hover:bg-white transition-all duration-300"
                    >
                      <CalendarDays size={14} />
                      {t('PRENOTA UNA PROVA', 'BOOK A TRIAL CLASS')}
                    </button>
                    <a
                      href="#sedi"
                      className="py-4 px-8 bg-near-black/50 border border-white/20 text-white font-sans font-black text-sm tracking-widest uppercase btn-cut flex items-center justify-center gap-2 hover:bg-white hover:text-near-black hover:border-white transition-all duration-300"
                    >
                      <MapPin size={14} />
                      {t('SCOPRI LE SEDI', 'DISCOVER OUR LOCATIONS')}
                    </a>
                  </div>
                  <a
                    href={appDownloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 px-8 bg-near-black/50 border border-white/20 text-white font-sans font-black text-sm tracking-widest uppercase btn-cut flex items-center justify-center gap-2 hover:bg-white hover:text-near-black hover:border-white transition-all duration-300"
                  >
                    <Smartphone size={14} />
                    {t("SCARICA L'APP THE CAVE", 'DOWNLOAD THE CAVE APP')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop bottom info bar */}
          <div className="relative z-10 border-t border-white/10 bg-near-black/60 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center">
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5">
                  <MapPin size={12} className="text-brand-yellow shrink-0" />
                  <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-brand-yellow">{t('DUE SEDI A ROMA', 'TWO BOXES IN ROME')}</span>
                </div>
                <span className="font-sans text-xs text-white/50 tracking-wide">Mandrione & Cinecittà</span>
              </div>
              <div className="flex items-stretch gap-0 ml-auto divide-x divide-white/10">
                <div className="pr-8 flex items-center gap-2.5">
                  <Users size={18} className="text-brand-yellow shrink-0" />
                  <span className="font-sans text-[9px] text-white/50 tracking-widest uppercase whitespace-nowrap leading-relaxed">{t('COACH', 'CERTIFIED')}<br/>{t('CERTIFICATI', 'COACHES')}</span>
                </div>
                <div className="px-8 flex items-center gap-2.5">
                  <Dumbbell size={18} className="text-brand-yellow shrink-0" />
                  <span className="font-sans text-[9px] text-white/50 tracking-widest uppercase whitespace-nowrap leading-relaxed">ROGUE® /<br/>BLOR®</span>
                </div>
                <div className="pl-8 flex items-center gap-2.5">
                  <Star size={16} className="fill-brand-yellow text-brand-yellow shrink-0" />
                  <div>
                    <span className="font-display text-base text-brand-yellow block leading-none">4.85</span>
                    <span className="font-sans text-[9px] text-white/50 tracking-widest uppercase whitespace-nowrap">{t('SU GOOGLE', 'ON GOOGLE')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* News — HYROX Technical Workshop del 7 novembre */}
      <NewsSection />

      {/* LA NOSTRA FILOSOFIA manifesto */}
      <section id="box-philosophy" className="bg-[#0c0c0b] py-16 md:py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left — manifesto testo (mobile: appears after photo, order-2; desktop: first, order-1) */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6">
            <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block">
              {t('IL MANIFESTO', 'THE MANIFESTO')}
            </span>

            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase">
              {t('Sembrano parole costruite ma è', 'It may sound rehearsed, but it is')} <span className="text-outline-yellow">{t('veramente così:', 'really like this:')}</span>
            </h2>

            <p className="font-sans text-lg sm:text-xl font-bold text-white tracking-wide leading-relaxed">
              {t(
                'The Cave è un luogo dove ci si allena con uno scopo, si cresce insieme e si costruiscono legami che vanno oltre il workout.',
                'The Cave is a place where you train with purpose, grow together and build bonds that go beyond the workout.'
              )}
            </p>

            <div className="space-y-4 font-sans text-sm text-white/60 tracking-wide leading-relaxed">
              <p>
                {t(
                  "Qui crediamo nell'allenamento vero: quello che ti mette alla prova, ti insegna la disciplina e ti dimostra che i risultati arrivano con costanza, impegno e determinazione.",
                  'Here we believe in real training: the kind that tests you, teaches you discipline and proves that results come with consistency, commitment and determination.'
                )}
              </p>
              <p>
                {t(
                  'È quello che accade a tutti quelli che varcano la porta di The Cave.',
                  "That is what happens to everyone who walks through The Cave's door."
                )}
              </p>
              <p>
                {t(
                  'Abbiamo scelto attrezzatura professionale e spazi progettati per la performance, con bilancieri, attrezzatura al top, Rogue® e BLOR® e tutto ciò che serve per allenarsi senza compromessi, non manca veramente nulla, ti basterà entrare per renderti conto che sei in un box a 5 stelle, The Cave è così.',
                  "We chose professional equipment and spaces designed for performance: barbells, top-tier Rogue® and BLOR® gear and everything you need to train without compromise. Nothing is missing. Step inside and you'll realise you're in a 5-star box. That's The Cave."
                )}
              </p>
              <p>
                {t(
                  'Ma ciò che rende davvero speciale The Cave non sono i bilancieri o i workout. Sono le persone.',
                  "But what makes The Cave truly special isn't the barbells or the workouts. It's the people."
                )}
              </p>
              <p>
                {t(
                  "A partire dallo staff che ti farà sentire subito a casa, perché per noi l'accoglienza e il farvi migliorare è al primo posto di tutto.",
                  'Starting with the staff, who will make you feel at home straight away, because for us welcoming you and helping you improve comes before everything else.'
                )}
              </p>
              <p>
                {t(
                  'E poi...qui nessuno si allena da solo. Ci si incoraggia durante ogni WOD, si festeggiano i traguardi insieme e ci si sostiene anche nei giorni più difficili. Che tu sia al tuo primo allenamento o un atleta esperto, entrerai a far parte di una community che condivide gli stessi valori: rispetto, sacrificio, crescita e voglia di migliorarsi ogni giorno.',
                  "And then... nobody trains alone here. We cheer each other on in every WOD, celebrate milestones together and support each other on the toughest days. Whether it's your very first workout or you're an experienced athlete, you'll become part of a community that shares the same values: respect, sacrifice, growth and the drive to get better every day."
                )}
              </p>
              <p>
                {t(
                  'Che il tuo obiettivo sia il CrossFit®, HYROX o semplicemente diventare una versione più forte di te stesso, qui troverai un ambiente che ti spingerà a dare il massimo, senza mai lasciarti indietro o farti sentire trascurato.',
                  "Whether your goal is CrossFit®, HYROX or simply becoming a stronger version of yourself, here you'll find an environment that pushes you to give your best, without ever leaving you behind or making you feel overlooked."
                )}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="font-sans text-sm font-bold text-brand-yellow tracking-wide leading-relaxed">
                {t(
                  'Perché The Cave non è solo il posto dove ti alleni. È il posto a cui appartieni.',
                  "Because The Cave isn't just the place where you train. It's the place where you belong."
                )}
              </p>
            </div>
          </div>

          {/* Left on mobile (order-1), right on desktop (order-2) — placeholder foto box */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative">
            <div className="border border-white/10 p-2 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-yellow z-10" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand-yellow z-10" />

              {/* Foto reale del box */}
              <div className="relative h-[300px] sm:h-[380px] lg:h-[420px] overflow-hidden bg-[#070706]">
                <img src={boxPhoto} alt="The Cave — box" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070706]/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Yellow Marquee strip scrolling keywords */}
      <MarqueeStrip />

      {/* Testimonials Carousel Component */}
      <TestimonialCarousel />

      {/* LA NOSTRA COMMUNITY & EVENTI */}
      <section id="community" className="bg-near-black py-16 md:py-24 px-4 md:px-6 border-b border-white/5 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto">

          <div className="mb-10 md:mb-16 text-center md:text-left">
            <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
              PEOPLE FIRST
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase">
              {t('A The Cave non ci si', 'At The Cave nobody')} <span className="text-outline-yellow">{t('allena da soli.', 'trains alone.')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: testo + card eventi */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4 font-sans text-sm text-white/60 tracking-wide leading-relaxed">
                <p>
                  {t(
                  'La community è il cuore del box. Il nostro punto di forza sono le classi, è così che nasce il CrossFit.',
                  "The community is the heart of the box. Our classes are our greatest strength: that's how CrossFit was born."
                )}
                </p>
                <p>
                  {t(
                  "A The Cave atleti di ogni livello, dal principiante all'agonista, condividono spazio, sudore e progressi. Qui si entra come nuovi e si esce come famiglia. Da subito ti sentirai a casa.",
                  "At The Cave, athletes of every level, from beginners to competitors, share space, sweat and progress. You walk in as a newcomer and leave as family. You'll feel at home from day one."
                )}
                </p>
                <p>
                  {t(
                  'Organizziamo eventi che rafforzano il team building, dentro e fuori dal box, workshop con docenti esterni e manifestazioni interne per mantenere alta la motivazione e il focus.',
                  'We organise team-building events inside and outside the box, workshops with guest coaches and in-house competitions to keep motivation and focus high.'
                )}
                </p>
                <p>
                  {t(
                  'Non è marketing: è il modo in cui funziona The Cave.',
                  "This isn't marketing: it's simply how The Cave works."
                )}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  { Icon: Dumbbell, label: t("WOD SOCIALI", "SOCIAL WODS"), desc: t("Sessioni di gruppo speciali con WOD tematici e sfide collettive aperte a tutti i livelli.", "Special group sessions with themed WODs and team challenges open to all levels.") },
                  { Icon: Flame, label: t("MANIFESTAZIONI INTERNE", "IN-HOUSE COMPETITIONS"), desc: t("Competizioni amichevoli mensili per misurare i progressi e alimentare l'agonismo sano.", "Friendly monthly competitions to measure progress and fuel healthy competitive spirit.") },
                  { Icon: Compass, label: "DROP-IN WELCOME", desc: t("Atleti visitatori sempre benvenuti. Il tuo network di box si estende fino a Roma.", "Visiting athletes are always welcome. Your box network now reaches all the way to Rome.") }
                ].map(({ Icon, label, desc }, idx) => (
                  <div key={idx} className="bg-[#0c0c0b] border border-white/10 p-5 flex items-start gap-4 hover:border-brand-yellow/30 transition-colors group">
                    <div className="w-10 h-10 bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center shrink-0 group-hover:bg-brand-yellow/20 transition-colors">
                      <Icon size={18} className="text-brand-yellow" />
                    </div>
                    <div>
                      <h4 className="font-display text-base text-white uppercase mb-1 tracking-tight group-hover:text-brand-yellow transition-colors">
                        {label}
                      </h4>
                      <p className="font-sans text-xs text-white/50 leading-relaxed tracking-wider">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: griglia foto placeholder */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">

              {/* Foto grande: foto di gruppo */}
              <div className="col-span-2 relative bg-[#0c0c0b] border border-white/10 h-72 lg:h-96 overflow-hidden hover:border-brand-yellow/20 transition-colors">
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-yellow z-10" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand-yellow z-10" />
                <img src={fotoGruppoPhoto} alt={t('Foto di gruppo', 'Group photo')} className="w-full h-full object-cover object-bottom lg:object-[50%_82%]" />
              </div>

              {/* Foto piccola sinistra: manifestazione interna */}
              <div className="relative bg-[#0c0c0b] border border-white/10 h-48 lg:h-64 overflow-hidden hover:border-brand-yellow/20 transition-colors">
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-yellow z-10" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand-yellow z-10" />
                <img src={manifestazioneInternaPhoto} alt={t('Manifestazione interna', 'In-house competition')} className="w-full h-full object-cover object-center lg:object-[50%_88%]" />
              </div>

              {/* Foto piccola destra: WOD evento */}
              <div className="relative bg-[#0c0c0b] border border-white/10 h-48 lg:h-64 overflow-hidden hover:border-brand-yellow/20 transition-colors">
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-yellow z-10" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand-yellow z-10" />
                <img src={wodSocialePhoto} alt={t('WOD sociale', 'Social WOD')} className="w-full h-full object-cover object-center lg:object-[50%_69%]" />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Locations (Sedi) Component */}
      <LocationsList />

      {/* Programs (Programmi) Component */}
      <ProgramCards onBookTrial={() => setBookingOpen(true)} />

      {/* Gallery (La Cave in Foto) Component - placeholders until real photos are provided */}
      <GallerySection />

      {/* Coaches Silhouette grid component */}
      <CoachSection />

      {/* Timetable (Orari) Grid Component */}
      <ScheduleGrid />

      {/* Final CALL TO ACTION: "Entra nella Cave" */}
      <section className="bg-near-black py-20 md:py-28 px-4 md:px-6 relative overflow-hidden text-center border-t border-white/5">
        
        {/* Soft premium yellow glow backdrop */}
        <div className="absolute inset-0 glow-yellow-radial pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-15 space-y-8">
          
          <span className="inline-block bg-brand-yellow text-near-black font-sans font-extrabold text-xs tracking-[0.3em] px-4 py-1.5 uppercase">
            {t('TI PIACE DARE IL GAS?', 'READY TO GO FULL THROTTLE?')}
          </span>
          
          <h2 className="font-display text-5xl md:text-8xl tracking-tight leading-none text-white uppercase">
            {t('ENTRA NELLA', 'STEP INTO')} <br />
            <span className="text-shadow-md text-brand-yellow text-outline">THE CAVE</span>
          </h2>
          
          <p className="font-sans text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed tracking-wide">
            {t(
              'Prenota subito la tua lezione di prova gratuita. Scopri di persona perché non siamo la solita palestra ma una vera tana di agonismo, disciplina e rispetto sportivo.',
              "Book your free trial class now. See for yourself why we're not just another gym but a true den of competition, discipline and sporting respect."
            )}
          </p>

          <div className="pt-6 flex flex-col items-center justify-center gap-4 max-w-md mx-auto">
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto py-5 px-10 bg-brand-yellow text-near-black font-sans font-black text-base tracking-widest uppercase btn-cut text-shadow flex items-center justify-center gap-3 hover:bg-white transition-all duration-300"
            >
              {t('PRENOTA ORA', 'BOOK NOW')}
            </button>
            <div className="w-full flex flex-row items-center justify-center gap-3">
              <a
                href="https://maps.app.goo.gl/qYJm9baFNdriiiNm8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#0c0c0b] border border-white/10 text-white font-sans font-bold text-xs tracking-wider uppercase btn-cut text-center hover:bg-white hover:text-near-black transition-all duration-300"
              >
                {t('RAGGIUNGI MANDRIONE', 'GET TO MANDRIONE')}
              </a>
              <a
                href="https://maps.app.goo.gl/2ZY2RYBbr3uSZGfq8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#0c0c0b] border border-white/10 text-white font-sans font-bold text-xs tracking-wider uppercase btn-cut text-center hover:bg-white hover:text-near-black transition-all duration-300"
              >
                {t('RAGGIUNGI CINECITTÀ', 'GET TO CINECITTÀ')}
              </a>
            </div>
          </div>

          <div className="pt-6 text-white/30 font-sans text-xs tracking-widest uppercase">
            {t('OPPURE CHIAMACI AL:', 'OR CALL US ON:')} <strong className="text-white">{CONTACT_PHONE}</strong>
          </div>

        </div>
      </section>

      {/* Convenzioni — sconto Forze Armate e Forze dell'Ordine */}
      <PromoBlock />

      {/* Servizi Aggiuntivi — Team di Nutrizione, Certificato medico in sede */}
      <AdditionalServices />

      {/* Affiliazioni ufficiali */}
      <section id="affiliazioni" className="bg-[#0c0c0b] py-20 px-4 md:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
              {t('CERTIFICAZIONI E PARTNERSHIP', 'CERTIFICATIONS & PARTNERSHIPS')}
            </span>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-none text-white uppercase">
              {t('AFFILIAZIONI', 'OFFICIAL')} <span className="text-outline-yellow">{t('UFFICIALI', 'AFFILIATIONS')}</span>
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
                {t(
                  'Box affiliato ufficiale CrossFit® LLC. Programmazione, standard e attrezzatura certificati.',
                  'Official CrossFit® LLC affiliate box. Certified programming, standards and equipment.'
                )}
              </p>
            </div>
            <div className="border border-white/10 p-8 text-center hover:border-brand-yellow/40 transition-colors group">
              <div className="w-16 h-16 bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-yellow/20 transition-colors">
                <span className="font-display text-xl text-brand-yellow leading-none">HRX</span>
              </div>
              <h4 className="font-display text-2xl text-white uppercase mb-3">HYROX Partner Box</h4>
              <p className="font-sans text-xs text-white/40 tracking-wider leading-relaxed">
                {t(
                  'Partner Box ufficiale HYROX GmbH. Allenamento specifico race-ready per le gare ufficiali.',
                  'Official HYROX GmbH Partner Box. Specific race-ready training for official races.'
                )}
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
