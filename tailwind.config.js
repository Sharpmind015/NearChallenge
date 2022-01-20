module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': {
        100: '#587BE0',
        200: '#799CFF',
        300: '#9DB7FF',
        400: '#CFDCFF',
        500: '#EAEFFF'
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
        600: '#DFDFE0'
      },
    },
    extend: {},
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    }
  },
  plugins: [],
}
