// TODO: Define Next.js ESLint configuration
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "./base.js",
    "next/core-web-vitals",
    // TODO: Add Next.js specific rules
  ],
  rules: {
    // TODO: Add Next.js specific rules
    "@next/next/no-html-link-for-pages": "off",
  },
};
