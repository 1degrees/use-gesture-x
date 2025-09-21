<template>
  <div class="flex fill center gesture-scroll">
      <svg class="svg" viewBox="-14.5 -14.5 328 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle class="from" v-bind="bind()" fill="hotpink" cx="0" cy="0" r="12" />
        <line x1="0" y1="0" :x2="state.x2" :y2="state.y2" stroke="hotpink" strokeLinecap="square" strokeWidth="2" />
        <circle ref="targetRef" class="target" cx="300" cy="0" r="12" :fill="tColor" />
      </svg>
      <div class="status">{{text}} </div>
    </div>
</template>

<script setup>
import { watch, ref, computed } from 'vue'
import { useDrag } from '@use-gesture-x/vue3'
const targetRef = ref(null)
const attached = ref(false)
const dragging = ref(false)
const state = ref({ x2: 0, y2: 0 })
const tColor = computed(() => attached.value ? 'hotpink' : 'blue')
const text = computed(() => attached.value ? dragging.value ? '你可以松开指针' : '点被连接起来了!'
  : '连接粉色点和蓝色点')

const bind = useDrag(({ xy: [x, y], active, last, movement: [mx, my] }) => {
  dragging.value = active
  attached.value = document.elementFromPoint(x, y) === targetRef.value
  if (last) {
    state.value = { x2: attached.value ? 300 : 0, y2: 0 }
  } else {
    state.value = { x2: mx, y2: my }
  }
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

.svg {
  position: relative;
  min-width: 328px;
  max-width: 328px;
  overflow: visible;
  touch-action: none;
}

.from {
  cursor: pointer;
  touch-action: none;
}

.status {
  position: absolute;
  font-size: 0.8em;
}

</style>
