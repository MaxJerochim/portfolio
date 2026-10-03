// Cada proyecto es un objeto simple. Para agregar uno nuevo, copiá un
// bloque, cambiá los valores y sumalo al array. No hace falta tocar
// ningún componente.
//
// featured: true  -> se muestra grande, arriba de la grilla, con case study completo.
//                     Dejalo en true en UN SOLO proyecto.
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
      "Sitio institucional para una empresa de reciclaje de papel y cartón, con pedidos de presupuesto por WhatsApp.",
    problem:
      "La empresa no tenía presencia web y recibía las consultas de precio de forma desordenada, por teléfono y redes.",
    approach:
      "SPA en React + Vite con React Router. Página de materiales y un flujo de presupuesto (retiro o entrega + materiales) que arma el mensaje y abre WhatsApp. Imágenes optimizadas en WebP, carga diferida y diseño responsive.",
    result:
      "Sitio publicado en Vercel; el peso del proyecto bajó de 1,3 GB a 15 MB y los clientes piden presupuesto en dos clics.",
    stack: ["React", "Vite", "React Router", "Framer Motion"],
    cover: "/media/papelera/papelera-1-poster.webp",
    gallery: [],
    videos: videosDe("papelera", 4),
    demoUrl: "",
    repoUrl: "https://github.com/MaxJerochim/papelera-vazquez",
    featured: true,
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
  },
];
