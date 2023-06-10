module.exports = {
    root: true,
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error"
    },
    extends: ["@nuxt/eslint-config-typescript", "plugin:prettier/recommended", "prettier"],
    parserOptions: {
        "sourceType": "module"
      },
}
