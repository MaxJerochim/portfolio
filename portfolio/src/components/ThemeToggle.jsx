import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="theme-toggle"
    >
      <motion.div
        className="theme-toggle-knob"
        animate={{ x: isDark ? 0 : 20 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {isDark ? <Moon size={12} /> : <Sun size={12} />}
      </motion.div>
    </button>
  );
}
