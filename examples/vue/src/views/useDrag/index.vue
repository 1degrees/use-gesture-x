<template>
  <div class="flex fill center container">
    <ConfigPanel v-model="config" />
    <div v-bind="bind()" class="drag" :style="style">
      <div>
        <span>bind</span>
        <span> x:{{ Math.round(coords.x) }}, y:{{ Math.round(coords.y) }} </span>
      </div>
    </div>
    <div ref="boundRef" className="hover" />
  </div>
</template>

<script setup>
import { useDrag } from '@use-gesture/vue3'
import { useSpring } from '../useSpring'
import ConfigPanel from '../configPanle/index.vue'
import { watch, reactive, ref, computed } from 'vue'
const boundRef = ref(null)
const dragRef = ref(null)
const coords = ref({ x: 0, y: 0 })
const [style, api] = useSpring()
const config = ref({
  axis: '',
  delay: 0,
  enabled: true,
  gesture: 'movement',
  rubberband: false,
  bounds: false
})
const dragConfig = computed(() => ({
  ...config.value,
  bounds: config.value.bounds ? boundRef : undefined
}))
const bind = useDrag(({ active, movement: [x, y] }) => {
  const changeInfo = {
    x: active ? x : 0,
    y: active ? y : 0,
    scale: active ? 1.2 : 1
  }
  api.set(changeInfo)
  coords.value = changeInfo
}, dragConfig)
</script>
<style scoped>
html,
body,
#root {
  height: 100%;
  width: 100%;
}

body {
  font-family: system-ui, sans-serif;
  min-height: 100vh;
  margin: 0;
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

.flex {
  display: flex;
  align-items: center;
}

.flex.fill {
  height: 100%;
}

.flex.center {
  justify-content: center;
}

.container {
  width: 100%;
  height: 100%;
}

.drag {
  position: absolute;
  height: 120px;
  width: 120px;
  background-color: #ec625c;
  cursor: grab;
  touch-action: none;
  -webkit-user-select: none;
  user-select: none;
  font-size: 10px;
}

.drag > div {
  margin: 10%;
  width: 80%;
  height: 80%;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: monospace;
}

.hover {
  height: 200px;
  width: 200px;
  background-color: royalblue;
}

.hover:hover {
  background-color: darkblue;
}
</style>
