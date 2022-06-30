/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  groupVariants: {
    'collapsable-expanded': ['collapsable', 'expanded', '.expanded'],
  },
  plugins: [require('tailwindcss-group-variants')],
};
