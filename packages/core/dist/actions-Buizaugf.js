var Z = Object.defineProperty;
var tt = (s, i, t) => i in s ? Z(s, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[i] = t;
var l = (s, i, t) => tt(s, typeof i != "symbol" ? i + "" : i, t);
import { V as a, c as et } from "./utils-Bc2CPI0y.js";
const Y = {
  pointer: { start: "down", change: "move", end: "up" },
  mouse: { start: "down", change: "move", end: "up" },
  touch: { start: "start", change: "move", end: "end" },
  gesture: { start: "start", change: "change", end: "end" }
};
function L(s) {
  return s ? s[0].toUpperCase() + s.slice(1) : "";
}
const st = ["enter", "leave"];
function it(s = !1, i) {
  return s && !st.includes(i);
}
function Yt(s, i = "", t = !1) {
  const e = Y[s], o = e && e[i] || i;
  return "on" + L(s) + L(o) + (it(t, o) ? "Capture" : "");
}
const ot = ["gotpointercapture", "lostpointercapture"];
function Ht(s) {
  let i = s.substring(2).toLowerCase();
  const t = !!~i.indexOf("passive");
  t && (i = i.replace("passive", ""));
  const e = ot.includes(i) ? "capturecapture" : "capture", o = !!~i.indexOf(e);
  return o && (i = i.replace("capture", "")), { device: i, capture: o, passive: t };
}
function Xt(s, i = "") {
  const t = Y[s], e = t && t[i] || i;
  return s + e;
}
function C(s) {
  return "touches" in s;
}
function H(s) {
  return C(s) ? "touch" : "pointerType" in s ? s.pointerType : "mouse";
}
function nt(s) {
  return Array.from(s.touches).filter(
    (i) => {
      var t, e;
      return i.target === s.currentTarget || ((e = (t = s.currentTarget) == null ? void 0 : t.contains) == null ? void 0 : e.call(t, i.target));
    }
  );
}
function rt(s) {
  return s.type === "touchend" || s.type === "touchcancel" ? s.changedTouches : s.targetTouches;
}
function X(s) {
  return C(s) ? rt(s)[0] : s;
}
function S(s, i) {
  try {
    const t = i.clientX - s.clientX, e = i.clientY - s.clientY, o = (i.clientX + s.clientX) / 2, n = (i.clientY + s.clientY) / 2, r = Math.hypot(t, e);
    return { angle: -(Math.atan2(t, e) * 180) / Math.PI, distance: r, origin: [o, n] };
  } catch {
  }
  return null;
}
function Wt(s) {
  return nt(s).map((i) => i.identifier);
}
function O(s, i) {
  const [t, e] = Array.from(s.touches).filter((o) => i.includes(o.identifier));
  return S(t, e);
}
function x(s) {
  const i = X(s);
  return C(s) ? i.identifier : i.pointerId;
}
function _(s) {
  const i = X(s);
  return [i.clientX, i.clientY];
}
const P = 40, N = 800;
function W(s) {
  let { deltaX: i, deltaY: t, deltaMode: e } = s;
  return e === 1 ? (i *= P, t *= P) : e === 2 && (i *= N, t *= N), [i, t];
}
function at(s) {
  const { scrollX: i, scrollY: t, scrollLeft: e, scrollTop: o } = s.currentTarget;
  return [i ?? e ?? 0, t ?? o ?? 0];
}
function ct(s) {
  const i = {};
  if ("buttons" in s && (i.buttons = s.buttons), "shiftKey" in s) {
    const { shiftKey: t, altKey: e, metaKey: o, ctrlKey: n } = s;
    Object.assign(i, { shiftKey: t, altKey: e, metaKey: o, ctrlKey: n });
  }
  return i;
}
function A(s, ...i) {
  return typeof s == "function" ? s(...i) : s;
}
function ht() {
}
function zt(...s) {
  return s.length === 0 ? ht : s.length === 1 ? s[0] : function() {
    let i;
    for (const t of s)
      i = t.apply(this, arguments) || i;
    return i;
  };
}
function V(s, i) {
  return Object.assign({}, i, s || {});
}
const lt = 32;
class z {
  constructor(i, t, e) {
    /**
     * The Controller handling state.
     */
    l(this, "ctrl");
    /**
     * The gesture key ('drag' | 'pinch' | 'wheel' | 'scroll' | 'move' | 'hover')
     */
    l(this, "key");
    l(this, "args");
    this.ctrl = i, this.args = t, this.key = e, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset());
  }
  /**
   * Shortcut to the gesture state read from the Controller.
   */
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(i) {
    this.ctrl.state[this.key] = i;
  }
  /**
   * Shortcut to the shared state read from the Controller
   */
  get shared() {
    return this.ctrl.state.shared;
  }
  /**
   * Shortcut to the gesture event store read from the Controller.
   */
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }
  /**
   * Shortcut to the gesture timeout store read from the Controller.
   */
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }
  /**
   * Shortcut to the gesture config read from the Controller.
   */
  get config() {
    return this.ctrl.config[this.key];
  }
  /**
   * Shortcut to the shared config read from the Controller.
   */
  get sharedConfig() {
    return this.ctrl.config.shared;
  }
  /**
   * Shortcut to the gesture handler read from the Controller.
   */
  get handler() {
    return this.ctrl.handlers[this.key];
  }
  reset() {
    const { state: i, shared: t, ingKey: e, args: o } = this;
    t[e] = i._active = i.active = i._blocked = i._force = !1, i._step = [!1, !1], i.intentional = !1, i._movement = [0, 0], i._distance = [0, 0], i._direction = [0, 0], i._delta = [0, 0], i._bounds = [[-1 / 0, 1 / 0], [-1 / 0, 1 / 0]], i.args = o, i.axis = void 0, i.memo = void 0, i.elapsedTime = i.timeDelta = 0, i.direction = [0, 0], i.distance = [0, 0], i.overflow = [0, 0], i._movementBound = [!1, !1], i.velocity = [0, 0], i.movement = [0, 0], i.delta = [0, 0], i.timeStamp = 0;
  }
  /**
   * Function ran at the start of the gesture.
   * @param event
   */
  start(i) {
    const t = this.state, e = this.config;
    t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = i.target, t.currentTarget = i.currentTarget, t.lastOffset = e.from ? A(e.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = i.timeStamp);
  }
  /**
   * Assign raw values to `state._values` and transformed values to
   * `state.values`.
   * @param values
   */
  computeValues(i) {
    const t = this.state;
    t._values = i, t.values = this.config.transform(i);
  }
  /**
   * Assign `state._values` to `state._initial` and transformed `state.values` to
   * `state.initial`.
   * @param values
   */
  computeInitial() {
    const i = this.state;
    i._initial = i._values, i.initial = i.values;
  }
  /**
   * Computes all sorts of state attributes, including kinematics.
   * @param event
   */
  compute(i) {
    const { state: t, config: e, shared: o } = this;
    t.args = this.args;
    let n = 0;
    if (i && (t.event = i, e.preventDefault && i.cancelable && t.event.preventDefault(), t.type = i.type, o.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, o.locked = !!document.pointerLockElement, Object.assign(o, ct(i)), o.down = o.pressed = o.buttons % 2 === 1 || o.touches > 0, n = i.timeStamp - t.timeStamp, t.timeStamp = i.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
      const p = t._delta.map(Math.abs);
      a.addTo(t._distance, p);
    }
    this.axisIntent && this.axisIntent(i);
    const [r, h] = t._movement, [d, g] = e.threshold, { _step: c, values: v } = t;
    if (e.hasCustomTransform ? (c[0] === !1 && (c[0] = Math.abs(r) >= d && v[0]), c[1] === !1 && (c[1] = Math.abs(h) >= g && v[1])) : (c[0] === !1 && (c[0] = Math.abs(r) >= d && Math.sign(r) * d), c[1] === !1 && (c[1] = Math.abs(h) >= g && Math.sign(h) * g)), t.intentional = c[0] !== !1 || c[1] !== !1, !t.intentional) return;
    const f = [0, 0];
    if (e.hasCustomTransform) {
      const [p, Q] = v;
      f[0] = c[0] !== !1 ? p - c[0] : 0, f[1] = c[1] !== !1 ? Q - c[1] : 0;
    } else
      f[0] = c[0] !== !1 ? r - c[0] : 0, f[1] = c[1] !== !1 ? h - c[1] : 0;
    this.restrictToAxis && !t._blocked && this.restrictToAxis(f);
    const E = t.offset, w = t._active && !t._blocked || t.active;
    w && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = o[this.ingKey] = t._active, i && (t.first && ("bounds" in e && (t._bounds = A(e.bounds, t)), this.setup && this.setup()), t.movement = f, this.computeOffset()));
    const [T, D] = t.offset, [[I, k], [q, F]] = t._bounds;
    t.overflow = [T < I ? -1 : T > k ? 1 : 0, D < q ? -1 : D > F ? 1 : 0], t._movementBound[0] = t.overflow[0] ? t._movementBound[0] === !1 ? t._movement[0] : t._movementBound[0] : !1, t._movementBound[1] = t.overflow[1] ? t._movementBound[1] === !1 ? t._movement[1] : t._movementBound[1] : !1;
    const J = t._active ? e.rubberband || [0, 0] : [0, 0];
    if (t.offset = et(t._bounds, t.offset, J), t.delta = a.sub(t.offset, E), this.computeMovement(), w && (!t.last || n > lt)) {
      t.delta = a.sub(t.offset, E);
      const p = t.delta.map(Math.abs);
      a.addTo(t.distance, p), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && n > 0 && (t.velocity = [p[0] / n, p[1] / n], t.timeDelta = n);
    }
  }
  /**
   * Fires the gesture handler.
   */
  emit() {
    const i = this.state, t = this.shared, e = this.config;
    if (i._active || this.clean(), (i._blocked || !i.intentional) && !i._force && !e.triggerAllEvents) return;
    const o = this.handler({ ...t, ...i, [this.aliasKey]: i.values });
    o !== void 0 && (i.memo = o);
  }
  /**
   * Cleans the gesture timeouts and event listeners.
   */
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
}
function ut([s, i], t) {
  const e = Math.abs(s), o = Math.abs(i);
  if (e > o && e > t)
    return "x";
  if (o > e && o > t)
    return "y";
}
class y extends z {
  constructor() {
    super(...arguments);
    l(this, "aliasKey", "xy");
  }
  reset() {
    super.reset(), this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0], this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = a.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = a.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(t) {
    const e = this.state, o = this.config;
    if (!e.axis && t) {
      const n = typeof o.axisThreshold == "object" ? o.axisThreshold[H(t)] : o.axisThreshold;
      e.axis = ut(e._movement, n);
    }
    e._blocked = (o.lockDirection || !!o.axis) && !e.axis || !!o.axis && o.axis !== e.axis;
  }
  restrictToAxis(t) {
    if (this.config.axis || this.config.lockDirection)
      switch (this.state.axis) {
        case "x":
          t[1] = 0;
          break;
        case "y":
          t[0] = 0;
          break;
      }
  }
}
const R = (s) => s, K = 0.15, M = {
  enabled(s = !0) {
    return s;
  },
  eventOptions(s, i, t) {
    return { ...t.shared.eventOptions, ...s };
  },
  preventDefault(s = !1) {
    return s;
  },
  triggerAllEvents(s = !1) {
    return s;
  },
  rubberband(s = 0) {
    switch (s) {
      case !0:
        return [K, K];
      case !1:
        return [0, 0];
      default:
        return a.toVector(s);
    }
  },
  from(s) {
    if (typeof s == "function") return s;
    if (s != null) return a.toVector(s);
  },
  transform(s, i, t) {
    const e = s || t.shared.transform;
    if (this.hasCustomTransform = !!e, process.env.NODE_ENV === "development") {
      const o = e || R;
      return (n) => {
        const r = o(n);
        return (!isFinite(r[0]) || !isFinite(r[1])) && console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${r[0]},${[1]}]`), r;
      };
    }
    return e || R;
  },
  threshold(s) {
    return a.toVector(s, 0);
  }
};
process.env.NODE_ENV === "development" && Object.assign(M, {
  domTarget(s) {
    if (s !== void 0)
      throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
    return NaN;
  },
  lockDirection(s) {
    if (s !== void 0)
      throw Error(
        "[@use-gesture]: `lockDirection` option has been merged with `axis`. Use it as in `{ axis: 'lock' }`"
      );
    return NaN;
  },
  initial(s) {
    if (s !== void 0)
      throw Error("[@use-gesture]: `initial` option has been renamed to `from`.");
    return NaN;
  }
});
const ft = 0, m = {
  ...M,
  axis(s, i, { axis: t }) {
    if (this.lockDirection = t === "lock", !this.lockDirection) return t;
  },
  axisThreshold(s = ft) {
    return s;
  },
  bounds(s = {}) {
    if (typeof s == "function")
      return (n) => m.bounds(s(n));
    if ("current" in s)
      return () => s.current;
    if ("value" in s)
      return () => s.value;
    if (typeof HTMLElement == "function" && s instanceof HTMLElement)
      return s;
    const { left: i = -1 / 0, right: t = 1 / 0, top: e = -1 / 0, bottom: o = 1 / 0 } = s;
    return [
      [i, t],
      [e, o]
    ];
  }
}, U = {
  ArrowRight: (s, i = 1) => [s * i, 0],
  ArrowLeft: (s, i = 1) => [-1 * s * i, 0],
  ArrowUp: (s, i = 1) => [0, -1 * s * i],
  ArrowDown: (s, i = 1) => [0, s * i]
};
class dt extends y {
  constructor() {
    super(...arguments);
    l(this, "ingKey", "dragging");
  }
  // superseeds generic Engine reset call
  reset() {
    super.reset();
    const t = this.state;
    t._pointerId = void 0, t._pointerActive = !1, t._keyboardActive = !1, t._preventScroll = !1, t._delayed = !1, t.swipe = [0, 0], t.tap = !1, t.canceled = !1, t.cancel = this.cancel.bind(this);
  }
  setup() {
    const t = this.state;
    if (t._bounds instanceof HTMLElement) {
      const e = t._bounds.getBoundingClientRect(), o = t.currentTarget.getBoundingClientRect(), n = {
        left: e.left - o.left + t.offset[0],
        right: e.right - o.right + t.offset[0],
        top: e.top - o.top + t.offset[1],
        bottom: e.bottom - o.bottom + t.offset[1]
      };
      t._bounds = m.bounds(n);
    }
  }
  cancel() {
    const t = this.state;
    t.canceled || (t.canceled = !0, t._active = !1, setTimeout(() => {
      this.compute(), this.emit();
    }, 0));
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  // superseeds Engine clean function
  clean() {
    this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean();
  }
  pointerDown(t) {
    const e = this.config, o = this.state;
    if (t.buttons != null && // If the user submits an array as pointer.buttons, don't start the drag
    // if event.buttons isn't included inside that array.
    (Array.isArray(e.pointerButtons) ? !e.pointerButtons.includes(t.buttons) : (
      // If the user submits a number as pointer.buttons, refuse the drag if
      // config.pointerButtons is different than `-1` and if event.buttons
      // doesn't match the combination.
      e.pointerButtons !== -1 && e.pointerButtons !== t.buttons
    )))
      return;
    const n = this.ctrl.setEventIds(t);
    e.pointerCapture && t.target.setPointerCapture(t.pointerId), // in some situations (https://github.com/pmndrs/use-gesture/issues/494#issuecomment-1127584116)
    // like when a new browser tab is opened during a drag gesture, the drag
    // can be interrupted mid-way, and can stall. This happens because the
    // pointerId that initiated the gesture is lost, and since the drag
    // persists until that pointerId is lifted with pointerup, it never ends.
    //
    // Therefore, when we detect that only one pointer is pressing the screen,
    // we consider that the gesture can proceed.
    !(n && n.size > 1 && o._pointerActive) && (this.start(t), this.setupPointer(t), o._pointerId = x(t), o._pointerActive = !0, this.computeValues(_(t)), this.computeInitial(), e.preventScrollAxis && H(t) !== "mouse" ? (o._active = !1, this.setupScrollPrevention(t)) : e.delay > 0 ? (this.setupDelayTrigger(t), e.triggerAllEvents && (this.compute(t), this.emit())) : this.startPointerDrag(t));
  }
  startPointerDrag(t) {
    const e = this.state;
    e._active = !0, e._preventScroll = !0, e._delayed = !1, this.compute(t), this.emit();
  }
  pointerMove(t) {
    const e = this.state, o = this.config;
    if (!e._pointerActive) return;
    const n = x(t);
    if (e._pointerId !== void 0 && n !== e._pointerId) return;
    const r = _(t);
    if (document.pointerLockElement === t.target ? e._delta = [t.movementX, t.movementY] : (e._delta = a.sub(r, e._values), this.computeValues(r)), a.addTo(e._movement, e._delta), this.compute(t), e._delayed && e.intentional) {
      this.timeoutStore.remove("dragDelay"), e.active = !1, this.startPointerDrag(t);
      return;
    }
    if (o.preventScrollAxis && !e._preventScroll)
      if (e.axis)
        if (e.axis === o.preventScrollAxis || o.preventScrollAxis === "xy") {
          e._active = !1, this.clean();
          return;
        } else {
          this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(t);
          return;
        }
      else
        return;
    this.emit();
  }
  pointerUp(t) {
    this.ctrl.setEventIds(t);
    try {
      this.config.pointerCapture && t.target.hasPointerCapture(t.pointerId) && t.target.releasePointerCapture(t.pointerId);
    } catch {
      process.env.NODE_ENV === "development" && console.warn(
        "[@use-gesture]: If you see this message, it's likely that you're using an outdated version of `@react-three/fiber`. \n\nPlease upgrade to the latest version."
      );
    }
    const e = this.state, o = this.config;
    if (!e._active || !e._pointerActive) return;
    const n = x(t);
    if (e._pointerId !== void 0 && n !== e._pointerId) return;
    this.state._pointerActive = !1, this.setActive(), this.compute(t);
    const [r, h] = e._distance;
    if (e.tap = r <= o.tapsThreshold && h <= o.tapsThreshold, e.tap && o.filterTaps)
      e._force = !0;
    else {
      const [d, g] = e._delta, [c, v] = e._movement, [f, E] = o.swipe.velocity, [w, T] = o.swipe.distance, D = o.swipe.duration;
      if (e.elapsedTime < D) {
        const I = Math.abs(d / e.timeDelta), k = Math.abs(g / e.timeDelta);
        I > f && Math.abs(c) > w && (e.swipe[0] = Math.sign(d)), k > E && Math.abs(v) > T && (e.swipe[1] = Math.sign(g));
      }
    }
    this.emit();
  }
  pointerClick(t) {
    !this.state.tap && t.detail > 0 && (t.preventDefault(), t.stopPropagation());
  }
  setupPointer(t) {
    const e = this.config, o = e.device;
    if (process.env.NODE_ENV === "development")
      try {
        if (o === "pointer" && e.preventScrollDelay === void 0) {
          const n = "uv" in t ? t.sourceEvent.currentTarget : t.currentTarget;
          window.getComputedStyle(n).touchAction === "auto" && console.warn(
            "[@use-gesture]: The drag target has its `touch-action` style property set to `auto`. It is recommended to add `touch-action: 'none'` so that the drag gesture behaves correctly on touch-enabled devices. For more information read this: https://use-gesture.netlify.app/docs/extras/#touch-action.\n\nThis message will only show in development mode. It won't appear in production. If this is intended, you can ignore it.",
            n
          );
        }
      } catch {
      }
    e.pointerLock && t.currentTarget.requestPointerLock(), e.pointerCapture || (this.eventStore.add(this.sharedConfig.window, o, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, o, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, o, "cancel", this.pointerUp.bind(this)));
  }
  pointerClean() {
    this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock();
  }
  preventScroll(t) {
    this.state._preventScroll && t.cancelable && t.preventDefault();
  }
  setupScrollPrevention(t) {
    this.state._preventScroll = !1, pt(t);
    const e = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: !1
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", e), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", e), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, t);
  }
  setupDelayTrigger(t) {
    this.state._delayed = !0, this.timeoutStore.add(
      "dragDelay",
      () => {
        this.state._step = [0, 0], this.startPointerDrag(t);
      },
      this.config.delay
    );
  }
  keyDown(t) {
    const e = U[t.key];
    if (e) {
      const o = this.state, n = t.shiftKey ? 10 : t.altKey ? 0.1 : 1;
      this.start(t), o._delta = e(this.config.keyboardDisplacement, n), o._keyboardActive = !0, a.addTo(o._movement, o._delta), this.compute(t), this.emit();
    }
  }
  keyUp(t) {
    t.key in U && (this.state._keyboardActive = !1, this.setActive(), this.compute(t), this.emit());
  }
  bind(t) {
    const e = this.config.device;
    t(e, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (t(e, "change", this.pointerMove.bind(this)), t(e, "end", this.pointerUp.bind(this)), t(e, "cancel", this.pointerUp.bind(this)), t("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (t("key", "down", this.keyDown.bind(this)), t("key", "up", this.keyUp.bind(this))), this.config.filterTaps && t("click", "", this.pointerClick.bind(this), { capture: !0, passive: !1 });
  }
}
function pt(s) {
  "persist" in s && typeof s.persist == "function" && s.persist();
}
const b = typeof window < "u" && window.document && window.document.createElement;
function G() {
  return b && "ontouchstart" in window;
}
function mt() {
  return G() || b && window.navigator.maxTouchPoints > 1;
}
function gt() {
  return b && "onpointerdown" in window;
}
function _t() {
  return b && "exitPointerLock" in window.document;
}
function vt() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const u = {
  isBrowser: b,
  gesture: vt(),
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
  touch: G(),
  // touch: isTouchScreen(),
  touchscreen: mt(),
  pointer: gt(),
  pointerLock: _t()
}, yt = 250, bt = 180, Et = 0.5, wt = 50, Tt = 250, Dt = 10, B = { mouse: 0, touch: 0, pen: 8 }, j = {
  ...m,
  device(s, i, { pointer: { touch: t = !1, lock: e = !1, mouse: o = !1 } = {} }) {
    return this.pointerLock = e && u.pointerLock, u.touch && t ? "touch" : this.pointerLock ? "mouse" : u.pointer && !o ? "pointer" : u.touch ? "touch" : "mouse";
  },
  preventScrollAxis(s, i, { preventScroll: t }) {
    if (this.preventScrollDelay = typeof t == "number" ? t : t || t === void 0 && s ? yt : void 0, !(!u.touchscreen || t === !1))
      return s || (t !== void 0 ? "y" : void 0);
  },
  pointerCapture(s, i, { pointer: { capture: t = !0, buttons: e = 1, keys: o = !0 } = {} }) {
    return this.pointerButtons = e, this.keys = o, !this.pointerLock && this.device === "pointer" && t;
  },
  threshold(s, i, { filterTaps: t = !1, tapsThreshold: e = 3, axis: o = void 0 }) {
    const n = a.toVector(s, t ? e : o ? 1 : 0);
    return this.filterTaps = t, this.tapsThreshold = e, n;
  },
  swipe({ velocity: s = Et, distance: i = wt, duration: t = Tt } = {}) {
    return {
      velocity: this.transform(a.toVector(s)),
      distance: this.transform(a.toVector(i)),
      duration: t
    };
  },
  delay(s = 0) {
    switch (s) {
      case !0:
        return bt;
      case !1:
        return 0;
      default:
        return s;
    }
  },
  axisThreshold(s) {
    return s ? { ...B, ...s } : B;
  },
  keyboardDisplacement(s = Dt) {
    return s;
  }
};
process.env.NODE_ENV === "development" && Object.assign(j, {
  useTouch(s) {
    if (s !== void 0)
      throw Error(
        "[@use-gesture]: `useTouch` option has been renamed to `pointer.touch`. Use it as in `{ pointer: { touch: true } }`."
      );
    return NaN;
  },
  experimental_preventWindowScrollY(s) {
    if (s !== void 0)
      throw Error(
        "[@use-gesture]: `experimental_preventWindowScrollY` option has been renamed to `preventScroll`."
      );
    return NaN;
  },
  swipeVelocity(s) {
    if (s !== void 0)
      throw Error(
        "[@use-gesture]: `swipeVelocity` option has been renamed to `swipe.velocity`. Use it as in `{ swipe: { velocity: 0.5 } }`."
      );
    return NaN;
  },
  swipeDistance(s) {
    if (s !== void 0)
      throw Error(
        "[@use-gesture]: `swipeDistance` option has been renamed to `swipe.distance`. Use it as in `{ swipe: { distance: 50 } }`."
      );
    return NaN;
  },
  swipeDuration(s) {
    if (s !== void 0)
      throw Error(
        "[@use-gesture]: `swipeDuration` option has been renamed to `swipe.duration`. Use it as in `{ swipe: { duration: 250 } }`."
      );
    return NaN;
  }
});
function $(s) {
  const [i, t] = s.overflow, [e, o] = s._delta, [n, r] = s._direction;
  (i < 0 && e > 0 && n < 0 || i > 0 && e < 0 && n > 0) && (s._movement[0] = s._movementBound[0]), (t < 0 && o > 0 && r < 0 || t > 0 && o < 0 && r > 0) && (s._movement[1] = s._movementBound[1]);
}
const At = 30, It = 100;
class kt extends z {
  constructor() {
    super(...arguments);
    l(this, "ingKey", "pinching");
    l(this, "aliasKey", "da");
  }
  init() {
    this.state.offset = [1, 0], this.state.lastOffset = [1, 0], this.state._pointerEvents = /* @__PURE__ */ new Map();
  }
  // superseeds generic Engine reset call
  reset() {
    super.reset();
    const t = this.state;
    t._touchIds = [], t.canceled = !1, t.cancel = this.cancel.bind(this), t.turns = 0;
  }
  computeOffset() {
    const { type: t, movement: e, lastOffset: o } = this.state;
    t === "wheel" ? this.state.offset = a.add(e, o) : this.state.offset = [(1 + e[0]) * o[0], e[1] + o[1]];
  }
  computeMovement() {
    const { offset: t, lastOffset: e } = this.state;
    this.state.movement = [t[0] / e[0], t[1] - e[1]];
  }
  axisIntent() {
    const t = this.state, [e, o] = t._movement;
    if (!t.axis) {
      const n = Math.abs(e) * At - Math.abs(o);
      n < 0 ? t.axis = "angle" : n > 0 && (t.axis = "scale");
    }
  }
  restrictToAxis(t) {
    this.config.lockDirection && (this.state.axis === "scale" ? t[1] = 0 : this.state.axis === "angle" && (t[0] = 0));
  }
  cancel() {
    const t = this.state;
    t.canceled || setTimeout(() => {
      t.canceled = !0, t._active = !1, this.compute(), this.emit();
    }, 0);
  }
  touchStart(t) {
    this.ctrl.setEventIds(t);
    const e = this.state, o = this.ctrl.touchIds;
    if (e._active && e._touchIds.every((r) => o.has(r)) || o.size < 2) return;
    this.start(t), e._touchIds = Array.from(o).slice(0, 2);
    const n = O(t, e._touchIds);
    n && this.pinchStart(t, n);
  }
  pointerStart(t) {
    if (t.buttons != null && t.buttons % 2 !== 1) return;
    this.ctrl.setEventIds(t), t.target.setPointerCapture(t.pointerId);
    const e = this.state, o = e._pointerEvents, n = this.ctrl.pointerIds;
    if (e._active && Array.from(o.keys()).every((h) => n.has(h)) || (o.size < 2 && o.set(t.pointerId, t), e._pointerEvents.size < 2)) return;
    this.start(t);
    const r = S(...Array.from(o.values()));
    r && this.pinchStart(t, r);
  }
  pinchStart(t, e) {
    const o = this.state;
    o.origin = e.origin, this.computeValues([e.distance, e.angle]), this.computeInitial(), this.compute(t), this.emit();
  }
  touchMove(t) {
    if (!this.state._active) return;
    const e = O(t, this.state._touchIds);
    e && this.pinchMove(t, e);
  }
  pointerMove(t) {
    const e = this.state._pointerEvents;
    if (e.has(t.pointerId) && e.set(t.pointerId, t), !this.state._active) return;
    const o = S(...Array.from(e.values()));
    o && this.pinchMove(t, o);
  }
  pinchMove(t, e) {
    const o = this.state, n = o._values[1], r = e.angle - n;
    let h = 0;
    Math.abs(r) > 270 && (h += Math.sign(r)), this.computeValues([e.distance, e.angle - 360 * h]), o.origin = e.origin, o.turns = h, o._movement = [o._values[0] / o._initial[0] - 1, o._values[1] - o._initial[1]], this.compute(t), this.emit();
  }
  touchEnd(t) {
    this.ctrl.setEventIds(t), this.state._active && this.state._touchIds.some((e) => !this.ctrl.touchIds.has(e)) && (this.state._active = !1, this.compute(t), this.emit());
  }
  pointerEnd(t) {
    const e = this.state;
    this.ctrl.setEventIds(t);
    try {
      t.target.releasePointerCapture(t.pointerId);
    } catch {
    }
    e._pointerEvents.has(t.pointerId) && e._pointerEvents.delete(t.pointerId), e._active && e._pointerEvents.size < 2 && (e._active = !1, this.compute(t), this.emit());
  }
  gestureStart(t) {
    t.cancelable && t.preventDefault();
    const e = this.state;
    e._active || (this.start(t), this.computeValues([t.scale, t.rotation]), e.origin = [t.clientX, t.clientY], this.compute(t), this.emit());
  }
  gestureMove(t) {
    if (t.cancelable && t.preventDefault(), !this.state._active) return;
    const e = this.state;
    this.computeValues([t.scale, t.rotation]), e.origin = [t.clientX, t.clientY];
    const o = e._movement;
    e._movement = [t.scale - 1, t.rotation], e._delta = a.sub(e._movement, o), this.compute(t), this.emit();
  }
  gestureEnd(t) {
    this.state._active && (this.state._active = !1, this.compute(t), this.emit());
  }
  wheel(t) {
    const e = this.config.modifierKey;
    e && (Array.isArray(e) ? !e.find((o) => t[o]) : !t[e]) || (this.state._active ? this.wheelChange(t) : this.wheelStart(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)));
  }
  wheelStart(t) {
    this.start(t), this.wheelChange(t);
  }
  wheelChange(t) {
    "uv" in t || (t.cancelable && t.preventDefault(), process.env.NODE_ENV === "development" && !t.defaultPrevented && console.warn(
      "[@use-gesture]: To properly support zoom on trackpads, try using the `target` option.\n\nThis message will only appear in development mode."
    ));
    const o = this.state;
    o._delta = [-W(t)[1] / It * o.offset[0], 0], a.addTo(o._movement, o._delta), $(o), this.state.origin = [t.clientX, t.clientY], this.compute(t), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    const e = this.config.device;
    e && (t(e, "start", this[e + "Start"].bind(this)), t(e, "change", this[e + "Move"].bind(this)), t(e, "end", this[e + "End"].bind(this)), t(e, "cancel", this[e + "End"].bind(this)), t("lostPointerCapture", "", this[e + "End"].bind(this))), this.config.pinchOnWheel && t("wheel", "", this.wheel.bind(this), { passive: !1 });
  }
}
const xt = {
  ...M,
  device(s, i, { shared: t, pointer: { touch: e = !1 } = {} }) {
    if (t.target && !u.touch && u.gesture) return "gesture";
    if (u.touch && e) return "touch";
    if (u.touchscreen) {
      if (u.pointer) return "pointer";
      if (u.touch) return "touch";
    }
  },
  bounds(s, i, { scaleBounds: t = {}, angleBounds: e = {} }) {
    const o = (r) => {
      const h = V(A(t, r), { min: -1 / 0, max: 1 / 0 });
      return [h.min, h.max];
    }, n = (r) => {
      const h = V(A(e, r), { min: -1 / 0, max: 1 / 0 });
      return [h.min, h.max];
    };
    return typeof t != "function" && typeof e != "function" ? [o(), n()] : (r) => [o(r), n(r)];
  },
  threshold(s, i, t) {
    return this.lockDirection = t.axis === "lock", a.toVector(s, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(s) {
    return s === void 0 ? "ctrlKey" : s;
  },
  pinchOnWheel(s = !0) {
    return s;
  }
};
class St extends y {
  constructor() {
    super(...arguments);
    l(this, "ingKey", "moving");
  }
  move(t) {
    this.config.mouseOnly && t.pointerType !== "mouse" || (this.state._active ? this.moveChange(t) : this.moveStart(t), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)));
  }
  moveStart(t) {
    this.start(t), this.computeValues(_(t)), this.compute(t), this.computeInitial(), this.emit();
  }
  moveChange(t) {
    if (!this.state._active) return;
    const e = _(t), o = this.state;
    o._delta = a.sub(e, o._values), a.addTo(o._movement, o._delta), this.computeValues(e), this.compute(t), this.emit();
  }
  moveEnd(t) {
    this.state._active && (this.state._active = !1, this.compute(t), this.emit());
  }
  bind(t) {
    t("pointer", "change", this.move.bind(this)), t("pointer", "leave", this.moveEnd.bind(this));
  }
}
const Ct = {
  ...m,
  mouseOnly: (s = !0) => s
};
class Mt extends y {
  constructor() {
    super(...arguments);
    l(this, "ingKey", "scrolling");
  }
  scroll(t) {
    this.state._active || this.start(t), this.scrollChange(t), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
  }
  scrollChange(t) {
    t.cancelable && t.preventDefault();
    const e = this.state, o = at(t);
    e._delta = a.sub(o, e._values), a.addTo(e._movement, e._delta), this.computeValues(o), this.compute(t), this.emit();
  }
  scrollEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    t("scroll", "", this.scroll.bind(this));
  }
}
const Lt = m;
class Ot extends y {
  constructor() {
    super(...arguments);
    l(this, "ingKey", "wheeling");
  }
  wheel(t) {
    this.state._active || this.start(t), this.wheelChange(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelChange(t) {
    const e = this.state;
    e._delta = W(t), a.addTo(e._movement, e._delta), $(e), this.compute(t), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    t("wheel", "", this.wheel.bind(this));
  }
}
const Pt = m;
class Nt extends y {
  constructor() {
    super(...arguments);
    l(this, "ingKey", "hovering");
  }
  enter(t) {
    this.config.mouseOnly && t.pointerType !== "mouse" || (this.start(t), this.computeValues(_(t)), this.compute(t), this.emit());
  }
  leave(t) {
    if (this.config.mouseOnly && t.pointerType !== "mouse") return;
    const e = this.state;
    if (!e._active) return;
    e._active = !1;
    const o = _(t);
    e._movement = e._delta = a.sub(o, e._values), this.computeValues(o), this.compute(t), e.delta = e.movement, this.emit();
  }
  bind(t) {
    t("pointer", "enter", this.enter.bind(this)), t("pointer", "leave", this.leave.bind(this));
  }
}
const Vt = {
  ...m,
  mouseOnly: (s = !0) => s
}, Rt = /* @__PURE__ */ new Map(), Kt = /* @__PURE__ */ new Map();
function Gt(s) {
  Rt.set(s.key, s.engine), Kt.set(s.key, s.resolver);
}
const jt = {
  key: "drag",
  engine: dt,
  resolver: j
}, $t = {
  key: "hover",
  engine: Nt,
  resolver: Vt
}, qt = {
  key: "move",
  engine: St,
  resolver: Ct
}, Ft = {
  key: "pinch",
  engine: kt,
  resolver: xt
}, Jt = {
  key: "scroll",
  engine: Mt,
  resolver: Lt
}, Qt = {
  key: "wheel",
  engine: Ot,
  resolver: Pt
};
export {
  Kt as C,
  Rt as E,
  u as S,
  Wt as a,
  Yt as b,
  zt as c,
  jt as d,
  Ft as e,
  $t as h,
  C as i,
  qt as m,
  Ht as p,
  Gt as r,
  Jt as s,
  Xt as t,
  Qt as w
};
