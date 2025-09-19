function y(r, u, b) {
  return Math.max(u, Math.min(r, b));
}
const n = {
  toVector(r, u) {
    return r === void 0 && (r = u), Array.isArray(r) ? r : [r, r];
  },
  add(r, u) {
    return [r[0] + u[0], r[1] + u[1]];
  },
  sub(r, u) {
    return [r[0] - u[0], r[1] - u[1]];
  },
  addTo(r, u) {
    r[0] += u[0], r[1] += u[1];
  },
  subTo(r, u) {
    r[0] -= u[0], r[1] -= u[1];
  }
};
function f(r, u, b) {
  return u === 0 || Math.abs(u) === 1 / 0 ? Math.pow(r, b * 5) : r * u * b / (u + b * r);
}
function t(r, u, b, e = 0.15) {
  return e === 0 ? y(r, u, b) : r < u ? -f(u - r, b - u, e) + u : r > b ? +f(r - b, b - u, e) + b : r;
}
function A(r, [u, b], [e, a]) {
  const [[c, d], [h, M]] = r;
  return [t(u, c, d, e), t(b, h, M, a)];
}
export {
  n as V,
  A as c,
  t as r
};
