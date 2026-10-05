# Rol Estudio — sitio web

Sitio de presentación de Rol Estudio hecho con [Astro](https://astro.build). Genera HTML estático: no necesita servidor ni base de datos.

## Requisitos

- Node.js **22.12 o superior** (`node -v` para revisar)
- npm (viene con Node)

## Empezar

```bash
npm install       # solo la primera vez
npm run dev       # abre http://localhost:4321 con recarga en vivo
```

| Comando           | Qué hace                                              |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Servidor local para desarrollar                       |
| `npm run build`   | Genera el sitio final en `dist/`                      |
| `npm run preview` | Sirve `dist/` para revisarlo antes de publicar        |
| `npm run check`   | Revisa errores de TypeScript y de los archivos .astro |

En VS Code instala la extensión **Astro** (astro-build.astro-vscode) para tener resaltado y autocompletado.

## Estructura

```
src/
├─ assets/
│  ├─ fonts/            Schoolbell y Nunito (autoalojadas, con sus licencias)
│  └─ malix/            Ilustraciones de Malix (Astro las optimiza a webp)
├─ components/          Secciones y piezas: Header, Hero, Services, About, Contact…
├─ content/proyectos/   Un archivo .md por proyecto  ← aquí agregas proyectos
├─ data/site.ts         Textos generales: correo, menú, redes, servicios, valores
├─ layouts/Base.astro   <head>, metadatos para redes, header y footer
├─ lib/proyectos.ts     Función que lee los proyectos publicados
├─ pages/               Cada archivo es una ruta
│  ├─ index.astro       /
│  ├─ proyectos/index.astro   /proyectos/
│  ├─ proyectos/[slug].astro  /proyectos/<nombre-del-archivo>/
│  └─ 404.astro
├─ styles/global.css    Paleta, tipografía y estilos compartidos
└─ content.config.ts    Campos que debe tener cada proyecto
public/                 Archivos que se copian tal cual (favicon, robots.txt)
```

## Agregar un proyecto

1. Pon su imagen de portada en `src/assets/` (por ejemplo `src/assets/mi-app/portada.png`).
2. Crea `src/content/proyectos/mi-app.md` copiando `malix.md` como plantilla.
3. Llena los campos. Los enlaces de acceso van en `enlaces`:

```yaml
enlaces:
  - texto: Abrir la app
    url: https://mi-app.rolestudio.com
  - texto: Google Play
    url: https://play.google.com/store/apps/details?id=...
```

Listo: aparece en el inicio, en `/proyectos/` y con su propia página en `/proyectos/mi-app/`.
Si un campo está mal (por ejemplo, un `estado` que no existe o una URL inválida), `npm run dev` te dice cuál.

- `estado` puede ser: `En desarrollo`, `Beta`, `Disponible` o `Pausado`.
- `orden` decide el orden (menor = primero).
- `borrador: true` oculta el proyecto sin borrarlo.

## Editar textos

- Correo, menú, redes sociales, franja animada, servicios y valores: `src/data/site.ts`.
- Hero: `src/components/Hero.astro`. "Quiénes somos": `src/components/About.astro`.
- Colores y fuentes: variables al inicio de `src/styles/global.css`.

## Publicar

El sitio se publica en Netlify con la configuración de `netlify.toml`. `site` en `astro.config.mjs` toma la dirección del sitio de la variable `URL` que Netlify define en cada build, así que al conectar un dominio propio en Netlify el sitemap, `robots.txt` y las etiquetas para redes lo usan solos. En local (o en otro hosting sin esa variable) se construye igual, pero sin sitemap ni URLs absolutas; para tenerlas, define `URL` con tu dominio al construir.

Cualquier hosting de sitios estáticos sirve. Configuración:

- **Comando de build:** `npm run build`
- **Carpeta de salida:** `dist`

Opciones:

- **Cloudflare Pages, Netlify o Vercel:** conecta el repositorio de GitHub y publica solo con cada push.
- **AWS S3 + CloudFront:** sube el contenido de `dist/` al bucket.
- **IIS:** copia el contenido de `dist/` a la carpeta del sitio. Asegúrate de que `index.html` esté como documento predeterminado y, si quieres usar la página 404 personalizada, configura `httpErrors` para que apunte a `/404.html`.
