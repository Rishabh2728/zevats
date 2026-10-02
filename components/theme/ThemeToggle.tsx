"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-8 h-8 rounded-lg border border-[var(--border-subtle)] ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      data-cursor="hover"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zevats-purple/50 ${
        isDark
          ? "bg-[#181522] border-[rgba(255,255,255,0.12)] text-[#D8B4FE] hover:border-zevats-purple/50 hover:bg-[#201B2C]"
          : "bg-white border-[#E5E7EB] text-zevats-dark hover:border-zevats-purple/50 hover:bg-gray-50"
      } ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </motion.div>
    </button>
  );
};
