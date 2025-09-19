export declare const SUPPORT: {
    isBrowser: false | {
        <K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];
        <K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementDeprecatedTagNameMap[K];
        (tagName: string, options?: ElementCreationOptions): HTMLElement;
    };
    gesture: boolean;
    /**
     * It looks from https://github.com/pmndrs/use-gesture/discussions/421 that
     * some touchscreens using webkits don't have 'ontouchstart' in window. So
     * we're considering that browsers support TouchEvent if they have
     * `maxTouchPoints > 1`
     *
     * Update 16/09/2023: This generates failure on other Windows systems, so reverting
     * back to detecting TouchEvent support only.
     * https://github.com/pmndrs/use-gesture/issues/626
     */
    touch: boolean;
    touchscreen: boolean;
    pointer: boolean;
    pointerLock: boolean;
};
