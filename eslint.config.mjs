import pluginVue from "eslint-plugin-vue";
import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";

// 包含 .gitignore 文件
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default [
  // add more generic rulesets here, such as:
  {
    files: ["**/*.{js,mjs,cjs,vue,jsx}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  eslintConfigPrettier,
  includeIgnoreFile(gitignorePath),

  {
    rules: {
      "no-undef": 1,
      "no-empty": 1,
      "no-unused-vars": "warn",
      "vue/multi-word-component-names": 1,
    },
  },
  {
    ignores: [],
  },
];
