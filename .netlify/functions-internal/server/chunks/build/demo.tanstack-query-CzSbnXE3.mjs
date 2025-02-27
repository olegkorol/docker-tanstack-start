import { jsxs, jsx } from 'react/jsx-runtime';
import { useQuery } from '@tanstack/react-query';

const y = function() {
  const { data: i } = useQuery({ queryKey: ["people"], queryFn: () => fetch("https://swapi.dev/api/people").then((t) => t.json()).then((t) => t.results), initialData: [] });
  return jsxs("div", { className: "p-4", children: [jsx("h1", { className: "text-2xl mb-4", children: "People list from Swapi" }), jsx("ul", { children: i.map((t) => jsx("li", { children: t.name }, t.name)) })] });
};

export { y as component };
//# sourceMappingURL=demo.tanstack-query-CzSbnXE3.mjs.map
