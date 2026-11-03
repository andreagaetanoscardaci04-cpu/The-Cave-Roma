/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Lang = 'it' | 'en';

// A piece of content available in both languages
export type Localized<T = string> = { it: T; en: T };

const STORAGE_KEY = 'the-cave-lang';

const META: Record<Lang, { title: string; description: string }> = {
  it: {
    title: 'The Cave — CrossFit® & HYROX a Roma',
    description: 'Sito web ufficiale di The Cave - CrossFit® & HYROX a Roma (Mandrione e Cinecittà). Allenamento intenso, forza e community.',
  },
  en: {
    title: 'The Cave — CrossFit® & HYROX in Rome',
    description: 'Official website of The Cave - CrossFit® & HYROX in Rome (Mandrione and Cinecittà). Intense training, strength and community.',
  },
};

function isLang(value: unknown): value is Lang {
  return value === 'it' || value === 'en';
}

/** Priority: ?lang= in the URL, then the visitor's saved choice, then the browser language (Italian → it, anything else → en). */
function detectLang(): Lang {
  if (typeof window === 'undefined') return 'it';
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (isLang(fromUrl)) return fromUrl;
  const saved = localStorage.getItem(STORAGE_KEY);
  if (isLang(saved)) return saved;
  return navigator.language.toLowerCase().startsWith('it') ? 'it' : 'en';
}

/** True once the visitor has picked a language (saved choice or explicit ?lang= link) */
function detectHasChosen(): boolean {
  if (typeof window === 'undefined') return true;
  return isLang(new URLSearchParams(window.location.search).get('lang')) || isLang(localStorage.getItem(STORAGE_KEY));
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  hasChosen: boolean;
  t: {
    (text: Localized<string[]>): string[];
    (text: Localized): string;
    (it: string, en: string): string;
  };
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);
  const [hasChosen, setHasChosen] = useState(detectHasChosen);

  const setLang = (next: Lang) => {
    localStorage.setItem(STORAGE_KEY, next);
    // Drop ?lang= so a reload keeps the visitor's explicit choice
    const url = new URL(window.location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.delete('lang');
      window.history.replaceState(null, '', url);
    }
    setLangState(next);
    setHasChosen(true);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', META[lang].description);
  }, [lang]);

  const t = ((itOrText: string | Localized<unknown>, en?: string) =>
    typeof itOrText === 'string' ? (lang === 'it' ? itOrText : en) : itOrText[lang]) as LanguageContextValue['t'];

  return (
    <LanguageContext.Provider value={{ lang, setLang, hasChosen, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
