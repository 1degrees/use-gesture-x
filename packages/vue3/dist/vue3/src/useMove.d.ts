import { Ref } from 'vue';
import { UserMoveConfig, Handler, EventTypes } from '../../core/src/types';
/**
 * Move hook.
 *
 * @param {Handler<'move'>} handler - the function fired every time the move gesture updates
 * @param {UserMoveConfig} config - the config object including generic options and move options
 */
export declare function useMove<EventType = EventTypes['move'], Config extends UserMoveConfig = UserMoveConfig>(handler: Ref<Handler<'move', EventType>> | Handler<'move', EventType>, config?: Ref<Config> | Config): (...args: any[]) => import('./types').VueDOMAttributes;
