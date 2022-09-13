import{r as c,U as P,ez as S,bg as R,h,K as b,gq as M,qi as B,hG as _,J as q,t as D}from"./index.52935b46.js";import{e as F}from"./quatf64.b60d4974.js";import{p as j,m as k,c as z,f as K}from"./MeshComponent.41167dc3.js";import{c as N,x as G,L as U,O as I,i as O,E as V,T as J,u as Q}from"./BufferView.43fc091d.js";import{t as W,r as X,o as Y,b as Z,f as H,e as tt,n as et}from"./vec33.731df183.js";import{n as ot,c as rt,r as w,a as nt,h as st,t as A,b as at,j as it,d as ct,e as ut,k as lt,i as ft,f as mt,g as pt,o as dt}from"./DefaultMaterial_COLOR_GAMMA.f2d62e22.js";import{k as gt}from"./georeference.9c60805c.js";import{a as xt}from"./geometryDataUtils.8151b70d.js";import{E as T,D as C}from"./enums.de935fa5.js";import"./types.25c129c5.js";import"./mat4f64.84d5c445.js";import"./Version.bed92932.js";import"./quat.122fba57.js";import"./axisAngleDegrees.b0e51c69.js";import"./projection.ba478cd6.js";import"./triangle.4a12653d.js";import"./vectorStacks.a7af424f.js";import"./lineSegment.42c0099b.js";async function Jt(t,e,r){const s=new ot($t(r)),o=(await rt(s,e,r,!0)).model,m=o.lods.shift(),l=new Map,u=new Map;o.textures.forEach(($,E)=>l.set(E,wt($))),o.materials.forEach(($,E)=>u.set(E,yt($,l)));const i=bt(m);for(const $ of i.parts)vt(i,$,u);const{position:d,normal:f,tangent:n,color:a,texCoord0:p}=i.vertexAttributes,x={position:d.typedBuffer,normal:c(f)?f.typedBuffer:null,tangent:c(n)?n.typedBuffer:null,uv:c(p)?p.typedBuffer:null,color:c(a)?a.typedBuffer:null},v=gt(x,t,r);return{transform:v.transform,components:i.components,spatialReference:t.spatialReference,vertexAttributes:new j({position:v.vertexAttributes.position,normal:v.vertexAttributes.normal,tangent:v.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function $t(t){return t!=null&&t.resolveFile?{busy:!1,request:async(e,r,s)=>{const o=t.resolveFile(e);return(await P(o,{responseType:r==="image"?"image":r==="binary"?"array-buffer":"json",signal:c(s)?s.signal:null})).data}}:null}function y(t,e){if(D(t))return"-";const r=t.typedBuffer;return`${S(e,r.buffer,()=>e.size)}/${r.byteOffset}/${r.byteLength}`}function ht(t){return c(t)?t.toString():"-"}function bt(t){let e=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},s=new Map,o=new Map,m=[];for(const l of t.parts){const{attributes:{position:u,normal:i,color:d,tangent:f,texCoord0:n}}=l,a=`
      ${y(u,s)}/
      ${y(i,s)}/
      ${y(d,s)}/
      ${y(f,s)}/
      ${y(n,s)}/
      ${ht(l.transform)}
    `;let p=!1;const x=S(o,a,()=>(p=!0,{start:e,length:u.count}));p&&(e+=u.count),i&&(r.normal=!0),d&&(r.color=!0),f&&(r.tangent=!0),n&&(r.texCoord0=!0),m.push({gltf:l,writeVertices:p,region:x})}return{vertexAttributes:{position:w(J,e),normal:r.normal?w(O,e):null,tangent:r.tangent?w(N,e):null,color:r.color?w(G,e):null,texCoord0:r.texCoord0?w(Q,e):null},parts:m,components:[]}}function wt(t){return new k({data:t.data,wrap:Ct(t.parameters.wrap)})}function yt(t,e){const r=new R(Rt(t.color,t.opacity)),s=t.emissiveFactor?new R(Mt(t.emissiveFactor)):null;return new z({color:r,colorTexture:h(b(t.textureColor,o=>e.get(o))),normalTexture:h(b(t.textureNormal,o=>e.get(o))),emissiveColor:s,emissiveTexture:h(b(t.textureEmissive,o=>e.get(o))),occlusionTexture:h(b(t.textureOcclusion,o=>e.get(o))),alphaMode:Tt(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:h(b(t.textureMetallicRoughness,o=>e.get(o)))})}function vt(t,e,r){e.writeVertices&&Et(t,e);const s=e.gltf,o=At(s.indices||s.attributes.position.count,s.primitiveType),m=e.region.start;if(m)for(let l=0;l<o.length;l++)o[l]+=m;t.components.push(new K({faces:o,material:r.get(s.material),trustSourceNormals:!0}))}function Et(t,e){const{position:r,normal:s,tangent:o,color:m,texCoord0:l}=t.vertexAttributes,u=e.region.start,{attributes:i,transform:d}=e.gltf,f=i.position.count;if(W(r.slice(u,f),i.position,d),c(i.normal)&&c(s)){const n=M(F(),d),a=s.slice(u,f);X(a,i.normal,n),B(n)&&Y(a,a)}else c(s)&&Z(s,0,0,1,{dstIndex:u,count:f});if(c(i.tangent)&&c(o)){const n=M(F(),d),a=o.slice(u,f);nt(a,i.tangent,n),B(n)&&st(a,a)}else c(o)&&A(o,0,0,1,1,{dstIndex:u,count:f});if(c(i.texCoord0)&&c(l)?at(l.slice(u,f),i.texCoord0):c(l)&&it(l,0,0,{dstIndex:u,count:f}),c(i.color)&&c(m)){const n=i.color,a=m.slice(u,f);if(n.elementCount===4)n instanceof N?ct(a,n,255):n instanceof G?ut(a,n):n instanceof U&&lt(a,n,8);else{A(a,255,255,255,255);const p=I.fromTypedArray(a.typedBuffer,a.typedBufferStride);n instanceof O?H(p,n,255):n instanceof I?tt(p,n):n instanceof V&&et(p,n,8)}}else c(m)&&A(m.slice(u,f),255,255,255,255)}function At(t,e){switch(e){case T.TRIANGLES:return pt(t,xt);case T.TRIANGLE_STRIP:return mt(t);case T.TRIANGLE_FAN:return ft(t)}}function Tt(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ct(t){return{horizontal:L(t.s),vertical:L(t.t)}}function L(t){switch(t){case C.CLAMP_TO_EDGE:return"clamp";case C.MIRRORED_REPEAT:return"mirror";case C.REPEAT:return"repeat"}}function g(t){return t**(1/dt)*255}function Rt(t,e){return _(g(t[0]),g(t[1]),g(t[2]),e)}function Mt(t){return q(g(t[0]),g(t[1]),g(t[2]))}export{Jt as loadGLTFMesh};