module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./custom-hook/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': {
        100: '#587BE0',
        200: '#799CFF',
        300: '#9DB7FF',
        400: '#CFDCFF',
        500: '#EAEFFF',
        600: '#F0EBFF'
      },
      'accent': {
        100: '#B072FF',
        200: '#885FFF',
        300: '#3BD0AC',
      },
      'gray': {
        100: '#33373B',
        200: '#414047',
        300: '#6F6E73',
        400: '#A0A0A1',
        500: '#BEBEC2',
        600: '#DFDFE0',
        700: '#F5F5F5',
        800: '#6F6E73',
        900: '#FCFCFC'
      },
      'white': '#FFFFFF',
      'black': '#000000',
      'green': {
        100: '#E2F9F3',
        200: '#EBF5FF'
      },
      'pink': {
        100: '#FFF3EC'
      }
    },
    extend: {},
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    }
  },
  plugins: [],
}
