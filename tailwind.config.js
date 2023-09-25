/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
    },
       colors: {
        "color-primary": "#01051e",
        "color-secondry": "rgb(22 163 74)",
        "color-primary-light":"#02072e",
        "color-primay-dark": "#010417",
        "color-gray": "#333",
        "color-while": "#fff",
        "color-blob": "#a427df",
        "color-hover-bg": "#010515",

       }
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'30px',
        md:"50px"
      }
    }
  },
  plugins: [],
}
