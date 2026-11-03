/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Salad, Stethoscope } from 'lucide-react';
import { useLanguage } from '../i18n.tsx';

const SERVICES = [
  {
    Icon: Salad,
    title: { it: 'Team di Nutrizione', en: 'Nutrition Team' },
    desc: {
      it: 'Un team di nutrizionisti a tua disposizione per costruire un piano alimentare su misura e supportare i tuoi risultati in palestra.',
      en: 'A team of nutritionists at your disposal to build a tailored eating plan and support your results in the gym.',
    },
  },
  {
    Icon: Stethoscope,
    title: { it: 'Certificato Medico in Sede', en: 'On-site Medical Certificate' },
    desc: {
      it: 'Effettua la visita per il certificato medico sportivo direttamente in sede, senza doverti spostare altrove.',
      en: 'Get your sports medical certificate check-up right at the box, with no need to go anywhere else.',
    },
  },
];

export default function AdditionalServices() {
  const { t } = useLanguage();

  return (
    <section id="servizi-aggiuntivi" className="bg-near-black py-20 px-4 md:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
            {t('AL TUO SERVIZIO', 'AT YOUR SERVICE')}
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-none text-white uppercase">
            {t('SERVIZI', 'ADDITIONAL')} <span className="text-outline-yellow">{t('AGGIUNTIVI', 'SERVICES')}</span>
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
              <h4 className="font-display text-2xl text-white uppercase mb-3">{t(title)}</h4>
              <p className="font-sans text-xs text-white/40 tracking-wider leading-relaxed">{t(desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
