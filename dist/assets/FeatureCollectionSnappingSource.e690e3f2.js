import{y as p,l as s,e as r,g as a,n as c}from"./index.ce207a0f.js";import{o as l}from"./queryEngineUtils.77d03621.js";import"./VertexSnappingCandidate.c5767224.js";import"./PointSnappingHint.1cc55e4a.js";let t=class extends p{constructor(e){super(e)}get availability(){return 1}refresh(){}async fetchCandidates(e,i){const o=this.layerSource.layer.source;return o.querySnapping?(await o.querySnapping({distance:e.distance,point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),types:e.types,query:s(e.filter)?e.filter.createQuery().toJSON():{where:"1=1"}},{signal:i})).candidates.map(n=>l(n,e.coordinateHelper,e.elevationInfo)):[]}};r([a({constructOnly:!0})],t.prototype,"layerSource",void 0),r([a({readOnly:!0})],t.prototype,"availability",null),t=r([c("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],t);export{t as FeatureCollectionSnappingSource};