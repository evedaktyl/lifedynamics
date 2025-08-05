/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', 
    // add other folders if your pages/components live elsewhere
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3066BE',
        'primary-light': '#B4C5E4',
        secondary: '#00c6c6',
        accent: '#F7DC6F',
        'neutral-surface': '#F8F8F8',
        'neutral-text': '#2C3E50',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
