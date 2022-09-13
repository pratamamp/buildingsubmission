import{i_ as m,i$ as h,iZ as s,bc as o,j0 as l,a8 as p,dn as n,cs as M,eQ as S,j1 as y,j2 as u,af as c,A as g}from"./index.52935b46.js";import{U as I,w as P}from"./enums.05a6ea95.js";import{o as d}from"./settings.3262aa4d.js";import{r as x}from"./SnappingContext.6035d506.js";class j extends x{constructor(e){super(),this.graphicsLayer=e}visualizeIntersectionPoint(e,r){return this._visualizeSnappingIndicator(new p({x:e.intersectionPoint[0],y:e.intersectionPoint[1],spatialReference:r.coordinateHelper.spatialReference}),L)}visualizePoint(e,r){return this._visualizeSnappingIndicator(new p({x:e.point[0],y:e.point[1],spatialReference:r.coordinateHelper.spatialReference}),f)}visualizeLine(e,r){return this._visualizeSnappingIndicator(new n({paths:[[e.lineStart,e.lineEnd]],spatialReference:r.coordinateHelper.spatialReference}),z)}visualizeParallelSign(e,r){return this._visualizeSnappingIndicator(new n({paths:[[e.lineStart,e.lineEnd]],spatialReference:r.coordinateHelper.spatialReference}),v)}visualizeRightAngleQuad(e,r){return this._visualizeSnappingIndicator(new n({paths:[[e.previousVertex,e.centerVertex,e.nextVertex]],spatialReference:r.coordinateHelper.spatialReference}),w(e))}_visualizeSnappingIndicator(e,r){const i=new M({geometry:e,symbol:r});return this.graphicsLayer.add(i),S(()=>{this.graphicsLayer.remove(i)})}}const t=d.main.toArray(),C=[...d.main.toRgb(),100],L=new m({outline:new h({width:1.5,color:t}),size:15,color:[0,0,0,0]}),f=new m({outline:{width:.5,color:[0,0,0,1]},size:10,color:t}),z=new s({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:I.Butt,joinStyle:P.Round,miterLimit:10,width:o(l.lineHintWidthTarget),color:t}]}}}),v=new s({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:t}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:t}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),b=a=>new s({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:o(l.rightAngleHintSize),rotation:a,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:o(l.rightAngleHintOutlineSize),color:t},{type:"CIMSolidFill",enable:!0,color:C}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),R=b(45),k=b(225),w=(()=>{const a=c(),e=c(),r=g();return i=>(y(a,i.centerVertex,i.previousVertex),y(e,i.nextVertex,i.previousVertex),u(r,a,e),r[2]<0?R:k)})();export{j as g};