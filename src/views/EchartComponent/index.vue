<template>
  <h2>vue-echarts</h2>

  <div class="flex flex-wrap gap-20px items-start">
    <div v-for="component in components" :key="component">
      <component :is="component" />
    </div>
  </div>
</template>
<script setup lang="tsx">
import Tooltip from "./components/tooltip.vue";
import XAxis from "./components/xAxis.vue";
import YAxis from "./components/yAxis.vue";
import Polar from "./components/polar.vue";
import RadiusAxis from "./components/radiusAxis.vue";
import VisualMap from "./components/visualMap.vue";

const components = [Tooltip, XAxis, YAxis, Polar, RadiusAxis, VisualMap];
</script>
