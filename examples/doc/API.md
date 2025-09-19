### Available hooks

@use-gesture-x/vue3 exports several hooks that can handle different gestures:

| Hook         | Description                                |
| ------------ | ------------------------------------------ |
| `useDrag`    | Handles the drag gesture                   |
| `useMove`    | Handles mouse move events                  |
| `useHover`   | Handles mouse enter and mouse leave events |
| `useScroll`  | Handles scroll events                      |
| `useWheel`   | Handles wheel events                       |
| `usePinch`   | Handles the pinch gesture                  |
| `useGesture` | Handles multiple gestures in one hook      |

### Shared options

Shared options deal with how <UseGesture /> will set event listeners.

| Option                          | Description                                                                                                     |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`target`](#target-react-only)  | Lets you specify a dom node or React ref you want to attach the gesture to.                                     |
| [`eventOptions`](#eventoptions) | Lets you customize if you want events to be passive or captured.                                                |
| [`window`](#window)             | Lets you specify which window element the gesture should bind events to (only relevant for the `drag` gesture). |
| [`enabled`](#enabled)           | When set to `false` none of your handlers will be fired.                                                        |

### Gesture options

Here are all options that can be applied to gestures.

> All options are not available to all gestures. In the table below **xy** designates coordinates-based gestures: drag, move, wheel and scroll.

| Options                                   |                                           Gestures                                            | Description                                                                                                                                                                                          |
| ----------------------------------------- | :-------------------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`enabled`](#enabled)                     |                                            **all**                                            | Whether the gesture is enabled.                                                                                                                                                                      |
| [`eventOptions`](#eventoptions)           | Lets you customize if you want events to be passive or captured. Overrides the shared option. |
| [`from`](#from)                           |                                            **all**                                            | The initial position `offset` should start from.                                                                                                                                                     |
| [`threshold`](#threshold)                 |                                            **all**                                            | The handler will fire only when the gesture displacement is greater than the threshold.                                                                                                              |
| [`preventDefault`](#preventdefault)       |                                            **all**                                            | Will `preventDefault` all events triggered by the handler.                                                                                                                                           |
| [`triggerAllEvents`](#triggerallevents)   |                                            **all**                                            | Forces the handler to fire even for non intentional displacement (ignores the `threshold`). In that case, the `intentional` attribute from state will remain `false` until the threshold is reached. |
| [`axis`](#axis)                           |                                            **all**                                            | Your handler will only trigger if a movement is detected on the specified axis.                                                                                                                      |
| [`axisThreshold`](#axisthreshold)         |                                            **xy**                                             | Axes are calculated based on a threshold. For drag, thresholds are specified per device type.                                                                                                        |
| [`bounds`](#bounds)                       |                                            **xy**                                             | Limits the gesture `offset` to the specified bounds.                                                                                                                                                 |
| [`scaleBounds`](#scalebounds)             |                                           **pinch**                                           | Limits the scale `offset` to the specified bounds.                                                                                                                                                   |
| [`angleBounds`](#anglebounds)             |                                           **pinch**                                           | Limits the angle `offset` to the specified bounds.                                                                                                                                                   |
| [`modifierKey`](#modifierkey)             |                                           **pinch**                                           | The modifier key that triggers a scale when wheeling. Defaults to `'ctrlKey'`. Can be `null`.                                                                                                        |
| `pinchOnWheel`                            |                                           **pinch**                                           | If `false`, pinching with the wheel will be disabled.                                                                                                                                                |
| [`rubberband`](#rubberband)               |                                            **all**                                            | The elasticity coefficient of the gesture when going out of bounds. When set to `true`, the elasticity coefficient will be defaulted to `0.15`                                                       |
| [`transform`](#transform)                 |                                            **all**                                            | A function that you can use to transform pointer values. Useful to map your screen coordinates to custom space coordinates such as a canvas.                                                         |
| [`filterTaps`](#filtertaps)               |                                           **drag**                                            | If `true`, the component won't trigger your drag logic if the user just clicked on the component.                                                                                                    |
| [`tapsThreshold`](#tapsthreshold)         |                                           **drag**                                            | Customize the displacement triggering taps when using the `filterTaps` option. Default is `3`.                                                                                                       |
| [`preventScroll`](#preventscroll)         |                                           **drag**                                            | If set, the drag will be triggered after the duration of the delay (in `ms`) and will prevent window scrolling. When set to `true`, `preventScroll` is defaulted to `250ms`.                         |
| [`preventScrollAxis`](#preventscrollaxis) |                                           **drag**                                            | If set, the drag will allow scrolling in the direction of the axis/axes unless the preventScroll duration has elapsed. Defaults to only 'y'.                                                         |
| [`pointer.touch`](#pointertouch)          |                                        **drag,pinch**                                         | If `true`, drag and pinch will use touch events on touch-enabled devices. [Read more below](#pointertouch).                                                                                          |
| [`pointer.capture`](#pointercapture)      |                                           **drag**                                            | If `false`, drag will not use `setPointerCapture` and attach `pointerMove` events to the window. [Read more below](#pointercapture).                                                                 |
| `pointer.mouse`                           |                                           **drag**                                            | If `true`, drag will use mouse event listeners instead of pointer listeners when possible.                                                                                                           |
| [`pointer.buttons`](#pointerbuttons)      |                                           **drag**                                            | Combination of buttons that triggers the drag gesture. [Read more below](#pointerbuttons).                                                                                                           |
| [`pointer.lock`](#pointerlock)            |                                           **drag**                                            | If `true`, the pointer will enter pointer lock mode when drag starts, and exit pointer lock when drag ends. [Read more below](#pointerlock).                                                         |
| [`pointer.keys`](#pointerkeys)            |                                           **drag**                                            | By default, the drag gesture can be triggered by arrow keys when the draggable element is focused. Setting `keys` to `false` won't add keyboard event listeners.                                     |
| [`delay`](#delay)                         |                                           **drag**                                            | If set, the handler will be delayed for the duration of the delay (in `ms`) — or if the user starts moving. When set to `true`, `delay` is defaulted to `180ms`.                                     |
| [`swipe.distance`](#swipedistance)        |                                           **drag**                                            | The minimum distance per axis (in `pixels`) the drag gesture needs to travel to trigger a swipe.                                                                                                     |
| [`swipe.velocity`](#swipevelocity)        |                                           **drag**                                            | The minimum velocity per axis (in `pixels / ms`) the drag gesture needs to reach before the pointer is released.                                                                                     |
| [`swipe.duration`](#swipeduration)        |                                           **drag**                                            | The maximum duration in milliseconds that a swipe is detected.                                                                                                                                       |
| `keyboardDisplacement`                    |                                           **drag**                                            | The distance (in `pixels`) emulated by arrow keys. Default is `10`.                                                                                                                                  |
| `mouseOnly`                               |                                        **hover, move**                                        | Set to `false` if you want your `hover` or `move` handlers to be triggered on non-mouse events. This is a useful option in case you want to perform logic on touch-enabled devices.                  |

## Options explained