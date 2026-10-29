'use client';

import { useLang } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export function LanguageToggle() {
  const { lang, toggle } = useLang();
  const isEN = lang === 'en';

  return (
    <motion.button
      onClick={toggle}
      title={isEN ? 'Cambiar a Español' : 'Switch to English'}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-5 right-5 z-50 flex p-1 rounded-lg bg-white/80 backdrop-blur border border-line text-sm font-semibold shadow-sm"
    >
      {(['es', 'en'] as const).map((l) => (
        <span key={l} className={`relative px-2.5 py-1 uppercase transition-colors ${lang === l ? 'text-white' : 'text-label hover:text-muted'}`}>
          {lang === l && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 rounded-md bg-mango"
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            />
          )}
          <span className="relative">{l}</span>
        </span>
      ))}
    </motion.button>
  );
}
