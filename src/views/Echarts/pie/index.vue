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
  import * as echarts from 'echarts'
  import { ref, markRaw } from 'vue'
  export default {
    setup() {
      const chart = ref(null)

      return {
        chart,
      }
    },
    mounted() {
      this.initChart()
    },
    methods: {
      initChart() {
        this.chart = markRaw(echarts.init(this.$refs.chart))

        const options = {
          title: {
            text: '柱状图',
          },
          legend: {
            show: true,
            left: 0,
          },
          xAxis: {
            type: 'category',
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          },
          yAxis: {
            type: 'value',
          },
          grid: {
            top: 200,
          },
          series: [
            {
              name: '销量',
              type: 'pie',
              center: ['50%', '25%'],
              radius: '40%',
              labelLine: {
                show: false,
              },
              data: [5, 20, 36, 10, 10, 20],
            },
            {
              name: '利润',
              type: 'bar',
              data: [25, 120, 136, 90, 110, 120],
            },
          ],
        }
        this.chart.setOption(options)
      },
    },
  }
</script>
<style lang="less" scoped>
  .bar-chart {
    .chart-box {
      width: 500px;
      height: 400px;
    }
  }
</style>
