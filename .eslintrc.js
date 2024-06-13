module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/standard'
  ],
  overrids:[{
    files:['pages/*vue'],
    rules:{
      'vue/multi-word-component-names':'off'
    }

  }]
  // ,
  // rules:{
  //   'vue/multi-word-component-names':'off'
  // }
}
