import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

function n() {
  return fetch("/api/demo-names").then((t) => t.json());
}
const x = function() {
  const [e, m] = useState([]);
  return useEffect(() => {
    n().then(m);
  }, []), jsx("div", { className: "p-4", children: jsx("div", { children: e.join(", ") }) });
};

export { x as component };
//# sourceMappingURL=demo.start.api-request-C6io-ThA.mjs.map
