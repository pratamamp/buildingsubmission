import{e as o,g as t,n as l,y as d,w as i,iU as n,b5 as a,k9 as p,v as u,l as m}from"./index.f5fb6b4d.js";import{p as c}from"./normalizeUtilsSync.4bd14c75.js";let e=class extends d{constructor(r){super(r)}get bounds(){const r=this.coords;return i(r)?null:n(r.extent)}get coords(){var s;const r=(s=a(this.element.georeference))==null?void 0:s.coords;return p(r,this.spatialReference).geometry}get normalizedCoords(){return u.fromJSON(c(this.coords))}get normalizedBounds(){return m(this.normalizedCoords)?n(this.normalizedCoords.extent):null}};o([t()],e.prototype,"spatialReference",void 0),o([t()],e.prototype,"element",void 0),o([t()],e.prototype,"bounds",null),o([t()],e.prototype,"coords",null),o([t()],e.prototype,"normalizedCoords",null),o([t()],e.prototype,"normalizedBounds",null),e=o([l("esri.layers.support.media.MediaElementView")],e);export{e as a};