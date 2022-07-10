import {ref,reactive,toRef,defineComponent} from 'vue'

// 路由地址
import { routes } from './route'
// defineComponent  只返回传递给它的对象；
// 此处IDE支持
export default defineComponent({
    props:{

    },
    setup(props,context){
        /**
         * props - 父组件数据属性传递
         * context - 组件属性，比如$attrs,$emit,$slots等
         */
        const {name} = toRef(props)

        // 创建响应式数据
        const count = ref(0)
        const user = reactive({name:'',age:21})

        return {
            count,
            user
        }
    },
    methods:{
        handleAddCount(){
            this.count++
        }
    },
    render(){
        return <>
            <ul>
                {routes.map(item=><li key={item.name} >
                    <router-link to={{name:item.name}}>{item.meta.title}</router-link>
                    </li>)}
            </ul>
            <router-view></router-view>
        </>
    } 
})