/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        dsgray: 'hsl(234, 29%, 20%)',
        cgray: 'hsl(235, 18%, 26%)',
        gray: 'hsl(231, 7%, 60%)',
      },
      fontSize: {
        rem: "16px",
      },
      fontFamily: {
        robot: ['Roboto']
      }
    },
  },
  plugins: [],
}

