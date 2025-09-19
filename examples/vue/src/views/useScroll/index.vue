<template>
  <div className="center fill">
    <pre :style="{ position: 'fixed', padding: 40 }">{{ JSON.stringify(scroll, null, '  ') }}</pre>
    <div ref="target" :style="{ background: 'lightblue', height: '400px', overflow: 'scroll' }">
      <div :style="{ height: '1000px' }" />
    </div>
  </div>
</template>

<script setup>
import { useScroll } from '@use-gesture-x/vue3'
import { ref } from 'vue'

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
</style>
