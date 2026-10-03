import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useKeyPress } from "../hooks/useKeyPress";
import { profile } from "../data/profile";

const HELP_TEXT = [
  "Comandos disponibles:",
  "  help      - ver esta ayuda",
  "  whoami    - quién soy",
  "  skills    - mi stack",
  "  projects  - link a la sección de proyectos",
  "  contact   - cómo contactarme",
  "  clear     - limpiar la pantalla",
  "  exit      - cerrar la terminal",
];

function runCommand(cmd, { onClose, onNavigate }) {
  const trimmed = cmd.trim().toLowerCase();

  switch (trimmed) {
    case "help":
      return HELP_TEXT;
    case "whoami":
      return [`${profile.name} — Full Stack Developer (React · Java · SQL/NoSQL)`];
    case "skills":
      return ["React, React Native, JavaScript, Java, Spring Boot, PostgreSQL, MongoDB, Neo4j"];
    case "projects":
      onNavigate("#proyectos");
      return ["Abriendo #proyectos..."];
    case "contact":
      return [
        [profile.email, profile.github.replace("https://", ""), profile.linkedin.replace("https://", "")]
          .filter(Boolean)
          .join(" · "),
      ];
    case "clear":
      return { clear: true };
    case "exit":
      onClose();
      return ["Cerrando terminal..."];
    case "":
      return [];
    default:
      return [`zsh: command not found: ${cmd}`];
  }
}

export default function SecretTerminal() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([
    "Terminal secreta encontrada. Escribí 'help' para ver los comandos.",
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useKeyPress("~", () => setOpen((prev) => !prev));

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function handleSubmit(e) {
    e.preventDefault();
    const result = runCommand(input, {
      onClose: () => setOpen(false),
      onNavigate: (hash) => {
        setOpen(false);
        window.location.hash = hash;
      },
    });

    if (result && result.clear) {
      setHistory([]);
    } else {
      setHistory((prev) => [...prev, `$ ${input}`, ...(result || [])]);
    }
    setInput("");
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="secret-terminal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="secret-terminal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="terminal-header">
              <span className="dot dot-violet" />
              <span className="dot dot-red" />
              <span className="dot dot-gray" />
              <span className="terminal-title">terminal secreta — encontrada ✓</span>
            </div>
            <div className="secret-terminal-body">
              {history.map((line, i) => (
                <div key={i} className="terminal-muted">
                  {line}
                </div>
              ))}
              <form onSubmit={handleSubmit} className="secret-terminal-form">
                <span className="accent-violet">$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  autoFocus
                  spellCheck={false}
                  aria-label="Comando de terminal"
                />
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
