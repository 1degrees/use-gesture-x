<template>
  <div class="center fill">
    <pre :style="{ position: 'fixed', padding: 40 }" class="drag"> {{ JSON.stringify(wheel, null, '  ') }} </pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useWheel } from '@use-gesture-x/vue3'
import { useSpring } from '../useSpring'

const [style, api] = useSpring()
const wheel = ref({ direction: [0, 0], delta: [0, 0], _movement: [0, 0], offset: [0, 0] })
useWheel(
  ({ direction, delta, _movement, offset }) => {
    wheel.value = { direction, delta, _movement, offset }
  },
  {
    target: window,
    bounds: { top: -500, bottom: 500, left: -800, right: 800 }
  }
)
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

.drag {
  position: absolute;
  height: 120px;
  width: 120px;
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
