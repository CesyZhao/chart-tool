<template>
  <div class="preview-item">
    <div class="chart" ref="chartRef" draggable="true" @dragstart="handleDragStart"></div>
    <div class="name" v-if="chart.name">{{ chart.name }}</div>
  </div>
</template>

<script setup lang="ts">
import { IChart } from '../types/charts';
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';

interface Props{
  chart: IChart;
  enableResize: boolean;
}

const props = defineProps<Props>();

const chartRef = ref(null);

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  const chartInstance = echarts.init(chartRef.value, 'dark');

  const { chart, enableResize } = props;
  const { option } = chart;

  chartInstance.setOption(option);

  if (!enableResize) {return}

  const { parentNode } = chartRef.value;

  const resizeObserver = new ResizeObserver(entries => {
    chartInstance.resize();
  });

  resizeObserver.observe(parentNode);
})

const handleDragStart = (e) => {
  const { chart } = props;
  e.dataTransfer.setData("chart", JSON.stringify(chart));
}

</script>
<style lang="less" scoped>
.preview-item {
  height: 100%;
  // background: #fff;
  margin-bottom: 12px;
  position: relative;
  .chart{
    height: 100%;
    position: relative;
  }
  .name {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
  }
}
</style>
