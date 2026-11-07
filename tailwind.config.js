/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#CC0000',
          dark:    '#990000',
          light:   '#FF1A1A',
          pale:    '#FFF0F0',
        },
      },
      animation: {
        'float':          'float 4s ease-in-out infinite',
        'float-delay-1':  'float 4s ease-in-out 1.3s infinite',
        'float-delay-2':  'float 4s ease-in-out 2.6s infinite',
        'marquee':        'marquee 28s linear infinite',
        'spin-slow':      'spin 20s linear infinite',
        'spin-reverse':   'spinR 30s linear infinite',
        'fade-in-up':     'fadeInUp 0.6s ease forwards',
        'pulse-ring':     'pulseRing 2s ease-in-out infinite',
        'orbit':          'orbit 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        spinR: {
          from: { transform: 'translate(-50%,-50%) rotate(0deg)' },
          to:   { transform: 'translate(-50%,-50%) rotate(-360deg)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(204,0,0,0.4)' },
          '50%':     { boxShadow: '0 0 0 20px rgba(204,0,0,0)' },
        },
        orbit: {
          from: { transform: 'translate(-50%,-50%) rotate(0deg)' },
          to:   { transform: 'translate(-50%,-50%) rotate(360deg)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #8B0000 0%, #CC0000 40%, #E63333 70%, #990000 100%)',
        'why-gradient':  'linear-gradient(135deg, #8B0000 0%, #CC0000 100%)',
        'cta-gradient':  'linear-gradient(135deg, #990000, #CC0000)',
      },
      boxShadow: {
        'brand':    '0 4px 20px rgba(204,0,0,0.35)',
        'brand-lg': '0 8px 40px rgba(204,0,0,0.45)',
        'card':     '0 4px 24px rgba(0,0,0,0.10)',
        'card-lg':  '0 8px 40px rgba(0,0,0,0.14)',
      },
    },
  },
  plugins: [],
}

