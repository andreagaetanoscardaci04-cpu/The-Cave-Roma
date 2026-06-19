/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, ChevronRight, Award } from 'lucide-react';
import { CONTACT_TEL_LINK } from '../data.ts';
import folgoreImg from '../assets/forze-armate-folgore.jpg';

export default function PromoBlock() {
  const values = [
    { title: "DISCIPLINA", desc: "La base di ogni sforzo fisico e mentale rigoroso." },
    { title: "FORZA MENTALE", desc: "Superare il dolore e la stanchezza quando il corpo dice basta." },
    { title: "PREPARAZIONE", desc: "Pronti a rispondere in qualsiasi situazione reale d'emergenza." }
  ];

  return (
    <section id="promo" className="bg-[#070706] py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background decoration representing target lines or tactical aesthetics */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full"></div>
        <div className="absolute top-10 left-10 w-80 h-80 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto premium-card border border-[#f2c200]/20 bg-[#0c0c0b] relative z-10 overflow-hidden flex flex-col lg:flex-row">
        {/* Image panel — Forze Armate */}
        <div className="relative w-full h-72 lg:h-auto lg:w-[22rem] shrink-0 overflow-hidden">
          <img
            src={folgoreImg}
            alt="Alzabandiera della Brigata Paracadutisti Folgore, Pisa 1994"
            className="absolute inset-0 w-full h-full object-cover object-[center_30%] grayscale-[15%] contrast-[1.08] saturate-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b] via-[#0c0c0b]/10 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0b]/40 via-transparent to-transparent"></div>
          <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-transparent via-transparent to-[#0c0c0b]/70"></div>
          <div className="absolute inset-0 film-grain"></div>

          <div className="absolute top-5 left-5">
            <div className="inline-flex items-center gap-2 bg-near-black/60 border border-brand-yellow/40 px-3 py-1 text-[#f2c200] font-sans font-bold text-xs tracking-[0.25em] uppercase backdrop-blur-sm">
              <Shield size={14} />
              CONVENZIONE SPECIALE
            </div>
          </div>

          <span className="absolute bottom-4 left-5 font-sans text-[10px] text-white/60 tracking-[0.2em] uppercase leading-relaxed">
            Brigata Paracadutisti Folgore <br /> Pisa, 1994
          </span>
        </div>

        {/* Content area */}
        <div className="flex-1 p-8 md:p-12 lg:p-14 flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Text column */}
          <div className="flex-1 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase leading-none text-white">
              SERVI LO STATO? <br />
              <span className="text-brand-yellow">RICEVI IL 10% DI SCONTO</span>
            </h2>

            <p className="font-sans text-base text-white/75 tracking-wide leading-relaxed max-w-2xl">
              Siamo orgogliosi di supportare le nostre Forze di Sicurezza. Se sei un membro delle <strong className="text-white">Forze Armate</strong> o delle <strong className="text-white">Forze dell'Ordine</strong>, The Cave ti riserva uno <strong className="text-brand-yellow">sconto esclusivo del 10%</strong> su tutti i piani d'abbonamento mensili e trimestrali.
            </p>

            {/* Core values block */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/5">
              {values.map((v, idx) => (
                <div key={idx} className="space-y-1.5 p-4 bg-[#070706] border border-white/5 hover:border-brand-yellow/20 transition-colors">
                  <span className="font-display text-xl text-white tracking-wider block uppercase">
                    {v.title}
                  </span>
                  <p className="font-sans text-xs text-white/40 leading-relaxed tracking-wider">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA badge card */}
          <div className="w-full lg:w-80 shrink-0 bg-[#121211] border border-brand-yellow p-8 flex flex-col justify-between relative shadow-2xl overflow-hidden btn-cut">
            <div className="absolute inset-0 glow-yellow-radial pointer-events-none"></div>

            <div className="mb-8 pt-4 relative">
              <span className="inline-flex items-center gap-1.5 font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow mb-2 uppercase">
                <Award size={14} />
                RISPARMIO ATTIVO
              </span>
              <div className="font-display text-7xl text-white tracking-wide leading-none mb-4">
                -10%
              </div>
              <p className="font-sans text-xs text-white/50 leading-relaxed uppercase tracking-wider">
                Riservato a Esercito, Carabinieri, Polizia di Stato, Guardia di Finanza, Vigili del Fuoco e Polizia Penitenziaria.
              </p>
            </div>

            <div className="space-y-4 relative">
              <a
                href={CONTACT_TEL_LINK}
                className="w-full py-4 bg-brand-yellow text-near-black font-sans font-bold text-base text-center tracking-wider uppercase btn-cut flex items-center justify-center gap-2 col-button hover:bg-white transition-all duration-200"
              >
                SALTA LA CODA
                <ChevronRight size={18} />
              </a>

              <p className="font-sans text-[10px] text-white/30 text-center tracking-widest uppercase">
                *Richiesta documentazione o tesserino in segreteria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
