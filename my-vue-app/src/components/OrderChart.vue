<template>
  <div class="order-chart-container">
    <h3>Project Hours Distribution</h3>
    <div ref="chartRef" class="chart-box"></div>
  </div>
</template>

<script setup>
import { onMounted, watch, ref } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  orders: Array,
  role: String
})
const chartRef = ref(null)
let chartInstance = null

function renderChart() {
  if (!chartRef.value) return
  if (!chartInstance) {
    chartInstance = echarts.init(chartRef.value)
  }
  // 统计每个项目的累计工时
  const projectHours = {}
  props.orders.forEach(order => {
    if (!projectHours[order.project]) projectHours[order.project] = 0
    projectHours[order.project] += order.hours
  })
  const option = {
    title: { text: '', left: 'center' },
    tooltip: {},
    grid: { left: 40, right: 20, top: 30, bottom: 90 },
    xAxis: {
      type: 'category',
      data: Object.keys(projectHours),
      axisLabel: {
        fontSize: 12,
        interval: 0,
        rotate: 0,
        lineHeight: 18,
        formatter: function(value) {
          // 每7字符换行，适配更长项目名
          return value.length > 7 ? value.replace(/(.{7})/g, '$1\n') : value
        },
        margin: 16
      }
    },
    yAxis: { type: 'value', minInterval: 1 },
    series: [
      {
        type: 'bar',
        data: Object.values(projectHours),
        itemStyle: { color: '#bfc4c9' },
        barWidth: 32
      }
    ]
  }
  chartInstance.setOption(option)
}

onMounted(() => {
  renderChart()
})

watch(() => props.orders, () => {
  renderChart()
}, { deep: true })
</script>

<style scoped>
.order-chart-container {
  flex: 1 1 40%;
  min-width: 320px;
  background: #fff;
  border: 1.5px solid #bfc4c9;
  border-radius: 6px;
  padding: 18px 12px 8px 12px;
  margin-left: 0;
  margin-top: 0;
}
h3 {
  text-align: left;
  margin: 0 0 10px 4px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
}
.chart-box {
  width: 100%;
  height: 320px;
}
</style> 