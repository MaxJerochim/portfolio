import { useEffect } from "react";

// Ejecuta `callback` cada vez que se presiona `targetKey`.
// Ignora el evento si el foco está en un input/textarea (para no
// interferir con lo que el usuario esté escribiendo).
export function useKeyPress(targetKey, callback) {
  useEffect(() => {
    function handleKeyDown(event) {
      const tag = event.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (event.key === targetKey) {
        callback(event);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [targetKey, callback]);
}
