<template>
  <div class="bar-chart">
    <el-row class="height-100">
      <el-col :span="10" class="height-100">
        <div ref="chart" class="chart-box" />
      </el-col>
      <el-col :span="14" class="height-100">
        <div class="option-box">
          <chart-title @change="handleChangeOptions('title', $event)" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import * as echarts from 'echarts'
  import { ref, markRaw, toRaw } from 'vue'

  // 组件
  import ChartTitle from '../components/chartTitle'

  export default {
    components: {
      ChartTitle,
    },
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
          tooltip: {
            show: true,
          },
          xAxis: {
            type: 'category',
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              name: '销量',
              type: 'bar',
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
      /**
       * chart 图标属性change
       */
      handleChangeOptions(key, attr) {
        if (!this.chart) {
          return
        }
        console.log(toRaw(attr))
        this.chart.setOption({
          [key]: toRaw(attr),
        })
      },
    },
  }
</script>
<style lang="less" scoped>
  .bar-chart {
    height: 100%;
    .chart-box {
      width: 100%;
      height: 400px;
    }
    .option-box {
      height: 100%;
      overflow: auto;
    }
  }
</style>
