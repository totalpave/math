
let commonConfig = require('@totalpave/eslint-plugin').default;

module.exports = [
    ...commonConfig,
    {
        languageOptions: {
            parserOptions: {
                "project": "./tsconfig-tests.json",
                "tsconfigRootDir": __dirname
            }
        }
    }
]
