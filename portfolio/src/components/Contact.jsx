import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

export default function Contact() {
  // El botón principal usa el mail si está cargado; si no, lleva a GitHub.
  const mainLink = profile.email ? `mailto:${profile.email}` : profile.github;

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
        <a
          href={mainLink}
          className="btn btn-red"
          target={profile.email ? undefined : "_blank"}
          rel="noreferrer"
        >
          Escribime
        </a>

        <div className="contact-socials">
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={20} /> GitHub
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} /> LinkedIn
            </a>
          )}
          {profile.email && (
            <a href={`mailto:${profile.email}`} aria-label="Mail">
              <Mail size={20} /> Mail
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
}
