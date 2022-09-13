<template>
  <div class="chart-list-wrapper">
    <div class="tools">
      <i class="iconfont icon-pailie" @click="switchLayout"></i>
    </div>
    <div class="chart-list">
      <div class="chart-category" v-for="c in categories" :key="c.category">
        <div class="category-title">{{ c.category }}</div>
        <PreviewItem v-for="chart in c.charts" :key="chart.name" :chart="chart" class="chart" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import PreviewItem from './PreviewItem.vue';
import categories from '../contants/charts';

import { ref } from 'vue';
const column = ref(2);

const switchLayout = () => {
  const newColumn = column.value === 2 ? 1 : 2;
  column.value = newColumn;
}
</script>
<style lang="less" scoped>
@import '../theme/vars.less';
.chart-list-wrapper {
   width: 100%;
   flex: 1;
   .tools {
     height: 24px;
     line-height: 24px;
     display: flex;
     justify-content: flex-end;
     position: relative;
     margin-bottom: 12px;
     &::before, &::after{
       content: '';
       position: absolute;
       left: -12px;
       right: -12px;
       height: 1px;
       transform: scaleY(.2);
       background: @theme-color;
     }
     &::after {
       bottom: 0;
     }
     i {
       opacity: .4;
       cursor: pointer;
     }
   }
}
.chart-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: calc(100vh - 90px);
  overflow-y: auto;
  .chart {
    width: 100%;
    height: 200px;
    background: #fff;
    margin-bottom: 12px;
    transition: all .3s;
    cursor: move
  }
}
.column-2 {
  .chart {
    width: calc(50% - 6px);
    height: 96px;
  }
}
.chart-category{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .category-title{
    width: 100%;
    flex-shrink: 0;
    text-align: left;
    line-height: 24px;
    position: sticky;
    top: 0;
  }
}
</style>