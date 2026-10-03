import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Database, Server, Smartphone } from "lucide-react";
import { profile } from "../data/profile";

const ORBIT_ICONS = [Code2, Server, Database, Smartphone];

// Partículas con posiciones/tiempos fijos (no aleatorios en cada render)
const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  delay: `${(i * 0.45) % 6}s`,
  duration: `${5 + ((i * 1.3) % 4)}s`,
  size: 2 + (i % 3),
  red: i % 3 === 0,
}));

function AboutOrb() {
  // Inclinación 3D siguiendo el mouse
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 120, damping: 14 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 14 });

  function handleMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.div
      className="orb-scene"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      aria-hidden="true"
    >
      <div className="orb-aura" />

      <div className="orb-particles">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className={`orb-particle ${p.red ? "orb-particle-red" : ""}`}
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="orb-orbit orb-orbit-1"><span className="orb-planet" /></div>
      <div className="orb-orbit orb-orbit-2"><span className="orb-planet orb-planet-red" /></div>
      <div className="orb-orbit orb-orbit-3"><span className="orb-planet" /></div>

      <div className="orb-ring" />

      <div className="orb-icons">
        {ORBIT_ICONS.map((Icon, i) => (
          <span key={i} className="orb-icon" style={{ "--i": i }}>
            <span className="orb-icon-inner">
              <Icon size={18} />
            </span>
          </span>
        ))}
      </div>

      <div className="orb-core">
        <span className="orb-initials" data-text={initials}>
          {initials}
        </span>
        <span className="orb-caption">{"<dev/>"}</span>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="sobre-mi" className="section about-section">
      <div className="about-visual">
        <AboutOrb />
      </div>

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
          Soy {profile.name}, desarrollador full stack de Buenos Aires. Me
          gusta construir productos completos: desde una interfaz cuidada y
          rápida hasta la API y la base de datos que la sostienen.
        </p>
        <p>
          Trabajo con React, Node.js y Java, y disfruto llevar proyectos
          reales a producción: sitios para empresas, paneles de
          administración y aplicaciones con datos de verdad.
        </p>
        <p className="about-fun-fact">&gt; ubicación: {profile.location}</p>
      </motion.div>
    </section>
  );
}
