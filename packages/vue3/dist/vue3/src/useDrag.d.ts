import { Ref } from 'vue';
import { EventTypes, Handler, UserDragConfig } from '../../core/src/types';
/**
 * Drag hook.
 *
 * @param {Handler<'drag'>} handler - the function fired every time the drag gesture updates
 * @param {UserDragConfig} config - the config object including generic options and drag options
 */
export declare function useDrag<EventType = EventTypes['drag'], Config extends UserDragConfig = UserDragConfig>(handler: Ref<Handler<'drag', EventType>> | Handler<'drag', EventType>, config?: Ref<Config> | Config): (...args: any[]) => import('./types').VueDOMAttributes;
