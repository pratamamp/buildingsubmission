import{$ as g,a0 as u,a1 as I,cp as k,A as E,J as G,gd as S,ge as Y,gf as V,gg as j,gh as N,gi as z,gj as L,gk as C,gl as J,gm as U,a8 as W,r as d,gn as D,go as H,gp as w,gq as B,t as f,gr as K,c6 as Q,gs as X,gt as Z}from"./index.52935b46.js";import{e as tt}from"./quatf64.b60d4974.js";import{e as m,o as rt}from"./mat4f64.84d5c445.js";import{a as b,l as nt,x as et}from"./axisAngleDegrees.b0e51c69.js";import{T as h,i as y}from"./BufferView.43fc091d.js";import{t as A,e as ot,r as x}from"./vec33.731df183.js";import{O as at,h as it,L as st,M as lt,j as ct,k as pt,R as gt,v as ut,V as ft}from"./projection.ba478cd6.js";var M;let p=M=class extends k{constructor(t){super(t),this.origin=E(),this.translation=E(),this.rotation=b(),this.scale=G(1,1,1),this.geographic=!0}get localMatrix(){const t=m();return S(t,this.scale),Y(t,t,et(this.rotation),nt(this.rotation)),V(t,t,this.translation),t}get localMatrixInverse(){return j(m(),this.localMatrix)}applyLocal(t,n){return N(n,t,this.localMatrix)}applyLocalInverse(t,n){return N(n,t,this.localMatrixInverse)}project(t,n){const r=new Float64Array(t.length),e=h.fromTypedArray(r),o=h.fromTypedArray(t);if(this.geographic){const s=z(n),c=m();return L(n,this.origin,c,s),C(c,c,this.localMatrix),A(e,o,c),J(r,s,0,r,n,0,r.length/3),r}const{localMatrix:a,origin:i}=this;U(a,rt)?ot(e,o):A(e,o,a);for(let s=0;s<r.length;s+=3)r[s+0]+=i[0],r[s+1]+=i[1],r[s+2]+=i[2];return r}getOriginPoint(t){const[n,r,e]=this.origin;return new W({x:n,y:r,z:e,spatialReference:t})}equals(t){return d(t)&&this.geographic===t.geographic&&D(this.origin,t.origin)&&H(this.localMatrix,t.localMatrix)}clone(){const t={origin:w(this.origin),translation:w(this.translation),rotation:b(this.rotation),scale:w(this.scale),geographic:this.geographic};return new M(t)}};g([u({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"origin",void 0),g([u({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"translation",void 0),g([u({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"rotation",void 0),g([u({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"scale",void 0),g([u({type:Boolean,nonNullable:!0,json:{write:!0}})],p.prototype,"geographic",void 0),g([u()],p.prototype,"localMatrix",null),g([u()],p.prototype,"localMatrixInverse",null),p=M=g([I("esri.geometry.support.MeshTransform")],p);const ht=p;function $(t,n){var r;return t.isGeographic||t.isWebMercator&&((r=n==null?void 0:n.geographic)!=null?r:!0)}function O(t,n,r){return $(n.spatialReference,r)?xt(t,n,r):At(t,n,r)}function yt(t,n,r){const{position:e,normal:o,tangent:a}=t;if(f(n))return{position:e,normal:o,tangent:a};const i=n.localMatrix;return O({position:gt(e,new Float64Array(e.length),i),normal:d(o)?ut(o,new Float32Array(o.length),i):null,tangent:d(a)?ft(a,new Float32Array(a.length),i):null},n.getOriginPoint(r),{geographic:n.geographic})}function Ot(t,n,r){var e;if(r!=null&&r.useTransform){const{position:o,normal:a,tangent:i}=t;return{vertexAttributes:{position:o,normal:a,tangent:i},transform:new ht({origin:[n.x,n.y,(e=n.z)!=null?e:0],geographic:$(n.spatialReference,r)})}}return{vertexAttributes:O(t,n,r),transform:null}}function mt(t,n,r){return $(n.spatialReference,r)?P(t,n,r):v(t,n,r)}function Pt(t,n,r,e){if(f(n))return mt(t,r,e);const o=yt(t,n,r.spatialReference);return r.equals(n.getOriginPoint(r.spatialReference))?v(o,r,e):$(r.spatialReference,e)?P(o,r,e):v(o,r,e)}function At(t,n,r){const e=new Float64Array(t.position.length),o=t.position,a=n.x,i=n.y,s=n.z||0,{horizontal:c,vertical:T}=R(r?r.unit:null,n.spatialReference);for(let l=0;l<o.length;l+=3)e[l+0]=o[l+0]*c+a,e[l+1]=o[l+1]*c+i,e[l+2]=o[l+2]*T+s;return{position:e,normal:t.normal,tangent:t.tangent}}function xt(t,n,r){const e=n.spatialReference,o=_(n,r,F),a=new Float64Array(t.position.length),i=$t(t.position,o,e,a),s=B(q,o);return{position:i,normal:Tt(i,a,t.normal,s,e),tangent:wt(i,a,t.tangent,s,e)}}function $t(t,n,r,e){A(h.fromTypedArray(e),h.fromTypedArray(t),n);const o=new Float64Array(t.length);return at(e,o,r)}function Tt(t,n,r,e,o){if(f(r))return null;const a=new Float32Array(r.length);return x(y.fromTypedArray(a),y.fromTypedArray(r),e),it(a,t,n,o,a),a}function wt(t,n,r,e,o){if(f(r))return null;const a=new Float32Array(r.length);x(y.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),y.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),e);for(let i=3;i<a.length;i+=4)a[i]=r[i];return st(a,t,n,o,a),a}function v(t,n,r){const e=new Float64Array(t.position.length),o=t.position,a=n.x,i=n.y,s=n.z||0,{horizontal:c,vertical:T}=R(r?r.unit:null,n.spatialReference);for(let l=0;l<o.length;l+=3)e[l+0]=(o[l+0]-a)/c,e[l+1]=(o[l+1]-i)/c,e[l+2]=(o[l+2]-s)/T;return{position:e,normal:t.normal,tangent:t.tangent}}function P(t,n,r){const e=n.spatialReference;_(n,r,F);const o=j(Ft,F),a=new Float64Array(t.position.length),i=dt(t.position,e,o,a),s=B(q,o);return{position:i,normal:Mt(t.normal,t.position,a,e,s),tangent:vt(t.tangent,t.position,a,e,s)}}function _(t,n,r){L(t.spatialReference,[t.x,t.y,t.z||0],r,z(t.spatialReference));const{horizontal:e,vertical:o}=R(n?n.unit:null,t.spatialReference);return K(r,r,[e,e,o]),r}function dt(t,n,r,e){const o=lt(t,n,e),a=h.fromTypedArray(o),i=new Float64Array(o.length),s=h.fromTypedArray(i);return A(s,a,r),i}function Mt(t,n,r,e,o){if(f(t))return null;const a=ct(t,n,r,e,new Float32Array(t.length)),i=y.fromTypedArray(a);return x(i,i,o),a}function vt(t,n,r,e,o){if(f(t))return null;const a=pt(t,n,r,e,new Float32Array(t.length)),i=y.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return x(i,i,o),a}function R(t,n){if(f(t))return Rt;const r=n.isGeographic?1:Q(n),e=n.isGeographic?1:X(n),o=Z(1,t,"meters");return{horizontal:o*r,vertical:o*e}}const F=m(),Ft=m(),q=tt(),Rt={horizontal:1,vertical:1};export{ht as L,mt as M,Pt as P,yt as _,Ot as k,$ as r,O as x};
