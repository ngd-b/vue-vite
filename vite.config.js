// 类型提示
import { defineConfig } from 'vite'
import vueJSX from '@vitejs/plugin-vue-jsx'
import vueSFC from '@vitejs/plugin-vue'
const { resolve } = require('path')
// config
export default defineConfig(({ command, mode }) => {
  /**
   * command - 命令模式
   * mode - 生产、开发模式
   */

  return {
    // 项目根目录，index.html 所在的目录
    root: resolve(__dirname,'src'),
    // 生产或开发环境下的基础路径
    base: '/',
    // 需要用到的插件数组
    plugins: [
      
      // .vue 单文件组件
      vueSFC(),

      // .jsx 文件类型支持
      vueJSX({
        // ... @vue/babel-plugin-jsx 的配置
      }),
    ],
    // 静态资源服务目录地址
    publicDir: resolve(__dirname,'public'),
    // 存储缓存文件的目录地址
    cacheDir: '',
    //
    resolve: {
      // 设置文件目录别名
      alias: {
        '@': './',
        vue: 'vue/dist/vue.esm-bundler.js',
      },
      //
      extensions: ['.js', '.jsx', '.vue'],
    },
    //
    css: {
      // postcss-modules 行为配置
      modules: {
        // ...
      },
      // 传递给css预处理器的配置项
      preprocessorOptions: {
        // 指定less预处理的配置项
        less: {
          // ...
        },
      },
    },
    // esbuild 选项转换配置
    esbuild: {
      // ...
      // 在react组件中无需导入react
      // jsxInject: `import React from 'react'`,
      // vue 使用jsx
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
    },
    // 静态资源处理
    assetsInclude: '',
    // 开发服务器选项
    server: {
      // ...
      host: '127.0.0.1',
      port: '8081',
      // 项目启动后自动打开浏览器
      open: true,
    },
    // 构建配置项
    build: {
      // ...
      // 指定输出目录
      outDir: resolve(__dirname,'dist'),
      // 指定静态资源存放目录
      assetsDir: '',
      // 启用、禁用css代码拆分
      cssCodeSplit: true,
      // 构建是否生成source map文件
      sourcemap: 'inline',
      // rollup 配置打包项
      rollupOptions: {
        // ...
        // input:"src/index.js"
        input: {
          main: resolve(__dirname, 'src/index.html'),
          login: resolve(__dirname, 'src/login/index.html')
        }
      },
      // 构建目录自动清除
      emptyOutDir: false,
    },
    // 依赖优化配置项
    optimizeDeps: {
      // 依赖构建入口
      entries: '',
      // 排除不需要构建的依赖项
      exclude: [],
    },
  }
})
