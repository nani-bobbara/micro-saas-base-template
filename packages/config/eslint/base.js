// TODO: Define base ESLint configuration
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    // TODO: Add TypeScript ESLint rules
    // "plugin:@typescript-eslint/recommended",
    // TODO: Add import order rules
    // "plugin:import/recommended",
  ],
  rules: {
    // TODO: Add custom rules
    "no-console": "warn",
    "no-unused-vars": "off", // Use TypeScript's no-unused-vars instead
    // TODO: Add more rules
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    ".next/",
    "*.config.js",
    "*.config.mjs",
  ],
};
