import { Metadata } from 'next';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';
import { Briefcase, Folder, Target } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
};

const stats = [
  { value: '+3 años', label: 'de experiencia', Icon: Briefcase },
  { value: '10+', label: 'proyectos', Icon: Folder },
  { value: 'Enfoque en', label: 'web y SEO', Icon: Target },
];

const skills = [
  { name: 'Next.js', color: 'bg-black dark:bg-white' },
  { name: 'React', color: 'bg-sky-500' },
  { name: 'TypeScript', color: 'bg-blue-600' },
  { name: 'Node.js', color: 'bg-green-600' },
  { name: 'Tailwind CSS', color: 'bg-cyan-500' },
  { name: 'PostgreSQL', color: 'bg-indigo-600' },
  { name: 'MongoDB', color: 'bg-emerald-600' },
  { name: 'Git / GitHub', color: 'bg-orange-600' },
  { name: 'Docker', color: 'bg-sky-600' },
  { name: 'AWS', color: 'bg-amber-500' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary-text mb-6">
          Sobre mí
        </p>

        <div className="grid sm:grid-cols-[220px_1fr] gap-8 items-center mb-10">
          <div className="relative w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              className="object-cover"
              loading="lazy"
              sizes="220px"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-ink mb-4">
              Conoce más sobre mí
            </h1>
            <div className="text-muted space-y-3">
              <p>
                ¡Hola! Soy {personalInfo.name}, desarrolladora full stack apasionada por
                crear experiencias web excepcionales, con un gran diseño, rendimiento y
                buenas prácticas de SEO.
              </p>
              <p>
                Mi enfoque está en escribir código limpio, mantenible y eficiente,
                siempre buscando las mejores prácticas y las últimas tecnologías.
              </p>
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-3 gap-4 mb-12">
          {stats.map(({ value, label, Icon }) => (
            <li
              key={label}
              className="bg-surface border border-line rounded-2xl p-4 md:p-6 text-center shadow-sm"
            >
              <Icon className="w-6 h-6 mx-auto mb-2 text-primary-text" />
              <p className="font-bold text-ink">{value}</p>
              <p className="text-sm text-muted">{label}</p>
            </li>
          ))}
        </ul>

        {/* Skills Section con lazy loading implícito */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-ink mb-6">
            Habilidades
          </h2>
          <ul className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center gap-2 bg-surface border border-line rounded-full px-4 py-2 text-sm font-medium text-ink shadow-sm"
              >
                <span className={`w-2.5 h-2.5 rounded-full ${skill.color}`} aria-hidden="true" />
                {skill.name}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
