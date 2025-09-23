import { ref } from 'vue'
import { GestureRef } from './types'
import { registerAction, pinchAction } from '@use-gesture-x/core/actions'
import { UserPinchConfig, Handler, EventTypes, GestureKey } from '@use-gesture-x/core/types'
import { useRecognizers } from './useRecognizers'

/**
 * Pinch hook.
 *
 * @param {Handler<'pinch'>} handler - the function fired every time the pinch gesture updates
 * @param {UserPinchConfig} config - the config object including generic options and pinch options
 */
export function usePinch<EventType = EventTypes['pinch'], Config extends UserPinchConfig = UserPinchConfig>(
  handler: GestureRef<Handler<'pinch', EventType>>,
  config?: GestureRef<Config>
) {
  registerAction(pinchAction)
  const handlers = ref({ pinch: handler })
  const configRef = ref(config || {})
  const gestureKey = ref<GestureKey>('pinch')
  return useRecognizers(handlers, configRef, gestureKey)
}
