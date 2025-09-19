import { Ref } from 'vue'
import { ref } from 'vue'
import { registerAction, pinchAction } from '@use-gesture/core/actions'
import { UserPinchConfig, Handler, EventTypes, GestureKey } from '@use-gesture/core/types'
import { useRecognizers } from './useRecognizers'

/**
 * Pinch hook.
 *
 * @param {Handler<'pinch'>} handler - the function fired every time the pinch gesture updates
 * @param {UserPinchConfig} config - the config object including generic options and pinch options
 */
export function usePinch<EventType = EventTypes['pinch'], Config extends UserPinchConfig = UserPinchConfig>(
  handler: Ref<Handler<'pinch', EventType>> | Handler<'pinch', EventType>,
  config?: Ref<Config> | Config
) {
  registerAction(pinchAction)
  const handlers = ref({ pinch: handler })
  const configRef = ref(config || {})
  const gestureKey = ref<GestureKey>('pinch')
  return useRecognizers(handlers, configRef, gestureKey)
}
