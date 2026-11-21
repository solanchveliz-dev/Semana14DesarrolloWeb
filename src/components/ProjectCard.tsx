import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import { ArrowRight, ArrowUpRight, ProjectIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export default function ProjectCard({ project, compact = false }: ProjectCardProps) {
  // Versión compacta (página /projects): imagen + título + flecha
  if (compact) {
    return (
      <Link
        href={`/projects/${project.slug}`}
        className="group block bg-surface rounded-2xl border border-line shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
      >
        <div className="relative h-52 overflow-hidden">
          {/* Imágenes con lazy loading */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            loading="lazy"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-4 flex items-center justify-between gap-2">
          <h3 className="font-bold text-ink group-hover:text-primary-text transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-primary-text shrink-0" />
        </div>
      </Link>
    );
  }

  // Versión completa (inicio): imagen, ícono, descripción, tecnologías
  return (
    <article className="group bg-surface rounded-2xl border border-line shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
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
        {project.icon && (
          <span className="absolute left-4 bottom-4 w-12 h-12 grid place-items-center rounded-xl bg-surface text-primary-text shadow-md">
            <ProjectIcon name={project.icon} className="w-6 h-6" />
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-ink mb-2">{project.title}</h3>
        <p className="text-muted mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium bg-bg border border-line text-ink px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs font-medium bg-bg border border-line text-ink px-2.5 py-1 rounded-md">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-auto inline-flex items-center gap-2 font-semibold text-primary-text hover:gap-3 transition-all"
        >
          Ver proyecto
          <span className="sr-only"> {project.title}</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </article>
  );
}
