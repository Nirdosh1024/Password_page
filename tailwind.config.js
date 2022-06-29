/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      bgColor: "#33A0D9",
      mainBg: "#F2F2F2",
      'white': "#ffffff",
      'black': "black",
      'red': "red",
      footBg: "#2180B2"
    },
    screen:  {
          'sm': '640px',
          // => @media (min-width: 640px) { ... } 
      
          'md': '768px',
          // => @media (min-width: 768px) { ... }
      
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
      
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
      AvenirNext: ['Avenir Next', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
