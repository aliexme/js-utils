/* eslint quotes: ['error', 'double'] */
/* eslint quote-props: ['error', 'always'] */
module.exports = {
  "env": {
    "node": true,
  },
  "plugins": [
    "import",
    "@typescript-eslint",
  ],
  "extends": [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ts"],
        "moduleDirectory": ["src/", "node_modules"],
      },
    },
    "import/ignore": [
      "node_modules",
    ],
  },
  "rules": {
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "max-len": ["error", 120],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
    "comma-dangle": ["error", "always-multiline"],
    "object-curly-spacing": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "quote-props": ["error", "as-needed"],
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always",
    }],
    "no-constant-condition": ["error", { "checkLoops": false }],
    "no-trailing-spaces": "error",
    "no-multi-spaces": "error",
    "eol-last": "error",
    "no-console": "error",
    "arrow-parens": "error",
    "no-useless-rename": "error",
    "key-spacing": "error",
    "no-prototype-builtins": "off",
    "import/no-useless-path-segments": ["error", { "noUselessIndex": false }],
    "import/order": ["error", {
      "groups": [["builtin", "external"], "internal", ["parent", "sibling"], "index", "object"],
      "newlines-between": "always-and-inside-groups",
      "warnOnUnassignedImports": true,
    }],
    "import/no-self-import": "error",
    "import/no-mutable-exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/namespace": "off",
  },
  "overrides": [
    {
      "files": ["**/*.ts"],
      "parser": "@typescript-eslint/parser",
      "rules": {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            "selector": "enumMember",
            "format": ["UPPER_CASE", "PascalCase"],
          },
        ],
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "@typescript-eslint/member-delimiter-style": ["error", {
          "multiline": { "delimiter": "none" },
          "singleline": { "delimiter": "comma" },
        }],
        "@typescript-eslint/no-empty-interface": ["error", {
          "allowSingleExtends": true,
        }],
        "@typescript-eslint/type-annotation-spacing": "error",
      },
    },
  ],
}
