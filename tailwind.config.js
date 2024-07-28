/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#131319",
        card: "#27292D",
        "gray-2": " #C5C7CA",
        "gray-3": "#7F8084",
        "gray-4": "#6B6C70",
        accent: "#4A96FF",
      },
      borderColor: {
        form: `linear-gradient(129.59deg_#969696_0%_#343434_98.18%)`,
      },
    },
  },
  plugins: [],
};
