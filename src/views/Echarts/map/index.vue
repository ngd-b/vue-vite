<template>
  <div class="bar-chart">
    <el-row>
      <el-col :span="12">
        <div ref="chart" class="chart-box" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import * as echarts from "echarts";
import { ref, markRaw } from "vue";

// import sqMapData from './components/jiangsu/suqian.json'

export default {
  setup() {
    const chart = ref(null);

    return {
      chart,
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    async initChart() {
      this.chart = markRaw(echarts.init(this.$refs.chart));
      // 宿迁地图
      const res = await this.$http.request({
        type: "get",
        url: "https://geo.datav.aliyun.com/areas_v3/bound/320000_full.json",
      });
      console.log(res);
      echarts.registerMap("suqian", { geoJSON: res });
      const options = {
        title: {
          text: "地图",
        },
        xAxis: {
          show: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            name: "地图",
            type: "map",
            map: "suqian",
            label: {
              show: true,
              color: "#fff",
            },
            itemStyle: {
              color: "rgba(23,34,23,1)",
              areaColor: "rgba(23,134,23,0.8)",
            },
            data: [10, 23, 34],
          },
        ],
      };
      this.chart.setOption(options);
    },
  },
};
</script>
<style lang="less" scoped>
.bar-chart {
  .chart-box {
    width: 500px;
    height: 400px;
  }
}
</style>
