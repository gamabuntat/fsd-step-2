module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "prefer-const": "error",
    "prefer-arrow-callback": 'warn',
    "arrow-parens": "error",
    "max-len": "warn",
    "semi": "warn",
    "no-new-wrappers": "error",
    "indent": ["error", 2],
  }
};
