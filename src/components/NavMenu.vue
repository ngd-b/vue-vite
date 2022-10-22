<template>
  <div class="nav-menu">
    <el-menu
      router
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      :collapse="menuIsCollapse"
    >
      <template v-for="item in filterNavData(routerData)" :key="item.name">
        <el-sub-menu
          v-if="item.children && item.children.length > 0"
          :index="item.path"
        >
          <template #title>
            <el-icon>
              <component :is="item.meta.icon" />
            </el-icon>
            <span>{{ $t(item.meta.title) }}</span>
          </template>

          <el-menu-item
            v-for="info in filterNavData(item.children)"
            :key="info.name"
            :index="info.path"
          >
            <span>{{ $t(info.meta.title) }}</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="item.path">
          <el-icon>
            <component :is="item.meta.icon" />
          </el-icon>
          <span>{{ $t(item.meta.title) }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
  import { uesSystemStore } from '@/store/system.js'
  import { computed } from 'vue'
  export default {
    props: {
      routerData: {
        type: Array,
        default: () => [],
      },
    },
    setup() {
      const systemStore = uesSystemStore()
      // menuIsCollapse
      const menuIsCollapse = computed(() => systemStore.menuIsCollapse)

      return {
        menuIsCollapse,
      }
    },
    methods: {
      filterNavData(data) {
        return data.filter((item) => item.meta.isMenu)
      },
    },
  }
</script>
<style lang="less" scoped>
  .nav-menu {
    width: 100%;
    height: 100%;
  }
</style>
