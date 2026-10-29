"use client";
import React, { use, useState } from 'react';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/data/translations';
import { getAssetPath } from '@/utils/path';

const ease = [0.22, 1, 0.36, 1] as const;

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, ease }}
    className="relative grid md:grid-cols-[11rem_1fr] gap-x-10 gap-y-3 py-10"
  >
    {/* Línea superior que se dibuja al entrar */}
    <motion.span
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease }}
      className="absolute top-0 left-0 w-full h-px bg-line origin-left"
    />
    <h2 className="text-sm font-semibold text-muted md:pt-1">{title}</h2>
    <div>{children}</div>
  </motion.section>
);

const header: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const headerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function ProyectoDetalleClient({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
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

  const links = [
    project.liveLink && { label: lang === 'en' ? 'Visit website' : 'Ir a la web', href: project.liveLink },
    project.link && { label: 'GitHub', href: project.link },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <main className="min-h-screen px-6 pt-24 pb-28">
      <div className="max-w-4xl mx-auto">

        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-14">
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {ui.detail.back[lang]}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header variants={header} initial="hidden" animate="visible" className="mb-12">
          <motion.h1 variants={headerItem} className="text-5xl md:text-7xl font-bold leading-none mb-5">
            {project.title}<span className="text-mango">.</span>
          </motion.h1>
          <motion.p variants={headerItem} className="text-xl text-body leading-relaxed max-w-2xl mb-6">
            {lang === 'en' ? project.description_en : project.description}
          </motion.p>
          <motion.div variants={headerItem} className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  i === 0
                    ? 'group inline-flex items-center gap-1.5 px-4 py-2 bg-mango-dark text-white font-semibold rounded-lg hover:bg-mango hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(242,106,30,0.6)] transition-all'
                    : 'group inline-flex items-center gap-1 font-semibold text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-grape hover:text-grape transition-colors'
                }
              >
                {link.label}
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
            <span className="text-muted">{project.tags.join(' · ')}</span>
          </motion.div>
        </motion.header>

        {/* Screenshots */}
        {mockups.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="mb-14"
          >
            <div className="grid rounded-xl overflow-hidden border border-line bg-white shadow-[0_24px_60px_-30px_rgba(32,35,58,0.35)]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={activeImg}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="[grid-area:1/1]"
                >
                  <Image
                    src={getAssetPath(mockups[activeImg])}
                    alt={`${project.title} screenshot ${activeImg + 1}`}
                    width={1200}
                    height={700}
                    className="w-full h-auto"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            {mockups.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                {mockups.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                      i === activeImg ? 'border-mango -translate-y-0.5' : 'border-transparent opacity-50 hover:opacity-100 hover:-translate-y-0.5'
                    }`}
                  >
                    <Image src={getAssetPath(src)} alt={`thumb ${i + 1}`} fill className="object-cover object-top" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}

        <Section title={ui.detail.fromProblem[lang]}>
          <p className="text-lg text-ink leading-relaxed">{description}</p>
        </Section>

        {highlights?.length > 0 && (
          <Section title={ui.detail.highlights[lang]}>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.06 }}
                  className="group flex gap-3 text-body"
                >
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-mango shrink-0 group-hover:scale-150 transition-transform" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </Section>
        )}

        {roles.length > 0 && (
          <Section title={ui.detail.roles[lang]}>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {roles.map((role, index) => (
                <motion.div
                  key={role.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.06 }}
                >
                  <dt className="font-semibold text-ink mb-1">{lang === 'en' ? role.name_en : role.name}</dt>
                  <dd className="text-sm text-body leading-relaxed">
                    {lang === 'en' ? role.description_en : role.description}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </Section>
        )}

        {approach && (
          <Section title={ui.detail.approach[lang]}>
            <p className="text-body leading-relaxed">{approach}</p>
          </Section>
        )}

        {architecture && (
          <Section title={ui.detail.architecture[lang]}>
            <p className="text-body leading-relaxed">{architecture}</p>
          </Section>
        )}

        <Section title={ui.detail.challenge[lang]}>
          <div className="relative pl-5">
            <motion.span
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="absolute left-0 top-0 w-0.5 h-full bg-grape/50 origin-top"
            />
            <p className="text-body leading-relaxed">{challenge}</p>
          </div>
        </Section>

      </div>
    </main>
  );
}
