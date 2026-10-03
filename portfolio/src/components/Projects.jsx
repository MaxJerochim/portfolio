import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Lightbox from "./Lightbox";

function buildMedia(project) {
  const images = (project.gallery || []).map((src) => ({
    type: "image",
    src,
    alt: project.title,
  }));
  const videos = (project.videos || []).map((v) => ({
    type: "video",
    src: v.src,
    poster: v.poster,
    alt: project.title,
  }));
  // compatibilidad con el formato viejo (un solo video)
  if (project.video) videos.push({ type: "video", src: project.video, alt: project.title });
  return [...images, ...videos];
}

export default function Projects() {
  const [activeMedia, setActiveMedia] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  function openMedia(project) {
    setActiveMedia(buildMedia(project));
    setActiveIndex(0);
  }

  function closeMedia() {
    setActiveIndex(null);
  }

  function nextMedia() {
    if (!activeMedia) return;
    setActiveIndex((i) => (i + 1) % activeMedia.length);
  }

  function prevMedia() {
    if (!activeMedia) return;
    setActiveIndex((i) => (i - 1 + activeMedia.length) % activeMedia.length);
  }

  return (
    <section id="proyectos" className="section projects-section">
      <div className="section-heading">
        <span className="section-label accent-violet">// proyectos</span>
        <h2>Cosas que construí</h2>
        <p className="section-subtitle">
          Un caso a fondo, y el resto del trabajo debajo. Click en cualquier
          proyecto para ver fotos y video en grande.
        </p>
      </div>

      {featured && (
        <ProjectCard project={featured} featured onOpenMedia={openMedia} />
      )}

      <div className="projects-grid">
        {rest.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenMedia={openMedia}
          />
        ))}
        <div className="project-card-next">+ [tu próximo proyecto]</div>
      </div>

      <Lightbox
        media={activeMedia}
        index={activeIndex}
        onClose={closeMedia}
        onNext={nextMedia}
        onPrev={prevMedia}
      />
    </section>
  );
}
