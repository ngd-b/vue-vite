/**
 * define pinia 
 * 不需要定义mutation
 */
import { defineStore } from 'pinia'

export const uesSystemStore = defineStore('system',{
    state:()=>{

        return {
            menu:''
        }
    },
    getters:{
        showAside:(state)=>!['cnode'].some(val=>state.menu.includes(val))
    },
    actions:{
        // actions
        // 同步、异步都可以处理，可以处理业务逻辑
        changeMenu(paylod){
            console.log('----------system',paylod)
            this.menu = paylod
        }
    }
})