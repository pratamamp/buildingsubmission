import{s as Y,gl as R,gi as l,gj as C,gu as _,gv as O,gw as M,gx as j,g1 as x,gy as z,gz as U,gA as W,A as h,t as d,gq as v,gB as V}from"./index.52935b46.js";import{e as b}from"./quatf64.b60d4974.js";import{e as q}from"./mat4f64.84d5c445.js";import{i as s,T as i}from"./BufferView.43fc091d.js";import{t as w,r as B,o as L}from"./vec33.731df183.js";const g=Y.getLogger("esri.geometry.support.meshUtils.normalProjection");function K(r,e,o,a,t){return F(a)?(A(u.TO_PCPF,s.fromTypedArray(r),i.fromTypedArray(e),i.fromTypedArray(o),a,s.fromTypedArray(t)),t):(g.error("Cannot convert spatial reference to PCPF"),t)}function Q(r,e,o,a,t){return F(a)?(A(u.FROM_PCPF,s.fromTypedArray(r),i.fromTypedArray(e),i.fromTypedArray(o),a,s.fromTypedArray(t)),t):(g.error("Cannot convert to spatial reference from PCPF"),t)}function X(r,e,o){return R(r,e,0,o,l(e),0,r.length/3),o}function Z(r,e,o){return R(r,l(o),0,e,o,0,r.length/3),e}function $(r,e,o){if(d(r))return e;const a=i.fromTypedArray(r),t=i.fromTypedArray(e);return w(t,a,o),e}function rr(r,e,o){if(d(r))return e;v(n,o);const a=s.fromTypedArray(r),t=s.fromTypedArray(e);return B(t,a,n),V(n)||L(t,t),e}function er(r,e,o){if(d(r))return e;v(n,o);const a=s.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),t=s.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT);if(B(t,a,n),V(n)||L(t,t),r!==e)for(let f=3;f<r.length;f+=4)e[f]=r[f];return e}function tr(r,e,o,a,t){if(!F(a))return g.error("Cannot convert spatial reference to PCPF"),t;A(u.TO_PCPF,s.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),i.fromTypedArray(e),i.fromTypedArray(o),a,s.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT));for(let f=3;f<r.length;f+=4)t[f]=r[f];return t}function or(r,e,o,a,t){if(!F(a))return g.error("Cannot convert to spatial reference from PCPF"),t;A(u.FROM_PCPF,s.fromTypedArray(r,16),i.fromTypedArray(e),i.fromTypedArray(o),a,s.fromTypedArray(t,16));for(let f=3;f<r.length;f+=4)t[f]=r[f];return t}function A(r,e,o,a,t,f){if(!e)return;const E=o.count,P=l(t);if(S(t))for(let y=0;y<E;y++)a.getVec(y,T),e.getVec(y,c),C(P,T,p,P),_(n,p),r===u.FROM_PCPF&&O(n,n),M(c,c,n),f.setVec(y,c);else for(let y=0;y<E;y++){a.getVec(y,T),e.getVec(y,c),C(P,T,p,P),_(n,p);const N=j(o.get(y,1));let m=Math.cos(N);r===u.TO_PCPF&&(m=1/m),n[0]*=m,n[1]*=m,n[2]*=m,n[3]*=m,n[4]*=m,n[5]*=m,r===u.FROM_PCPF&&O(n,n),M(c,c,n),x(c,c),f.setVec(y,c)}return f}function F(r){return S(r)||k(r)}function S(r){return r.isWGS84||z(r)||U(r)||W(r)}function k(r){return r.isWebMercator}var u;(function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"})(u||(u={}));const T=h(),c=h(),p=q(),n=b();export{or as L,X as M,Z as O,$ as R,er as V,Q as h,K as j,tr as k,rr as v};