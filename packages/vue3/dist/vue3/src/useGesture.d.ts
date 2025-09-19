import { Ref } from 'vue';
import { GestureHandlers, UserGestureConfig, EventTypes, AnyHandlerEventTypes } from '../../core/src/types';
/**
 * @public
 *
 * The most complete gesture hook, allowing support for multiple gestures.
 *
 * @param {GestureHandlers} handlers - an object with on[Gesture] keys containg gesture handlers
 * @param {UserGestureConfig} config - the full config object
 */
export declare function useGesture<HandlerTypes extends AnyHandlerEventTypes = EventTypes, Config extends UserGestureConfig = UserGestureConfig>(handlers: Ref<GestureHandlers<HandlerTypes>> | GestureHandlers<HandlerTypes>, config?: Ref<Config> | Config): Config["target"] extends object ? void : (...args: any[]) => import('./types').VueDOMAttributes;
