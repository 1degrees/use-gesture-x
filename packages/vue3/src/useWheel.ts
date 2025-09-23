import { ref } from 'vue'
import { GestureRef } from './types'
import { registerAction, wheelAction } from '@use-gesture-x/core/actions'
import { UserWheelConfig, Handler, EventTypes, GestureKey } from '@use-gesture-x/core/types'
import { useRecognizers } from './useRecognizers'

/**
 * Wheel hook.
 *
 * @param {Handler<'wheel'>} handler - the function fired every time the wheel gesture updates
 * @param {UserWheelConfig} config - the config object including generic options and wheel options
 */
export function useWheel<EventType = EventTypes['wheel'], Config extends UserWheelConfig = UserWheelConfig>(
  handler: GestureRef<Handler<'wheel', EventType>>,
  config?: GestureRef<Config>
) {
  registerAction(wheelAction)
  const handlers = ref({ wheel: handler })
  const configRef = ref(config || {})
  const gestureKey = ref<GestureKey>('wheel')
  return useRecognizers(handlers, configRef, gestureKey)
}
