/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Salad, Stethoscope } from 'lucide-react';

const SERVICES = [
  {
    Icon: Salad,
    title: 'Team di Nutrizione',
    desc: 'Un team di nutrizionisti a tua disposizione per costruire un piano alimentare su misura e supportare i tuoi risultati in palestra.',
  },
  {
    Icon: Stethoscope,
    title: 'Certificato Medico in Sede',
    desc: 'Effettua la visita per il certificato medico sportivo direttamente in sede, senza doverti spostare altrove.',
  },
];

export default function AdditionalServices() {
  return (
    <section id="servizi-aggiuntivi" className="bg-near-black py-20 px-4 md:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
            AL TUO SERVIZIO
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-none text-white uppercase">
            SERVIZI <span className="text-outline-yellow">AGGIUNTIVI</span>
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mt-4 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {SERVICES.map(({ Icon, title, desc }, idx) => (
            <div
              key={idx}
              className="border border-white/10 p-8 text-center hover:border-brand-yellow/40 transition-colors group"
            >
              <div className="w-16 h-16 bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-yellow/20 transition-colors">
                <Icon size={26} className="text-brand-yellow" />
              </div>
              <h4 className="font-display text-2xl text-white uppercase mb-3">{title}</h4>
              <p className="font-sans text-xs text-white/40 tracking-wider leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
