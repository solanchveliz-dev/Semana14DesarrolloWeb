'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink } from '@/types';

export default function NavLinks({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1 md:gap-2">
      {links.map((link) => {
        const active =
          link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={active ? 'page' : undefined}
              className={`inline-block px-2.5 md:px-4 py-2 rounded-lg text-sm md:text-base font-medium transition ${
                active
                  ? 'bg-soft text-primary-text'
                  : 'text-ink hover:bg-soft'
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
