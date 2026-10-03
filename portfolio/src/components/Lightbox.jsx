import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// media: [{ type: "image" | "video", src, alt }]
export default function Lightbox({ media, index, onClose, onPrev, onNext }) {
  const isOpen = index !== null && media && media.length > 0;
  const current = isOpen ? media[index] : null;

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            className="lightbox-close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <X size={22} />
          </button>

          {media.length > 1 && (
            <button
              className="lightbox-nav lightbox-nav-left"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Anterior"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <motion.div
            key={current.src}
            className="lightbox-media"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            {current.type === "video" ? (
              <video
                src={current.src}
                poster={current.poster}
                controls
                autoPlay
                muted
                playsInline
                preload="metadata"
              />
            ) : (
              <img src={current.src} alt={current.alt || ""} />
            )}
          </motion.div>

          {media.length > 1 && (
            <button
              className="lightbox-nav lightbox-nav-right"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Siguiente"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {media.length > 1 && (
            <div className="lightbox-counter">
              {index + 1} / {media.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
