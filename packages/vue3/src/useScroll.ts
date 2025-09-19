import { Ref } from 'vue'
import { ref } from 'vue'
import { registerAction, scrollAction } from '@use-gesture-x/core/actions'
import { UserScrollConfig, Handler, EventTypes, GestureKey } from '@use-gesture-x/core/types'
import { useRecognizers } from './useRecognizers'

/**
 * Scroll hook.
 *
 * @param {Handler<'scroll'>} handler - the function fired every time the scroll gesture updates
 * @param {UserScrollConfig} config - the config object including generic options and scroll options
 */
export function useScroll<EventType = EventTypes['scroll'], Config extends UserScrollConfig = UserScrollConfig>(
  handler: Ref<Handler<'scroll', EventType>> | Handler<'scroll', EventType>,
  config?: Ref<Config> | Config
) {
  registerAction(scrollAction)
  const handlers = ref({ scroll: handler })
  const configRef = ref(config || {})
  const gestureKey = ref<GestureKey>('scroll')
  return useRecognizers(handlers, configRef, gestureKey)
}
