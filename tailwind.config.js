/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./src/*.{js,jsx,ts,tsx}', './src/react00.html'],
  content: ['./index.html', './src/**/*.{html,jsx,hbs}', './public/styles.css'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          md: '600px',
          lg: '600px',
          xl: '600px',
          '2xl': '600px',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['night', 'emerald'],
  },
};
