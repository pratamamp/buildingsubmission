import{tl as d,sq as v,an as n,b5 as g,l as r,aY as G,i as o,R as c,fO as E,e as l,g as h,z as p,n as b}from"./index.f5fb6b4d.js";import{g as _}from"./SnappingVisualizer2D.9738fb5e.js";import{_ as S,F as V,G as w,c as f}from"./drawSurfaces.8e182b62.js";import"./enums.05a6ea95.js";import"./settings.1d7e57bf.js";import"./SnappingContext.c3f58a7b.js";import"./PointSnappingHint.a7474f2b.js";import"./geometryEngine.ec44d84f.js";import"./geometryEngineBase.cf4f989f.js";import"./hydrated.2bb80d4d.js";import"./InteractiveToolBase.677ebdaf.js";import"./drawUtils.f056f9c9.js";import"./quantityUtils.25484caf.js";import"./dehydratedFeatureComparison.4428d1dd.js";import"./EditGeometryOperations.50d7ddd5.js";import"./euclideanLengthMeasurementUtils.d5b79ce8.js";import"./measurementUtils.86c15981.js";import"./quantityFormatUtils.7fbf45d7.js";import"./euclideanAreaMeasurementUtils.f54e9b68.js";const x=new d({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[3.75,3.75],lineDashEnding:"HalfPattern",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:1.6,color:[255,255,255,255]},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:2,color:[0,0,0,255]}]}}}),L=new v({style:"circle",size:6,color:[127,127,127,1],outline:{color:[50,50,50],width:1}}),C=new v({style:"circle",size:6,color:[255,127,0,1],outline:{color:[50,50,50],width:1}});let a=class extends S{constructor(e){super(e),this._visualElementGraphics={outline:null,regularVertices:null,activeVertex:null},this.activeFillSymbol=null,this.type="draw-2d",this._visualElementSymbols={outline:n(e.activeLineSymbol,x),regularVertices:n(e.regularVerticesSymbol,L),activeVertex:n(e.activeVertexSymbol,C),fill:g(e.activeFillSymbol)}}normalizeCtorArgs(e){const t={...e};return delete t.activeFillSymbol,delete t.activeVertexSymbol,delete t.regularVerticesSymbol,delete t.activeLineSymbol,t}initializeGraphic(e){return r(this._visualElementSymbols.fill)&&(e.symbol=this._visualElementSymbols.fill),null}makeDrawOperation(){const e=this.view;return new V({view:e,manipulators:this.manipulators,geometryType:w(this.geometryType),drawingMode:this.mode,hasZ:this.hasZ,defaultZ:this.defaultZ,snapToSceneEnabled:this.snapToScene,drawSurface:new f(e),hasM:!1,snappingManager:this.snappingManager,snappingVisualizer:new _(this.internalGraphicsLayer)})}onActiveVertexChanged(e){if(this.geometryType==="point")return null;const[t,i]=e,s=new G({x:t,y:i,spatialReference:this.view.spatialReference});return r(this._visualElementGraphics.activeVertex)?(this._visualElementGraphics.activeVertex.geometry=s,null):(this._visualElementGraphics.activeVertex=new o({geometry:s,symbol:this._visualElementSymbols.activeVertex,attributes:{displayOrder:2}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex),this.internalGraphicsLayer.graphics.sort(m),c(()=>{r(this._visualElementGraphics.activeVertex)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex),this._visualElementGraphics.activeVertex=p(this._visualElementGraphics.activeVertex))}))}onOutlineChanged(e){const t=e.clone();if(t.type==="polyline"){const i=t.paths[t.paths.length-1];i.splice(0,i.length-2)}return r(this._visualElementGraphics.outline)?(this._visualElementGraphics.outline.geometry=t,null):(this._visualElementGraphics.outline=new o({geometry:t,symbol:this._visualElementSymbols.outline,attributes:{displayOrder:0}}),this.internalGraphicsLayer.add(this._visualElementGraphics.outline),this.internalGraphicsLayer.graphics.sort(m),c(()=>{r(this._visualElementGraphics.outline)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.outline),this._visualElementGraphics.outline=p(this._visualElementGraphics.outline))}))}onRegularVerticesChanged(e){const t=new E({points:e,spatialReference:this.view.spatialReference});return r(this._visualElementGraphics.regularVertices)?(this._visualElementGraphics.regularVertices.geometry=t,null):(this._visualElementGraphics.regularVertices=new o({geometry:t,symbol:this._visualElementSymbols.regularVertices,attributes:{displayOrder:1}}),this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices),this.internalGraphicsLayer.graphics.sort(m),c(()=>{r(this._visualElementGraphics.regularVertices)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices),this._visualElementGraphics.regularVertices=p(this._visualElementGraphics.regularVertices))}))}};function m(e,t){var i,s,u,y;return((s=(i=e.attributes)==null?void 0:i.displayOrder)!=null?s:-1/0)-((y=(u=t.attributes)==null?void 0:u.displayOrder)!=null?y:-1/0)}l([h()],a.prototype,"activeFillSymbol",void 0),l([h({readOnly:!0})],a.prototype,"type",void 0),l([h({constructOnly:!0,nonNullable:!0})],a.prototype,"view",void 0),a=l([b("esri.views.2d.interactive.draw.DrawGraphicTool2D")],a);export{a as DrawGraphicTool2D};