<template>
   <div class="flex fill center container">
      <p class="text">功能说明：拖拽移动、手势放大、缩小、旋转</p>
      <div v-bind="bind()" class="card" ref="dragRef" :style="style">
      </div>
    </div>
</template>
<script setup lang="ts">
import { watch, reactive, ref, computed, onMounted, onUnmounted } from 'vue'
import { useGesture } from '@use-gesture-x/vue3'
import { useSpring } from './useSpring'
const boundRef = ref(null)
const dragRef = ref(null)
const coords = ref({ x: 0, y: 0 })
const [style, api, status] = useSpring({
  x: 0,
  y: 0,
  s: 1,
  z: 0
})
const bind = useGesture(
  {
    onDrag: ({ pinching, cancel, offset: [x, y], ...rest }) => {
      if (pinching) return cancel()
      api.start({ x, y })
    },
    onPinch: ({ origin: [ox, oy], first, movement: [ms], offset: [s, a], memo }) => {
      if (first) {
        const { width, height, x, y } = dragRef.value.getBoundingClientRect()
        const tx = ox - (x + width / 2)
        const ty = oy - (y + height / 2)
        memo = [status.x, status.y, tx, ty]
      }
      const x = memo[0] - (ms - 1) * memo[2]
      const y = memo[1] - (ms - 1) * memo[3]
      api.set({ scale: s, rotateZ: a, x, y })
      return memo
    },
  },
  {
    drag: { from: () => [status.x, status.y] },
    pinch: { scaleBounds: { min: 0.5, max: 2 }, rubberband: true },
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

.container {
  background: indianred;
}

.card {
  position: relative;
  width: 300px;
  height: 300px;
  background: url(https://images.pexels.com/photos/1030963/pexels-photo-1030963.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500);
  background-size: cover;
  border-radius: 5px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  will-change: transform;
  border: 10px solid white;
  cursor: grab;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: 500;
  font-size: 16px;
  padding: 10px;
  text-align: center;
  color: #ec0707aa;
}
.text {
  position: absolute;
  bottom: 26px;
  left: 35%;
  font-size: 16px;
  padding: 10px;
  text-align: center;
  color: #ffffff;
}

</style>
