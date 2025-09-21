import {
  onMounted,
  onUnmounted,
  ref,
  unref,
  watch
} from "./chunk-ISEM245F.js";

// ../vue/sandboxes/useDrag/node_modules/@use-gesture-x/core/dist/utils-Bc2CPI0y.js
function y(r, u3, b2) {
  return Math.max(u3, Math.min(r, b2));
}
var n = {
  toVector(r, u3) {
    return r === void 0 && (r = u3), Array.isArray(r) ? r : [r, r];
  },
  add(r, u3) {
    return [r[0] + u3[0], r[1] + u3[1]];
  },
  sub(r, u3) {
    return [r[0] - u3[0], r[1] - u3[1]];
  },
  addTo(r, u3) {
    r[0] += u3[0], r[1] += u3[1];
  },
  subTo(r, u3) {
    r[0] -= u3[0], r[1] -= u3[1];
  }
};
function f(r, u3, b2) {
  return u3 === 0 || Math.abs(u3) === 1 / 0 ? Math.pow(r, b2 * 5) : r * u3 * b2 / (u3 + b2 * r);
}
function t(r, u3, b2, e = 0.15) {
  return e === 0 ? y(r, u3, b2) : r < u3 ? -f(u3 - r, b2 - u3, e) + u3 : r > b2 ? +f(r - b2, b2 - u3, e) + b2 : r;
}
function A(r, [u3, b2], [e, a]) {
  const [[c, d], [h, M3]] = r;
  return [t(u3, c, d, e), t(b2, h, M3, a)];
}

