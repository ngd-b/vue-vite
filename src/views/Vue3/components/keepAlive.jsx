import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  setup () {
    const name = ref('')

    onMounted(() => {
      // 挂载
      setTimeout(() => {
        name.value = 'admin123'
      }, 5000)
    })

    return () => <>
      <p>{name.value}</p>
    </>
  }
})
