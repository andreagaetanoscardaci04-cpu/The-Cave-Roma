/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import cinecittaPhoto1 from '../assets/cinecitta-gallery-3-new.jpeg';
import cinecittaPhoto3 from '../assets/cinecitta-gallery-3-wm.webp';
import cinecittaPhoto5 from '../assets/cinecitta-gallery-5-wm.webp';
import cinecittaPhoto7 from '../assets/cinecitta-gallery-7-wm.webp';
import mandrionePhoto5 from '../assets/mandrione-gallery-5-wm.webp';
import mandrionePhoto6 from '../assets/mandrione-gallery-6-wm.webp';
import mandrionePhoto7 from '../assets/mandrione-gallery-7-wm.webp';
import mandrionePhoto8 from '../assets/mandrione-gallery-8-new.jpeg';
import { useLanguage } from '../i18n.tsx';

const galleryPhotos = [
  { src: cinecittaPhoto3, location: 'Cinecittà' },
  { src: cinecittaPhoto5, location: 'Cinecittà' },
  { src: cinecittaPhoto1, location: 'Cinecittà' },
  { src: cinecittaPhoto7, location: 'Cinecittà' },
  { src: mandrionePhoto5, location: 'Mandrione' },
  { src: mandrionePhoto6, location: 'Mandrione' },
  { src: mandrionePhoto7, location: 'Mandrione' },
  { src: mandrionePhoto8, location: 'Mandrione' },
];

export default function GallerySection() {
  const { t } = useLanguage();

  return (
    <section id="galleria" className="bg-[#0c0c0b] py-16 md:py-24 px-4 md:px-6 border-b border-white/5 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 md:mb-20 text-left">
          <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
            {t('// THE CAVE IN FOTO', '// THE CAVE IN PHOTOS')}
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase">
            THE <span className="text-outline-yellow">CAVE</span>
          </h2>
        </div>

        {/* Horizontal scroll of vertical placeholder cards */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:h-2">
          {galleryPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="premium-card snap-start shrink-0 w-[220px] sm:w-[260px] aspect-[3/4] border border-white/10 hover:border-brand-yellow/30 transition-colors relative overflow-hidden"
            >
              <img
                src={photo.src}
                alt={`The Cave ${photo.location} — ${t('foto box', 'box photo')} ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
