/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('public/imgs/bg.png')",
        person: "url('public/imgs/headshot.png')",
        testimonals: "url('public/testimonals.png')",
      },
    },
  },
  plugins: [],
};
