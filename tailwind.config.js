/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nird: {
          primary: '#2563eb',
          secondary: '#9333ea',
          accent: '#3b82f6',
        },
      },
    },
  },
  plugins: [],
}