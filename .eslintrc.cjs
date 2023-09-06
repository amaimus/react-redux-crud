module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                ".eslintrc.{js,cjs}"
            ],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: './tsconfig.json',
    },
    plugins: [
        "react"
    ],
    rules: {
        "@typescript-eslint/explicit-function-return-type": 'off',
        "react/react-in-jsx-scope": 'off',
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/triple-slash-reference": "off",
        indent: ["error", 2],
        "jsx-quotes": ["error", "prefer-single"],
        "@typescript-eslint/array-type": "off"
    }
}
