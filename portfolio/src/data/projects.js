// Cada proyecto es un objeto simple. Para agregar uno nuevo, copiá un
// bloque, cambiá los valores y sumalo al array. No hace falta tocar
// ningún componente.
//
// featured: true  -> se le pone el badge "Proyecto principal" y, si tiene
//                     problem/approach/result, muestra el case study en vez
//                     de la descripción corta. Dejalo en true en UN SOLO
//                     proyecto.
//
// size -> controla qué tan grande es la tarjeta en la grilla bento de
//         escritorio (en mobile todas quedan en una columna igual):
//           "xl" -> grande, ocupa 4 de 6 columnas
//           "lg" -> ancha, ocupa 2 de 6 columnas (usala junto a una "xl"
//                   para completar la fila)
//           "md" -> estándar, ocupa 2 de 6 columnas (default si no se pone)
//         Para que las filas cierren prolijas, sumá los números: 6, 12, etc.
//
// cover   -> imagen de la tarjeta (liviana, .webp).
// gallery -> capturas extra (opcional). Se muestran antes de los videos.
// videos  -> demos en .mp4. Cada uno con su "poster" (la imagen que se ve
//            antes de darle play). Los videos NO se descargan al entrar a la
//            página: recién cuando alguien abre la galería y le da play.
//
// demoUrl / repoUrl -> si los dejás vacíos (""), el link no se muestra.

// Arma la lista de videos de una carpeta: videosDe("papelera", 4) ->
// /media/papelera/papelera-1.mp4 ... papelera-4.mp4 (con sus posters)
const videosDe = (slug, cantidad) =>
  Array.from({ length: cantidad }, (_, i) => ({
    src: `/media/${slug}/${slug}-${i + 1}.mp4`,
    poster: `/media/${slug}/${slug}-${i + 1}-poster.webp`,
  }));

export const projects = [
  {
    id: "papelera",
    title: "Grupo Fibras — Papelera Vazquez",
    description:
      "Sitio para una empresa de reciclaje de papel y cartón, con pedido de presupuesto por WhatsApp.",
    problem: "",
    approach: "",
    result: "",
    stack: ["React", "Vite", "React Router", "Framer Motion"],
    cover: "/media/papelera/papelera-1-poster.webp",
    gallery: [],
    videos: videosDe("papelera", 4),
    demoUrl: "",
    repoUrl: "",
    featured: true,
    size: "xl",
  },
  {
    id: "lm-motors",
    title: "L&M Motors",
    description:
      "Concesionaria de autos y motos: catálogo con filtros, ficha de cada vehículo y panel de administración para cargar el stock.",
    problem: "",
    approach: "",
    result: "",
    stack: ["React", "Vite", "Node.js"],
    cover: "/media/lm-motors/lm-motors-1-poster.webp",
    gallery: [],
    videos: videosDe("lm-motors", 3),
    demoUrl: "",
    repoUrl: "",
    featured: false,
    size: "lg",
  },
  {
    id: "cartech",
    title: "Cartech",
    description:
      "Cotizador de kits multimedia para autos: elegís marca y modelo y te muestra las combinaciones de pantalla, moldura y cámara con su precio.",
    problem: "",
    approach: "",
    result: "",
    stack: ["React", "Vite", "Node.js"],
    cover: "/media/cartech/cartech-2-poster.webp",
    gallery: [],
    videos: videosDe("cartech", 2),
    demoUrl: "",
    repoUrl: "",
    featured: false,
    size: "md",
  },
  {
    id: "elixir-baires",
    title: "Elixir Baires",
    description:
      "Tienda online de bebidas: catálogo por categorías, detalle de producto, carrito y panel para gestionar promociones y degustaciones.",
    problem: "",
    approach: "",
    result: "",
    stack: ["React", "Vite"],
    cover: "/media/elixir-baires/elixir-baires-1-poster.webp",
    gallery: [],
    videos: videosDe("elixir-baires", 1),
    demoUrl: "",
    repoUrl: "",
    featured: false,
    size: "md",
  },
  {
    id: "ig-clone",
    title: "IG Clone — React Native",
    description:
      "Clon de Instagram hecho con React Native: feed, stories, likes y perfil de usuario.",
    problem: "",
    approach: "",
    result: "",
    stack: ["React Native", "Expo"],
    cover: "/media/ig-clone/ig-clone-1-poster.webp",
    gallery: [],
    videos: videosDe("ig-clone", 1),
    demoUrl: "",
    repoUrl: "",
    featured: false,
    size: "md",
  },
];
