/** @type {import('tailwindcss.Config} */

const defautTheme = require('tailwindcss/defaultTheme')

module.exports = {
  variants: {
    scale: ['focus-within']
  },
  darkMode: 'class', //media - тема змінюється в налаштуваннях ос, class - у браузері
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      xs: '540px',
      ...defautTheme.screens,
    },
    extend: {
      backgroundImage: {
        texture: `url('https://images.unsplash.com/photo-1667775326475-b0166b3fa056?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80`,
      },
      textColor: {
        skin: {
          base: "rgb(var(--color-text-base) / <alpha-value>)",
          muted: "rgb(var(--color-text-muted) / <alpha-value>)",
          inverted: "rgb(var(--color-text-inverted) / <alpha-value>)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "rgb(var(--color-fill) / <alpha-value>)",
          'button-accent': "rgb(var(--color-button-accent) / <alpha-value>)",
          'button-accent-hover': "rgb(var(--color-button-accent-hover) / <alpha-value>)",
          'button-muted': "rgb(var(--color-button-muted) / <alpha-value>)",
        },
      },
      gradientColorStops: {
        skin: {
          hue: "rgb(var(--color-fill) / <alpha-value>)",
        },
      },
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      animation: {
        bounce: 'bounce 0.3s infinite',
        spin: 'spin 4s linear infinite',
        wiggle: 'wiggle 5s infinite',
        tilt: 'tilt 5s linear infinite '
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5eg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
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
        headline: "Poppins, sans-serif",
        graffity: "Sedgwick Ave, cursive"
      },
      lineClamp: {
        7: '7',
        12: '12'
      },
      blur: {
        px: '1px'
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography")
  ],
}
