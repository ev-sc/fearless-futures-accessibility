module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
      'prettier',
  ],
  plugins: [
      'prettier',
      'html',
  ],
  rules: {
    "prettier/prettier": ["error"]
  },
};
