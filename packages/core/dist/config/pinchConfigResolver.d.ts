import { ModifierKey, PinchConfig, GenericOptions, InternalPinchOptions, State, Vector2 } from '../types';
export declare const pinchConfigResolver: {
    device(this: InternalPinchOptions, _v: any, _k: string, { shared, pointer: { touch } }: {
        shared: GenericOptions;
    } & PinchConfig): "touch" | "pointer" | "gesture" | undefined;
    bounds(_v: any, _k: string, { scaleBounds, angleBounds }: PinchConfig): number[][] | ((state: State) => number[][]);
    threshold(this: InternalPinchOptions, value: number | Vector2, _k: string, config: PinchConfig): [number, number];
    modifierKey(value: ModifierKey | ModifierKey[]): ModifierKey | ModifierKey[];
    pinchOnWheel(value?: boolean): boolean;
    enabled(value?: boolean): boolean;
    eventOptions(value: AddEventListenerOptions | undefined, _k: string, config: {
        shared: GenericOptions;
    }): {
        once?: boolean;
        passive?: boolean;
        signal?: AbortSignal;
        capture?: boolean;
    };
    preventDefault(value?: boolean): boolean;
    triggerAllEvents(value?: boolean): boolean;
    rubberband(value?: number | boolean | Vector2): Vector2;
    from(value: number | Vector2 | ((s: State) => Vector2)): [number, number] | ((s: State) => Vector2) | undefined;
    transform(this: import('../types').InternalGestureOptions, value: any, _k: string, config: {
        shared: GenericOptions;
    }): any;
};
