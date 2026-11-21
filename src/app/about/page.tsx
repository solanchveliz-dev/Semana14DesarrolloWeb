import { Metadata } from 'next';
import Image from 'next/image';
import { personalInfo, skills } from '@/lib/data';
import { techStyle } from '@/lib/tech';
import { Code, GraduationCap, Layers } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
};

const stats = [
  { value: '5° Ciclo', label: 'TECSUP', Icon: GraduationCap },
  { value: '3+', label: 'Años de experiencia', Icon: Code },
  { value: '10+', label: 'Proyectos', Icon: Layers },
];

const otherTools = ['Node.js', 'MongoDB', 'Git / GitHub', 'Docker', 'AWS'];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-[240px_1fr] gap-8 items-center mb-10">
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden bg-teal-200 ring-8 ring-soft">
            <Image
              src={personalInfo.avatar}
              alt={`Foto de ${personalInfo.name}`}
              fill
              className="object-cover"
              loading="lazy"
              sizes="224px"
            />
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-text mb-2">
              Sobre mí
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink mb-4">
              Conóceme
            </h1>
            <div className="text-muted space-y-3">
              <p>
                Soy {personalInfo.name}, desarrolladora Full Stack apasionada por crear
                soluciones web que combinen un gran diseño, rendimiento y buenas
                prácticas de SEO.
              </p>
              <p>
                Estudio en TECSUP y me enfoco en escribir código limpio, mantenible y
                eficiente con tecnologías modernas como Next.js y TypeScript.
              </p>
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-3 gap-3 md:gap-4 mb-12">
          {stats.map(({ value, label, Icon }) => (
            <li
              key={label}
              className="bg-surface border border-line rounded-2xl p-4 md:p-6 text-center shadow-sm"
            >
              <Icon className="w-7 h-7 mx-auto mb-2 text-primary-text" />
              <p className="font-extrabold text-ink md:text-lg">{value}</p>
              <p className="text-xs md:text-sm text-muted">{label}</p>
            </li>
          ))}
        </ul>

        {/* Skills Section con lazy loading implícito */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-ink mb-6">
            Mis habilidades
          </h2>
          <ul className="space-y-4">
            {skills.map((skill) => {
              const style = techStyle(skill.name);
              return (
                <li
                  key={skill.name}
                  className="grid grid-cols-[140px_1fr_44px] sm:grid-cols-[180px_1fr_48px] items-center gap-3"
                >
                  <span className="flex items-center gap-2 font-medium text-ink">
                    <span
                      aria-hidden="true"
                      className={`w-7 h-7 grid place-items-center rounded-lg text-[10px] font-bold ${style.cls}`}
                    >
                      {style.abbr}
                    </span>
                    {skill.name}
                  </span>
                  <span className="h-2.5 rounded-full bg-line overflow-hidden" aria-hidden="true">
                    <span
                      className="block h-full rounded-full bg-linear-to-r from-teal-600 to-teal-400"
                      style={{ width: `${skill.level}%` }}
                    />
                  </span>
                  <span className="text-sm font-semibold text-muted text-right">
                    {skill.level}%
                  </span>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-4">Otras herramientas</h2>
          <ul className="flex flex-wrap gap-2">
            {otherTools.map((tool) => (
              <li
                key={tool}
                className="bg-surface border border-line rounded-full px-4 py-1.5 text-sm font-medium text-ink"
              >
                {tool}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
