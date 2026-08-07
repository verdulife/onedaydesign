# onedaydesign

Landing de un estudio de diseño. Presenta cuatro bloques (presentación, servicios,
proyectos, contacto) y dos llamadas a la acción (WhatsApp y email). Trilingüe (es, ca, en),
estática, con identidad de marca coherente en cabecera, selector de idioma y meta por idioma.

## Dominio y repositorio

- Producción: https://onedaydesign.vercel.app
- Repositorio: github.com/onedaydesign/onedaydesign
- Rama de trabajo de la migración actual: `migration`.

## Stack

- **Astro 7** (SSG) como framework.
- **Tailwind v4** vía plugin Vite (`@tailwindcss/vite`).
- **bun** como runtime, gestor de dependencias y runner de scripts.
- CSS-only — sin JS en cliente.

## Arquitectura

```
src/
  pages/         # rutas: index.astro (es), ca/, en/
  i18n/          # textos y meta por idioma (ui.ts)
  layouts/       # Base.astro: html, head, selector
  styles/        # global.css (entrypoint Tailwind)
public/          # assets estáticos: logo, fuentes, manifest, sitemap, robots
astro.config.mjs # i18n, site, plugin Tailwind
```

- `src/pages/index.astro` → español (raíz, sin prefijo).
- `src/pages/ca/index.astro`, `src/pages/en/index.astro` → variantes localizadas.
- `src/i18n/ui.ts` → copy y meta por idioma (clave del trilingüe).
- `public/` → todo lo que se sirve tal cual (PWA, OG, favicon, fuentes).

## Comandos

- `bun run dev` — desarrollo.
- `bun run build` — build estático.
- `bun run check` — `astro check` (TypeScript + contenido).
- `bun run preview` — servir el build.

Tras cualquier cambio, ejecuta `bun run build` y `bun run check`.

## Skills

Las skills se cargan como conocimiento de apoyo cuando el trabajo en curso lo
requiere de forma natural; no se invocan por reflejo ni se fuerzan al inicio.
La regla general: se cargan cuando aportan valor a la tarea, y se descargan
cuando dejan de aportarlo. Cargarlas "por si acaso" introduce ruido; no
hacerlo deja al modelo sin el marco que necesita.

| Skill | Cuándo usar | Ubicación |
|---|---|---|
| `web-design-guidelines` | Mientras se escribe o revisa código de UI: aporta criterios de accesibilidad y patrones de interfaz. | `.agents/skills/web-design-guidelines/SKILL.md` |
| `tailwind-4-docs` | Cuando surge duda sobre una utilidad, variante o config de Tailwind v4 al escribir CSS. | `.agents/skills/tailwind-4-docs/SKILL.md` |
| `writing-guidelines` | En revisión de copy existente o redacción de contenido visible: aporta la vara de medir de voz y tono. | `.agents/skills/writing-guidelines/SKILL.md` |
| `customize-opencode` | Sólo al modificar la config de opencode (opencode.json, `.opencode/`, skills, permisos, MCP). | built-in (fuera del repo) |
