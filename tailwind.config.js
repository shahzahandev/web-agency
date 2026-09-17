/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d0d0d",
        carbon: "#171717",
        paper: "#f7f4ed",
        mist: "#ece8de",
        muted: "#78716c",
        line: "rgba(13, 13, 13, 0.12)",
        acid: "#d7ff47",
        ocean: "#3b82f6",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(13, 13, 13, 0.10)",
        glow: "0 18px 60px rgba(215, 255, 71, 0.22)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(13,13,13,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(13,13,13,.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
