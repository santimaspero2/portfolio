"use client";

import { projects } from '@/data/projects';
import { ExternalLink, Code, Cog, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectGrid = () => {
  return (
    <section id="proyectos" className="bg-[#0a0a14] py-24 px-6 relative">
      {/* Sutil decorado de fondo para coherencia */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#5e5eb8 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-white mb-16 flex items-center gap-3"
        >
          <div className="p-2 bg-[#1f1f69] rounded-lg">
            <Code className="text-[#5e5eb8]" />
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
                  className="relative bg-[#0d0d1a] border border-[#1f1f69] p-8 rounded-2xl group overflow-hidden"
                >
                    {/* Efecto de luz interna en el hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5e5eb8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Borde inferior animado que se activa al pasar el mouse */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#5e5eb8] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-6">
                        <div className="p-3 bg-[#1f1f69] text-[#5e5eb8] rounded-lg shadow-[0_0_15px_rgba(94,94,184,0.3)]">
                          {project.type === 'software' && <Code size={22} />}
                          {project.type === 'hardware' && <Cog size={22} />}
                          {project.type === 'data' && <BarChart3 size={22} />}
                        </div>
                        <ExternalLink size={20} className="text-[#7a7a82] group-hover:text-white transition-colors" />
                      </div>

                      {/* El título ahora es blanco puro para máximo contraste */}
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                        {project.title}
                      </h3>
                      
                      {/* El gris solo para la descripción */}
                      <p className="text-[#7a7a82] text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 text-[10px] font-mono bg-[#1f1f69]/40 text-[#5e5eb8] border border-[#5e5eb8]/20 rounded-full">
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