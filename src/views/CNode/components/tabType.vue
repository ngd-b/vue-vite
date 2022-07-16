<template>
  <div class="tab-type">
    <span v-if="!isAsk" :class="tabClass">{{ TypeMapName[tab] }}</span>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from "vue";
import { Type, TypeMapName } from "./enum";
import { useTabStore } from "../model";

//
const tabStore = useTabStore();
// 接受props
const props = defineProps({
  tab: String,
  isTop: Boolean,
  isGood: Boolean,
});
// 定义class
// const tabClass = ref()
const tabClass = computed(() => {
  // return ["tab-info"];
  return ["tab-info", props.isTop ? "top" : props.isGood ? "good" : props.tab];
});
// 问答模式边不展示ask
const isAsk = computed(() => Type.Ask === tabStore.activeTab);
</script>

<style lang="less" scoped>
.tab-type {
  font-size: 12px;
  span {
    display: inline-block;
    width: 50px;
    height: 25px;
    border-radius: 8px;
    text-align: center;
    line-height: 25px;
    color: #999;
    background-color: #e5e5e5;
    &.top,
    &.good {
      color: #fff;
      background-color: #80bd01;
    }
  }
}
</style>