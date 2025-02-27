import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import * as r from 'fs';
import { H, w } from './index-CcBX9Z2C.mjs';
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
import 'react/jsx-runtime';
import '@tanstack/router-devtools';
import '@tanstack/react-query-devtools';
import '@tanstack/react-query';
import 'react-dom/server';
import 'node:stream/web';

const m = () => import('./demo.start.server-funcs-BEWy0mrp.mjs'), p = "count.txt";
async function u() {
  return parseInt(await r.promises.readFile(p, "utf-8").catch(() => "0"));
}
const i = H("src_routes_demo_start_server-funcs_tsx--getCount_createServerFn_handler", "/_server", (t, r) => e.__executeServer(t, r)), e = w({ method: "GET" }).handler(i, () => u()), _ = createFileRoute("/demo/start/server-funcs")({ component: lazyRouteComponent(m, "component", () => _.ssr), loader: async () => await e() });

export { i as getCount_createServerFn_handler };
//# sourceMappingURL=demo.start.server-funcs-AMrb0Oaq.mjs.map
