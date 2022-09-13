<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Index from './components/Index.vue';
import ToolBar from './components/ToolBar.vue';
import ToolBarSwitcher from './components/ToolBarSwitcher.vue';
document.body.setAttribute('arco-theme', 'dark')
</script>

<template>
  <Index />
  <ToolBarSwitcher />
  <ToolBar />
</template>

<style lang="less">
@import './theme/vars.less';
@import url('//at.alicdn.com/t/font_3208566_7j7a4uw746x.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @theme-color;
  background: @theme-background;
  display: flex;
}
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar{
  display: none;
}
</style>
