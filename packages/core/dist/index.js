var P = Object.defineProperty;
var y = (t, e, n) => e in t ? P(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var u = (t, e, n) => y(t, typeof e != "symbol" ? e + "" : e, n);
const E = {
  pointer: { start: "down", change: "move", end: "up" },
  mouse: { start: "down", change: "move", end: "up" },
  touch: { start: "start", change: "move", end: "end" },
  gesture: { start: "start", change: "change", end: "end" }
};
function w(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
const b = ["enter", "leave"];
function I(t = !1, e) {
  return t && !b.includes(e);
}
function O(t, e = "", n = !1) {
  const r = E[t], s = r && r[e] || e;
  return "on" + w(t) + w(s) + (I(n, s) ? "Capture" : "");
}
const N = ["gotpointercapture", "lostpointercapture"];
function M(t) {
  let e = t.substring(2).toLowerCase();
  const n = !!~e.indexOf("passive");
  n && (e = e.replace("passive", ""));
  const r = N.includes(e) ? "capturecapture" : "capture", s = !!~e.indexOf(r);
  return s && (e = e.replace("capture", "")), { device: e, capture: s, passive: n };
}
function C(t, e = "") {
  const n = E[t], r = n && n[e] || e;
  return t + r;
}
function H(t) {
  return "touches" in t;
}
function K(t) {
  return Array.from(t.touches).filter(
    (e) => {
      var n, r;
      return e.target === t.currentTarget || ((r = (n = t.currentTarget) == null ? void 0 : n.contains) == null ? void 0 : r.call(n, e.target));
    }
  );
}
function L(t) {
  return K(t).map((e) => e.identifier);
}
function k() {
}
function x(...t) {
  return t.length === 0 ? k : t.length === 1 ? t[0] : function() {
    let e;
    for (const n of t)
      e = n.apply(this, arguments) || e;
    return e;
  };
}
const l = typeof window < "u" && window.document && window.document.createElement;
function S() {
  return l && "ontouchstart" in window;
}
function D() {
  return S() || l && window.navigator.maxTouchPoints > 1;
}
function G() {
  return l && "onpointerdown" in window;
}
function R() {
  return l && "exitPointerLock" in window.document;
}
function V() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const A = {
  isBrowser: l,
  gesture: V(),
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
  touch: S(),
  // touch: isTouchScreen(),
  touchscreen: D(),
  pointer: G(),
  pointerLock: R()
}, T = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), W = {
  target(t) {
    if (t)
      return () => "current" in t ? t.current : "value" in t ? t.value : t;
  },
  enabled(t = !0) {
    return t;
  },
  window(t = A.isBrowser ? window : void 0) {
    return t;
  },
  eventOptions({ passive: t = !0, capture: e = !1 } = {}) {
    return { passive: t, capture: e };
  },
  transform(t) {
    return t;
  }
};
function v(t = {}, e) {
  const n = {};
  for (const [r, s] of Object.entries(e))
    switch (typeof s) {
      case "function":
        if (process.env.NODE_ENV === "development") {
          const o = s.call(n, t[r], r, t);
          Number.isNaN(o) || (n[r] = o);
        } else
          n[r] = s.call(n, t[r], r, t);
        break;
      case "object":
        n[r] = v(t[r], s);
        break;
      case "boolean":
        s && (n[r] = t[r]);
        break;
    }
  return n;
}
function B(t, e, n = {}) {
  const { target: r, eventOptions: s, window: o, enabled: c, transform: a, ...d } = t;
  if (n.shared = v({ target: r, eventOptions: s, window: o, enabled: c, transform: a }, W), e) {
    const i = g.get(e);
    n[e] = v({ shared: n.shared, ...d }, i);
  } else
    for (const i in d) {
      const p = g.get(i);
      if (p)
        n[i] = v({ shared: n.shared, ...d[i] }, p);
      else if (process.env.NODE_ENV === "development" && !["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(i)) {
        if (i === "domTarget")
          throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
        console.warn(
          `[@use-gesture]: Unknown config key \`${i}\` was used. Please read the documentation for further information.`
        );
      }
    }
  return n;
}
class _ {
  constructor(e, n) {
    u(this, "_listeners", /* @__PURE__ */ new Set());
    u(this, "_ctrl");
    u(this, "_gestureKey");
    this._ctrl = e, this._gestureKey = n;
  }
  add(e, n, r, s, o) {
    const c = this._listeners, a = C(n, r), i = { ...this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, ...o };
    e.addEventListener(a, s, i);
    const p = () => {
      e.removeEventListener(a, s, i), c.delete(p);
    };
    return c.add(p), p;
  }
  clean() {
    this._listeners.forEach((e) => e()), this._listeners.clear();
  }
}
class U {
  constructor() {
    u(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(e, n, r = 140, ...s) {
    this.remove(e), this._timeouts.set(e, window.setTimeout(n, r, ...s));
  }
  remove(e) {
    const n = this._timeouts.get(e);
    n && window.clearTimeout(n);
  }
  clean() {
    this._timeouts.forEach((e) => void window.clearTimeout(e)), this._timeouts.clear();
  }
}
class z {
  constructor(e) {
    /**
     * The list of gestures handled by the Controller.
     */
    u(this, "gestures", /* @__PURE__ */ new Set());
    /**
     * The event store that keeps track of the config.target listeners.
     */
    u(this, "_targetEventStore", new _(this));
    /**
     * Object that keeps track of all gesture event listeners.
     */
    u(this, "gestureEventStores", {});
    u(this, "gestureTimeoutStores", {});
    u(this, "handlers", {});
    u(this, "nativeHandlers");
    u(this, "config", {});
    u(this, "pointerIds", /* @__PURE__ */ new Set());
    u(this, "touchIds", /* @__PURE__ */ new Set());
    u(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    });
    $(this, e);
  }
  /**
   * Sets pointer or touch ids based on the event.
   * @param event
   */
  setEventIds(e) {
    if (H(e))
      return this.touchIds = new Set(L(e)), this.touchIds;
    if ("pointerId" in e)
      return e.type === "pointerup" || e.type === "pointercancel" ? this.pointerIds.delete(e.pointerId) : e.type === "pointerdown" && this.pointerIds.add(e.pointerId), this.pointerIds;
  }
  /**
   * Attaches handlers to the controller.
   * @param handlers
   * @param nativeHandlers
   */
  applyHandlers(e, n) {
    this.handlers = e, this.nativeHandlers = n;
  }
  /**
   * Compute and attaches a config to the controller.
   * @param config
   * @param gestureKey
   */
  applyConfig(e, n) {
    this.config = B(e, n, this.config);
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
    const n = this.config.shared, r = {};
    let s;
    if (!(n.target && (s = n.target(), !s))) {
      if (n.enabled) {
        for (const c of this.gestures) {
          const a = this.config[c], d = m(r, a.eventOptions, !!s);
          if (a.enabled) {
            const i = T.get(c);
            new i(this, e, c).bind(d);
          }
        }
        const o = m(r, n.eventOptions, !!s);
        for (const c in this.nativeHandlers)
          o(
            c,
            "",
            // @ts-ignore
            (a) => this.nativeHandlers[c]({ ...this.state.shared, event: a, args: e }),
            void 0,
            !0
          );
      }
      for (const o in r)
        r[o] = x(...r[o]);
      if (!s) return r;
      for (const o in r) {
        const { device: c, capture: a, passive: d } = M(o);
        this._targetEventStore.add(s, c, "", r[o], { capture: a, passive: d });
      }
    }
  }
}
function h(t, e) {
  t.gestures.add(e), t.gestureEventStores[e] = new _(t, e), t.gestureTimeoutStores[e] = new U();
}
function $(t, e) {
  e.drag && h(t, "drag"), e.wheel && h(t, "wheel"), e.scroll && h(t, "scroll"), e.move && h(t, "move"), e.pinch && h(t, "pinch"), e.hover && h(t, "hover");
}
const m = (t, e, n) => (r, s, o, c = {}, a = !1) => {
  const d = c.capture ?? e.capture, i = c.passive ?? e.passive;
  let p = a ? r : O(r, s, d);
  n && i && (p += "Passive"), t[p] = t[p] || [], t[p].push(o);
}, j = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function F(t) {
  const e = {}, n = {}, r = /* @__PURE__ */ new Set();
  for (let s in t)
    j.test(s) ? (r.add(RegExp.lastMatch), n[s] = t[s]) : e[s] = t[s];
  return [n, e, r];
}
function f(t, e, n, r, s, o) {
  if (!t.has(n)) return;
  if (!T.has(r)) {
    process.env.NODE_ENV === "development" && console.warn(
      `[@use-gesture]: You've created a custom handler that that uses the \`${r}\` gesture but isn't properly configured.

Please add \`${r}Action\` when creating your handler.`
    );
    return;
  }
  const c = n + "Start", a = n + "End", d = (i) => {
    let p;
    return i.first && c in e && e[c](i), n in e && (p = e[n](i)), i.last && a in e && e[a](i), p;
  };
  s[r] = d, o[r] = o[r] || {};
}
function q(t, e) {
  const [n, r, s] = F(t), o = {};
  return f(s, n, "onDrag", "drag", o, e), f(s, n, "onWheel", "wheel", o, e), f(s, n, "onScroll", "scroll", o, e), f(s, n, "onPinch", "pinch", o, e), f(s, n, "onMove", "move", o, e), f(s, n, "onHover", "hover", o, e), { handlers: o, config: e, nativeHandlers: r };
}
export {
  z as Controller,
  q as parseMergedHandlers
};
//# sourceMappingURL=index.js.map
