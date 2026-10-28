/** @type {import('tailwindcss').Config} */
// Every colour comes from a CSS variable (see src/index.css) so the whole site
// flips between the dark and light theme without touching a single component.
export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--c-bg) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        "ink-soft": "rgb(var(--c-ink) / var(--a-soft))",
        "ink-dim": "rgb(var(--c-ink) / var(--a-dim))",
        accent2: "rgb(var(--c-accent) / <alpha-value>)",
        "accent2-soft": "rgb(var(--c-accent) / 0.13)",
        "on-accent": "rgb(var(--c-on-accent) / <alpha-value>)",
        glass: "rgb(var(--c-ink) / 0.07)",
        "glass-soft": "rgb(var(--c-ink) / 0.035)",
        edge: "rgb(var(--c-ink) / 0.13)",
        accent: "#560014",
      },
      fontFamily: {
        sans: ['"Geist Variable"', "system-ui", "sans-serif"],
        display: ['"Bricolage Grotesque Variable"', '"Geist Variable"', "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"JetBrains Mono Variable"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightish: "-0.015em",
        tighter2: "-0.03em",
      },
      height: {
        dscreen: "100dvh",
      },
      minHeight: {
        dscreen: "100dvh",
      },
    },
  },
  plugins: [],
};
