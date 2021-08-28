module.exports = {
  purge: [
    './styles/globals.css',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    // fontFamily: {},
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      // colors: {
      //   primary: {
      //     DEFAULT: 'var(--primary-DEFAULT)',
      //   },
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
