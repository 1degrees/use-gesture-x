# useSpring 动画

## useSpring 动画代码

该代码是一个简单的模拟动画的spring效果的代码，案例中多次用到动画效果均使用了该代码。

```vue
import { reactive, computed } from 'vue'
export function useSpring(_props) {
  const props = reactive({ x: 0, y: 0, z: 0, scale: 1, ..._props })
  // 模拟动画的spring效果   
  const style = computed(() => {
    const { x, y, z, scale, stop, ...others } = props
    return {
      transform: `translate3d(${props.x}px, ${props.y}px, ${props.z}px) scale(${props.scale})
        ${props.rotateZ ? 'rotateZ(' + props.rotateZ + 'deg)' : ''}`,
      ...others,
      transition: stop ? 'none' : '0.2s linear'
    }
  })
  // 模拟动画的spring效果，设置参数
  const set = (params) => {
    params.stop = false
    for (const key in params) {
      if (params[key] !== undefined) props[key] = params[key]
    }
  }
  // 模拟动画的spring效果，开始动画
  const start = (params) => {
    params.stop = true
    for (const key in params) {
      if (params[key] !== undefined) props[key] = params[key]
    }
  }
  return [style, { set, start }, props]
}

```
