<template>
  <el-container v-if="systemStore.showAside" class="app-container">
    <el-header>
      <div :class="['logo-name', menuIsCollapse ? 'collapse' : '']">
        <h1 v-if="!menuIsCollapse">{{ systemName }}</h1>
        <el-icon
          :size="40"
          class="expandIcon"
          @click="() => handleExpandMenu()"
        >
          <Menu />
        </el-icon>
      </div>

      <div className="lang-transform">
        <el-switch
          :model-value="lang"
          inline-prompt
          size="large"
          active-value="zh"
          inactive-value="en"
          active-text="中文"
          inactive-text="英文"
          @change="transformLang"
        />
      </div>
    </el-header>
    <el-container>
      <el-aside :width="menuIsCollapse ? '64px' : '200px'">
        <NavMenu :router-data="routerMenus" />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  <el-container v-else class="app-container">
    <router-view></router-view>
  </el-container>
</template>
<script lang="jsx" setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { uesSystemStore } from "@/store/system.js";
import { Menu } from "@element-plus/icons-vue";
// 组件
import NavMenu from "../components/NavMenu.vue";
// 路由地址
import { routerMenus } from "@/routers";
import { useI18n } from "vue-i18n";
// defineComponent  只返回传递给它的对象；
const store = useStore();
const i18n = useI18n();

// 获取到pinia的数据
const systemStore = uesSystemStore();
// 当前切换语言
const lang = computed(() => systemStore.lang);
// menuIsCollapse
const menuIsCollapse = computed(() => systemStore.menuIsCollapse);

const systemName = computed(() => store.state.systemName);

/**
 * 语言切换
 */
function transformLang(val) {
  i18n.locale.value = val;
  systemStore.transformLang(val);
}
/**
 * 按钮折叠
 */
function handleExpandMenu() {
  systemStore.menuIsCollapse = !menuIsCollapse.value;
}
</script>
