import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

let idCounter = 0;

// Destellos que van apareciendo detrás del cursor mientras el mouse se
// mueve. pointer-events: none en todo, así nunca tapa un click.
export default function MouseSparkles() {
  const [sparkles, setSparkles] = useState([]);
  const lastSpawn = useRef(0);

  const spawnSparkle = useCallback((x, y) => {
    const now = performance.now();
    // throttle: como mucho un destello cada ~45ms
    if (now - lastSpawn.current < 45) return;
    lastSpawn.current = now;

    const id = idCounter++;
    const color = Math.random() > 0.5 ? "violet" : "red";
    const size = 5 + Math.random() * 7;
    const driftX = (Math.random() - 0.5) * 40;

    setSparkles((prev) => [...prev, { id, x, y, color, size, driftX }]);

    window.setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== id));
    }, 700);
  }, []);

  useEffect(() => {
    function handleMouseMove(e) {
      spawnSparkle(e.clientX, e.clientY);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [spawnSparkle]);

  return (
    <div className="sparkle-layer" aria-hidden="true">
      <AnimatePresence>
        {sparkles.map((s) => (
          <motion.span
            key={s.id}
            className={`sparkle sparkle-${s.color}`}
            style={{
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
            }}
            initial={{ opacity: 0.9, scale: 0, x: 0, y: 0 }}
            animate={{ opacity: 0, scale: 1, x: s.driftX, y: 28 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
