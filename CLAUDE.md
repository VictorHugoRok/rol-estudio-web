# Rol Estudio — sitio web

Sitio estático de presentación de Rol Estudio (estudio indie de apps gamificadas y juegos). Astro 7, TypeScript estricto, sin framework de UI, sin Tailwind. Todo el contenido y el código están en español.

## Comandos

- `npm run dev` — servidor local en http://localhost:4321
- `npm run build` — genera `dist/` (debe terminar sin errores)
- `npm run check` — `astro check`; debe quedar en 0 errores y 0 warnings

## Convenciones

- Proyectos: content collection `proyectos` en `src/content/proyectos/*.md`; el esquema está en `src/content.config.ts`. Para listar proyectos usa `getProyectos()` de `src/lib/proyectos.ts` (filtra borradores y ordena).
- Textos generales (correo, menú, redes, servicios, valores): `src/data/site.ts`. No los dupliques en los componentes.
- Estilos: tokens y piezas compartidas (`.button`, `.eyebrow`, `.tag`, `.feature-list`, `.page-shell`, `.section`) en `src/styles/global.css`; lo específico de cada sección va en el `<style>` del componente.
- Paleta (no agregar colores nuevos): crema `#fff8e6`, noche `#2c263f`, sol `#f8c662`, lila `#595082`, hoja `#41644a`, bosque `#213722`, más blanco para tarjetas. Sol nunca va como color de texto sobre crema (contraste 1.5:1).
- Tipografía: Schoolbell (`--font-display`) solo en h1–h3, nombre de marca y notas de Malix, siempre con `font-weight: 400`; Nunito (`--font-body`) en todo lo demás. Las fuentes son locales (`src/assets/fonts/`) y se configuran en `astro.config.mjs`.
- Imágenes: en `src/assets/` y con `<Image>` de `astro:assets`, nunca en `public/`.
- Accesibilidad: respetar `prefers-reduced-motion`, textos alternativos en español, foco visible.
