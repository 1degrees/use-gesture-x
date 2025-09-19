import { ref as r, unref as u, watch as g, onMounted as w, onUnmounted as x } from "vue";
import { registerAction as i, dragAction as v, pinchAction as R, wheelAction as b, scrollAction as A, moveAction as y, hoverAction as C } from "@use-gesture-x/core/actions";
export * from "@use-gesture-x/core/actions";
import { Controller as E, parseMergedHandlers as m } from "@use-gesture-x/core";
export * from "@use-gesture-x/core/utils";
export * from "@use-gesture-x/core/types";
function f(n, c = r({}), t, o) {
  const e = new E(u(n));
  g(
    () => [n, o],
    () => {
      e.applyHandlers(u(n), u(o));
    },
    { immediate: !0, deep: !0 }
  ), g(
    () => [c, t],
    () => {
      e.applyConfig(u(c), u(t));
    },
    { immediate: !0, deep: !0 }
  );
  let s = null;
  const l = () => {
    s && s(), s = e.effect.bind(e)();
  };
  if (g(
    () => [n, c, t, o],
    () => l(),
    { deep: !0 }
  ), w(() => l()), x(e.clean.bind(e)), c.target === void 0)
    return (...a) => {
      const h = e.bind.bind(e)(...a);
      return K(h);
    };
}
function K(n) {
  const c = /(on)(.*)(Capture)?/g, t = {}, o = Object.keys(n), e = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
  return o.forEach((s) => {
    const l = s.replace(c, (d, a, p, h) => `${a}${e(p)}${h || ""}`);
    t[l] = n[s];
  }), t;
}
function $(n, c) {
  i(v);
  const t = r({ drag: n }), o = r(c || {}), e = r("drag");
  return f(t, o, e);
}
function j(n, c) {
  i(R);
  const t = r({ pinch: n }), o = r(c || {}), e = r("pinch");
  return f(t, o, e);
}
function z(n, c) {
  i(b);
  const t = r({ wheel: n }), o = r(c || {}), e = r("wheel");
  return console.log("useWheel", o, "------"), f(t, o, e);
}
function B(n, c) {
  i(A);
  const t = r({ scroll: n }), o = r(c || {}), e = r("scroll");
  return f(t, o, e);
}
function O(n, c) {
  i(y);
  const t = r({ move: n }), o = r(c || {}), e = r("move");
  return f(t, o, e);
}
function P(n, c) {
  i(C);
  const t = r({ hover: n }), o = r(c || {}), e = r("hover");
  return f(t, o, e);
}
function G(n) {
  return n.forEach(i), function(t, o) {
    const { handlers: e, nativeHandlers: s, config: l } = m(u(t), u(o) || {}), d = r(e), a = r(l), p = r(s);
    return g(
      () => [t, o],
      () => {
        const { handlers: h, nativeHandlers: H, config: k } = m(u(t), u(o) || {});
        d.value = h, a.value = k, p.value = H;
      },
      { deep: !0 }
    ), f(d, a, void 0, p);
  };
}
function D(n, c) {
  return G([v, R, A, b, y, C])(n, c || {});
}
export {
  G as createUseGesture,
  $ as useDrag,
  D as useGesture,
  P as useHover,
  O as useMove,
  j as usePinch,
  B as useScroll,
  z as useWheel
};
