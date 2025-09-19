import { Ref } from 'vue'
import { ref } from 'vue'
import { registerAction, moveAction } from '@use-gesture-x/core/actions'
import { UserMoveConfig, Handler, EventTypes, GestureKey } from '@use-gesture-x/core/types'
import { useRecognizers } from './useRecognizers'

/**
 * Move hook.
 *
 * @param {Handler<'move'>} handler - the function fired every time the move gesture updates
 * @param {UserMoveConfig} config - the config object including generic options and move options
 */
export function useMove<EventType = EventTypes['move'], Config extends UserMoveConfig = UserMoveConfig>(
  handler: Ref<Handler<'move', EventType>> | Handler<'move', EventType>,
  config?: Ref<Config> | Config
) {
  registerAction(moveAction)
  const handlers = ref({ move: handler })
  const configRef = ref(config || {})
  const gestureKey = ref<GestureKey>('move')
  return useRecognizers(handlers, configRef, gestureKey)
}
