import { jsx, jsxs } from 'react/jsx-runtime';
import * as r from 'fs';
import { useRouter, createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import { w, H } from './index-CcBX9Z2C.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:async_hooks';
import '@tanstack/router-devtools';
import '@tanstack/react-query-devtools';
import '@tanstack/react-query';
import 'react-dom/server';
import 'node:stream/web';

const v = () => Promise.resolve().then(() => b), f = "count.txt";
async function h() {
  return parseInt(await r.promises.readFile(f, "utf-8").catch(() => "0"));
}
const C = H("src_routes_demo_start_server-funcs_tsx--getCount_createServerFn_handler", "/_server", (e, t) => a.__executeServer(e, t)), a = w({ method: "GET" }).handler(C, () => h()), s = createFileRoute("/demo/start/server-funcs")({ component: lazyRouteComponent(v, "component", () => s.ssr), loader: async () => await a() }), c = "count.txt";
async function S() {
  return parseInt(await r.promises.readFile(c, "utf-8").catch(() => "0"));
}
const x = H("src_routes_demo_start_server-funcs_tsx--updateCount_createServerFn_handler", "/_server", (e, t) => u.__executeServer(e, t)), u = w({ method: "POST" }).validator((e) => e).handler(x, async ({ data: e }) => {
  const t = await S();
  await r.promises.writeFile(c, `${t + e}`);
}), F = function() {
  const t = useRouter(), i = s.useLoaderData();
  return jsx("div", { className: "p-4", children: jsxs("button", { onClick: () => {
    u({ data: 1 }).then(() => {
      t.invalidate();
    });
  }, className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: ["Add 1 to ", i, "?"] }) });
}, b = Object.freeze(Object.defineProperty({ __proto__: null, component: F }, Symbol.toStringTag, { value: "Module" }));

export { F as component };
//# sourceMappingURL=demo.start.server-funcs-BEWy0mrp.mjs.map
