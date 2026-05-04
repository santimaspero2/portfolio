// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string; // Nueva
  highlights: string[];    // Nueva
  tags: string[];
  link?: string;
  type: 'software' | 'hardware' | 'data';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Mango Finanzas",
    description: "Aplicación de finanzas personales con una implementación de atajos de Iphone para facilitar la carga de datos. Integración y desarrollo de APIs y dashboards mobile-first.",
    longDescription: "Mango nació de la necesidad de cargar datos financieros de forma sencilla y visualizarlos claramente. El núcleo del proyecto es un algoritmo en Django que procesa transacciones para crear una historia de las finanzas de cada uno. No es solo una app de gastos, es una herramienta de comportamiento financiero.",
    highlights: ["Sincronización con APIs bancarias", "Algoritmo de procesado de datos", "Arquitectura escalable en PostgreSQL"],
    tags: ["Django", "DRF", "Tailwind", "PostgreSQL", "React Native"],
    type: "software",
  },
  {
    id: 2,
    title: "Teclado ergonómico personalizado",
    description: "Diseño y construcción de un teclado mecánico ergonómico con microcontrolador Nice!Nano V2, optimizado para programación y gaming. Enfoque en la personalización y la comodidad.",
    longDescription: "El proyecto del teclado ergonómico personalizado se centró en crear una herramienta de entrada que no solo fuera funcional, sino también cómoda para largas sesiones de programación y gaming. Utilizando el microcontrolador Nice!Nano V2, diseñé un layout dividido que reduce la tensión en las muñecas. La construcción incluyó el diseó dividido para mejorar la ergonomía y la personalización del formato se adapta justo a mis necesidades, algo que en un teclado comercial no encontraba.",
    highlights: ["Uso de herramientas de diseño", "Desarrollo personalizado", "Ergonomía, comodidad y estética"],
    tags: ["Ergonomía", "Diseño", "Arduino", "Hardware"],
    type: "hardware",
    link: "https://github.com/santimaspero2/cs-keyboard"
  },
  {
    id: 3,
    title: "SADIGES",
    description: "Webapp para la administración eficiente de recursos y legajos, enfocada en la escalabilidad y la integridad de datos.",
    longDescription: "SADIGES es una webapp desarrollada en Django enfocada en la transparencia, trazabilidad y protección de datos públicos. Este proyecto se centra en la mejora y digitalización de procesos de trabajo burocráticos y engorrosos, optimizando la experiencia laboral de todo un programa estatal.",
    highlights: ["Arquitectura escalable en Python", "Compliance con estándares de seguridad estatales", "Auditorías de seguridad"],
    tags: ["Django", "Python", "Management", "Analytics"],
    type: "software"
  }
];