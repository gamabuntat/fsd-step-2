module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
    'prefer-arrow-callback': 'warn',
    'arrow-parens': 'error',
    'max-len': 'error',
    'semi': 'warn',
    'no-new-wrappers': 'error',
    'indent': ['error', 2],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'never'],
  }
};
