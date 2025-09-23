import { defineConfig } from 'vitepress';
import {
  componentPreview,
  containerPreview,
} from '@vitepress-demo-preview/plugin';
import { resolve } from 'path';

const alias = {
  '@demo': resolve(__dirname, '../../', './vue/sandboxes'),
  '@': resolve(__dirname, '../../docs'),
};

export default defineConfig({
  base: '/',
  title: '@use-gesture-x/vue3',
  description: '一款强大的 vue3 手势库，@use-gesture-x/vue3, @use-gesture/vue3, 支持拖拽、移动、悬停、滚轮、滚动、缩放、旋转、动画等手势操作。',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '@use-gesture-x/vue3',
      description: '一款强大的 vue3 手势库，@use-gesture-x/vue3, @use-gesture/vue3, 支持拖拽、移动、悬停、滚轮、滚动、缩放、旋转、动画等手势操作。',
      themeConfig: {
        nav: [
          {
            text: 'vue3 手势工具仓库',
            link: 'https://github.com/1degrees/use-gesture-x',
          },
        ],
        sidebar: [
          {
            text: '快速上手',
            link: '/',
            items: [
              { text: '综合 useGesture', link: '/zh/use-gesture' },
              { text: '拖拽 useDrag', link: '/zh/use-drag' },
              { text: '移动 useMove', link: '/zh/use-move' },
              { text: '悬停 useHover', link: '/zh/use-hover' },
              { text: '滚轮 useWheel', link: '/zh/use-wheel' },
              { text: '滚动 useScroll', link: '/zh/use-scroll' },
              { text: '缩放 usePinch', link: '/zh/use-pinch' },
              { text: '动画 useSpring', link: '/zh/use-spring' },
              { text: 'API 及 配置详细', link: '/zh/options' },
            ]
          }
        ],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: '@use-gesture-x/vue3',
      description: 'A powerful Vue3 gesture library: @use-gesture-x/vue3 and @use-gesture/vue3. It supports gesture operations such as dragging, moving, hovering, wheel, scrolling, zooming, rotating, and animation.',
      themeConfig: {
        nav: [
          {
            text: 'vue3 gesture library repo',
            link: 'https://github.com/1degrees/use-gesture-x',
          },
        ],
        sidebar: [
          {
            text: '快速上手',
            link: '/en/',
            items: [
              { text: '综合 useGesture', link: '/en/zh/use-gesture' },
              { text: '拖拽 useDrag', link: '/en/zh/use-drag' },
              { text: '移动 useMove', link: '/en/zh/use-move' },
              { text: '悬停 useHover', link: '/en/zh/use-hover' },
              { text: '滚轮 useWheel', link: '/en/zh/use-wheel' },
              { text: '滚动 useScroll', link: '/en/zh/use-scroll' },
              { text: '缩放 usePinch', link: '/en/zh/use-pinch' },
              { text: '动画 useSpring', link: '/zh/use-spring' },
              { text: 'API 及 配置详细', link: '/en/zh/options' },
            ]
          }
        ],
      },
    },
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/1degrees/use-gesture-x',
      },
    ],
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview, { clientOnly: true, alias });
      md.use(containerPreview, { clientOnly: true, alias });
    },
  },
  vite: {
    resolve: {
      alias,
    },
  },
});
