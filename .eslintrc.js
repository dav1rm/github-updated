module.exports = {
  root: true,
  extends: '@react-native',
  files: ['**/*.spec.js', '**/*.spec.jsx'],
  env: {
    jest: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
};
