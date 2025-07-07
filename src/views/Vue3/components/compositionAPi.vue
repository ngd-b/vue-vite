<script setup>
import { ref, onMounted, h } from "vue";

const name = ref("test");

onMounted(() => {
  setTimeout(() => {
    name.value = "admin";
  }, 10000);
});
</script>
<script>
export default {
  render() {
    return h("p", this.name);
  },
};
</script>
