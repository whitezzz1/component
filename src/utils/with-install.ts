import type { App, Component } from 'vue'

export type WithInstall<T> = T & {
  install: (app: App) => void
}

// 组件前缀
const componentPrefix = 'S'

export function withInstall<T extends Component>(options: T) {
  (options as Record<string, unknown>).install = (app: App) => {
    const { name } = options
    if (name) {
      app.component(componentPrefix + name, options)
    }
  }

  return options as WithInstall<T>
}
