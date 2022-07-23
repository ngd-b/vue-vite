<template>
  <div class="header">
    <div class="icon" @click="handleJumpMain">
      <img :src="IconSvg" />
    </div>
    <el-input class="search" @change="handleSearch">
      <template #prefix>
        <el-icon><Search /></el-icon>
      </template>
    </el-input>
    <ul class="nav nav-right">
      <li v-for="item in navTabs" :key="item.name">
        <router-link :to="{ name: item.name }">{{
          item.meta.title
        }}</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'home' }">主系统</router-link>
      </li>
    </ul>
  </div>
</template>
<script setup>
// svg 图标
import IconSvg from "./assets/cnodejs_light.svg";
// 顶部导航
import { navTabs } from "../routers";
import { Search } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter();
/**
 * 输入搜索
 */
const handleSearch = (val) => {
  // 定义搜索
};
const handleJumpMain = () => {
  // BUG:name 会调home
  // router.push({ name: "cnode" });
  router.push({ path: "/cnode" });
};
</script>
<style lang="less" scoped>
.header {
  height: 60px;
  position: relative;
  background: #444;
  font-size: 13px;
  padding: 0 10%;
  display: flex;
  align-items: center;
  .icon {
    width: 120px;
    height: 34px;
    line-height: 34px;
    display: inline-block;
  }
  :deep(.search) {
    margin-left: 10px;
    width: 200px;
    .el-input__wrapper {
      background-color: #888;
      color: #666;
      transition: all 0.5s;
      border-radius: 15px;
      border: none;
      height: 28px;
      &:hover {
        background-color: #fff;
      }
    }
  }
  .nav {
    color: #ccc;
    flex: 1;
    display: flex;
    justify-content: end;
    font-size: 13px;
    :deep(li) {
      padding: 10px 15px;
      &:hover {
        color: #fff;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>