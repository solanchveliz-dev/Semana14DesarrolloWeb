import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import { ArrowRight, ArrowUpRight, Star } from './Icons';

interface ProjectCardProps {
  project: Project;
  compact?: boolean; // versión en lista (página /projects)
  highlight?: boolean; // muestra la etiqueta "Destacado"
}

const chip =
  'text-xs font-medium bg-bg border border-line text-ink px-2.5 py-1 rounded-md';

export default function ProjectCard({
  project,
  compact = false,
  highlight = false,
}: ProjectCardProps) {
  // Versión en lista: imagen a la izquierda, texto a la derecha
  if (compact) {
    return (
      <Link
        href={`/projects/${project.slug}`}
        className="group grid grid-cols-[110px_1fr] sm:grid-cols-[200px_1fr] gap-4 bg-surface border border-line rounded-2xl p-3 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition duration-300"
      >
        <div className="relative h-24 sm:h-32 rounded-xl overflow-hidden">
          {/* Imágenes con lazy loading */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            loading="lazy"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 110px, 200px"
          />
        </div>
        <div className="flex flex-col min-w-0 py-1">
          <h3 className="font-bold text-ink group-hover:text-primary-text transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted line-clamp-2 mb-2">{project.description}</p>
          <div className="mt-auto flex items-end justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className={chip}>
                  {tech}
                </span>
              ))}
            </div>
            <ArrowUpRight className="w-5 h-5 text-primary-text shrink-0" />
          </div>
        </div>
      </Link>
    );
  }

  // Versión tarjeta (inicio)
  return (
    <article className="group bg-surface rounded-2xl border border-line shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col">
      <div className="relative h-52 overflow-hidden">
        {/* Imágenes con lazy loading */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {highlight && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            <Star className="w-3.5 h-3.5" /> Destacado
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-ink mb-2">{project.title}</h3>
        <p className="text-muted mb-5 line-clamp-2">{project.description}</p>
        <div className="mt-auto flex items-end justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className={chip}>
                {tech}
              </span>
            ))}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`Ver proyecto ${project.title}`}
            className="w-10 h-10 shrink-0 grid place-items-center rounded-full bg-primary text-white hover:bg-primary/90 transition"
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
