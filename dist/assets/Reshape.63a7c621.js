import{i_ as f,s as A,I as $,am as E,cq as I,a9 as T,n3 as w,fE as S,t as V,aU as D,dn as F,jd as U,jb as z,r as b,jg as O,k9 as M,cs as u,a8 as x,fc as L,n4 as C,an as P,n5 as j,f as q,$ as v,a0 as m,n0 as K,a3 as N,a1 as B}from"./index.52935b46.js";import{g as J}from"./SnappingVisualizer2D.b2856ee5.js";import{s as Q}from"./drawUtils.b3864c8e.js";import{h as W,D as X}from"./GraphicMover.ca3f7013.js";import{h as Y}from"./settings.3262aa4d.js";import{S as Z,e as ee}from"./SnappingContext.6035d506.js";import"./enums.05a6ea95.js";import"./GraphicManipulator.6d798ed3.js";import"./PointSnappingHint.735dac09.js";import"./plane.1ed71234.js";import"./sphere.fe54e1ae.js";import"./vectorStacks.a7af424f.js";import"./quatf64.b60d4974.js";import"./mat4f64.84d5c445.js";class te{constructor(t,i,s){this.graphic=t,this.mover=i,this.selected=s,this.type="reshape-start"}}class ie{constructor(t,i,s){this.graphic=t,this.mover=i,this.selected=s,this.type="reshape"}}class se{constructor(t,i,s){this.graphic=t,this.mover=i,this.selected=s,this.type="reshape-stop"}}class oe{constructor(t,i,s){this.mover=t,this.dx=i,this.dy=s,this.type="move-start"}}class re{constructor(t,i,s){this.mover=t,this.dx=i,this.dy=s,this.type="move"}}class ne{constructor(t,i,s){this.mover=t,this.dx=i,this.dy=s,this.type="move-stop"}}class ae{constructor(t){this.added=t,this.type="vertex-select"}}class he{constructor(t){this.removed=t,this.type="vertex-deselect"}}class ce{constructor(t,i,s,r){this.added=t,this.graphic=i,this.oldGraphic=s,this.vertices=r,this.type="vertex-add"}}class pe{constructor(t,i,s,r){this.removed=t,this.graphic=i,this.oldGraphic=s,this.vertices=r,this.type="vertex-remove"}}const y=Y.reshapeGraphics,k={vertices:{default:new f({style:"circle",size:y.vertex.size,color:y.vertex.color,outline:{color:y.vertex.outlineColor,width:1}}),hover:new f({style:"circle",size:y.vertex.hoverSize,color:y.vertex.hoverColor,outline:{color:y.vertex.hoverOutlineColor,width:1}}),selected:new f({style:"circle",size:y.selected.size,color:y.selected.color,outline:{color:y.selected.outlineColor,width:1}})},midpoints:{default:new f({style:"circle",size:y.midpoint.size,color:y.midpoint.color,outline:{color:y.midpoint.outlineColor,width:1}}),hover:new f({style:"circle",size:y.midpoint.size,color:y.midpoint.color,outline:{color:y.midpoint.outlineColor,width:1}})}},R="esri.views.draw.support.Reshape",le=A.getLogger(R);let d=class extends $.EventedAccessor{constructor(e){super(e),this._activeOperationInfo=null,this._editGeometryOperations=null,this._handles=new E,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._snappingTask=null,this._stagedVertex=null,this._viewHandles=new E,this.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}},this.enableMidpoints=!0,this.enableMovement=!0,this.enableVertices=!0,this.graphic=null,this.layer=null,this.midpointGraphics=new I,this.midpointSymbol=new f({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),this.selectedVertices=[],this.snappingManager=null,this.type="reshape",this.vertexGraphics=new I,this.view=null}initialize(){this._highlightHelper=new W({view:this.view}),this._setup(),this._handles.add([T(()=>{var e;return(e=this.view)==null?void 0:e.ready},()=>{const{layer:e,view:t}=this;K(t,e),this._viewHandles.add(t.on("key-down",i=>this._keyDownHandler(i),N.TOOL))},{once:!0,initial:!0}),w(()=>this.graphic,()=>this.refresh()),w(()=>this.layer,(e,t)=>{t&&(this._clearSelection(),this._resetGraphics(t)),this.refresh()}),w(()=>this.enableMidpoints,()=>this.refresh())])}destroy(){var e;this._reset(),(e=this._mover)==null||e.destroy(),this._mover=null,this._handles=S(this._handles),this._viewHandles=S(this._viewHandles)}set highlightsEnabled(e){var t;(t=this._highlightHelper)==null||t.removeAll(),this._set("highlightsEnabled",e),this._setUpHighlights()}get state(){const e=!!this.get("view.ready"),t=!(!this.get("graphic")||!this.get("layer"));return e&&t?"active":e?"ready":"disabled"}set symbols(e){const{midpoints:t=k.midpoints,vertices:i=k.vertices}=e||{};this._set("symbols",{midpoints:t,vertices:i})}isUIGraphic(e){const t=[];return this.graphic&&t.push(this.graphic),t.concat(this.vertexGraphics.items,this.midpointGraphics.items),t.length&&t.includes(e)}refresh(){this._reset(),this._setup()}reset(){this.graphic=null}clearSelection(){this._clearSelection()}removeSelectedVertices(){this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_setup(){const{graphic:e,layer:t}=this;if(!t||!e||V(e.geometry))return;const i=e.geometry;i.type!=="mesh"&&i.type!=="extent"?(i.type==="polygon"&&D(i),this._setUpHighlights(),this._setupGraphics(),this._setupMover()):this._logGeometryTypeError()}_setUpHighlights(){this.highlightsEnabled&&this.graphic&&this._highlightHelper.add(this.graphic)}_setUpGeometryHelper(){const e=this.graphic.geometry;if(V(e)||e.type==="mesh"||e.type==="extent")return void this._logGeometryTypeError();const t=e.type==="multipoint"?new F({paths:e.points,spatialReference:e.spatialReference}):e;this._editGeometryOperations=Z.fromGeometry(t,U.Local)}_saveSnappingContextForHandle(e,t){var i;this._snappingGraphicsLayer=new z({listMode:"hide",internal:!0,title:"Reshape snapping layer"}),this.view.map.layers.add(this._snappingGraphicsLayer),this._snappingContext=new ee({editGeometryOperations:this._editGeometryOperations,elevationInfo:{mode:"on-the-ground",offset:0},pointer:((i=t.viewEvent)==null?void 0:i.pointerType)||"mouse",excludeFeature:this.graphic,visualizer:new J(this._snappingGraphicsLayer),vertexHandle:this._getVertexFromEditGeometry(e)})}_reset(){this._clearSelection(),this._highlightHelper.removeAll(),this._resetGraphics(),this._resetSnappingStateVars(),this._activeOperationInfo=null,this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetSnappingStateVars(){b(this.snappingManager)&&this.snappingManager.doneSnapping(),b(this._snappingGraphicsLayer)&&(this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy()),this._editGeometryOperations=S(this._editGeometryOperations),this._snappingTask=O(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null}_resetGraphics(e){this._removeMidpointGraphics(e),this._removeVertexGraphics(e),this._set("selectedVertices",[])}_removeMidpointGraphics(e){const t=e||this.layer;t&&t.removeMany(this.midpointGraphics.items),this.midpointGraphics.items.forEach(i=>i.destroy()),this.midpointGraphics.removeAll()}_removeVertexGraphics(e){const t=e||this.layer;t&&t.removeMany(this.vertexGraphics.items),this.vertexGraphics.items.forEach(i=>i.destroy()),this.vertexGraphics.removeAll()}_getCoordinatesForUI(e){const t=M(e.clone());if(e.type==="polygon")for(const i of t){const s=i[i.length-1];i[0][0]===s[0]&&i[0][1]===s[1]&&i.length>2&&i.pop()}return t}_setupGraphics(){const e=this.graphic.geometry;if(b(e)&&(e.type==="polyline"||e.type==="polygon")){const t=this._getCoordinatesForUI(e);this.enableMidpoints&&this._setUpMidpointGraphics(t),this.enableVertices&&this._setUpVertexGraphics(t)}}_setUpMidpointGraphics(e){this._removeMidpointGraphics();const t=this._createMidpointGraphics(e);this.midpointGraphics.addMany(t),this.layer.addMany(t)}_setUpVertexGraphics(e){this._removeVertexGraphics();const t=this._createVertexGraphics(e);this.vertexGraphics.addMany(t),this._storeRelatedVertexIndices(),this.layer.addMany(t)}_createVertexGraphics(e){const{_graphicAttributes:t,symbols:i,view:{spatialReference:s}}=this,r=[];return e==null||e.forEach((n,o)=>{n.forEach((h,c)=>{var l;const[a,p]=h;r.push(new u({geometry:new x({x:a,y:p,spatialReference:s}),symbol:(l=i==null?void 0:i.vertices)==null?void 0:l.default,attributes:{...t,pathIndex:o,pointIndex:c}}))})}),r}_createMidpointGraphics(e){const{_graphicAttributes:t,symbols:i,view:{spatialReference:s}}=this,r=[];return e==null||e.forEach((n,o)=>{n.forEach((h,c)=>{const[a,p]=h,l=n[c+1]?c+1:0;if(L(this.graphic.geometry,"type")==="polygon"||l!==0){const[_,g]=n[l],[G,H]=C([a,p],[_,g]);r.push(new u({geometry:new x({x:G,y:H,spatialReference:s}),symbol:i.midpoints.default,attributes:{...t,pathIndex:o,pointIndexStart:c,pointIndexEnd:l}}))}})}),r}_storeRelatedVertexIndices(){const e=this.vertexGraphics.items;if(!e)return;const t=e.map(({geometry:i})=>({x:i.x,y:i.y}));for(let i=0;i<t.length;i++){const s=[];for(let r=0;r<t.length;r++){if(i===r)continue;const n=t[i],o=t[r];n.x===o.x&&n.y===o.y&&s.push(r)}e[i].attributes.relatedGraphicIndices=s}}_setupMover(){const{enableMovement:e,graphic:t,midpointGraphics:i,vertexGraphics:s,view:r}=this,n=s.concat(i).items;e&&n.push(t),this._mover=new X({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,graphics:n,view:r,callbacks:{onGraphicClick:o=>this._onGraphicClickCallback(o),onGraphicMoveStart:o=>this._onGraphicMoveStartCallback(o),onGraphicMove:o=>this._onGraphicMoveCallback(o),onGraphicMoveStop:o=>this._onGraphicMoveStopCallback(o),onGraphicPointerOver:o=>this._onGraphicPointerOverCallback(o),onGraphicPointerOut:o=>this._onGraphicPointerOutCallback(o)}})}_onGraphicClickCallback(e){e.viewEvent.stopPropagation();const t=e.graphic;if(t===this.graphic)this.clearSelection(),this.emit("graphic-click",e),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(e);else if(this._isMidpoint(t)){if(e.viewEvent.button===2)return;const i=this.graphic.clone(),s=this._createVertexFromMidpoint(t);this.refresh(),this._emitVertexAddEvent([t],i,s)}else this._isVertex(t)&&(e.viewEvent.stopPropagation(),e.viewEvent.button===2?this._removeVertices(t):(e.viewEvent.native.shiftKey||this._clearSelection(),this.selectedVertices.includes(t)?this._removeFromSelection(t,!0):this._addToSelection(t)))}_setUpOperation(e){const{graphic:t,dx:i,dy:s}=e,r=t===this.graphic;this._resetSnappingStateVars(),this._setUpGeometryHelper(),this._saveSnappingContextForHandle(t,e),this._activeOperationInfo={target:this.graphic,mover:t,operationType:r?"move":"reshape",totalDx:i,totalDy:s}}_onGraphicMoveStartCallback(e){const t=e.graphic,{dx:i,dy:s}=e;if(t===this.graphic)return this._clearSelection(),this._resetGraphics(),this._setUpOperation(e),this._emitMoveStartEvent(i,s),void(this._editGeometryOperations.data.type==="point"&&this._onHandleMove(t,i,s,e,()=>this._emitMoveEvent(i,s)));if(!this.selectedVertices.includes(t)){if(this._clearSelection(),this._isMidpoint(t)){const r=this.graphic.clone(),n=this._createVertexFromMidpoint(t);this._emitVertexAddEvent([t],r,n)}this._addToSelection(t)}this._setUpOperation(e),this._emitReshapeStartEvent(t),this._onHandleMove(t,i,s,e,()=>this._emitReshapeEvent(t))}_onGraphicMoveCallback(e){const{graphic:t,dx:i,dy:s}=e;this._activeOperationInfo.totalDx+=i,this._activeOperationInfo.totalDy+=s;const{operationType:r}=this._activeOperationInfo;r==="move"?this._editGeometryOperations.data.type==="point"?this._onHandleMove(t,i,s,e,()=>this._emitMoveEvent(i,s)):this._emitMoveEvent(i,s):this._onHandleMove(t,i,s,e,()=>this._emitReshapeEvent(t))}_onGraphicMoveStopCallback(e){const{graphic:t,dx:i,dy:s}=e,r=t===this.graphic,n=this._editGeometryOperations.data.type!=="point";this._activeOperationInfo.totalDx+=i,this._activeOperationInfo.totalDy+=s,this._onHandleMove(t,i,s,e,()=>r?this._emitMoveStopEvent():this._emitReshapeStopEvent(t)),r&&n||this._isMidpoint(t)?this.refresh():(this._resetSnappingStateVars(),this._activeOperationInfo=null)}_updateMidpointGraphicLocations(e){for(const t of this.midpointGraphics){const{pathIndex:i,pointIndexStart:s,pointIndexEnd:r}=t.attributes,[n,o]=e[i][s],[h,c]=e[i][r],[a,p]=C([n,o],[h,c]);t.geometry=new x({x:a,y:p,spatialReference:this.view.spatialReference})}}_getIndicesForVertexGraphic({attributes:e}){return[(e==null?void 0:e.pathIndex)||0,(e==null?void 0:e.pointIndex)||0]}_getVertexFromEditGeometry(e){const[t,i]=this._getIndicesForVertexGraphic(e);return this._editGeometryOperations.data.components[t].vertices[i]}_onHandleMove(e,t,i,s,r){if(O(this._snappingTask),!this._snappingContext)return;const n=e.geometry,o=s.type==="graphic-move-stop";if(b(this.snappingManager)&&this.selectedVertices.length<2&&!o){const h=this.snappingManager;this._stagedVertex=h.update(n,this._snappingContext),this._syncGeometryAfterVertexMove(e,new x(this._stagedVertex),t,i,o),r(),this._snappingTask=P(async c=>{const a=await h.snap(n,this._snappingContext,c);a.valid&&(this._stagedVertex=a.apply(),this._syncGeometryAfterVertexMove(e,new x(this._stagedVertex),t,i,o),r())})}else{const h=b(this._stagedVertex)?new x(this._stagedVertex):n;this._syncGeometryAfterVertexMove(e,h,t,i,o),r()}}async _syncGeometryAfterVertexMove(e,t,i,s,r=!1){const n=this._editGeometryOperations.data.geometry;if(n.type==="point")e.geometry=t;else{const{x:o,y:h}=t,[c,a]=this._getIndicesForVertexGraphic(e);let p=M(n);const l=p[c].length-1;p[c][a]=[o,h],n.type==="polygon"&&(a===0?p[c][l]=[o,h]:a===l&&(p[c][0]=[o,h])),this._isVertex(e)&&(p=this._moveRelatedCoordinates(p,e,o,h),p=this._moveSelectedHandleCoordinates(p,e,i,s,n.type==="polygon"),this._updateMidpointGraphicLocations(p)),this.graphic.geometry=n.clone();const _=this._getVertexFromEditGeometry(e),g=o-_.pos[0],G=h-_.pos[1];this._editGeometryOperations.moveVertices([_],g,G,0),r&&(this._mover?this._mover.updateGeometry(this._mover.graphics.indexOf(e),t):e.geometry=t)}}_moveRelatedCoordinates(e,t,i,s){const{relatedGraphicIndices:r}=t.attributes;for(const n of r){const o=this.vertexGraphics.getItemAt(n),{pathIndex:h,pointIndex:c}=o.attributes;e[h][c]=[i,s],o.geometry=t.geometry}return e}_moveSelectedHandleCoordinates(e,t,i,s,r){for(const n of this.selectedVertices)if(n!==t){const{pathIndex:o,pointIndex:h,relatedGraphicIndices:c}=n.attributes,a=Q(n.geometry,i,s,this.view),p=e[o].length-1;e[o][h]=[a.x,a.y],n.geometry=a,r&&(h===0?e[o][p]=[a.x,a.y]:h===p&&(e[o][0]=[a.x,a.y]));for(const l of c){const _=this.vertexGraphics.getItemAt(l),{pathIndex:g,pointIndex:G}=_.attributes;e[g][G]=[a.x,a.y],_.geometry=a}}return e}_onGraphicPointerOverCallback(e){const t=e.graphic;this._isVertex(t)&&!this._isSelected(t)&&(t.symbol=this.symbols.vertices.hover),this._updateHoverCursor(t)}_onGraphicPointerOutCallback(e){const t=e.graphic;this._isVertex(t)&&!this._isSelected(t)&&(t.symbol=this.symbols.vertices.default),this.view.cursor="default"}_createVertexFromMidpoint(e){const{_graphicAttributes:t,graphic:i}=this,s=i.geometry;if(V(s)||s.type!=="polygon"&&s.type!=="polyline")return[];const r=s.clone(),n=[],{pathIndex:o,pointIndexStart:h,pointIndexEnd:c}=e.attributes,{x:a,y:p}=e.geometry,l=c===0?h+1:c,_=M(r);return _[o].splice(l,0,[a,p]),e.attributes={...t,pathIndex:o,pointIndex:l,relatedGraphicIndices:[]},n.push({coordinates:_[o][l],componentIndex:o,vertexIndex:l}),this.graphic.geometry=r,n}_addToSelection(e){e instanceof u&&(e=[e]);for(const t of e)t.symbol=this.symbols.vertices.selected;this._set("selectedVertices",this.selectedVertices.concat(e)),this._emitSelectEvent(e)}_removeFromSelection(e,t){const{vertices:i}=this.symbols,s=t?i.hover:i.default;e instanceof u&&(e=[e]);for(const r of e)this.selectedVertices.splice(this.selectedVertices.indexOf(r),1),this._set("selectedVertices",this.selectedVertices),r.set("symbol",s);this._emitDeselectEvent(e)}_clearSelection(){if(this.selectedVertices.length){const e=this.selectedVertices;for(const t of this.selectedVertices)t.set("symbol",this.symbols.vertices.default);this._set("selectedVertices",[]),this._emitDeselectEvent(e)}}_keyDownHandler(e){j.delete.includes(e.key)&&!e.repeat&&this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_removeVertices(e){const t=this.graphic.geometry;if(V(t)||t.type!=="polygon"&&t.type!=="polyline"||t.type==="polygon"&&this.vertexGraphics.length<4||this.vertexGraphics.length<3)return;e instanceof u&&(e=[e]);const i=this.graphic.clone(),s=t.clone();let r=M(s);const n=[];e instanceof u&&(e=[e]);for(const o of e){const{x:h,y:c}=o.geometry;for(let a=0;a<r.length;a++){const p=r[a];for(let l=0;l<p.length;l++){const[_,g]=p[l];h===_&&c===g&&(n.push({coordinates:r[a][l],componentIndex:a,vertexIndex:l}),r[a].splice(Number(l),1))}}}if(s.type==="polygon")r=r.filter(o=>{if(o.length<2)return!1;const[h,c]=o[0],[a,p]=o[o.length-1];return(o.length!==2||h!==a||c!==p)&&(h===a&&c===p||o.push(o[0]),!0)}),s.rings=r;else{for(const o of r)o.length===1&&r.splice(r.indexOf(o),1);s.paths=r}this.graphic.geometry=s,this.refresh(),this._emitVertexRemoveEvent(e,i,n)}_isVertex(e){return this.vertexGraphics.includes(e)}_isSelected(e){return this._isVertex(e)&&this.selectedVertices.includes(e)}_isMidpoint(e){return this.midpointGraphics.includes(e)}_updateHoverCursor(e){this.view.cursor=this._isMidpoint(e)?"copy":"move"}_emitMoveStartEvent(e,t){const i=new oe(this.graphic,e,t);this.emit("move-start",i),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(i)}_emitMoveEvent(e,t){const i=new re(this.graphic,e,t);this.emit("move",i),this.callbacks.onMove&&this.callbacks.onMove(i)}_emitMoveStopEvent(){const{totalDx:e,totalDy:t}=this._activeOperationInfo,i=new ne(this.graphic,e,t);this.emit("move-stop",i),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(i)}_emitReshapeStartEvent(e){const t=new te(this.graphic,e,this.selectedVertices);this.emit("reshape-start",t),this.callbacks.onReshapeStart&&this.callbacks.onReshapeStart(t)}_emitReshapeEvent(e){const t=new ie(this.graphic,e,this.selectedVertices);this.emit("reshape",t),this.callbacks.onReshape&&this.callbacks.onReshape(t)}_emitReshapeStopEvent(e){const t=new se(this.graphic,e,this.selectedVertices);this.emit("reshape-stop",t),this.callbacks.onReshapeStop&&this.callbacks.onReshapeStop(t)}_emitSelectEvent(e){const t=new ae(e);this.emit("select",t),this.callbacks.onVertexSelect&&this.callbacks.onVertexSelect(t)}_emitDeselectEvent(e){const t=new he(e);this.emit("deselect",t),this.callbacks.onVertexDeselect&&this.callbacks.onVertexDeselect(t)}_emitVertexAddEvent(e,t,i){const s=new ce(e,this.graphic,t,i);this.emit("vertex-add",s),this.callbacks.onVertexAdd&&this.callbacks.onVertexAdd(s)}_emitVertexRemoveEvent(e,t,i){const s=new pe(e,this.graphic,t,i);this.emit("vertex-remove",s),this.callbacks.onVertexRemove&&this.callbacks.onVertexRemove(s)}_logGeometryTypeError(){le.error(new q("reshape:invalid-geometry","Reshape operation not supported for the provided graphic. The geometry type is not supported."))}};v([m()],d.prototype,"callbacks",void 0),v([m()],d.prototype,"enableMidpoints",void 0),v([m()],d.prototype,"enableMovement",void 0),v([m()],d.prototype,"enableVertices",void 0),v([m()],d.prototype,"graphic",void 0),v([m({value:!0})],d.prototype,"highlightsEnabled",null),v([m()],d.prototype,"layer",void 0),v([m({readOnly:!0})],d.prototype,"midpointGraphics",void 0),v([m()],d.prototype,"midpointSymbol",void 0),v([m({readOnly:!0})],d.prototype,"selectedVertices",void 0),v([m()],d.prototype,"snappingManager",void 0),v([m({readOnly:!0})],d.prototype,"state",null),v([m({value:k})],d.prototype,"symbols",null),v([m({readOnly:!0})],d.prototype,"type",void 0),v([m({readOnly:!0})],d.prototype,"vertexGraphics",void 0),v([m()],d.prototype,"view",void 0),d=v([B(R)],d);const Se=d;export{Se as default};
