import{l as E,h as it,D as W,g as P,j as A,k as J}from"./client-B2X-lc4r.js";function C(o,r){return typeof o=="function"?o(r):o}function Y(o,r){return Q(r).reduce((t,e)=>{if(t===null)return null;if(typeof t<"u")return t[e]},o)}function L(o,r,i){const t=Q(r);function e(a){if(!t.length)return C(i,a);const s=t.shift();if(typeof s=="string"||typeof s=="number"&&!Array.isArray(a))return typeof a=="object"?(a===null&&(a={}),{...a,[s]:e(a[s])}):{[s]:e()};if(Array.isArray(a)&&typeof s=="number"){const u=a.slice(0,s);return[...u.length?u:new Array(s),e(a[s]),...a.slice(s+1)]}return[...new Array(s),e()]}return e(o)}function at(o,r){const i=Q(r);function t(e){if(!e)return;if(i.length===1){const s=i[0];if(Array.isArray(e)&&typeof s=="number")return e.filter((h,l)=>l!==s);const{[s]:u,...f}=e;return f}const a=i.shift();if(typeof a=="string"&&typeof e=="object")return{...e,[a]:t(e[a])};if(typeof a=="number"&&Array.isArray(e)){if(a>=e.length)return e;const s=e.slice(0,a);return[...s.length?s:new Array(a),t(e[a]),...e.slice(a+1)]}throw new Error("It seems we have created an infinite loop in deleteBy. ")}return t(o)}const st=/^(\d*)$/gm,rt=/\.(\d*)\./gm,nt=/^(\d*)\./gm,ot=/\.(\d*$)/gm,lt=/\.{2,}/gm,R="__int__",_=`${R}$1`;function Q(o){if(Array.isArray(o))return[...o];if(typeof o!="string")throw new Error("Path must be a string.");return o.replaceAll("[",".").replaceAll("]","").replace(st,_).replace(rt,`.${_}.`).replace(nt,`${_}.`).replace(ot,`.${_}`).replace(lt,".").split(".").map(r=>r.indexOf(R)===0?parseInt(r.substring(R.length),10):r)}function ut(o){return!(Array.isArray(o)&&o.length===0)}function H(o,r){const{asyncDebounceMs:i}=r,{onChangeAsync:t,onBlurAsync:e,onSubmitAsync:a,onBlurAsyncDebounceMs:s,onChangeAsyncDebounceMs:u}=r.validators||{},f=i??0,h={cause:"change",validate:t,debounceMs:u??f},l={cause:"blur",validate:e,debounceMs:s??f},d={cause:"submit",validate:a,debounceMs:0},n=c=>({...c,debounceMs:0});switch(o){case"submit":return[n(h),n(l),d];case"blur":return[l];case"change":return[h];case"server":default:return[]}}function q(o,r){const{onChange:i,onBlur:t,onSubmit:e,onMount:a}=r.validators||{},s={cause:"change",validate:i},u={cause:"blur",validate:t},f={cause:"submit",validate:e},h={cause:"mount",validate:a},l={cause:"server",validate:()=>{}};switch(o){case"mount":return[h];case"submit":return[s,u,f,l];case"server":return[l];case"blur":return[u,l];case"change":default:return[s,l]}}function U(o,r){if(Object.is(o,r))return!0;if(typeof o!="object"||o===null||typeof r!="object"||r===null)return!1;if(o instanceof Map&&r instanceof Map){if(o.size!==r.size)return!1;for(const[t,e]of o)if(!r.has(t)||!Object.is(e,r.get(t)))return!1;return!0}if(o instanceof Set&&r instanceof Set){if(o.size!==r.size)return!1;for(const t of o)if(!r.has(t))return!1;return!0}const i=Object.keys(o);if(i.length!==Object.keys(r).length)return!1;for(let t=0;t<i.length;t++)if(!Object.prototype.hasOwnProperty.call(r,i[t])||!Object.is(o[i[t]],r[i[t]]))return!1;return!0}function dt(o,r){const i=new Map;for(const e of o){const a=[...e.path??[]].map(s=>{const u=typeof s=="object"?s.key:s;return typeof u=="number"?`[${u}]`:u}).join(".").replace(/\.\[/g,"[");i.set(a,(i.get(a)??[]).concat(e))}const t={};return i.forEach((e,a)=>{t[a]=r(e)}),t}function ct(o){return r=>({form:o(r),fields:dt(r,o)})}const Z=(o={})=>()=>{const r=o.transformErrors??(t=>t.map(e=>e.message).join(", ")),i=t=>t==="form"?ct(r):r;return{validate({value:t,validationSource:e},a){const s=a["~standard"].validate(t);if(s instanceof Promise)throw new Error("async function passed to sync validator");return s.issues?i(e)(s.issues):void 0},async validateAsync({value:t,validationSource:e},a){const s=await a["~standard"].validate(t);return s.issues?i(e)(s.issues):void 0}}},tt=o=>!!o&&"~standard"in o;function $(o){function r(d,n,c,m){const M=t(d,n,c,m);({insert:()=>u(M,d,n),remove:()=>f(M),swap:()=>m!==void 0&&l(M,d,n,m),move:()=>m!==void 0&&h(M,d,n,m)})[c]()}function i(d,n){return`${d}[${n}]`}function t(d,n,c,m){const M=[i(d,n)];if(c==="swap")M.push(i(d,m));else if(c==="move"){const[v,g]=[Math.min(n,m),Math.max(n,m)];for(let p=v;p<=g;p++)M.push(i(d,p))}else{const v=o.getFieldValue(d),g=Array.isArray(v)?v.length:0;for(let p=n+1;p<g;p++)M.push(i(d,p))}return Object.keys(o.fieldInfo).filter(v=>M.some(g=>v.startsWith(g)))}function e(d,n){return d.replace(/\[(\d+)\]/,(c,m)=>{const M=parseInt(m,10);return`[${n==="up"?M+1:Math.max(0,M-1)}]`})}function a(d,n){(n==="up"?d:[...d].reverse()).forEach(m=>{const M=e(m.toString(),n),v=o.getFieldMeta(M);v&&o.setFieldMeta(m,v)})}const s=()=>({isValidating:!1,isTouched:!1,isBlurred:!1,isDirty:!1,isPristine:!0,errors:[],errorMap:{}}),u=(d,n,c)=>{a(d,"down"),d.forEach(m=>{m.toString().startsWith(i(n,c))&&o.setFieldMeta(m,s())})},f=d=>{a(d,"up")},h=(d,n,c,m)=>{const M=new Map(Object.keys(o.fieldInfo).filter(v=>v.startsWith(i(n,c))).map(v=>[v,o.getFieldMeta(v)]));a(d,c<m?"up":"down"),Object.keys(o.fieldInfo).filter(v=>v.startsWith(i(n,m))).forEach(v=>{const g=v.replace(i(n,m),i(n,c)),p=M.get(g);p&&o.setFieldMeta(v,p)})},l=(d,n,c,m)=>{d.forEach(M=>{if(!M.toString().startsWith(i(n,c)))return;const v=M.toString().replace(i(n,c),i(n,m)),[g,p]=[o.getFieldMeta(M),o.getFieldMeta(v)];g&&o.setFieldMeta(v,g),p&&o.setFieldMeta(M,p)})};return{handleArrayFieldMetaShift:r}}function x(o){return{values:o.values??{},errorMap:o.errorMap??{},fieldMetaBase:o.fieldMetaBase??{},isSubmitted:o.isSubmitted??!1,isSubmitting:o.isSubmitting??!1,isValidating:o.isValidating??!1,submissionAttempts:o.submissionAttempts??0,validationMetaMap:o.validationMetaMap??{onChange:void 0,onBlur:void 0,onSubmit:void 0,onMount:void 0,onServer:void 0}}}const ht=o=>typeof o=="object";class ft{constructor(r){var i;this.options={},this.fieldInfo={},this.prevTransformArray=[],this.mount=()=>{const t=this.fieldMetaDerived.mount(),e=this.store.mount(),a=()=>{t(),e()},{onMount:s}=this.options.validators||{};return s&&this.validateSync("mount"),a},this.update=t=>{if(!t)return;const e=this.options;this.options=t;const a=t.defaultValues&&!U(t.defaultValues,e.defaultValues)&&!this.state.isTouched,s=!U(t.defaultState,e.defaultState)&&!this.state.isTouched;!a&&!s||E(()=>{this.baseStore.setState(()=>x(Object.assign({},this.state,s?t.defaultState:{},a?{values:t.defaultValues}:{})))})},this.reset=(t,e)=>{const{fieldMeta:a}=this.state,s=this.resetFieldMeta(a);t&&!e?.keepDefaultValues&&(this.options={...this.options,defaultValues:t}),this.baseStore.setState(()=>{var u;return x({...this.options.defaultState,values:t??this.options.defaultValues??((u=this.options.defaultState)==null?void 0:u.values),fieldMetaBase:s})})},this.validateAllFields=async t=>{const e=[];return E(()=>{Object.values(this.fieldInfo).forEach(s=>{if(!s.instance)return;const u=s.instance;e.push(Promise.resolve().then(()=>u.validate(t,{skipFormValidation:!0}))),s.instance.state.meta.isTouched||s.instance.setMeta(f=>({...f,isTouched:!0}))})}),(await Promise.all(e)).flat()},this.validateArrayFieldsStartingFrom=async(t,e,a)=>{const s=this.getFieldValue(t),u=Array.isArray(s)?Math.max(s.length-1,0):null,f=[`${t}[${e}]`];for(let n=e+1;n<=(u??0);n++)f.push(`${t}[${n}]`);const h=Object.keys(this.fieldInfo).filter(n=>f.some(c=>n.startsWith(c))),l=[];return E(()=>{h.forEach(n=>{l.push(Promise.resolve().then(()=>this.validateField(n,a)))})}),(await Promise.all(l)).flat()},this.validateField=(t,e)=>{var a;const s=(a=this.fieldInfo[t])==null?void 0:a.instance;return s?(s.state.meta.isTouched||s.setMeta(u=>({...u,isTouched:!0})),s.validate(e)):[]},this.validateSync=t=>{const e=q(t,this.options);let a=!1;const s={};E(()=>{for(const f of e){if(!f.validate)continue;const h=this.runValidator({validate:f.validate,value:{value:this.state.values,formApi:this,validationSource:"form"},type:"validate"}),{formError:l,fieldErrors:d}=G(h),n=D(f.cause);if(d)for(const[c,m]of Object.entries(d)){const v={...s[c]||{},[n]:m};s[c]=v;const g=this.getFieldMeta(c);g&&g.errorMap[n]!==m&&this.setFieldMeta(c,p=>({...p,errorMap:{...p.errorMap,[n]:m}}))}this.state.errorMap[n]!==l&&this.baseStore.setState(c=>({...c,errorMap:{...c.errorMap,[n]:l}})),(l||d)&&(a=!0)}});const u=D("submit");return this.state.errorMap[u]&&t!=="submit"&&!a&&this.baseStore.setState(f=>({...f,errorMap:{...f.errorMap,[u]:void 0}})),{hasErrored:a,fieldsErrorMap:s}},this.validateAsync=async t=>{const e=H(t,this.options);this.state.isFormValidating||this.baseStore.setState(h=>({...h,isFormValidating:!0}));const a=[];let s;for(const h of e){if(!h.validate)continue;const l=D(h.cause),d=this.state.validationMetaMap[l];d?.lastAbortController.abort();const n=new AbortController;this.state.validationMetaMap[l]={lastAbortController:n},a.push(new Promise(async c=>{let m;try{m=await new Promise((p,F)=>{setTimeout(async()=>{if(n.signal.aborted)return p(void 0);try{p(await this.runValidator({validate:h.validate,value:{value:this.state.values,formApi:this,validationSource:"form",signal:n.signal},type:"validateAsync"}))}catch(V){F(V)}},h.debounceMs)})}catch(p){m=p}const{formError:M,fieldErrors:v}=G(m);v&&(s=s?{...s,...v}:v);const g=D(h.cause);if(s)for(const[p,F]of Object.entries(s)){const V=this.getFieldMeta(p);V&&V.errorMap[g]!==F&&this.setFieldMeta(p,T=>({...T,errorMap:{...T.errorMap,[g]:F}}))}this.baseStore.setState(p=>({...p,errorMap:{...p.errorMap,[g]:M}})),c(s?{fieldErrors:s,errorMapKey:g}:void 0)}))}let u=[];const f={};if(a.length){u=await Promise.all(a);for(const h of u)if(h?.fieldErrors){const{errorMapKey:l}=h;for(const[d,n]of Object.entries(h.fieldErrors)){const m={...f[d]||{},[l]:n};f[d]=m}}}return this.baseStore.setState(h=>({...h,isFormValidating:!1})),f},this.validate=t=>{const{hasErrored:e,fieldsErrorMap:a}=this.validateSync(t);return e&&!this.options.asyncAlways?a:this.validateAsync(t)},this.handleSubmit=async()=>{var t,e,a,s,u,f;if(this.baseStore.setState(l=>({...l,isSubmitted:!1,submissionAttempts:l.submissionAttempts+1})),!this.state.canSubmit)return;this.baseStore.setState(l=>({...l,isSubmitting:!0}));const h=()=>{this.baseStore.setState(l=>({...l,isSubmitting:!1}))};if(await this.validateAllFields("submit"),!this.state.isFieldsValid){h(),(e=(t=this.options).onSubmitInvalid)==null||e.call(t,{value:this.state.values,formApi:this});return}if(await this.validate("submit"),!this.state.isValid){h(),(s=(a=this.options).onSubmitInvalid)==null||s.call(a,{value:this.state.values,formApi:this});return}E(()=>{Object.values(this.fieldInfo).forEach(l=>{var d,n,c;(c=(n=(d=l.instance)==null?void 0:d.options.listeners)==null?void 0:n.onSubmit)==null||c.call(n,{value:l.instance.state.value,fieldApi:l.instance})})});try{await((f=(u=this.options).onSubmit)==null?void 0:f.call(u,{value:this.state.values,formApi:this})),E(()=>{this.baseStore.setState(l=>({...l,isSubmitted:!0})),h()})}catch(l){throw h(),l}},this.getFieldValue=t=>Y(this.state.values,t),this.getFieldMeta=t=>this.state.fieldMeta[t],this.getFieldInfo=t=>{var e;return(e=this.fieldInfo)[t]||(e[t]={instance:null,validationMetaMap:{onChange:void 0,onBlur:void 0,onSubmit:void 0,onMount:void 0,onServer:void 0}})},this.setFieldMeta=(t,e)=>{this.baseStore.setState(a=>({...a,fieldMetaBase:{...a.fieldMetaBase,[t]:C(e,a.fieldMetaBase[t])}}))},this.resetFieldMeta=t=>Object.keys(t).reduce((e,a)=>{const s=a;return e[s]={isValidating:!1,isTouched:!1,isBlurred:!1,isDirty:!1,isPristine:!0,errors:[],errorMap:{}},e},{}),this.setFieldValue=(t,e,a)=>{const s=a?.dontUpdateMeta??!1;E(()=>{s||this.setFieldMeta(t,u=>({...u,isTouched:!0,isDirty:!0,errorMap:{...u?.errorMap,onMount:void 0}})),this.baseStore.setState(u=>({...u,values:L(u.values,t,e)}))})},this.deleteField=t=>{this.baseStore.setState(e=>{const a={...e};return a.values=at(a.values,t),delete a.fieldMetaBase[t],a}),delete this.fieldInfo[t]},this.pushFieldValue=(t,e,a)=>{this.setFieldValue(t,s=>[...Array.isArray(s)?s:[],e],a),this.validateField(t,"change")},this.insertFieldValue=async(t,e,a,s)=>{this.setFieldValue(t,u=>[...u.slice(0,e),a,...u.slice(e)],s),await this.validateField(t,"change"),$(this).handleArrayFieldMetaShift(t,e,"insert"),await this.validateArrayFieldsStartingFrom(t,e,"change")},this.replaceFieldValue=async(t,e,a,s)=>{this.setFieldValue(t,u=>u.map((f,h)=>h===e?a:f),s),await this.validateField(t,"change"),await this.validateArrayFieldsStartingFrom(t,e,"change")},this.removeFieldValue=async(t,e,a)=>{const s=this.getFieldValue(t),u=Array.isArray(s)?Math.max(s.length-1,0):null;if(this.setFieldValue(t,f=>f.filter((h,l)=>l!==e),a),$(this).handleArrayFieldMetaShift(t,e,"remove"),u!==null){const f=`${t}[${u}]`;Object.keys(this.fieldInfo).filter(l=>l.startsWith(f)).forEach(l=>this.deleteField(l))}await this.validateField(t,"change"),await this.validateArrayFieldsStartingFrom(t,e,"change")},this.swapFieldValues=(t,e,a,s)=>{this.setFieldValue(t,u=>{const f=u[e],h=u[a];return L(L(u,`${e}`,h),`${a}`,f)},s),$(this).handleArrayFieldMetaShift(t,e,"swap",a),this.validateField(t,"change"),this.validateField(`${t}[${e}]`,"change"),this.validateField(`${t}[${a}]`,"change")},this.moveFieldValues=(t,e,a,s)=>{this.setFieldValue(t,u=>(u.splice(a,0,u.splice(e,1)[0]),u),s),$(this).handleArrayFieldMetaShift(t,e,"move",a),this.validateField(t,"change"),this.validateField(`${t}[${e}]`,"change"),this.validateField(`${t}[${a}]`,"change")},this.baseStore=new it(x({...r?.defaultState,values:r?.defaultValues??((i=r?.defaultState)==null?void 0:i.values)})),this.fieldMetaDerived=new W({deps:[this.baseStore],fn:({prevDepVals:t,currDepVals:e,prevVal:a})=>{const s=a,u=t?.[0],f=e[0];let h=0;const l={};for(const d of Object.keys(f.fieldMetaBase)){const n=f.fieldMetaBase[d],c=u?.fieldMetaBase[d],m=s?.[d];let M=m?.errors;(!c||n.errorMap!==c.errorMap)&&(M=Object.values(n.errorMap??{}).filter(g=>g!==void 0));const v=!n.isDirty;if(m&&m.isPristine===v&&m.errors===M&&n===c){l[d]=m,h++;continue}l[d]={...n,errors:M,isPristine:v}}return s&&h===Object.keys(f.fieldMetaBase).length?s:l}}),this.store=new W({deps:[this.baseStore,this.fieldMetaDerived],fn:({prevDepVals:t,currDepVals:e,prevVal:a})=>{var s,u,f,h;const l=a,d=t?.[0],n=e[0],c=Object.values(n.fieldMetaBase),m=c.some(y=>y?.isValidating),M=!c.some(y=>y?.errorMap&&ut(Object.values(y.errorMap).filter(Boolean))),v=c.some(y=>y?.isTouched),g=c.some(y=>y?.isBlurred),p=v&&((s=n?.errorMap)==null?void 0:s.onMount),F=c.some(y=>y?.isDirty),V=!F,T=!!((u=n.errorMap)!=null&&u.onMount||c.some(y=>{var S;return(S=y?.errorMap)==null?void 0:S.onMount})),N=!!m;let w=l?.errors??[];(!d||n.errorMap!==d.errorMap)&&(w=Object.values(n.errorMap).reduce((y,S)=>S===void 0?y:typeof S=="string"?(y.push(S),y):(S&&ht(S)&&y.push(S.form),y),[]));const b=w.length===0,k=M&&b,O=n.submissionAttempts===0&&!v&&!T||!N&&!n.isSubmitting&&k;let B=n.errorMap;if(p&&(w=w.filter(y=>y!==n.errorMap.onMount),B=Object.assign(B,{onMount:void 0})),l&&d&&l.errorMap===B&&l.fieldMeta===this.fieldMetaDerived.state&&l.errors===w&&l.isFieldsValidating===m&&l.isFieldsValid===M&&l.isFormValid===b&&l.isValid===k&&l.canSubmit===O&&l.isTouched===v&&l.isBlurred===g&&l.isPristine===V&&l.isDirty===F&&U(d,n))return l;let z={...n,errorMap:B,fieldMeta:this.fieldMetaDerived.state,errors:w,isFieldsValidating:m,isFieldsValid:M,isFormValid:b,isValid:k,canSubmit:O,isTouched:v,isBlurred:g,isPristine:V,isDirty:F};const K=((f=this.options.transform)==null?void 0:f.deps)??[];if(K.length!==this.prevTransformArray.length||K.some((y,S)=>y!==this.prevTransformArray[S])){const y=Object.assign({},this,{state:z});(h=this.options.transform)==null||h.fn(y),z=y.state,this.prevTransformArray=K}return z}}),this.update(r||{})}get state(){return this.store.state}runValidator(r){const i=this.options.validatorAdapter;return i&&(typeof r.validate!="function"||"~standard"in r.validate)?i()[r.type](r.value,r.validate):tt(r.validate)?Z()()[r.type](r.value,r.validate):r.validate(r.value)}setErrorMap(r){this.baseStore.setState(i=>({...i,errorMap:{...i.errorMap,...r}}))}}function G(o){if(o){if(typeof o=="object"){const r=G(o.form).formError,i=o.fields;return{formError:r,fieldErrors:i}}return typeof o!="string"?{formError:"Invalid Form Values"}:{formError:o}}return{formError:void 0}}function D(o){switch(o){case"submit":return"onSubmit";case"blur":return"onBlur";case"mount":return"onMount";case"server":return"onServer";case"change":default:return"onChange"}}class mt{constructor(r){this.options={},this.mount=()=>{var i,t;const e=this.store.mount(),a=this.getInfo();a.instance=this,this.update(this.options);const{onMount:s}=this.options.validators||{};if(s){const u=this.runValidator({validate:s,value:{value:this.state.value,fieldApi:this,validationSource:"field"},type:"validate"});u&&this.setMeta(f=>({...f,errorMap:{...f?.errorMap,onMount:u}}))}return(t=(i=this.options.listeners)==null?void 0:i.onMount)==null||t.call(i,{value:this.state.value,fieldApi:this}),e},this.update=i=>{if(this.state.value===void 0){const t=Y(i.form.options.defaultValues,i.name);i.defaultValue!==void 0?this.setValue(i.defaultValue,{dontUpdateMeta:!0}):t!==void 0&&this.setValue(t,{dontUpdateMeta:!0})}this.form.getFieldMeta(this.name)===void 0&&this.setMeta(this.state.meta),this.options=i,this.name=i.name},this.getValue=()=>this.form.getFieldValue(this.name),this.setValue=(i,t)=>{var e,a;this.form.setFieldValue(this.name,i,t),(a=(e=this.options.listeners)==null?void 0:e.onChange)==null||a.call(e,{value:this.state.value,fieldApi:this}),this.validate("change")},this.getMeta=()=>this.store.state.meta,this.setMeta=i=>this.form.setFieldMeta(this.name,i),this.getInfo=()=>this.form.getFieldInfo(this.name),this.pushValue=(i,t)=>this.form.pushFieldValue(this.name,i,t),this.insertValue=(i,t,e)=>this.form.insertFieldValue(this.name,i,t,e),this.replaceValue=(i,t,e)=>this.form.replaceFieldValue(this.name,i,t,e),this.removeValue=(i,t)=>this.form.removeFieldValue(this.name,i,t),this.swapValues=(i,t,e)=>this.form.swapFieldValues(this.name,i,t,e),this.moveValue=(i,t,e)=>this.form.moveFieldValues(this.name,i,t,e),this.getLinkedFields=i=>{const t=Object.values(this.form.fieldInfo),e=[];for(const a of t){if(!a.instance)continue;const{onChangeListenTo:s,onBlurListenTo:u}=a.instance.options.validators||{};i==="change"&&s?.includes(this.name)&&e.push(a.instance),i==="blur"&&u?.includes(this.name)&&e.push(a.instance)}return e},this.validateSync=(i,t)=>{const e=q(i,this.options),s=this.getLinkedFields(i).reduce((h,l)=>{const d=q(i,l.options);return d.forEach(n=>{n.field=l}),h.concat(d)},[]);let u=!1;E(()=>{const h=(l,d)=>{const n=I(d.cause),c=d.validate?X(l.runValidator({validate:d.validate,value:{value:l.store.state.value,validationSource:"field",fieldApi:l},type:"validate"})):t[n];l.state.meta.errorMap[n]!==c&&l.setMeta(m=>({...m,errorMap:{...m.errorMap,[I(d.cause)]:c||t[n]}})),(c||t[n])&&(u=!0)};for(const l of e)h(this,l);for(const l of s)l.validate&&h(l.field,l)});const f=I("submit");return this.state.meta.errorMap[f]&&i!=="submit"&&!u&&this.setMeta(h=>({...h,errorMap:{...h.errorMap,[f]:void 0}})),{hasErrored:u}},this.validateAsync=async(i,t)=>{const e=H(i,this.options),a=await t,s=this.getLinkedFields(i),u=s.reduce((n,c)=>{const m=H(i,c.options);return m.forEach(M=>{M.field=c}),n.concat(m)},[]);this.state.meta.isValidating||this.setMeta(n=>({...n,isValidating:!0}));for(const n of s)n.setMeta(c=>({...c,isValidating:!0}));const f=[],h=[],l=(n,c,m)=>{const M=I(c.cause),v=n.getInfo().validationMetaMap[M];v?.lastAbortController.abort();const g=new AbortController;this.getInfo().validationMetaMap[M]={lastAbortController:g},m.push(new Promise(async p=>{var F;let V;try{V=await new Promise((b,k)=>{this.timeoutIds[c.cause]&&clearTimeout(this.timeoutIds[c.cause]),this.timeoutIds[c.cause]=setTimeout(async()=>{if(g.signal.aborted)return b(void 0);try{b(await this.runValidator({validate:c.validate,value:{value:n.store.state.value,fieldApi:n,signal:g.signal,validationSource:"field"},type:"validateAsync"}))}catch(O){k(O)}},c.debounceMs)})}catch(b){V=b}if(g.signal.aborted)return p(void 0);const T=X(V),N=(F=a[this.name])==null?void 0:F[M],w=T||N;n.setMeta(b=>({...b,errorMap:{...b?.errorMap,[M]:w}})),p(w)}))};for(const n of e)n.validate&&l(this,n,f);for(const n of u)n.validate&&l(n.field,n,h);let d=[];(f.length||h.length)&&(d=await Promise.all(f),await Promise.all(h)),this.setMeta(n=>({...n,isValidating:!1}));for(const n of s)n.setMeta(c=>({...c,isValidating:!1}));return d.filter(Boolean)},this.validate=(i,t)=>{var e;if(!this.state.meta.isTouched)return[];const{fieldsErrorMap:a}=t?.skipFormValidation?{fieldsErrorMap:{}}:this.form.validateSync(i),{hasErrored:s}=this.validateSync(i,a[this.name]??{});if(s&&!this.options.asyncAlways)return(e=this.getInfo().validationMetaMap[I(i)])==null||e.lastAbortController.abort(),this.state.meta.errors;const u=t?.skipFormValidation?Promise.resolve({}):this.form.validateAsync(i);return this.validateAsync(i,u)},this.handleChange=i=>{this.setValue(i)},this.handleBlur=()=>{var i,t;this.state.meta.isTouched||(this.setMeta(a=>({...a,isTouched:!0})),this.validate("change")),this.state.meta.isBlurred||this.setMeta(a=>({...a,isBlurred:!0})),this.validate("blur"),(t=(i=this.options.listeners)==null?void 0:i.onBlur)==null||t.call(i,{value:this.state.value,fieldApi:this})},this.form=r.form,this.name=r.name,this.timeoutIds={},r.defaultValue!==void 0&&this.form.setFieldValue(this.name,r.defaultValue,{dontUpdateMeta:!0}),this.store=new W({deps:[this.form.store],fn:()=>{const i=this.form.getFieldValue(this.name),t=this.form.getFieldMeta(this.name)??{isValidating:!1,isTouched:!1,isBlurred:!1,isDirty:!1,isPristine:!0,errors:[],errorMap:{},...r.defaultMeta};return{value:i,meta:t}}}),this.options=r}get state(){return this.store.state}runValidator(r){const i=[this.form.options.validatorAdapter,this.options.validatorAdapter];for(const t of i)if(t&&(typeof r.validate!="function"||"~standard"in r.validate))return t()[r.type](r.value,r.validate);return tt(r.validate)?Z()()[r.type](r.value,r.validate):r.validate(r.value)}setErrorMap(r){this.setMeta(i=>({...i,errorMap:{...i.errorMap,...r}}))}}function X(o){if(o)return typeof o!="string"?"Invalid Form Values":o}function I(o){switch(o){case"submit":return"onSubmit";case"blur":return"onBlur";case"mount":return"onMount";case"server":return"onServer";case"change":default:return"onChange"}}const j=typeof window<"u"?P.useLayoutEffect:P.useEffect;function vt(o){const[r]=P.useState(()=>{const t=new mt({...o,form:o.form,name:o.name});return t.Field=et,t});return j(r.mount,[r]),j(()=>{r.update(o)}),J(r.store,o.mode==="array"?i=>[i.meta,Object.keys(i.value??[]).length]:void 0),r}const et=({children:o,...r})=>{const i=vt(r),t=P.useMemo(()=>C(o,i),[o,i,i.state.value,i.state.meta]);return A.jsx(A.Fragment,{children:t})};function Mt({form:o,selector:r,children:i}){const t=J(o.store,r);return C(i,t)}function pt(o){const[r]=P.useState(()=>{const i=new ft(o),t=i;return t.Field=function(a){return A.jsx(et,{...a,form:i})},t.Subscribe=e=>A.jsx(Mt,{form:i,selector:e.selector,children:e.children}),t});return j(r.mount,[]),J(r.store,i=>i.isSubmitting),j(()=>{r.update(o)}),r}const bt=function(){const r=pt({defaultValues:{fullName:""},onSubmit:async({value:i})=>{console.log(i)}});return A.jsx("div",{className:"p-4",children:A.jsxs("form",{onSubmit:i=>{i.preventDefault(),i.stopPropagation(),r.handleSubmit()},children:[A.jsx("div",{children:A.jsx(r.Field,{name:"fullName",children:i=>A.jsx("input",{name:i.name,value:i.state.value,onBlur:i.handleBlur,onChange:t=>i.handleChange(t.target.value),className:"block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"})})}),A.jsx("button",{type:"submit",className:"mt-4 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Submit"})]})})};export{bt as component};
