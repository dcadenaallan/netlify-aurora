module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: ['@typescript-eslint/eslint-plugin', 'cypress'],
  // add your custom rules here
  rules: {},
  overrides: [
    {
      files: ['components/*.{js,ts,vue}'],
      parser: 'vue-eslint-parser',
      rules: {
        'vue/multi-word-component-names': 'error',
      },
    },
    {
      files: ['cypress/**/*.cy.ts'],
      extends: ['plugin:cypress/recommended'],
    },
    {
      files: ['src/**/*.ts', 'functions/**/*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'require-await': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-async-promise-executor': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
