# @use-gesture-x/vue3 配置选项说明文档

### Vue 手势交互

导出了几个可以处理不同手势的钩子函数。

| Hook         | 描述                                |
| ------------ | ------------------------------------------ |
| `useDrag`    | 处理拖拽手势                   |
| `useMove`    | 处理鼠标移动事件                  |
| `useHover`   | 处理鼠标悬停事件 |
| `useScroll`  | 处理滚动事件                      |
| `useWheel`   | 处理滚轮事件                       |
| `usePinch`   | 处理缩放、旋转手势                  |
| `useGesture` | 处理多个手势在一个钩子中      |

### Gesture 事件回调

> 所有事件回调都接收一个状态对象作为参数，该对象包含有关手势事件的详细信息。

```jsx
{
    onDrag: (state) => doSomethingWith(state),
    onDragStart: (state) => doSomethingWith(state),
    onDragEnd: (state) => doSomethingWith(state),
    onPinch: (state) => doSomethingWith(state),
    onPinchStart: (state) => doSomethingWith(state),
    onPinchEnd: (state) => doSomethingWith(state),
    onScroll: (state) => doSomethingWith(state),
    onScrollStart: (state) => doSomethingWith(state),
    onScrollEnd: (state) => doSomethingWith(state),
    onMove: (state) => doSomethingWith(state),
    onMoveStart: (state) => doSomethingWith(state),
    onMoveEnd: (state) => doSomethingWith(state),
    onWheel: (state) => doSomethingWith(state),
    onWheelStart: (state) => doSomethingWith(state),
    onWheelEnd: (state) => doSomethingWith(state),
    onHover: (state) => doSomethingWith(state)
  }
```

### Gesture 回调函数接收的参数定义

> 所有事件回调都接收一个状态对象作为参数，下面是详细介绍状态对象的信息。

```jsx
const bind = useXXXX(state => {
  const {
    event,         // 源事件
    xy,            // [x,y] 值（指针位置或滚动偏移量
    initial,       // 手势开始时的 xy 值
    intentional,   // 是否是有意的手势
    delta,         // 移动增量（移动 - 上一个移动）
    offset,        // 自第一次手势以来的偏移量
    lastOffset,    // 上一个手势开始时的偏移量
    movement,      // 偏移量与 lastOffset 的位移
    velocity,      // 手势每轴的动量（单位：px/ms）
    distance,      // 每个轴的偏移量距离
    direction,     // 每个轴的方向
    overflow,      // 是否超出边界（每个轴）
    startTime,     // 手势开始时间（ms）
    timeDelta,     // 与前一个事件的时间差（ms）
    elapsedTime,   // 手势已用时间（ms）
    timeStamp,     // 事件的时间戳（ms）
    type,          // 事件类型
    target,        // 事件目标元素
    currentTarget, // 事件当前目标元素
    first,         // 当它是第一个事件时为 true
    last,          // 当它是最后一个事件时为 true
    active,        // 当手势活动时为 true
    memo,          // 上一次处理器运行返回的值
    cancel,        // 你可以调用的用于中断某些手势的函数
    canceled,      // 当手势被取消（drag and pinch）时为 true
    down,          // 当鼠标按钮或触摸点接触屏幕时为 true
    buttons,       // 按下的按钮数量
    touches,       // 接触屏幕的手指数量
    args,          // 传递给 bind 函数的参数（React 仅支持）
    ctrlKey,       // 当 control 键被按下时为 true
    altKey,        // "      "  alt     "      "
    shiftKey,      // "      "  shift   "      "
    metaKey,       // "      "  meta    "      "
    locked,        // document.pointerLockElement 是否已设置
    dragging,      // is the component currently being dragged
    moving,        // "              "              "  moved
    scrolling,     // "              "              "  scrolled
    wheeling,      // "              "              "  wheeled
    pinching       // "              "              "  pinched
  } = state
})
```

### Gesture 配置选项

以下是可应用于手势的所有选项。

> 并非所有选项都适用于所有手势。在下表中，xy 代表基于坐标的手势，包括拖动（drag）、移动（move）、滚轮（wheel）和滚动（scroll）。

