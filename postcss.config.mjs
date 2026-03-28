/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Antes decía solo 'tailwindcss'
  },
};

export default config;