/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#131319",
        card: "#27292D",
        "post-input": "#191920",
        "slate-1": " #C5C7CA",
        "slate-2": "#7F8084",
        "slate-3": "#6B6C70",
        "slate-4": "#35373B",
        accent: "#4A96FF",
      },
      borderColor: {
        form: `linear-gradient(129.59deg_#969696_0%_#343434_98.18%)`,
      },
    },
  },
  plugins: [],
};
