import { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectsGrid from '@/components/ProjectsGrid';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Explora mi colección de proyectos de desarrollo web y aplicaciones',
  openGraph: {
    title: 'Proyectos - Portafolio',
    description: 'Explora mi colección de proyectos de desarrollo web',
    images: ['/og-projects.jpg'],
  },
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <p className="text-sm font-semibold tracking-widest uppercase text-primary-text mb-2">
        Portafolio
      </p>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink mb-4">
        Mis proyectos
      </h1>
      <p className="text-lg text-muted max-w-2xl mb-8">
        Explora una selección de aplicaciones web que he desarrollado, aplicando
        tecnologías modernas, optimización y buenas prácticas de SEO.
      </p>

      <ProjectsGrid projects={projects} />
    </div>
  );
}
