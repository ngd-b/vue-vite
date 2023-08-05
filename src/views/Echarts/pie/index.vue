<template>
  <div class="bar-chart">
    <el-row>
      <el-col :span="12">
        <div ref="chart" class="chart-box" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div ref="chartBar" class="chart-box" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import * as echarts from 'echarts'
  import { ref, markRaw } from 'vue'
  export default {
    name: 'EchartsPie',
    setup() {
      const chart = ref(null)
      const chartBar = ref(null)

      return {
        chart,
        chartBar,
        data: [
          {
            value: 45,
            name: '衬衫',
          },
          {
            value: 65,
            name: '羊毛衫',
          },
          {
            value: 75,
            name: '雪纺衫',
          },
          {
            value: 95,
            name: '裤子',
          },
          {
            value: 145,
            name: '高跟鞋',
          },
        ],
      }
    },
    mounted() {
      this.initChart()
      this.initChartBar()
    },
    methods: {
      initChartBar() {
        this.chartBar = markRaw(echarts.init(this.$refs.chartBar))

        this.chartBar.setOption({
          legend: {
            show: true,
            left: 'right',
            top: 0,
            align: 'left',
            padding: 0,
            // itemWidth: 20,
            // itemHeight: 20,
            // itemGap: 20,
            icon: 'path://M 200 100 L 300 100 L 200 400 L 300 500 z',
            // symbolRotate: 145,
            // itemStyle: {
            //   color: 'red',
            // },
            formatter: '{name}',
            // formatter(name) {
            //   let info = $this.data.find((item) => item.name == name)
            //   // return `${name}\r${info.value}`
            //   return `{name|${name}}\r {value|${info.value}}`
            // },
            // formatter(name) {
            //   return echarts.format.truncateText(name, 30)
            // },
            textStyle: {
              // color: 'green',
              // borderWidth: 1,
              // borderColor: '#000',
              // textBorderWidth: 2,
              // textBorderColor: 'red',
              width: 300,
              // overflow: 'truncate',
              rich: {
                name: {
                  color: 'red',
                  width: 40,
                },
                value: {
                  color: 'green',
                  fontSize: 18,
                },
              },
            },

            tooltip: {
              show: true,
            },
          },
          xAxis: {
            show: true,
          },
          yAxis: {
            show: true,
            type: 'category',
          },
          tooltip: {
            show: true,
          },
          series: [
            {
              name: '销量',
              type: 'line',
              data: [
                {
                  value: 45,
                  name: '衬衫',
                },
                {
                  value: 65,
                  name: '羊毛衫',
                },
                {
                  value: 75,
                  name: '雪纺衫',
                },
                {
                  value: 95,
                  name: '裤子',
                },
                {
                  value: 145,
                  name: '高跟鞋',
                },
                {
                  value: 105,
                  name: '西服',
                },
                {
                  value: 205,
                  name: '羽绒服',
                },
                {
                  value: 255,
                  name: '球鞋',
                },
                {
                  value: 55,
                  name: '板鞋',
                },
                {
                  value: 155,
                  name: '毛衣',
                },
              ],
            },
          ],
        })
      },
      initChart() {
        let $this = this
        this.chart = markRaw(echarts.init(this.$refs.chart))

        const options = {
          legend: [
            {
              show: true,
              left: 'left',
              top: 50,
              height: '60%',

              orient: 'vertical',
              align: 'right',
              padding: 0,
              itemWidth: 20,
              itemHeight: 20,
              itemGap: 20,
              icon: 'path://M 200 100 L 300 100 L 200 400 L 300 500 z',
              // symbolRotate: 145,
              itemStyle: {
                color: 'red',
              },
              formatter: '{name}',
              // formatter(name) {
              //   let info = $this.data.find((item) => item.name == name)
              //   // return `${name}\r${info.value}`
              //   return `{name|${name}}\r {value|${info.value}}`
              // },
              // // formatter(name) {
              // //   return echarts.format.truncateText(name, 30)
              // // },
              textStyle: {
                // color: 'green',
                // borderWidth: 1,
                // borderColor: '#000',
                // textBorderWidth: 2,
                // textBorderColor: 'red',
                width: 300,
                // overflow: 'truncate',
                rich: {
                  name: {
                    color: 'red',
                    width: 40,
                  },
                  value: {
                    color: 'green',
                    fontSize: 18,
                  },
                },
              },
              data: [
                {
                  name: '羽绒服',
                },
                {
                  name: '球鞋',
                },
                {
                  name: '板鞋',
                },
                {
                  name: '毛衣',
                },
              ],
              tooltip: {
                show: true,
              },
            },
            {
              show: true,
              left: 'right',
              top: 50,
              height: '60%',

              orient: 'vertical',
              align: 'left',
              padding: 0,
              itemWidth: 20,
              itemHeight: 20,
              itemGap: 20,
              icon: 'path://M 200 100 L 300 100 L 200 400 L 300 500 z',
              // symbolRotate: 145,
              itemStyle: {
                color: 'red',
              },
              formatter: '{name}',
              // formatter(name) {
              //   let info = $this.data.find((item) => item.name == name)
              //   // return `${name}\r${info.value}`
              //   return `{name|${name}}\r {value|${info.value}}`
              // },
              // formatter(name) {
              //   return echarts.format.truncateText(name, 30)
              // },
              textStyle: {
                // color: 'green',
                // borderWidth: 1,
                // borderColor: '#000',
                // textBorderWidth: 2,
                // textBorderColor: 'red',
                width: 300,
                // overflow: 'truncate',
                rich: {
                  name: {
                    color: 'red',
                    width: 40,
                  },
                  value: {
                    color: 'green',
                    fontSize: 18,
                  },
                },
              },
              data: [
                {
                  name: '衬衫',
                },
                {
                  name: '羊毛衫',
                },
                {
                  name: '雪纺衫',
                  icon: 'pin',
                },
                {
                  name: '裤子',
                },
              ],
              tooltip: {
                show: true,
              },
            },
          ],
          tooltip: {
            show: true,
          },
          series: [
            {
              name: '销量',
              type: 'pie',
              center: ['50%', '50%'],
              radius: '60%',
              label: {
                padding: [0, -40],
                // backgroundColor: 'red',
              },
              labelLine: {
                length: 10,
                length2: 50,
              },
              labelLayout: {
                verticalAlign: 'bottom',
                dy: -10,
              },

              data: [
                {
                  value: 45,
                  name: '衬衫',
                },
                {
                  value: 65,
                  name: '羊毛衫',
                },
                {
                  value: 75,
                  name: '雪纺衫',
                },
                {
                  value: 95,
                  name: '裤子',
                },
                {
                  value: 145,
                  name: '高跟鞋',
                },
                {
                  value: 105,
                  name: '西服',
                },
                {
                  value: 205,
                  name: '羽绒服',
                },
              ],
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
      height: 300px;
    }
  }
</style>
