module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        blue: {
          default: "#0099ff"
        }
      },
      fontFamily: {
        'sans': ['Quicksand', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
