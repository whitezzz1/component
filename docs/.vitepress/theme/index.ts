import Theme from 'vitepress/theme'
import SSYUI from '../../../src/entry'
// 主题样式
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(SSYUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}
