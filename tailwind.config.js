/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        ink: "#FFFFFF",
        "ink-soft": "rgba(255,255,255,.72)",
        "ink-dim": "rgba(255,255,255,.48)",
        accent: "#560014",
        "accent2": "#FF3D63",
        "accent2-soft": "rgba(255,61,99,.14)",
        glass: "rgba(255,255,255,.08)",
        "glass-soft": "rgba(255,255,255,.04)",
        edge: "rgba(255,255,255,.12)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
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
