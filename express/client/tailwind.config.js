module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/8' : '12.5%',
        '150' : '150px',
        '300' : '300px',
        '450' : '450px',
        '700' : '700px',
        '800' : '800px',
        'min-content' : 'min-content'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'Righteous': ['Righteous', 'cursive'],
        'Auto-techno': ['Auto-techno', 'Righteous'],
        'Equinox-bold': ['Equinox-bold', 'Auto-techno'],
        'Equinox': ['Equinox', 'Auto-techno']
      },
      height: {
        '1/8' : '12.5%',
        '150' : '150px',
        '200' : '200px',
        '250' : '250px',
        '300' : '300px',
        '350' : '350px',
        '400' : '400px',
        '450' : '450px',
        '500' : '500px',
        '550' : '550px',
        '600' : '600px',
        '650' : '650px',
        '700' : '700px',
        '750' : '750px',
        '800' : '800px',
      },
      //use this to do for all colors. much simplier
      colors: {
        'dark': '#363636',
        'orange': 'orange',
        'burnt-orange' : '#CC5500',
        'tangelo' : '#EC7625',
        'turqoise-100': '#b3ecec',
        'turqoise-300': '#89ecda',
        'turqoise-500': '#43e8d8',
        'turqoise-700': '#40e0d0',
        'turqoise-900': '#3bd6c6',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),]
}
