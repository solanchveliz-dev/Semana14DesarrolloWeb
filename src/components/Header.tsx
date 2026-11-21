import Link from 'next/link';
import { personalInfo, navLinks } from '@/lib/data';
import NavLinks from './NavLinks';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const initials = personalInfo.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return (
    <header className="bg-surface/85 backdrop-blur border-b border-line sticky top-0 z-50">
      <nav
        aria-label="Navegación principal"
        className="container mx-auto px-4 py-3 md:py-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-2"
      >
        <Link
          href="/"
          className="order-1 text-2xl md:text-3xl font-extrabold tracking-tight text-ink font-display"
        >
          {initials}
          <span className="text-primary-text">.</span>
          <span className="sr-only"> {personalInfo.name} - Inicio</span>
        </Link>
        {/* En móvil el menú baja a una segunda fila; en escritorio va al centro-derecha */}
        <div className="order-3 w-full md:order-2 md:w-auto md:ml-auto overflow-x-auto">
          <NavLinks links={navLinks} />
        </div>
        <div className="order-2 md:order-3">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
