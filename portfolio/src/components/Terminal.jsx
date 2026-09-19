import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINES = [
  { prompt: "$ whoami", output: "> full_stack_developer" },
  { prompt: "$ cat stack.json", output: null },
  { prompt: "$ echo $STATUS", output: '"buscando nuevos desafíos"' },
];

const STACK_JSON = [
  "{",
  '  "front": ["React", "React Native", "JS"],',
  '  "back": ["Java", "Spring Boot"],',
  '  "db": ["SQL", "MongoDB", "Neo4j"]',
  "}",
];

// Efecto "máquina de escribir": revela el texto letra por letra.
function useTypewriter(text, speed = 22, startDelay = 0) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    setShown("");
    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return shown;
}

export default function Terminal() {
  const line1 = useTypewriter(LINES[0].prompt, 28, 200);
  const line2 = useTypewriter(LINES[1].prompt, 28, 1100);
  const line3 = useTypewriter(LINES[2].prompt, 28, 2800);

  return (
    <motion.div
      className="terminal-card"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
    >
      <div className="terminal-header">
        <span className="dot dot-violet" />
        <span className="dot dot-red" />
        <span className="dot dot-gray" />
        <span className="terminal-title">zsh — ~/portfolio</span>
      </div>

      <div className="terminal-body">
        <div className="terminal-line">
          <span className="terminal-muted">{line1}</span>
        </div>
        {line1 === LINES[0].prompt && (
          <div className="accent-violet">{LINES[0].output}</div>
        )}

        <div className="terminal-line" style={{ marginTop: 10 }}>
          <span className="terminal-muted">{line2}</span>
        </div>
        {line2 === LINES[1].prompt &&
          STACK_JSON.map((row, i) => (
            <motion.div
              key={row}
              className="terminal-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 + i * 0.12 }}
            >
              {row}
            </motion.div>
          ))}

        <div className="terminal-line" style={{ marginTop: 10 }}>
          <span className="terminal-muted">{line3}</span>
        </div>
        {line3 === LINES[2].prompt && (
          <div className="accent-red">{LINES[2].output}</div>
        )}

        <div className="terminal-cursor-row">
          <span className="terminal-muted">$</span>{" "}
          <span className="terminal-cursor" />
        </div>
      </div>

      <div className="terminal-badge">Secreto: presioná ~</div>
    </motion.div>
  );
}
