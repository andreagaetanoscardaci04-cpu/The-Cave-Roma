/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Globe } from 'lucide-react';
import { useLanguage, Lang } from '../i18n.tsx';

const OPTIONS: { code: Lang; label: string }[] = [
  { code: 'it', label: 'Italiano' },
  { code: 'en', label: 'English' },
];

/** First-visit bar: lets visitors whose browser language doesn't match their own switch in one tap. Hidden once a choice is saved. */
export default function LanguagePrompt() {
  const { lang, setLang, hasChosen } = useLanguage();

  if (hasChosen) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[55] p-3 sm:p-4 pointer-events-none">
      <div className="pointer-events-auto max-w-xl mx-auto bg-[#0c0c0b]/95 backdrop-blur-md border border-brand-yellow/30 shadow-[0_0_40px_-10px_rgba(242,194,0,0.35)] p-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 relative">
        <button
          type="button"
          onClick={() => setLang(lang)}
          aria-label={lang === 'it' ? 'Chiudi' : 'Close'}
          className="absolute top-2 right-2 p-1.5 text-white/40 hover:text-white transition-colors"
        >
          <X size={14} />
        </button>

        <div className="flex items-center gap-2.5 shrink-0">
          <Globe size={16} className="text-brand-yellow" />
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-white uppercase">
            Lingua / Language
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 w-full sm:w-auto sm:ml-auto sm:mr-6">
          {OPTIONS.map(({ code, label }) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              className={`px-5 py-2.5 font-sans text-xs font-black tracking-widest uppercase btn-cut transition-colors ${
                lang === code
                  ? 'bg-brand-yellow text-near-black hover:bg-white'
                  : 'bg-white/[0.03] border border-white/15 text-white hover:border-brand-yellow hover:text-brand-yellow'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
