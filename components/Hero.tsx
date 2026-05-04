"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Code2, Box, Layout } from 'lucide-react';

const Hero = () => {
  // Variantes para animar los elementos hijos en orden
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Tiempo entre que aparece un elemento y otro
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-slate-950 text-white py-24 px-6 flex flex-col items-center justify-center min-h-[90vh] relative overflow-hidden">

      {/* Patrón de puntos */}
      <div className="absolute inset-0 z-0 opacity-20" 
            style={{ backgroundImage: 'radial-gradient(#1f1f69 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
      </div>
      
      {/* Círculos de fondo animados (Efecto de respiración) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl z-10 text-center"
      >
        {/* Título con gradiente animado */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Gestión de Datos <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-[#3a3a99] to-[#1f1f69]">
            & Código Fullstack
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Licenciado en Gestión: <span className="text-white">Analytics</span>. 
          Especialista en backend con Django y entusiasta del hardware. 
          Del motor de un <span className="text-indigo-400">190E</span> al despliegue de apps financieras.
        </motion.p>

        {/* Botones con efecto hover de escala */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-white/5"
          >
            <Code2 size={20} />
            Ver Proyectos
          </motion.button>
          
          <motion.a 
            href="https://www.linkedin.com/in/TU_USUARIO"
            target="_blank"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-slate-900 border border-slate-800 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Terminal size={20} />
            LinkedIn
          </motion.a>
        </motion.div>

        {/* Tech Stack Específico */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 grid grid-cols-2 md:flex md:justify-center gap-8 md:gap-12 text-slate-500"
        >
          {[
            { label: "Django / DRF", icon: <Code2 size={24} />, detail: "Python Backend" },
            { label: "PostgreSQL", icon: <Database size={24} />, detail: "Data Management" },
            { label: "Google Cloud", icon: <Terminal size={24} />, detail: "Cloud Ops" },
            { label: "Docker / Linux", icon: <Box size={24} />, detail: "Infraestructura" },
            { label: "Tailwind / React", icon: <Layout size={24} />, detail: "Frontend UI" }
          ].map((tech, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, color: "#f8fafc" }} // Se ilumina y sube un toque al pasar el mouse
              className="flex flex-col items-center gap-2 cursor-default transition-colors"
            >
              <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-xl group-hover:border-blue-500/50 transition-all">
                {tech.icon}
              </div>
              <div className="text-center">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-300">{tech.label}</p>
                <p className="text-[9px] font-mono text-slate-600 uppercase">{tech.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;