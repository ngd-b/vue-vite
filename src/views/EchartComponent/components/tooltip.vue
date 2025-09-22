<template>
  <VueEcharts class="w-400px h-280px" :animationDuration="2000">
    <Legend :data="['意向']" top="bottom" />
    <Tooltip
      triggerOn="none"
      alwaysShowContent
      :position="(pt) => [pt[0], 130]"
    />
    <XAxis type="time">
      <SplitLine :show="false" />
      <AxisPointer value="2016-10-7" snap>
        <Text
          prop="label"
          show
          :formatter="
            (params:any) => echarts.time.format( params.value,'yyyy-MM-dd', true)
          "
        />
        <Handle show />
      </AxisPointer>
    </XAxis>
    <YAxis type="value" :z="10">
      <AxisTick show />
      <SplitLine :show="false" />
      <Text prop="axisLabel" :inside="true" />
    </YAxis>
    <Grid :top="30" :left="15" :right="15" :bottom="80" />
    <Line
      name="模拟数据"
      smooth
      symbol="circle"
      :symbolSize="5"
      sampling="lttb"
      stack="a"
      :data="data[0]"
    >
      <AreaStyle />
      <ItemStyle color="#8ec6ad" />
    </Line>
    <Line
      name="模拟数据"
      smooth
      symbol="circle"
      :symbolSize="5"
      sampling="lttb"
      stack="a"
      :data="data[0]"
    >
      <AreaStyle />
      <ItemStyle color="#d68262" />
    </Line>
  </VueEcharts>
</template>
<script setup lang="tsx">
import { onMounted } from "vue";
import * as echarts from "echarts";
import {
  useVueEcharts,
  VueEcharts,
  Legend,
  Tooltip,
  XAxis,
  SplitLine,
  AxisPointer,
  Text,
  Handle,
  YAxis,
  AxisTick,
  Grid,
  Line,
  AreaStyle,
  ItemStyle,
} from "@echarts-component/vue";

const data = [
  [
    ["2016-10-4", 204],
    ["2016-10-5", 196],
    ["2016-10-6", 197],
    ["2016-10-7", 192],
    ["2016-10-8", 183],
    ["2016-10-9", 186],
    ["2016-10-10", 179],
    ["2016-10-11", 174],
    ["2016-10-12", 169],
  ],
  [
    ["2016-10-4", 52],
    ["2016-10-5", 45],
    ["2016-10-6", 43],
    ["2016-10-7", 38],
    ["2016-10-8", 29],
    ["2016-10-9", 32],
    ["2016-10-10", 22],
    ["2016-10-11", 16],
    ["2016-10-12", 13],
  ],
];

const { getOption, options } = useVueEcharts();
onMounted(() => {
  console.log(getOption(), options.value);
});
</script>
