/* eslint-env node */
module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "es2021",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: [
      "./tsconfig.json",
      "./tsconfig.eslint.json",
      "./browser/tsconfig.json",
      "./node/tsconfig.json",
    ],
  },
  plugins: ["@typescript-eslint"],
  rules: {},
};
