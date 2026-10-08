// Textos y datos generales del sitio. Edita aquí y se actualiza en todas las páginas.

export const site = {
  nombre: 'Rol Estudio',
  descripcion:
    'Rol Estudio — estudio indie de apps gamificadas y algunos videojuegos dibujados a mano, orgullosamente hecho en México.',
  correo: 'rolestudio.mid@gmail.com',
  lema: 'Haciendo, desde algún rincón de Yucatán, México.',
};

export const navegacion = [
  { texto: 'Proyectos', href: '/proyectos/' },
  { texto: 'Qué hacemos', href: '/#que-hacemos' },
  { texto: 'El estudio', href: '/#estudio' },
];


export const redes = [
  { nombre: 'Instagram', url: '' },
  { nombre: 'TikTok', url: '' },
  { nombre: 'YouTube', url: '' },
  { nombre: 'itch.io', url: '' },
].filter((red) => red.url !== '');

export const franja = [
  'Apps gamificadas',
  'Juegos con corazón',
  'Hecho en México',
  'Cree en ti',
  'Software para todos'
];

export const servicios = [
  {
    titulo: 'Apps gamificadas',
    texto:
      'Convertimos hábitos, aprendizaje y tareas en algo que da gusto repetir: retos, recompensas y progreso que se siente.',
  },
  {
    titulo: 'Juegos con historia',
    texto:
      'Mundos pequeños, personajes con alma y decisiones que importan. Historias que se quedan contigo.',
  },
  {
    titulo: 'Personajes y mundos',
    texto:
      'Ilustración, narrativa y diseño de personajes hechos con entuciasmo, a crear al nuevo, original, nuestro.',
  },
];

export const valores = [
  { titulo: '01 · Jugamos', texto: 'Probamos, fallamos y volvemos a intentar.' },
  { titulo: '02 · Creamos', texto: 'Crear, explorar, expandir, conquistar' },
  { titulo: '03 · Cuidamos', texto: 'La intención vive en los detalles.' },
];
