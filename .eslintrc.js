module.exports = {
  'env': {
    'node': true,
    'jest': true,
    'commonjs': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:playwright/playwright-test'
  ],
  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module',
  },
  'rules': {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
  },
}
