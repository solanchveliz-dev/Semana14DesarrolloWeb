'use client';

import { Moon, Sun } from './Icons';

export default function ThemeToggle() {
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      // localStorage no disponible: el tema solo dura esta visita
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Cambiar entre tema claro y oscuro"
      className="w-10 h-10 shrink-0 grid place-items-center rounded-full border border-line bg-surface text-ink hover:bg-soft transition"
    >
      <Moon className="w-5 h-5 dark:hidden" />
      <Sun className="w-5 h-5 hidden dark:block" />
    </button>
  );
}
