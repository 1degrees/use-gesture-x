import { Ref } from 'vue'
import { ref } from 'vue'
import { registerAction, dragAction } from '@use-gesture/core/actions'
import { EventTypes, Handler, UserDragConfig, GestureKey } from '@use-gesture/core/types'
import { useRecognizers } from './useRecognizers'

/**
 * Drag hook.
 *
 * @param {Handler<'drag'>} handler - the function fired every time the drag gesture updates
 * @param {UserDragConfig} config - the config object including generic options and drag options
 */
export function useDrag<EventType = EventTypes['drag'], Config extends UserDragConfig = UserDragConfig>(
  handler: Ref<Handler<'drag', EventType>> | Handler<'drag', EventType>,
  config?: Ref<Config> | Config
) {
  registerAction(dragAction)
  const handlers = ref({ drag: handler })
  const configRef = ref(config || {})
  const gestureKey = ref<GestureKey>('drag')
  return useRecognizers(handlers, configRef, gestureKey)
}
