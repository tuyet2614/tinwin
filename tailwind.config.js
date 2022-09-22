/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#FD7D00',
        'red-danger': '#FF3B30',
      },
    },
  },
  plugins: [],
};
