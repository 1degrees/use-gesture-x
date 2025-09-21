import { reactive, computed } from 'vue'
export function useSpring(_props) {
  const props = reactive({ x: 0, y: 0, z: 0, scale: 1, ..._props })
  const style = computed(() => {
    const { x, y, z, scale, immediate, ...others } = props
    return {
      transform: `translate3d(${props.x}px, ${props.y}px, ${props.z}px) scale(${props.scale})
        ${props.rotateZ ? 'rotateZ(' + props.rotateZ + 'deg)' : ''}`,
      ...others,
      transition: immediate ? 'none' : '0.2s linear'
    }
  })
  const set = (params) => {
    params.stop = false
    for (const key in params) {
      if (params[key] !== undefined) props[key] = params[key]
    }
  }
  const start = (params) => {
    params.immediate = true
    for (const key in params) {
      if (params[key] !== undefined) props[key] = params[key]
    }
  }
  return [style, { set, start }, props]
}
