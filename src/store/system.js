/**
 * define pinia
 * 不需要定义mutation
 */
import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'

export const uesSystemStore = defineStore('system', {
  state: () => {
    return {
      menu: '',
      lang: localStorage.getItem('lang') || 'zh',
      menuIsCollapse:false,
      // 当前登录用户信息
      userInfo:{}
    }
  },
  getters: {
    showAside: (state) => !['cnode'].some((val) => state.menu.includes(val)),
    isLogin(state){
      let userInfo = sessionStorage.getItem('userInfo')
      if(userInfo){
        userInfo = JSON.parse(userInfo)
      }
      return userInfo && userInfo.token
    }
  },
  actions: {
    // actions
    // 同步、异步都可以处理，可以处理业务逻辑
    changeMenu(paylod) {
      this.menu = paylod
    },
    /**
     * 语言转换
     * @param {*} payload 
     */
    transformLang(payload) {
      this.lang = payload
      // 持久化，保存在localstorage
      localStorage.setItem('lang', payload)
    },
    /**
     * 登录
     * @param {} payload 
     */
    async login(payload){
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 8000)
      })
      this.userInfo = {...payload,token:Date.now()}
      // 本地存储
      sessionStorage.setItem('userInfo',JSON.stringify(this.userInfo))
      ElMessage({
        message: '登陆成功!',
        type: 'success',
      })
      window.location.href = window.location.origin
    }
  },
})
