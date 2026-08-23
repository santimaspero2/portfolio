'use client';

import { useLang } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export function LanguageToggle() {
  const { lang, toggle } = useLang();
  const isEN = lang === 'en';

  return (
    <motion.button
      onClick={toggle}
      title={isEN ? 'Cambiar a Español' : 'Switch to English'}
      className="fixed top-5 right-5 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-[#004225]/60 bg-[#0a0a1f]/80 backdrop-blur-md text-xs font-mono font-bold tracking-widest uppercase shadow-lg hover:border-[#22c55e] hover:shadow-[0_0_16px_rgba(34,197,94,0.2)] transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pill indicator */}
      <span className={`transition-colors duration-300 ${!isEN ? 'text-[#22c55e]' : 'text-slate-500'}`}>
        ES
      </span>
      {/* Track */}
      <div className="relative w-8 h-4 rounded-full border border-[#004225]/60 bg-[#14142b]">
        <motion.div
          className="absolute top-0.5 w-3 h-3 rounded-full bg-[#22c55e] shadow-[0_0_6px_rgba(34,197,94,0.6)]"
          animate={{ left: isEN ? '50%' : '2px' }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      </div>
      <span className={`transition-colors duration-300 ${isEN ? 'text-[#22c55e]' : 'text-slate-500'}`}>
        EN
      </span>
    </motion.button>
  );
}
