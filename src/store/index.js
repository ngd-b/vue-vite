import { createStore } from 'vuex'

// module
import User from './module/user'

export default createStore({
    state(){

        return {
            systemName:'vite+vue3'
        }
    },
    mutations:{
        changeSytemName(state,payload){
            state.systemName = payload
        }
    },
    modules:{
        user:User
    }
})