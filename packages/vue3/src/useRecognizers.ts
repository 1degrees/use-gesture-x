/* eslint-disable react-hooks/exhaustive-deps */
import { Ref } from 'vue'
import { ref, watch, unref, onMounted, onUnmounted } from 'vue'
import { Controller } from '@use-gesture-x/core'
import { GenericOptions, GestureKey, InternalHandlers, NativeHandlers } from '@use-gesture-x/core/types'
import { VueDOMAttributes } from './types'

type HookReturnType<Config extends GenericOptions> = Config['target'] extends object
  ? void
  : (...args: any[]) => VueDOMAttributes

/**
 * Utility hook called by all gesture hooks and that will be responsible for
 * the internals.
 *
 * @param {InternalHandlers} handlers
 * @param {GenericOptions} config
 * @param {GestureKey} gestureKey
 * @param {NativeHandler} nativeHandlers
 * @returns nothing when config.target is set, a binding function when not.
 */
export function useRecognizers<Config extends GenericOptions>(
  handlers: Ref<InternalHandlers>,
  config: Ref<Config | {}> = ref({}),
  gestureKey?: Ref<GestureKey>,
  nativeHandlers?: Ref<NativeHandlers>
): HookReturnType<Config> {
  const ctrl = new Controller(unref(handlers))
  watch(
    () => [handlers, nativeHandlers],
    () => {
      ctrl.applyHandlers(unref(handlers), unref(nativeHandlers))
    },
    { immediate: true, deep: true }
  )

  watch(
    () => [config, gestureKey],
    () => {
      ctrl.applyConfig(unref(config), unref(gestureKey))
    },
    { immediate: true, deep: true }
  )

  let effectCleanup: Function | null = null
  const doneEffect = () => {
    if (effectCleanup) effectCleanup()
    const effect = ctrl.effect.bind(ctrl)
    effectCleanup = effect()
  }
  watch(
    () => [handlers, config, gestureKey, nativeHandlers],
    () => doneEffect(),
    { deep: true }
  )

  onMounted(() => doneEffect())

  onUnmounted(ctrl.clean.bind(ctrl))

  // When target is undefined we return the bind function of the controller which
  // returns prop handlers.
  // @ts-ignore
  if (config.target === undefined) {
    const bind = (...args: any[]): any => {
      const callBind = ctrl.bind.bind(ctrl) as any
      const bindObj = callBind(...args)
      return useVueEventProps(bindObj)
    }
    return bind as HookReturnType<Config>
  }
  return undefined as any
}

function useVueEventProps(events: any) {
  const reg = /(on)(.*)(Capture)?/g
  const _events = {} as any
  const keys = Object.keys(events)
  const capitalizeWord = (word: string) => (word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : '')
  keys.forEach((key: string) => {
    const k = key.replace(reg, (_r: string, $1: string, $2: string, $3: string) => {
      return `${$1}${capitalizeWord($2)}${$3 || ''}`
    })
    _events[k] = events[key]
  })
  return _events
}
