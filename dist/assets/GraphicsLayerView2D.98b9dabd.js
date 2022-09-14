import{i as s,j as p,e as r,g as a,n as o}from"./index.ce207a0f.js";import{f as g}from"./LayerView2D.1f6652ae.js";import{i as m}from"./GraphicContainer.f56c6c1e.js";import{a as l}from"./BaseGraphicContainer.52af9a53.js";import{u as c}from"./LayerView.77dd4a59.js";import"./Container.cfcf6621.js";import"./EffectView.c88a4e0d.js";import"./Utils.7465a4f2.js";import"./number.08b65821.js";import"./enums.05a6ea95.js";import"./CIMSymbolHelper.196421e9.js";import"./BidiEngine.ec67919b.js";import"./alignmentUtils.63b4d661.js";import"./definitions.8fc39ccc.js";import"./GeometryUtils.814cb798.js";import"./normalizeUtilsSync.6d462b8c.js";import"./FeatureContainer.968301f9.js";import"./visualVariablesUtils.bc6c49d1.js";import"./visualVariablesUtils.218c7775.js";import"./TileContainer.35ae3983.js";import"./WGLContainer.0d46658c.js";import"./brushes.f31c87da.js";import"./pixelUtils.ec04186c.js";import"./ProgramTemplate.5b362e40.js";import"./MaterialKey.861b2374.js";import"./utils.124a4cde.js";import"./StyleDefinition.5774ff26.js";import"./GeometryUtils.8166011b.js";import"./Matcher.217ee1b6.js";import"./tileUtils.1ae0492f.js";import"./TileClipper.580aea8c.js";import"./Geometry.b68345ae.js";import"./cimAnalyzer.f3fa7790.js";import"./ExpandedCIM.390d9afb.js";import"./schemaUtils.1b0be3b6.js";import"./createSymbolSchema.a48d8e59.js";import"./MD5.97b39efc.js";import"./util.f7153bf4.js";import"./ComputedAttributeStorage.d6a5d9e8.js";import"./centroid.e2697b30.js";import"./GraphicsView.f49894c8.js";const n={remove(){},pause(){},resume(){}};let h=class extends g(c){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new l({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new m(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.graphicsView=null,this.handles.remove("graphicslayerview2d")}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate)}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;return typeof i=="number"?t=[i]:i instanceof s?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(e=>e&&e.uid):p.isCollection(i)&&i.length>0&&(t=i.map(e=>e&&e.uid).toArray()),t=t==null?void 0:t.filter(e=>e!=null),t.length?(this._addHighlight(t),{remove:()=>this._removeHighlight(t)}):n}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};r([a()],h.prototype,"graphicsView",void 0),h=r([o("esri.views.2d.layers.GraphicsLayerView2D")],h);const ti=h;export{ti as default};