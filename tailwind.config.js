module.exports = {
  purge: [
    './styles/globals.css',
    './node_modules/video.js/dist/video-js.min.css',
    './node_modules/@silvermine/videojs-quality-selector/dist/css/quality-selector.css',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './services/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    fontFamily: {
      helvetica: ['Helvetica', 'Arial', 'sans-serif'],
      mono: ['SpaceMono', 'monospace'],
      sans: ['PublicSans', 'sans-serif'],
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      maxWidth: {
        xxs: '18rem',
      },
      width: {
        85: '22.5rem',
        99: '28.5rem',
      },
      fontFamily: {
        assistant: ['Assistant', 'regular'],
      },
      boxShadow: {
        header: '0px 0px 10px 0px rgb(0 0 0 / 50%)',
        posts: '0px 0px 10px',
      },
      blur: {
        xs: '2px',
      },
      borderWidth: {
        3: '3px',
        6: '6px',
      },
      colors: {
        primary: {
          dark: 'var(--primary-dark)',
        },
        gray: {
          lightest: 'var(--gray-lightest)',
          lighter: 'var(--gray-lighter)',
          light: 'var(--gray-light)',
          DEFAULT: 'var(--gray-DEFAULT)',
          dark: 'var(--gray-dark)',
          250: '#F5F5F5',
          150: '#EEEEEE',
        },
        blue: {
          250: '#B8C8FF',
        },
        green: {
          150: '#d7f6f2',
          250: '#6EC1E3',
          350: '#47C6BA',
          450: '#61CE70',
        },
        violet: {
          250: '#6E4C98',
          350: '#654191',
        },
      },
      height: {
        120: '30rem', // for larger images
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  variants: {
    extend: {
      fontFamily: {
        assistant: ['Assistant', 'sans-serif'],
      },
      animation: ['hover'],
      blur: ['hover'],
      borderWidth: ['first'],
      borderRadius: ['last'],
      display: ['group-hover', 'hover'],
      filter: ['hover'],
      transitionDuration: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-selection-variant'),
  ],
};
