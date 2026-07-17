/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        ink: "#FFFFFF",
        "ink-soft": "rgba(255,255,255,.72)",
        accent: "#560014",
        glass: "rgba(255,255,255,.08)",
        edge: "rgba(255,255,255,.12)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
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
