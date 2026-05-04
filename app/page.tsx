import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <ProjectGrid />
      {/* Acá después podemos meter una sección de contacto o skills */}
    </main>
  );
}