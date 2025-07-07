<template>
  <div class="cnode-page">
    <CNodeHeader />
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
//  组件
import { Header as CNodeHeader } from "./components/index.js";

import "./index.less";
export default {
  components: {
    CNodeHeader,
  },
  data() {
    return {
      name: "CNode",
    };
  },
  mounted() {},
  methods: {},
};
</script>
