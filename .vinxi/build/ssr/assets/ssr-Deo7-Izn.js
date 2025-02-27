import{RouterProvider as Qe,isRedirect as Ee,isNotFound as je,createControlledPromise as Xe,Link as D,createRootRoute as Ze,Outlet as Ye,HeadContent as et,Scripts as tt,createFileRoute as N,lazyRouteComponent as B,createRouter as rt}from"@tanstack/react-router";import{jsx as h,jsxs as W}from"react/jsx-runtime";import{TanStackRouterDevtools as nt}from"@tanstack/router-devtools";import{ReactQueryDevtools as st}from"@tanstack/react-query-devtools";import{QueryClient as ot,QueryClientProvider as at}from"@tanstack/react-query";import{AsyncLocalStorage as it}from"node:async_hooks";import{eventHandler as ct,toWebRequest as lt,getResponseHeaders as dt,H3Event as ce,getHeaders as ut}from"h3";import{Readable as ye,PassThrough as ft}from"node:stream";import te from"react-dom/server";import{ReadableStream as pt}from"node:stream/web";function ht(e={}){let r,t=!1;const n=s=>{if(r&&r!==s)throw new Error("Context conflict")};let o;if(e.asyncContext){const s=e.AsyncLocalStorage||globalThis.AsyncLocalStorage;s?o=new s:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const a=()=>{if(o){const s=o.getStore();if(s!==void 0)return s}return r};return{use:()=>{const s=a();if(s===void 0)throw new Error("Context is not available");return s},tryUse:()=>a(),set:(s,i)=>{i||n(s),r=s,t=!0},unset:()=>{r=void 0,t=!1},call:(s,i)=>{n(s),r=s;try{return o?o.run(s,i):i()}finally{t||(r=void 0)}},async callAsync(s,i){r=s;const c=()=>{r=s},u=()=>r===s?c:void 0;Se.add(u);try{const p=o?o.run(s,i):i();return t||(r=void 0),await p}finally{Se.delete(u)}}}}function mt(e={}){const r={};return{get(t,n={}){return r[t]||(r[t]=ht({...e,...n})),r[t]}}}const se=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},ge="__unctx__",yt=se[ge]||(se[ge]=mt()),gt=(e,r={})=>yt.get(e,r),_e="__unctx_async_handlers__",Se=se[_e]||(se[_e]=new Set);function we(e){return h(Qe,{router:e.router})}const K="__TSR_index";function _t(e){let r=e.getLocation();const t=new Set,n=s=>{r=e.getLocation(),t.forEach(i=>i({location:r,action:s}))},o=s=>{e.notifyOnIndexChange??!0?n(s):r=e.getLocation()},a=async({task:s,navigateOpts:i,...c})=>{var u,p;if(i?.ignoreBlocker??!1){s();return}const f=((u=e.getBlockers)==null?void 0:u.call(e))??[],x=c.type==="PUSH"||c.type==="REPLACE";if(typeof document<"u"&&f.length&&x)for(const L of f){const F=Te(c.path,c.state);if(await L.blockerFn({currentLocation:r,nextLocation:F,action:c.type})){(p=e.onBlocked)==null||p.call(e);return}}s()};return{get location(){return r},get length(){return e.getLength()},subscribers:t,subscribe:s=>(t.add(s),()=>{t.delete(s)}),push:(s,i,c)=>{const u=r.state[K];i=le(u+1,i),a({task:()=>{e.pushState(s,i),n({type:"PUSH"})},navigateOpts:c,type:"PUSH",path:s,state:i})},replace:(s,i,c)=>{const u=r.state[K];i=le(u,i),a({task:()=>{e.replaceState(s,i),n({type:"REPLACE"})},navigateOpts:c,type:"REPLACE",path:s,state:i})},go:(s,i)=>{a({task:()=>{e.go(s),o({type:"GO",index:s})},navigateOpts:i,type:"GO"})},back:s=>{a({task:()=>{e.back(s?.ignoreBlocker??!1),o({type:"BACK"})},navigateOpts:s,type:"BACK"})},forward:s=>{a({task:()=>{e.forward(s?.ignoreBlocker??!1),o({type:"FORWARD"})},navigateOpts:s,type:"FORWARD"})},canGoBack:()=>r.state[K]!==0,createHref:s=>e.createHref(s),block:s=>{var i;if(!e.setBlockers)return()=>{};const c=((i=e.getBlockers)==null?void 0:i.call(e))??[];return e.setBlockers([...c,s]),()=>{var u,p;const y=((u=e.getBlockers)==null?void 0:u.call(e))??[];(p=e.setBlockers)==null||p.call(e,y.filter(f=>f!==s))}},flush:()=>{var s;return(s=e.flush)==null?void 0:s.call(e)},destroy:()=>{var s;return(s=e.destroy)==null?void 0:s.call(e)},notify:n}}function le(e,r){return r||(r={}),{...r,key:ke(),[K]:e}}function St(e={initialEntries:["/"]}){const r=e.initialEntries;let t=e.initialIndex?Math.min(Math.max(e.initialIndex,0),r.length-1):r.length-1;const n=r.map((a,s)=>le(s,void 0));return _t({getLocation:()=>Te(r[t],n[t]),getLength:()=>r.length,pushState:(a,s)=>{t<r.length-1&&(r.splice(t+1),n.splice(t+1)),n.push(s),r.push(a),t=Math.max(r.length-1,0)},replaceState:(a,s)=>{n[t]=s,r[t]=a},back:()=>{t=Math.max(t-1,0)},forward:()=>{t=Math.min(t+1,r.length-1)},go:a=>{t=Math.min(Math.max(t+a,0),r.length-1)},createHref:a=>a})}function Te(e,r){const t=e.indexOf("#"),n=e.indexOf("?");return{href:e,pathname:e.substring(0,t>0?n>0?Math.min(t,n):t:n>0?n:e.length),hash:t>-1?e.substring(t):"",search:n>-1?e.slice(n,t===-1?void 0:t):"",state:r||{[K]:0,key:ke()}}}function ke(){return(Math.random()+1).toString(36).substring(7)}var wt="Invariant failed";function fe(e,r){if(!e)throw new Error(wt)}function Ae(e){if(Array.isArray(e))return e.flatMap(p=>Ae(p));if(typeof e!="string")return[];const r=[];let t=0,n,o,a,s,i;const c=()=>{for(;t<e.length&&/\s/.test(e.charAt(t));)t+=1;return t<e.length},u=()=>(o=e.charAt(t),o!=="="&&o!==";"&&o!==",");for(;t<e.length;){for(n=t,i=!1;c();)if(o=e.charAt(t),o===","){for(a=t,t+=1,c(),s=t;t<e.length&&u();)t+=1;t<e.length&&e.charAt(t)==="="?(i=!0,t=s,r.push(e.slice(n,a)),n=t):t=a+1}else t+=1;(!i||t>=e.length)&&r.push(e.slice(n,e.length))}return r}function vt(e){return e instanceof Headers?new Headers(e):Array.isArray(e)?new Headers(e):typeof e=="object"?new Headers(e):new Headers}function G(...e){return e.reduce((r,t)=>{const n=vt(t);for(const[o,a]of n.entries())o==="set-cookie"?Ae(a).forEach(i=>r.append("set-cookie",i)):r.set(o,a);return r},new Headers)}const bt=[];function xt(e){return e instanceof Error?{name:e.name,message:e.message}:{data:e}}const k=Symbol.for("TSR_DEFERRED_PROMISE");function Rt(e,r){const t=e;return t[k]||(t[k]={status:"pending"},t.then(n=>{t[k].status="success",t[k].data=n}).catch(n=>{t[k].status="error",t[k].error={data:xt(n),__isServerError:!0}})),t}function Ct(e,r){return r.reduce((t,n)=>(t[n]=e[n],t),{})}function A(e){if(!ve(e))return!1;const r=e.constructor;if(typeof r>"u")return!0;const t=r.prototype;return!(!ve(t)||!t.hasOwnProperty("isPrototypeOf"))}function ve(e){return Object.prototype.toString.call(e)==="[object Object]"}function Et(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function jt(e,r){let t,n,o,a="";for(t in e)if((o=e[t])!==void 0)if(Array.isArray(o))for(n=0;n<o.length;n++)a&&(a+="&"),a+=encodeURIComponent(t)+"="+encodeURIComponent(o[n]);else a&&(a+="&"),a+=encodeURIComponent(t)+"="+encodeURIComponent(o);return""+a}const b={stringify:e=>JSON.stringify(e,function(t,n){const o=this[t],a=re.find(s=>s.stringifyCondition(o));return a?a.stringify(o):n}),parse:e=>JSON.parse(e,function(t,n){const o=this[t];if(A(o)){const a=re.find(s=>s.parseCondition(o));if(a)return a.parse(o)}return n}),encode:e=>{if(Array.isArray(e))return e.map(t=>b.encode(t));if(A(e))return Object.fromEntries(Object.entries(e).map(([t,n])=>[t,b.encode(n)]));const r=re.find(t=>t.stringifyCondition(e));return r?r.stringify(e):e},decode:e=>{if(A(e)){const r=re.find(t=>t.parseCondition(e));if(r)return r.parse(e)}return Array.isArray(e)?e.map(r=>b.decode(r)):A(e)?Object.fromEntries(Object.entries(e).map(([r,t])=>[r,b.decode(t)])):e}},U=(e,r,t,n)=>({key:e,stringifyCondition:r,stringify:o=>({[`$${e}`]:t(o)}),parseCondition:o=>Object.hasOwn(o,`$${e}`),parse:o=>n(o[`$${e}`])}),re=[U("undefined",e=>e===void 0,()=>0,()=>{}),U("date",e=>e instanceof Date,e=>e.toISOString(),e=>new Date(e)),U("error",e=>e instanceof Error,e=>({...e,message:e.message,stack:void 0,cause:e.cause}),e=>Object.assign(new Error(e.message),e)),U("formData",e=>e instanceof FormData,e=>{const r={};return e.forEach((t,n)=>{const o=r[n];o!==void 0?Array.isArray(o)?o.push(t):r[n]=[o,t]:r[n]=t}),r},e=>{const r=new FormData;return Object.entries(e).forEach(([t,n])=>{Array.isArray(n)?n.forEach(o=>r.append(t,o)):r.append(t,n)}),r}),U("bigint",e=>typeof e=="bigint",e=>e.toString(),e=>BigInt(e))];let R;function Tt(e){const r=R;return R=typeof e=="function"?e():e,()=>{R=r}}Tt(()=>{const e=(n,o)=>`/__tsr/staticServerFnCache/${n.functionId}__${o}.json`,r=n=>JSON.stringify(n??"",(s,i)=>i&&typeof i=="object"&&!Array.isArray(i)?Object.keys(i).sort().reduce((c,u)=>(c[u]=i[u],c),{}):i).replace(/[/\\?%*:|"<>]/g,"-").replace(/\s+/g,"_"),t=typeof document<"u"?new Map:null;return{getItem:async n=>{if(typeof document>"u"){const o=r(n.data),a=e(n,o),s="/Users/olegkorol/LocalOnly/git-repos/templates/tanstack-react-w-addons-test/dist",{promises:i}=await import("node:fs"),u=(await import("node:path")).join(s,a),[p,y]=await i.readFile(u,"utf-8").then(f=>[b.parse(f),null]).catch(f=>[null,f]);if(y&&y.code!=="ENOENT")throw y;return p}},setItem:async(n,o)=>{const{promises:a}=await import("node:fs"),s=await import("node:path"),i=r(n.data),c=e(n,i),p=s.join("/Users/olegkorol/LocalOnly/git-repos/templates/tanstack-react-w-addons-test/dist",c);await a.mkdir(s.dirname(p),{recursive:!0}),await a.writeFile(p,b.stringify(o))},fetchItem:async n=>{const o=r(n.data),a=e(n,o);let s=t?.get(a);return s||(s=await fetch(a,{method:"GET"}).then(i=>i.text()).then(i=>b.parse(i)),t?.set(a,s)),s}}});function ne(e,r){const t=r||e||{};return typeof t.method>"u"&&(t.method="GET"),{options:t,middleware:n=>ne(void 0,Object.assign(t,{middleware:n})),validator:n=>ne(void 0,Object.assign(t,{validator:n})),type:n=>ne(void 0,Object.assign(t,{type:n})),handler:(...n)=>{const[o,a]=n;Object.assign(t,{...o,extractedFn:o,serverFn:a});const s=[...t.middleware||[],Ot(t)];return Object.assign(async i=>be(s,"client",{...o,...t,data:i?.data,headers:i?.headers,signal:i?.signal,context:{}}).then(c=>{if(c.error)throw c.error;return c.result}),{...o,__executeServer:async(i,c)=>{const u=i instanceof FormData?kt(i):i;u.type=typeof t.type=="function"?t.type(u):t.type;const p={...o,...u,signal:c},y=()=>be(s,"server",p).then(f=>({result:f.result,error:f.error,context:f.sendContext}));if(p.type==="static"){let f;if(R?.getItem&&(f=await R.getItem(p)),f||(f=await y().then(x=>({ctx:x,error:null})).catch(x=>({ctx:void 0,error:x})),R?.setItem&&await R.setItem(p,f)),fe(f),f.error)throw f.error;return f.ctx}return y()}})}}}function kt(e){const r=e.get("__TSR_CONTEXT");if(e.delete("__TSR_CONTEXT"),typeof r!="string")return{context:{},data:e};try{return{context:b.parse(r),data:e}}catch{return{data:e}}}function At(e){const r=new Set,t=[],n=o=>{o.forEach(a=>{a.options.middleware&&n(a.options.middleware),r.has(a)||(r.add(a),t.push(a))})};return n(e),t}const Pt=async(e,r,t)=>e({...r,next:async(n={})=>t({...r,...n,context:{...r.context,...n.context},sendContext:{...r.sendContext,...n.sendContext??{}},headers:G(r.headers,n.headers),result:n.result!==void 0?n.result:r.result,error:n.error??r.error})});function Ft(e,r){if(e==null)return{};if("~standard"in e){const t=e["~standard"].validate(r);if(t instanceof Promise)throw new Error("Async validation not supported");if(t.issues)throw new Error(JSON.stringify(t.issues,void 0,2));return t.value}if("parse"in e)return e.parse(r);if(typeof e=="function")return e(r);throw new Error("Invalid validator type!")}async function be(e,r,t){const n=At([...bt,...e]),o=async a=>{const s=n.shift();if(!s)return a;s.options.validator&&(r!=="client"||s.options.validateClient)&&(a.data=await Ft(s.options.validator,a.data));const i=r==="client"?s.options.client:s.options.server;return i?Pt(i,a,async c=>o(c).catch(u=>{if(Ee(u)||je(u))return{...c,error:u};throw u})):o(a)};return o({...t,headers:t.headers||{},sendContext:t.sendContext||{},context:t.context||{}})}function Ot(e){return{_types:void 0,options:{validator:e.validator,validateClient:e.validateClient,client:async({next:r,sendContext:t,...n})=>{var o;const a={...n,context:t,type:typeof n.type=="function"?n.type(n):n.type};if(n.type==="static"&&typeof document<"u"){fe(R);const i=await R.fetchItem(a);if(i){if(i.error)throw i.error;return r(i.ctx)}`${a.functionId}${JSON.stringify(a.data)}`}const s=await((o=e.extractedFn)==null?void 0:o.call(e,a));return r(s)},server:async({next:r,...t})=>{var n;const o=await((n=e.serverFn)==null?void 0:n.call(e,t));return r({...t,result:o})}}}}function $t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ie,xe;function Ht(){if(xe)return ie;xe=1;const e={},r=e.hasOwnProperty,t=(l,d)=>{for(const w in l)r.call(l,w)&&d(w,l[w])},n=(l,d)=>(d&&t(d,(w,E)=>{l[w]=E}),l),o=(l,d)=>{const w=l.length;let E=-1;for(;++E<w;)d(l[E])},a=l=>"\\u"+("0000"+l).slice(-4),s=(l,d)=>{let w=l.toString(16);return d?w:w.toUpperCase()},i=e.toString,c=Array.isArray,u=l=>typeof Buffer=="function"&&Buffer.isBuffer(l),p=l=>i.call(l)=="[object Object]",y=l=>typeof l=="string"||i.call(l)=="[object String]",f=l=>typeof l=="number"||i.call(l)=="[object Number]",x=l=>typeof l=="bigint",L=l=>typeof l=="function",F=l=>i.call(l)=="[object Map]",m=l=>i.call(l)=="[object Set]",O={"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},S=/[\\\b\f\n\r\t]/,z=/[0-9]/,V=/[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,q=/([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g,$=/([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g,g=(l,d)=>{const w=()=>{oe=X,++d.indentLevel,X=d.indent.repeat(d.indentLevel)},E={escapeEverything:!1,minimal:!1,isScriptContext:!1,quotes:"single",wrap:!1,es6:!1,json:!1,compact:!0,lowercaseHex:!1,numbers:"decimal",indent:"	",indentLevel:0,__inline1__:!1,__inline2__:!1},j=d&&d.json;j&&(E.quotes="double",E.wrap=!0),d=n(E,d),d.quotes!="single"&&d.quotes!="double"&&d.quotes!="backtick"&&(d.quotes="single");const Q=d.quotes=="double"?'"':d.quotes=="backtick"?"`":"'",T=d.compact,H=d.lowercaseHex;let X=d.indent.repeat(d.indentLevel),oe="";const Le=d.__inline1__,Z=d.__inline2__,I=T?"":`
`;let v,Y=!0;const ze=d.numbers=="binary",qe=d.numbers=="octal",Ue=d.numbers=="decimal",Je=d.numbers=="hexadecimal";if(j&&l&&L(l.toJSON)&&(l=l.toJSON()),!y(l)){if(F(l))return l.size==0?"new Map()":(T||(d.__inline1__=!0,d.__inline2__=!1),"new Map("+g(Array.from(l),d)+")");if(m(l))return l.size==0?"new Set()":"new Set("+g(Array.from(l),d)+")";if(u(l))return l.length==0?"Buffer.from([])":"Buffer.from("+g(Array.from(l),d)+")";if(c(l))return v=[],d.wrap=!0,Le&&(d.__inline1__=!1,d.__inline2__=!0),Z||w(),o(l,_=>{Y=!1,Z&&(d.__inline2__=!1),v.push((T||Z?"":X)+g(_,d))}),Y?"[]":Z?"["+v.join(", ")+"]":"["+I+v.join(","+I)+I+(T?"":oe)+"]";if(f(l)||x(l)){if(j)return JSON.stringify(Number(l));let _;if(Ue)_=String(l);else if(Je){let C=l.toString(16);H||(C=C.toUpperCase()),_="0x"+C}else ze?_="0b"+l.toString(2):qe&&(_="0o"+l.toString(8));return x(l)?_+"n":_}else return x(l)?j?JSON.stringify(Number(l)):l+"n":p(l)?(v=[],d.wrap=!0,w(),t(l,(_,C)=>{Y=!1,v.push((T?"":X)+g(_,d)+":"+(T?"":" ")+g(C,d))}),Y?"{}":"{"+I+v.join(","+I)+I+(T?"":oe)+"}"):j?JSON.stringify(l)||"null":String(l)}const Ke=d.escapeEverything?q:$;return v=l.replace(Ke,(_,C,pe,ee,We,Ge)=>{if(C){if(d.minimal)return C;const he=C.charCodeAt(0),me=C.charCodeAt(1);if(d.es6){const Ve=(he-55296)*1024+me-56320+65536;return"\\u{"+s(Ve,H)+"}"}return a(s(he,H))+a(s(me,H))}if(pe)return a(s(pe.charCodeAt(0),H));if(_=="\0"&&!j&&!z.test(Ge.charAt(We+1)))return"\\0";if(ee)return ee==Q||d.escapeEverything?"\\"+ee:ee;if(S.test(_))return O[_];if(d.minimal&&!V.test(_))return _;const ae=s(_.charCodeAt(0),H);return j||ae.length>2?a(ae):"\\x"+("00"+ae).slice(-2)}),Q=="`"&&(v=v.replace(/\$\{/g,"\\${")),d.isScriptContext&&(v=v.replace(/<\/(script|style)/gi,"<\\/$1").replace(/<!--/g,j?"\\u003C!--":"\\x3C!--")),d.wrap&&(v=Q+v+Q),v};return g.version="3.0.2",ie=g,ie}var It=Ht();const M=$t(It),Dt=`const __TSR_SSR__={matches:[],streamedValues:{},initMatch:a=>(__TSR_SSR__.matches.push(a),a.extracted?.forEach(l=>{if(l.type==="stream"){let r;l.value=new ReadableStream({start(e){r={enqueue:t=>{try{e.enqueue(t)}catch{}},close:()=>{try{e.close()}catch{}}}}}),l.value.controller=r}else{let r,e;l.value=new Promise((t,o)=>{e=o,r=t}),l.value.reject=e,l.value.resolve=r}}),!0),resolvePromise:({matchId:a,id:l,promiseState:r})=>{const e=__TSR_SSR__.matches.find(t=>t.id===a);if(e){const t=e.extracted?.[l];if(t&&t.type==="promise"&&t.value&&r.status==="success")return t.value.resolve(r.data),!0}return!1},injectChunk:({matchId:a,id:l,chunk:r})=>{const e=__TSR_SSR__.matches.find(t=>t.id===a);if(e){const t=e.extracted?.[l];if(t&&t.type==="stream"&&t.value?.controller)return t.value.controller.enqueue(new TextEncoder().encode(r.toString())),!0}return!1},closeStream:({matchId:a,id:l})=>{const r=__TSR_SSR__.matches.find(e=>e.id===a);if(r){const e=r.extracted?.[l];if(e&&e.type==="stream"&&e.value?.controller)return e.value.controller.close(),!0}return!1},cleanScripts:()=>{document.querySelectorAll(".tsr-once").forEach(a=>{a.remove()})}};window.__TSR_SSR__=__TSR_SSR__;
`;function Mt(e,r){e.ssr={manifest:r,serializer:b},e.serverSsr={injectedHtml:[],streamedKeys:new Set,injectHtml:t=>{const n=Promise.resolve().then(t);return e.serverSsr.injectedHtml.push(n),e.emit({type:"onInjectedHtml",promise:n}),n.then(()=>{})},injectScript:(t,n)=>e.serverSsr.injectHtml(async()=>`<script class='tsr-once'>${await t()}; if (typeof __TSR_SSR__ !== 'undefined') __TSR_SSR__.cleanScripts()<\/script>`),streamValue:(t,n)=>{e.serverSsr.streamedKeys.has(t),e.serverSsr.streamedKeys.add(t),e.serverSsr.injectScript(()=>`__TSR_SSR__.streamedValues['${t}'] = { value: ${M(e.ssr.serializer.stringify(n),{isScriptContext:!0,wrap:!0,json:!0})}}`)},onMatchSettled:Lt},e.serverSsr.injectScript(()=>Dt,{logScript:!1})}function Nt(e){var r,t;const n={manifest:e.ssr.manifest,dehydratedData:(t=(r=e.options).dehydrate)==null?void 0:t.call(r)};e.serverSsr.injectScript(()=>`__TSR_SSR__.dehydrated = ${M(e.ssr.serializer.stringify(n),{isScriptContext:!0,wrap:!0,json:!0})}`)}function Bt(e,r){const t=[];return{replaced:ue(e,(o,a)=>{if(o instanceof ReadableStream){const[s,i]=o.tee(),c={type:"stream",path:a,id:t.length,matchIndex:r.match.index,stream:i};return t.push(c),s}else if(o instanceof Promise){const s=Rt(o),i={type:"promise",path:a,id:t.length,matchIndex:r.match.index,promise:s};t.push(i)}return o}),extracted:t}}function Lt(e){const{router:r,match:t}=e;let n,o;if(t.loaderData!==void 0){const c=Bt(t.loaderData,{match:t});t.loaderData=c.replaced,n=c.extracted,o=n.reduce((u,p)=>de(u,["temp",...p.path],void 0),{temp:c.replaced}).temp}const a=`__TSR_SSR__.initMatch(${M({id:t.id,__beforeLoadContext:r.ssr.serializer.stringify(t.__beforeLoadContext),loaderData:r.ssr.serializer.stringify(o),error:r.ssr.serializer.stringify(t.error),extracted:n?.map(c=>Ct(c,["type","path"])),updatedAt:t.updatedAt,status:t.status},{isScriptContext:!0,wrap:!0,json:!0})})`;r.serverSsr.injectScript(()=>a),n&&n.forEach(c=>c.type==="promise"?s(c):i(c));function s(c){r.serverSsr.injectScript(async()=>(await c.promise,`__TSR_SSR__.resolvePromise(${M({matchId:t.id,id:c.id,promiseState:c.promise[k]},{isScriptContext:!0,wrap:!0,json:!0})})`))}function i(c){r.serverSsr.injectHtml(async()=>{try{const u=c.stream.getReader();let p=null;for(;!(p=await u.read()).done;)if(p.value){const y=`__TSR_SSR__.injectChunk(${M({matchId:t.id,id:c.id,chunk:p.value},{isScriptContext:!0,wrap:!0,json:!0})})`;r.serverSsr.injectScript(()=>y)}r.serverSsr.injectScript(()=>`__TSR_SSR__.closeStream(${M({matchId:t.id,id:c.id},{isScriptContext:!0,wrap:!0,json:!0})})`)}catch(u){console.error("stream read error",u)}return""})}}function de(e,r,t){if(r.length===0)return t;const[n,...o]=r;return Array.isArray(e)?e.map((a,s)=>s===Number(n)?de(a,o,t):a):A(e)?{...e,[n]:de(e[n],o,t)}:e}function ue(e,r,t=[]){if(Et(e))return e.map((o,a)=>ue(o,r,[...t,`${a}`]));if(A(e)){const o={};for(const a in e)o[a]=ue(e[a],r,[...t,a]);return o}const n=r(e,t);return n!==e?n:e}function zt({createRouter:e,getRouterManifest:r}){return t=>ct(async n=>{const o=lt(n),a=new URL(o.url),s=a.href.replace(a.origin,""),i=St({initialEntries:[s]}),c=e();Mt(c,await r?.()),c.update({history:i}),await c.load(),Nt(c);const u=qt({event:n,router:c});return await t({request:o,router:c,responseHeaders:u})})}function qt(e){let r=G(dt(e.event),e.event.___ssrRpcResponseHeaders,{"Content-Type":"text/html; charset=UTF-8"},...e.router.state.matches.map(n=>n.headers));const{redirect:t}=e.router.state;return t&&(r=G(r,t.headers,{Location:t.href})),r}var Ut=" daum[ /]| deusu/| yadirectfetcher|(?:^|[^g])news(?!sapphire)|(?<! (?:channel/|google/))google(?!(app|/google| pixel))|(?<! cu)bots?(?:\\b|_)|(?<!(?:lib))http|(?<![hg]m)score|@[a-z][\\w-]+\\.|\\(\\)|\\.com\\b|\\btime/|\\||^<|^[\\w \\.\\-\\(?:\\):%]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)|^[^ ]{50,}$|^\\d+\\b|^\\w*search\\b|^\\w+/[\\w\\(\\)]*$|^active|^ad muncher|^amaya|^avsdevicesdk/|^biglotron|^bot|^bw/|^clamav[ /]|^client/|^cobweb/|^custom|^ddg[_-]android|^discourse|^dispatch/\\d|^downcast/|^duckduckgo|^email|^facebook|^getright/|^gozilla/|^hobbit|^hotzonu|^hwcdn/|^igetter/|^jeode/|^jetty/|^jigsaw|^microsoft bits|^movabletype|^mozilla/5\\.0\\s[a-z\\.-]+$|^mozilla/\\d\\.\\d \\(compatible;?\\)$|^mozilla/\\d\\.\\d \\w*$|^navermailapp|^netsurf|^offline|^openai/|^owler|^php|^postman|^python|^rank|^read|^reed|^rest|^rss|^snapchat|^space bison|^svn|^swcd |^taringa|^thumbor/|^track|^w3c|^webbandit/|^webcopier|^wget|^whatsapp|^wordpress|^xenu link sleuth|^yahoo|^yandex|^zdm/\\d|^zoom marketplace/|^{{.*}}$|adscanner/|analyzer|archive|ask jeeves/teoma|audit|bit\\.ly/|bluecoat drtr|browsex|burpcollaborator|capture|catch|check\\b|checker|chrome-lighthouse|chromeframe|classifier|cloudflare|convertify|cookiehubscan|crawl|cypress/|dareboost|datanyze|dejaclick|detect|dmbrowser|download|evc-batch/|exaleadcloudview|feed|firephp|functionize|gomezagent|headless|httrack|hubspot marketing grader|hydra|ibisbrowser|images|infrawatch|insight|inspect|iplabel|ips-agent|java(?!;)|jsjcw_scanner|library|linkcheck|mail\\.ru/|manager|measure|neustar wpm|node|nutch|offbyone|optimize|pageburst|pagespeed|parser|perl|phantomjs|pingdom|powermarks|preview|proxy|ptst[ /]\\d|reputation|resolver|retriever|rexx;|rigor|rss\\b|scanner\\.|scrape|server|sogou|sparkler/|speedcurve|spider|splash|statuscake|supercleaner|synapse|synthetic|tools|torrent|trace|transcoder|url|validator|virtuoso|wappalyzer|webglance|webkit2png|whatcms/|zgrab",Jt=/bot|crawl|http|lighthouse|scan|search|spider/i,J;function Kt(){if(J instanceof RegExp)return J;try{J=new RegExp(Ut,"i")}catch{J=Jt}return J}function Re(e){return!!e&&Kt().test(e)}function Wt(e,r){return Pe(e,r)}function Gt(e,r){return ye.fromWeb(Pe(e,ye.toWeb(r)))}const Vt=/(<body)/,Qt=/(<\/body>)/,Xt=/(<\/html>)/,Zt=/(<head.*?>)/,Yt=/(<\/[a-zA-Z][\w:.-]*?>)/g,er=new TextDecoder;function tr(){let e;const r=new TextEncoder,n={stream:new pt({start(o){e=o}}),write:o=>{e.enqueue(r.encode(o))},end:o=>{o&&e.enqueue(r.encode(o)),e.close(),n.destroyed=!0},destroy:o=>{e.error(o)},destroyed:!1};return n}async function rr(e,r){var t,n,o;try{const a=e.getReader();let s;for(;!(s=await a.read()).done;)(t=r.onData)==null||t.call(r,s);(n=r.onEnd)==null||n.call(r)}catch(a){(o=r.onError)==null||o.call(r,a)}}function Pe(e,r){const t=tr();let n=!0,o="",a="",s=!1,i=!1,c="",u="";function p(){const m=o;return o="",m}function y(m){return m instanceof Uint8Array?er.decode(m):String(m)}const f=Xe();let x=0;e.serverSsr.injectedHtml.forEach(m=>{F(m)});const L=e.subscribe("onInjectedHtml",m=>{F(m.promise)});function F(m){x++,m.then(O=>{s?t.write(O):o+=O}).catch(f.reject).finally(()=>{x--,!n&&x===0&&(L(),f.resolve())})}return f.then(()=>{const m=u+p()+a;t.end(m)}).catch(m=>{console.error("Error reading routerStream:",m),t.destroy(m)}),rr(r,{onData:m=>{const O=y(m.value);let S=c+O;const z=S.match(Qt),V=S.match(Xt);if(s||S.match(Vt)&&(s=!0),!i){const g=S.match(Zt);if(g){i=!0;const l=g.index,d=g[0],w=S.slice(l+d.length);t.write(S.slice(0,l)+d+p()),S=w}}if(!s){t.write(S),c="";return}if(z&&V&&z.index<V.index){const g=z.index;a=S.slice(g),t.write(S.slice(0,g)+p()),c="";return}let q,$=0;for(;(q=Yt.exec(S))!==null;)$=q.index+q[0].length;if($>0){const g=S.slice(0,$)+p()+u;t.write(g),c=S.slice($)}else c=S,u+=p()},onEnd:()=>{n=!1,x===0&&f.resolve()},onError:m=>{console.error("Error reading appStream:",m),t.destroy(m)}}),t.stream}const nr=async({request:e,router:r,responseHeaders:t})=>{if(typeof te.renderToReadableStream=="function"){const n=await te.renderToReadableStream(h(we,{router:r}),{signal:e.signal});Re(e.headers.get("User-Agent"))&&await n.allReady;const o=Wt(r,n);return new Response(o,{status:r.state.statusCode,headers:t})}if(typeof te.renderToPipeableStream=="function"){const n=new ft;try{const a=te.renderToPipeableStream(h(we,{router:r}),{...Re(e.headers.get("User-Agent"))?{onAllReady(){a.pipe(n)}}:{onShellReady(){a.pipe(n)}},onError:(s,i)=>{console.error("Error in renderToPipeableStream:",s,i)}})}catch(a){console.error("Error in renderToPipeableStream:",a)}const o=Gt(r,n);return new Response(o,{status:r.state.statusCode,headers:t})}throw new Error("No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.")};function sr(){return Oe()}const Fe=Symbol("$HTTPEvent");function or(e){return typeof e=="object"&&(e instanceof ce||e?.[Fe]instanceof ce||e?.__is_event__===!0)}function ar(e){return function(...r){var t;const n=r[0];if(or(n))r[0]=n instanceof ce||n.__is_event__?n:n[Fe];else{if(!((t=globalThis.app.config.server.experimental)!=null&&t.asyncContext))throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");r.unshift(sr())}return e(...r)}}const ir=ar(ut);function cr(){var e;return gt("nitro-app",{asyncContext:!!((e=globalThis.app.config.server.experimental)!=null&&e.asyncContext),AsyncLocalStorage:it})}function Oe(){const e=cr().use().event;if(!e)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");return e}const lr=()=>({routes:{__root__:{filePath:"__root.tsx",children:["/","/demo/form","/demo/store","/demo/tanstack-query","/demo/start/api-request","/demo/start/server-funcs"],preloads:["/_build/assets/client-DK5L6acP.js","/_build/assets/client-B2X-lc4r.js"]},"/":{filePath:"index.tsx"},"/demo/form":{filePath:"demo.form.tsx"},"/demo/store":{filePath:"demo.store.tsx"},"/demo/tanstack-query":{filePath:"demo.tanstack-query.tsx"},"/demo/start/api-request":{filePath:"demo.start.api-request.tsx"},"/demo/start/server-funcs":{filePath:"demo.start.server-funcs.tsx"}}});function dr(e){return globalThis.MANIFEST[e]}function ur(){const e=lr(),r=e.routes.__root__=e.routes.__root__||{};r.assets=r.assets||[];let t="";const n=dr("client"),o=n.inputs[n.handler]?.output.path;return o||fe(o),r.assets.push({tag:"script",attrs:{type:"module",suppressHydrationWarning:!0,async:!0},children:`${t}import("${o}")`}),e}function fr(){const e=ur();return{...e,routes:Object.fromEntries(Object.entries(e.routes).map(([r,t])=>{const{preloads:n,assets:o}=t;return[r,{preloads:n,assets:o}]}))}}function pr(){return W("header",{className:"p-2 flex gap-2 bg-white text-black justify-between",children:[W("nav",{className:"flex flex-row",children:[h("div",{className:"px-2 font-bold",children:h(D,{to:"/",children:"Home"})}),h("div",{className:"px-2 font-bold",children:h(D,{to:"/demo/start/server-funcs",children:"Start - Server Functions"})}),h("div",{className:"px-2 font-bold",children:h(D,{to:"/demo/start/api-request",children:"Start - API Request"})}),h("div",{className:"px-2 font-bold",children:h(D,{to:"/demo/store",children:"Store"})}),h("div",{className:"px-2 font-bold",children:h(D,{to:"/demo/tanstack-query",children:"TanStack Query"})}),h("div",{className:"px-2 font-bold",children:h(D,{to:"/demo/form",children:"Form"})})]}),h("div",{})]})}function hr(){return h(st,{buttonPosition:"bottom-right"})}const mr=new ot;function yr({children:e}){return h(at,{client:mr,children:e})}const gr="/_build/assets/styles-4k2pO40L.css",P=Ze({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"TanStack Start Starter"}],links:[{rel:"stylesheet",href:gr}]}),component:()=>h(_r,{children:W(yr,{children:[h(pr,{}),h(Ye,{}),h(nt,{}),h(hr,{})]})})});function _r({children:e}){return W("html",{children:[h("head",{children:h(et,{})}),W("body",{children:[e,h(tt,{})]})]})}const Sr=()=>import("./index-C6fLTS-W.js"),$e=N("/")({component:B(Sr,"component",()=>$e.ssr)}),wr=()=>import("./demo.tanstack-query-CzSbnXE3.js"),He=N("/demo/tanstack-query")({component:B(wr,"component",()=>He.ssr)}),vr=()=>import("./demo.store-BEECRFmg.js"),Ie=N("/demo/store")({component:B(vr,"component",()=>Ie.ssr)}),br=()=>import("./demo.form-BMgc3APc.js"),De=N("/demo/form")({component:B(br,"component",()=>De.ssr)});async function xr(e,r,t){var n;const o=r[0];if(A(o)&&o.method){const i=o,c=i.data instanceof FormData?"formData":"payload",u=new Headers({...c==="payload"?{"content-type":"application/json",accept:"application/json"}:{},...i.headers instanceof Headers?Object.fromEntries(i.headers.entries()):i.headers});if(i.method==="GET"){const f=jt({payload:b.stringify({data:i.data,context:i.context})});f&&(e.includes("?")?e+=`&${f}`:e+=`?${f}`)}e.includes("?")?e+="&createServerFn":e+="?createServerFn";const p=await t(e,{method:i.method,headers:u,signal:i.signal,...Rr(i)}),y=await Ce(p);if((n=y.headers.get("content-type"))!=null&&n.includes("application/json")){const f=b.decode(await y.json());if(Ee(f)||je(f)||f instanceof Error)throw f;return f}return y}const a=await Ce(await t(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)})),s=a.headers.get("content-type");return s&&s.includes("application/json")?b.decode(await a.json()):a.text()}function Rr(e){return e.method==="POST"?e.data instanceof FormData?(e.data.set("__TSR_CONTEXT",b.stringify(e.context)),{body:e.data}):{body:b.stringify({data:e.data??null,context:e.context})}:{}}async function Ce(e){if(!e.ok){const r=e.headers.get("content-type");throw r&&r.includes("application/json")?b.decode(await e.json()):new Error(await e.text())}return e}function Cr(e){return e.replace(/^\/|\/$/g,"")}const Er=(e,r)=>{const t=`/${Cr(r)}/${e}`;return Object.assign((...o)=>xr(t,o,async(a,s)=>{s.headers=G(ir(),s.headers);const i=await $fetch.native(a,s),c=Oe(),u=G(i.headers,c.___ssrRpcResponseHeaders);return c.___ssrRpcResponseHeaders=u,i}),{url:t,functionId:e})},jr=()=>import("./demo.start.server-funcs-C7WTZfw4.js"),Tr=Er("src_routes_demo_start_server-funcs_tsx--getCount_createServerFn_handler","/_server"),kr=ne({method:"GET"}).handler(Tr),Me=N("/demo/start/server-funcs")({component:B(jr,"component",()=>Me.ssr),loader:async()=>await kr()}),Ar=()=>import("./demo.start.api-request-C6io-ThA.js"),Ne=N("/demo/start/api-request")({component:B(Ar,"component",()=>Ne.ssr)}),Pr=$e.update({id:"/",path:"/",getParentRoute:()=>P}),Fr=He.update({id:"/demo/tanstack-query",path:"/demo/tanstack-query",getParentRoute:()=>P}),Or=Ie.update({id:"/demo/store",path:"/demo/store",getParentRoute:()=>P}),$r=De.update({id:"/demo/form",path:"/demo/form",getParentRoute:()=>P}),Hr=Me.update({id:"/demo/start/server-funcs",path:"/demo/start/server-funcs",getParentRoute:()=>P}),Ir=Ne.update({id:"/demo/start/api-request",path:"/demo/start/api-request",getParentRoute:()=>P}),Dr={IndexRoute:Pr,DemoFormRoute:$r,DemoStoreRoute:Or,DemoTanstackQueryRoute:Fr,DemoStartApiRequestRoute:Ir,DemoStartServerFuncsRoute:Hr},Mr=P._addFileChildren(Dr)._addFileTypes(),Be=()=>rt({routeTree:Mr,scrollRestoration:!0});Be();const Qr=zt({createRouter:Be,getRouterManifest:fr})(nr);export{Me as R,Er as a,ne as c,Qr as h};
