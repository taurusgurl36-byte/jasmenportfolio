import { createContext, useContext, useState, useEffect } from "react";
import { flushSync } from "react-dom";
import { applyTheme, getStoredTheme, isDarkTheme, saveTheme } from "../utils/theme";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getStoredTheme);

  const setTheme = (newTheme, event) => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Animate only when the visible theme changes and the browser supports it.
    if (
      isDarkTheme(newTheme) === isDarkTheme(theme) ||
      !document.startViewTransition ||
      isReducedMotion ||
      !event
    ) {
      setThemeState(newTheme);
      return;
    }

    const { clientX, clientY } = event;
    const radius = Math.hypot(
      Math.max(clientX, window.innerWidth - clientX),
      Math.max(clientY, window.innerHeight - clientY),
    );

    document.documentElement.style.setProperty("--reveal-x", `${clientX}px`);
    document.documentElement.style.setProperty("--reveal-y", `${clientY}px`);
    document.documentElement.style.setProperty("--reveal-radius", `${radius}px`);

    document.startViewTransition(() => {
      flushSync(() => {
        setThemeState(newTheme);
        applyTheme(newTheme);
      });
    });
  };

  useEffect(() => {
    applyTheme(theme);
    saveTheme(theme);

    if (theme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const listener = () => applyTheme("system");
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
