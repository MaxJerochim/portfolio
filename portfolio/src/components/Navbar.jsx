import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/profile";

const LINKS = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#sobre-mi", label: "Sobre mí" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a href="#top" className="navbar-logo">
        <span className="accent-violet">&lt;</span>
        {profile.handle}
        <span className="accent-red">/&gt;</span>
      </a>

      <nav className="navbar-links">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="navbar-link">
            {link.label}
          </a>
        ))}
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <a href="#contacto" className="btn btn-red btn-small navbar-cta">
          Hablemos
        </a>
      </nav>
    </header>
  );
}
