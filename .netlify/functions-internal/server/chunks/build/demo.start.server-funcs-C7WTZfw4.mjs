import { jsx, jsxs } from 'react/jsx-runtime';
import { useRouter } from '@tanstack/react-router';
import { M as Me, a as ne, E as Er } from '../nitro/nitro.mjs';
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

const m = Er("src_routes_demo_start_server-funcs_tsx--updateCount_createServerFn_handler", "/_server"), c = ne({ method: "POST" }).validator((t) => t).handler(m), R = function() {
  const e = useRouter(), r = Me.useLoaderData();
  return jsx("div", { className: "p-4", children: jsxs("button", { onClick: () => {
    c({ data: 1 }).then(() => {
      e.invalidate();
    });
  }, className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: ["Add 1 to ", r, "?"] }) });
};

export { R as component };
//# sourceMappingURL=demo.start.server-funcs-C7WTZfw4.mjs.map
