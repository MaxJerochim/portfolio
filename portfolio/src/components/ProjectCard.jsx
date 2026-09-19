import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function ProjectCard({ project, featured, onOpenMedia }) {
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
        aria-label={`Ver fotos y video de ${project.title}`}
      >
        <img src={project.cover} alt={project.title} loading="lazy" />
        <div className="project-media-overlay">
          <Play size={featured ? 30 : 20} />
          <span>Ver fotos {project.video ? "y video" : ""}</span>
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

        {featured ? (
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

        <div className="project-links">
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            Ver demo →
          </a>
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            Código →
          </a>
        </div>
      </div>
    </motion.article>
  );
}
