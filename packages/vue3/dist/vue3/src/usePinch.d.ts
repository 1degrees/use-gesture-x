import { Ref } from 'vue';
import { UserPinchConfig, Handler, EventTypes } from '../../core/src/types';
/**
 * Pinch hook.
 *
 * @param {Handler<'pinch'>} handler - the function fired every time the pinch gesture updates
 * @param {UserPinchConfig} config - the config object including generic options and pinch options
 */
export declare function usePinch<EventType = EventTypes['pinch'], Config extends UserPinchConfig = UserPinchConfig>(handler: Ref<Handler<'pinch', EventType>> | Handler<'pinch', EventType>, config?: Ref<Config> | Config): (...args: any[]) => import('./types').VueDOMAttributes;
