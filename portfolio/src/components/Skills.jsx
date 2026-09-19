import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <span className="section-label accent-red">// skills</span>
        <h2>Con qué trabajo</h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.label}
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <h3
              className={
                category.accent === "violet" ? "accent-violet" : "accent-red"
              }
            >
              {category.label}
            </h3>
            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
