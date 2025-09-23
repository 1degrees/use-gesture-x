<template>
  <div className="center fill gesture-scroll">
    <pre class="text">{{ JSON.stringify(wheel, null, 2) }}</pre>
    <div ref="target" class="hidden-y">
      <div class="card" v-for="item in items" :key="item" :style="{backgroundImage: item.css, height: item.height + 'px'}"></div>
      <div :style="{ height: '1000px' }" />
    </div>
  </div>
</template>

<script setup>
import { useScroll } from '@use-gesture-x/vue3'
import { ref } from 'vue'
import { items } from './items'
const cards = ref(...items.reverse())
const target = ref(null)
const scroll = ref({ direction: 0, delta: 0, movement: 0, offset: 0 })
useScroll(
  ({ direction, delta, movement, offset }) => {
    scroll.value = { direction, delta, movement, offset }
  },
  { target, eventOptions: { capture: true } }
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
  overflow: auto;
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
