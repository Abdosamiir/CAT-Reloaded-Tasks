/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./src/assets/imgs/bg.png')",
        person: "url('./src/assets/imgs/headshot.png')",
      },
    },
  },
  plugins: [],
};
