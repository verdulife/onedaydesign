# onedaydesign

Landing estática de un estudio de diseño. Trilingüe (es, ca, en), desplegada en Vercel, sin JavaScript en cliente.

## Comandos

- **`bun run dev`**: servidor de desarrollo con HMR.
- **`bun run build`**: genera el sitio estático en `dist/`.
- **`bun run check`**: ejecuta `astro check` sobre TypeScript y los ficheros `.astro`.
- **`bun run preview`**: sirve el build localmente para validación.

Tras cualquier cambio, ejecuta `bun run build` y `bun run check`.

## Stack

- **Astro 7** como framework de generación estática.
- **Tailwind v4** mediante `@tailwindcss/vite`. La paleta, la tipografía y las escalas fluidas viven en `src/styles/global.css` dentro del bloque `@theme`.
- **bun** como runtime, gestor de dependencias y runner de scripts.
- **Tipografía**: `twk-everett` servida desde `public/fonts/` en formatos woff2 y woff.

## Estructura

```
src/
  pages/         # rutas: index.astro (es), ca/, en/, más 404 por idioma
  i18n/          # textos y meta por idioma (ui.ts)
  components/    # componentes reutilizables (Section.astro)
  layouts/       # Base.astro (html, head, hreflang, selector, skip link)
  styles/        # global.css (entrypoint de Tailwind y tokens)
public/          # assets estáticos, manifest, sitemap, robots, fonts
astro.config.mjs # i18n, site, plugin de Tailwind
```

## Despliegue

Push a la rama principal dispara el build en Vercel. No requiere adapter adicional: Astro detecta el entorno de Vercel y emite el output estático.

## Localización

El copy vive en `src/i18n/ui.ts`. Para añadir un idioma:

1. **Copy**: añade una entrada en `ui` con `meta`, las cuatro secciones y `buttons` siguiendo la estructura de los idiomas existentes.
2. **Páginas**: crea `src/pages/<lang>/index.astro` y `src/pages/<lang>/404.astro` replicando el patrón.
3. **Config**: añade `<lang>` a `i18n.locales` en `astro.config.mjs`.
4. **Sitemap**: incluye la nueva URL en `public/sitemap.xml`.

## Identidad

- **Dominio**: https://onedaydesign.vercel.app
- **Repositorio**: github.com/onedaydesign/onedaydesign
- **Logo**: `public/logo.svg` (wordmark).
- **Contacto**: WhatsApp y email al pie de cada página, en el idioma correspondiente.
