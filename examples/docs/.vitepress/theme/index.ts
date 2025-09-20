import { App } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { NaiveUIContainer } from '@vitepress-demo-preview/component';
import { defineClientComponentConfig } from '@vitepress-demo-preview/core';
import '@vitepress-demo-preview/component/dist/style.css';
import './index.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', NaiveUIContainer);

    // 自动加载配置
    defineClientComponentConfig({
      copySuccessText: '代码已复制到剪贴板！',
      vueApp: app,
    });
  },
};
