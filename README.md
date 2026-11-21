# Portafolio Personal con SEO Optimizado — Laboratorio 14

Desarrollo de Aplicaciones Web Avanzado: Optimización y SEO.

**Stack:** Next.js 16 (App Router + Turbopack), TypeScript, Tailwind CSS 4, ESLint.

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abrir:

- http://localhost:3000
- http://localhost:3000/projects
- http://localhost:3000/projects/ecommerce-platform
- http://localhost:3000/about
- http://localhost:3000/sitemap.xml
- http://localhost:3000/robots.txt

## Lo que implementa

| Parte | Archivo(s) |
|---|---|
| 1. Meta tags dinámicos | `src/types/index.ts`, `src/lib/data.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/projects/page.tsx`, `src/app/projects/[slug]/page.tsx` |
| 2. Componentes compartidos | `src/components/Header.tsx`, `src/components/Footer.tsx` |
| 3. Imágenes y lazy loading | `next.config.ts`, `src/components/ProjectCard.tsx`, `src/app/about/page.tsx` |
| 4. Sitemap dinámico | `src/app/sitemap.ts` |
| 5. robots.txt | `src/app/robots.ts` |

## Lighthouse

Para medir el puntaje real usar la versión de producción:

```bash
npm run build
npm start
```

Luego DevTools → Lighthouse → Desktop y Mobile.
