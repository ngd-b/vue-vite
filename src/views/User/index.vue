<template>
  <div class="user">
    <p>{{ name }} - {{ age }}</p>
    <p>user - show systemName【{{ systemName }}】</p>
    <button @click="changeSystemName">更改</button>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";

// store
const store = useStore();

// store 变量
const systemName = computed(() => store.state.systemName);

// 声明常量
const name = "user - system";

const age = ref(0);

age.value = 34;

// 映射store 方法
const changeSystemName = () => {
  store.commit("changeSytemName", "vite-jsx");
};
</script>
