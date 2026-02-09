/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'pure-blue': '#2563EB',
          'pure-light-blue': '#EFF6FF',
          'pure-mint': '#A7F3D0',
          'pure-dark': '#111827',
          'pure-gray': '#6B7280',
        },
        fontFamily: {
          manrope: ['Manrope', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
        },
        borderRadius: {
          'button': '14px',
          'card': '16px',
        },
      },
    },
    plugins: [],
  }