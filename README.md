# @use-gesture-x/vue3 手势库工具库

本工程是借鉴 @use-gesture 库，基于vue3 Component API 实现的手势库工具库

[![npm (tag)](https://img.shields.io/npm/v/@use-gesture-x/vue3?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/@use-gesture-x/vue3) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@use-gesture-x/vue3?style=flat&colorA=000000&colorB=000000) ![NPM](https://img.shields.io/npm/l/@use-gesture-x/vue3?style=flat&colorA=000000&colorB=000000) [![Discord Shield](https://img.shields.io/discord/740090768164651008?style=flat&colorA=000000&colorB=000000&label=discord&logo=discord&logoColor=ffffff)](https://discord.gg/poimandres)

@use-gesture-x/vue3 是一个可将更丰富的鼠标和触摸事件绑定到任意组件或视图的库。借助你接收到的数据，设置手势变得十分简单，通常只需几行代码即可完成。

你可以单独使用该库，但要充分发挥其功能，建议将它与文档中提供的useSpring代码片段动画库 或者 vue-use-spring 这类动画库结合使用，不过你也完全可以搭配其他任意动画库。

<p align="middle">
  <img src="https://i.imgur.com/qLKJod3.gif" width="400"/>
  <img src="https://i.imgur.com/H6nXQEq.gif" width="400"/>
  <img src="https://i.imgur.com/THKPrmR.gif" width="400"/>
  <img src="https://i.imgur.com/cuOfqST.gif" width="400"/>
  <img src="https://i.imgur.com/iwZOfT9.gif" width="400"/>
  <img src="https://i.imgur.com/Walt1Ip.gif" width="400"/>
</p>

<p align="middle">
  <a href="https://use-gesture-vue3.netlify.app/">Demo文档地址</a>
  <a href="https://1degrees.github.io/use-gesture-x/">Demo文档地址(备用)</a>
</p>

## 项目结构

本项目采用 monorepo 架构，包含以下几个子项目：

- `packages/core`：核心库，实现手势识别和事件处理
- `packages/vue3`：vue3 手势库工具库，基于 `@use-gesture-x/core` 实现
- `examples/vue`：vue3 手势库 demo 项目，展示如何使用 `@use-gesture-x/vue3`
- `examples/doc`：vue3 手势库 文档说明， 主要介绍如何使用以及API文档

## 快速开始

安装依赖：

```bash
npm install
```

启动Demo项目：

```bash
npm run dev
```

编译Demo项目：

```bash
npm run build
```

启动文档项目：

```bash
npm run doc:dev
```

编译文档项目：

```bash
npm run doc:build
```

编译核心工具库：

```bash
npm run build:lib
```
