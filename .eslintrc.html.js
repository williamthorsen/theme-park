// This config is used by the `lint:html` package script to check HTML formatting.
// JavaScript in HTML files is checked by `lint:js`.

// Rule settings: 0 = off, 1 = warn, 2 = error
// See https://yeonjuan.github.io/html-eslint/docs/all-rules

module.exports = {
  root: true,
  // Recognize global vars for these environments
  env: {
    browser: true,
  },
  extends: ['plugin:@html-eslint/recommended'],
  parser: '@html-eslint/parser',
  plugins: [
    '@html-eslint',
  ],
  rules: {
    '@html-eslint/indent': ['warn', 2],
    '@html-eslint/require-doctype': 0,
  },
};
