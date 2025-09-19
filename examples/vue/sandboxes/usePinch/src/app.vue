<template>
  <div class="bounds">
    <span v-bind="bind()" class="drag" :style="style"> 可拖动元素 </span>
  </div>
</template>

<script setup>
import { useDrag } from '@use-gesture-x/vue3'
import { useSpring } from '../useSpring'

const [style, api] = useSpring()

const bind = useDrag(({ active, movement: [x, y] }) => {
  api.set({
    x: active ? x : 0,
    y: active ? y : 0,
    scale: active ? 1.2 : 1
  })
})
</script>
<style scoped>
.bounds {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.drag {
  position: absolute;
  height: 80px;
  width: 80px;
  border-radius: 8px;
  background-color: hotpink;
  cursor: grab;
  touch-action: none;
  -webkit-user-select: none;
  user-select: none;
  font-size: 10px;
}

.drag:focus {
  border: 2px solid red;
}
</style>
