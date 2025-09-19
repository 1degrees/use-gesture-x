var E = Object.defineProperty;
var S = (t, e, s) => e in t ? E(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var u = (t, e, s) => S(t, typeof e != "symbol" ? e + "" : e, s);
import { S as _, C as v, t as b, i as T, a as I, E as g, c as P, p as y, b as N } from "./actions-Buizaugf.js";
const O = {
  target(t) {
    if (t)
      return () => "current" in t ? t.current : "value" in t ? t.value : t;
  },
  enabled(t = !0) {
    return t;
  },
  window(t = _.isBrowser ? window : void 0) {
    return t;
  },
  eventOptions({ passive: t = !0, capture: e = !1 } = {}) {
    return { passive: t, capture: e };
  },
  transform(t) {
    return t;
  }
};
function p(t = {}, e) {
  const s = {};
  for (const [n, r] of Object.entries(e))
    switch (typeof r) {
      case "function":
        if (process.env.NODE_ENV === "development") {
          const o = r.call(s, t[n], n, t);
          Number.isNaN(o) || (s[n] = o);
        } else
          s[n] = r.call(s, t[n], n, t);
        break;
      case "object":
        s[n] = p(t[n], r);
        break;
      case "boolean":
        r && (s[n] = t[n]);
        break;
    }
  return s;
}
function H(t, e, s = {}) {
  const { target: n, eventOptions: r, window: o, enabled: a, transform: c, ...d } = t;
  if (s.shared = p({ target: n, eventOptions: r, window: o, enabled: a, transform: c }, O), e) {
    const i = v.get(e);
    s[e] = p({ shared: s.shared, ...d }, i);
  } else
    for (const i in d) {
      const h = v.get(i);
      if (h)
        s[i] = p({ shared: s.shared, ...d[i] }, h);
      else if (process.env.NODE_ENV === "development" && !["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(i)) {
        if (i === "domTarget")
          throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
        console.warn(
          `[@use-gesture]: Unknown config key \`${i}\` was used. Please read the documentation for further information.`
        );
      }
    }
  return s;
}
class m {
  constructor(e, s) {
    u(this, "_listeners", /* @__PURE__ */ new Set());
    u(this, "_ctrl");
    u(this, "_gestureKey");
    this._ctrl = e, this._gestureKey = s;
  }
  add(e, s, n, r, o) {
    const a = this._listeners, c = b(s, n), i = { ...this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, ...o };
    e.addEventListener(c, r, i);
    const h = () => {
      e.removeEventListener(c, r, i), a.delete(h);
    };
    return a.add(h), h;
  }
  clean() {
    this._listeners.forEach((e) => e()), this._listeners.clear();
  }
}
class M {
  constructor() {
    u(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(e, s, n = 140, ...r) {
    this.remove(e), this._timeouts.set(e, window.setTimeout(s, n, ...r));
  }
  remove(e) {
    const s = this._timeouts.get(e);
    s && window.clearTimeout(s);
  }
  clean() {
    this._timeouts.forEach((e) => void window.clearTimeout(e)), this._timeouts.clear();
  }
}
class K {
  constructor(e) {
    /**
     * The list of gestures handled by the Controller.
     */
    u(this, "gestures", /* @__PURE__ */ new Set());
    /**
     * The event store that keeps track of the config.target listeners.
     */
    u(this, "_targetEventStore", new m(this));
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
    D(this, e);
  }
  /**
   * Sets pointer or touch ids based on the event.
   * @param event
   */
  setEventIds(e) {
    if (T(e))
      return this.touchIds = new Set(I(e)), this.touchIds;
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
    this.config = H(e, s, this.config);
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
    const s = this.config.shared, n = {};
    let r;
    if (!(s.target && (r = s.target(), !r))) {
      if (s.enabled) {
        for (const a of this.gestures) {
          const c = this.config[a], d = w(n, c.eventOptions, !!r);
          if (c.enabled) {
            const i = g.get(a);
            new i(this, e, a).bind(d);
          }
        }
        const o = w(n, s.eventOptions, !!r);
        for (const a in this.nativeHandlers)
          o(
            a,
            "",
            // @ts-ignore
            (c) => this.nativeHandlers[a]({ ...this.state.shared, event: c, args: e }),
            void 0,
            !0
          );
      }
      for (const o in n)
        n[o] = P(...n[o]);
      if (!r) return n;
      for (const o in n) {
        const { device: a, capture: c, passive: d } = y(o);
        this._targetEventStore.add(r, a, "", n[o], { capture: c, passive: d });
      }
    }
  }
}
function l(t, e) {
  t.gestures.add(e), t.gestureEventStores[e] = new m(t, e), t.gestureTimeoutStores[e] = new M();
}
function D(t, e) {
  e.drag && l(t, "drag"), e.wheel && l(t, "wheel"), e.scroll && l(t, "scroll"), e.move && l(t, "move"), e.pinch && l(t, "pinch"), e.hover && l(t, "hover");
}
const w = (t, e, s) => (n, r, o, a = {}, c = !1) => {
  const d = a.capture ?? e.capture, i = a.passive ?? e.passive;
  let h = c ? n : N(n, r, d);
  s && i && (h += "Passive"), t[h] = t[h] || [], t[h].push(o);
}, R = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function V(t) {
  const e = {}, s = {}, n = /* @__PURE__ */ new Set();
  for (let r in t)
    R.test(r) ? (n.add(RegExp.lastMatch), s[r] = t[r]) : e[r] = t[r];
  return [s, e, n];
}
function f(t, e, s, n, r, o) {
  if (!t.has(s)) return;
  if (!g.has(n)) {
    process.env.NODE_ENV === "development" && console.warn(
      `[@use-gesture]: You've created a custom handler that that uses the \`${n}\` gesture but isn't properly configured.

Please add \`${n}Action\` when creating your handler.`
    );
    return;
  }
  const a = s + "Start", c = s + "End", d = (i) => {
    let h;
    return i.first && a in e && e[a](i), s in e && (h = e[s](i)), i.last && c in e && e[c](i), h;
  };
  r[n] = d, o[n] = o[n] || {};
}
function W(t, e) {
  const [s, n, r] = V(t), o = {};
  return f(r, s, "onDrag", "drag", o, e), f(r, s, "onWheel", "wheel", o, e), f(r, s, "onScroll", "scroll", o, e), f(r, s, "onPinch", "pinch", o, e), f(r, s, "onMove", "move", o, e), f(r, s, "onHover", "hover", o, e), { handlers: o, config: e, nativeHandlers: n };
}
export {
  K as Controller,
  W as parseMergedHandlers
};
