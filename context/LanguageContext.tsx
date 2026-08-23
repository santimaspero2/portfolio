'use client';

import React, { createContext, useContext, useState } from 'react';
import type { Lang } from '@/data/translations';

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');
  const toggle = () => setLang((l) => (l === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
