module.exports = {
  rules: {
    // Documentation is important. Make sure we add it.
    // Rules can be found here: https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-types
    'jsdoc/require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: false,
        },
      },
    ],
    // All jsdoc comments should have a description
    'jsdoc/require-description': 'error',

    // All params should have a description
    'jsdoc/require-param-description': 'error',

    // All return tags should have a description
    'jsdoc/require-returns-description': 'error',

    // Param types should be used for JS/JSX files
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-returns-type': 'error',
  },
}
