module.exports = {
  root: true,
  // Recognize global vars for these environments
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'indent': ['warn', 2, { SwitchCase: 1 }],
        'no-dupe-class-members': 'error',
      },
    },
    {
      files: ['**/*.test.[jt]s'],
      rules: {
        'arrow-body-style': 'off',
        'no-console': 'off',
      },
    },
  ],
  plugins: [
    'html',
  ],
  rules: {

    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-parens': 'off',
    'brace-style': ['warn', '1tbs'],
    'camelcase': ['warn', { properties: 'never' }],
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
      imports: 'always-multiline',
      objects: 'always-multiline',
    }],
    'curly': 'error',
    'eqeqeq': ['error', 'always'],
    'indent': 'off',
    'keyword-spacing': 'warn',
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
    'max-classes-per-file': 'warn',
    'max-len': ['warn', {
      code: 120,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    }],
    'no-console': 'off',
    'no-multiple-empty-lines': ['warn', { max: 2, maxBOF: 0, maxEOF: 0 }],
    'no-dupe-class-members': 'off',
    'no-trailing-spaces': 'warn',
    'no-underscore-dangle': ['warn', { allowAfterThis: true }],
    'object-curly-newline': ['warn', { consistent: true }],
    'object-curly-spacing': ['warn', 'always'],
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
    'object-shorthand': ['warn', 'always'],
    'padded-blocks': 'off',
    'quote-props': ['warn', 'as-needed', { unnecessary: false }],
    'quotes': ['warn', 'single', { avoidEscape: true }],
    'semi': ['error', 'always'],
  },
  settings: {
    html: {
      // Add any `eslint-plugin-html` settings here. See https://github.com/BenoitZugmeyer/eslint-plugin-html
    },
  },
};
