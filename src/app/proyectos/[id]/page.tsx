"use client";
import { projects } from '@/data/projects';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Cpu, Code2, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProyectoDetalle() {
  const { id } = useParams();
  const router = useRouter();
  
  // Buscamos el proyecto por ID
  const project = projects.find(p => p.id === Number(id));

  if (!project) return <div className="text-white p-20">Proyecto no encontrado...</div>;

  return (
    <main className="min-h-screen bg-[#0a0a14] text-white p-6 md:p-20">
      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => router.back()}
        className="flex items-center gap-2 text-[#7a7a82] hover:text-[#5e5eb8] transition-colors mb-12"
      >
        <ArrowLeft size={20} /> Volver al portafolio
      </motion.button>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="border-l-4 border-[#5e5eb8] pl-6 mb-8"
        >
          <span className="text-[#5e5eb8] font-mono text-sm uppercase tracking-widest">{project.type}</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">{project.title}</h1>
        </motion.div>

        <p className="text-xl text-[#7a7a82] leading-relaxed mb-12">
          {project.description}
        </p>

        {/* Sección de detalles técnicos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#1f1f69]/20 p-6 rounded-2xl border border-[#1f1f69]">
            <h3 className="flex items-center gap-2 font-bold mb-4 text-[#5e5eb8]">
              <Database size={18} /> Stack Técnico
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="bg-[#1f1f69] text-slate-300 px-3 py-1 rounded-md text-sm border border-[#5e5eb8]/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#1f1f69]/20 p-6 rounded-2xl border border-[#1f1f69]">
            <h3 className="flex items-center gap-2 font-bold mb-4 text-[#5e5eb8]">
              <Cpu size={18} /> Desafíos del Proyecto
            </h3>
            <p className="text-sm text-[#7a7a82]">
              Implementación de lógica compleja y optimización de recursos para asegurar escalabilidad.
            </p>
          </div>
        </div>

        {/* Placeholder para imágenes o más texto */}
        <div className="aspect-video bg-[#1f1f69]/10 border border-dashed border-[#1f1f69] rounded-3xl flex items-center justify-center text-[#7a7a82]">
           [ Aquí podemos meter capturas de pantalla o fotos del motor ]
        </div>
      </div>
    </main>
  );
}