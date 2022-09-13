<template>
  <a-modal :visible="false" draggable :closable="false" :footer="false">
    <div class="dialog-wrapper">

    </div>
  </a-modal>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import usePreviewStore from '../store/preview';

const store = usePreviewStore();

const showDialog = computed(() => store.showConfigDialog);

console.log(showDialog, '++++++')

</script>

<style lang="less" scoped>
@import '../theme/vars.less';

.dialog-wrapper {
  width: 70vw;
  height: 70vh;
}
</style>
