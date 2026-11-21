# Lab 14: TAREA (nuevo diseño + contacto + Vercel + dominio personalizado)

> Haz esto **después** de tener todas las capturas de la parte de la guía y de haberla subido a GitHub.

## Qué incluye esta versión
| Requerimiento de la Tarea | Dónde está |
|---|---|
| Nuevo diseño (verde azulado, logo `NV</>`) | todo `src/` |
| 1. Añadir una página de contacto | `src/app/contact/page.tsx`, `src/app/contact/actions.ts`, `src/components/ContactForm.tsx` |
| 1a. Actualizar `sitemap.xml` | `src/app/sitemap.ts` (agrega `/contact`) |
| 1b. Actualizar `robots.txt` | `src/app/robots.ts` (`Allow: /contact` y `Host:`) |
| 2. Desplegar en Vercel + dominio personalizado | pasos de abajo. La URL del sitio se toma sola de Vercel (`src/lib/data.ts`) |

---

## PASO 1: Pasar el nuevo diseño a tu proyecto (sin romperlo)
1. Cierra `npm run dev` / `npm start` con **Ctrl + C**.
2. Descomprime el ZIP de la Tarea en otra carpeta (por ejemplo, el Escritorio).
3. Copia las carpetas **`src`** y **`public`** del ZIP y pégalas **dentro** de
   `C:\Users\LENOVO\Documents\Semana14DesarrolloWeb`. Cuando Windows pregunte, elige **"Reemplazar los archivos en el destino"**.
4. Copia también este archivo `TAREA_LAB14.md`.
5. **No** toques `node_modules`, `.git`, `package.json` ni `next.config.ts` (no cambiaron).
6. En CMD:
   ```cmd
   rmdir /s /q .next
   npm run dev
   ```
7. Revisa: `/`, `/projects`, `/projects/ecommerce-platform`, `/about`, `/contact`, `/sitemap.xml` y `/robots.txt`.

## PASO 2: Pon tus datos
- **Imágenes ya integradas:** `public/hero-bg.jpg` (fondo del inicio), `public/naomi.png` (foto con fondo transparente del inicio) y `public/naomi-perfil.png` (foto circular de "Sobre mí").
- **Tu CV:** reemplaza `public/cv.pdf` por tu CV, con el mismo nombre.
- En `src/lib/data.ts` revisa `name`, `email`, `linkedin` y `youtube`.

## PASO 3: Verifica que compila y sube a GitHub
```cmd
npm run build
git add .
git commit -m "Tarea Lab 14: nuevo diseño, contacto, sitemap y robots actualizados"
git push
```

## PASO 4: Desplegar en Vercel
1. Entra a **https://vercel.com** → **Sign Up / Log In → Continue with GitHub**.
2. **Add New… → Project** → busca **Semana14DesarrolloWeb** → **Import**.
3. Vercel detecta **Next.js** solo. No cambies nada → **Deploy**.
4. En 1 o 2 minutos tendrás una URL como `https://semana14-desarrollo-web.vercel.app` (captura ✅).
5. Desde ahora, **cada `git push` vuelve a desplegar** automáticamente.

## PASO 5: Dominio gratuito personalizado
> Freenom (el link de la guía) ya **no entrega dominios gratis**. Usaremos **DigitalPlat FreeDomain**, que es gratuito y funciona con Vercel.

**5.1 Registrar el dominio**
1. Entra a **https://dash.domain.digitalplat.org/** y crea tu cuenta (pide verificar con GitHub).
2. **Register a new domain** → escribe un nombre, por ejemplo `naomiveliz` → elige **`.dpdns.org`** → **Check**.
3. Si sale disponible, continúa. En **Name Servers** pon los de Vercel:
   - Name Server 1: `ns1.vercel-dns.com`
   - Name Server 2: `ns2.vercel-dns.com`
4. Termina el registro. Tu dominio será algo como **`naomiveliz.dpdns.org`**.

**5.2 Conectarlo en Vercel**
1. En Vercel abre tu proyecto → **Settings → Domains**.
2. Escribe `naomiveliz.dpdns.org` → **Add** (si te pregunta, elige *Connect to an environment: Production*).
3. Vercel revisará los nameservers. Cuando diga **Valid Configuration** ✅ ya funciona con HTTPS (puede tardar de minutos a unas horas).
   - Si Vercel pide un registro **A** o **CNAME** en lugar de nameservers, copia los valores que te muestra en el panel DNS de DigitalPlat.

**5.3 Que el SEO use tu dominio (importante)**
1. Vercel → **Settings → Environment Variables** → **Add**:
   ```
   Key:   NEXT_PUBLIC_SITE_URL
   Value: https://naomiveliz.dpdns.org
   ```
   Escríbelo **sin la barra `/` al final**.
2. **Deployments** → en el último despliegue haz clic en **⋯ → Redeploy**.
3. Abre `https://naomiveliz.dpdns.org/sitemap.xml`: todas las URLs deben salir con **tu dominio**.

> Aunque te olvides de este paso, el proyecto usa la variable automática de Vercel `VERCEL_PROJECT_PRODUCTION_URL`. Aun así, ponla tú para asegurarte de que salga el dominio exacto.

---

## Evidencias de la Tarea (sección "1. Colocar capturas de su aplicación")
1. `https://TU-DOMINIO/` con el dominio visible en la barra.
2. `https://TU-DOMINIO/projects` y `/about`.
3. `https://TU-DOMINIO/contact`: envía el formulario y captura el mensaje **"¡Gracias…!"**.
4. `https://TU-DOMINIO/sitemap.xml` con **7 URLs y tu dominio** (incluye `/contact`).
5. `https://TU-DOMINIO/robots.txt` con `Allow: /contact`, `Host:` y `Sitemap:`.
6. Vercel → Settings → Domains con **Valid Configuration**.
7. (Extra) Vercel → Deployments con el estado **Ready**.
8. (Extra) Lighthouse sobre tu dominio en producción.

**2. Link del repositorio:** https://github.com/solanchveliz-dev/Semana14DesarrolloWeb
**3. Link del dominio:** `https://naomiveliz.dpdns.org` (o el que registres)

## Si algo falla
| Problema | Solución |
|---|---|
| La foto no aparece | Revisa que `naomi.png`, `naomi-perfil.png` y `hero-bg.jpg` estén en `public/`. Luego borra `.next` y reinicia |
| Vercel: "Build failed" | Corre `npm run build` en tu PC, copia el error y mándalo |
| El dominio dice "Invalid Configuration" | Espera (la propagación DNS tarda) o revisa que los nameservers sean `ns1/ns2.vercel-dns.com` |
| El sitemap muestra `.vercel.app` | Falta `NEXT_PUBLIC_SITE_URL` o el Redeploy |
