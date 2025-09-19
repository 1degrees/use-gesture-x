import { Ref } from 'vue'
import { ref, unref, watch } from 'vue'
import { parseMergedHandlers } from '@use-gesture-x/core'
import { registerAction } from '@use-gesture-x/core/actions'
import { Action, GestureHandlers, UserGestureConfig } from '@use-gesture-x/core/types'
import { useRecognizers } from './useRecognizers'

export function createUseGesture(actions: Action[]) {
  actions.forEach(registerAction)

  return function useGesture<Config extends UserGestureConfig = UserGestureConfig>(
    _handlers: Ref<GestureHandlers> | GestureHandlers,
    _config?: Ref<Config> | Config
  ) {
    const { handlers, nativeHandlers, config } = parseMergedHandlers(unref(_handlers), unref(_config) || {})
    const handlersRef = ref(handlers)
    const configRef = ref(config)
    const NativeHandlersRef = ref(nativeHandlers)
    watch(
      () => [_handlers, _config],
      () => {
        const { handlers, nativeHandlers, config } = parseMergedHandlers(unref(_handlers), unref(_config) || {})
        handlersRef.value = handlers
        configRef.value = config
        NativeHandlersRef.value = nativeHandlers
      },
      { deep: true }
    )
    return useRecognizers<Config>(handlersRef, configRef, undefined, NativeHandlersRef)
  }
}
