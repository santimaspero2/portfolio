"use client";
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/data/translations';
import { getAssetPath } from '@/utils/path';

const stack = ['Django / Python', 'TypeScript', 'PostgreSQL', 'React Native', 'Google Cloud'];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  const { lang } = useLang();

  const bio = {
    es: (
      <>
        Empecé en Licenciatura en Química en la UNC, pero después de 3 años descubrí la
        economía y los datos y me pasé a{' '}
        <span className="text-ink font-semibold">Management: Analytics</span> en la Universidad
        de Palermo. Aprendí a programar por mi cuenta y hoy tengo sistemas en producción para{' '}
        <span className="text-ink font-semibold">más de 300 organizaciones</span>.
      </>
    ),
    en: (
      <>
        I started in Chemistry at the National University of Córdoba, but after 3 years I
        discovered economics and data and switched to{' '}
        <span className="text-ink font-semibold">Management: Analytics</span> at Palermo
        University. I taught myself to code and today I have systems running in production for{' '}
        <span className="text-ink font-semibold">300+ organizations</span>.
      </>
    ),
  };

  return (
    <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto"
      >
        <motion.h1 variants={item} className="text-5xl md:text-6xl font-bold leading-[1.05] mb-3">
          Santiago Maspero
        </motion.h1>

        <motion.p variants={item} className="relative inline-block text-2xl md:text-3xl font-display text-mango mb-10">
          Data &amp; Technical Engineering
          {/* Subrayado a mano alzada que se dibuja */}
          <svg
            viewBox="0 0 300 12"
            preserveAspectRatio="none"
            className="absolute left-0 -bottom-2 w-full h-3 text-grape/60"
            aria-hidden
          >
            <motion.path
              d="M2 8 C 60 2, 120 11, 180 6 S 270 3, 298 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 0.7, ease: 'easeInOut' }}
            />
          </svg>
        </motion.p>

        <motion.div variants={item}>
          <motion.p
            key={lang}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-lg text-body leading-relaxed max-w-2xl mb-10"
          >
            {bio[lang]}
          </motion.p>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap items-center gap-x-7 gap-y-4 mb-16">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-mango-dark text-white font-semibold rounded-lg hover:bg-mango hover:shadow-[0_8px_20px_-6px_rgba(242,106,30,0.6)] transition-[background-color,box-shadow]"
          >
            {ui.hero.cta[lang]}
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </motion.button>

          {[
            { label: 'LinkedIn', href: 'https://linkedin.com/in/santiago-maspero-castro', external: true },
            { label: 'Email', href: 'mailto:santimaspero2@gmail.com' },
            { label: ui.hero.cv[lang], href: getAssetPath(ui.hero.cvFile[lang]), download: true },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              download={link.download}
              className="group relative inline-flex items-center gap-1 font-semibold text-ink hover:text-grape transition-colors"
            >
              {link.label}
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              {/* Subrayado que crece de izquierda a derecha */}
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-line" />
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-grape origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap items-center gap-2 text-sm">
          <span className="text-ink font-semibold mr-1">Stack</span>
          {stack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.07, type: 'spring', stiffness: 300, damping: 20 }}
              whileHover={{ y: -2 }}
              className="px-2.5 py-1 rounded-md bg-white border border-line text-muted hover:border-mango/50 hover:text-mango transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
