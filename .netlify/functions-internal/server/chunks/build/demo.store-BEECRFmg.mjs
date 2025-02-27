import { jsx, jsxs } from 'react/jsx-runtime';
import { useStore } from '@tanstack/react-store';
import { Store, Derived } from '@tanstack/store';

const r = new Store({ firstName: "Jane", lastName: "Smith" }), n = new Derived({ fn: () => `${r.state.firstName} ${r.state.lastName}`, deps: [r] });
n.mount();
function p() {
  const o = useStore(r, (t) => t.firstName);
  return jsx("input", { type: "text", value: o, onChange: (t) => r.setState((a) => ({ ...a, firstName: t.target.value })), className: "bg-white/10 rounded-lg px-4 py-2 outline-none border border-white/20 hover:border-white/40 focus:border-white/60 transition-colors duration-200 placeholder-white/40" });
}
function d() {
  const o = useStore(r, (t) => t.lastName);
  return jsx("input", { type: "text", value: o, onChange: (t) => r.setState((a) => ({ ...a, lastName: t.target.value })), className: "bg-white/10 rounded-lg px-4 py-2 outline-none border border-white/20 hover:border-white/40 focus:border-white/60 transition-colors duration-200 placeholder-white/40" });
}
function c() {
  const o = useStore(n);
  return jsx("div", { className: "bg-white/10 rounded-lg px-4 py-2 outline-none ", children: o });
}
const k = function() {
  return jsx("div", { className: "min-h-[calc(100vh-32px)] text-white p-8 flex items-center justify-center w-full h-full", style: { backgroundImage: "radial-gradient(50% 50% at 80% 80%, #f4a460 0%, #8b4513 70%, #1a0f0a 100%)" }, children: jsxs("div", { className: "bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg flex flex-col gap-4 text-3xl min-w-1/2", children: [jsx("h1", { className: "text-4xl font-bold mb-5", children: "Store Example" }), jsx(p, {}), jsx(d, {}), jsx(c, {})] }) });
};

export { k as component };
//# sourceMappingURL=demo.store-BEECRFmg.mjs.map
