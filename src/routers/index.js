import * as VueRouter from "vue-router";
import {
  House,
  ChromeFilled,
  ElementPlus as ElementPlusIcon,
  Document,
  Eleme,
  UserFilled,
  PieChart,
  EditPen,
} from "@element-plus/icons-vue";
import { uesSystemStore } from "@/store/system.js";
import { defineAsyncComponent } from "vue";
import { ElEmpty, ElLoading } from "element-plus";

// routers
// 各模块自路由注册
import CNodeRouters from "@/views/CNode/routers";

// page
const Main = () => import("@/views/index.jsx");
// home
// const Home = { template: '<div>Home</div>' }
const Home = () => import("@/views/Home");
// 异步加载
// const CNode = ()=>import("@/views/CNode/index.vue")
const CNode = defineAsyncComponent({
  // 工厂函数
  loader: () => import("../views/CNode/index.vue"),
  // 加载时使用的组件
  loadingComponent: ElLoading,
  // 出错时使用的组件
  errorComponent: ElEmpty,
  // 在显示加载组件时的延迟
  delay: 300,
  // 组件加载超时后显示错误组件
  timeout: 60000,
  // 是否可挂起
  suspensible: false,
  /**
   *
   * @param {*} error 错误信息对象
   * @param {*} retry 一个函数，用于指示当 promise 加载器 reject 时，加载器是否应该重试
   * @param {*} fail  一个函数，指示加载程序结束退出
   * @param {*} attempts 允许的最大重试次数
   */
  onError(error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts <= 3) {
      // 请求发生错误时重试，最多可尝试 3 次
      retry();
    } else {
      // 注意，retry/fail 就像 promise 的 resolve/reject 一样：
      // 必须调用其中一个才能继续错误处理。
      fail();
    }
  },
});
// elementplus 组件使用，封装
const ElementPlus = () => import("@/views/ElementPlus");
// vue3 api
const VueComponent = () => import("@/views/Vue3");

// menu routes
const menuRoutes = [
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      title: "home",
      icon: House,
      isMenu: true,
    },
  },
  {
    path: "/cnode",
    name: "cnode",
    component: CNode,
    redirect: "/",
    meta: {
      title: "cnode",
      icon: ChromeFilled,
      isMenu: true,
    },
    children: CNodeRouters.map((item) => ({
      ...item,
      meta: {
        ...item.meta,
        isMenu: false,
      },
    })),
  },
  {
    path: "/vue3",
    name: "vue3",
    component: VueComponent,
    meta: {
      title: "vue3",
      icon: Eleme,
      isMenu: true,
    },
  },
  {
    path: "/elemenuPlus",
    name: "elemenuPlus",
    component: ElementPlus,
    meta: {
      title: "elementPlus",
      icon: ElementPlusIcon,
      isMenu: true,
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/User"),
    meta: {
      title: "user",
      icon: UserFilled,
      isMenu: true,
    },
  },
  // {
  //   path: "/file-preview",
  //   name: "filePreview",
  //   component: () => import("@/views/FilePreview/index.jsx"),
  //   meta: {
  //     title: "file-preview",
  //     icon: Document,
  //     isMenu: true,
  //   },
  // },
  {
    path: "/echarts",
    name: "echarts",
    meta: {
      title: "echarts.echarts",
      icon: PieChart,
      isMenu: true,
    },
    redirect: "/echarts/bar",
    children: [
      {
        path: "/echarts/bar",
        name: "bar",
        component: () => import("@/views/Echarts/bar"),
        meta: {
          title: "echarts.bar",
          isMenu: true,
        },
      },
      {
        path: "/echarts/line",
        name: "line",
        component: () => import("@/views/Echarts/line"),
        meta: {
          title: "echarts.line",
          isMenu: true,
        },
      },
      {
        path: "/echarts/pie",
        name: "pie",
        component: () => import("@/views/Echarts/pie"),
        meta: {
          title: "echarts.pie",
          isMenu: true,
        },
      },
      {
        path: "/echarts/map",
        name: "map",
        component: () => import("@/views/Echarts/map"),
        meta: {
          title: "echarts.map",
          isMenu: true,
        },
      },
    ],
  },
  {
    path: "/video-preview",
    name: "videoPreview",
    component: () => import("@/views/Video"),
    meta: {
      title: "video-preview",
      icon: Document,
      isMenu: true,
    },
  },
  {
    path: "/file-editor",
    name: "fileEditor",
    component: () => import("@/views/FileEditor"),
    meta: {
      title: "file-editor",
      icon: EditPen,
      isMenu: true,
    },
  },
];
// routes
const routes = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/main",
    name: "main",
    component: Main,
    children: [...menuRoutes],
  },
];

/**
 * 创建router实例
 *
 */
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  // history: VueRouter.createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  },
});
// 路由守卫
router.beforeEach((to, from, next) => {
  const systemStore = uesSystemStore();

  if (!systemStore.isLogin) {
    // 未登陆时，跳转登录页面
    window.location.href = window.location.origin + "/login/";
    next(false);
  }
  systemStore.changeMenu(to.path);
  next();
});
export default router;
// 过滤
export const routerMenus = menuRoutes.filter((item) => item.name);
