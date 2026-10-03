import { motion } from "framer-motion";
import Terminal from "./Terminal";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <svg
        className="hero-wireframe"
        width="360"
        height="360"
        viewBox="0 0 360 360"
        aria-hidden="true"
      >
        <circle cx="180" cy="180" r="150" className="wire wire-violet" />
        <ellipse cx="180" cy="180" rx="150" ry="55" className="wire wire-violet" />
        <ellipse
          cx="180"
          cy="180"
          rx="150"
          ry="55"
          className="wire wire-red"
          transform="rotate(60 180 180)"
        />
        <ellipse
          cx="180"
          cy="180"
          rx="150"
          ry="55"
          className="wire wire-violet"
          transform="rotate(120 180 180)"
        />
      </svg>

      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-tag">
          <span className="status-dot" />
          Disponible para nuevos proyectos
        </div>

        <div>
          <p className="hero-greeting">Hola, soy</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">
            <span className="accent-violet">Full</span>{" "}
            <span className="accent-red">Stack</span> Developer
          </p>
        </div>

        <p className="hero-subtitle">
          Construyo productos de punta a punta: interfaces con React y React
          Native, APIs robustas con Java y Spring Boot, y datos en bases SQL
          y NoSQL (MongoDB, Neo4j).
        </p>

        <div className="hero-cta">
          <a href="#proyectos" className="btn btn-violet">
            Ver proyectos →
          </a>
          <a href="#sobre-mi" className="btn btn-outline">
            Sobre mí
          </a>
        </div>
      </motion.div>

      <Terminal />
    </section>
  );
}
