// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Netlify define URL en cada build con la dirección principal del sitio
  // (*.netlify.app, o tu dominio propio cuando lo conectes). Se usa para el
  // sitemap, robots.txt y las URLs absolutas de las imágenes para redes.
  // En local queda vacío y esas partes simplemente se omiten.
  site: process.env.URL,

  integrations: [sitemap()],

  // Fuentes autoalojadas desde src/assets/fonts (subconjunto latino: incluye
  // acentos, ñ, ¿ y ¡). Astro genera los @font-face, las precarga y crea
  // fuentes de respaldo ajustadas para evitar saltos al cargar.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Schoolbell',
      cssVariable: '--font-schoolbell',
      fallbacks: ['Comic Sans MS', 'cursive'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/schoolbell-latin-400.woff2'],
            weight: 400,
            style: 'normal',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Nunito',
      cssVariable: '--font-nunito',
      fallbacks: ['Trebuchet MS', 'Segoe UI', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/nunito-latin-variable.woff2'],
            weight: '200 1000',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
