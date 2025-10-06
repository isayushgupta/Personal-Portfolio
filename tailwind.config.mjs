/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
      },
    },
  },
  darkMode: ["class", '[data-mode="dark"]'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};

export default config;
