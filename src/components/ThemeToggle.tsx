'use client';

import { Moon, Sun } from './Icons';

export default function ThemeToggle({ onDark = false }: { onDark?: boolean }) {
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      // localStorage no disponible: el tema solo dura esta visita
    }
  }

  const colors = onDark
    ? 'border-white/20 bg-white/10 text-white hover:bg-white/20'
    : 'border-line bg-surface text-ink hover:bg-soft';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Cambiar entre tema claro y oscuro"
      className={`w-10 h-10 shrink-0 grid place-items-center rounded-full border transition ${colors}`}
    >
      <Moon className="w-5 h-5 dark:hidden" />
      <Sun className="w-5 h-5 hidden dark:block" />
    </button>
  );
}
