<template>
  <div class="tool-bar" :class="{ 'is-open': isOpen }">
    <div class="logo">Chart Tool</div>
    <ChartList />
  </div>
</template>
<script setup lang="ts">
import ChartList from './ChartList.vue';
import { computed } from 'vue';
import useToolbarStore from '../store/toolbar';

const store = useToolbarStore();

const isOpen = computed(() => store.open);

</script>
<style lang="less" scoped>
@import '../theme/vars.less';
.tool-bar {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all .2s;
  width: 0;
  overflow: hidden;
  .logo {
    font-size: 20px;
    margin-bottom: 12px;
    -webkit-app-region: drag;
    user-select: none;
  }
  &.is-open {
    width: 20%;
    padding: 12px;
  }
  // background: #000;
}
</style>
