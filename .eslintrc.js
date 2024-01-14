module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    },
    "overrides": [
        {
          "files": [
            ".eslintrc.js",
            "index.js",
            "babel.config.js",
            "createGameOfLife.test.js"
        ],
        "env": {
          "node": true, // Apply Node environment specifically for ESLint config
        },
      },
    ],
};
