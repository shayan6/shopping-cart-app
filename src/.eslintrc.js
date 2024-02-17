module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off', // Disable prop-types validation if not needed
    'no-unused-vars': ['warn', { 'varsIgnorePattern': '^React$' }], // Ignore 'React' import
  },
};
