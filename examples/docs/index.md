# vue3 手势组件

@use-gesture-x/vue3 一个强大的 vue3 手势库，设计灵感借鉴 @use-gesture 库，基于vue3 Component API 重新设计并实现的手势库工具库

## 使用方式

VitePress Demo Preview 提供了两种使用方式：组件形式和自定义容器形式。

### 方式一：组件形式预览

使用 `<preview>` 组件可以快速预览组件。这种方式适合简单的组件展示。

```vue
<preview
  path="@/components/ComponentPreview.vue"
  title="组件标题"
  description="组件描述信息"
/>
```

**实际效果：**

<preview path="@demo/useDrag/src/app.vue" title="useDrag" description="vue3 拖拽 hooks 简单使用案例" />

### 方式二：自定义容器形式预览

使用自定义容器 `:::preview` 可以提供更灵活的预览方式，适合需要更多配置的情况。

```md
:::preview 容器标题 || 容器描述信息

demo-preview=@/components/ContainerPreview.vue

:::
```

**实际效果：**

:::preview 容器预览 || 通过自定义容器形式预览示例组件

demo-preview=@/components/ContainerPreview.vue

:::

### 方式三：预览 TSX 组件

本插件同样支持预览 TSX 组件，使用方式与 Vue 组件类似。

```md
:::preview 容器标题 || 容器描述信息

demo-preview=./components/ContainerTsxPreview.tsx

:::
```

**实际效果：**

:::preview TSX组件预览 || 通过自定义容器形式预览TSX示例组件

demo-preview=./components/ContainerTsxPreview.tsx

:::

## 功能特点

- 📦 支持多种 UI 框架：Naive UI、Ant Design Vue、Element Plus
- 🔍 代码折叠/展开功能
- 📋 代码一键复制
- 🌈 美观的展示界面
- 🚀 支持 Vue 和 TSX 组件
- 💡 详细的文档说明

## 配置选项

| 参数              | 说明     | 类型   | 默认值     |
| ----------------- | -------- | ------ | ---------- |
| path/demo-preview | 组件路径 | string | -          |
| title             | 组件标题 | string | '默认标题' |
| description       | 组件描述 | string | '描述内容' |
