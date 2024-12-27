/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('../assets/imgs/bg.png')",
        person: "url('../assets/imgs/headshot.png')",
        testimonals: "url('../assets/imgs/testimonals.png')",
      },
    },
  },
  plugins: [],
};
