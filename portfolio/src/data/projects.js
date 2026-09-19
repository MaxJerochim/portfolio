// Cada proyecto es un objeto simple. Para agregar uno nuevo, copiá este
// bloque, cambiá los valores y sumalo al array. No hace falta tocar
// ningún componente.
//
// featured: true  -> se muestra grande, arriba de la grilla, con case study completo.
//                     Dejalo en true en UN SOLO proyecto (el que más quieras mostrar).
//
// Las imágenes de /public/media/... son placeholders (SVG violeta/rojo) para que
// el sitio y el lightbox funcionen desde ya. Reemplazalas por las tuyas cuando
// quieras — no hace falta tocar ningún componente, solo estas rutas.

export const projects = [
  {
    id: "proyecto-1",
    title: "[Nombre del Proyecto Principal]",
    description: "[Una línea que resuma qué es]",
    problem: "[Qué problema real resuelve este proyecto]",
    approach: "[Decisiones técnicas: arquitectura, por qué ese stack, desafíos]",
    result: "[Impacto o métrica lograda, ej: -40% tiempo de carga]",
    stack: ["React", "Spring Boot", "PostgreSQL", "Docker"],
    cover: "/media/proyecto-1/cover.svg",
    gallery: [
      "/media/proyecto-1/cover.svg",
      "/media/proyecto-1/screen1.svg",
      "/media/proyecto-1/screen2.svg",
    ],
    video: null, // ej: "/media/proyecto-1/demo.mp4"
    demoUrl: "https://",
    repoUrl: "https://github.com/",
    featured: true,
  },
  {
    id: "proyecto-2",
    title: "[Proyecto 2]",
    description: "[Una línea sobre qué resuelve este proyecto]",
    problem: "[Problema]",
    approach: "[Approach técnico]",
    result: "[Resultado]",
    stack: ["React Native", "Node.js", "MongoDB"],
    cover: "/media/proyecto-2/cover.svg",
    gallery: ["/media/proyecto-2/cover.svg", "/media/proyecto-2/screen1.svg"],
    video: null,
    demoUrl: "https://",
    repoUrl: "https://github.com/",
    featured: false,
  },
  {
    id: "proyecto-3",
    title: "[Proyecto 3]",
    description: "[Una línea sobre qué resuelve este proyecto]",
    problem: "[Problema]",
    approach: "[Approach técnico]",
    result: "[Resultado]",
    stack: ["Java", "Spring Boot", "Neo4j"],
    cover: "/media/proyecto-3/cover.svg",
    gallery: ["/media/proyecto-3/cover.svg", "/media/proyecto-3/screen1.svg"],
    video: null,
    demoUrl: "https://",
    repoUrl: "https://github.com/",
    featured: false,
  },
  {
    id: "proyecto-4",
    title: "[Proyecto 4]",
    description: "[Una línea sobre qué resuelve este proyecto]",
    problem: "[Problema]",
    approach: "[Approach técnico]",
    result: "[Resultado]",
    stack: ["Node.js", "Redis", "MongoDB"],
    cover: "/media/proyecto-4/cover.svg",
    gallery: ["/media/proyecto-4/cover.svg"],
    video: null,
    demoUrl: "https://",
    repoUrl: "https://github.com/",
    featured: false,
  },
];
