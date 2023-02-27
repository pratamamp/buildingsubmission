import{xu as D,xv as G,l as c,w_ as P,U as _,pT as L,xw as w,xx as z,m as R,xr as U,b5 as h,ey as y,wZ as V,qi as j,qn as M,qw as q,qp as k,xy as B,xz as K,xA as Q,xB as Z,xC as H,xD as A,xE as J,xF as W,xG as S,xH as X,xI as N,xJ as Y,xK as tt,xL as et,xM as F,qq as O,xN as nt,ql as ot,xO as rt,xP as st,cD as E,xQ as at,xR as it,xS as ct,cO as C,hc as ut,dq as lt,w as ft,qg as xt,xT as pt,xU as mt,xV as dt}from"./index.f5fb6b4d.js";import{k as gt}from"./georeference.d53b615c.js";import"./axisAngleDegrees.fd4b564b.js";async function It(t,e,o){const s=new D($t(o)),n=(await G(s,e,o,!0)).model,x=n.lods.shift(),l=new Map,u=new Map;n.textures.forEach(($,T)=>l.set(T,yt($))),n.materials.forEach(($,T)=>u.set(T,bt($,l)));const i=ht(x);for(const $ of i.parts)vt(i,$,u);const{position:m,normal:f,tangent:r,color:a,texCoord0:p}=i.vertexAttributes,g={position:m.typedBuffer,normal:c(f)?f.typedBuffer:null,tangent:c(r)?r.typedBuffer:null,uv:c(p)?p.typedBuffer:null,color:c(a)?a.typedBuffer:null},v=gt(g,t,o);return{transform:v.transform,components:i.components,spatialReference:t.spatialReference,vertexAttributes:new P({position:v.vertexAttributes.position,normal:v.vertexAttributes.normal,tangent:v.vertexAttributes.tangent,color:g.color,uv:g.uv})}}function $t(t){return t!=null&&t.resolveFile?{busy:!1,request:async(e,o,s)=>{const n=t.resolveFile(e);return(await _(n,{responseType:o==="image"?"image":o==="binary"?"array-buffer":"json",signal:c(s)?s.signal:null})).data}}:null}function b(t,e){if(ft(t))return"-";const o=t.typedBuffer;return`${L(e,o.buffer,()=>e.size)}/${o.byteOffset}/${o.byteLength}`}function wt(t){return c(t)?t.toString():"-"}function ht(t){let e=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},s=new Map,n=new Map,x=[];for(const l of t.parts){const{attributes:{position:u,normal:i,color:m,tangent:f,texCoord0:r}}=l,a=`
      ${b(u,s)}/
      ${b(i,s)}/
      ${b(m,s)}/
      ${b(f,s)}/
      ${b(r,s)}/
      ${wt(l.transform)}
    `;let p=!1;const g=L(n,a,()=>(p=!0,{start:e,length:u.count}));p&&(e+=u.count),i&&(o.normal=!0),m&&(o.color=!0),f&&(o.tangent=!0),r&&(o.texCoord0=!0),x.push({gltf:l,writeVertices:p,region:g})}return{vertexAttributes:{position:w(xt,e),normal:o.normal?w(O,e):null,tangent:o.tangent?w(S,e):null,color:o.color?w(N,e):null,texCoord0:o.texCoord0?w(pt,e):null},parts:x,components:[]}}function yt(t){return new z({data:t.data,wrap:Ct(t.parameters.wrap)})}function bt(t,e){const o=new R(Rt(t.color,t.opacity)),s=t.emissiveFactor?new R(Mt(t.emissiveFactor)):null;return new U({color:o,colorTexture:h(y(t.textureColor,n=>e.get(n))),normalTexture:h(y(t.textureNormal,n=>e.get(n))),emissiveColor:s,emissiveTexture:h(y(t.textureEmissive,n=>e.get(n))),occlusionTexture:h(y(t.textureOcclusion,n=>e.get(n))),alphaMode:Et(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:h(y(t.textureMetallicRoughness,n=>e.get(n)))})}function vt(t,e,o){e.writeVertices&&Tt(t,e);const s=e.gltf,n=At(s.indices||s.attributes.position.count,s.primitiveType),x=e.region.start;if(x)for(let l=0;l<n.length;l++)n[l]+=x;t.components.push(new V({faces:n,material:o.get(s.material),trustSourceNormals:!0}))}function Tt(t,e){const{position:o,normal:s,tangent:n,color:x,texCoord0:l}=t.vertexAttributes,u=e.region.start,{attributes:i,transform:m}=e.gltf,f=i.position.count;if(j(o.slice(u,f),i.position,m),c(i.normal)&&c(s)){const r=M(q(),m),a=s.slice(u,f);k(a,i.normal,r),B(r)&&K(a,a)}else c(s)&&Q(s,0,0,1,{dstIndex:u,count:f});if(c(i.tangent)&&c(n)){const r=M(q(),m),a=n.slice(u,f);Z(a,i.tangent,r),B(r)&&H(a,a)}else c(n)&&A(n,0,0,1,1,{dstIndex:u,count:f});if(c(i.texCoord0)&&c(l)?J(l.slice(u,f),i.texCoord0):c(l)&&W(l,0,0,{dstIndex:u,count:f}),c(i.color)&&c(x)){const r=i.color,a=x.slice(u,f);if(r.elementCount===4)r instanceof S?X(a,r,255):r instanceof N?Y(a,r):r instanceof tt&&et(a,r,8);else{A(a,255,255,255,255);const p=F.fromTypedArray(a.typedBuffer,a.typedBufferStride);r instanceof O?nt(p,r,255):r instanceof F?ot(p,r):r instanceof rt&&st(p,r,8)}}else c(x)&&A(x.slice(u,f),255,255,255,255)}function At(t,e){switch(e){case E.TRIANGLES:return ct(t,mt);case E.TRIANGLE_STRIP:return it(t);case E.TRIANGLE_FAN:return at(t)}}function Et(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ct(t){return{horizontal:I(t.s),vertical:I(t.t)}}function I(t){switch(t){case C.CLAMP_TO_EDGE:return"clamp";case C.MIRRORED_REPEAT:return"mirror";case C.REPEAT:return"repeat"}}function d(t){return t**(1/dt)*255}function Rt(t,e){return ut(d(t[0]),d(t[1]),d(t[2]),e)}function Mt(t){return lt(d(t[0]),d(t[1]),d(t[2]))}export{It as loadGLTFMesh};