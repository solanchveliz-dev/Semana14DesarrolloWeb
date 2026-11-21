import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import SocialLinks from '@/components/SocialLinks';
import { ArrowRight, Code, Download, Layers, Rocket, Star } from '@/components/Icons';

const stats = [
  { value: '10+', label: 'Proyectos', Icon: Code },
  { value: '3+', label: 'Años de experiencia', Icon: Layers },
  { value: '100%', label: 'Compromiso', Icon: Star },
  { value: 'SEO', label: 'Optimizado', Icon: Rocket },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero Section (fondo oscuro) */}
      <section className="relative overflow-hidden bg-hero text-white">
        {/* Imagen de fondo optimizada con next/image */}
        <Image
          src={personalInfo.heroBg}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Capa oscura a la izquierda para que el texto se lea bien */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-hero/80 via-hero/40 to-transparent"
        />
        <div className="relative container mx-auto px-4 pt-12 pb-32 md:pt-16 md:pb-40 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 bg-accent text-accent-ink font-semibold px-4 py-1.5 rounded-full mb-5">
              <span aria-hidden="true">👋</span> Hola, soy
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-3">
              {personalInfo.name}
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-5">{personalInfo.title}</p>
            <p className="text-lg text-slate-300 max-w-xl mb-8">{personalInfo.description}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-accent text-accent-ink font-bold px-6 py-3 rounded-xl shadow-lg shadow-accent/20 hover:brightness-110 transition"
              >
                Ver proyectos <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={personalInfo.cv}
                download
                className="inline-flex items-center gap-2 border-2 border-white/70 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition"
              >
                <Download className="w-5 h-5" /> Descargar CV
              </a>
            </div>
            <SocialLinks onDark />
          </div>

          {/* Foto con fondo transparente (se apoya en la parte baja del hero) */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-xl aspect-[1312/1199] self-end lg:-mb-40">
            <Image
              src={personalInfo.heroImage}
              alt={`Foto de ${personalInfo.name}`}
              fill
              priority
              className="object-contain object-bottom drop-shadow-2xl"
              sizes="(max-width: 1024px) 90vw, 576px"
            />
            {/* Logo sobre la laptop */}
            <span
              aria-hidden="true"
              className="absolute left-[33%] top-[83%] -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl font-extrabold text-white/80"
            >
              NV<span className="text-accent">&lt;/&gt;</span>
            </span>
          </div>
        </div>
      </section>

      {/* Barra de estadísticas */}
      <section aria-label="Resumen" className="relative z-10 container mx-auto px-4 -mt-20">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-5 bg-surface border border-line rounded-3xl shadow-xl p-5 md:p-6 md:divide-x md:divide-line">
          {stats.map(({ value, label, Icon }) => (
            <li key={label} className="flex items-center justify-center gap-3 md:px-4">
              <Icon className="w-9 h-9 text-primary-text shrink-0" />
              <div>
                <p className="text-xl md:text-2xl font-extrabold text-ink leading-none">{value}</p>
                <p className="text-sm text-muted">{label}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-16 md:py-20 text-center">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-text mb-2">
          Proyectos destacados
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-ink mb-3">
          Algunos de <span className="text-primary-text">mis trabajos</span>
        </h2>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
          Proyectos reales aplicando las mejores prácticas de desarrollo, rendimiento y SEO.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} highlight={index === 0} />
          ))}
        </div>
      </section>
    </>
  );
}
