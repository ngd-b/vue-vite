import { defineComponent, onMounted, onUnmounted } from "vue";

// 将README.md导入进来
import ReadME from "../../../README.md?raw";

export default defineComponent({
  props: {},
  // 组件自定义触发事件，对象可定义验证函数
  emits: [],
  setup(porps, context) {
    // 生命周期，挂载
    onMounted(() => {
      // 挂载
    });
    onUnmounted(() => {
      // 卸载，销毁组件
    });

    return {};
  },
  render() {
    return (
      <>
        <hb-file-preview type="md" url={ReadME} />
      </>
    );
  },
});
