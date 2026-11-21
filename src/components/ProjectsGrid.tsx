'use client';

import { useState } from 'react';
import { Project } from '@/types';
import ProjectCard from './ProjectCard';

const categories = ['Todos', 'Web Apps', 'E-commerce', 'Dashboards'] as const;
type Category = (typeof categories)[number];

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Category>('Todos');

  const visible =
    active === 'Todos' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div
        role="group"
        aria-label="Filtrar proyectos por categoría"
        className="flex flex-wrap gap-2 mb-8"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={active === category}
            onClick={() => setActive(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              active === category
                ? 'bg-primary text-white border-primary'
                : 'bg-surface text-ink border-line hover:bg-soft'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* h2 oculto: mantiene el orden h1 > h2 > h3 (Accesibilidad en Lighthouse) */}
      <h2 className="sr-only">Listado de proyectos</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} compact />
        ))}
      </div>
    </>
  );
}
