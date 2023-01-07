/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

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
      backgroundImage: {
        texture: `url('https://images.unsplash.com/photo-1667775326475-b0166b3fa056?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')`,
      },
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted'),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill'),
        },
      },
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
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
}
