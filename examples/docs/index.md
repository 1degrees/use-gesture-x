# vue3 手势插件

@use-gesture-x/vue3 一个非常易用且功能强大的 vue3 手势库。

设计灵感借鉴于 @use-gesture, 基于vue3 Component API 重新设计并实现的手势工具集合

保持了react 用户的使用习惯，开发者可以平滑无障碍切换至vue3 项目实战中使用

## 使用方式

### 安装 @use-gesture-x/vue3

```bash

npm install @use-gesture-x/vue3

yarn add @use-gesture-x/vue3

pnpm install @use-gesture-x/vue3

```

### @use-gesture-x/vue3 component API 介绍

useDrag 拖拽、useMove 移动、useHover 悬停、useWheel 滚轮、useScroll 滚动、

usePinch 缩放、旋转、useGesture 自定义手势。

下面由useDrag入手介绍简单使用

### 实现效果

> 通过拖拽红球，当拖拽至篮球位子，我们将红篮球连接起来。

<preview path="@demo/dotsConnect/src/app.vue" title="useDrag 拖拽连接两个点" description="" />

@use-gesture-x/vue3提供了两种方式实现，具体可看下方实现

### 使用方式一：useDrag + v-bind方式

使用 useDrag API 可以快速绑定移动手势。这种方式适合简单进行侦听移动带来的影响

```vue
<template>
  <div class="flex fill center container">
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
```

### 使用方式二：使用方式一：useDrag + config配置target目标元素

```vue
<template>
  <div class="flex fill center container">
      <svg class="svg" viewBox="-14.5 -14.5 328 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle class="from" ref="dragRef" fill="hotpink" cx="0" cy="0" r="12" />
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
const dragRef = ref(null)
const attached = ref(false)
const dragging = ref(false)
const state = ref({ x2: 0, y2: 0 })
const tColor = computed(() => attached.value ? 'hotpink' : 'blue')
const text = computed(() => attached.value ? dragging.value ? '你可以松开指针' : '点被连接起来了!'
  : '连接粉色点和蓝色点')

useDrag(({ xy: [x, y], active, last, movement: [mx, my] }) => {
  dragging.value = active
  attached.value = document.elementFromPoint(x, y) === targetRef.value
  if (last) {
    state.value = { x2: attached.value ? 300 : 0, y2: 0 }
  } else {
    state.value = { x2: mx, y2: my }
  }
}, { target: dragRef })
</script>
```

**实际效果如上一致**

## 功能特点

- 📦 支持多种设备手势交互如鼠标、触摸板、触摸屏等
- 🔍 拖拽、移动、悬停、缩放、旋转 等自定义手势功能
- 📋 代码一键复制
- 🌈 丝滑、美观的体验感受
- 🚀 支持 Vue3 开箱即用
- 💡 详细使用见文档说明
