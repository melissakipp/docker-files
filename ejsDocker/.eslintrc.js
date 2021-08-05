"use strict";

module.exports = {
  env: {
    es2021: true,
  },
  rules: {
    "strict": ["error", "global"],
    "no-var": "error",
    "quotes": ["error", "double"],
    "prefer-const": "error",
    "one-var": ["error", "never"],
    "camelcase": "error",
    // "no-unused-var": "error", //this was throwing an error when it was necessary
    "no-unused-vars": [
      "error",
      { "vars": "all", "args": "after-used", "ignoreRestSiblings": false },
    ],
    "no-multi-assign": "error",
    "quotes": ["error", "double"],
    "no-array-constructor": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-extra-boolean-cast": "error",
    "eqeqeq": "error",
    "yoda": "error",
    "no-nested-ternary": "error",
  },
};
