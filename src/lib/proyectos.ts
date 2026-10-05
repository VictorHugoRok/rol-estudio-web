import { getCollection } from 'astro:content';

/** Proyectos publicados (sin borradores), ordenados por el campo `orden`. */
export async function getProyectos() {
  const proyectos = await getCollection('proyectos', ({ data }) => !data.borrador);
  return proyectos.sort((a, b) => a.data.orden - b.data.orden);
}
