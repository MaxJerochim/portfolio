import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="section contact-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="contact-inner"
      >
        <h2>¿Hablamos?</h2>
        <p>
          Siempre abierto a charlar sobre nuevos proyectos, ideas o
          simplemente sobre código.
        </p>
        <a href="mailto:tu@email.com" className="btn btn-red">
          Escribime
        </a>

        <div className="contact-socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={20} /> GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href="mailto:tu@email.com" aria-label="Mail">
            <Mail size={20} /> Mail
          </a>
        </div>
      </motion.div>
    </section>
  );
}
