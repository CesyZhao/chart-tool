<template>
  <div class="switch-wrapper" :class="{ 'is-open': isOpen }">
    <div class="switch" @click="toggleSwitch">
      <div class="top"></div>
      <i class="iconfont icon-arrow-left" :class="{ 'is-open': isOpen }" style="font-size: 24px"></i>
      <div class="bottom"></div>
      <div class="left"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import useToolbarStore from '../store/toolbar';
import { computed } from 'vue';

const store = useToolbarStore();

const isOpen = computed(() => store.open);

const toggleSwitch = () => store.toggleToolbar();

</script>

<style lang="less" scoped>
@import '../theme/vars.less';
.switch-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  &.is-open {
     &::before {
      content: '';
      position: absolute;
      width: 1px;
      top: 0;
      right: 0;
      bottom: calc(50% + 20px);
      background-color: @theme-color;
      transform: scaleX(.3);
    }
      &::after {
      content: '';
      position: absolute;
      width: 1px;
      top: calc(50% + 20px);
      right: 0;
      bottom: 0;
      background-color: @theme-color;
      transform: scaleX(.3);
    }
  }
}
.switch {
  position: relative;
  cursor: pointer;
  padding: 8px 0;
  i {
    opacity: .5;
    display: inline-block;
    transition: all .3s;
  }
  .is-open {
    transform: rotate(180deg);
  }
  .left {
    &::before {
      content: '';
      position: absolute;
      width: 1px;
      top: 0;
      left: 0;
      bottom: 0;
      background-color: @theme-color;
      transform: scaleX(.3);
    }
  }
  .top {
    &::before {
      content: '';
      position: absolute;
      height: 1px;
      top: 0;
      left: 0;
      right: 0;
      background-color: @theme-color;
      transform: scaleY(.3);
    }
  }
  .bottom {
    &::before {
      content: '';
      position: absolute;
      height: 1px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: @theme-color;
      transform: scaleY(.3);
    }
  }
}
</style>