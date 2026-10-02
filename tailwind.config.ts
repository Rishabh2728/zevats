import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      colors: {
        // Core Editorial Palette
        ink: "#111111",
        paper: "#F4F1EA",
        "soft-white": "#FAF9F6",
        "muted-gray": "#686868",
        zevats: {
          purple: "#7B2CF6",
          deep: "#5B0FA8",
          vibrant: "#9333EA",
          royal: "#5B0FA8",
          lavender: "#D8B4FE",
          // Neutrals
          ink: "#111111",
          paper: "#F4F1EA",
          softwhite: "#FAF9F6",
          mutedgray: "#686868",
          dark: "#111111",
          gray: "#686868",
          offwhite: "#F4F1EA",
          // Supporting
          sub1: "#EDE9FE",
          sub2: "#DDD6FE",
          sub3: "#C4B5FD",
          sub4: "#A78BFA",
        },
        theme: {
          bg: "var(--bg-primary)",
          "bg-sec": "var(--bg-secondary)",
          "bg-tert": "var(--bg-tertiary)",
          surface: "var(--surface)",
          "surface-hover": "var(--surface-hover)",
          "surface-elevated": "var(--surface-elevated)",
          border: "var(--border-subtle)",
          "border-strong": "var(--border-strong)",
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "ambient-slow": "ambientSlow 24s ease-in-out infinite",
        "light-sweep": "lightSweep 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        ambientSlow: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(8px, -12px) scale(1.03)" },
        },
        lightSweep: {
          "0%": { transform: "translateX(-100%)" },
          "30%, 100%": { transform: "translateX(200%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
