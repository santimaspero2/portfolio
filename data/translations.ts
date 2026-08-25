export type Lang = 'es' | 'en';

export const ui = {
  hero: {
    cta: { es: 'Ver Proyectos', en: 'View Projects' },
    cv: { es: 'Descargar CV', en: 'Download CV' },
    cvFile: { es: '/cv-es.pdf', en: '/cv-en.pdf' },
  },
  projects: {
    sectionTitle: { es: 'Proyectos Seleccionados', en: 'Selected Projects' },
  },
  detail: {
    back: { es: 'VOLVER AL PORTAFOLIO', en: 'BACK TO PORTFOLIO' },
    abstract: { es: 'Resumen_', en: 'Abstract_' },
    fromProblem: { es: 'Del Problema al Producto_', en: 'From Problem to Product_' },
    roles: { es: 'Roles del Sistema', en: 'System Roles' },
    approach: { es: 'Enfoque de Desarrollo_', en: 'Development Approach_' },
    architecture: { es: 'Arquitectura_', en: 'Architecture_' },
    challenge: { es: 'Desafío Técnico_', en: 'Technical Challenge_' },
    highlights: { es: 'Hitos Técnicos', en: 'Key Achievements' },
    specs: { es: 'Especificaciones', en: 'Specifications' },
    technologies: { es: 'Tecnologías', en: 'Technologies' },
  },
} as const;
