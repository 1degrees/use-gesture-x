<template>
  <div className="flex fill center">
    <div ref="pinchRef" v-bind="bind()" class="drag" :style="style" >
      <div>
        <div>手势放大、缩小、旋转</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { usePinch } from '@use-gesture-x/vue3'
import { useSpring } from './useSpring'
const gesture = 'offset'
const pinchRef = ref(null)
const [style, api] = useSpring({
  scale: 1,
  rotate: 0,
})
const bind = usePinch(
  ({ active, turns, ...state }) => {
    const [scale, angle] = state[gesture]
    api.start({
      scale: active || gesture === 'offset' ? scale : 1,
      rotate: active || gesture === 'offset' ? angle : 0
    })
  },
  {
    // target: pinchRef,
    eventOptions: { passive: false },
    pointer: { touch: true },
  }
)
  
const handler = (e: Event) => {
  e.preventDefault()
  console.log(e)
}
onMounted(() => {
  document.addEventListener('gesturestart', handler)
  document.addEventListener('gesturechange', handler)
  document.addEventListener('gestureend', handler)
})
onUnmounted(() => {
  document.removeEventListener('gesturestart', handler)
  document.removeEventListener('gesturechange', handler)
  document.removeEventListener('gestureend', handler)
})
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
