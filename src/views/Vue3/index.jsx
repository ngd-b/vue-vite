import { ref, defineComponent } from 'vue'

// 自定义组件
import ComponsitionApi from './components/compositionAPi.vue'
import KeepAlive from './components/keepAlive'

export default defineComponent({
  props: {},
  setup(props, context) {
    const num = ref(0)
    return {
      num,
    }
  },
  methods: {
    handleAdd() {
      this.num++
    },
  },
  render() {
    return (
      <div>
        <p>this is Vue3 API - {this.num}</p>
        <button onClick={this.handleAdd}>add</button>
        <ComponsitionApi />
        <KeepAlive />
      </div>
    )
  },
})
