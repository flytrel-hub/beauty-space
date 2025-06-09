/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F0C0D0',
        'primary-dark': '#D490A0',
        secondary: '#D0E8F5',
        accent: '#E0D0F5',
        neutral: '#F5F5F5',
        'text-main': '#4A4A4A',
        background: '#FFFFFF',
        'text-primary': '#333333',
        'text-secondary': '#666666',
        border: '#E5E7EB',
        price: '#b0d3e0',
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
} 