| 配置项                                   |                                           手势                                            | 描述                                                                                                                                                                                          |
| ----------------------------------------- | :-------------------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`enabled`](#enabled)                     |                                            **all**                                            | 该手势是否启用.                                                                                                                                                                      |
| [`eventOptions`](#eventoptions)           | 允许你自定义事件是采用被动模式还是捕获模式。此设置会覆盖共享选项。 |
| [`from`](#from)                           |                                            **all**                                            | 初始位置offset应该从…… 开始. 例如：`from: [0, 0]` 表示初始位置offset应该从 `[0, 0]` 开始.                                                                                                                                                     |
| [`threshold`](#threshold)                 |                                            **all**                                            | 只有当手势位移大于阈值时，处理器才会触发。.                                                                                                              |
| [`preventDefault`](#preventdefault)       |                                            **all**                                            | 将阻止由处理程序触发的所有事件的preventDefault.                                                                                                                                           |
| [`triggerAllEvents`](#triggerallevents)   |                                            **all**                                            | 强制处理器即使在非故意位移的情况下也会触发（忽略threshold）。在这种情况下，状态中的intentional属性将保持为false，直到达到阈值。 |
| [`axis`](#axis)                           |                                            **all**                                            | 只有在指定轴上检测到移动时，你的处理器才会触发。                                                                                                                      |
| [`axisThreshold`](#axisthreshold)         |                                            **xy**                                             | 轴是根据阈值计算的。对于拖动操作，阈值按设备类型指定。                                                                                                        |
| [`bounds`](#bounds)                       |                                            **xy**                                             | 将手势 “偏移量” 限制在指定范围内                                                                                                                                                |
| [`scaleBounds`](#scalebounds)             |                                           **pinch**                                           | 将缩放 “偏移量” 限制在指定范围内。                                                                                                                                                  |
| [`angleBounds`](#anglebounds)             |                                           **pinch**                                           | 将角度 “偏移量” 限制在指定范围内.                                                                                                                                                   |
| [`modifierKey`](#modifierkey)             |                                           **pinch**                                           | 滚动时触发缩放的修饰键。默认为 'ctrlKey'。可以为 null。                                                                                                        |
| `pinchOnWheel`                            |                                           **pinch**                                           | 如果为 false，则会禁用滚轮捏合操作。                                                                                                                                                |
| [`rubberband`](#rubberband)               |                                            **all**                                            | 手势越界时的弹性系数。当设置为true时，弹性系数将默认为0.15                                                      |
| [`transform`](#transform)                 |                                            **all**                                            | 一个可用于转换指针值的函数。它有助于将屏幕坐标映射到自定义空间坐标，例如画布坐标。                                                      |
| [`filterTaps`](#filtertaps)               |                                           **drag**                                            | 如果为true，则当用户只是点击该组件时，该组件不会触发你的拖动逻辑。                                                                                                  |
| [`tapsThreshold`](#tapsthreshold)         |                                           **drag**                                            | 使用filterTaps选项时，自定义位移触发的轻触次数。默认值为3。                                                                                                       |
| [`preventScroll`](#preventscroll)         |                                           **drag**                                            | 如果设置了该参数，拖动将在延迟时长（以ms为单位）后触发，并且会阻止窗口滚动。当设置为true时，preventScroll的默认值为 250 毫秒。                        |
| [`preventScrollAxis`](#preventscrollaxis) |                                           **drag**                                            | 如果设置了该属性，除非超过了 preventScroll 的持续时间，否则拖动将允许沿坐标轴方向滚动。默认情况下仅为 “y” 轴。                                                         |
| [`pointer.touch`](#pointertouch)          |                                        **drag,pinch**                                         | 如果为 true，则在支持触摸的设备上，拖动和捏合操作将使用触摸事件。[详情](#pointertouch).                                                                                          |
| [`pointer.capture`](#pointercapture)      |                                           **drag**                                            | 如果为 false，拖动将不会使用 setPointerCapture，也不会将 pointerMove 事件附加到窗口 [详情](#pointercapture).                                                                 |
| `pointer.mouse`                           |                                           **drag**                                            | 如果为true，则在可能的情况下，拖拽将使用鼠标事件监听器而非指针监听器。                                                                                                           |
| [`pointer.buttons`](#pointerbuttons)      |                                           **drag**                                            | 触发拖动手势的按钮组合. [详情](#pointerbuttons).                                                                                                           |
| [`pointer.lock`](#pointerlock)            |                                           **drag**                                            | 如果为 true，指针将在拖动开始时进入指针锁定模式，并在拖动结束时退出指针锁定模式。. [Read more below](#pointerlock).                                                         |
| [`pointer.keys`](#pointerkeys)            |                                           **drag**                                            | 默认情况下，当可拖动元素获得焦点时，拖动手势可通过方向键触发。将keys设置为false则不会添加键盘事件监听器。                                     |
| [`delay`](#delay)                         |                                           **drag**                                            | 如果设置了该处理程序，它将延迟一段时间（以ms为单位）—— 或者在用户开始移动时延迟。当设置为true时，delay的默认值为 180 毫秒。                                     |
| [`swipe.distance`](#swipedistance)        |                                           **drag**                                            | 拖动手势需要移动的每个轴的最小距离（以 “像素” 为单位），以触发滑动。                                                                                                     |
| [`swipe.velocity`](#swipevelocity)        |                                           **drag**                                            | 拖动手势在指针释放前需要达到的每个轴的最小速度（单位为像素/毫秒）。                                                                                    |
| [`swipe.duration`](#swipeduration)        |                                           **drag**                                            | 检测到一次滑动的最长持续时间（以毫秒为单位）。                                                                                                                                       |
| `keyboardDisplacement`                    |                                           **drag**                                            | 箭头键模拟的距离（以像素为单位）。默认值为10。                                                                                                                                 |
| `mouseOnly`                               |                                        **hover, move**                                        | 如果希望在非鼠标事件上触发hover（悬停）或move（移动）处理器，请将其设置为false。在需要在支持触摸的设备上执行逻辑的情况下，这是一个很有用的选项。                  |
