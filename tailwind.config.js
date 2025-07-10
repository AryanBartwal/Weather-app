/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        primary: {
          50: '#e6fffd',
          100: '#b3fff8',
          200: '#80fff3',
          300: '#4dffee',
          400: '#1affe9',
          500: '#00e6d1',
          600: '#00b3a3',
          700: '#008075',
          800: '#004d46',
          900: '#001a18',
        },
        cyber: {
          50: '#e6fffd',
          100: '#ccfffc',
          200: '#99fff9',
          300: '#66fff6',
          400: '#33fff3',
          500: '#00fff0',
          600: '#00ccc0',
          700: '#009990',
          800: '#006660',
          900: '#003330',
        },
        azure: {
          50: '#e6f4ff',
          100: '#cce9ff',
          200: '#99d3ff',
          300: '#66bdff',
          400: '#33a7ff',
          500: '#0083ff',
          600: '#0069cc',
          700: '#004f99',
          800: '#003566',
          900: '#001a33',
        },
        night: {
          50: '#eaeaee',
          100: '#d5d5dd',
          200: '#ababbb',
          300: '#818199',
          400: '#575777',
          500: '#2d2d55',
          600: '#242444',
          700: '#1b1b33',
          800: '#121222',
          900: '#090911',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(24,24,46,0.6) 0%, rgba(24,24,46,0.8) 100%)',
        'cyber-gradient': 'linear-gradient(135deg, #00fff0 0%, #0083ff 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'tropical-gradient': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'glow-gradient': 'radial-gradient(circle at center, rgba(0,255,240,0.15) 0%, transparent 70%)',
        'frosted-glass': 'linear-gradient(to bottom right, rgba(24,24,46,0.5), rgba(24,24,46,0.7))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-wave': 'float-wave 8s ease-in-out infinite',
        'pulse-slow': 'pulse 3s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
        'shimmer': 'shimmer 3s infinite linear',
        'fade-in': 'fadeIn 0.7s ease-in-out',
        'fade-in-down': 'fadeInDown 0.3s ease-out forwards',
        'shine': 'shine 2s',
        'reveal-text': 'reveal-text 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'rotate-border': 'rotate-border 3s linear infinite',
        'hue-rotate': 'hue-rotate 10s linear infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 255, 240, 0.5), 0 0 10px rgba(0, 131, 255, 0.2)' },
          '50%': { boxShadow: '0 0 15px rgba(0, 255, 240, 0.8), 0 0 20px rgba(0, 131, 255, 0.4)' },
        },
        'float-wave': {
          '0%': { transform: 'translateY(0) translateX(0) rotate(0)' },
          '25%': { transform: 'translateY(-10px) translateX(5px) rotate(2deg)' },
          '50%': { transform: 'translateY(0) translateX(0) rotate(0)' },
          '75%': { transform: 'translateY(10px) translateX(-5px) rotate(-2deg)' },
          '100%': { transform: 'translateY(0) translateX(0) rotate(0)' },
        },
        'reveal-text': {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        'neon-pulse': {
          '0%, 100%': { 
            opacity: '1',
            textShadow: '0 0 5px rgba(0, 255, 240, 0.7), 0 0 10px rgba(0, 131, 255, 0.5)'
          },
          '50%': { 
            opacity: '0.8',
            textShadow: '0 0 15px rgba(0, 255, 240, 1), 0 0 20px rgba(0, 131, 255, 0.8), 0 0 30px rgba(0, 131, 255, 0.5)'
          },
        },
        'rotate-border': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        'hue-rotate': {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      backdropBlur: {
        'xs': '2px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 20px rgba(0, 255, 240, 0.2)',
        'glow-lg': '0 0 30px rgba(0, 255, 240, 0.3)',
        'glow-xl': '0 0 40px rgba(0, 255, 240, 0.4)',
        'inner-glow': 'inset 0 0 10px rgba(0, 255, 240, 0.1)',
        'inner-glow-lg': 'inset 0 0 20px rgba(0, 255, 240, 0.15)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 15px 30px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 255, 240, 0.3)',
        'button': '0 4px 10px -1px rgba(0, 131, 255, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        'button-hover': '0 10px 20px -3px rgba(0, 131, 255, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        'neon': '0 0 5px rgba(0, 255, 240, 0.5), 0 0 10px rgba(0, 131, 255, 0.3)',
        'neon-hover': '0 0 15px rgba(0, 255, 240, 0.8), 0 0 20px rgba(0, 131, 255, 0.4), 0 0 30px rgba(0, 131, 255, 0.2)',
        'cyber': '0 0 0 1px rgba(0, 255, 240, 0.3), 0 0 20px rgba(0, 131, 255, 0.2)',
        'cyber-hover': '0 0 0 2px rgba(0, 255, 240, 0.5), 0 0 30px rgba(0, 131, 255, 0.3)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        'full': '9999px',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.8, 0, 0.2, 1)',
        'elastic': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '200%': '200% 200%',
        '300%': '300% 300%',
      }
    },
  },
  plugins: [],
}
