import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  vue: true,
  typescript: true,
  // 在Flat配置中不再支持' .eslintignore '，请使用' ignore '代替
  ignores: ['**/test'],
  // 取消 Anthony 喜好的一些固执己见的规则。
  lessOpinionated: true,

  formatters: {
    css: true,
    html: true,
  },
})
