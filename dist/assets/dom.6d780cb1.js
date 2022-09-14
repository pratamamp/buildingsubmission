/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */const g="calcite-theme-auto",m="calcite-theme-dark",v="calcite-theme-light",E={autoTheme:g,darkTheme:m,lightTheme:v,rtl:"calcite--rtl"},T={loading:"Loading"};function F(e){return Array.isArray(e)?e:Array.from(e)}function C(e){const n="dir",r=`[${n}]`,t=h(e,r);return t?t.getAttribute(n):"ltr"}function I(e,n,r){const t=`[${n}]`,u=e.closest(t);return u?u.getAttribute(n):r}function s(e){return e.getRootNode()}function f(e){return e.host||null}function b(e,n){function r(t,u){if(!t)return u;t.assignedSlot&&(t=t.assignedSlot);const o=s(t),i=Array.from(o.querySelectorAll(n)).filter(y=>!u.includes(y));u=[...u,...i];const a=f(o);return a?r(a,u):u}return r(e,[])}function B(e,{selector:n,id:r}){function t(u){if(!u)return null;u.assignedSlot&&(u=u.assignedSlot);const o=s(u),c=r?"getElementById"in o?o.getElementById(r):null:n?o.querySelector(n):null,i=f(o);return c||(i?t(i):null)}return t(e)}function h(e,n){function r(t){return t?t.closest(n)||r(f(s(t))):null}return r(e)}function A(e){return typeof(e==null?void 0:e.setFocus)=="function"}async function $(e){if(!!e)return A(e)?e.setFocus():e.focus()}const l=":not([slot])";function k(e,n,r){n&&!Array.isArray(n)&&typeof n!="string"&&(r=n,n=null);const t=n?Array.isArray(n)?n.map(u=>`[slot="${u}"]`).join(","):`[slot="${n}"]`:l;return r!=null&&r.all?S(e,t,r):q(e,t,r)}function d(e,n){return e?Array.from(e.children||[]).filter(r=>r==null?void 0:r.matches(n)):[]}function S(e,n,r){let t=n===l?d(e,l):Array.from(e.querySelectorAll(n));t=r&&r.direct===!1?t:t.filter(o=>o.parentElement===e),t=r!=null&&r.matches?t.filter(o=>o==null?void 0:o.matches(r.matches)):t;const u=r==null?void 0:r.selector;return u?t.map(o=>Array.from(o.querySelectorAll(u))).reduce((o,c)=>[...o,...c],[]).filter(o=>!!o):t}function q(e,n,r){let t=n===l?d(e,l)[0]||null:e.querySelector(n);t=r&&r.direct===!1||(t==null?void 0:t.parentElement)===e?t:null,t=r!=null&&r.matches?t!=null&&t.matches(r.matches)?t:null:t;const u=r==null?void 0:r.selector;return u?t==null?void 0:t.querySelector(u):t}function D(e,n,r){if(typeof n=="string"&&n!=="")return n;if(n==="")return e[r]}function j(e){return(!!e).toString()}export{E as C,T,k as a,b,h as c,I as d,$ as f,C as g,F as n,B as q,D as s,j as t};