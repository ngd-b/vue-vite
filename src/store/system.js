/**
 * define pinia
 * 不需要定义mutation
 */
import { defineStore } from 'pinia'

export const uesSystemStore = defineStore('system', {
  state: () => {
    return {
      menu: '',
      lang: localStorage.getItem('lang') || 'zh',
      menuIsCollapse:false,
    }
  },
  getters: {
    showAside: (state) => !['cnode'].some((val) => state.menu.includes(val)),
  },
  actions: {
    // actions
    // 同步、异步都可以处理，可以处理业务逻辑
    changeMenu(paylod) {
      this.menu = paylod
    },
    transformLang(payload) {
      this.lang = payload
      // 持久化，保存在localstorage
      localStorage.setItem('lang', payload)
    },
  },
})
