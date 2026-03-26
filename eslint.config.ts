import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser"

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
<<<<<<< HEAD
      "@typescript-eslint/no-unused-vars": ["warn",
        { "argsIgnorePattern": "^_" }
      ],
=======
      "@typescript-eslint/no-unused-vars": ["warn", {
        "argsIgnorePattern": "^_"
      }],
>>>>>>> dev
    },
  },
];