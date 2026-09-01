"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Code2, Box, Layout, Mail, FileDown } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/data/translations';
import { getAssetPath } from '@/utils/path';

const Hero = () => {
  const { lang } = useLang();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const bio = {
    es: (
      <>
        Empecé en <span className="text-white">Licenciatura en Química</span> en la UNC, pero
        después de 3 años descubrí la economía y los datos y me pasé a{' '}
        <span className="text-[#22c55e]">Management: Analytics</span> en la Universidad de Palermo.
        {' '}Aprendí a programar por mi cuenta y hoy tengo sistemas en producción para{' '}
        <span className="text-white">más de 300 organizaciones</span>.
      </>
    ),
    en: (
      <>
        I started in <span className="text-white">Chemistry</span> at the National University of
        Córdoba, but after 3 years I discovered economics and data and switched to{' '}
        <span className="text-[#22c55e]">Management: Analytics</span> at Palermo University.
        {' '}I taught myself to code and today I have systems running in production for{' '}
        <span className="text-white">300+ organizations</span>.
      </>
    ),
  };

  return (
    <section className="bg-[#0a0a1f] text-white py-16 px-6 flex flex-col items-center justify-center min-h-[80vh] relative overflow-hidden">

      {/* Patrón de puntos técnico */}
      <div className="absolute inset-0 z-0 opacity-[0.15]" 
            style={{ backgroundImage: 'radial-gradient(#004225 0.8px, transparent 0.8px)', backgroundSize: '32px 32px' }}>
      </div>
      
      {/* Glows de fondo */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#004225]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#14142b]/30 blur-[100px] rounded-full pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl z-10 text-center"
      >
        {/* Título */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
          Data &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#004225]">Technical</span> <br /> 
          Engineering
        </motion.h1>

        {/* Bio — cambia con el idioma */}
        <motion.p
          key={lang}
          variants={itemVariants}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {bio[lang]}
        </motion.p>

        {/* Botones */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-[#004225] text-white font-bold rounded-md border border-[#22c55e]/30 hover:bg-[#005a32] transition-all flex items-center justify-center gap-2"
          >
            <Code2 size={20} />
            {ui.hero.cta[lang]}
          </motion.button>
          
          <motion.a 
            href="https://linkedin.com/in/santiago-maspero-castro"
            target="_blank"
            whileHover={{ scale: 1.05, borderColor: "#22c55e" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#14142b] border border-[#004225] text-white font-bold rounded-md transition-all flex items-center justify-center gap-2"
          >
            <Terminal size={20} />
            LinkedIn
          </motion.a>

          <motion.a
            href={`mailto:santimaspero2@gmail.com`}
            whileHover={{ scale: 1.05, borderColor: "#22c55e" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#14142b] border border-[#004225] text-white font-bold rounded-md transition-all flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Email
          </motion.a>

          <motion.a
            href={getAssetPath(ui.hero.cvFile[lang])}
            download
            whileHover={{ scale: 1.05, boxShadow: "0 0 16px rgba(34,197,94,0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#14142b] border border-[#22c55e]/40 text-[#22c55e] font-bold rounded-md transition-all flex items-center justify-center gap-2 hover:bg-[#22c55e]/10"
          >
            <FileDown size={20} />
            {ui.hero.cv[lang]}
          </motion.a>
        </motion.div>

        {/* Tech Stack */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 grid grid-cols-2 md:flex md:justify-center gap-8 md:gap-12 text-slate-500"
        >
          {[
            { label: "Django / Python", icon: <Code2 size={24} />, detail: "Backend" },
            { label: "TypeScript", icon: <Code2 size={24} />, detail: "Full-stack" },
            { label: "PostgreSQL", icon: <Database size={24} />, detail: "Data" },
            { label: "React Native", icon: <Layout size={24} />, detail: "Mobile" },
            { label: "Google Cloud", icon: <Box size={24} />, detail: "Cloud Ops" },
          ].map((tech, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, color: "#22c55e" }} 
              className="flex flex-col items-center gap-2 cursor-default transition-colors group"
            >
              <div className="p-3 bg-[#14142b] border border-[#004225]/50 rounded-lg group-hover:border-[#22c55e]/50 transition-all shadow-lg">
                {tech.icon}
              </div>
              <div className="text-center">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-300 group-hover:text-[#22c55e] transition-colors">{tech.label}</p>
                <p className="text-[9px] font-mono text-slate-600 uppercase italic">{tech.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;