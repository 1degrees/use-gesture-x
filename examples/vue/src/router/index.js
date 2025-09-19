import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/useDrag',
    children: [
      {
        name: 'useDrag',
        path: '/useDrag',
        component: () => import('@sandboxes/useDrag/src/app.vue')
      },
      {
        name: 'useMove',
        path: '/useMove',
        component: () => import('@sandboxes/useMove/src/app.vue')
      },
      {
        name: 'usePinch',
        path: '/usePinch',
        component: () => import('@sandboxes/usePinch/src/app.vue')
      },
      {
        name: 'useWheel',
        path: '/useWheel',
        component: () => import('@sandboxes/useWheel/src/app.vue')
      },
      {
        name: 'useScroll',
        path: '/useScroll',
        component: () => import('@sandboxes/useScroll/src/app.vue')
      },
      {
        name: 'useHover',
        path: '/useHover',
        component: () => import('@sandboxes/useHover/src/app.vue')
      },
      {
        name: 'useGesture',
        path: '/useGesture',
        component: () => import('@sandboxes/useGesture/src/app.vue')
      },
      {
        name: 'cardZoom',
        path: '/cardZoom',
        component: () => import('@sandboxes/cardZoom/src/app.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // TODO: 在这里添加你的路由拦截逻辑
  // 例如：检查用户是否登录、权限验证等
  next()
})

// 全局解析守卫
router.beforeResolve((to, from, next) => {
  // 在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用
  next()
})

// 全局后置钩子
router.afterEach((to, from) => {
  // 导航完成后的回调
  // 不接受 next 函数，也不会改变导航本身
})

export default router
