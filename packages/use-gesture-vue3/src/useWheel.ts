import { Ref } from 'vue'
import { ref } from 'vue'
import { registerAction, wheelAction } from '@use-gesture/core/actions'
import { UserWheelConfig, Handler, EventTypes, GestureKey } from '@use-gesture/core/types'
import { useRecognizers } from './useRecognizers'

/**
 * Wheel hook.
 *
 * @param {Handler<'wheel'>} handler - the function fired every time the wheel gesture updates
 * @param {UserWheelConfig} config - the config object including generic options and wheel options
 */
export function useWheel<EventType = EventTypes['wheel'], Config extends UserWheelConfig = UserWheelConfig>(
  handler: Ref<Handler<'wheel', EventType>> | Handler<'wheel', EventType>,
  config?: Ref<Config> | Config
) {
  registerAction(wheelAction)
  const handlers = ref({ wheel: handler })
  const configRef = ref(config || {})
  const gestureKey = ref<GestureKey>('wheel')
  console.log('useWheel', configRef, '------')
  return useRecognizers(handlers, configRef, gestureKey)
}
