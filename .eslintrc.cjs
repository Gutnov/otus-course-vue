// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3
        },
        multiline: {
          max: 1
        }
      }
    ]
  }
};
