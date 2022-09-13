<template>
  <div class="draggable-resizeable" :class="{ active: isActive }" @mousedown="handleMouseDown" ref="domRef">
    <div class="resizer top-left"></div>
    <div class="resizer top"></div>
    <div class="resizer top-right"></div>
    <div class="resizer right"></div>
    <div class="resizer bottom-right"></div>
    <div class="resizer bottom"></div>
    <div class="resizer bottom-left"></div>
    <div class="resizer left"></div>
    <div class="cover move"></div>
    <slot />
  </div>
</template>
<script setup lang="ts">
import { 
  getDomRect,
  handleResizeRight, 
  handleResizeLeft, 
  handleResizeTop, 
  handleResizeBottom, 
  handleResizeTopLeft,
  handleResizeTopRight,
  handleResizeBottomRight,
  handleResizeBottomLeft,
  handleMove,
  clearPosition } from '../utils/drag-resize';
import { ref, reactive, computed } from 'vue';
import { DomRect } from '../types/drag';
import usePreviewStore from '../store/preview';

interface Props{
  itemKey: string;
}

const props = defineProps<Props>();

const store = usePreviewStore();

const { itemKey } = props;

const isActive = computed(() => store.activeItem === itemKey);

const domRef = ref(null);

let domStyle = reactive({} as DomRect);

enum DragDirection {
  Top = 'top',
  TopLeft = 'top-left',
  TopRight = 'top-right',
  Right = 'right',
  Bottom = 'bottom',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
  Left = 'left',
  Move = 'move',
}

const DragDirectionMap = new Map([
  [DragDirection.Top, 'top'],
  [DragDirection.TopLeft, 'top-left'],
  [DragDirection.TopRight, 'top-right'],
  [DragDirection.Right, 'right'],
  [DragDirection.Bottom, 'bottom'],
  [DragDirection.BottomLeft, 'bottom-left'],
  [DragDirection.BottomRight, 'bottom-right'],
  [DragDirection.Left, 'left'],
  [DragDirection.Move, 'move']
]);

const DragHandlerMap = new Map([
  [DragDirection.Top, handleResizeTop],
  [DragDirection.TopLeft, handleResizeTopLeft],
  [DragDirection.TopRight, handleResizeTopRight],
  [DragDirection.Right, handleResizeRight],
  [DragDirection.Bottom, handleResizeBottom],
  [DragDirection.BottomLeft, handleResizeBottomLeft],
  [DragDirection.BottomRight, handleResizeBottomRight],
  [DragDirection.Left, handleResizeLeft],
  [DragDirection.Move, handleMove]
])

const direction = ref('' as DragDirection);


const handleDrag = (direction: DragDirection, e: Event) => {
  DragHandlerMap.get(direction)?.(domRef.value, domStyle, e);
}

const handleMouseMove = (event: Event) => {
  handleDrag(direction.value, event);
};

const handleMouseDown = (e: Event) => {
  const { target } = e;
  const { className } = target;
  const [cover, dir] = className.split(' ');
  direction.value = dir;
  if (!DragDirectionMap.get(dir)) return;

  domStyle = {...getDomRect(domRef.value)};

  window?.addEventListener('mousemove', handleMouseMove);

  window?.addEventListener('mouseup', handleMouseUp);

}

const handleMouseUp = (e: Event) => {
  window?.removeEventListener('mousemove', handleMouseMove);
  window?.removeEventListener('mouseup', handleMouseUp);
  clearPosition()
}


</script>
<style lang="less" scoped>
@import '../theme/vars.less';

.draggable-resizeable{
  width: 400px;
  height: 300px;
  position: absolute;
  &.active {
    .resizer {
      display: block;
    }
  }
  .cover{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    cursor: move;
    z-index: 9999;
  }
  .resizer{
    display: none;
    position: absolute;
    width: 8px;
    height: 8px;
    background: @theme-color;
    transform: translate(-50%, -50%);
    z-index: 9999;
  }
  .top, .bottom {
    left: 50%;
  }
   .left, .right {
    top: 50%;
  }
  div[class*="bottom"] {
    bottom: -8px;
  }
  div[class*="right"] {
    right: -8px;
  }
  .left, .right {
    cursor: ew-resize;
  }
  .top, .bottom {
    cursor: ns-resize;
  }
  .top-left, .bottom-right {
    cursor: nwse-resize;
  }
  .top-right, .bottom-left {
    cursor: nesw-resize;
  }
}
</style>