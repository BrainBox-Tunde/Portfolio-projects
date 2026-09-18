/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        acarmor: {
          blue: '#1e3a8a',
          sky: '#38bdf8',
          yellow: '#fcd34d',
          orange: '#f97316',
          dark: '#0f172a',
          light: '#f8fafc',
          gray: '#64748b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
