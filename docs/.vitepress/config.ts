import type { DefaultTheme } from 'vitepress/theme'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'

const sidebar: DefaultTheme.Sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      collapsed: true,
      items: [{ text: 'Button 按钮', link: '/components/button/' }],
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' },
    { text: '数据展示' },
    { text: '布局' },
  ],
}
const config = {
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    },
  },
  vite: {
    plugins: [demoblockVitePlugin()],
  },
}
export default config

// 配置菜单项；
// 指定子菜单所对应的 markdwon 文件路径(默认页面 index.md)。
