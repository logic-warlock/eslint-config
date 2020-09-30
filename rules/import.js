module.exports = {
  rules: {
    // Ignore expansions on packages as some package imports were causing issues.
    'import/extensions': [0, 'ignorePackages'],
    // We want to be able to use dev dependencies in non-app code, like tests,
    // configs, and other build/dev tools.
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
      },
    ],
    // Use this rule to accepts unnecessary path segments in import and require statements
    // './' '../' are okay
    'import/no-useless-path-segments': 0,
    // Only use named exports
    'import/prefer-default-export': 0,
    'import/no-default-export': 2,
    // Ensures that there is no resolvable path back to this module via its dependencies
    'import/no-cycle': 0,
  },
}
