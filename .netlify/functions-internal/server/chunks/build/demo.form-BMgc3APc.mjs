import { jsx, jsxs } from 'react/jsx-runtime';
import { useForm } from '@tanstack/react-form';

const y = function() {
  const r = useForm({ defaultValues: { fullName: "" }, onSubmit: async ({ value: o }) => {
    console.log(o);
  } });
  return jsx("div", { className: "p-4", children: jsxs("form", { onSubmit: (o) => {
    o.preventDefault(), o.stopPropagation(), r.handleSubmit();
  }, children: [jsx("div", { children: jsx(r.Field, { name: "fullName", children: (o) => jsx("input", { name: o.name, value: o.state.value, onBlur: o.handleBlur, onChange: (t) => o.handleChange(t.target.value), className: "block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" }) }) }), jsx("button", { type: "submit", className: "mt-4 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: "Submit" })] }) });
};

export { y as component };
//# sourceMappingURL=demo.form-BMgc3APc.mjs.map
