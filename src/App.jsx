import {ref,reactive,toRef,defineComponent, render} from 'vue'

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
            <p>{this.count}</p>
            <button onClick={this.handleAddCount}>+1</button>
        </>
    } 
})