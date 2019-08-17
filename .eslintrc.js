module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    rules: {
        "no-console": "off",
        "eol-last": ["error", "always"]
    },
    env: {
        browser: false,
        node: true,
    },
};
