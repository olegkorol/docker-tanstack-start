import { D } from '../nitro/nitro.mjs';
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

const n = D("/api/demo-names")({ GET: async ({ request: o }) => new Response(JSON.stringify(["Alice", "Bob", "Charlie"]), { headers: { "Content-Type": "application/json" } }) });

export { n as APIRoute };
//# sourceMappingURL=api.demo-names.mjs.map
