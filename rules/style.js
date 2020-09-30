module.exports = {
  rules: {
    // Be consistent with brace style.
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    // Require curly braces on all block statements for clarity.
    curly: 'error',
    // Ensures the dot in an multiline member expression is attached to the property.
    'dot-location': ['error', 'property'],
    // Underscores can be used to represent private and double underscore can represent global.
    // There's no reason to restrict ourselves here.
    'no-underscore-dangle': 0,
    'no-unused-vars': [
      'error',
      {
        // Don't allow trailing unused arguments.
        args: 'after-used',
        // Allow unused variables if they contain the word "ignored"
        vars: 'all',
        varsIgnorePattern: '[iI]gnored',
        // It's ok to have unused variables when destructuring and using "rest" as that's a valid
        // way to extract properties from an object.
        ignoreRestSiblings: true,
      },
    ],
    // Ternary operators should be split onto 3 lines for better readability.
    'multiline-ternary': ['error', 'always'],
    // Chained method calls should be placed on their own line for readability and better git diff.
    'newline-per-chained-call': ['error'],
    // Ternary's are hard enough when there's just one.
    'no-nested-ternary': 'error',
    // Avoid ternary statements when possible for clarity.
    'no-unneeded-ternary': 'error',
    // Operators between lines should be at the front for readability.
    'operator-linebreak': ['error', 'before'],
    'padding-line-between-statements': [
      'error',
      // Make sure there's an empty line before any return statement.
      { blankLine: 'always', prev: '*', next: 'return' },
      // Make sure there's an empty line after variable declarations.
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      // Make sure there's an empty line before a block/class/function.
      { blankLine: 'always', prev: '*', next: ['block', 'block-like', 'class', 'function'] },
      // Make sure there's an empty line after an import
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      // Make sure there's an empty line before an export or block of exports.
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'any', prev: 'export', next: 'export' },
    ],
    // Make sure there's an empty line between class methods.
    'lines-between-class-members': ['error', 'always'],
    // No semicolons. They are optional and removing them makes code cleaner.
    semi: ['error', 'never'],
    // Arrow functions can omit parentheses when they have exactly one parameter
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    // If an if block contains a return statement
    // the else block becomes unnecessary else if are okay
    'no-else-return': [2, { allowElseIf: true }],
    // Enforces that each file may contain only 2 classes
    'max-classes-per-file': [2, 2],
  },
}
