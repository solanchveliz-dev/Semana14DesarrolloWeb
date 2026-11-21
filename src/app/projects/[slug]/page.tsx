import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { techStyle } from '@/lib/tech';
import { ArrowLeft, ArrowUpRight, Check, ChevronRight, Code } from '@/components/Icons';

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
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          <li>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-line bg-surface text-primary-text font-medium px-3 py-1.5 rounded-lg hover:bg-soft transition"
            >
              <ArrowLeft className="w-4 h-4" /> Proyectos
            </Link>
          </li>
          <li aria-hidden="true" className="text-muted">
            <ChevronRight className="w-4 h-4" />
          </li>
          <li aria-current="page" className="text-ink font-medium">
            {project.title}
          </li>
        </ol>
      </nav>

      <article>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center mb-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted mb-8">{project.description}</p>
            <div className="flex flex-wrap gap-4">
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
                  Código <Code className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-line bg-surface shadow-xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <section className="bg-surface border border-line rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-ink mb-5">Tecnologías</h2>
            <ul className="flex flex-wrap gap-4">
              {project.technologies.map((tech) => {
                const style = techStyle(tech);
                return (
                  <li key={tech} className="flex flex-col items-center gap-1.5 w-20">
                    <span
                      aria-hidden="true"
                      className={`w-12 h-12 grid place-items-center rounded-xl font-bold text-sm ${style.cls}`}
                    >
                      {style.abbr}
                    </span>
                    <span className="text-xs text-muted text-center">{tech}</span>
                  </li>
                );
              })}
            </ul>
          </section>

          {project.features && project.features.length > 0 && (
            <section className="bg-surface border border-line rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-ink mb-5">Características</h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-ink">
                    <Check className="w-5 h-5 text-primary-text shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>
    </div>
  );
}
