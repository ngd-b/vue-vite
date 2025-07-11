import { createApp } from "vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
// pinia
import { createPinia } from "pinia";
// component
import Components from "@/components/index.js";
// vue-i18n
import { createI18n } from "vue-i18n";
// locale
import enLocale from "@/locals/en.json";
import cnLocale from "@/locals/cn.json";
// ajax
import { ajax } from "@/ajax";

// main app
import App from "@/App.jsx";
// router
import router from "@/routers/index.js";
// store
import store from "@/store/index";
// css
import "@/assets/css/base.less";
import "virtual:uno.css";

// 创建app应用
const app = createApp(App);
// pinia 实例
const pinia = createPinia();

// 更改全局配置
// 1. 错误异常处理
app.config.errorHandler = (err, vm, info) => {
  console.error(err, vm, info);
};
app.config.warnHandler = (err, vm, info) => {
  console.warn(err, vm, info);
};
// 2. 全局属性设置
app.config.globalProperties.$http = ajax;
// 3. 编译配置项
app.config.compilerOptions.whitespace = "preserve";

// 4. 国际化配置
const i18n = createI18n({
  locale: localStorage.getItem("lang") || "zh",
  messages: {
    en: {
      ...en,
      ...enLocale,
    },
    zh: {
      ...zhCn,
      ...cnLocale,
    },
  },
});

// 插件安装
// app.use()
// 路由配置
app.use(router);
// 全局状态管理
app.use(store);
// pinia use
app.use(pinia);
// 自定义全局组件
app.use(Components);
// 国际化
app.use(i18n);

app.mount("#app");
