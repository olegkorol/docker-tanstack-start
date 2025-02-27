import { K, l } from '../nitro/nitro.mjs';
import { isRedirect, isNotFound } from '@tanstack/react-router';

function g(e) {
  if (Array.isArray(e)) return e.flatMap((u) => g(u));
  if (typeof e != "string") return [];
  const n = [];
  let t = 0, r, s, o, i, a;
  const c = () => {
    for (; t < e.length && /\s/.test(e.charAt(t)); ) t += 1;
    return t < e.length;
  }, l = () => (s = e.charAt(t), s !== "=" && s !== ";" && s !== ",");
  for (; t < e.length; ) {
    for (r = t, a = false; c(); ) if (s = e.charAt(t), s === ",") {
      for (o = t, t += 1, c(), i = t; t < e.length && l(); ) t += 1;
      t < e.length && e.charAt(t) === "=" ? (a = true, t = i, n.push(e.slice(r, o)), r = t) : t = o + 1;
    } else t += 1;
    (!a || t >= e.length) && n.push(e.slice(r, e.length));
  }
  return n;
}
function O(e) {
  return e instanceof Headers ? new Headers(e) : Array.isArray(e) ? new Headers(e) : typeof e == "object" ? new Headers(e) : new Headers();
}
function _(...e) {
  return e.reduce((n, t) => {
    const r = O(t);
    for (const [s, o] of r.entries()) s === "set-cookie" ? g(o).forEach((a) => n.append("set-cookie", a)) : n.set(s, o);
    return n;
  }, new Headers());
}
const j = [];
let f;
function b(e) {
  const n = f;
  return f = typeof e == "function" ? e() : e, () => {
    f = n;
  };
}
b(() => {
  const e = (r, s) => `/__tsr/staticServerFnCache/${r.functionId}__${s}.json`, n = (r) => JSON.stringify(r != null ? r : "", (i, a) => a && typeof a == "object" && !Array.isArray(a) ? Object.keys(a).sort().reduce((c, l) => (c[l] = a[l], c), {}) : a).replace(/[/\\?%*:|"<>]/g, "-").replace(/\s+/g, "_"), t = typeof document < "u" ? /* @__PURE__ */ new Map() : null;
  return { getItem: async (r) => {
    if (typeof document > "u") {
      const s = n(r.data), o = e(r, s), i = "/Users/olegkorol/LocalOnly/git-repos/templates/tanstack-react-w-addons-test/dist", { promises: a } = await import('node:fs'), l$1 = (await import('node:path')).join(i, o), [u, h] = await a.readFile(l$1, "utf-8").then((d) => [l.parse(d), null]).catch((d) => [null, d]);
      if (h && h.code !== "ENOENT") throw h;
      return u;
    }
  }, setItem: async (r, s) => {
    const { promises: o } = await import('node:fs'), i = await import('node:path'), a = n(r.data), c = e(r, a), u = i.join("/Users/olegkorol/LocalOnly/git-repos/templates/tanstack-react-w-addons-test/dist", c);
    await o.mkdir(i.dirname(u), { recursive: true }), await o.writeFile(u, l.stringify(s));
  }, fetchItem: async (r) => {
    const s = n(r.data), o = e(r, s);
    let i = t == null ? void 0 : t.get(o);
    return i || (i = await fetch(o, { method: "GET" }).then((a) => a.text()).then((a) => l.parse(a)), t == null ? void 0 : t.set(o, i)), i;
  } };
});
function w(e, n) {
  const t = n || e || {};
  return typeof t.method > "u" && (t.method = "GET"), { options: t, middleware: (r) => w(void 0, Object.assign(t, { middleware: r })), validator: (r) => w(void 0, Object.assign(t, { validator: r })), type: (r) => w(void 0, Object.assign(t, { type: r })), handler: (...r) => {
    const [s, o] = r;
    Object.assign(t, { ...s, extractedFn: s, serverFn: o });
    const i = [...t.middleware || [], T(t)];
    return Object.assign(async (a) => m(i, "client", { ...s, ...t, data: a == null ? void 0 : a.data, headers: a == null ? void 0 : a.headers, signal: a == null ? void 0 : a.signal, context: {} }).then((c) => {
      if (c.error) throw c.error;
      return c.result;
    }), { ...s, __executeServer: async (a, c) => {
      const l = a instanceof FormData ? E(a) : a;
      l.type = typeof t.type == "function" ? t.type(l) : t.type;
      const u = { ...s, ...l, signal: c }, h = () => m(i, "server", u).then((d) => ({ result: d.result, error: d.error, context: d.sendContext }));
      if (u.type === "static") {
        let d;
        if ((f == null ? void 0 : f.getItem) && (d = await f.getItem(u)), d || (d = await h().then((y) => ({ ctx: y, error: null })).catch((y) => ({ ctx: void 0, error: y })), (f == null ? void 0 : f.setItem) && await f.setItem(u, d)), K(d), d.error) throw d.error;
        return d.ctx;
      }
      return h();
    } });
  } };
}
function E(e) {
  const n = e.get("__TSR_CONTEXT");
  if (e.delete("__TSR_CONTEXT"), typeof n != "string") return { context: {}, data: e };
  try {
    return { context: l.parse(n), data: e };
  } catch {
    return { data: e };
  }
}
function S(e) {
  const n = /* @__PURE__ */ new Set(), t = [], r = (s) => {
    s.forEach((o) => {
      o.options.middleware && r(o.options.middleware), n.has(o) || (n.add(o), t.push(o));
    });
  };
  return r(e), t;
}
const A = async (e, n, t) => e({ ...n, next: async (r = {}) => {
  var _a, _b;
  return t({ ...n, ...r, context: { ...n.context, ...r.context }, sendContext: { ...n.sendContext, ...(_a = r.sendContext) != null ? _a : {} }, headers: _(n.headers, r.headers), result: r.result !== void 0 ? r.result : n.result, error: (_b = r.error) != null ? _b : n.error });
} });
function I(e, n) {
  if (e == null) return {};
  if ("~standard" in e) {
    const t = e["~standard"].validate(n);
    if (t instanceof Promise) throw new Error("Async validation not supported");
    if (t.issues) throw new Error(JSON.stringify(t.issues, void 0, 2));
    return t.value;
  }
  if ("parse" in e) return e.parse(n);
  if (typeof e == "function") return e(n);
  throw new Error("Invalid validator type!");
}
async function m(e, n, t) {
  const r = S([...j, ...e]), s = async (o) => {
    const i = r.shift();
    if (!i) return o;
    i.options.validator && (n !== "client" || i.options.validateClient) && (o.data = await I(i.options.validator, o.data));
    const a = n === "client" ? i.options.client : i.options.server;
    return a ? A(a, o, async (c) => s(c).catch((l) => {
      if (isRedirect(l) || isNotFound(l)) return { ...c, error: l };
      throw l;
    })) : s(o);
  };
  return s({ ...t, headers: t.headers || {}, sendContext: t.sendContext || {}, context: t.context || {} });
}
function T(e) {
  return { _types: void 0, options: { validator: e.validator, validateClient: e.validateClient, client: async ({ next: n, sendContext: t, ...r }) => {
    var s;
    const o = { ...r, context: t, type: typeof r.type == "function" ? r.type(r) : r.type };
    if (r.type === "static" && typeof document < "u") {
      K(f);
      const a = await f.fetchItem(o);
      if (a) {
        if (a.error) throw a.error;
        return n(a.ctx);
      }
      `${o.functionId}${JSON.stringify(o.data)}`;
    }
    const i = await ((s = e.extractedFn) == null ? void 0 : s.call(e, o));
    return n(i);
  }, server: async ({ next: n, ...t }) => {
    var r;
    const s = await ((r = e.serverFn) == null ? void 0 : r.call(e, t));
    return n({ ...t, result: s });
  } } };
}
function M(e) {
  return e.replace(/^\/|\/$/g, "");
}
const H = (e, n, t) => {
  K(t);
  const r = `/${M(n)}/${e}`;
  return Object.assign(t, { url: r, functionId: e });
};

export { H, w };
//# sourceMappingURL=index-CcBX9Z2C.mjs.map
