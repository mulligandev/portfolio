module.exports = {
  purge: {
    content: ['./**/*.tsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},

    maxHeight: {
      500: '500px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
