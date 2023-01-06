/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  variants: {
    scale: ['focus-within']
  },
  darkMode: 'class', //media - тема змінюється в налаштуваннях ос, class - у браузері
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      animation: {
        bounce: 'bounce 0.3s infinite',
        spin: 'spin 4s linear infinite',
        wiggle: 'wiggle 5s infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {transform: 'scale(1.2) rotate(45deg)'},
          '25%': {transform: 'rotate(180deg)'},
          '50%': {transform: 'scale(0.8) rotate(-45deg)'},
          '75%': {transform: 'rotate(180deg)'},
        }
      },
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        blue: {
          950: "#173050"
        },
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8"
        },
      },
      fontSize: {
        '3.5xl': ['2rem', {
          lineHeight: '2.3rem'
        }],
        '2.5xl': ['1.75rem', {
          lineHeight: '1.8rem'
        }],
      },
      fontFamily: {
        headline: "Poppins, sans-serif"
      },
      lineClamp: {
        7: '7',
        12: '12'
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
}
