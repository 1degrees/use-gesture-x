# vue3 手势库工具库

本工程是借鉴 @use-gesture 库，基于vue3 Component API 实现的手势库工具库

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
