import * as VueRouter from 'vue-router'
import {
    Document,
    Menu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
import { uesSystemStore } from '@/store/system.js'
import { defineAsyncComponent } from 'vue'
import { ElEmpty,ElLoading } from 'element-plus'

// routers
// 各模块自路由注册
import CNodeRouters from '@/views/CNode/routers'

// page
// import CNode from '@/views/CNode/index.vue'
// home
const Home = { template: '<div>Home</div>' }
// 异步加载
// const CNode = ()=>import("@/views/CNode/index.vue")
const CNode = defineAsyncComponent({
    // 工厂函数
    loader:()=>import('@/views/CNode/index.vue'),
    // 加载时使用的组件
    loadingComponent:ElLoading,
    // 出错时使用的组件
    errorComponent:ElEmpty,
    // 在显示加载组件时的延迟
    delay:300,
    // 组件加载超时后显示错误组件
    timeout:60000,
    // 是否可挂起
    suspensible:false,
    /**
     *
     * @param {*} error 错误信息对象
     * @param {*} retry 一个函数，用于指示当 promise 加载器 reject 时，加载器是否应该重试
     * @param {*} fail  一个函数，指示加载程序结束退出
     * @param {*} attempts 允许的最大重试次数
     */
    onError(error, retry, fail, attempts){
        if (error.message.match(/fetch/) && attempts <= 3) {
            // 请求发生错误时重试，最多可尝试 3 次
            retry()
          } else {
            // 注意，retry/fail 就像 promise 的 resolve/reject 一样：
            // 必须调用其中一个才能继续错误处理。
            fail()
          }
    }
})
const VueComponent = ()=>import('@/views/Vue3')


// routes
const routes = [
    {
        path:'/',
        redirect:'home'
    },
    {
        path:'/home',
        name:'home',
        component:Home,
        meta:{
            title:'主页',
            icon:Document
        }
    },
    {
        path:'/cnode',
        name:'cnode',
        component:CNode,
        redirect:'/',
        meta:{
            title:'CNode 社区',
            icon:Menu
        },
        children:[...CNodeRouters]
    },
    {
        path:'/vue3',
        name:'vue3',
        component:VueComponent,
        meta:{
            title:'Vue3 API',
            icon:Location
        }
    },
    {
        path:'/user',
        name:'user',
        component:()=>import('@/views/User'),
        meta:{
            title:'用户模块',
            icon:Setting
        }
    }
]

/**
 * 创建router实例
 * 
 */
const router = VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes
})
// 路由守卫
router.beforeEach((to,from,next)=>{
    const systemStore = uesSystemStore()

    systemStore.changeMenu(to.path)
    next()
})
export default router
// 过滤
export const routerMenus = routes.filter(item=>item.name)