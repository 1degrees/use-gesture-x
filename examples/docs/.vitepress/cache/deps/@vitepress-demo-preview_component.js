import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  guardReactiveProps,
  isVNode,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  openBlock,
  popScopeId,
  pushScopeId,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  toDisplayString,
  unref,
  useAttrs,
  watch,
  watchEffect,
  withCtx,
  withKeys,
  withScopeId
} from "./chunk-ISEM245F.js";

// ../../node_modules/@vitepress-demo-preview/component/dist/preview-component.js
var Go = Object.defineProperty;
var Yo = (e, t, o) => t in e ? Go(e, t, { enumerable: true, configurable: true, writable: true, value: o }) : e[t] = o;
var Z = (e, t, o) => (Yo(e, typeof t != "symbol" ? t + "" : t, o), o);
var Dt = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [i, n] of t)
    o[i] = n;
  return o;
};
var ii = {};
var ni = {
  t: "1661231422733",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3259",
  width: "20",
  height: "20"
};
function si(e, t) {
  return openBlock(), createElementBlock("svg", ni, t[0] || (t[0] = [
    createBaseVNode("path", {
      d: "M682.666667 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l226.133333-226.133333-226.133333-226.133333c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733333 0l256 256c17.066667 17.066667 17.066667 42.666667 0 59.733334l-256 256c-8.533333 8.533333-17.066667 12.8-29.866666 12.8zM341.333333 810.666667c-12.8 0-21.333333-4.266667-29.866666-12.8l-256-256c-17.066667-17.066667-17.066667-42.666667 0-59.733334l256-256c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334L145.066667 512l226.133333 226.133333c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z",
      "p-id": "3260"
    }, null, -1)
  ]));
}
var Mt = Dt(ii, [["render", si]]);
var ri = {};
var ai = {
  t: "1661231449868",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3541",
  width: "20",
  height: "20"
};
function li(e, t) {
  return openBlock(), createElementBlock("svg", ai, t[0] || (t[0] = [
    createBaseVNode("path", {
      d: "M305.6 225.6c-17.6-17.6-43.2-17.6-59.2 0L19.2 460.8c-25.6 30.4-25.6 72 0 97.6l225.6 235.2c8 8 20.8 12.8 30.4 12.8s20.8-4.8 30.4-12.8c17.6-17.6 17.6-43.2 0-59.2L88 512l217.6-225.6c17.6-17.6 17.6-43.2 0-60.8zM1001.6 460.8L774.4 225.6c-17.6-17.6-43.2-17.6-59.2 0s-17.6 43.2 0 59.2L932.8 512 715.2 737.6c-17.6 17.6-17.6 43.2 0 59.2 8 8 17.6 12.8 30.4 12.8 12.8 0 20.8-4.8 30.4-12.8l225.6-235.2c28.8-28.8 28.8-70.4 0-100.8zM612.8 230.4c-20.8-8-46.4 4.8-56 25.6L382.4 742.4c-8 20.8 4.8 46.4 25.6 56 4.8 0 8 4.8 12.8 4.8 17.6 0 33.6-12.8 38.4-30.4l179.2-491.2c8-20.8-4.8-46.4-25.6-51.2z",
      "p-id": "3542"
    }, null, -1)
  ]));
}
var Ht = Dt(ri, [["render", li]]);
var ci = {};
var di = {
  viewBox: "0 0 544 560",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function ui(e, t) {
  return openBlock(), createElementBlock("svg", di, t[0] || (t[0] = [
    createBaseVNode("path", {
      d: "M399.503 143.667C399.319 152.501 406.332 159.812 415.167 159.997C424.001 160.181 431.312 153.168 431.497 144.333L399.503 143.667ZM416 120L431.997 120.333C431.999 120.207 432 120.081 432 119.954L416 120ZM360 64L360.046 48.0001C360.03 48 360.015 48 360 48L360 64ZM144 64V48C143.984 48 143.968 48 143.953 48.0001L144 64ZM80 128L64.0001 127.953C64 127.968 64 127.984 64 128L80 128ZM80 344H64C64 344.015 64 344.03 64.0001 344.046L80 344ZM136 400L135.954 416C135.97 416 135.985 416 136 416L136 400ZM160 416C168.837 416 176 408.837 176 400C176 391.163 168.837 384 160 384V416ZM217 160H439V128H217V160ZM439 160C461.644 160 480 178.356 480 201H512C512 160.683 479.317 128 439 128V160ZM480 201V423H512V201H480ZM480 423C480 445.644 461.644 464 439 464V496C479.317 496 512 463.317 512 423H480ZM439 464H217V496H439V464ZM217 464C194.356 464 176 445.644 176 423H144C144 463.317 176.683 496 217 496V464ZM176 423V201H144V423H176ZM176 201C176 178.356 194.356 160 217 160V128C176.683 128 144 160.683 144 201H176ZM431.497 144.333L431.997 120.333L400.003 119.667L399.503 143.667L431.497 144.333ZM432 119.954C431.946 100.888 424.347 82.6173 410.865 69.1349L388.238 91.7624C395.741 99.2658 399.97 109.434 400 120.046L432 119.954ZM410.865 69.1349C397.383 55.6526 379.112 48.0543 360.046 48.0001L359.954 79.9999C370.566 80.0301 380.734 84.2589 388.238 91.7624L410.865 69.1349ZM360 48H144V80H360V48ZM143.953 48.0001C122.767 48.0627 102.467 56.5064 87.4868 71.4868L110.114 94.1142C119.117 85.1118 131.316 80.0376 144.047 79.9999L143.953 48.0001ZM87.4868 71.4868C72.5064 86.4673 64.0627 106.767 64.0001 127.953L95.9999 128.047C96.0376 115.316 101.112 103.117 110.114 94.1142L87.4868 71.4868ZM64 128V344H96V128H64ZM64.0001 344.046C64.0543 363.112 71.6526 381.383 85.1349 394.865L107.762 372.238C100.259 364.734 96.0301 354.566 95.9999 343.954L64.0001 344.046ZM85.1349 394.865C98.6173 408.347 116.888 415.946 135.954 416L136.046 384C125.434 383.97 115.266 379.741 107.762 372.238L85.1349 394.865ZM136 416H160V384H136V416Z",
      fill: "currentColor"
    }, null, -1)
  ]));
}
var Lt = Dt(ci, [["render", ui]]);
var st = "vitepress-demo-preview";
var rt = (e, t, o, i) => {
  let n = t === "" ? `${e}` : `${e}-${t}`;
  return o && (n += `__${o}`), i && (n += `--${i}`), n;
};
var Nt = (e = "") => ({
  b: () => rt(st, e),
  e: (s = "") => rt(st, e, s),
  m: (s = "") => rt(st, e, "", s),
  bem: (s, r, a) => rt(st, s, r, a)
});
var Rt = () => {
  const e = ref(true);
  return {
    isCodeFold: e,
    setCodeFold: (o) => {
      e.value = o;
    }
  };
};
var St = 1;
var pi = class {
  constructor() {
    Z(this, "subscribers");
    Z(this, "toasts");
    Z(this, "dismissedToasts");
    Z(this, "subscribe", (e) => (this.subscribers.push(e), () => {
      const t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    }));
    Z(this, "publish", (e) => {
      this.subscribers.forEach((t) => t(e));
    });
    Z(this, "addToast", (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    });
    Z(this, "create", (e) => {
      var r;
      const { message: t, ...o } = e, i = typeof e.id == "number" || e.id && ((r = e.id) == null ? void 0 : r.length) > 0 ? e.id : St++, n = this.toasts.find((a) => a.id === i), s = e.dismissible === void 0 ? true : e.dismissible;
      return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i), n ? this.toasts = this.toasts.map((a) => a.id === i ? (this.publish({
        ...a,
        ...e,
        id: i,
        title: t
      }), {
        ...a,
        ...e,
        id: i,
        dismissible: s,
        title: t
      }) : a) : this.addToast({
        title: t,
        ...o,
        dismissible: s,
        id: i
      }), i;
    });
    Z(this, "dismiss", (e) => (e ? (this.dismissedToasts.add(e), requestAnimationFrame(() => this.subscribers.forEach((t) => t({
      id: e,
      dismiss: true
    })))) : this.toasts.forEach((t) => {
      this.subscribers.forEach((o) => o({
        id: t.id,
        dismiss: true
      }));
    }), e));
    Z(this, "message", (e, t) => this.create({
      ...t,
      message: e,
      type: "default"
    }));
    Z(this, "error", (e, t) => this.create({
      ...t,
      type: "error",
      message: e
    }));
    Z(this, "success", (e, t) => this.create({
      ...t,
      type: "success",
      message: e
    }));
    Z(this, "info", (e, t) => this.create({
      ...t,
      type: "info",
      message: e
    }));
    Z(this, "warning", (e, t) => this.create({
      ...t,
      type: "warning",
      message: e
    }));
    Z(this, "loading", (e, t) => this.create({
      ...t,
      type: "loading",
      message: e
    }));
    Z(this, "promise", (e, t) => {
      if (!t)
        return;
      let o;
      t.loading !== void 0 && (o = this.create({
        ...t,
        promise: e,
        type: "loading",
        message: t.loading,
        description: typeof t.description != "function" ? t.description : void 0
      }));
      const i = Promise.resolve(e instanceof Function ? e() : e);
      let n = o !== void 0, s;
      const r = i.then(async (l) => {
        if (s = ["resolve", l], isVNode(l))
          n = false, this.create({
            id: o,
            type: "default",
            message: l
          });
        else if (fi(l) && !l.ok) {
          n = false;
          const f = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error, m = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description, d = typeof f == "object" && !isVNode(f) ? f : {
            message: f || "",
            id: o || ""
          };
          this.create({
            id: o,
            type: "error",
            description: m,
            ...d
          });
        } else if (l instanceof Error) {
          n = false;
          const f = typeof t.error == "function" ? await t.error(l) : t.error, m = typeof t.description == "function" ? await t.description(l) : t.description, d = typeof f == "object" && !isVNode(f) ? f : {
            message: f || "",
            id: o || ""
          };
          this.create({
            id: o,
            type: "error",
            description: m,
            ...d
          });
        } else if (t.success !== void 0) {
          n = false;
          const f = typeof t.success == "function" ? await t.success(l) : t.success, m = typeof t.description == "function" ? await t.description(l) : t.description, d = typeof f == "object" && !isVNode(f) ? f : {
            message: f || "",
            id: o || ""
          };
          this.create({
            id: o,
            type: "success",
            description: m,
            ...d
          });
        }
      }).catch(async (l) => {
        if (s = ["reject", l], t.error !== void 0) {
          n = false;
          const p = typeof t.error == "function" ? await t.error(l) : t.error, f = typeof t.description == "function" ? await t.description(l) : t.description, u = typeof p == "object" && !isVNode(p) ? p : {
            message: p || "",
            id: o || ""
          };
          this.create({
            id: o,
            type: "error",
            description: f,
            ...u
          });
        }
      }).finally(() => {
        var l;
        n && (this.dismiss(o), o = void 0), (l = t.finally) == null || l.call(t);
      }), a = () => new Promise((l, p) => r.then(() => s[0] === "reject" ? p(s[1]) : l(s[1])).catch(p));
      return typeof o != "string" && typeof o != "number" ? { unwrap: a } : Object.assign(o, { unwrap: a });
    });
    Z(this, "custom", (e, t) => {
      const o = (t == null ? void 0 : t.id) || St++;
      return this.publish({
        component: e,
        id: o,
        ...t
      }), o;
    });
    Z(this, "getActiveToasts", () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)));
    this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
};
var ee = new pi();
function hi(e, t) {
  const o = (t == null ? void 0 : t.id) || St++;
  return ee.create({
    message: e,
    id: o,
    type: "default",
    ...t
  }), o;
}
var fi = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number";
var mi = hi;
var gi = () => ee.toasts;
var vi = () => ee.getActiveToasts();
var yi = Object.assign(mi, {
  success: ee.success,
  info: ee.info,
  warning: ee.warning,
  error: ee.error,
  custom: ee.custom,
  message: ee.message,
  promise: ee.promise,
  dismiss: ee.dismiss,
  loading: ee.loading
}, {
  getHistory: gi,
  getToasts: vi
});
function at(e) {
  return e.label !== void 0;
}
var wi = 3;
var Bo = "24px";
var ko = "16px";
var lo = 4e3;
var bi = 356;
var $i = 14;
var Ci = 45;
var Eo = 200;
function _i() {
  const e = ref(false);
  return watchEffect(() => {
    const t = () => {
      e.value = document.hidden;
    };
    return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
  }), { isDocumentHidden: e };
}
function _e(...e) {
  return e.filter(Boolean).join(" ");
}
function xi(e) {
  const [t, o] = e.split("-"), i = [];
  return t && i.push(t), o && i.push(o), i;
}
function Ti(e, t) {
  const o = {};
  return [e, t].forEach((i, n) => {
    const s = n === 1, r = s ? "--mobile-offset" : "--offset", a = s ? ko : Bo;
    function l(p) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((f) => {
        o[`${r}-${f}`] = typeof p == "number" ? `${p}px` : p;
      });
    }
    typeof i == "number" || typeof i == "string" ? l(i) : typeof i == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((p) => {
      i[p] === void 0 ? o[`${r}-${p}`] = a : o[`${r}-${p}`] = typeof i[p] == "number" ? `${i[p]}px` : i[p];
    }) : l(a);
  }), o;
}
var Si = [
  "data-rich-colors",
  "data-styled",
  "data-mounted",
  "data-promise",
  "data-swiped",
  "data-removed",
  "data-visible",
  "data-y-position",
  "data-x-position",
  "data-index",
  "data-front",
  "data-swiping",
  "data-dismissible",
  "data-type",
  "data-invert",
  "data-swipe-out",
  "data-swipe-direction",
  "data-expanded"
];
var Ai = ["aria-label", "data-disabled"];
var Pi = defineComponent({
  __name: "Toast",
  props: {
    toast: {},
    toasts: {},
    index: {},
    swipeDirections: {},
    expanded: { type: Boolean },
    invert: { type: Boolean },
    heights: {},
    gap: {},
    position: {},
    visibleToasts: {},
    expandByDefault: { type: Boolean },
    closeButton: { type: Boolean },
    interacting: { type: Boolean },
    style: {},
    cancelButtonStyle: {},
    actionButtonStyle: {},
    duration: {},
    class: {},
    unstyled: { type: Boolean },
    descriptionClass: {},
    loadingIcon: {},
    classes: {},
    icons: {},
    closeButtonAriaLabel: {},
    defaultRichColors: { type: Boolean }
  },
  emits: [
    "update:heights",
    "update:height",
    "removeToast"
  ],
  setup(e, { emit: t }) {
    const o = e, i = t, n = ref(null), s = ref(null), r = ref(false), a = ref(false), l = ref(false), p = ref(false), f = ref(false), m = ref(0), u = ref(0), d = ref(o.toast.duration || o.duration || lo), w = ref(null), C = ref(null), B = computed(() => o.index === 0), _ = computed(() => o.index + 1 <= o.visibleToasts), b = computed(() => o.toast.type), T = computed(() => o.toast.dismissible !== false), z = computed(() => o.toast.class || ""), D = computed(() => o.descriptionClass || ""), G = computed(() => {
      const c = o.toast.position || o.position, M = o.heights.filter((R) => R.position === c).findIndex((R) => R.toastId === o.toast.id);
      return M >= 0 ? M : 0;
    }), j = computed(() => {
      const c = o.toast.position || o.position;
      return o.heights.filter((M) => M.position === c).reduce((M, R, V) => V >= G.value ? M : M + R.height, 0);
    }), U = computed(() => G.value * o.gap + j.value || 0), h = computed(() => {
      var c;
      return (c = o.toast.closeButton) != null ? c : o.closeButton;
    }), g = computed(() => o.toast.duration || o.duration || lo), v = ref(0), A = ref(0), E = ref(null), L = computed(() => o.position.split("-")), Q = computed(() => L.value[0]), J = computed(() => L.value[1]), Y = computed(() => typeof o.toast.title != "string"), X = computed(() => typeof o.toast.description != "string"), { isDocumentHidden: oe } = _i(), ge = computed(() => b.value && b.value === "loading");
    onMounted(() => {
      r.value = true, d.value = g.value;
    }), watchEffect(async () => {
      if (!r.value || !C.value)
        return;
      await nextTick();
      const c = C.value, N = c.style.height;
      c.style.height = "auto";
      const M = c.getBoundingClientRect().height;
      c.style.height = N, u.value = M, i("update:height", {
        toastId: o.toast.id,
        height: M,
        position: o.toast.position || o.position
      });
    });
    function he() {
      a.value = true, m.value = U.value, setTimeout(() => {
        i("removeToast", o.toast);
      }, Eo);
    }
    function Ne() {
      var c, N;
      if (ge.value || !T.value)
        return {};
      he(), (N = (c = o.toast).onDismiss) == null || N.call(c, o.toast);
    }
    function et(c) {
      ge.value || !T.value || (w.value = /* @__PURE__ */ new Date(), m.value = U.value, c.target.setPointerCapture(c.pointerId), c.target.tagName !== "BUTTON" && (l.value = true, E.value = {
        x: c.clientX,
        y: c.clientY
      }));
    }
    function tt() {
      var q, ve, ye, we, be, $e, Ce;
      if (p.value || !T.value)
        return;
      E.value = null;
      const c = Number(((q = C.value) == null ? void 0 : q.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), N = Number(((ve = C.value) == null ? void 0 : ve.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), M = (/* @__PURE__ */ new Date()).getTime() - (((ye = w.value) == null ? void 0 : ye.getTime()) || 0), R = n.value === "x" ? c : N, V = Math.abs(R) / M;
      if (Math.abs(R) >= Ci || V > 0.11) {
        m.value = U.value, (be = (we = o.toast).onDismiss) == null || be.call(we, o.toast), n.value === "x" ? s.value = c > 0 ? "right" : "left" : s.value = N > 0 ? "down" : "up", he(), p.value = true;
        return;
      } else
        ($e = C.value) == null || $e.style.setProperty("--swipe-amount-x", "0px"), (Ce = C.value) == null || Ce.style.setProperty("--swipe-amount-y", "0px");
      f.value = false, l.value = false, n.value = null;
    }
    function ot(c) {
      var ye, we, be, $e, Ce, Re;
      if (!E.value || !T.value || ((be = (we = (ye = window == null ? void 0 : window.getSelection()) == null ? void 0 : ye.toString()) == null ? void 0 : we.length) != null ? be : false))
        return;
      const M = c.clientY - E.value.y, R = c.clientX - E.value.x, V = ($e = o.swipeDirections) != null ? $e : xi(o.position);
      !n.value && (Math.abs(R) > 1 || Math.abs(M) > 1) && (n.value = Math.abs(R) > Math.abs(M) ? "x" : "y");
      let q = {
        x: 0,
        y: 0
      };
      const ve = (le) => 1 / (1.5 + Math.abs(le) / 20);
      if (n.value === "y") {
        if (V.includes("top") || V.includes("bottom"))
          if (V.includes("top") && M < 0 || V.includes("bottom") && M > 0)
            q.y = M;
          else {
            const le = M * ve(M);
            q.y = Math.abs(le) < Math.abs(M) ? le : M;
          }
      } else if (n.value === "x" && (V.includes("left") || V.includes("right")))
        if (V.includes("left") && R < 0 || V.includes("right") && R > 0)
          q.x = R;
        else {
          const le = R * ve(R);
          q.x = Math.abs(le) < Math.abs(R) ? le : R;
        }
      (Math.abs(q.x) > 0 || Math.abs(q.y) > 0) && (f.value = true), (Ce = C.value) == null || Ce.style.setProperty("--swipe-amount-x", `${q.x}px`), (Re = C.value) == null || Re.style.setProperty("--swipe-amount-y", `${q.y}px`);
    }
    onMounted(() => {
      if (r.value = true, !C.value)
        return;
      const c = C.value.getBoundingClientRect().height;
      u.value = c;
      const N = [{
        toastId: o.toast.id,
        height: c,
        position: o.toast.position
      }, ...o.heights];
      i("update:heights", N);
    }), onBeforeUnmount(() => {
      C.value && i("removeToast", o.toast);
    }), watchEffect((c) => {
      if (o.toast.promise && b.value === "loading" || o.toast.duration === 1 / 0 || o.toast.type === "loading")
        return;
      let N;
      const M = () => {
        if (A.value < v.value) {
          const V = (/* @__PURE__ */ new Date()).getTime() - v.value;
          d.value = d.value - V;
        }
        A.value = (/* @__PURE__ */ new Date()).getTime();
      }, R = () => {
        d.value !== 1 / 0 && (v.value = (/* @__PURE__ */ new Date()).getTime(), N = setTimeout(() => {
          var V, q;
          (q = (V = o.toast).onAutoClose) == null || q.call(V, o.toast), he();
        }, d.value));
      };
      o.expanded || o.interacting || oe.value ? M() : R(), c(() => {
        clearTimeout(N);
      });
    }), watch(() => o.toast.delete, (c) => {
      c !== void 0 && c && he();
    }, { deep: true });
    function it() {
      l.value = false, n.value = null, E.value = null;
    }
    return (c, N) => {
      var M, R, V, q, ve, ye, we, be, $e, Ce, Re, le, bt, qt, Gt, Yt, Xt, Kt, Qt, Jt, eo, to, oo, io, no, so, ro, ao;
      return openBlock(), createElementBlock("li", {
        tabindex: "0",
        ref_key: "toastRef",
        ref: C,
        class: normalizeClass(unref(_e)(o.class, z.value, (M = c.classes) == null ? void 0 : M.toast, (R = c.toast.classes) == null ? void 0 : R.toast, (V = c.classes) == null ? void 0 : V[b.value], (ve = (q = c.toast) == null ? void 0 : q.classes) == null ? void 0 : ve[b.value])),
        "data-sonner-toast": "",
        "data-rich-colors": (ye = c.toast.richColors) != null ? ye : c.defaultRichColors,
        "data-styled": !Boolean(c.toast.component || ((we = c.toast) == null ? void 0 : we.unstyled) || c.unstyled),
        "data-mounted": r.value,
        "data-promise": Boolean(c.toast.promise),
        "data-swiped": f.value,
        "data-removed": a.value,
        "data-visible": _.value,
        "data-y-position": Q.value,
        "data-x-position": J.value,
        "data-index": c.index,
        "data-front": B.value,
        "data-swiping": l.value,
        "data-dismissible": T.value,
        "data-type": b.value,
        "data-invert": c.toast.invert || c.invert,
        "data-swipe-out": p.value,
        "data-swipe-direction": s.value,
        "data-expanded": Boolean(c.expanded || c.expandByDefault && r.value),
        style: normalizeStyle({
          "--index": c.index,
          "--toasts-before": c.index,
          "--z-index": c.toasts.length - c.index,
          "--offset": `${a.value ? m.value : U.value}px`,
          "--initial-height": c.expandByDefault ? "auto" : `${u.value}px`,
          ...c.style,
          ...o.toast.style
        }),
        onDragend: it,
        onPointerdown: et,
        onPointerup: tt,
        onPointermove: ot
      }, [h.value && !c.toast.component && b.value !== "loading" ? (openBlock(), createElementBlock("button", {
        key: 0,
        "aria-label": c.closeButtonAriaLabel || "Close toast",
        "data-disabled": ge.value,
        "data-close-button": "true",
        class: normalizeClass(unref(_e)((be = c.classes) == null ? void 0 : be.closeButton, (Ce = ($e = c.toast) == null ? void 0 : $e.classes) == null ? void 0 : Ce.closeButton)),
        onClick: Ne
      }, [(Re = c.icons) != null && Re.close ? (openBlock(), createBlock(resolveDynamicComponent((le = c.icons) == null ? void 0 : le.close), { key: 0 })) : renderSlot(c.$slots, "close-icon", { key: 1 })], 10, Ai)) : createCommentVNode("v-if", true), c.toast.component ? (openBlock(), createBlock(resolveDynamicComponent(c.toast.component), mergeProps({ key: 1 }, c.toast.componentProps, { onCloseToast: Ne }), null, 16)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
        b.value !== "default" || c.toast.icon || c.toast.promise ? (openBlock(), createElementBlock("div", {
          key: 0,
          "data-icon": "",
          class: normalizeClass(unref(_e)((bt = c.classes) == null ? void 0 : bt.icon, (Gt = (qt = c.toast) == null ? void 0 : qt.classes) == null ? void 0 : Gt.icon))
        }, [c.toast.icon ? (openBlock(), createBlock(resolveDynamicComponent(c.toast.icon), { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [b.value === "loading" ? renderSlot(c.$slots, "loading-icon", { key: 0 }) : b.value === "success" ? renderSlot(c.$slots, "success-icon", { key: 1 }) : b.value === "error" ? renderSlot(c.$slots, "error-icon", { key: 2 }) : b.value === "warning" ? renderSlot(c.$slots, "warning-icon", { key: 3 }) : b.value === "info" ? renderSlot(c.$slots, "info-icon", { key: 4 }) : createCommentVNode("v-if", true)], 64))], 2)) : createCommentVNode("v-if", true),
        createBaseVNode("div", {
          "data-content": "",
          class: normalizeClass(unref(_e)((Yt = c.classes) == null ? void 0 : Yt.content, (Kt = (Xt = c.toast) == null ? void 0 : Xt.classes) == null ? void 0 : Kt.content))
        }, [createBaseVNode("div", {
          "data-title": "",
          class: normalizeClass(unref(_e)((Qt = c.classes) == null ? void 0 : Qt.title, (Jt = c.toast.classes) == null ? void 0 : Jt.title))
        }, [Y.value ? (openBlock(), createBlock(resolveDynamicComponent(c.toast.title), normalizeProps(mergeProps({ key: 0 }, c.toast.componentProps)), null, 16)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(c.toast.title), 1)], 64))], 2), c.toast.description ? (openBlock(), createElementBlock("div", {
          key: 0,
          "data-description": "",
          class: normalizeClass(unref(_e)(c.descriptionClass, D.value, (eo = c.classes) == null ? void 0 : eo.description, (to = c.toast.classes) == null ? void 0 : to.description))
        }, [X.value ? (openBlock(), createBlock(resolveDynamicComponent(c.toast.description), normalizeProps(mergeProps({ key: 0 }, c.toast.componentProps)), null, 16)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(c.toast.description), 1)], 64))], 2)) : createCommentVNode("v-if", true)], 2),
        c.toast.cancel ? (openBlock(), createElementBlock("button", {
          key: 1,
          style: normalizeStyle(c.toast.cancelButtonStyle || c.cancelButtonStyle),
          class: normalizeClass(unref(_e)((oo = c.classes) == null ? void 0 : oo.cancelButton, (io = c.toast.classes) == null ? void 0 : io.cancelButton)),
          "data-button": "",
          "data-cancel": "",
          onClick: N[0] || (N[0] = (nt) => {
            var ze, Fe;
            !unref(at)(c.toast.cancel) || !T.value || ((Fe = (ze = c.toast.cancel).onClick) == null || Fe.call(ze, nt), he());
          })
        }, toDisplayString(unref(at)(c.toast.cancel) ? (no = c.toast.cancel) == null ? void 0 : no.label : c.toast.cancel), 7)) : createCommentVNode("v-if", true),
        c.toast.action ? (openBlock(), createElementBlock("button", {
          key: 2,
          style: normalizeStyle(c.toast.actionButtonStyle || c.actionButtonStyle),
          class: normalizeClass(unref(_e)((so = c.classes) == null ? void 0 : so.actionButton, (ro = c.toast.classes) == null ? void 0 : ro.actionButton)),
          "data-button": "",
          "data-action": "",
          onClick: N[1] || (N[1] = (nt) => {
            var ze, Fe;
            !unref(at)(c.toast.action) || ((Fe = (ze = c.toast.action).onClick) == null || Fe.call(ze, nt), !nt.defaultPrevented && he());
          })
        }, toDisplayString(unref(at)(c.toast.action) ? (ao = c.toast.action) == null ? void 0 : ao.label : c.toast.action), 7)) : createCommentVNode("v-if", true)
      ], 64))], 46, Si);
    };
  }
});
var Bi = Pi;
var Je = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [i, n] of t)
    o[i] = n;
  return o;
};
var ki = {};
var Ei = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stoke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Oi(e, t) {
  return openBlock(), createElementBlock("svg", Ei, t[0] || (t[0] = [createBaseVNode("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }, null, -1), createBaseVNode("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }, null, -1)]));
}
var Di = Je(ki, [["render", Oi]]);
var Mi = ["data-visible"];
var Hi = { class: "sonner-spinner" };
var Li = defineComponent({
  __name: "Loader",
  props: { visible: { type: Boolean } },
  setup(e) {
    const t = Array(12).fill(0);
    return (o, i) => (openBlock(), createElementBlock("div", {
      class: "sonner-loading-wrapper",
      "data-visible": o.visible
    }, [createBaseVNode("div", Hi, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(t), (n) => (openBlock(), createElementBlock("div", {
      key: `spinner-bar-${n}`,
      class: "sonner-loading-bar"
    }))), 128))])], 8, Mi));
  }
});
var Ni = Li;
var Ri = {};
var zi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
};
function Fi(e, t) {
  return openBlock(), createElementBlock("svg", zi, t[0] || (t[0] = [createBaseVNode("path", {
    "fill-rule": "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    "clip-rule": "evenodd"
  }, null, -1)]));
}
var Ii = Je(Ri, [["render", Fi]]);
var Vi = {};
var Wi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
};
function ji(e, t) {
  return openBlock(), createElementBlock("svg", Wi, t[0] || (t[0] = [createBaseVNode("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    "clip-rule": "evenodd"
  }, null, -1)]));
}
var Zi = Je(Vi, [["render", ji]]);
var Ui = {};
var qi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
};
function Gi(e, t) {
  return openBlock(), createElementBlock("svg", qi, t[0] || (t[0] = [createBaseVNode("path", {
    "fill-rule": "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    "clip-rule": "evenodd"
  }, null, -1)]));
}
var Yi = Je(Ui, [["render", Gi]]);
var Xi = {};
var Ki = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
};
function Qi(e, t) {
  return openBlock(), createElementBlock("svg", Ki, t[0] || (t[0] = [createBaseVNode("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    "clip-rule": "evenodd"
  }, null, -1)]));
}
var Ji = Je(Xi, [["render", Qi]]);
var en = ["aria-label"];
var tn = [
  "data-sonner-theme",
  "dir",
  "data-theme",
  "data-rich-colors",
  "data-y-position",
  "data-x-position",
  "data-lifted"
];
var on = typeof window < "u" && typeof document < "u";
function nn() {
  if (typeof window > "u" || typeof document > "u")
    return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var sn = defineComponent({
  name: "Toaster",
  inheritAttrs: false,
  __name: "Toaster",
  props: {
    invert: {
      type: Boolean,
      default: false
    },
    theme: { default: "light" },
    position: { default: "bottom-right" },
    hotkey: { default: () => ["altKey", "KeyT"] },
    richColors: {
      type: Boolean,
      default: false
    },
    expand: {
      type: Boolean,
      default: false
    },
    duration: {},
    gap: { default: $i },
    visibleToasts: { default: wi },
    closeButton: {
      type: Boolean,
      default: false
    },
    toastOptions: { default: () => ({}) },
    class: { default: "" },
    style: {},
    offset: { default: Bo },
    mobileOffset: { default: ko },
    dir: { default: "auto" },
    swipeDirections: {},
    icons: {},
    containerAriaLabel: { default: "Notifications" }
  },
  setup(e) {
    const t = e, o = useAttrs(), i = ref([]);
    function n(h, g) {
      return i.value.filter((v) => !v.position && g === 0 || v.position === h);
    }
    const s = computed(() => {
      const h = i.value.filter((g) => g.position).map((g) => g.position);
      return h.length > 0 ? Array.from(new Set([t.position].concat(h))) : [t.position];
    }), r = computed(() => {
      const h = {};
      return s.value.forEach((g) => {
        h[g] = i.value.filter((v) => v.position === g);
      }), h;
    }), a = ref([]), l = ref(false), p = ref(false), f = ref(t.theme !== "system" ? t.theme : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), m = ref(null), u = ref(null), d = ref(false), w = t.hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
    function C(h) {
      var g;
      (g = i.value.find((v) => v.id === h.id)) != null && g.delete || ee.dismiss(h.id), i.value = i.value.filter(({ id: v }) => v !== h.id), setTimeout(() => {
        i.value.find((v) => v.id === h.id) || (a.value = a.value.filter((v) => v.toastId !== h.id));
      }, Eo + 50);
    }
    function B(h) {
      var g, v;
      d.value && !((v = (g = h.currentTarget) == null ? void 0 : g.contains) != null && v.call(g, h.relatedTarget)) && (d.value = false, u.value && (u.value.focus({ preventScroll: true }), u.value = null));
    }
    function _(h) {
      h.target instanceof HTMLElement && h.target.dataset.dismissible === "false" || d.value || (d.value = true, u.value = h.relatedTarget);
    }
    function b(h) {
      h.target && h.target instanceof HTMLElement && h.target.dataset.dismissible === "false" || (p.value = true);
    }
    watchEffect((h) => {
      const g = ee.subscribe((v) => {
        if (v.dismiss) {
          requestAnimationFrame(() => {
            i.value = i.value.map((A) => A.id === v.id ? {
              ...A,
              delete: true
            } : A);
          });
          return;
        }
        nextTick(() => {
          const A = i.value.findIndex((E) => E.id === v.id);
          A !== -1 ? i.value = [
            ...i.value.slice(0, A),
            {
              ...i.value[A],
              ...v
            },
            ...i.value.slice(A + 1)
          ] : i.value = [v, ...i.value];
        });
      });
      h(g);
    }), watchEffect((h) => {
      if (typeof window > "u")
        return;
      if (t.theme !== "system") {
        f.value = t.theme;
        return;
      }
      const g = window.matchMedia("(prefers-color-scheme: dark)"), v = (E) => {
        f.value = E ? "dark" : "light";
      };
      v(g.matches);
      const A = (E) => {
        v(E.matches);
      };
      try {
        g.addEventListener("change", A);
      } catch {
        g.addListener(A);
      }
      h(() => {
        try {
          g.removeEventListener("change", A);
        } catch {
          g.removeListener(A);
        }
      });
    }), watchEffect(() => {
      m.value && u.value && (u.value.focus({ preventScroll: true }), u.value = null, d.value = false);
    }), watchEffect(() => {
      i.value.length <= 1 && (l.value = false);
    }), watchEffect((h) => {
      function g(v) {
        const A = t.hotkey.every((Q) => v[Q] || v.code === Q), E = Array.isArray(m.value) ? m.value[0] : m.value;
        A && (l.value = true, E == null || E.focus());
        const L = document.activeElement === m.value || (E == null ? void 0 : E.contains(document.activeElement));
        v.code === "Escape" && L && (l.value = false);
      }
      !on || (document.addEventListener("keydown", g), h(() => {
        document.removeEventListener("keydown", g);
      }));
    });
    function T() {
      l.value = true;
    }
    function z() {
      p.value || (l.value = false);
    }
    function D() {
      l.value = false;
    }
    function G() {
      p.value = false;
    }
    function j(h) {
      a.value = h;
    }
    function U(h) {
      const g = a.value.findIndex((v) => v.toastId === h.toastId);
      if (g !== -1)
        a.value[g] = h;
      else {
        const v = a.value.findIndex((A) => A.position === h.position);
        v !== -1 ? a.value.splice(v, 0, h) : a.value.unshift(h);
      }
    }
    return (h, g) => (openBlock(), createElementBlock(Fragment, null, [createCommentVNode(" Remove item from normal navigation flow, only available via hotkey "), createBaseVNode("section", {
      "aria-label": `${h.containerAriaLabel} ${unref(w)}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false"
    }, [(openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (v, A) => {
      var E;
      return openBlock(), createElementBlock("ol", mergeProps({
        key: v,
        ref_for: true,
        ref_key: "listRef",
        ref: m,
        "data-sonner-toaster": "",
        "data-sonner-theme": f.value,
        class: t.class,
        dir: h.dir === "auto" ? nn() : h.dir,
        tabIndex: -1,
        "data-theme": h.theme,
        "data-rich-colors": h.richColors,
        "data-y-position": v.split("-")[0],
        "data-x-position": v.split("-")[1],
        "data-lifted": l.value && i.value.length > 1 && !h.expand,
        style: {
          "--front-toast-height": `${((E = a.value[0]) == null ? void 0 : E.height) || 0}px`,
          "--width": `${unref(bi)}px`,
          "--gap": `${h.gap}px`,
          ...h.style,
          ...unref(o).style,
          ...unref(Ti)(h.offset, h.mobileOffset)
        }
      }, h.$attrs, {
        onBlur: B,
        onFocus: _,
        onMouseenter: T,
        onMousemove: T,
        onMouseleave: z,
        onDragend: D,
        onPointerdown: b,
        onPointerup: G
      }), [(openBlock(true), createElementBlock(Fragment, null, renderList(n(v, A), (L, Q) => {
        var J, Y, X, oe, ge, he, Ne, et, tt, ot, it, c, N;
        return openBlock(), createBlock(Bi, {
          key: L.id,
          heights: a.value,
          icons: h.icons,
          index: Q,
          toast: L,
          defaultRichColors: h.richColors,
          duration: (Y = (J = h.toastOptions) == null ? void 0 : J.duration) != null ? Y : h.duration,
          class: normalizeClass((oe = (X = h.toastOptions) == null ? void 0 : X.class) != null ? oe : ""),
          descriptionClass: (ge = h.toastOptions) == null ? void 0 : ge.descriptionClass,
          invert: h.invert,
          visibleToasts: h.visibleToasts,
          closeButton: (Ne = (he = h.toastOptions) == null ? void 0 : he.closeButton) != null ? Ne : h.closeButton,
          interacting: p.value,
          position: v,
          style: normalizeStyle((et = h.toastOptions) == null ? void 0 : et.style),
          unstyled: (tt = h.toastOptions) == null ? void 0 : tt.unstyled,
          classes: (ot = h.toastOptions) == null ? void 0 : ot.classes,
          cancelButtonStyle: (it = h.toastOptions) == null ? void 0 : it.cancelButtonStyle,
          actionButtonStyle: (c = h.toastOptions) == null ? void 0 : c.actionButtonStyle,
          "close-button-aria-label": (N = h.toastOptions) == null ? void 0 : N.closeButtonAriaLabel,
          toasts: r.value[v],
          expandByDefault: h.expand,
          gap: h.gap,
          expanded: l.value,
          swipeDirections: t.swipeDirections,
          "onUpdate:heights": j,
          "onUpdate:height": U,
          onRemoveToast: C
        }, {
          "close-icon": withCtx(() => [renderSlot(h.$slots, "close-icon", {}, () => [createVNode(Di)])]),
          "loading-icon": withCtx(() => [renderSlot(h.$slots, "loading-icon", {}, () => [createVNode(Ni, { visible: L.type === "loading" }, null, 8, ["visible"])])]),
          "success-icon": withCtx(() => [renderSlot(h.$slots, "success-icon", {}, () => [createVNode(Ii)])]),
          "error-icon": withCtx(() => [renderSlot(h.$slots, "error-icon", {}, () => [createVNode(Ji)])]),
          "warning-icon": withCtx(() => [renderSlot(h.$slots, "warning-icon", {}, () => [createVNode(Yi)])]),
          "info-icon": withCtx(() => [renderSlot(h.$slots, "info-icon", {}, () => [createVNode(Zi)])]),
          _: 2
        }, 1032, [
          "heights",
          "icons",
          "index",
          "toast",
          "defaultRichColors",
          "duration",
          "class",
          "descriptionClass",
          "invert",
          "visibleToasts",
          "closeButton",
          "interacting",
          "position",
          "style",
          "unstyled",
          "classes",
          "cancelButtonStyle",
          "actionButtonStyle",
          "close-button-aria-label",
          "toasts",
          "expandByDefault",
          "gap",
          "expanded",
          "swipeDirections"
        ]);
      }), 128))], 16, tn);
    }), 128))], 8, en)], 2112));
  }
});
var zt = sn;
var Ft = () => ({
  copyContent: ref(""),
  clickCopy: async (o) => {
    await navigator.clipboard.writeText(o);
    const i = window == null ? void 0 : window.demoPreviewConfig;
    yi.success((i == null ? void 0 : i.copySuccessText) || "复制成功", {
      position: "top-center",
      closeButton: true
    });
  }
});
var rn = ["top", "right", "bottom", "left"];
var co = ["start", "end"];
var uo = rn.reduce((e, t) => e.concat(t, t + "-" + co[0], t + "-" + co[1]), []);
var Ye = Math.min;
var Ee = Math.max;
var an = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var ln = {
  start: "end",
  end: "start"
};
function At(e, t, o) {
  return Ee(e, Ye(t, o));
}
function He(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ce(e) {
  return e.split("-")[0];
}
function ae(e) {
  return e.split("-")[1];
}
function Oo(e) {
  return e === "x" ? "y" : "x";
}
function It(e) {
  return e === "y" ? "height" : "width";
}
var cn = /* @__PURE__ */ new Set(["top", "bottom"]);
function fe(e) {
  return cn.has(ce(e)) ? "y" : "x";
}
function Vt(e) {
  return Oo(fe(e));
}
function Do(e, t, o) {
  o === void 0 && (o = false);
  const i = ae(e), n = Vt(e), s = It(n);
  let r = n === "x" ? i === (o ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (r = pt(r)), [r, pt(r)];
}
function dn(e) {
  const t = pt(e);
  return [ut(e), t, ut(t)];
}
function ut(e) {
  return e.replace(/start|end/g, (t) => ln[t]);
}
var po = ["left", "right"];
var ho = ["right", "left"];
var un = ["top", "bottom"];
var pn = ["bottom", "top"];
function hn(e, t, o) {
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? ho : po : t ? po : ho;
    case "left":
    case "right":
      return t ? un : pn;
    default:
      return [];
  }
}
function fn(e, t, o, i) {
  const n = ae(e);
  let s = hn(ce(e), o === "start", i);
  return n && (s = s.map((r) => r + "-" + n), t && (s = s.concat(s.map(ut)))), s;
}
function pt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => an[t]);
}
function mn(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Mo(e) {
  return typeof e != "number" ? mn(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function je(e) {
  const {
    x: t,
    y: o,
    width: i,
    height: n
  } = e;
  return {
    width: i,
    height: n,
    top: o,
    left: t,
    right: t + i,
    bottom: o + n,
    x: t,
    y: o
  };
}
function fo(e, t, o) {
  let {
    reference: i,
    floating: n
  } = e;
  const s = fe(t), r = Vt(t), a = It(r), l = ce(t), p = s === "y", f = i.x + i.width / 2 - n.width / 2, m = i.y + i.height / 2 - n.height / 2, u = i[a] / 2 - n[a] / 2;
  let d;
  switch (l) {
    case "top":
      d = {
        x: f,
        y: i.y - n.height
      };
      break;
    case "bottom":
      d = {
        x: f,
        y: i.y + i.height
      };
      break;
    case "right":
      d = {
        x: i.x + i.width,
        y: m
      };
      break;
    case "left":
      d = {
        x: i.x - n.width,
        y: m
      };
      break;
    default:
      d = {
        x: i.x,
        y: i.y
      };
  }
  switch (ae(t)) {
    case "start":
      d[r] -= u * (o && p ? -1 : 1);
      break;
    case "end":
      d[r] += u * (o && p ? -1 : 1);
      break;
  }
  return d;
}
var gn = async (e, t, o) => {
  const {
    placement: i = "bottom",
    strategy: n = "absolute",
    middleware: s = [],
    platform: r
  } = o, a = s.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let p = await r.getElementRects({
    reference: e,
    floating: t,
    strategy: n
  }), {
    x: f,
    y: m
  } = fo(p, i, l), u = i, d = {}, w = 0;
  for (let C = 0; C < a.length; C++) {
    const {
      name: B,
      fn: _
    } = a[C], {
      x: b,
      y: T,
      data: z,
      reset: D
    } = await _({
      x: f,
      y: m,
      initialPlacement: i,
      placement: u,
      strategy: n,
      middlewareData: d,
      rects: p,
      platform: r,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = b != null ? b : f, m = T != null ? T : m, d = {
      ...d,
      [B]: {
        ...d[B],
        ...z
      }
    }, D && w <= 50 && (w++, typeof D == "object" && (D.placement && (u = D.placement), D.rects && (p = D.rects === true ? await r.getElementRects({
      reference: e,
      floating: t,
      strategy: n
    }) : D.rects), {
      x: f,
      y: m
    } = fo(p, u, l)), C = -1);
  }
  return {
    x: f,
    y: m,
    placement: u,
    strategy: n,
    middlewareData: d
  };
};
async function gt(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: i,
    y: n,
    platform: s,
    rects: r,
    elements: a,
    strategy: l
  } = e, {
    boundary: p = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: m = "floating",
    altBoundary: u = false,
    padding: d = 0
  } = He(t, e), w = Mo(d), B = a[u ? m === "floating" ? "reference" : "floating" : m], _ = je(await s.getClippingRect({
    element: (o = await (s.isElement == null ? void 0 : s.isElement(B))) == null || o ? B : B.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: p,
    rootBoundary: f,
    strategy: l
  })), b = m === "floating" ? {
    x: i,
    y: n,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), z = await (s.isElement == null ? void 0 : s.isElement(T)) ? await (s.getScale == null ? void 0 : s.getScale(T)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, D = je(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: T,
    strategy: l
  }) : b);
  return {
    top: (_.top - D.top + w.top) / z.y,
    bottom: (D.bottom - _.bottom + w.bottom) / z.y,
    left: (_.left - D.left + w.left) / z.x,
    right: (D.right - _.right + w.right) / z.x
  };
}
var vn = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: o,
      y: i,
      placement: n,
      rects: s,
      platform: r,
      elements: a,
      middlewareData: l
    } = t, {
      element: p,
      padding: f = 0
    } = He(e, t) || {};
    if (p == null)
      return {};
    const m = Mo(f), u = {
      x: o,
      y: i
    }, d = Vt(n), w = It(d), C = await r.getDimensions(p), B = d === "y", _ = B ? "top" : "left", b = B ? "bottom" : "right", T = B ? "clientHeight" : "clientWidth", z = s.reference[w] + s.reference[d] - u[d] - s.floating[w], D = u[d] - s.reference[d], G = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(p));
    let j = G ? G[T] : 0;
    (!j || !await (r.isElement == null ? void 0 : r.isElement(G))) && (j = a.floating[T] || s.floating[w]);
    const U = z / 2 - D / 2, h = j / 2 - C[w] / 2 - 1, g = Ye(m[_], h), v = Ye(m[b], h), A = g, E = j - C[w] - v, L = j / 2 - C[w] / 2 + U, Q = At(A, L, E), J = !l.arrow && ae(n) != null && L !== Q && s.reference[w] / 2 - (L < A ? g : v) - C[w] / 2 < 0, Y = J ? L < A ? L - A : L - E : 0;
    return {
      [d]: u[d] + Y,
      data: {
        [d]: Q,
        centerOffset: L - Q - Y,
        ...J && {
          alignmentOffset: Y
        }
      },
      reset: J
    };
  }
});
function yn(e, t, o) {
  return (e ? [...o.filter((n) => ae(n) === e), ...o.filter((n) => ae(n) !== e)] : o.filter((n) => ce(n) === n)).filter((n) => e ? ae(n) === e || (t ? ut(n) !== n : false) : true);
}
var wn = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var o, i, n;
      const {
        rects: s,
        middlewareData: r,
        placement: a,
        platform: l,
        elements: p
      } = t, {
        crossAxis: f = false,
        alignment: m,
        allowedPlacements: u = uo,
        autoAlignment: d = true,
        ...w
      } = He(e, t), C = m !== void 0 || u === uo ? yn(m || null, d, u) : u, B = await gt(t, w), _ = ((o = r.autoPlacement) == null ? void 0 : o.index) || 0, b = C[_];
      if (b == null)
        return {};
      const T = Do(b, s, await (l.isRTL == null ? void 0 : l.isRTL(p.floating)));
      if (a !== b)
        return {
          reset: {
            placement: C[0]
          }
        };
      const z = [B[ce(b)], B[T[0]], B[T[1]]], D = [...((i = r.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: b,
        overflows: z
      }], G = C[_ + 1];
      if (G)
        return {
          data: {
            index: _ + 1,
            overflows: D
          },
          reset: {
            placement: G
          }
        };
      const j = D.map((g) => {
        const v = ae(g.placement);
        return [g.placement, v && f ? g.overflows.slice(0, 2).reduce((A, E) => A + E, 0) : g.overflows[0], g.overflows];
      }).sort((g, v) => g[1] - v[1]), h = ((n = j.filter((g) => g[2].slice(
        0,
        ae(g[0]) ? 2 : 3
      ).every((v) => v <= 0))[0]) == null ? void 0 : n[0]) || j[0][0];
      return h !== a ? {
        data: {
          index: _ + 1,
          overflows: D
        },
        reset: {
          placement: h
        }
      } : {};
    }
  };
};
var bn = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, i;
      const {
        placement: n,
        middlewareData: s,
        rects: r,
        initialPlacement: a,
        platform: l,
        elements: p
      } = t, {
        mainAxis: f = true,
        crossAxis: m = true,
        fallbackPlacements: u,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: C = true,
        ...B
      } = He(e, t);
      if ((o = s.arrow) != null && o.alignmentOffset)
        return {};
      const _ = ce(n), b = fe(a), T = ce(a) === a, z = await (l.isRTL == null ? void 0 : l.isRTL(p.floating)), D = u || (T || !C ? [pt(a)] : dn(a)), G = w !== "none";
      !u && G && D.push(...fn(a, C, w, z));
      const j = [a, ...D], U = await gt(t, B), h = [];
      let g = ((i = s.flip) == null ? void 0 : i.overflows) || [];
      if (f && h.push(U[_]), m) {
        const L = Do(n, r, z);
        h.push(U[L[0]], U[L[1]]);
      }
      if (g = [...g, {
        placement: n,
        overflows: h
      }], !h.every((L) => L <= 0)) {
        var v, A;
        const L = (((v = s.flip) == null ? void 0 : v.index) || 0) + 1, Q = j[L];
        if (Q && (!(m === "alignment" ? b !== fe(Q) : false) || g.every((X) => X.overflows[0] > 0 && fe(X.placement) === b)))
          return {
            data: {
              index: L,
              overflows: g
            },
            reset: {
              placement: Q
            }
          };
        let J = (A = g.filter((Y) => Y.overflows[0] <= 0).sort((Y, X) => Y.overflows[1] - X.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!J)
          switch (d) {
            case "bestFit": {
              var E;
              const Y = (E = g.filter((X) => {
                if (G) {
                  const oe = fe(X.placement);
                  return oe === b || oe === "y";
                }
                return true;
              }).map((X) => [X.placement, X.overflows.filter((oe) => oe > 0).reduce((oe, ge) => oe + ge, 0)]).sort((X, oe) => X[1] - oe[1])[0]) == null ? void 0 : E[0];
              Y && (J = Y);
              break;
            }
            case "initialPlacement":
              J = a;
              break;
          }
        if (n !== J)
          return {
            reset: {
              placement: J
            }
          };
      }
      return {};
    }
  };
};
var $n = /* @__PURE__ */ new Set(["left", "top"]);
async function Cn(e, t) {
  const {
    placement: o,
    platform: i,
    elements: n
  } = e, s = await (i.isRTL == null ? void 0 : i.isRTL(n.floating)), r = ce(o), a = ae(o), l = fe(o) === "y", p = $n.has(r) ? -1 : 1, f = s && l ? -1 : 1, m = He(t, e);
  let {
    mainAxis: u,
    crossAxis: d,
    alignmentAxis: w
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return a && typeof w == "number" && (d = a === "end" ? w * -1 : w), l ? {
    x: d * f,
    y: u * p
  } : {
    x: u * p,
    y: d * f
  };
}
var _n = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var o, i;
      const {
        x: n,
        y: s,
        placement: r,
        middlewareData: a
      } = t, l = await Cn(t, e);
      return r === ((o = a.offset) == null ? void 0 : o.placement) && (i = a.arrow) != null && i.alignmentOffset ? {} : {
        x: n + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: r
        }
      };
    }
  };
};
var xn = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: i,
        placement: n
      } = t, {
        mainAxis: s = true,
        crossAxis: r = false,
        limiter: a = {
          fn: (B) => {
            let {
              x: _,
              y: b
            } = B;
            return {
              x: _,
              y: b
            };
          }
        },
        ...l
      } = He(e, t), p = {
        x: o,
        y: i
      }, f = await gt(t, l), m = fe(ce(n)), u = Oo(m);
      let d = p[u], w = p[m];
      if (s) {
        const B = u === "y" ? "top" : "left", _ = u === "y" ? "bottom" : "right", b = d + f[B], T = d - f[_];
        d = At(b, d, T);
      }
      if (r) {
        const B = m === "y" ? "top" : "left", _ = m === "y" ? "bottom" : "right", b = w + f[B], T = w - f[_];
        w = At(b, w, T);
      }
      const C = a.fn({
        ...t,
        [u]: d,
        [m]: w
      });
      return {
        ...C,
        data: {
          x: C.x - o,
          y: C.y - i,
          enabled: {
            [u]: s,
            [m]: r
          }
        }
      };
    }
  };
};
var Tn = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var o, i;
      const {
        placement: n,
        rects: s,
        platform: r,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...p
      } = He(e, t), f = await gt(t, p), m = ce(n), u = ae(n), d = fe(n) === "y", {
        width: w,
        height: C
      } = s.floating;
      let B, _;
      m === "top" || m === "bottom" ? (B = m, _ = u === (await (r.isRTL == null ? void 0 : r.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (_ = m, B = u === "end" ? "top" : "bottom");
      const b = C - f.top - f.bottom, T = w - f.left - f.right, z = Ye(C - f[B], b), D = Ye(w - f[_], T), G = !t.middlewareData.shift;
      let j = z, U = D;
      if ((o = t.middlewareData.shift) != null && o.enabled.x && (U = T), (i = t.middlewareData.shift) != null && i.enabled.y && (j = b), G && !u) {
        const g = Ee(f.left, 0), v = Ee(f.right, 0), A = Ee(f.top, 0), E = Ee(f.bottom, 0);
        d ? U = w - 2 * (g !== 0 || v !== 0 ? g + v : Ee(f.left, f.right)) : j = C - 2 * (A !== 0 || E !== 0 ? A + E : Ee(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: U,
        availableHeight: j
      });
      const h = await r.getDimensions(a.floating);
      return w !== h.width || C !== h.height ? {
        reset: {
          rects: true
        }
      } : {};
    }
  };
};
function ne(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function de(e) {
  return ne(e).getComputedStyle(e);
}
var mo = Math.min;
var Ze = Math.max;
var ht = Math.round;
function Ho(e) {
  const t = de(e);
  let o = parseFloat(t.width), i = parseFloat(t.height);
  const n = e.offsetWidth, s = e.offsetHeight, r = ht(o) !== n || ht(i) !== s;
  return r && (o = n, i = s), {
    width: o,
    height: i,
    fallback: r
  };
}
function Ae(e) {
  return No(e) ? (e.nodeName || "").toLowerCase() : "";
}
var lt;
function Lo() {
  if (lt)
    return lt;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (lt = e.brands.map((t) => t.brand + "/" + t.version).join(" "), lt) : navigator.userAgent;
}
function ue(e) {
  return e instanceof ne(e).HTMLElement;
}
function Pe(e) {
  return e instanceof ne(e).Element;
}
function No(e) {
  return e instanceof ne(e).Node;
}
function go(e) {
  if (typeof ShadowRoot > "u")
    return false;
  const t = ne(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function vt(e) {
  const {
    overflow: t,
    overflowX: o,
    overflowY: i,
    display: n
  } = de(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + o) && !["inline", "contents"].includes(n);
}
function Sn(e) {
  return ["table", "td", "th"].includes(Ae(e));
}
function Wt(e) {
  const t = /firefox/i.test(Lo()), o = de(e), i = o.backdropFilter || o.WebkitBackdropFilter;
  return o.transform !== "none" || o.perspective !== "none" || (i ? i !== "none" : false) || t && o.willChange === "filter" || t && (o.filter ? o.filter !== "none" : false) || ["transform", "perspective"].some((n) => o.willChange.includes(n)) || ["paint", "layout", "strict", "content"].some((n) => {
    const s = o.contain;
    return s != null ? s.includes(n) : false;
  });
}
function Ro() {
  return !/^((?!chrome|android).)*safari/i.test(Lo());
}
function jt(e) {
  return ["html", "body", "#document"].includes(Ae(e));
}
function zo(e) {
  return Pe(e) ? e : e.contextElement;
}
var Fo = {
  x: 1,
  y: 1
};
function Le(e) {
  const t = zo(e);
  if (!ue(t))
    return Fo;
  const o = t.getBoundingClientRect(), {
    width: i,
    height: n,
    fallback: s
  } = Ho(t);
  let r = (s ? ht(o.width) : o.width) / i, a = (s ? ht(o.height) : o.height) / n;
  return (!r || !Number.isFinite(r)) && (r = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: r,
    y: a
  };
}
function Xe(e, t, o, i) {
  var n, s;
  t === void 0 && (t = false), o === void 0 && (o = false);
  const r = e.getBoundingClientRect(), a = zo(e);
  let l = Fo;
  t && (i ? Pe(i) && (l = Le(i)) : l = Le(e));
  const p = a ? ne(a) : window, f = !Ro() && o;
  let m = (r.left + (f && ((n = p.visualViewport) == null ? void 0 : n.offsetLeft) || 0)) / l.x, u = (r.top + (f && ((s = p.visualViewport) == null ? void 0 : s.offsetTop) || 0)) / l.y, d = r.width / l.x, w = r.height / l.y;
  if (a) {
    const C = ne(a), B = i && Pe(i) ? ne(i) : i;
    let _ = C.frameElement;
    for (; _ && i && B !== C; ) {
      const b = Le(_), T = _.getBoundingClientRect(), z = getComputedStyle(_);
      T.x += (_.clientLeft + parseFloat(z.paddingLeft)) * b.x, T.y += (_.clientTop + parseFloat(z.paddingTop)) * b.y, m *= b.x, u *= b.y, d *= b.x, w *= b.y, m += T.x, u += T.y, _ = ne(_).frameElement;
    }
  }
  return {
    width: d,
    height: w,
    top: u,
    right: m + d,
    bottom: u + w,
    left: m,
    x: m,
    y: u
  };
}
function Be(e) {
  return ((No(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function yt(e) {
  return Pe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function An(e) {
  let {
    rect: t,
    offsetParent: o,
    strategy: i
  } = e;
  const n = ue(o), s = Be(o);
  if (o === s)
    return t;
  let r = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 1,
    y: 1
  };
  const l = {
    x: 0,
    y: 0
  };
  if ((n || !n && i !== "fixed") && ((Ae(o) !== "body" || vt(s)) && (r = yt(o)), ue(o))) {
    const p = Xe(o);
    a = Le(o), l.x = p.x + o.clientLeft, l.y = p.y + o.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - r.scrollLeft * a.x + l.x,
    y: t.y * a.y - r.scrollTop * a.y + l.y
  };
}
function Io(e) {
  return Xe(Be(e)).left + yt(e).scrollLeft;
}
function Pn(e) {
  const t = Be(e), o = yt(e), i = e.ownerDocument.body, n = Ze(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth), s = Ze(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
  let r = -o.scrollLeft + Io(e);
  const a = -o.scrollTop;
  return de(i).direction === "rtl" && (r += Ze(t.clientWidth, i.clientWidth) - n), {
    width: n,
    height: s,
    x: r,
    y: a
  };
}
function Ke(e) {
  if (Ae(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || go(e) && e.host || Be(e);
  return go(t) ? t.host : t;
}
function Vo(e) {
  const t = Ke(e);
  return jt(t) ? t.ownerDocument.body : ue(t) && vt(t) ? t : Vo(t);
}
function ft(e, t) {
  var o;
  t === void 0 && (t = []);
  const i = Vo(e), n = i === ((o = e.ownerDocument) == null ? void 0 : o.body), s = ne(i);
  return n ? t.concat(s, s.visualViewport || [], vt(i) ? i : []) : t.concat(i, ft(i));
}
function Bn(e, t) {
  const o = ne(e), i = Be(e), n = o.visualViewport;
  let s = i.clientWidth, r = i.clientHeight, a = 0, l = 0;
  if (n) {
    s = n.width, r = n.height;
    const p = Ro();
    (p || !p && t === "fixed") && (a = n.offsetLeft, l = n.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: a,
    y: l
  };
}
function kn(e, t) {
  const o = Xe(e, true, t === "fixed"), i = o.top + e.clientTop, n = o.left + e.clientLeft, s = ue(e) ? Le(e) : {
    x: 1,
    y: 1
  }, r = e.clientWidth * s.x, a = e.clientHeight * s.y, l = n * s.x, p = i * s.y;
  return {
    width: r,
    height: a,
    x: l,
    y: p
  };
}
function vo(e, t, o) {
  return t === "viewport" ? je(Bn(e, o)) : Pe(t) ? je(kn(t, o)) : je(Pn(Be(e)));
}
function En(e, t) {
  const o = t.get(e);
  if (o)
    return o;
  let i = ft(e).filter((a) => Pe(a) && Ae(a) !== "body"), n = null;
  const s = de(e).position === "fixed";
  let r = s ? Ke(e) : e;
  for (; Pe(r) && !jt(r); ) {
    const a = de(r), l = Wt(r);
    (s ? !l && !n : !l && a.position === "static" && !!n && ["absolute", "fixed"].includes(n.position)) ? i = i.filter((f) => f !== r) : n = a, r = Ke(r);
  }
  return t.set(e, i), i;
}
function On(e) {
  let {
    element: t,
    boundary: o,
    rootBoundary: i,
    strategy: n
  } = e;
  const r = [...o === "clippingAncestors" ? En(t, this._c) : [].concat(o), i], a = r[0], l = r.reduce((p, f) => {
    const m = vo(t, f, n);
    return p.top = Ze(m.top, p.top), p.right = mo(m.right, p.right), p.bottom = mo(m.bottom, p.bottom), p.left = Ze(m.left, p.left), p;
  }, vo(t, a, n));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Dn(e) {
  return ue(e) ? Ho(e) : e.getBoundingClientRect();
}
function yo(e) {
  return !ue(e) || de(e).position === "fixed" ? null : e.offsetParent;
}
function Mn(e) {
  let t = Ke(e);
  for (; ue(t) && !jt(t); ) {
    if (Wt(t))
      return t;
    t = Ke(t);
  }
  return null;
}
function wo(e) {
  const t = ne(e);
  let o = yo(e);
  for (; o && Sn(o) && de(o).position === "static"; )
    o = yo(o);
  return o && (Ae(o) === "html" || Ae(o) === "body" && de(o).position === "static" && !Wt(o)) ? t : o || Mn(e) || t;
}
function Hn(e, t, o) {
  const i = ue(t), n = Be(t), s = Xe(e, true, o === "fixed", t);
  let r = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = {
    x: 0,
    y: 0
  };
  if (i || !i && o !== "fixed")
    if ((Ae(t) !== "body" || vt(n)) && (r = yt(t)), ue(t)) {
      const l = Xe(t, true);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      n && (a.x = Io(n));
  return {
    x: s.left + r.scrollLeft - a.x,
    y: s.top + r.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
var Ln = {
  getClippingRect: On,
  convertOffsetParentRelativeRectToViewportRelativeRect: An,
  isElement: Pe,
  getDimensions: Dn,
  getOffsetParent: wo,
  getDocumentElement: Be,
  getScale: Le,
  async getElementRects(e) {
    let {
      reference: t,
      floating: o,
      strategy: i
    } = e;
    const n = this.getOffsetParent || wo, s = this.getDimensions;
    return {
      reference: Hn(t, await n(o), i),
      floating: {
        x: 0,
        y: 0,
        ...await s(o)
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => de(e).direction === "rtl"
};
var Nn = (e, t, o) => {
  const i = /* @__PURE__ */ new Map(), n = {
    platform: Ln,
    ...o
  }, s = {
    ...n.platform,
    _c: i
  };
  return gn(e, t, {
    ...n,
    platform: s
  });
};
var Me = {
  disabled: false,
  distance: 5,
  skidding: 0,
  container: "body",
  boundary: void 0,
  instantMove: false,
  disposeTimeout: 150,
  popperTriggers: [],
  strategy: "absolute",
  preventOverflow: true,
  flip: true,
  shift: true,
  overflowPadding: 0,
  arrowPadding: 0,
  arrowOverflow: true,
  autoHideOnMousedown: false,
  themes: {
    tooltip: {
      placement: "top",
      triggers: ["hover", "focus", "touch"],
      hideTriggers: (e) => [...e, "click"],
      delay: {
        show: 200,
        hide: 0
      },
      handleResize: false,
      html: false,
      loadingContent: "..."
    },
    dropdown: {
      placement: "bottom",
      triggers: ["click"],
      delay: 0,
      handleResize: true,
      autoHide: true
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function Pt(e, t) {
  let o = Me.themes[e] || {}, i;
  do
    i = o[t], typeof i > "u" ? o.$extend ? o = Me.themes[o.$extend] || {} : (o = null, i = Me[t]) : o = null;
  while (o);
  return i;
}
function Rn(e) {
  const t = [e];
  let o = Me.themes[e] || {};
  do
    o.$extend && !o.$resetCss ? (t.push(o.$extend), o = Me.themes[o.$extend] || {}) : o = null;
  while (o);
  return t.map((i) => `v-popper--theme-${i}`);
}
function bo(e) {
  const t = [e];
  let o = Me.themes[e] || {};
  do
    o.$extend ? (t.push(o.$extend), o = Me.themes[o.$extend] || {}) : o = null;
  while (o);
  return t;
}
var Qe = false;
if (typeof window < "u") {
  Qe = false;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        Qe = true;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
var Wo = false;
typeof window < "u" && typeof navigator < "u" && (Wo = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
var zn = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []);
var $o = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
};
var Co = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function _o(e, t) {
  const o = e.indexOf(t);
  o !== -1 && e.splice(o, 1);
}
function $t() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
var se = [];
var ke = null;
var xo = {};
function To(e) {
  let t = xo[e];
  return t || (t = xo[e] = []), t;
}
var Bt = function() {
};
typeof window < "u" && (Bt = window.Element);
function k(e) {
  return function(t) {
    return Pt(t.theme, e);
  };
}
var Ct = "__floating-vue__popper";
var jo = () => defineComponent({
  name: "VPopper",
  provide() {
    return {
      [Ct]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Ct]: { default: null }
  },
  props: {
    theme: {
      type: String,
      required: true
    },
    targetNodes: {
      type: Function,
      required: true
    },
    referenceNode: {
      type: Function,
      default: null
    },
    popperNode: {
      type: Function,
      required: true
    },
    shown: {
      type: Boolean,
      default: false
    },
    showGroup: {
      type: String,
      default: null
    },
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: k("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: k("positioningDisabled")
    },
    placement: {
      type: String,
      default: k("placement"),
      validator: (e) => zn.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: k("delay")
    },
    distance: {
      type: [Number, String],
      default: k("distance")
    },
    skidding: {
      type: [Number, String],
      default: k("skidding")
    },
    triggers: {
      type: Array,
      default: k("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: k("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: k("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: k("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: k("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: k("popperHideTriggers")
    },
    container: {
      type: [String, Object, Bt, Boolean],
      default: k("container")
    },
    boundary: {
      type: [String, Bt],
      default: k("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: k("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: k("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: k("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: k("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: k("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: k("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: k("computeTransformOrigin")
    },
    autoMinSize: {
      type: Boolean,
      default: k("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: k("autoSize")
    },
    autoMaxSize: {
      type: Boolean,
      default: k("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: k("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: k("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: k("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: k("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: k("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: k("flip")
    },
    shift: {
      type: Boolean,
      default: k("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: k("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: k("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: k("disposeTimeout")
    }
  },
  emits: {
    show: () => true,
    hide: () => true,
    "update:shown": (e) => true,
    "apply-show": () => true,
    "apply-hide": () => true,
    "close-group": () => true,
    "close-directive": () => true,
    "auto-hide": () => true,
    resize: () => true
  },
  data() {
    return {
      isShown: false,
      isMounted: false,
      skipTransition: false,
      classes: {
        showFrom: false,
        showTo: false,
        hideFrom: false,
        hideTo: true
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`,
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: true,
      pendingHide: false,
      containsGlobalTarget: false,
      isDisposed: true,
      mouseDownContains: false
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: {
          ...this.classes,
          popperClass: this.popperClass
        },
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var e;
      return (e = this[Ct]) == null ? void 0 : e.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var e, t;
      return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
    }
  },
  watch: {
    shown: "$_autoShowHide",
    disabled(e) {
      e ? this.dispose() : this.init();
    },
    async container() {
      this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
    },
    triggers: {
      handler: "$_refreshListeners",
      deep: true
    },
    positioningDisabled: "$_refreshListeners",
    ...[
      "placement",
      "distance",
      "skidding",
      "boundary",
      "strategy",
      "overflowPadding",
      "arrowPadding",
      "preventOverflow",
      "shift",
      "shiftCrossAxis",
      "flip"
    ].reduce((e, t) => (e[t] = "$_computePosition", e), {})
  },
  created() {
    this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
  },
  mounted() {
    this.init(), this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeUnmount() {
    this.dispose();
  },
  methods: {
    show({ event: e = null, skipDelay: t = false, force: o = false } = {}) {
      var i, n;
      (i = this.parentPopper) != null && i.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = false, (o || !this.disabled) && (((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = true, requestAnimationFrame(() => {
        this.$_showFrameLocked = false;
      })), this.$emit("update:shown", true));
    },
    hide({ event: e = null, skipDelay: t = false } = {}) {
      var o;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.pendingHide = true;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((o = this.parentPopper) == null ? void 0 : o.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = false, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", false);
      }
    },
    init() {
      var t;
      var e;
      this.isDisposed && (this.isDisposed = false, this.isMounted = false, this.$_events = [], this.$_preventShow = false, this.$_referenceNode = (t = (e = this.referenceNode) == null ? void 0 : e.call(this)) != null ? t : this.$el, this.$_targetNodes = this.targetNodes().filter((o) => o.nodeType === o.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.isDisposed || (this.isDisposed = true, this.$_removeEventListeners(), this.hide({ skipDelay: true }), this.$_detachPopperNode(), this.isMounted = false, this.isShown = false, this.$_updateParentShownChildren(false), this.$_swapTargetAttrs("data-original-title", "title"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      var i;
      if (this.isDisposed || this.positioningDisabled)
        return;
      const e = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && e.middleware.push(_n({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(wn({
        alignment: (i = this.placement.split("-")[1]) != null ? i : ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(xn({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(bn({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(vn({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: n, rects: s, middlewareData: r }) => {
          let a;
          const { centerOffset: l } = r.arrow;
          return n.startsWith("top") || n.startsWith("bottom") ? a = Math.abs(l) > s.reference.width / 2 : a = Math.abs(l) > s.reference.height / 2, {
            data: {
              overflow: a
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const n = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: s, placement: r, middlewareData: a }) => {
            var l;
            if ((l = a.autoSize) != null && l.skip)
              return {};
            let p, f;
            return r.startsWith("top") || r.startsWith("bottom") ? p = s.reference.width : f = s.reference.height, this.$_innerNode.style[n === "min" ? "minWidth" : n === "max" ? "maxWidth" : "width"] = p != null ? `${p}px` : null, this.$_innerNode.style[n === "min" ? "minHeight" : n === "max" ? "maxHeight" : "height"] = f != null ? `${f}px` : null, {
              data: {
                skip: true
              },
              reset: {
                rects: true
              }
            };
          }
        });
      }
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Tn({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: n, availableHeight: s }) => {
          this.$_innerNode.style.maxWidth = n != null ? `${n}px` : null, this.$_innerNode.style.maxHeight = s != null ? `${s}px` : null;
        }
      })));
      const o = await Nn(this.$_referenceNode, this.$_popperNode, e);
      Object.assign(this.result, {
        x: o.x,
        y: o.y,
        placement: o.placement,
        strategy: o.strategy,
        arrow: {
          ...o.middlewareData.arrow,
          ...o.middlewareData.arrowOverflow
        }
      });
    },
    $_scheduleShow(e, t = false) {
      if (this.$_updateParentShownChildren(true), this.$_hideInProgress = false, clearTimeout(this.$_scheduleTimer), ke && this.instantMove && ke.instantMove && ke !== this.parentPopper) {
        ke.$_applyHide(true), this.$_applyShow(true);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = false) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = true;
        return;
      }
      this.$_updateParentShownChildren(false), this.$_hideInProgress = true, clearTimeout(this.$_scheduleTimer), this.isShown && (ke = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = false) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await $t(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...ft(this.$_referenceNode),
        ...ft(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t = this.$_referenceNode.getBoundingClientRect(), o = this.$_popperNode.querySelector(".v-popper__wrapper"), i = o.parentNode.getBoundingClientRect(), n = t.x + t.width / 2 - (i.left + o.offsetLeft), s = t.y + t.height / 2 - (i.top + o.offsetTop);
        this.result.transformOrigin = `${n}px ${s}px`;
      }
      this.isShown = true, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let o = 0; o < se.length; o++)
          t = se[o], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      se.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of bo(this.theme))
        To(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = true, this.classes.showTo = false, this.classes.hideFrom = false, this.classes.hideTo = false, await $t(), this.classes.showFrom = false, this.classes.showTo = true, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = false) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = true, this.$_hideInProgress = false;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, _o(se, this), se.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const o of bo(this.theme)) {
        const i = To(o);
        _o(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${o}`);
      }
      ke === this && (ke = null), this.isShown = false, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = false);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = false, this.classes.showTo = false, this.classes.hideFrom = true, this.classes.hideTo = false, await $t(), this.classes.hideFrom = false, this.classes.hideTo = true;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.isDisposed)
        return;
      let e = this.container;
      if (typeof e == "string" ? e = window.document.querySelector(e) : e === false && (e = this.$_targetNodes[0].parentNode), !e)
        throw new Error("No container for popover: " + this.container);
      e.appendChild(this.$_popperNode), this.isMounted = true;
    },
    $_addEventListeners() {
      const e = (o) => {
        this.isShown && !this.$_hideInProgress || (o.usedByTooltip = true, !this.$_preventShow && this.show({ event: o }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, $o, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], $o, this.popperTriggers, this.popperShowTriggers, e);
      const t = (o) => {
        o.usedByTooltip || this.hide({ event: o });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Co, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Co, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, o) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: o }), e.forEach((i) => i.addEventListener(t, o, Qe ? {
        passive: true
      } : void 0));
    },
    $_registerTriggerListeners(e, t, o, i, n) {
      let s = o;
      i != null && (s = typeof i == "function" ? i(s) : i), s.forEach((r) => {
        const a = t[r];
        a && this.$_registerEventListeners(e, a, n);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((o) => {
        const { targetNodes: i, eventType: n, handler: s } = o;
        !e || e === n ? i.forEach((r) => r.removeEventListener(n, s)) : t.push(o);
      }), this.$_events = t;
    },
    $_refreshListeners() {
      this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
    },
    $_handleGlobalClose(e, t = false) {
      this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = true, setTimeout(() => {
        this.$_preventShow = false;
      }, 300)));
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(e, t) {
      for (const o of this.$_targetNodes) {
        const i = o.getAttribute(e);
        i && (o.removeAttribute(e), o.setAttribute(t, i));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const o in e) {
          const i = e[o];
          i == null ? t.removeAttribute(o) : t.setAttribute(o, i);
        }
    },
    $_updateParentShownChildren(e) {
      let t = this.parentPopper;
      for (; t; )
        e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
    },
    $_isAimingPopper() {
      const e = this.$_referenceNode.getBoundingClientRect();
      if (Ue >= e.left && Ue <= e.right && qe >= e.top && qe <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), o = Ue - xe, i = qe - Te, n = t.left + t.width / 2 - xe + (t.top + t.height / 2) - Te + t.width + t.height, s = xe + o * n, r = Te + i * n;
        return ct(xe, Te, s, r, t.left, t.top, t.left, t.bottom) || ct(xe, Te, s, r, t.left, t.top, t.right, t.top) || ct(xe, Te, s, r, t.right, t.top, t.right, t.bottom) || ct(xe, Te, s, r, t.left, t.bottom, t.right, t.bottom);
      }
      return false;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Wo) {
    const e = Qe ? {
      passive: true,
      capture: true
    } : true;
    document.addEventListener("touchstart", (t) => So(t), e), document.addEventListener("touchend", (t) => Ao(t, true), e);
  } else
    window.addEventListener("mousedown", (e) => So(e), true), window.addEventListener("click", (e) => Ao(e, false), true);
  window.addEventListener("resize", Vn);
}
function So(e, t) {
  for (let o = 0; o < se.length; o++) {
    const i = se[o];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Ao(e, t) {
  Fn(e, t);
}
function Fn(e, t) {
  const o = {};
  for (let i = se.length - 1; i >= 0; i--) {
    const n = se[i];
    try {
      const s = n.containsGlobalTarget = n.mouseDownContains || n.popperNode().contains(e.target);
      n.pendingHide = false, requestAnimationFrame(() => {
        if (n.pendingHide = false, !o[n.randomId] && Po(n, s, e)) {
          if (n.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && s) {
            let a = n.parentPopper;
            for (; a; )
              o[a.randomId] = true, a = a.parentPopper;
            return;
          }
          let r = n.parentPopper;
          for (; r && Po(r, r.containsGlobalTarget, e); )
            r.$_handleGlobalClose(e, t), r = r.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Po(e, t, o) {
  return o.closeAllPopover || o.closePopover && t || In(e, o) && !t;
}
function In(e, t) {
  if (typeof e.autoHide == "function") {
    const o = e.autoHide(t);
    return e.lastAutoHide = o, o;
  }
  return e.autoHide;
}
function Vn() {
  for (let e = 0; e < se.length; e++)
    se[e].$_computePosition();
}
var xe = 0;
var Te = 0;
var Ue = 0;
var qe = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  xe = Ue, Te = qe, Ue = e.clientX, qe = e.clientY;
}, Qe ? {
  passive: true
} : void 0);
function ct(e, t, o, i, n, s, r, a) {
  const l = ((r - n) * (t - s) - (a - s) * (e - n)) / ((a - s) * (o - e) - (r - n) * (i - t)), p = ((o - e) * (t - s) - (i - t) * (e - n)) / ((a - s) * (o - e) - (r - n) * (i - t));
  return l >= 0 && l <= 1 && p >= 0 && p <= 1;
}
var Wn = {
  extends: jo()
};
var Zt = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [i, n] of t)
    o[i] = n;
  return o;
};
function jn(e, t, o, i, n, s) {
  return openBlock(), createElementBlock("div", {
    ref: "reference",
    class: normalizeClass(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    renderSlot(e.$slots, "default", normalizeProps(guardReactiveProps(e.slotData)))
  ], 2);
}
var Zn = Zt(Wn, [["render", jn]]);
function Un() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var o = e.indexOf("Trident/");
  if (o > 0) {
    var i = e.indexOf("rv:");
    return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10);
  }
  var n = e.indexOf("Edge/");
  return n > 0 ? parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) : -1;
}
var dt;
function kt() {
  kt.init || (kt.init = true, dt = Un() !== -1);
}
var wt = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: false
    },
    ignoreWidth: {
      type: Boolean,
      default: false
    },
    ignoreHeight: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    kt(), nextTick(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", dt && this.$el.appendChild(e), e.data = "about:blank", dt || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!dt && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
var qn = withScopeId("data-v-b329ee4c");
pushScopeId("data-v-b329ee4c");
var Gn = {
  class: "resize-observer",
  tabindex: "-1"
};
popScopeId();
var Yn = qn((e, t, o, i, n, s) => (openBlock(), createBlock("div", Gn)));
wt.render = Yn;
wt.__scopeId = "data-v-b329ee4c";
wt.__file = "src/components/ResizeObserver.vue";
var Zo = (e = "theme") => ({
  computed: {
    themeClass() {
      return Rn(this[e]);
    }
  }
});
var Xn = defineComponent({
  name: "VPopperContent",
  components: {
    ResizeObserver: wt
  },
  mixins: [
    Zo()
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(e) {
      return e != null && !isNaN(e) ? `${e}px` : null;
    }
  }
});
var Kn = ["id", "aria-hidden", "tabindex", "data-popper-placement"];
var Qn = {
  ref: "inner",
  class: "v-popper__inner"
};
var Jn = createBaseVNode("div", { class: "v-popper__arrow-outer" }, null, -1);
var es = createBaseVNode("div", { class: "v-popper__arrow-inner" }, null, -1);
var ts = [
  Jn,
  es
];
function os(e, t, o, i, n, s) {
  const r = resolveComponent("ResizeObserver");
  return openBlock(), createElementBlock("div", {
    id: e.popperId,
    ref: "popover",
    class: normalizeClass(["v-popper__popper", [
      e.themeClass,
      e.classes.popperClass,
      {
        "v-popper__popper--shown": e.shown,
        "v-popper__popper--hidden": !e.shown,
        "v-popper__popper--show-from": e.classes.showFrom,
        "v-popper__popper--show-to": e.classes.showTo,
        "v-popper__popper--hide-from": e.classes.hideFrom,
        "v-popper__popper--hide-to": e.classes.hideTo,
        "v-popper__popper--skip-transition": e.skipTransition,
        "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
        "v-popper__popper--no-positioning": !e.result
      }
    ]]),
    style: normalizeStyle(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = withKeys((a) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    createBaseVNode("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (a) => e.autoHide && e.$emit("hide"))
    }),
    createBaseVNode("div", {
      class: "v-popper__wrapper",
      style: normalizeStyle(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      createBaseVNode("div", Qn, [
        e.mounted ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", null, [
            renderSlot(e.$slots, "default")
          ]),
          e.handleResize ? (openBlock(), createBlock(r, {
            key: 0,
            onNotify: t[1] || (t[1] = (a) => e.$emit("resize", a))
          })) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 512),
      createBaseVNode("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: normalizeStyle(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, ts, 4)
    ], 4)
  ], 46, Kn);
}
var Uo = Zt(Xn, [["render", os]]);
var qo = {
  methods: {
    show(...e) {
      return this.$refs.popper.show(...e);
    },
    hide(...e) {
      return this.$refs.popper.hide(...e);
    },
    dispose(...e) {
      return this.$refs.popper.dispose(...e);
    },
    onResize(...e) {
      return this.$refs.popper.onResize(...e);
    }
  }
};
var Et = function() {
};
typeof window < "u" && (Et = window.Element);
var is = defineComponent({
  name: "VPopperWrapper",
  components: {
    Popper: Zn,
    PopperContent: Uo
  },
  mixins: [
    qo,
    Zo("finalTheme")
  ],
  props: {
    theme: {
      type: String,
      default: null
    },
    referenceNode: {
      type: Function,
      default: null
    },
    shown: {
      type: Boolean,
      default: false
    },
    showGroup: {
      type: String,
      default: null
    },
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    positioningDisabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: void 0
    },
    delay: {
      type: [String, Number, Object],
      default: void 0
    },
    distance: {
      type: [Number, String],
      default: void 0
    },
    skidding: {
      type: [Number, String],
      default: void 0
    },
    triggers: {
      type: Array,
      default: void 0
    },
    showTriggers: {
      type: [Array, Function],
      default: void 0
    },
    hideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperTriggers: {
      type: Array,
      default: void 0
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    container: {
      type: [String, Object, Et, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, Et],
      default: void 0
    },
    strategy: {
      type: String,
      default: void 0
    },
    autoHide: {
      type: [Boolean, Function],
      default: void 0
    },
    handleResize: {
      type: Boolean,
      default: void 0
    },
    instantMove: {
      type: Boolean,
      default: void 0
    },
    eagerMount: {
      type: Boolean,
      default: void 0
    },
    popperClass: {
      type: [String, Array, Object],
      default: void 0
    },
    computeTransformOrigin: {
      type: Boolean,
      default: void 0
    },
    autoMinSize: {
      type: Boolean,
      default: void 0
    },
    autoSize: {
      type: [Boolean, String],
      default: void 0
    },
    autoMaxSize: {
      type: Boolean,
      default: void 0
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: void 0
    },
    preventOverflow: {
      type: Boolean,
      default: void 0
    },
    overflowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowOverflow: {
      type: Boolean,
      default: void 0
    },
    flip: {
      type: Boolean,
      default: void 0
    },
    shift: {
      type: Boolean,
      default: void 0
    },
    shiftCrossAxis: {
      type: Boolean,
      default: void 0
    },
    noAutoFocus: {
      type: Boolean,
      default: void 0
    },
    disposeTimeout: {
      type: Number,
      default: void 0
    }
  },
  emits: {
    show: () => true,
    hide: () => true,
    "update:shown": (e) => true,
    "apply-show": () => true,
    "apply-hide": () => true,
    "close-group": () => true,
    "close-directive": () => true,
    "auto-hide": () => true,
    resize: () => true
  },
  computed: {
    finalTheme() {
      var e;
      return (e = this.theme) != null ? e : this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
    }
  }
});
function ns(e, t, o, i, n, s) {
  const r = resolveComponent("PopperContent"), a = resolveComponent("Popper");
  return openBlock(), createBlock(a, mergeProps({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t[0] || (t[0] = () => e.$emit("show")),
    onHide: t[1] || (t[1] = () => e.$emit("hide")),
    "onUpdate:shown": t[2] || (t[2] = (l) => e.$emit("update:shown", l)),
    onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
    onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
    onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
    onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
    onResize: t[8] || (t[8] = () => e.$emit("resize"))
  }), {
    default: withCtx(({
      popperId: l,
      isShown: p,
      shouldMountContent: f,
      skipTransition: m,
      autoHide: u,
      show: d,
      hide: w,
      handleResize: C,
      onResize: B,
      classes: _,
      result: b
    }) => [
      renderSlot(e.$slots, "default", {
        shown: p,
        show: d,
        hide: w
      }),
      createVNode(r, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: p,
        mounted: f,
        "skip-transition": m,
        "auto-hide": u,
        "handle-resize": C,
        classes: _,
        result: b,
        onHide: w,
        onResize: B
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "popper", {
            shown: p,
            hide: w
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
var Ut = Zt(is, [["render", ns]]);
({
  ...Ut
});
({
  ...Ut
});
var ss = {
  ...Ut,
  name: "VTooltip",
  vPopperTheme: "tooltip"
};
defineComponent({
  name: "VTooltipDirective",
  components: {
    Popper: jo(),
    PopperContent: Uo
  },
  mixins: [
    qo
  ],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => Pt(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => Pt(e.theme, "loadingContent")
    },
    targetNodes: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync() {
      return typeof this.content == "function";
    },
    loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent() {
      return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
    }
  },
  watch: {
    content: {
      handler() {
        this.fetchContent(true);
      },
      immediate: true
    },
    async finalContent() {
      await this.$nextTick(), this.$refs.popper.onResize();
    }
  },
  created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent(e) {
      if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null, this.$_loading = true;
        const t = ++this.$_fetchId, o = this.content(this);
        o.then ? o.then((i) => this.onResult(t, i)) : this.onResult(t, o);
      }
    },
    onResult(e, t) {
      e === this.$_fetchId && (this.$_loading = false, this.asyncContent = t);
    },
    onShow() {
      this.$_isShown = true, this.fetchContent();
    },
    onHide() {
      this.$_isShown = false;
    }
  }
});
var me = ss;
var rs = ["innerHTML"];
var as = ["innerHTML"];
var ps = defineComponent({
  __name: "AntDesign",
  props: {
    code: {},
    showCode: {},
    title: { default: "默认标题" },
    description: { default: "描述内容" }
  },
  setup(e) {
    const t = e, o = Nt(), { isCodeFold: i, setCodeFold: n } = Rt(), { clickCopy: s } = Ft(), r = ref(decodeURIComponent(t.code)), a = ref(decodeURIComponent(t.showCode)), l = ref(null), p = () => {
      s(r.value);
    }, f = computed(() => {
      var u;
      return l.value ? (u = l.value) == null ? void 0 : u.clientHeight : 0;
    }), m = (u) => {
      i.value ? l.value.style.height = "0px" : l.value.style.height = `${u}px`;
    };
    return onMounted(() => {
      const u = f.value;
      m(u);
    }), watch(i, () => {
      const u = f.value;
      m(u);
    }), (u, d) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("div", {
        class: normalizeClass([unref(o).e("ant-design__container")])
      }, [
        createBaseVNode("section", {
          class: normalizeClass([unref(o).bem("preview")])
        }, [
          renderSlot(u.$slots, "default")
        ], 2),
        createBaseVNode("section", {
          class: normalizeClass([unref(o).bem("description")])
        }, [
          t.title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(o).bem("description", "title")])
          }, toDisplayString(u.title), 3)) : createCommentVNode("", true),
          t.description ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass([unref(o).bem("description", "content")]),
            innerHTML: u.description
          }, null, 10, rs)) : createCommentVNode("", true),
          t.description || !t.title && !t.description ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass([unref(o).bem("description", "split-line")])
          }, null, 2)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([unref(o).bem("description", "handle-btn")])
          }, [
            createVNode(unref(me), { placement: "bottom" }, {
              popper: withCtx(() => d[2] || (d[2] = [
                createTextVNode(" 复制代码 ")
              ])),
              default: withCtx(() => [
                createVNode(Lt, { onClick: p })
              ]),
              _: 1
            }),
            unref(i) ? (openBlock(), createBlock(unref(me), {
              key: 1,
              placement: "bottom"
            }, {
              popper: withCtx(() => d[4] || (d[4] = [
                createTextVNode(" 展开代码 ")
              ])),
              default: withCtx(() => [
                createVNode(Mt, {
                  onClick: d[1] || (d[1] = (w) => unref(n)(false))
                })
              ]),
              _: 1
            })) : (openBlock(), createBlock(unref(me), {
              key: 0,
              placement: "bottom"
            }, {
              popper: withCtx(() => d[3] || (d[3] = [
                createTextVNode(" 折叠代码 ")
              ])),
              default: withCtx(() => [
                createVNode(Ht, {
                  onClick: d[0] || (d[0] = (w) => unref(n)(true))
                })
              ]),
              _: 1
            }))
          ], 2)
        ], 2),
        createBaseVNode("section", {
          class: normalizeClass([unref(o).bem("source")]),
          ref_key: "sourceCodeArea",
          ref: l
        }, [
          createBaseVNode("div", {
            innerHTML: a.value,
            class: "language-vue"
          }, null, 8, as)
        ], 2)
      ], 2),
      createVNode(unref(zt), {
        expand: true,
        closeButton: "",
        richColors: ""
      })
    ], 64));
  }
});
var ls = ["innerHTML"];
var hs = defineComponent({
  __name: "ElementPlus",
  props: {
    code: {},
    showCode: {},
    title: { default: "默认标题" },
    description: { default: "描述内容" }
  },
  setup(e) {
    const t = e, o = Nt(), { isCodeFold: i, setCodeFold: n } = Rt(), { clickCopy: s } = Ft(), r = ref(decodeURIComponent(t.code)), a = ref(decodeURIComponent(t.showCode)), l = ref(null), p = () => {
      s(r.value);
    }, f = computed(() => {
      var u;
      return l.value ? (u = l.value) == null ? void 0 : u.clientHeight : 0;
    }), m = (u) => {
      i.value ? l.value.style.height = "0px" : l.value.style.height = `${u}px`;
    };
    return onMounted(() => {
      const u = f.value;
      m(u);
    }), watch(i, () => {
      const u = f.value;
      m(u);
    }), (u, d) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("div", {
        class: normalizeClass([unref(o).e("element-plus__container")])
      }, [
        createBaseVNode("section", {
          class: normalizeClass([unref(o).bem("preview")])
        }, [
          renderSlot(u.$slots, "default")
        ], 2),
        createBaseVNode("section", {
          class: normalizeClass([unref(o).bem("description")])
        }, [
          createBaseVNode("div", {
            class: normalizeClass([unref(o).bem("description", "split-line")])
          }, null, 2),
          createBaseVNode("div", {
            class: normalizeClass([unref(o).bem("description", "handle-btn")])
          }, [
            createVNode(unref(me), { placement: "bottom" }, {
              popper: withCtx(() => d[2] || (d[2] = [
                createTextVNode(" 复制代码 ")
              ])),
              default: withCtx(() => [
                createVNode(Lt, { onClick: p })
              ]),
              _: 1
            }),
            unref(i) ? (openBlock(), createBlock(unref(me), {
              key: 1,
              placement: "bottom"
            }, {
              popper: withCtx(() => d[4] || (d[4] = [
                createTextVNode(" 展开代码 ")
              ])),
              default: withCtx(() => [
                createVNode(Mt, {
                  onClick: d[1] || (d[1] = (w) => unref(n)(false))
                })
              ]),
              _: 1
            })) : (openBlock(), createBlock(unref(me), {
              key: 0,
              placement: "bottom"
            }, {
              popper: withCtx(() => d[3] || (d[3] = [
                createTextVNode(" 折叠代码 ")
              ])),
              default: withCtx(() => [
                createVNode(Ht, {
                  onClick: d[0] || (d[0] = (w) => unref(n)(true))
                })
              ]),
              _: 1
            }))
          ], 2)
        ], 2),
        createBaseVNode("section", {
          class: normalizeClass([unref(o).bem("source")]),
          ref_key: "sourceCodeArea",
          ref: l
        }, [
          createBaseVNode("div", {
            innerHTML: a.value,
            class: "language-vue"
          }, null, 8, ls)
        ], 2)
      ], 2),
      createVNode(unref(zt), {
        expand: true,
        closeButton: "",
        richColors: ""
      })
    ], 64));
  }
});
var cs = ["innerHTML"];
var fs = defineComponent({
  __name: "NaiveUI",
  props: {
    code: {},
    showCode: {},
    title: { default: "默认标题" },
    description: { default: "描述内容" }
  },
  setup(e) {
    const t = e, o = Nt(), { isCodeFold: i, setCodeFold: n } = Rt(), { clickCopy: s } = Ft(), r = ref(decodeURIComponent(t.code)), a = ref(decodeURIComponent(t.showCode)), l = ref(null), p = () => {
      s(r.value);
    }, f = computed(() => {
      var u;
      return l.value ? (u = l.value) == null ? void 0 : u.clientHeight : 0;
    }), m = (u) => {
      i.value ? l.value.style.height = "0px" : l.value.style.height = `${u}px`;
    };
    return onMounted(() => {
      const u = f.value;
      m(u);
    }), watch(i, () => {
      const u = f.value;
      m(u);
    }), (u, d) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("div", {
        class: normalizeClass([unref(o).e("naive-ui__container")])
      }, [
        createBaseVNode("section", {
          class: normalizeClass([unref(o).bem("name_handle")])
        }, [
          t.title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(o).bem("component", "name")])
          }, toDisplayString(u.title), 3)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([unref(o).bem("description", "btns")])
          }, [
            createVNode(unref(me), { placement: "bottom" }, {
              popper: withCtx(() => d[2] || (d[2] = [
                createTextVNode(" 复制代码 ")
              ])),
              default: withCtx(() => [
                createVNode(Lt, { onClick: p })
              ]),
              _: 1
            }),
            unref(i) ? (openBlock(), createBlock(unref(me), {
              key: 1,
              placement: "bottom"
            }, {
              popper: withCtx(() => d[4] || (d[4] = [
                createTextVNode(" 展开代码 ")
              ])),
              default: withCtx(() => [
                createVNode(Mt, {
                  onClick: d[1] || (d[1] = (w) => unref(n)(false))
                })
              ]),
              _: 1
            })) : (openBlock(), createBlock(unref(me), {
              key: 0,
              placement: "bottom"
            }, {
              popper: withCtx(() => d[3] || (d[3] = [
                createTextVNode(" 折叠代码 ")
              ])),
              default: withCtx(() => [
                createVNode(Ht, {
                  onClick: d[0] || (d[0] = (w) => unref(n)(true))
                })
              ]),
              _: 1
            }))
          ], 2)
        ], 2),
        t.description ? (openBlock(), createElementBlock("section", {
          key: 0,
          class: normalizeClass([unref(o).bem("description")])
        }, [
          createBaseVNode("span", null, toDisplayString(u.description), 1)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("section", {
          class: normalizeClass([unref(o).bem("preview")])
        }, [
          renderSlot(u.$slots, "default")
        ], 2),
        createBaseVNode("section", {
          class: normalizeClass([unref(o).bem("source")]),
          ref_key: "sourceCodeArea",
          ref: l
        }, [
          createBaseVNode("div", {
            innerHTML: a.value,
            class: "language-vue"
          }, null, 8, cs)
        ], 2)
      ], 2),
      createVNode(unref(zt), {
        expand: true,
        closeButton: "",
        richColors: ""
      })
    ], 64));
  }
});
export {
  ps as AntDesignContainer,
  hs as ElementPlusContainer,
  fs as NaiveUIContainer
};
//# sourceMappingURL=@vitepress-demo-preview_component.js.map
