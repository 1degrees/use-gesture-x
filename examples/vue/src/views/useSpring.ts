import { reactive, computed } from 'vue'
export function useSpring(_props) {
  const props = reactive({ x: 0, y: 0, z: 0, scale: 1, ..._props })
  const style = computed(() => {
    const { x, y, z, scale, ...others } = props
    return {
      transform: `translate3d(${props.x}px, ${props.y}px, ${props.z}px) scale(${props.scale})`,
      ...others,
      transition: '0.2s linear'
    }
  })
  const set = (params) => {
    for (const key in params) {
      if (params[key] !== undefined) props[key] = params[key]
    }
  }
  return [style, { set }]
}
