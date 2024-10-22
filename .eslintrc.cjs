module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:react/jsx-runtime'
  ],
  parserOptions: {
    project: './tsconfig.json'
  }
};
