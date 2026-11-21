import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';
import { Mail, MapPin } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `¿Tienes una idea o proyecto en mente? Escríbele a ${personalInfo.name}, ${personalInfo.title}.`,
  openGraph: {
    title: 'Contacto - Portafolio',
    description: 'Hablemos de tu próximo proyecto web.',
    images: ['/og-image.jpg'],
  },
};

function EnvelopeArt() {
  return (
    <svg viewBox="0 0 240 160" className="w-56 h-auto mb-8" aria-hidden="true">
      <rect x="20" y="50" width="150" height="100" rx="12" fill="#e2e8f0" />
      <path d="M20 62l75 50 75-50" fill="none" stroke="#94a3b8" strokeWidth="4" strokeLinejoin="round" />
      <path d="M120 70 230 20 190 130 165 95z" fill="#2dd4bf" />
      <path d="M165 95 230 20 150 80z" fill="#0f766e" />
      <path d="M190 12l10-8M206 26l14-4M178 6l2-4" stroke="#14b8a6" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-text mb-2">
          Contacto
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink mb-4">
          Hablemos de tu proyecto
        </h1>
        <p className="text-lg text-muted max-w-2xl mb-10">
          ¿Tienes una idea, colaboración o proyecto en mente? ¡Me encantaría escucharte!
        </p>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <section aria-labelledby="contact-info">
            <h2 id="contact-info" className="sr-only">Datos de contacto</h2>
            <EnvelopeArt />
            <ul className="space-y-4 mb-8">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-ink font-medium hover:text-primary-text transition"
                >
                  <Mail className="w-5 h-5 text-primary-text" />
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-ink font-medium">
                <MapPin className="w-5 h-5 text-primary-text" />
                {personalInfo.location}
              </li>
              <li className="flex items-center gap-3 text-ink font-medium">
                <span className="w-5 h-5 grid place-items-center" aria-hidden="true">
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </span>
                Disponible para proyectos
              </li>
            </ul>
            <SocialLinks />
          </section>

          <section
            aria-labelledby="contact-form"
            className="bg-surface border border-line rounded-2xl p-6 md:p-8 shadow-sm"
          >
            <h2 id="contact-form" className="text-xl font-bold text-ink mb-6">
              Envíame un mensaje
            </h2>
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
}
