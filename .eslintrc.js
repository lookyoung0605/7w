module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // 추가
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true }, // 추가
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"], // 추가
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  rules: { "react/prop-types": "off" },
};
