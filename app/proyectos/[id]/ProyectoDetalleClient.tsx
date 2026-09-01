"use client";
import React, { use, useState } from 'react';
import { projects } from '@/data/projects';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Globe, GitBranch, Rocket, Layers, Shield, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/data/translations';
import { getAssetPath } from '@/utils/path';

/* ── Reusable section heading ── */
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-[#004225] font-mono font-black text-xs uppercase tracking-[0.3em] mb-6">
    {children}
  </h3>
);

/* ── Fade-in wrapper ── */
const FadeIn = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.45, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

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
  const roles = project.roles ?? [];
  const approach = lang === 'en' ? project.approach_en : project.approach;
  const architecture = lang === 'en' ? project.architecture_en : project.architecture;

  return (
    <main className="min-h-screen bg-[#0a0a1f] text-slate-300 pb-20">

      {/* ═══════ Hero Header ═══════ */}
      <div className="relative min-h-[50vh] flex items-end bg-[#0c0c25] overflow-hidden pt-12">
        <div className="absolute inset-0 opacity-20"
             style={{ backgroundImage: 'radial-gradient(#004225 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a0a1f] to-transparent" />

        {mockups[0] && (
          <div className="absolute inset-0 opacity-10">
            <Image src={getAssetPath(mockups[0])} alt="" fill className="object-cover object-top" />
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

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold text-white tracking-tighter uppercase"
            >
              {project.title.split(' ')[0]} <br />
              <span className="text-[#22c55e]">{project.title.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-2 shrink-0 flex-wrap"
            >
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 px-5 py-3 bg-[#004225] text-white rounded-xl font-bold text-xs md:text-sm hover:bg-[#22c55e] transition-all shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                >
                  <Globe size={18} className="text-[#22c55e] group-hover:text-white transition-colors" />
                  <span className="tracking-wider">{lang === 'en' ? 'VISIT WEBSITE' : 'IR A LA WEB'}</span>
                  <ExternalLink size={16} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 px-5 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-xs md:text-sm hover:bg-white hover:text-black transition-all"
                >
                  <GitBranch size={18} />
                  <span className="tracking-wider">GITHUB</span>
                  <ExternalLink size={16} className="opacity-70 group-hover:opacity-100 transition-all" />
                </a>
              )}
            </motion.div>
          </div>

          {/* Short description under title */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed"
          >
            {lang === 'en' ? project.description_en : project.description}
          </motion.p>
        </div>
      </div>

      {/* ═══════ Content Grid ═══════ */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16">

        {/* ─── Main Column ─── */}
        <div className="lg:col-span-7 space-y-16">

          {/* § From Problem to Product */}
          <FadeIn>
            <section>
              <SectionHeading>{ui.detail.fromProblem[lang]}</SectionHeading>
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
          </FadeIn>

          {/* § System Roles */}
          {roles.length > 0 && (
            <FadeIn delay={0.05}>
              <section>
                <SectionHeading>{ui.detail.roles[lang]}</SectionHeading>
                <div className={`grid gap-4 ${roles.length === 1 ? 'grid-cols-1 max-w-sm' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                  {roles.map((role, i) => (
                    <motion.div
                      key={`${role.name}-${lang}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      className="group relative p-5 bg-[#14142b]/60 border border-[#004225]/20 rounded-xl hover:border-[#22c55e]/30 transition-all duration-400 overflow-hidden"
                    >
                      {/* Glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <div className="relative z-10">
                        <span className="text-2xl mb-3 block">{role.icon}</span>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1.5 group-hover:text-[#22c55e] transition-colors">
                          {lang === 'en' ? role.name_en : role.name}
                        </h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          {lang === 'en' ? role.description_en : role.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            </FadeIn>
          )}

          {/* § Development Approach */}
          {approach && (
            <FadeIn delay={0.1}>
              <section>
                <SectionHeading>{ui.detail.approach[lang]}</SectionHeading>
                <motion.div
                  key={`approach-${id}-${lang}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-4 items-start"
                >
                  <div className="shrink-0 p-3 bg-[#14142b] border border-[#004225]/30 rounded-lg mt-0.5">
                    <Rocket size={20} className="text-[#22c55e]" />
                  </div>
                  <p className="text-slate-300 leading-relaxed text-base">{approach}</p>
                </motion.div>
              </section>
            </FadeIn>
          )}

          {/* § Architecture */}
          {architecture && (
            <FadeIn delay={0.15}>
              <section>
                <SectionHeading>{ui.detail.architecture[lang]}</SectionHeading>
                <motion.div
                  key={`arch-${id}-${lang}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative p-6 bg-[#14142b]/40 border border-[#004225]/20 rounded-xl"
                >
                  <div className="absolute top-6 left-6">
                    <Layers size={18} className="text-[#004225]" />
                  </div>
                  <p className="text-slate-300 leading-relaxed text-base pl-8">{architecture}</p>
                </motion.div>
              </section>
            </FadeIn>
          )}

          {/* § Technical Challenge */}
          <FadeIn delay={0.2}>
            <section>
              <SectionHeading>{ui.detail.challenge[lang]}</SectionHeading>
              <motion.div
                key={`challenge-${id}-${lang}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative pl-6 border-l-2 border-[#004225] hover:border-[#22c55e] transition-colors duration-500"
              >
                <div className="absolute -left-[13px] top-0 p-1 bg-[#0a0a1f]">
                  <Shield size={14} className="text-[#004225]" />
                </div>
                <p className="text-slate-300 leading-relaxed text-base">{challenge}</p>
              </motion.div>
            </section>
          </FadeIn>

          {/* § Key Achievements */}
          <FadeIn delay={0.25}>
            <section className="space-y-6">
              <SectionHeading>{ui.detail.highlights[lang]}</SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights?.map((item, index) => (
                  <motion.div
                    key={`${index}-${lang}`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-4 bg-[#14142b]/50 border border-[#004225]/20 rounded-lg group hover:border-[#22c55e]/30 transition-colors"
                  >
                    <CheckCircle2 size={18} className="text-[#22c55e] shrink-0" />
                    <span className="text-sm font-medium text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* § Screenshots Gallery */}
          {mockups.length > 0 && (
            <FadeIn delay={0.3}>
              <section className="space-y-4">
                <SectionHeading>Screenshots_</SectionHeading>
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
                        src={getAssetPath(mockups[activeImg])}
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
                        <Image src={getAssetPath(src)} alt={`thumb ${i + 1}`} fill className="object-cover object-top" />
                      </button>
                    ))}
                  </div>
                )}
              </section>
            </FadeIn>
          )}
        </div>

        {/* ─── Sidebar ─── */}
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
