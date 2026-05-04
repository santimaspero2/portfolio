"use client";

import { projects } from '@/data/projects';
import { ExternalLink, Code2, Cog, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectGrid = () => {
  return (
    <section id="proyectos" className="bg-[#0a0a1f] py-24 px-6 relative">
      {/* Patrón de puntos en verde inglés para coherencia con el Hero */}
      <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#004225 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-white mb-16 flex items-center gap-3 uppercase tracking-tighter"
        >
          <div className="p-2 bg-[#14142b] border border-[#004225]/50 rounded-lg shadow-[0_0_15px_rgba(0,66,37,0.2)]">
            <Code2 className="text-[#22c55e]" />
          </div>
          Proyectos Seleccionados
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link href={`/proyectos/${project.id}`} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                whileHover={{ 
                    y: -12,
                    transition: { duration: 0.3, ease: "easeOut" } 
                  }}
                  className="relative bg-[#14142b] border border-[#004225]/30 p-8 rounded-xl group overflow-hidden cursor-pointer"
                >
                    {/* Glow esmeralda sutil en el fondo al hacer hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* La "regla" lateral que se ilumina, muy estilo instrumental de auto */}
                    <div className="absolute left-0 top-0 w-1 h-full bg-[#004225] group-hover:bg-[#22c55e] transition-colors duration-500" />

                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-6">
                        <div className="p-3 bg-[#0a0a1f] text-[#22c55e] rounded-lg border border-[#004225]/50 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                          {project.type === 'software' && <Code2 size={22} />}
                          {project.type === 'hardware' && <Cog size={22} />}
                          {project.type === 'data' && <BarChart3 size={22} />}
                        </div>
                        <ExternalLink size={20} className="text-slate-600 group-hover:text-white transition-colors" />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#22c55e] transition-colors uppercase font-mono">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-400 text-sm leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 text-[10px] font-mono font-bold bg-[#0a0a1f] text-[#22c55e] border border-[#004225]/40 rounded italic group-hover:border-[#22c55e]/30 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;