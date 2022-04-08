import {createApp} from 'vue'

// main app
import App from './App.jsx'

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

app.mount("#app")