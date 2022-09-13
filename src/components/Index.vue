<template>
  <div class="main-container" @drop="handleDrop" @dragover="handleDragover" >
    <DraggableResizeableItem v-for="item in list" :key="item.key" :item-key="item.key" :style="item.style" v-memo="list">
      <PreviewItem :chart="item.chart" ref="" :enable-resize="true" />
    </DraggableResizeableItem>
    <config-dialog />
  </div>
</template>

<script setup lang="ts">
import PreviewItem from './PreviewItem.vue';
import DraggableResizeableItem from './DraggableResizeableItem.vue';
import ConfigDialog from './ConfigDialog.vue';
import { createUuid } from '../utils/index';
import usePreviewStore from '../store/preview';


import { reactive } from 'vue';

const list = reactive([]);

const store = usePreviewStore();


const handleDragover = (e) => {
  e.preventDefault();
};

const handleDrop = (e) => {
  const { dataTransfer } = e;
  let chart
  try {
    chart = JSON.parse(dataTransfer.getData('chart'));
  } catch {}
  if (!chart) return
  const { x, y } = e;
  const style = `width: 400px; height: 350px; position: absolute; left: ${x - 200}px; top: ${y - 175}px;`;
  const uuid = createUuid();
  const item = { style, chart: {...chart, name: ''}, key: uuid };
  list.push(item);
  store.changeActiveId(uuid);
};
</script>

<style lang="less" scoped>
.main-container {
  // background-color: #fff;
  flex: 1;
  transition: all .3s;
}
</style>
