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
import '@tanstack/react-router';
import 'node:async_hooks';
import 'react/jsx-runtime';
import '@tanstack/router-devtools';
import '@tanstack/react-query-devtools';
import '@tanstack/react-query';
import 'react-dom/server';
import 'node:stream/web';

const a = "count.txt";
async function s() {
  return parseInt(await r.promises.readFile(a, "utf-8").catch(() => "0"));
}
const c = H("src_routes_demo_start_server-funcs_tsx--updateCount_createServerFn_handler", "/_server", (e, r) => i.__executeServer(e, r)), i = w({ method: "POST" }).validator((e) => e).handler(c, async ({ data: e }) => {
  const r$1 = await s();
  await r.promises.writeFile(a, `${r$1 + e}`);
});

export { c as updateCount_createServerFn_handler };
//# sourceMappingURL=demo.start.server-funcs-CoXrIZuF.mjs.map
