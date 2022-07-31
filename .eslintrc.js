module.exports = {
  extends: ['standard', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'no-unused-vars': 'warn',
    'import/no-absolute-path': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    indent: ['error', 2],
    'max-len': ['error', { code: 120, ignoreUrls: true }],
    'no-confusing-arrow': ['error', { allowParens: false }],
    'no-mixed-operators': 'error',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-unexpected-multiline': 'error',
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
        },
      },
    ],
  },
}
