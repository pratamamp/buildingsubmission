import{aa as o,w as r,a9 as i}from"./index.ce207a0f.js";import{e as a}from"./centroid.e2697b30.js";const b={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new o(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(r(t.centroid)&&(t.centroid=a(new i,t.geometry,e.hasZ,e.hasM)),t.centroid)};export{b as i};