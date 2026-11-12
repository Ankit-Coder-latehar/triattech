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
          DEFAULT: '#0F1C3F',   /* deep navy */
          dark:    '#070E23',   /* darkest navy */
          light:   '#1E3A8A',   /* medium navy */
          pale:    '#EFF6FF',   /* light blue tint */
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
          '0%,100%': { boxShadow: '0 0 0 0 rgba(15,28,63,0.4)' },
          '50%':     { boxShadow: '0 0 0 20px rgba(15,28,63,0)' },
        },
        orbit: {
          from: { transform: 'translate(-50%,-50%) rotate(0deg)' },
          to:   { transform: 'translate(-50%,-50%) rotate(360deg)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #070E23 0%, #0F1C3F 45%, #1a2f6b 70%, #0F1C3F 100%)',
        'why-gradient':  'linear-gradient(135deg, #070E23 0%, #0F1C3F 100%)',
        'cta-gradient':  'linear-gradient(135deg, #070E23, #0F1C3F)',
      },
      boxShadow: {
        'brand':    '0 4px 20px rgba(15,28,63,0.30)',
        'brand-lg': '0 8px 40px rgba(15,28,63,0.45)',
        'card':     '0 4px 24px rgba(0,0,0,0.08)',
        'card-lg':  '0 8px 40px rgba(0,0,0,0.14)',
      },
    },
  },
  plugins: [],
}
