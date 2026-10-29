"use client";

import { projects } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/data/translations';

const ProjectGrid = () => {
  const { lang } = useLang();

  return (
    <section id="proyectos" className="px-6 pb-28">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold text-muted mb-6"
        >
          {ui.projects.sectionTitle[lang]}
        </motion.h2>

        {/* Línea superior que se dibuja al entrar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-line origin-left"
        />
        <ul>
          {projects.map((project, i) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-line"
            >
              <Link
                href={`/proyectos/${project.id}`}
                className="group relative grid grid-cols-[2.5rem_1fr_auto] gap-x-4 py-8 -mx-4 px-4 rounded-xl overflow-hidden"
              >
                {/* Fondo que entra desde la izquierda al hacer hover */}
                <span className="absolute inset-0 bg-warm origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                <span className="relative text-sm text-label tabular-nums pt-1.5 group-hover:text-mango transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative group-hover:translate-x-1.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-mango transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-body leading-relaxed mb-4">
                    {lang === 'en' ? project.description_en : project.description}
                  </p>
                  <p className="text-sm text-grape">
                    {project.tags.join(', ')}
                  </p>
                </div>

                <span className="relative mt-0.5 w-9 h-9 flex items-center justify-center rounded-full border border-line text-label group-hover:bg-mango group-hover:border-mango group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectGrid;
