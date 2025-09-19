import { Ref } from 'vue';
import { UserWheelConfig, Handler, EventTypes } from '../../core/src/types';
/**
 * Wheel hook.
 *
 * @param {Handler<'wheel'>} handler - the function fired every time the wheel gesture updates
 * @param {UserWheelConfig} config - the config object including generic options and wheel options
 */
export declare function useWheel<EventType = EventTypes['wheel'], Config extends UserWheelConfig = UserWheelConfig>(handler: Ref<Handler<'wheel', EventType>> | Handler<'wheel', EventType>, config?: Ref<Config> | Config): (...args: any[]) => import('./types').VueDOMAttributes;
