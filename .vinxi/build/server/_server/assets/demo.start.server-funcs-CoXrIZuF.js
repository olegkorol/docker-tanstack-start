import*as t from"fs";import{c as o,a as n}from"./index-CcBX9Z2C.js";import"./server-DGZq9EmD.js";import"@tanstack/react-router";import"node:async_hooks";import"h3";const a="count.txt";async function s(){return parseInt(await t.promises.readFile(a,"utf-8").catch(()=>"0"))}const c=o("src_routes_demo_start_server-funcs_tsx--updateCount_createServerFn_handler","/_server",(e,r)=>i.__executeServer(e,r)),i=n({method:"POST"}).validator(e=>e).handler(c,async({data:e})=>{const r=await s();await t.promises.writeFile(a,`${r+e}`)});export{c as updateCount_createServerFn_handler};
