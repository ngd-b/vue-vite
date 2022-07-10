import {createApp} from 'vue'
// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// main app
import App from './App.jsx'
// router
import router from './route/index.js'
// store
import store from './store/index'
// css
import './static/base.less'

// 创建app应用
const app = createApp(App)

// 更改全局配置
// 1. 错误异常处理
app.config.errorHandler = (err,vm,info)=>{
    console.error(err,vm,info)
}
app.config.warnHandler = (err,vm,info)=>{
    console.warn(err,vm,info)
}
// 2. 全局属性设置
app.config.globalProperties.$http = null
// 3. 编译配置项
app.config.compilerOptions.whitespace = "preserve"

// 插件安装
// app.use()
// 路由配置
app.use(router)
// 全局状态管理
app.use(store)
// element
app.use(ElementPlus,{size:'small',zIndex:3000, local:zhCn})

app.mount("#app")