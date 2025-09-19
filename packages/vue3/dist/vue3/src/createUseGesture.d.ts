import { Ref } from 'vue';
import { Action, GestureHandlers, UserGestureConfig } from '../../core/src/types';
export declare function createUseGesture(actions: Action[]): <Config extends UserGestureConfig = UserGestureConfig>(_handlers: Ref<GestureHandlers> | GestureHandlers, _config?: Ref<Config> | Config) => Config["target"] extends object ? void : (...args: any[]) => import('./types').VueDOMAttributes;
