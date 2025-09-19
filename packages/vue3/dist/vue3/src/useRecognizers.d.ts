import { Ref } from 'vue';
import { GenericOptions, GestureKey, InternalHandlers, NativeHandlers } from '../../core/src/types';
import { VueDOMAttributes } from './types';
type HookReturnType<Config extends GenericOptions> = Config['target'] extends object ? void : (...args: any[]) => VueDOMAttributes;
/**
 * Utility hook called by all gesture hooks and that will be responsible for
 * the internals.
 *
 * @param {InternalHandlers} handlers
 * @param {GenericOptions} config
 * @param {GestureKey} gestureKey
 * @param {NativeHandler} nativeHandlers
 * @returns nothing when config.target is set, a binding function when not.
 */
export declare function useRecognizers<Config extends GenericOptions>(handlers: Ref<InternalHandlers>, config?: Ref<Config | {}>, gestureKey?: Ref<GestureKey>, nativeHandlers?: Ref<NativeHandlers>): HookReturnType<Config>;
export {};
