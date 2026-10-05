import type { APIRoute } from 'astro';

// Se genera en el build para que la línea Sitemap use el dominio de `site`.
export const GET: APIRoute = ({ site }) => {
  const lineas = ['User-agent: *', 'Allow: /'];
  if (site) lineas.push('', `Sitemap: ${new URL('sitemap-index.xml', site)}`);
  return new Response(lineas.join('\n') + '\n');
};
