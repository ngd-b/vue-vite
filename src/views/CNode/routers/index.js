/**
 * 定义路由
 */
// 主页面数据列表
import List from '../components/list/index.vue'
import Detail from '../components/detail/index.vue'

// 新手入门
const Learning = () => import('../components/learning')
// API 说明文档
const API = () => import('../components/api')
// 关于说明
const About = () => import('../components/about')
// 用户详情
const User = () => import('../components/user')

export const navTabs = [
  {
    path: '',
    name: 'cnode-main',
    component: List,
    meta: {
      title: '首页',
    },
  },
  {
    path: 'leanring',
    name: 'leanring',
    component: Learning,
    meta: {
      title: '新手入门',
    },
  },
  {
    path: 'api',
    name: 'api',
    component: API,
    meta: {
      title: 'API',
    },
  },
  {
    path: 'about',
    name: 'about',
    component: About,
    meta: {
      title: '关于',
    },
  },
  {
    path: 'register',
    name: 'register',
    component: null,
    meta: {
      title: '注册',
    },
  },
  {
    path: 'login',
    name: 'login',
    component: null,
    meta: {
      title: '登录',
    },
  },
]

export default [
  ...navTabs,
  {
    path: 'detail',
    name: 'detail',
    component: Detail,
    meta: {
      title: '详情',
    },
  },
  {
    path: 'user/$',
    name: 'userDetail',
    component: User,
    meta: {
      title: '用户详情',
    },
  },
]
