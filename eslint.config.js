const js = require("@eslint/js")

module.exports = [
  js.configs.recommended,
  {
    env: {
      commonjs: true
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    },
    languageOptions: {
      sourceType: "commonjs"
    }
  }
];
