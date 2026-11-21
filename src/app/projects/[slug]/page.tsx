import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { ArrowUpRight, Check, ChevronRight, Github } from '@/components/Icons';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-10 md:py-14">
      {/* Breadcrumb */}
      <nav aria-label="Ruta de navegación" className="mb-8">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link href="/projects" className="text-primary-text font-medium hover:underline">
              Proyectos
            </Link>
          </li>
          <li aria-hidden="true" className="text-muted">
            <ChevronRight className="w-4 h-4" />
          </li>
          <li aria-current="page" className="text-ink">
            {project.title}
          </li>
        </ol>
      </nav>

      <article className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-line bg-surface shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-muted mb-6">{project.description}</p>

          <h2 className="text-lg font-bold text-ink mb-3">Tecnologías</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium bg-surface border border-line text-ink px-3 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition"
              >
                Ver demo <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary-text font-semibold px-6 py-3 rounded-xl hover:bg-soft transition"
              >
                <Github className="w-5 h-5" /> GitHub <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>

          {project.features && project.features.length > 0 && (
            <>
              <h2 className="text-lg font-bold text-ink mb-3">Características</h2>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-muted">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </article>
    </div>
  );
}
