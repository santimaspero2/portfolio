// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  type: 'software' | 'hardware' | 'data';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Mango App",
    description: "Aplicación de finanzas personales con sistema de rachas (streaks) para fomentar el ahorro. Integración de APIs y dashboard mobile-first.",
    tags: ["Django", "DRF", "Tailwind", "PostgreSQL"],
    type: "software",
    link: "#" // Meté tu repo de GitHub acá
  },
  {
    id: 2,
    title: "Mercedes 190E Engine Swap Control",
    description: "Gestión electrónica de motor VW 1.0 en chasis W201 utilizando Speeduino (Arduino-based ECU). Tunbeo de mapas de inyección y encendido.",
    tags: ["C++", "Arduino", "Tuning", "Hardware"],
    type: "hardware"
  },
  {
    id: 3,
    title: "Sistema de Gestión Gubernamental",
    description: "Webapp para la administración eficiente de recursos y legajos, enfocada en la escalabilidad y la integridad de datos.",
    tags: ["Django", "Python", "Management", "Analytics"],
    type: "software"
  }
];