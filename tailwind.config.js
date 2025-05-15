/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bioskin: {
          gold: '#deb887',
          goldLight: 'rgba(222, 184, 135, 0.2)',
        }
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};