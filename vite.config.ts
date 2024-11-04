/// <reference types="vitest/config" />
import type { BuildOptions } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'

// import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from 'unocss/vite'

const rollupOptions: BuildOptions['rollupOptions'] = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue',
    },
    exports: 'named',
  },
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
  ],
  build: {
    rollupOptions,
    minify: 'terser',
    sourcemap: false,
    reportCompressedSize: true,
    cssCodeSplit: true,
    // 添加库模式配置
    lib: {
      entry: resolve(__dirname, 'src/entry.ts'),
      name: 'SSYUI',
      fileName: 'alwayxx-ui',
      // 导出模块格式
      formats: ['es', 'umd'],
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      // include: ['src/**/*.ts', 'src/**/*.tsx'], // 指定你要测试的文件路径
      // exclude: ['src/*.ts', 'src/utils/**'],// 指定你要忽略的文件路径
    },
    
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
})
