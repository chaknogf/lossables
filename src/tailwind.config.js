/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'salud-aqua': '#a7ffeb',
        'salud-celeste': '#e0f7fa',
        'salud-mint': '#dcedc8',
        'glass-white': 'rgba(255, 255, 255, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
    },
  },
  plugins: [],
}
