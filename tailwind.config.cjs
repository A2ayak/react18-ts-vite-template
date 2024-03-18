/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use custom base style (src/theme/base.css)
    preflight: false, // https://tailwindcss.com/docs/preflight#disabling-preflight
  },
};
