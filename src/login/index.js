import { createApp } from 'vue'
// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// pinia
import { createPinia } from 'pinia'
// ajax
import { ajax } from '@/ajax'

// main app
import LoginApp from './views/index.vue'
// css
import '@/assets/css/base.less'

// 创建app应用
const app = createApp(LoginApp)
// pinia 实例
const pinia = createPinia()

// 更改全局配置
// 1. 错误异常处理
app.config.errorHandler = (err, vm, info) => {
  console.error(err, vm, info)
}
app.config.warnHandler = (err, vm, info) => {
  console.warn(err, vm, info)
}
// 2. 全局属性设置
app.config.globalProperties.$http = ajax
// 3. 编译配置项
app.config.compilerOptions.whitespace = 'preserve'

// 插件安装
// app.use()
// 路由配置
app.use(ElementPlus, { zIndex: 3000, })
// pinia use
app.use(pinia)
app.mount('#app')
