import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre-mi" className="section about-section">
      <motion.div
        className="about-photo"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        [FOTO]
      </motion.div>

      <motion.div
        className="about-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="section-label accent-violet">// sobre mí</span>
        <h2>Un poco sobre mí</h2>
        <p>
          [Contá brevemente cómo llegaste a programar, qué te apasiona del
          desarrollo full stack y qué tipo de proyectos te gustaría encarar
          de acá en adelante.]
        </p>
        <p className="about-fun-fact">&gt; años_programando: [X]</p>
      </motion.div>
    </section>
  );
}
