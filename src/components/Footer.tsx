import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary-text transition"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary-text transition"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-muted hover:text-primary-text transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
