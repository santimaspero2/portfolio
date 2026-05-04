"use client";
import React, { use } from 'react';
import { projects } from '@/data/projects';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Globe, GitBranch, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProyectoDetalle({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const project = projects.find(p => String(p.id) === String(id));

  if (!project) return null;

  return (
    <main className="min-h-screen bg-[#0a0a1f] text-slate-300 pb-20">
      {/* Header Estilo Galería */}
      <div className="relative h-[50vh] flex items-end bg-[#0c0c25] overflow-hidden">
        {/* Decorado de fondo */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#004225 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a0a1f] to-transparent" />
        
        <div className="max-w-6xl mx-auto w-full px-6 pb-12 relative z-10">
          <motion.button 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.push('/')}
            className="group flex items-center gap-3 px-4 py-2 border border-[#004225] bg-[#004225]/10 rounded-full text-[#22c55e] font-mono text-xs font-bold mb-8 hover:bg-[#004225] hover:text-white transition-all shadow-[0_0_15px_rgba(34,197,94,0.1)]"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="tracking-[0.15em]">VOLVER AL PORTAFOLIO</span>
          </motion.button>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-white tracking-tighter uppercase"
          >
            {project.title.split(' ')[0]} <br />
            <span className="text-[#22c55e]">{project.title.split(' ').slice(1).join(' ')}</span>
          </motion.h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16">
        
        {/* Lado Izquierdo: Descripción Narrativa */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="lg:col-span-7 space-y-12"
        >
          <section>
            <h3 className="text-[#004225] font-mono font-black text-xs uppercase tracking-[0.3em] mb-6">Abstract_</h3>
            <p className="text-2xl text-slate-200 leading-relaxed font-light">
              {project.longDescription}
            </p>
          </section>

          <section className="space-y-6">
            <h3 className="text-[#004225] font-mono font-black text-xs uppercase tracking-[0.3em]">Hitos Técnicos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.highlights?.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-[#14142b]/50 border border-[#004225]/20 rounded-lg">
                  <CheckCircle2 size={18} className="text-[#22c55e] shrink-0" />
                  <span className="text-sm font-medium text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </motion.div>

        {/* Lado Derecho: Sidebar de Specs */}
        <motion.aside 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="bg-[#14142b] p-8 rounded-2xl border border-[#004225]/30 sticky top-28">
            <h4 className="text-white font-bold mb-6 flex items-center justify-between">
              Especificaciones
              <span className="text-[10px] bg-[#004225] text-white px-2 py-0.5 rounded tracking-widest">{project.type}</span>
            </h4>
            
            <div className="space-y-6">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-3">Tecnologías</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-mono bg-[#0a0a1f] text-slate-400 px-3 py-1 rounded border border-white/5 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex gap-4">
                {project.link && (
                  <a href={project.link} className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-3 rounded-lg font-bold text-sm hover:bg-[#22c55e] hover:text-white transition-all">
                    <GitBranch size={18} /> GITHUB
                  </a>
                )}
                <button className="p-3 border border-[#004225] rounded-lg text-[#22c55e] hover:bg-[#004225] hover:text-white transition-all">
                  <Globe size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.aside>

      </div>
    </main>
  );
}