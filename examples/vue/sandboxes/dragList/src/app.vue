<template>
  <div class="flex fill center container">
    <div class="content">
      <template v-for="(spring, i) in springs" :key="i">
        <div
          v-bind="bind(i)"
          :style="getStyle(spring)"
        >
        {{items[i]}}
        </div>
    </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch, reactive, ref, computed } from 'vue'
import { useDrag } from '@use-gesture-x/vue3'
import { useSpring } from './useSpring'
import clamp from 'lodash.clamp'
import swap from 'lodash-move'

const fn =
  (order: number[], active = false, originalIndex = 0, curIndex = 0, y = 0) =>
  (index: number) => active && index === originalIndex
    ? { y: curIndex * 100 + y, scale: 1.1, zIndex: 1, shadow: 15 }
      : { y: order.indexOf(index) * 100, scale: 1, zIndex: 0, shadow: 1 }
// 解释：产生多个元素的动画
const useSprings = (order: number[]) => order.map((_, i) => useSpring(fn(order)(i)))
const items = 'Lorem ipsum dolor sit'.split(' ')
const order = ref(items.map((_, i) => i))
const springs = useSprings(order.value)
const getStyle = (spring) => {
  return {
    ...spring[0].value,
    zIndex: spring[2].zIndex,
    boxShadow: `rgba(0, 0, 0, 0.15) 0px ${spring[2].shadow}px ${2 * spring[2].shadow}px 0px`,
  }
}
const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
  const curIndex = order.value.indexOf(originalIndex)
  const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
  const newOrder = swap(order.value, curIndex, curRow)
  springs.forEach((spring, i) => {
    const api = spring[1]
    api.set(fn(newOrder, active, originalIndex, curIndex, y)(i))
  })
  if (!active) order.value = newOrder
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
  align-items: flex-start;
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

.content {
  padding-top: 24px;
  width: 320px;
}

.content > div {
  position: absolute;
  width: 320px;
  height: 80px;
  transform-origin: 50% 50% 0px;
  border-radius: 5px;
  color: white;
  line-height: 40px;
  padding-left: 32px;
  font-size: 14.5px;
  background: lightblue;
  text-transform: uppercase;
  letter-spacing: 2px;
  touch-action: none;
}

.content > div:nth-child(1) {
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
}
.content > div:nth-child(2) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
.content > div:nth-child(3) {
  background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%);
}
.content > div:nth-child(4) {
  background: linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%);
}

</style>
