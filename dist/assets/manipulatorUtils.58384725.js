import{w as m,nG as s,l as r}from"./index.f5fb6b4d.js";function u(e,t=s(e)){return t.mode!=="on-the-ground"&&!(m(e.geometry)||!e.geometry.hasZ)}function i(e,t){let n=null;const a=e.events.on("grab-changed",o=>{r(n)&&(n.remove(),n=null),o.action==="start"&&(n=e.disableDisplay()),t&&t(o)});return{remove(){r(n)&&n.remove(),a.remove()}}}export{i as n,u as t};