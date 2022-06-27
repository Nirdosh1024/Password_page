/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html", ],
  theme: {
    colors: {
      bgColor: "#33A0D9",
      mainBg: "#F2F2F2",
      'white': "#ffffff",
      'black': "black",
      footBg: "#2180B2"
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
      AvenirNext: ['Avenir Next', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
