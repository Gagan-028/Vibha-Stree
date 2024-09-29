/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs","./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'custom-sans': ["'Gill Sans'", "'Gill Sans MT'", 'Calibri', "'Trebuchet MS'", 'sans-serif'],
      'verdana' : ['Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}