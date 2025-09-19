import { Ref } from 'vue';
import { EventTypes, UserHoverConfig, Handler } from '../../core/src/types';
/**
 * Hover hook.
 *
 * @param {Handler<'hover'>} handler - the function fired every time the hover gesture updates
 * @param {UserHoverConfig} config - the config object including generic options and hover options
 */
export declare function useHover<EventType = EventTypes['hover'], Config extends UserHoverConfig = UserHoverConfig>(handler: Ref<Handler<'hover', EventType>> | Handler<'hover', EventType>, config?: Ref<Config> | Config): (...args: any[]) => import('./types').VueDOMAttributes;
