"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage preference
    const saved = localStorage.getItem("zevats-theme") as Theme | null;
    if (saved === "light" || saved === "dark") {
      setThemeState(saved);
      applyTheme(saved, false);
    } else {
      // Per Requirement 20: Light mode is default visual expression
      const initial: Theme = "light";
      setThemeState(initial);
      applyTheme(initial, false);
    }
    setMounted(true);
  }, []);

  const applyTheme = (newTheme: Theme, animate = true) => {
    const root = document.documentElement;

    if (animate) {
      root.classList.add("theme-transition");
    }

    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    if (animate) {
      setTimeout(() => {
        root.classList.remove("theme-transition");
      }, 650);
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("zevats-theme", newTheme);
    applyTheme(newTheme, true);
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
