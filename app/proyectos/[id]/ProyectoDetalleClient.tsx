"use client";
import React, { use, useState } from 'react';
import { projects } from '@/data/projects';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Globe, GitBranch } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/data/translations';

export default function ProyectoDetalleClient({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { lang } = useLang();
  const project = projects.find(p => String(p.id) === String(id));
  const [activeImg, setActiveImg] = useState(0);

  if (!project) return null;

  const description = lang === 'en' ? project.longDescription_en : project.longDescription;
  const challenge = lang === 'en' ? project.challenge_en : project.challenge;
  const highlights = lang === 'en' ? project.highlights_en : project.highlights;
  const mockups = project.mockups ?? [];

  return (
    <main className="min-h-screen bg-[#0a0a1f] text-slate-300 pb-20">

      {/* Header */}
      <div className="relative h-[50vh] flex items-end bg-[#0c0c25] overflow-hidden">
        <div className="absolute inset-0 opacity-20"
             style={{ backgroundImage: 'radial-gradient(#004225 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a0a1f] to-transparent" />

        {mockups[0] && (
          <div className="absolute inset-0 opacity-10">
            <Image src={mockups[0]} alt="" fill className="object-cover object-top" />
          </div>
        )}

        <div className="max-w-6xl mx-auto w-full px-6 pb-12 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.push('/')}
            className="group flex items-center gap-3 px-4 py-2 border border-[#004225] bg-[#004225]/10 rounded-full text-[#22c55e] font-mono text-xs font-bold mb-8 hover:bg-[#004225] hover:text-white transition-all shadow-[0_0_15px_rgba(34,197,94,0.1)]"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="tracking-[0.15em]">{ui.detail.back[lang]}</span>
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

        {/* Columna principal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="lg:col-span-7 space-y-12"
        >
          {/* Resumen */}
          <section>
            <h3 className="text-[#004225] font-mono font-black text-xs uppercase tracking-[0.3em] mb-6">
              {ui.detail.abstract[lang]}
            </h3>
            <motion.p
              key={`abstract-${id}-${lang}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl text-slate-200 leading-relaxed font-light"
            >
              {description}
            </motion.p>
          </section>

          {/* Desafío técnico */}
          <section>
            <h3 className="text-[#004225] font-mono font-black text-xs uppercase tracking-[0.3em] mb-6">
              {ui.detail.challenge[lang]}
            </h3>
            <motion.div
              key={`challenge-${id}-${lang}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative pl-6 border-l-2 border-[#004225] hover:border-[#22c55e] transition-colors duration-500"
            >
              <p className="text-slate-300 leading-relaxed text-base">{challenge}</p>
            </motion.div>
          </section>

          {/* Hitos */}
          <section className="space-y-6">
            <h3 className="text-[#004225] font-mono font-black text-xs uppercase tracking-[0.3em]">
              {ui.detail.highlights[lang]}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights?.map((item, index) => (
                <motion.div
                  key={`${index}-${lang}`}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-[#14142b]/50 border border-[#004225]/20 rounded-lg"
                >
                  <CheckCircle2 size={18} className="text-[#22c55e] shrink-0" />
                  <span className="text-sm font-medium text-slate-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Galería */}
          {mockups.length > 0 && (
            <section className="space-y-4">
              <h3 className="text-[#004225] font-mono font-black text-xs uppercase tracking-[0.3em]">
                Screenshots_
              </h3>
              <div className="relative w-full rounded-xl overflow-hidden border border-[#004225]/30 bg-[#14142b] shadow-[0_0_40px_rgba(0,66,37,0.15)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImg}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Image
                      src={mockups[activeImg]}
                      alt={`${project.title} screenshot ${activeImg + 1}`}
                      width={1200}
                      height={700}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              {mockups.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {mockups.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`relative shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        i === activeImg
                          ? 'border-[#22c55e] shadow-[0_0_12px_rgba(34,197,94,0.3)]'
                          : 'border-[#004225]/30 opacity-50 hover:opacity-80'
                      }`}
                    >
                      <Image src={src} alt={`thumb ${i + 1}`} fill className="object-cover object-top" />
                    </button>
                  ))}
                </div>
              )}
            </section>
          )}
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="bg-[#14142b] p-8 rounded-2xl border border-[#004225]/30 sticky top-28">
            <h4 className="text-white font-bold mb-6 flex items-center justify-between">
              {ui.detail.specs[lang]}
              <span className="text-[10px] bg-[#004225] text-white px-2 py-0.5 rounded tracking-widest">{project.type}</span>
            </h4>

            <div className="space-y-6">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-3">
                  {ui.detail.technologies[lang]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-mono bg-[#0a0a1f] text-slate-400 px-3 py-1 rounded border border-white/5 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex gap-3 flex-wrap">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-3 rounded-lg font-bold text-sm hover:bg-[#22c55e] hover:text-white transition-all"
                  >
                    <GitBranch size={18} /> GITHUB
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#004225] text-white py-3 rounded-lg font-bold text-sm hover:bg-[#22c55e] transition-all"
                  >
                    <Globe size={18} /> LIVE
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.aside>

      </div>
    </main>
  );
}
