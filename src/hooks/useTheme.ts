import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "as-theme";
const THEME_COLOR: Record<Theme, string> = { dark: "#050505", light: "#f6f3f3" };

function readInitialTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

/**
 * Light / dark theme. The inline script in index.html applies the saved choice
 * before first paint; this hook keeps React in sync and saves later changes.
 * Dark is the default because the hero portrait is built for it.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLOR[theme]);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* storage can be blocked (private mode); the theme still switches */
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