// ../vue/sandboxes/useDrag/node_modules/@use-gesture-x/core/dist/actions-Buizaugf.js
var Z = Object.defineProperty;
var tt = (s, i, t2) => i in s ? Z(s, i, { enumerable: true, configurable: true, writable: true, value: t2 }) : s[i] = t2;
var l = (s, i, t2) => tt(s, typeof i != "symbol" ? i + "" : i, t2);
var Y = {
  pointer: { start: "down", change: "move", end: "up" },
  mouse: { start: "down", change: "move", end: "up" },
  touch: { start: "start", change: "move", end: "end" },
  gesture: { start: "start", change: "change", end: "end" }
};
function L(s) {
  return s ? s[0].toUpperCase() + s.slice(1) : "";
}
var st = ["enter", "leave"];
function it(s = false, i) {
  return s && !st.includes(i);
}
function Yt(s, i = "", t2 = false) {
  const e = Y[s], o = e && e[i] || i;
  return "on" + L(s) + L(o) + (it(t2, o) ? "Capture" : "");
}
var ot = ["gotpointercapture", "lostpointercapture"];
function Ht(s) {
  let i = s.substring(2).toLowerCase();
  const t2 = !!~i.indexOf("passive");
  t2 && (i = i.replace("passive", ""));
  const e = ot.includes(i) ? "capturecapture" : "capture", o = !!~i.indexOf(e);
  return o && (i = i.replace("capture", "")), { device: i, capture: o, passive: t2 };
}
function Xt(s, i = "") {
  const t2 = Y[s], e = t2 && t2[i] || i;
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
      var t2, e;
      return i.target === s.currentTarget || ((e = (t2 = s.currentTarget) == null ? void 0 : t2.contains) == null ? void 0 : e.call(t2, i.target));
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
    const t2 = i.clientX - s.clientX, e = i.clientY - s.clientY, o = (i.clientX + s.clientX) / 2, n2 = (i.clientY + s.clientY) / 2, r = Math.hypot(t2, e);
    return { angle: -(Math.atan2(t2, e) * 180) / Math.PI, distance: r, origin: [o, n2] };
  } catch {
  }
  return null;
}
function Wt(s) {
  return nt(s).map((i) => i.identifier);
}
function O(s, i) {
  const [t2, e] = Array.from(s.touches).filter((o) => i.includes(o.identifier));
  return S(t2, e);
}
function x(s) {
  const i = X(s);
  return C(s) ? i.identifier : i.pointerId;
}
function _(s) {
  const i = X(s);
  return [i.clientX, i.clientY];
}
var P = 40;
var N = 800;
function W(s) {
  let { deltaX: i, deltaY: t2, deltaMode: e } = s;
  return e === 1 ? (i *= P, t2 *= P) : e === 2 && (i *= N, t2 *= N), [i, t2];
}
function at(s) {
  const { scrollX: i, scrollY: t2, scrollLeft: e, scrollTop: o } = s.currentTarget;
  return [i ?? e ?? 0, t2 ?? o ?? 0];
}
function ct(s) {
  const i = {};
  if ("buttons" in s && (i.buttons = s.buttons), "shiftKey" in s) {
    const { shiftKey: t2, altKey: e, metaKey: o, ctrlKey: n2 } = s;
    Object.assign(i, { shiftKey: t2, altKey: e, metaKey: o, ctrlKey: n2 });
  }
  return i;
}
function A2(s, ...i) {
  return typeof s == "function" ? s(...i) : s;
}
function ht() {
}
function zt(...s) {
  return s.length === 0 ? ht : s.length === 1 ? s[0] : function() {
    let i;
    for (const t2 of s)
      i = t2.apply(this, arguments) || i;
    return i;
  };
}
function V(s, i) {
  return Object.assign({}, i, s || {});
}
var lt = 32;
var z = class {
  constructor(i, t2, e) {
    l(this, "ctrl");
    l(this, "key");
    l(this, "args");
    this.ctrl = i, this.args = t2, this.key = e, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset());
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
    const { state: i, shared: t2, ingKey: e, args: o } = this;
    t2[e] = i._active = i.active = i._blocked = i._force = false, i._step = [false, false], i.intentional = false, i._movement = [0, 0], i._distance = [0, 0], i._direction = [0, 0], i._delta = [0, 0], i._bounds = [[-1 / 0, 1 / 0], [-1 / 0, 1 / 0]], i.args = o, i.axis = void 0, i.memo = void 0, i.elapsedTime = i.timeDelta = 0, i.direction = [0, 0], i.distance = [0, 0], i.overflow = [0, 0], i._movementBound = [false, false], i.velocity = [0, 0], i.movement = [0, 0], i.delta = [0, 0], i.timeStamp = 0;
  }
  /**
   * Function ran at the start of the gesture.
   * @param event
   */
  start(i) {
    const t2 = this.state, e = this.config;
    t2._active || (this.reset(), this.computeInitial(), t2._active = true, t2.target = i.target, t2.currentTarget = i.currentTarget, t2.lastOffset = e.from ? A2(e.from, t2) : t2.offset, t2.offset = t2.lastOffset, t2.startTime = t2.timeStamp = i.timeStamp);
  }
  /**
   * Assign raw values to `state._values` and transformed values to
   * `state.values`.
   * @param values
   */
  computeValues(i) {
    const t2 = this.state;
    t2._values = i, t2.values = this.config.transform(i);
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
    const { state: t2, config: e, shared: o } = this;
    t2.args = this.args;
    let n2 = 0;
    if (i && (t2.event = i, e.preventDefault && i.cancelable && t2.event.preventDefault(), t2.type = i.type, o.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, o.locked = !!document.pointerLockElement, Object.assign(o, ct(i)), o.down = o.pressed = o.buttons % 2 === 1 || o.touches > 0, n2 = i.timeStamp - t2.timeStamp, t2.timeStamp = i.timeStamp, t2.elapsedTime = t2.timeStamp - t2.startTime), t2._active) {
      const p2 = t2._delta.map(Math.abs);
      n.addTo(t2._distance, p2);
    }
    this.axisIntent && this.axisIntent(i);
    const [r, h] = t2._movement, [d, g] = e.threshold, { _step: c, values: v } = t2;
    if (e.hasCustomTransform ? (c[0] === false && (c[0] = Math.abs(r) >= d && v[0]), c[1] === false && (c[1] = Math.abs(h) >= g && v[1])) : (c[0] === false && (c[0] = Math.abs(r) >= d && Math.sign(r) * d), c[1] === false && (c[1] = Math.abs(h) >= g && Math.sign(h) * g)), t2.intentional = c[0] !== false || c[1] !== false, !t2.intentional) return;
    const f4 = [0, 0];
    if (e.hasCustomTransform) {
      const [p2, Q] = v;
      f4[0] = c[0] !== false ? p2 - c[0] : 0, f4[1] = c[1] !== false ? Q - c[1] : 0;
    } else
      f4[0] = c[0] !== false ? r - c[0] : 0, f4[1] = c[1] !== false ? h - c[1] : 0;
    this.restrictToAxis && !t2._blocked && this.restrictToAxis(f4);
    const E2 = t2.offset, w2 = t2._active && !t2._blocked || t2.active;
    w2 && (t2.first = t2._active && !t2.active, t2.last = !t2._active && t2.active, t2.active = o[this.ingKey] = t2._active, i && (t2.first && ("bounds" in e && (t2._bounds = A2(e.bounds, t2)), this.setup && this.setup()), t2.movement = f4, this.computeOffset()));
    const [T, D3] = t2.offset, [[I, k], [q, F]] = t2._bounds;
    t2.overflow = [T < I ? -1 : T > k ? 1 : 0, D3 < q ? -1 : D3 > F ? 1 : 0], t2._movementBound[0] = t2.overflow[0] ? t2._movementBound[0] === false ? t2._movement[0] : t2._movementBound[0] : false, t2._movementBound[1] = t2.overflow[1] ? t2._movementBound[1] === false ? t2._movement[1] : t2._movementBound[1] : false;
    const J = t2._active ? e.rubberband || [0, 0] : [0, 0];
    if (t2.offset = A(t2._bounds, t2.offset, J), t2.delta = n.sub(t2.offset, E2), this.computeMovement(), w2 && (!t2.last || n2 > lt)) {
      t2.delta = n.sub(t2.offset, E2);
      const p2 = t2.delta.map(Math.abs);
      n.addTo(t2.distance, p2), t2.direction = t2.delta.map(Math.sign), t2._direction = t2._delta.map(Math.sign), !t2.first && n2 > 0 && (t2.velocity = [p2[0] / n2, p2[1] / n2], t2.timeDelta = n2);
    }
  }
  /**
   * Fires the gesture handler.
   */
  emit() {
    const i = this.state, t2 = this.shared, e = this.config;
    if (i._active || this.clean(), (i._blocked || !i.intentional) && !i._force && !e.triggerAllEvents) return;
    const o = this.handler({ ...t2, ...i, [this.aliasKey]: i.values });
    o !== void 0 && (i.memo = o);
  }
  /**
   * Cleans the gesture timeouts and event listeners.
   */
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
};
function ut([s, i], t2) {
  const e = Math.abs(s), o = Math.abs(i);
  if (e > o && e > t2)
    return "x";
  if (o > e && o > t2)
    return "y";
}
var y2 = class extends z {
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
    this.state.offset = n.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = n.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(t2) {
    const e = this.state, o = this.config;
    if (!e.axis && t2) {
      const n2 = typeof o.axisThreshold == "object" ? o.axisThreshold[H(t2)] : o.axisThreshold;
      e.axis = ut(e._movement, n2);
    }
    e._blocked = (o.lockDirection || !!o.axis) && !e.axis || !!o.axis && o.axis !== e.axis;
  }
  restrictToAxis(t2) {
    if (this.config.axis || this.config.lockDirection)
      switch (this.state.axis) {
        case "x":
          t2[1] = 0;
          break;
        case "y":
          t2[0] = 0;
          break;
      }
  }
};
var R = (s) => s;
var K = 0.15;
var M = {
  enabled(s = true) {
    return s;
  },
  eventOptions(s, i, t2) {
    return { ...t2.shared.eventOptions, ...s };
  },
  preventDefault(s = false) {
    return s;
  },
  triggerAllEvents(s = false) {
    return s;
  },
  rubberband(s = 0) {
    switch (s) {
      case true:
        return [K, K];
      case false:
        return [0, 0];
      default:
        return n.toVector(s);
    }
  },
  from(s) {
    if (typeof s == "function") return s;
    if (s != null) return n.toVector(s);
  },
  transform(s, i, t2) {
    const e = s || t2.shared.transform;
    if (this.hasCustomTransform = !!e, true) {
      const o = e || R;
      return (n2) => {
        const r = o(n2);
        return (!isFinite(r[0]) || !isFinite(r[1])) && console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${r[0]},${[1]}]`), r;
      };
    }
    return e || R;
  },
  threshold(s) {
    return n.toVector(s, 0);
  }
};
Object.assign(M, {
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
var ft = 0;
var m = {
  ...M,
  axis(s, i, { axis: t2 }) {
    if (this.lockDirection = t2 === "lock", !this.lockDirection) return t2;
  },
  axisThreshold(s = ft) {
    return s;
  },
  bounds(s = {}) {
    if (typeof s == "function")
      return (n2) => m.bounds(s(n2));
    if ("current" in s)
      return () => s.current;
    if ("value" in s)
      return () => s.value;
    if (typeof HTMLElement == "function" && s instanceof HTMLElement)
      return s;
    const { left: i = -1 / 0, right: t2 = 1 / 0, top: e = -1 / 0, bottom: o = 1 / 0 } = s;
    return [
      [i, t2],
      [e, o]
    ];
  }
};
var U = {
  ArrowRight: (s, i = 1) => [s * i, 0],
  ArrowLeft: (s, i = 1) => [-1 * s * i, 0],
  ArrowUp: (s, i = 1) => [0, -1 * s * i],
  ArrowDown: (s, i = 1) => [0, s * i]
};
var dt = class extends y2 {
  constructor() {
    super(...arguments);
    l(this, "ingKey", "dragging");
  }
  // superseeds generic Engine reset call
  reset() {
    super.reset();
    const t2 = this.state;
    t2._pointerId = void 0, t2._pointerActive = false, t2._keyboardActive = false, t2._preventScroll = false, t2._delayed = false, t2.swipe = [0, 0], t2.tap = false, t2.canceled = false, t2.cancel = this.cancel.bind(this);
  }
  setup() {
    const t2 = this.state;
    if (t2._bounds instanceof HTMLElement) {
      const e = t2._bounds.getBoundingClientRect(), o = t2.currentTarget.getBoundingClientRect(), n2 = {
        left: e.left - o.left + t2.offset[0],
        right: e.right - o.right + t2.offset[0],
        top: e.top - o.top + t2.offset[1],
        bottom: e.bottom - o.bottom + t2.offset[1]
      };
      t2._bounds = m.bounds(n2);
    }
  }
  cancel() {
    const t2 = this.state;
    t2.canceled || (t2.canceled = true, t2._active = false, setTimeout(() => {
      this.compute(), this.emit();
    }, 0));
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  // superseeds Engine clean function
  clean() {
    this.pointerClean(), this.state._pointerActive = false, this.state._keyboardActive = false, super.clean();
  }
  pointerDown(t2) {
    const e = this.config, o = this.state;
    if (t2.buttons != null && // If the user submits an array as pointer.buttons, don't start the drag
    // if event.buttons isn't included inside that array.
    (Array.isArray(e.pointerButtons) ? !e.pointerButtons.includes(t2.buttons) : (
      // If the user submits a number as pointer.buttons, refuse the drag if
      // config.pointerButtons is different than `-1` and if event.buttons
      // doesn't match the combination.
      e.pointerButtons !== -1 && e.pointerButtons !== t2.buttons
    )))
      return;
    const n2 = this.ctrl.setEventIds(t2);
    e.pointerCapture && t2.target.setPointerCapture(t2.pointerId), // in some situations (https://github.com/pmndrs/use-gesture/issues/494#issuecomment-1127584116)
    // like when a new browser tab is opened during a drag gesture, the drag
    // can be interrupted mid-way, and can stall. This happens because the
    // pointerId that initiated the gesture is lost, and since the drag
    // persists until that pointerId is lifted with pointerup, it never ends.
    //
    // Therefore, when we detect that only one pointer is pressing the screen,
    // we consider that the gesture can proceed.
    !(n2 && n2.size > 1 && o._pointerActive) && (this.start(t2), this.setupPointer(t2), o._pointerId = x(t2), o._pointerActive = true, this.computeValues(_(t2)), this.computeInitial(), e.preventScrollAxis && H(t2) !== "mouse" ? (o._active = false, this.setupScrollPrevention(t2)) : e.delay > 0 ? (this.setupDelayTrigger(t2), e.triggerAllEvents && (this.compute(t2), this.emit())) : this.startPointerDrag(t2));
  }
  startPointerDrag(t2) {
    const e = this.state;
    e._active = true, e._preventScroll = true, e._delayed = false, this.compute(t2), this.emit();
  }
  pointerMove(t2) {
    const e = this.state, o = this.config;
    if (!e._pointerActive) return;
    const n2 = x(t2);
    if (e._pointerId !== void 0 && n2 !== e._pointerId) return;
    const r = _(t2);
    if (document.pointerLockElement === t2.target ? e._delta = [t2.movementX, t2.movementY] : (e._delta = n.sub(r, e._values), this.computeValues(r)), n.addTo(e._movement, e._delta), this.compute(t2), e._delayed && e.intentional) {
      this.timeoutStore.remove("dragDelay"), e.active = false, this.startPointerDrag(t2);
      return;
    }
    if (o.preventScrollAxis && !e._preventScroll)
      if (e.axis)
        if (e.axis === o.preventScrollAxis || o.preventScrollAxis === "xy") {
          e._active = false, this.clean();
          return;
        } else {
          this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(t2);
          return;
        }
      else
        return;
    this.emit();
  }
  pointerUp(t2) {
    this.ctrl.setEventIds(t2);
    try {
      this.config.pointerCapture && t2.target.hasPointerCapture(t2.pointerId) && t2.target.releasePointerCapture(t2.pointerId);
    } catch {
      console.warn(
        "[@use-gesture]: If you see this message, it's likely that you're using an outdated version of `@react-three/fiber`. \n\nPlease upgrade to the latest version."
      );
    }
    const e = this.state, o = this.config;
    if (!e._active || !e._pointerActive) return;
    const n2 = x(t2);
    if (e._pointerId !== void 0 && n2 !== e._pointerId) return;
    this.state._pointerActive = false, this.setActive(), this.compute(t2);
    const [r, h] = e._distance;
    if (e.tap = r <= o.tapsThreshold && h <= o.tapsThreshold, e.tap && o.filterTaps)
      e._force = true;
    else {
      const [d, g] = e._delta, [c, v] = e._movement, [f4, E2] = o.swipe.velocity, [w2, T] = o.swipe.distance, D3 = o.swipe.duration;
      if (e.elapsedTime < D3) {
        const I = Math.abs(d / e.timeDelta), k = Math.abs(g / e.timeDelta);
        I > f4 && Math.abs(c) > w2 && (e.swipe[0] = Math.sign(d)), k > E2 && Math.abs(v) > T && (e.swipe[1] = Math.sign(g));
      }
    }
    this.emit();
  }
  pointerClick(t2) {
    !this.state.tap && t2.detail > 0 && (t2.preventDefault(), t2.stopPropagation());
  }
  setupPointer(t2) {
    const e = this.config, o = e.device;
    if (true)
      try {
        if (o === "pointer" && e.preventScrollDelay === void 0) {
          const n2 = "uv" in t2 ? t2.sourceEvent.currentTarget : t2.currentTarget;
          window.getComputedStyle(n2).touchAction === "auto" && console.warn(
            "[@use-gesture]: The drag target has its `touch-action` style property set to `auto`. It is recommended to add `touch-action: 'none'` so that the drag gesture behaves correctly on touch-enabled devices. For more information read this: https://1degrees.netlify.app/use-gesture-x//docs/extras/#touch-action.\n\nThis message will only show in development mode. It won't appear in production. If this is intended, you can ignore it.",
            n2
          );
        }
      } catch {
      }
    e.pointerLock && t2.currentTarget.requestPointerLock(), e.pointerCapture || (this.eventStore.add(this.sharedConfig.window, o, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, o, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, o, "cancel", this.pointerUp.bind(this)));
  }
  pointerClean() {
    this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock();
  }
  preventScroll(t2) {
    this.state._preventScroll && t2.cancelable && t2.preventDefault();
  }
  setupScrollPrevention(t2) {
    this.state._preventScroll = false, pt(t2);
    const e = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: false
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", e), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", e), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, t2);
  }
  setupDelayTrigger(t2) {
    this.state._delayed = true, this.timeoutStore.add(
      "dragDelay",
      () => {
        this.state._step = [0, 0], this.startPointerDrag(t2);
      },
      this.config.delay
    );
  }
  keyDown(t2) {
    const e = U[t2.key];
    if (e) {
      const o = this.state, n2 = t2.shiftKey ? 10 : t2.altKey ? 0.1 : 1;
      this.start(t2), o._delta = e(this.config.keyboardDisplacement, n2), o._keyboardActive = true, n.addTo(o._movement, o._delta), this.compute(t2), this.emit();
    }
  }
  keyUp(t2) {
    t2.key in U && (this.state._keyboardActive = false, this.setActive(), this.compute(t2), this.emit());
  }
  bind(t2) {
    const e = this.config.device;
    t2(e, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (t2(e, "change", this.pointerMove.bind(this)), t2(e, "end", this.pointerUp.bind(this)), t2(e, "cancel", this.pointerUp.bind(this)), t2("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (t2("key", "down", this.keyDown.bind(this)), t2("key", "up", this.keyUp.bind(this))), this.config.filterTaps && t2("click", "", this.pointerClick.bind(this), { capture: true, passive: false });
  }
};
function pt(s) {
  "persist" in s && typeof s.persist == "function" && s.persist();
}
var b = typeof window < "u" && window.document && window.document.createElement;
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
    return false;
  }
}
var u = {
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
};
var yt = 250;
var bt = 180;
var Et = 0.5;
var wt = 50;
var Tt = 250;
var Dt = 10;
var B = { mouse: 0, touch: 0, pen: 8 };
var j = {
  ...m,
  device(s, i, { pointer: { touch: t2 = false, lock: e = false, mouse: o = false } = {} }) {
    return this.pointerLock = e && u.pointerLock, u.touch && t2 ? "touch" : this.pointerLock ? "mouse" : u.pointer && !o ? "pointer" : u.touch ? "touch" : "mouse";
  },
  preventScrollAxis(s, i, { preventScroll: t2 }) {
    if (this.preventScrollDelay = typeof t2 == "number" ? t2 : t2 || t2 === void 0 && s ? yt : void 0, !(!u.touchscreen || t2 === false))
      return s || (t2 !== void 0 ? "y" : void 0);
  },
  pointerCapture(s, i, { pointer: { capture: t2 = true, buttons: e = 1, keys: o = true } = {} }) {
    return this.pointerButtons = e, this.keys = o, !this.pointerLock && this.device === "pointer" && t2;
  },
  threshold(s, i, { filterTaps: t2 = false, tapsThreshold: e = 3, axis: o = void 0 }) {
    const n2 = n.toVector(s, t2 ? e : o ? 1 : 0);
    return this.filterTaps = t2, this.tapsThreshold = e, n2;
  },
  swipe({ velocity: s = Et, distance: i = wt, duration: t2 = Tt } = {}) {
    return {
      velocity: this.transform(n.toVector(s)),
      distance: this.transform(n.toVector(i)),
      duration: t2
    };
  },
  delay(s = 0) {
    switch (s) {
      case true:
        return bt;
      case false:
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
Object.assign(j, {
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
  const [i, t2] = s.overflow, [e, o] = s._delta, [n2, r] = s._direction;
  (i < 0 && e > 0 && n2 < 0 || i > 0 && e < 0 && n2 > 0) && (s._movement[0] = s._movementBound[0]), (t2 < 0 && o > 0 && r < 0 || t2 > 0 && o < 0 && r > 0) && (s._movement[1] = s._movementBound[1]);
}
var At = 30;
var It = 100;
var kt = class extends z {
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
    const t2 = this.state;
    t2._touchIds = [], t2.canceled = false, t2.cancel = this.cancel.bind(this), t2.turns = 0;
  }
  computeOffset() {
    const { type: t2, movement: e, lastOffset: o } = this.state;
    t2 === "wheel" ? this.state.offset = n.add(e, o) : this.state.offset = [(1 + e[0]) * o[0], e[1] + o[1]];
  }
  computeMovement() {
    const { offset: t2, lastOffset: e } = this.state;
    this.state.movement = [t2[0] / e[0], t2[1] - e[1]];
  }
  axisIntent() {
    const t2 = this.state, [e, o] = t2._movement;
    if (!t2.axis) {
      const n2 = Math.abs(e) * At - Math.abs(o);
      n2 < 0 ? t2.axis = "angle" : n2 > 0 && (t2.axis = "scale");
    }
  }
  restrictToAxis(t2) {
    this.config.lockDirection && (this.state.axis === "scale" ? t2[1] = 0 : this.state.axis === "angle" && (t2[0] = 0));
  }
  cancel() {
    const t2 = this.state;
    t2.canceled || setTimeout(() => {
      t2.canceled = true, t2._active = false, this.compute(), this.emit();
    }, 0);
  }
  touchStart(t2) {
    this.ctrl.setEventIds(t2);
    const e = this.state, o = this.ctrl.touchIds;
    if (e._active && e._touchIds.every((r) => o.has(r)) || o.size < 2) return;
    this.start(t2), e._touchIds = Array.from(o).slice(0, 2);
    const n2 = O(t2, e._touchIds);
    n2 && this.pinchStart(t2, n2);
  }
  pointerStart(t2) {
    if (t2.buttons != null && t2.buttons % 2 !== 1) return;
    this.ctrl.setEventIds(t2), t2.target.setPointerCapture(t2.pointerId);
    const e = this.state, o = e._pointerEvents, n2 = this.ctrl.pointerIds;
    if (e._active && Array.from(o.keys()).every((h) => n2.has(h)) || (o.size < 2 && o.set(t2.pointerId, t2), e._pointerEvents.size < 2)) return;
    this.start(t2);
    const r = S(...Array.from(o.values()));
    r && this.pinchStart(t2, r);
  }
  pinchStart(t2, e) {
    const o = this.state;
    o.origin = e.origin, this.computeValues([e.distance, e.angle]), this.computeInitial(), this.compute(t2), this.emit();
  }
  touchMove(t2) {
    if (!this.state._active) return;
    const e = O(t2, this.state._touchIds);
    e && this.pinchMove(t2, e);
  }
  pointerMove(t2) {
    const e = this.state._pointerEvents;
    if (e.has(t2.pointerId) && e.set(t2.pointerId, t2), !this.state._active) return;
    const o = S(...Array.from(e.values()));
    o && this.pinchMove(t2, o);
  }
  pinchMove(t2, e) {
    const o = this.state, n2 = o._values[1], r = e.angle - n2;
    let h = 0;
    Math.abs(r) > 270 && (h += Math.sign(r)), this.computeValues([e.distance, e.angle - 360 * h]), o.origin = e.origin, o.turns = h, o._movement = [o._values[0] / o._initial[0] - 1, o._values[1] - o._initial[1]], this.compute(t2), this.emit();
  }
  touchEnd(t2) {
    this.ctrl.setEventIds(t2), this.state._active && this.state._touchIds.some((e) => !this.ctrl.touchIds.has(e)) && (this.state._active = false, this.compute(t2), this.emit());
  }
  pointerEnd(t2) {
    const e = this.state;
    this.ctrl.setEventIds(t2);
    try {
      t2.target.releasePointerCapture(t2.pointerId);
    } catch {
    }
    e._pointerEvents.has(t2.pointerId) && e._pointerEvents.delete(t2.pointerId), e._active && e._pointerEvents.size < 2 && (e._active = false, this.compute(t2), this.emit());
  }
  gestureStart(t2) {
    t2.cancelable && t2.preventDefault();
    const e = this.state;
    e._active || (this.start(t2), this.computeValues([t2.scale, t2.rotation]), e.origin = [t2.clientX, t2.clientY], this.compute(t2), this.emit());
  }
  gestureMove(t2) {
    if (t2.cancelable && t2.preventDefault(), !this.state._active) return;
    const e = this.state;
    this.computeValues([t2.scale, t2.rotation]), e.origin = [t2.clientX, t2.clientY];
    const o = e._movement;
    e._movement = [t2.scale - 1, t2.rotation], e._delta = n.sub(e._movement, o), this.compute(t2), this.emit();
  }
  gestureEnd(t2) {
    this.state._active && (this.state._active = false, this.compute(t2), this.emit());
  }
  wheel(t2) {
    const e = this.config.modifierKey;
    e && (Array.isArray(e) ? !e.find((o) => t2[o]) : !t2[e]) || (this.state._active ? this.wheelChange(t2) : this.wheelStart(t2), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)));
  }
  wheelStart(t2) {
    this.start(t2), this.wheelChange(t2);
  }
  wheelChange(t2) {
    "uv" in t2 || (t2.cancelable && t2.preventDefault(), !t2.defaultPrevented && console.warn(
      "[@use-gesture]: To properly support zoom on trackpads, try using the `target` option.\n\nThis message will only appear in development mode."
    ));
    const o = this.state;
    o._delta = [-W(t2)[1] / It * o.offset[0], 0], n.addTo(o._movement, o._delta), $(o), this.state.origin = [t2.clientX, t2.clientY], this.compute(t2), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = false, this.compute(), this.emit());
  }
  bind(t2) {
    const e = this.config.device;
    e && (t2(e, "start", this[e + "Start"].bind(this)), t2(e, "change", this[e + "Move"].bind(this)), t2(e, "end", this[e + "End"].bind(this)), t2(e, "cancel", this[e + "End"].bind(this)), t2("lostPointerCapture", "", this[e + "End"].bind(this))), this.config.pinchOnWheel && t2("wheel", "", this.wheel.bind(this), { passive: false });
  }
};
var xt = {
  ...M,
  device(s, i, { shared: t2, pointer: { touch: e = false } = {} }) {
    if (t2.target && !u.touch && u.gesture) return "gesture";
    if (u.touch && e) return "touch";
    if (u.touchscreen) {
      if (u.pointer) return "pointer";
      if (u.touch) return "touch";
    }
  },
  bounds(s, i, { scaleBounds: t2 = {}, angleBounds: e = {} }) {
    const o = (r) => {
      const h = V(A2(t2, r), { min: -1 / 0, max: 1 / 0 });
      return [h.min, h.max];
    }, n2 = (r) => {
      const h = V(A2(e, r), { min: -1 / 0, max: 1 / 0 });
      return [h.min, h.max];
    };
    return typeof t2 != "function" && typeof e != "function" ? [o(), n2()] : (r) => [o(r), n2(r)];
  },
  threshold(s, i, t2) {
    return this.lockDirection = t2.axis === "lock", n.toVector(s, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(s) {
    return s === void 0 ? "ctrlKey" : s;
  },
  pinchOnWheel(s = true) {
    return s;
  }
};
var St = class extends y2 {
  constructor() {
    super(...arguments);
    l(this, "ingKey", "moving");
  }
  move(t2) {
    this.config.mouseOnly && t2.pointerType !== "mouse" || (this.state._active ? this.moveChange(t2) : this.moveStart(t2), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)));
  }
  moveStart(t2) {
    this.start(t2), this.computeValues(_(t2)), this.compute(t2), this.computeInitial(), this.emit();
  }
  moveChange(t2) {
    if (!this.state._active) return;
    const e = _(t2), o = this.state;
    o._delta = n.sub(e, o._values), n.addTo(o._movement, o._delta), this.computeValues(e), this.compute(t2), this.emit();
  }
  moveEnd(t2) {
    this.state._active && (this.state._active = false, this.compute(t2), this.emit());
  }
  bind(t2) {
    t2("pointer", "change", this.move.bind(this)), t2("pointer", "leave", this.moveEnd.bind(this));
  }
};
var Ct = {
  ...m,
  mouseOnly: (s = true) => s
};
var Mt = class extends y2 {
  constructor() {
    super(...arguments);
    l(this, "ingKey", "scrolling");
  }
  scroll(t2) {
    this.state._active || this.start(t2), this.scrollChange(t2), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
  }
  scrollChange(t2) {
    t2.cancelable && t2.preventDefault();
    const e = this.state, o = at(t2);
    e._delta = n.sub(o, e._values), n.addTo(e._movement, e._delta), this.computeValues(o), this.compute(t2), this.emit();
  }
  scrollEnd() {
    this.state._active && (this.state._active = false, this.compute(), this.emit());
  }
  bind(t2) {
    t2("scroll", "", this.scroll.bind(this));
  }
};
var Lt = m;
var Ot = class extends y2 {
  constructor() {
    super(...arguments);
    l(this, "ingKey", "wheeling");
  }
  wheel(t2) {
    this.state._active || this.start(t2), this.wheelChange(t2), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelChange(t2) {
    const e = this.state;
    e._delta = W(t2), n.addTo(e._movement, e._delta), $(e), this.compute(t2), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = false, this.compute(), this.emit());
  }
  bind(t2) {
    t2("wheel", "", this.wheel.bind(this));
  }
};
var Pt = m;
var Nt = class extends y2 {
  constructor() {
    super(...arguments);
    l(this, "ingKey", "hovering");
  }
  enter(t2) {
    this.config.mouseOnly && t2.pointerType !== "mouse" || (this.start(t2), this.computeValues(_(t2)), this.compute(t2), this.emit());
  }
  leave(t2) {
    if (this.config.mouseOnly && t2.pointerType !== "mouse") return;
    const e = this.state;
    if (!e._active) return;
    e._active = false;
    const o = _(t2);
    e._movement = e._delta = n.sub(o, e._values), this.computeValues(o), this.compute(t2), e.delta = e.movement, this.emit();
  }
  bind(t2) {
    t2("pointer", "enter", this.enter.bind(this)), t2("pointer", "leave", this.leave.bind(this));
  }
};
var Vt = {
  ...m,
  mouseOnly: (s = true) => s
};
var Rt = /* @__PURE__ */ new Map();
var Kt = /* @__PURE__ */ new Map();
function Gt(s) {
  Rt.set(s.key, s.engine), Kt.set(s.key, s.resolver);
}
var jt = {
  key: "drag",
  engine: dt,
  resolver: j
};
var $t = {
  key: "hover",
  engine: Nt,
  resolver: Vt
};
var qt = {
  key: "move",
  engine: St,
  resolver: Ct
};
var Ft = {
  key: "pinch",
  engine: kt,
  resolver: xt
};
var Jt = {
  key: "scroll",
  engine: Mt,
  resolver: Lt
};
var Qt = {
  key: "wheel",
  engine: Ot,
  resolver: Pt
};

// ../vue/sandboxes/useDrag/node_modules/@use-gesture-x/core/dist/index.es.js
var E = Object.defineProperty;
var S2 = (t2, e, s) => e in t2 ? E(t2, e, { enumerable: true, configurable: true, writable: true, value: s }) : t2[e] = s;
var u2 = (t2, e, s) => S2(t2, typeof e != "symbol" ? e + "" : e, s);
var O2 = {
  target(t2) {
    if (t2)
      return () => "current" in t2 ? t2.current : "value" in t2 ? t2.value : t2;
  },
  enabled(t2 = true) {
    return t2;
  },
  window(t2 = u.isBrowser ? window : void 0) {
    return t2;
  },
  eventOptions({ passive: t2 = true, capture: e = false } = {}) {
    return { passive: t2, capture: e };
  },
  transform(t2) {
    return t2;
  }
};
function p(t2 = {}, e) {
  const s = {};
  for (const [n2, r] of Object.entries(e))
    switch (typeof r) {
      case "function":
        if (true) {
          const o = r.call(s, t2[n2], n2, t2);
          Number.isNaN(o) || (s[n2] = o);
        } else
          s[n2] = r.call(s, t2[n2], n2, t2);
        break;
      case "object":
        s[n2] = p(t2[n2], r);
        break;
      case "boolean":
        r && (s[n2] = t2[n2]);
        break;
    }
  return s;
}
function H2(t2, e, s = {}) {
  const { target: n2, eventOptions: r, window: o, enabled: a, transform: c, ...d } = t2;
  if (s.shared = p({ target: n2, eventOptions: r, window: o, enabled: a, transform: c }, O2), e) {
    const i = Kt.get(e);
    s[e] = p({ shared: s.shared, ...d }, i);
  } else
    for (const i in d) {
      const h = Kt.get(i);
      if (h)
        s[i] = p({ shared: s.shared, ...d[i] }, h);
      else if (!["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(i)) {
        if (i === "domTarget")
          throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
        console.warn(
          `[@use-gesture]: Unknown config key \`${i}\` was used. Please read the documentation for further information.`
        );
      }
    }
  return s;
}
var m2 = class {
  constructor(e, s) {
    u2(this, "_listeners", /* @__PURE__ */ new Set());
    u2(this, "_ctrl");
    u2(this, "_gestureKey");
    this._ctrl = e, this._gestureKey = s;
  }
  add(e, s, n2, r, o) {
    const a = this._listeners, c = Xt(s, n2), i = { ...this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, ...o };
    e.addEventListener(c, r, i);
    const h = () => {
      e.removeEventListener(c, r, i), a.delete(h);
    };
    return a.add(h), h;
  }
  clean() {
    this._listeners.forEach((e) => e()), this._listeners.clear();
  }
};
var M2 = class {
  constructor() {
    u2(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(e, s, n2 = 140, ...r) {
    this.remove(e), this._timeouts.set(e, window.setTimeout(s, n2, ...r));
  }
  remove(e) {
    const s = this._timeouts.get(e);
    s && window.clearTimeout(s);
  }
  clean() {
    this._timeouts.forEach((e) => void window.clearTimeout(e)), this._timeouts.clear();
  }
};
var K2 = class {
  constructor(e) {
    u2(this, "gestures", /* @__PURE__ */ new Set());
    u2(this, "_targetEventStore", new m2(this));
    u2(this, "gestureEventStores", {});
    u2(this, "gestureTimeoutStores", {});
    u2(this, "handlers", {});
    u2(this, "nativeHandlers");
    u2(this, "config", {});
    u2(this, "pointerIds", /* @__PURE__ */ new Set());
    u2(this, "touchIds", /* @__PURE__ */ new Set());
    u2(this, "state", {
      shared: {
        shiftKey: false,
        metaKey: false,
        ctrlKey: false,
        altKey: false
      }
    });
    D(this, e);
  }
  /**
   * Sets pointer or touch ids based on the event.
   * @param event
   */
  setEventIds(e) {
    if (C(e))
      return this.touchIds = new Set(Wt(e)), this.touchIds;
    if ("pointerId" in e)
      return e.type === "pointerup" || e.type === "pointercancel" ? this.pointerIds.delete(e.pointerId) : e.type === "pointerdown" && this.pointerIds.add(e.pointerId), this.pointerIds;
  }
  /**
   * Attaches handlers to the controller.
   * @param handlers
   * @param nativeHandlers
   */
  applyHandlers(e, s) {
    this.handlers = e, this.nativeHandlers = s;
  }
  /**
   * Compute and attaches a config to the controller.
   * @param config
   * @param gestureKey
   */
  applyConfig(e, s) {
    this.config = H2(e, s, this.config);
  }
  /**
   * Cleans all side effects (listeners, timeouts). When the gesture is
   * destroyed (in React, when the component is unmounted.)
   */
  clean() {
    this._targetEventStore.clean();
    for (const e of this.gestures)
      this.gestureEventStores[e].clean(), this.gestureTimeoutStores[e].clean();
  }
  /**
   * Executes side effects (attaching listeners to a `config.target`). Ran on
   * each render.
   */
  effect() {
    return this.config.shared.target && this.bind(), () => this._targetEventStore.clean();
  }
  /**
   * The bind function that can be returned by the gesture handler (a hook in
   * React for example.)
   * @param args
   */
  bind(...e) {
    const s = this.config.shared, n2 = {};
    let r;
    if (!(s.target && (r = s.target(), !r))) {
      if (s.enabled) {
        for (const a of this.gestures) {
          const c = this.config[a], d = w(n2, c.eventOptions, !!r);
          if (c.enabled) {
            const i = Rt.get(a);
            new i(this, e, a).bind(d);
          }
        }
        const o = w(n2, s.eventOptions, !!r);
        for (const a in this.nativeHandlers)
          o(
            a,
            "",
            // @ts-ignore
            (c) => this.nativeHandlers[a]({ ...this.state.shared, event: c, args: e }),
            void 0,
            true
          );
      }
      for (const o in n2)
        n2[o] = zt(...n2[o]);
      if (!r) return n2;
      for (const o in n2) {
        const { device: a, capture: c, passive: d } = Ht(o);
        this._targetEventStore.add(r, a, "", n2[o], { capture: c, passive: d });
      }
    }
  }
};
function l2(t2, e) {
  t2.gestures.add(e), t2.gestureEventStores[e] = new m2(t2, e), t2.gestureTimeoutStores[e] = new M2();
}
function D(t2, e) {
  e.drag && l2(t2, "drag"), e.wheel && l2(t2, "wheel"), e.scroll && l2(t2, "scroll"), e.move && l2(t2, "move"), e.pinch && l2(t2, "pinch"), e.hover && l2(t2, "hover");
}
var w = (t2, e, s) => (n2, r, o, a = {}, c = false) => {
  const d = a.capture ?? e.capture, i = a.passive ?? e.passive;
  let h = c ? n2 : Yt(n2, r, d);
  s && i && (h += "Passive"), t2[h] = t2[h] || [], t2[h].push(o);
};
var R2 = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function V2(t2) {
  const e = {}, s = {}, n2 = /* @__PURE__ */ new Set();
  for (let r in t2)
    R2.test(r) ? (n2.add(RegExp.lastMatch), s[r] = t2[r]) : e[r] = t2[r];
  return [s, e, n2];
}
function f2(t2, e, s, n2, r, o) {
  if (!t2.has(s)) return;
  if (!Rt.has(n2)) {
    console.warn(
      `[@use-gesture]: You've created a custom handler that that uses the \`${n2}\` gesture but isn't properly configured.

Please add \`${n2}Action\` when creating your handler.`
    );
    return;
  }
  const a = s + "Start", c = s + "End", d = (i) => {
    let h;
    return i.first && a in e && e[a](i), s in e && (h = e[s](i)), i.last && c in e && e[c](i), h;
  };
  r[n2] = d, o[n2] = o[n2] || {};
}
function W2(t2, e) {
  const [s, n2, r] = V2(t2), o = {};
  return f2(r, s, "onDrag", "drag", o, e), f2(r, s, "onWheel", "wheel", o, e), f2(r, s, "onScroll", "scroll", o, e), f2(r, s, "onPinch", "pinch", o, e), f2(r, s, "onMove", "move", o, e), f2(r, s, "onHover", "hover", o, e), { handlers: o, config: e, nativeHandlers: n2 };
}

// ../vue/sandboxes/useDrag/node_modules/@use-gesture-x/vue3/dist/index.es.js
function f3(n2, c = ref({}), t2, o) {
  const e = new K2(unref(n2));
  watch(
    () => [n2, o],
    () => {
      e.applyHandlers(unref(n2), unref(o));
    },
    { immediate: true, deep: true }
  ), watch(
    () => [c, t2],
    () => {
      e.applyConfig(unref(c), unref(t2));
    },
    { immediate: true, deep: true }
  );
  let s = null;
  const l3 = () => {
    s && s(), s = e.effect.bind(e)();
  };
  if (watch(
    () => [n2, c, t2, o],
    () => l3(),
    { deep: true }
  ), onMounted(() => l3()), onUnmounted(e.clean.bind(e)), c.target === void 0)
    return (...a) => {
      const h = e.bind.bind(e)(...a);
      return K3(h);
    };
}
function K3(n2) {
  const c = /(on)(.*)(Capture)?/g, t2 = {}, o = Object.keys(n2), e = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
  return o.forEach((s) => {
    const l3 = s.replace(c, (d, a, p2, h) => `${a}${e(p2)}${h || ""}`);
    t2[l3] = n2[s];
  }), t2;
}
function $2(n2, c) {
  Gt(jt);
  const t2 = ref({ drag: n2 }), o = ref(c || {}), e = ref("drag");
  return f3(t2, o, e);
}
function j2(n2, c) {
  Gt(Ft);
  const t2 = ref({ pinch: n2 }), o = ref(c || {}), e = ref("pinch");
  return f3(t2, o, e);
}
function z2(n2, c) {
  Gt(Qt);
  const t2 = ref({ wheel: n2 }), o = ref(c || {}), e = ref("wheel");
  return console.log("useWheel", o, "------"), f3(t2, o, e);
}
function B2(n2, c) {
  Gt(Jt);
  const t2 = ref({ scroll: n2 }), o = ref(c || {}), e = ref("scroll");
  return f3(t2, o, e);
}
function O3(n2, c) {
  Gt(qt);
  const t2 = ref({ move: n2 }), o = ref(c || {}), e = ref("move");
  return f3(t2, o, e);
}
function P2(n2, c) {
  Gt($t);
  const t2 = ref({ hover: n2 }), o = ref(c || {}), e = ref("hover");
  return f3(t2, o, e);
}
function G2(n2) {
  return n2.forEach(Gt), function(t2, o) {
    const { handlers: e, nativeHandlers: s, config: l3 } = W2(unref(t2), unref(o) || {}), d = ref(e), a = ref(l3), p2 = ref(s);
    return watch(
      () => [t2, o],
      () => {
        const { handlers: h, nativeHandlers: H3, config: k } = W2(unref(t2), unref(o) || {});
        d.value = h, a.value = k, p2.value = H3;
      },
      { deep: true }
    ), f3(d, a, void 0, p2);
  };
}
function D2(n2, c) {
  return G2([jt, Ft, Jt, Qt, qt, $t])(n2, c || {});
}
export {
  Kt as ConfigResolverMap,
  Rt as EngineMap,
  G2 as createUseGesture,
  jt as dragAction,
  $t as hoverAction,
  qt as moveAction,
  Ft as pinchAction,
  Gt as registerAction,
  t as rubberbandIfOutOfBounds,
  Jt as scrollAction,
  $2 as useDrag,
  D2 as useGesture,
  P2 as useHover,
  O3 as useMove,
  j2 as usePinch,
  B2 as useScroll,
  z2 as useWheel,
  Qt as wheelAction
};
//# sourceMappingURL=@use-gesture-x_vue3.js.map
