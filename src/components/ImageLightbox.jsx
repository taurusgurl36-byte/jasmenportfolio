import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Photo from "./Photo";
import { getImageLayout } from "../utils/imageLayout";

export default function ImageLightbox({ src, alt, isOpen, onClose, imageMetadata }) {
  const closeRef = useRef(null);
  const imageRatio = getImageLayout(imageMetadata)?.ratio ?? 4 / 3;

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    closeRef.current?.focus({ preventScroll: true });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      // The close button is the viewer's only control. Keep keyboard focus inside.
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="lightbox-backdrop"
          onClick={onClose}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            className="lightbox-dialog"
            style={{ "--image-ratio": imageRatio }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="lightbox-close"
            >
              <X size={20} />
            </button>
            <Photo src={src} alt={alt} metadata={imageMetadata} className="lightbox-image" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
