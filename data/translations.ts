export type Lang = 'es' | 'en';

export const ui = {
  hero: {
    cta: { es: 'Ver Proyectos', en: 'View Projects' },
    cv: { es: 'Descargar CV', en: 'Download CV' },
    cvFile: { es: '/cv-es.pdf', en: '/cv-en.pdf' },
  },
  projects: {
    sectionTitle: { es: 'Proyectos', en: 'Projects' },
  },
  detail: {
    back: { es: 'Volver', en: 'Back' },
    abstract: { es: 'Resumen', en: 'Abstract' },
    fromProblem: { es: 'El problema', en: 'The problem' },
    roles: { es: 'Quién lo usa', en: 'Who uses it' },
    approach: { es: 'Cómo lo encaré', en: 'How I approached it' },
    architecture: { es: 'Arquitectura', en: 'Architecture' },
    challenge: { es: 'Lo más difícil', en: 'The hard part' },
    highlights: { es: 'Resultados', en: 'Results' },
    specs: { es: 'Ficha', en: 'Details' },
    technologies: { es: 'Tecnologías', en: 'Technologies' },
  },
} as const;
