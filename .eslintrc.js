module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    rules: {
        "no-unused-vars": "off",
        "no-console": "off",
        'no-undef': 'off',
        "eol-last": ["error", "always"],
        "newline-after-var": "off",
        "function-paren-newline": "off",
    },
    parserOptions: {
        ecmaVersion:  2018,
        sourceType:  'module',
    },
    env: {
        browser: false,
        node: true,
    },
};
