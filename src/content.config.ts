import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada archivo .md dentro de src/content/proyectos/ es un proyecto.
// El nombre del archivo se usa como URL: malix.md → /proyectos/malix/
const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: ({ image }) =>
    z.object({
      nombre: z.string(),
      // Frase grande que aparece como título del proyecto.
      titular: z.string(),
      // Una o dos líneas. Se usa en tarjetas y en la descripción para buscadores.
      resumen: z.string(),
      tipo: z.string(),
      // Texto libre que se muestra como etiqueta: "En desarrollo", "APK disponible", etc.
      estado: z.string(),
      portada: image(),
      portadaAlt: z.string(),
      // true = muestra la portada entera, sin recortarla (útil para logos).
      portadaCompleta: z.boolean().default(false),
      caracteristicas: z.array(z.string()).default([]),
      // Botones de acceso: la app web, tiendas, itch.io, etc.
      enlaces: z
        .array(
          z.object({
            texto: z.string(),
            url: z.url(),
          }),
        )
        .default([]),
      galeria: z
        .array(
          z.object({
            imagen: image(),
            alt: z.string(),
          }),
        )
        .default([]),
      // true = muestra las imágenes de la galería enteras, sin recortarlas (útil para capturas de pantalla).
      galeriaCompleta: z.boolean().default(false),
      // Menor número = aparece primero.
      orden: z.number().default(100),
      // true = no se publica (útil para preparar un proyecto antes de anunciarlo).
      borrador: z.boolean().default(false),
    }),
});

export const collections = { proyectos };
