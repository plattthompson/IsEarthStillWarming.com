module.exports = {
  extends: ['react-tools', 'airbnb', 'prettier'],
  plugins: ['cypress'],
  env: {
    'cypress/globals': true
  },
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to']
      }
    ],
    'react/jsx-curly-brace-presence': 0,
    'no-restricted-globals': 0,
    indent: ['error', 2],
    'import/no-extraneous-dependencies': 0,
    'react/prop-types': 2,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0,
    'class-methods-use-this': 0,
    'global-require': 0,
    'react/jsx-props-no-spreading': 0,
    'arrow-parens': 0,
    'react/jsx-one-expression-per-line': 0,
    'comma-dangle': 0
  }
};
