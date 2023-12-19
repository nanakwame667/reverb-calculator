import prelinePlugin from 'preline/plugin';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito','sans-serif'],
      }
    },
  },
  plugins: [
    prelinePlugin
  ],
};

export default config;
