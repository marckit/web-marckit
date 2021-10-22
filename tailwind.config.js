module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      default: 'Monospaced',
    },
    extend: {
      colors: {
        blackpure: '#000000',
        black: '#0F0F0F',
        greydark: '#4F4F4F',
        grey: '#888888',
        greylight: '#B0B0B0',
        white: '#F0F0F0',
        whitepure: '#FFFFFF',
        blue: '#0720F4',
      },
      screens: {
        '2xl': '1600px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
