import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo, contactHref } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import { ArrowRight, Atom, Bolt, Chat, Phone, Search } from '@/components/Icons';

const highlights = [
  { label: 'SEO Optimizado', Icon: Search },
  { label: 'Alto rendimiento', Icon: Bolt },
  { label: 'Responsive', Icon: Phone },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-soft/70 to-bg">
        <div className="container mx-auto px-4 py-12 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-block bg-soft text-primary-text text-xs md:text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Desarrolladora Full Stack
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6">
              Transformo ideas en{' '}
              <span className="block bg-linear-to-r from-primary-text to-accent-text bg-clip-text text-transparent">
                experiencias digitales.
              </span>
            </h1>
            <p className="text-lg text-muted max-w-xl mb-8">
              Soy {personalInfo.name}. Desarrollo aplicaciones web modernas, rápidas y
              optimizadas para ofrecer experiencias de alto rendimiento, accesibles y
              con excelente posicionamiento en buscadores (SEO).
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition"
              >
                Ver proyectos <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={contactHref}
                className="inline-flex items-center gap-2 border-2 border-primary text-primary-text font-semibold px-6 py-3 rounded-xl hover:bg-soft transition"
              >
                <Chat className="w-5 h-5" /> Hablemos
              </Link>
            </div>
            <ul className="flex flex-wrap items-center gap-6 text-ink font-medium" aria-label="Tecnologías principales">
              <li className="flex items-center gap-2">
                <span className="w-8 h-8 grid place-items-center rounded-full bg-black text-white text-sm font-bold" aria-hidden="true">N</span>
                Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="w-8 h-8 grid place-items-center rounded-md bg-[#3178c6] text-white text-xs font-bold" aria-hidden="true">TS</span>
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <Atom className="w-8 h-8 text-sky-500" />
                React
              </li>
            </ul>
          </div>

          {/* Imagen principal con decoraciones */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg aspect-square">
            <div
              aria-hidden="true"
              className="absolute inset-4 rounded-[46%_54%_50%_50%] bg-linear-to-br from-violet-300 to-indigo-200 dark:from-violet-900 dark:to-indigo-950"
            />
            <div className="absolute inset-10 rounded-[46%_54%_50%_50%] overflow-hidden shadow-2xl">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 480px"
              />
            </div>

            {/* Ventana de código decorativa */}
            <div
              aria-hidden="true"
              className="absolute top-2 left-0 w-32 md:w-40 rounded-xl bg-slate-900 shadow-xl p-3 -rotate-3"
            >
              <div className="flex gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="space-y-2">
                <span className="block h-1.5 w-3/4 rounded bg-violet-400" />
                <span className="block h-1.5 w-1/2 rounded bg-sky-400" />
                <span className="block h-1.5 w-5/6 rounded bg-indigo-400" />
                <span className="block h-1.5 w-2/3 rounded bg-violet-300" />
              </div>
            </div>

            {/* Etiquetas flotantes */}
            <ul className="absolute right-0 top-1/4 space-y-3">
              {highlights.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 bg-surface text-ink text-sm font-semibold px-3 py-2 rounded-xl shadow-lg border border-line"
                >
                  <Icon className="w-4 h-4 text-primary-text" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary-text mb-2">
          Mis proyectos
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-ink mb-3">
          Proyectos destacados
        </h2>
        <p className="text-lg text-muted max-w-2xl mb-10">
          Una selección de aplicaciones reales donde aplico las mejores prácticas de
          desarrollo, rendimiento y SEO.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
