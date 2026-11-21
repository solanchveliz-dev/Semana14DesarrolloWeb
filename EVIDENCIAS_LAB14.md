# Evidencias del Lab 14: parte de la GUÍA (sin la Tarea)

Esta versión tiene **solo lo que pide la guía**: Inicio, Proyectos, Detalle, Sobre mí, sitemap y robots.
La página de **Contacto NO está aquí** a propósito: va en la Tarea (otro ZIP).

## Paso 0: Instalar y ejecutar
```bash
cd Semana14DesarrolloWeb
npm install
npm run dev
```
Captura opcional: la terminal mostrando `✓ Ready` y `Local: http://localhost:3000`.

---

## Bloque 1: Ejecutar la aplicación (`npm run dev`)
**Título en la guía:** *Probar y capturar las páginas de la aplicación*

| # | URL | Qué debe verse en la captura |
|---|---|---|
| 1 | `http://localhost:3000` | Menú con **Inicio** resaltado, hero "Transformo ideas en experiencias digitales.", botones, etiquetas SEO/Rendimiento/Responsive y **Proyectos destacados** (3 tarjetas) |
| 2 | `http://localhost:3000/projects` | **Mis proyectos**, filtros (Todos, Web Apps, E-commerce, Dashboards) y las 3 tarjetas |
| 3 | `http://localhost:3000/projects/ecommerce-platform` | Ruta "Proyectos > E-commerce Platform", imagen, Tecnologías, botones Ver demo y GitHub, Características |
| 4 | `http://localhost:3000/about` | Foto, "Conoce más sobre mí", 3 tarjetas (+3 años, 10+, Enfoque) y **Habilidades** |

✅ Captura **con la barra de direcciones visible** (que se vea la URL).
⭐ Extra opcional: haz clic en un filtro (p. ej. *Dashboards*) en `/projects` y captúralo. Muestra que es interactivo.
⭐ Extra opcional: el botón 🌙 cambia a modo oscuro. Si quieres, captura una página en oscuro, **pero haz Lighthouse en modo claro**.

---

## Bloque 2: Ejecutar la aplicación (`npm run dev`)
**Título en la guía:** *Probar y capturar los siguientes archivos*

| # | URL | Qué debe verse |
|---|---|---|
| 5 | `http://localhost:3000/sitemap.xml` | XML con **6** `<url>`: inicio, about, projects y los 3 proyectos |
| 6 | `http://localhost:3000/robots.txt` | `User-Agent: *`, `User-Agent: Googlebot`, los `Disallow` y la línea `Sitemap:` |

> Las URLs del sitemap dicen `https://tuportafolio.com`. **Es lo correcto para la guía** (es el valor de `siteUrl`). En la Tarea cambiará a tu dominio real.

---

## Bloque 3: Parte 6, Verificación de SEO
### 1. Usa las DevTools del navegador
1. En `http://localhost:3000` → **Click derecho → Inspeccionar**.
2. Pestaña **Elements** → expande `<head>`.
3. Presiona **Ctrl + F** dentro de Elements y escribe `og:` para resaltar las etiquetas.

| # | Captura | Qué debe verse |
|---|---|---|
| 7 | `<head>` de la página de inicio | `<title>Solanch Veliz - Full Stack Developer</title>`, `meta name="description"`, `keywords`, **`og:title`, `og:description`, `og:image`, `og:type = website`**, `twitter:card` |
| 8 | `<head>` de `/projects/ecommerce-platform` | `<title>E-commerce Platform \| Solanch Veliz</title>` y **`og:type = article`** con la imagen del proyecto |

> La captura 8 es la que **demuestra que los meta tags son dinámicos** (cambian según el proyecto). No la omitas.

### 2. Herramientas de validación: Lighthouse Audit
⚠️ **Muy importante para sacar >90:** Lighthouse se hace sobre la versión de **producción**, no con `npm run dev`.
```bash
# detén npm run dev con Ctrl + C
npm run build
npm start
```
1. Abre Chrome en **ventana de incógnito** (Ctrl + Shift + N). Las extensiones bajan el puntaje.
2. Entra a `http://localhost:3000` → **F12** → pestaña **Lighthouse**.
3. Marca las 4 categorías: Rendimiento, Accesibilidad, Prácticas recomendadas, SEO.
4. **Device: Desktop** → *Analyze page load*.
5. Repite con **Device: Mobile**.

| # | Captura |
|---|---|
| 9 | Lighthouse **Desktop** con los 4 círculos |
| 10 | Lighthouse **Mobile** con los 4 círculos |

⭐ Extra: captura de `npm run build` terminando sin errores (lista las rutas `/`, `/about`, `/projects`, `/projects/[slug]`, `/sitemap.xml`, `/robots.txt`).

**Si algún puntaje sale < 90:**
- Rendimiento bajo en Mobile: vuelve a correrlo 2 o 3 veces (varía según el internet, porque las imágenes vienen de Unsplash).
- Verifica que estés en incógnito y con `npm start`, no con `npm run dev`.

---

## Antes de capturar
- [ ] En `src/lib/data.ts` cambia `email` y `linkedin` por los tuyos.
- [ ] Sube esta versión a GitHub **antes** de la Tarea (commit "Lab 14 - guía").
