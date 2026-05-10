/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF6EC',
          dark: '#F8F3E8',
        },
        yellow: {
          light: '#F3E7BE',
          DEFAULT: '#EFE3B8',
          dark: '#EADDA6',
        },
        purple: {
          light: '#E7DDF2',
          DEFAULT: '#D8C9E8',
          dark: '#CDB9E8',
        },
        text: {
          primary: '#2F302B',
          secondary: '#504643',
          muted: '#8A857F',
        },
        sage: {
          DEFAULT: '#6E7B62',
          light: '#7D8A72',
        },
        border: {
          DEFAULT: 'rgba(80, 70, 55, 0.15)',
          light: 'rgba(80, 70, 55, 0.08)',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        body: ['Karla', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.65rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
      },
      maxWidth: {
        '5xl': '70rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
