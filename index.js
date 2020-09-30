module.exports = {
  // JSDOC recommended rules: https://www.npmjs.com/package/eslint-plugin-jsdoc#configuration
  plugins: ['jsdoc'],
  extends: [
    'plugin:jsdoc/recommended',
    ...[
      'eslint-config-airbnb-base',
      './rules/style',
      './rules/import',
      './rules/documentation',
      'eslint-config-prettier',
    ].map((path) => require.resolve(path)),
  ],
  rules: {},
  overrides: [
    {
      // Types in jsdoc should not be used for ts/tsx files
      files: ['*.ts', '*.tsx'],
      rules: {
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-returns-type': 'off',
      },
    },
  ],
}
