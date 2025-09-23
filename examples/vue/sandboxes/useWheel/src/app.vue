<template>
  <div className="center fill gesture-scroll">
    <pre class="text">{{ JSON.stringify(wheel, null, 2) }}</pre>
    <div ref="target" class="hidden-y">
      <div class="card" v-for="item in items" :key="item" :style="{backgroundImage: item.css, height: item.height + 'px'}"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useWheel } from '@use-gesture-x/vue3'
import { useSpring } from './useSpring'
import { items } from './items'
const target = ref(null)
const [style, api] = useSpring()
const wheel = ref({ direction: [0, 0], delta: [0, 0], movement: [0, 0], offset: [0, 0] })
useWheel(
  ({ direction, delta, first, memo, movement, offset }) => {
    wheel.value = { direction, delta, movement, offset }
    target.value.scrollTop = offset[1]
  },
  {
    target,
    bounds: { top: 0, bottom: 3000 }
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

.gesture-scroll {
  height: 360px;
}

.hidden-y {
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  background: lightblue;
  align-items: center;
}

.text {
  position: fixed;
  color: #fff;
}

.card {
 width: 400px;
 flex: 0 0 auto;
}
</style>