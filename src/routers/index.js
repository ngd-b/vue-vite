import * as VueRouter from 'vue-router'
import {
    Document,
    Menu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
import { uesSystemStore } from '@/store/system.js'

// routers
// 各模块自路由注册
import CNodeRouters from '@/views/CNode/routers'

// page
// import CNode from '@/views/CNode/index.vue'
// home
const Home = { template: '<div>Home</div>' }
const CNode = ()=>import("@/views/CNode/index.vue")
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
    history:VueRouter.createWebHistory(),
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