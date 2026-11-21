'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { personalInfo, navLinks } from '@/lib/data';
import NavLinks from './NavLinks';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const pathname = usePathname();
  // En el inicio el header va oscuro (sobre el hero); en el resto, claro
  const onDark = pathname === '/';

  const initials = personalInfo.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur border-b ${
        onDark ? 'bg-hero/90 border-white/10' : 'bg-surface/90 border-line'
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="container mx-auto px-4 py-3 md:py-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-2"
      >
        <Link
          href="/"
          className={`order-1 text-2xl md:text-3xl font-extrabold tracking-tight ${
            onDark ? 'text-white' : 'text-ink'
          }`}
        >
          {initials}
          <span className={onDark ? 'text-accent' : 'text-primary-text'} aria-hidden="true">
            &lt;/&gt;
          </span>
          <span className="sr-only"> {personalInfo.name} - Inicio</span>
        </Link>

        {/* En móvil el menú baja a una segunda fila */}
        <div className="order-3 w-full md:order-2 md:w-auto md:ml-auto overflow-x-auto">
          <NavLinks links={navLinks} onDark={onDark} />
        </div>
        <div className="order-2 md:order-3">
          <ThemeToggle onDark={onDark} />
        </div>
      </nav>
    </header>
  );
}
