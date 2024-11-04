import { version } from '../package.json'
import plugins from './plugins'
import 'virtual:uno.css'

export * from './avatar'
// 导出组件
export * from './button'
export * from './link'

// 导出插件
export default {
  install(app) {
    plugins.forEach(c => app.use(c))
  },
  version,
}
