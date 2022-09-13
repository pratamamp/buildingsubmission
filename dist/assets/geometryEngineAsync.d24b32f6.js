import{bO as f,dD as p}from"./index.52935b46.js";function i(t){var r;return Array.isArray(t)?(r=t[0])==null?void 0:r.spatialReference:t==null?void 0:t.spatialReference}function y(t){return t&&(Array.isArray(t)?t.map(y):t.toJSON?t.toJSON():t)}function u(t){return Array.isArray(t)?t.map(r=>f(r)):f(t)}function w(t,r){let e;return Array.isArray(t)?e=t:(e=[],e.push(t),r!=null&&e.push(r)),e}let s;async function m(){return s||(s=p("geometryEngineWorker",{strategy:"distributed"})),s}async function n(t,r){return(await m()).invoke("executeGEOperation",{operation:t,parameters:y(r)})}async function A(t,r){return u(await n("clip",[i(t),t,r]))}async function h(t,r){return u(await n("cut",[i(t),t,r]))}function x(t,r){return n("contains",[i(t),t,r])}function O(t,r){return n("crosses",[i(t),t,r])}function E(t,r,e){return n("distance",[i(t),t,r,e])}function S(t,r){return n("equals",[i(t),t,r])}function b(t,r){return n("intersects",[i(t),t,r])}function J(t,r){return n("touches",[i(t),t,r])}function N(t,r){return n("within",[i(t),t,r])}function R(t,r){return n("disjoint",[i(t),t,r])}function k(t,r){return n("overlaps",[i(t),t,r])}function v(t,r,e){return n("relate",[i(t),t,r,e])}function D(t){return n("isSimple",[i(t),t])}async function L(t){return u(await n("simplify",[i(t),t]))}async function j(t,r){return u(await n("difference",[i(t),t,r]))}async function q(t,r){return u(await n("symmetricDifference",[i(t),t,r]))}async function G(t,r){return u(await n("intersect",[i(t),t,r]))}async function I(t,r=null){const e=w(t,r);return u(await n("union",[i(e),e]))}async function W(t,r,e,a,c,o){return u(await n("offset",[i(t),t,r,e,a,c,o]))}async function $(t,r,e,a=!1){const c=[i(t),t,r,e,a];return u(await n("buffer",c))}async function z(t,r,e,a,c,o){const l=[i(t),t,r,e,a,c,o];return u(await n("geodesicBuffer",l))}function d(t){return"xmin"in t?t.center:"x"in t?t:t.extent.center}async function B(t,r,e){if(t==null)throw new Error("Illegal Argument Exception");const a=t.spatialReference;e=e!=null?e:d(t);const c=t.constructor.fromJSON(await n("rotate",[a,t,r,e]));return c.spatialReference=a,c}async function F(t,r,e,a){return u(await n("generalize",[i(t),t,r,e,a]))}async function K(t,r,e){return u(await n("densify",[i(t),t,r,e]))}async function M(t,r,e,a=0){return u(await n("geodesicDensify",[i(t),t,r,e,a]))}function P(t,r){return n("planarArea",[i(t),t,r])}function U(t,r){return n("planarLength",[i(t),t,r])}function V(t,r,e){return n("geodesicArea",[i(t),t,r,e])}function C(t,r,e){return n("geodesicLength",[i(t),t,r,e])}export{J as A,j as E,U as F,F as G,I,D as J,V as K,C as M,L as N,k as O,K as P,R as S,M as U,$ as V,P as W,z as b,S as d,b as g,v as h,q as j,G as k,A as l,E as m,x as p,B as q,W as v,O as w,N as x,h as y};
