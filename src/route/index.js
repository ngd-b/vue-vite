import * as VueRouter from 'vue-router'

// page
// import CNode from '@/views/CNode/index.vue'
// home
const Home = { template: '<div>Home</div>' }
const CNode = ()=>import("@/views/CNode/index.vue")
const VueComponent = ()=>import('@/views/Vue3')

// routes
export const routes = [
    {
        path:'/',
        component:Home,
        meta:{
            title:'主页'
        }
    },
    {
        path:'/home',
        name:'home',
        component:Home,
        meta:{
            title:'主页'
        }
    },
    {
        path:'/cnode',
        name:'cnode',
        component:CNode,
        meta:{
            title:'CNode 社区'
        }
    },
    {
        path:'/vue3',
        name:'vue3',
        component:VueComponent,
        meta:{
            title:'Vue3 API'
        }
    },
    {
        path:'/user',
        name:'user',
        component:()=>import('@/views/User'),
        meta:{
            title:'用户模块'
        }
    }
]

/**
 * 创建router实例
 * 
 */
export default VueRouter.createRouter({
    history:VueRouter.createWebHistory(),
    routes
})