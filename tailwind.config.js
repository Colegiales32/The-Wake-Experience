/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: { 
      colors: {
        'tarde':'#5C4A3E',
        'gris': '#363636',
        'grisclaro':'#646464',
        'grisTr':'#7C7A7A'
      },
      height: {
        120:"43rem",
      } ,
      backgroundImage: {
        'old': "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/olds.jpg')",
        'fondo': "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/fondo.jpeg')",
      }},
    fontFamily: {
      stencil:['Saira Stencil One', 'sans-serif'],
      path:['Pathway Extreme', 'sans-serif']
    }
  },
  plugins:[
    require('tailwindcss-animated')
  ],
}

