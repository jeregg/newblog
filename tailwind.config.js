const { default: PagesManifestPlugin } = require('next/dist/build/webpack/plugins/pages-manifest-plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/*.js','./components/*.js'],
  theme: {
    extend: {},
  },
  plugins: [],
}

