# vue3 手势组件

@use-gesture-x/vue3 一个强大的 vue3 手势库，设计灵感借鉴 @use-gesture 库，基于vue3 Component API 重新设计并实现的手势库工具库
保持了react 用户的使用习惯，用户可以平滑切换至vue3 项目实战中使用

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

下面由useMove入手介绍简单使用

### 使用方式一：useMove + v-bind方式

使用 useMove API 可以快速绑定移动手势。这种方式适合简单进行侦听移动带来的影响

```vue
<template>
  <div class="flex fill center container">
    <div :style="style" class="box" />
    <a  href="#/useMove" v-bind="bind('red', 1)">
      This link is <span :style="{ color: 'red' }">red</span>
    </a>
  </div>
</template>

<script setup>
import { useMove } from '@use-gesture-x/vue3'
// 引入自定义模拟动画的componentAPI，后续会介绍该部分代码，提供参考
import { useSpring } from './useSpring'
const [style, api] = useSpring({})
const bind = useMove(({ active, xy: [x, y], args: [color, scale], ...others }) => {
  if (active) {
    api.set({ x, y, backgroundColor: color })
  } else {
    api.set({ backgroundColor: '#ffffff00' })
  }
})
</script>
```

**实际效果：**

<preview path="@demo/useMove/src/app.vue" title="useMove" description="vue3 移动API简单使用案例" />

### 使用方式二：使用方式一：useMove + config配置target目标元素

```vue
<template>
  <div class="flex fill center container">
    <div :style="style" class="box" />
    <a ref="target" href="#/useMove" >
      This link is <span :style="{ color: 'red' }">red</span>
    </a>
  </div>
</template>

<script setup>
import { useMove } from '@use-gesture-x/vue3'
// 引入手写简洁动画的useSpring，后续会介绍该部分代码，提供参考
import { useSpring } from './useSpring'
import { ref } from 'vue'
const target = ref(null)
const [style, api] = useSpring({})
useMove(
  ({ active, xy: [x, y], args: [color, scale], ...others }) => {
    if (active) {
    api.set({ x, y, backgroundColor: 'red' })
    } else {
    api.set({ backgroundColor: '#ffffff00' })
    }
  },
  { target }
)
</script>
```

## 功能特点

- 📦 支持多种 UI 框架：Naive UI、Ant Design Vue、Element Plus
- 🔍 代码折叠/展开功能
- 📋 代码一键复制
- 🌈 美观的展示界面
- 🚀 支持 Vue 和 TSX 组件
- 💡 详细的文档说明
