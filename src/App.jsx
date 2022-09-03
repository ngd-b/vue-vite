import { defineComponent, onMounted } from 'vue'
import './App.less'

// defineComponent  只返回传递给它的对象；
// 此处IDE支持
export default defineComponent({
  props: {},
  setup(props, context) {
    // 挂载
    onMounted(() => {
      //
    })
  },
  render() {
    return (
      <>
        <Transition name="el-fade" mode="out-in" appear>
          <router-view />
        </Transition>
      </>
    )
  },
})
