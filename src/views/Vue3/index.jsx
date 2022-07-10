import { ref, defineComponent } from 'vue'

export default defineComponent({
    props:{

    },
    setup(props,context) {
        const num = ref(0)
        return {
            num
        }
    },
    methods:{
        handleAdd(){
            this.num++
        }
    },
    render(){

        return <div>
            <p>this is Vue3 API - {this.num}</p>
            <button onClick={this.handleAdd}>add</button>
        </div>
    }
})