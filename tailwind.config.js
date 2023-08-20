const { default: PagesManifestPlugin } = require('next/dist/build/webpack/plugins/pages-manifest-plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/*.js','./components/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-graphik)'],
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    },
  },
  plugins: [],
}

