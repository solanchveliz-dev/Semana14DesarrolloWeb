// Abreviatura y colores de cada tecnología (íconos de texto, sin logos de marca)
const styles: Record<string, { abbr: string; cls: string }> = {
  'Next.js': { abbr: 'N', cls: 'bg-black text-white dark:bg-white dark:text-black' },
  TypeScript: { abbr: 'TS', cls: 'bg-blue-100 text-blue-800' },
  React: { abbr: 'R', cls: 'bg-sky-100 text-sky-800' },
  'Tailwind CSS': { abbr: 'TW', cls: 'bg-cyan-100 text-cyan-800' },
  Stripe: { abbr: 'S', cls: 'bg-violet-100 text-violet-800' },
  PostgreSQL: { abbr: 'PG', cls: 'bg-indigo-100 text-indigo-800' },
  'Node.js': { abbr: 'JS', cls: 'bg-green-100 text-green-800' },
  'Socket.io': { abbr: 'IO', cls: 'bg-slate-200 text-slate-800' },
  MongoDB: { abbr: 'M', cls: 'bg-emerald-100 text-emerald-800' },
  'Chart.js': { abbr: 'CH', cls: 'bg-pink-100 text-pink-800' },
  API: { abbr: 'API', cls: 'bg-amber-100 text-amber-800' },
};

export function techStyle(name: string) {
  return styles[name] ?? { abbr: name.slice(0, 2).toUpperCase(), cls: 'bg-soft text-primary-text' };
}
