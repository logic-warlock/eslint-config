# @logic-warlock/eslint-config

This package is all about the basic rules for `.js` and `.jsx` files. The base rules are in place to make it easier to write code with good documentation, and hopefully promote better writing habits in general.

# Installation

With Yarn:

```
yarn add -D @logic-warlock/eslint-config
```

With NPM:

```
npm install --save @logic-warlock/eslint-config
```

All you need to do is add `@logic-warlock` to your `.eslintrc` file within `extends`.

```
{
  extends: [@logic-warlock]
}
```

# Rules

## Base

This base style rules mainly adopt those from [airbnb.](https://www.npmjs.com/package/eslint-config-airbnb-base)

## Documentation

Documentation is huge when it comes to code readability and maintenance. Thus jsdoc is strongly enforce, and highly encouraged to be applied whenever possible. However, it's only enforced for arrow functions, class declarations/methods, and function expressions.

Requiring jsdoc also makes generating docs for non frontend code so much easier! Plus some editors, like VS Code, show popup info when using functions that use jsdoc which makes searching params, or return values that much easier!

## Import

There are several rules that make importing modules more consistent. For instance using named exports is enforced in place of default exports. It makes things easier when you know exactly what you're importing.

## Style

Although eslint shouldn't be used to enforce code style, there are several rules stated in order to work with code formatters, like Prettier. This makes writing code so much easier when you don't have to worry about style!
