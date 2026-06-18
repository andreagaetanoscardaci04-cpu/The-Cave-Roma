/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BOX_LOCATIONS, CONTACT_PHONE, CONTACT_TEL_LINK } from '../data.ts';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contatti" className="bg-[#070706] border-t border-white/10 text-white select-none film-grain">
      {/* Top Banner section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-b border-white/10">
        
        {/* Mandrione address box */}
        <div className="p-8 md:p-12 space-y-4">
          <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-brand-yellow uppercase block">
            SEDE MANDRIONE
          </span>
          <h4 className="font-display text-2xl md:text-3xl tracking-wide uppercase">
            THE CAVE — MANDRIONE
          </h4>
          <p className="font-sans text-sm text-white/50 tracking-wide max-w-sm">
            Via del Mandrione 105, 00181 Roma | CrossFit® & HYROX
          </p>
          <a
            href="https://maps.google.com/?q=Via+del+Mandrione+105,+00181+Roma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 font-sans text-xs font-bold text-brand-yellow hover:underline uppercase tracking-widest pt-2"
          >
            <span>APRI IN GOOGLE MAPS</span>
            <span>→</span>
          </a>
        </div>

        {/* Cinecittà address box */}
        <div className="p-8 md:p-12 space-y-4">
          <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-brand-yellow uppercase block">
            SEDE CINECITTÀ
          </span>
          <h4 className="font-display text-2xl md:text-3xl tracking-wide uppercase">
            THE CAVE — CINECITTÀ
          </h4>
          <p className="font-sans text-sm text-white/50 tracking-wide max-w-sm">
            Via Silicella 103, 00169 Roma | HYROX & CrossFit®
          </p>
          <a
            href="https://maps.google.com/?q=Via+Silicella+103,+00169+Roma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 font-sans text-xs font-bold text-brand-yellow hover:underline uppercase tracking-widest pt-2"
          >
            <span>APRI IN GOOGLE MAPS</span>
            <span>→</span>
          </a>
        </div>

      </div>

      {/* Main Grid Info */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/5">
        
        {/* Brand column */}
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="font-display text-3xl tracking-tighter leading-none text-white">
              THE <span className="text-brand-yellow">CAVE</span>
            </span>
            <span className="font-sans text-[10px] tracking-[0.25em] text-white/40 leading-none mt-1">
              CROSSFIT & HYROX ROME
            </span>
          </div>
          <p className="font-sans text-xs text-white/40 leading-relaxed uppercase tracking-wider">
            La tana sotterranea nei quartieri di Roma dove il carattere viene forgiato e temperato attraverso il sudore, la ghisa, Rogue ed eccellenti coach certificati. Non è una semplice palestra, è la tua nuova casa.
          </p>
          
          <div className="flex items-center space-x-4 pt-2">
            <a 
              href="#" 
              aria-label="Instagram Link"
              className="p-2.5 bg-white/[0.02] border border-white/10 text-white hover:text-brand-yellow hover:border-brand-yellow transition-all"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="#" 
              aria-label="Facebook Link"
              className="p-2.5 bg-white/[0.02] border border-white/10 text-white hover:text-brand-yellow hover:border-brand-yellow transition-all"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div className="space-y-4">
          <h4 className="font-display text-lg tracking-wider text-white uppercase border-l-2 border-brand-yellow pl-3">
            NAVIGAZIONE VELOCE
          </h4>
          <ul className="space-y-2.5 font-sans text-xs font-semibold tracking-wider text-white/50 uppercase">
            <li>
              <a href="#box-philosophy" className="hover:text-brand-yellow hover:translate-x-1 inline-block transition-transform">IL BOX FILOSOFIA</a>
            </li>
            <li>
              <a href="#sedi" className="hover:text-brand-yellow hover:translate-x-1 inline-block transition-transform">LE DUE SEDI</a>
            </li>
            <li>
              <a href="#programmi" className="hover:text-brand-yellow hover:translate-x-1 inline-block transition-transform">I NOSTRI PROGRAMMI</a>
            </li>
            <li>
              <a href="#coaches" className="hover:text-brand-yellow hover:translate-x-1 inline-block transition-transform">COACH CERTIFICATI</a>
            </li>
            <li>
              <a href="#orari" className="hover:text-brand-yellow hover:translate-x-1 inline-block transition-transform">I TURNI E ORARI</a>
            </li>
          </ul>
        </div>

        {/* Contact/Support Column */}
        <div className="space-y-4">
          <h4 className="font-display text-lg tracking-wider text-white uppercase border-l-2 border-brand-yellow pl-3">
            CONTATTO DIRETTO
          </h4>
          <p className="font-sans text-xs text-white/40 leading-relaxed uppercase tracking-wider">
            Hai domande su abbonamenti, orari o lezioni di prova? Chiama subito il nostro centralino unico per entrambe le sedi.
          </p>
          <div className="p-4 bg-white/[0.01] border border-white/5 space-y-3">
            <a 
              href={CONTACT_TEL_LINK}
              className="flex items-center space-x-2.5 text-brand-yellow hover:text-white transition-colors"
            >
              <Phone size={15} />
              <span className="font-sans text-sm font-bold tracking-widest uppercase">{CONTACT_PHONE}</span>
            </a>
            <div className="flex items-center space-x-2.5 text-white/60">
              <Mail size={15} />
              <span className="font-sans text-xs">info@thecaveroma.it</span>
            </div>
          </div>
        </div>

      </div>

      {/* Extreme Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[10px] text-white/30 tracking-widest uppercase font-semibold">
        <div>
          © {currentYear} THE CAVE. TUTTI I DIRITTI RISERVATI.
        </div>
        <div className="flex items-center space-x-1 divide-x divide-white/10">
          <span className="pr-2">AFFILIATO UFFICIALE CROSSFIT®</span>
          <span className="pl-2 pr-2">HYROX PARTNER BOX</span>
          <span className="pl-2 text-brand-yellow">P.IVA 12345678901</span>
        </div>
      </div>
    </footer>
  );
}
