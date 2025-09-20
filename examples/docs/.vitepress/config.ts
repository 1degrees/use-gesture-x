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
  // base: './',
  title: '@use-gesture-x/vue3',
  description: 'Just playing around.',

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '@use-gesture-x/vue3',
      description: '@use-gesture-x/vue3 一个强大的 vue3 手势库',
      themeConfig: {
        nav: [
          {
            text: 'vue3 手势组件仓库',
            link: 'https://github.com/1degrees/use-gesture-x',
          },
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
        ],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'vue3 gesture library',
      description: 'A powerful vue3 gesture library',
      themeConfig: {
        nav: [
          {
            text: 'vue3 gesture library repo',
            link: 'https://github.com/1degrees/use-gesture-x',
          },
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
