"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Code2, Box, Layout } from 'lucide-react';

const Hero = () => {
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

  return (
    <section className="bg-[#0a0a1f] text-white py-24 px-6 flex flex-col items-center justify-center min-h-[90vh] relative overflow-hidden">

      {/* Patrón de puntos técnico con el nuevo verde */}
      <div className="absolute inset-0 z-0 opacity-[0.15]" 
            style={{ backgroundImage: 'radial-gradient(#004225 0.8px, transparent 0.8px)', backgroundSize: '32px 32px' }}>
      </div>
      
      {/* Resplandor fijo (Glow) para dar profundidad sin movimiento molesto */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#004225]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#14142b]/30 blur-[100px] rounded-full pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl z-10 text-center"
      >
        {/* Título con gradiente British Racing Green */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
          Data & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#004225]">Technical</span> <br /> 
          Engineering
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Licenciado en Gestión: <span className="text-white">Analytics</span>. 
          Desarrollador Fullstack especializado en <span className="text-[#22c55e]">Django</span> y hardware. 
          Del motor de un 190E al despliegue de infraestructura en la nube.
        </motion.p>

        {/* Botones con los nuevos colores */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-[#004225] text-white font-bold rounded-md border border-[#22c55e]/30 hover:bg-[#005a32] transition-all flex items-center justify-center gap-2"
          >
            <Code2 size={20} />
            Ver Proyectos
          </motion.button>
          
          <motion.a 
            href="https://www.linkedin.com/in/TU_USUARIO"
            target="_blank"
            whileHover={{ scale: 1.05, borderColor: "#22c55e" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#14142b] border border-[#004225] text-white font-bold rounded-md transition-all flex items-center justify-center gap-2"
          >
            <Terminal size={20} />
            LinkedIn
          </motion.a>
        </motion.div>

        {/* Tech Stack con estilo instrumental */}
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