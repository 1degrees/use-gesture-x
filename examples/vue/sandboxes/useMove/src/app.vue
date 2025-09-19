<template>
  <div class="flex fill center container">
    <div :style="style" class="box" />
    <a v-for="(item, i) in data" :key="i" href="#/useMove" v-bind="bind(item[0], item[1])">
      This link is <span :style="{ color: item[0] }">{{ item[0] }}</span>
    </a>
  </div>
</template>

<script setup>
import { useMove } from '@use-gesture-x/vue3'
import { useSpring } from './useSpring'
import { reactive } from 'vue'
const data = reactive([
  ['steelblue', [0.5, 1]],
  ['hotpink', [1, 0.8]],
  ['coral', [1, 1]]
])
const [style, api] = useSpring({})

const bind = useMove(({ active, xy: [x, y], args: [color, scale], ...others }) => {
  if (active) {
    api.set({ x, y, backgroundColor: color })
  } else {
    api.set({ backgroundColor: '#ffffff00' })
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

.container {
  flex-direction: column;
  font-size: 20px;
  background-color: antiquewhite;
}

.container a {
  color: palevioletred;
  position: relative;
  text-decoration: none;
  padding: 10px 0;
  font-weight: bold;
}

.container > div {
  top: 0;
  left: 0;
  position: fixed;
  width: 180px;
  height: 120px;
  pointer-events: none;
  transform-origin: top left;
}
.box {
  background-color: #ffffff00;
}
</style>
