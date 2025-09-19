import { Ref } from 'vue'
import { ref } from 'vue'
import { registerAction, hoverAction } from '@use-gesture-x/core/actions'
import { EventTypes, UserHoverConfig, Handler, GestureKey } from '@use-gesture-x/core/types'
import { useRecognizers } from './useRecognizers'

/**
 * Hover hook.
 *
 * @param {Handler<'hover'>} handler - the function fired every time the hover gesture updates
 * @param {UserHoverConfig} config - the config object including generic options and hover options
 */
export function useHover<EventType = EventTypes['hover'], Config extends UserHoverConfig = UserHoverConfig>(
  handler: Ref<Handler<'hover', EventType>> | Handler<'hover', EventType>,
  config?: Ref<Config> | Config
) {
  registerAction(hoverAction)
  const handlers = ref({ hover: handler })
  const configRef = ref(config || {})
  const gestureKey = ref<GestureKey>('hover')
  return useRecognizers(handlers, configRef, gestureKey)
}
