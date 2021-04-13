module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: [/^bg-/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      main: 'BuenosAires',
    },
    fontWeight: {
      regular: '400',
      semibold: '500',
    },
    fontSize: {
      h1: ['60px', '78px'],
      h2: ['35px', '35px'],
      h3: ['25px', '25px'],
      h4: ['16px', '16px'],
      parag: ['18px', '24.04px'],
    },
    colors: {
      yellow: '#ffc900',
      blue: '#00b7e6',
      purple: '#9500FF',
      black: '#000',
      white: '#fff',
      'yellow-2': '#FFF4CC',
      green: '#76A43D',
      red: '#A74833',
      'dark-blue': '#438BA7',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
