import { Ref } from 'vue';
import { UserScrollConfig, Handler, EventTypes } from '../../core/src/types';
/**
 * Scroll hook.
 *
 * @param {Handler<'scroll'>} handler - the function fired every time the scroll gesture updates
 * @param {UserScrollConfig} config - the config object including generic options and scroll options
 */
export declare function useScroll<EventType = EventTypes['scroll'], Config extends UserScrollConfig = UserScrollConfig>(handler: Ref<Handler<'scroll', EventType>> | Handler<'scroll', EventType>, config?: Ref<Config> | Config): (...args: any[]) => import('./types').VueDOMAttributes;
