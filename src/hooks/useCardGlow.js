import { useRef, useCallback, useEffect } from "react";

export default function useCardGlow() {
  const cardRef = useRef(null);
  const rafRef = useRef(null);

  const onMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const { clientX, clientY } = e;

    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--glow-x", `${clientX - rect.left}px`);
        card.style.setProperty("--glow-y", `${clientY - rect.top}px`);
      });
    }
  }, []);

  const onMouseEnter = useCallback(() => {
    cardRef.current?.style.setProperty("--glow-opacity", "1");
  }, []);

  const onMouseLeave = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    cardRef.current?.style.setProperty("--glow-opacity", "0");
  }, []);

  useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  return { ref: cardRef, onMouseMove, onMouseEnter, onMouseLeave };
}
