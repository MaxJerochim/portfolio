import { motion } from "framer-motion";
import { Play } from "lucide-react";

const isRealLink = (url) => typeof url === "string" && /^https?:\/\/.+\..+/.test(url);

export default function ProjectCard({ project, featured, onOpenMedia }) {
  const videoCount = (project.videos?.length || 0) + (project.video ? 1 : 0);
  const imageCount = project.gallery?.length || 0;
  const mediaLabel =
    videoCount && imageCount ? "Ver fotos y videos"
      : videoCount > 1 ? `Ver ${videoCount} videos`
      : videoCount === 1 ? "Ver video"
      : "Ver fotos";
  const hasCaseStudy = featured && project.problem && project.approach;
  const showDemo = isRealLink(project.demoUrl);
  const showRepo = isRealLink(project.repoUrl);

  return (
    <motion.article
      className={`project-card ${featured ? "project-card-featured" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
    >
      <button
        className="project-media"
        onClick={() => onOpenMedia(project, 0)}
        aria-label={`${mediaLabel} de ${project.title}`}
      >
        <img src={project.cover} alt={project.title} loading="lazy" decoding="async" />
        <div className="project-media-overlay">
          <Play size={featured ? 30 : 20} />
          <span>{mediaLabel}</span>
        </div>
        {featured && <span className="project-badge">Proyecto principal</span>}
      </button>

      <div className="project-body">
        <h3>{project.title}</h3>

        <div className="project-tags">
          {project.stack.map((tech, i) => (
            <span
              key={tech}
              className={`chip ${i % 2 === 0 ? "chip-violet" : "chip-red"}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {hasCaseStudy ? (
          <div className="project-case-study">
            <p>
              <strong className="accent-violet">PROBLEMA —</strong>{" "}
              {project.problem}
            </p>
            <p>
              <strong className="accent-red">APPROACH —</strong>{" "}
              {project.approach}
            </p>
            <p>
              <strong>RESULTADO —</strong> {project.result}
            </p>
          </div>
        ) : (
          <p className="project-description">{project.description}</p>
        )}

        {(showDemo || showRepo) && (
          <div className="project-links">
            {showDemo && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                Ver demo →
              </a>
            )}
            {showRepo && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                Código →
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
