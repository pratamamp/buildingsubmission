import{I as l,h,b$ as g,j as w,kY as f,pL as u,pM as n,e as d,n as b}from"./index.f5fb6b4d.js";import{f as S}from"./LayerView2D.6e98822d.js";import{i as V}from"./GraphicContainer.1c0c670e.js";import{a as v}from"./BaseGraphicContainer.60fafd62.js";import{u as _}from"./LayerView.7cdf36e9.js";import"./Container.42f5d0eb.js";import"./EffectView.8649e1d9.js";import"./Utils.cfa3e151.js";import"./number.08b65821.js";import"./enums.05a6ea95.js";import"./CIMSymbolHelper.72e36123.js";import"./BidiEngine.ec67919b.js";import"./alignmentUtils.63b4d661.js";import"./definitions.8fc39ccc.js";import"./GeometryUtils.814cb798.js";import"./normalizeUtilsSync.4bd14c75.js";import"./FeatureContainer.44908ee3.js";import"./visualVariablesUtils.7c48bcc0.js";import"./visualVariablesUtils.ca0a8c45.js";import"./TileContainer.0413ca01.js";import"./WGLContainer.51623c6d.js";import"./brushes.e5622ff7.js";import"./pixelUtils.96348421.js";import"./ProgramTemplate.44984610.js";import"./MaterialKey.60c2c315.js";import"./utils.8844d0fd.js";import"./StyleDefinition.5774ff26.js";import"./GeometryUtils.8166011b.js";import"./Matcher.0bf3bd0d.js";import"./tileUtils.5efc2ea4.js";import"./TileClipper.0543f906.js";import"./Geometry.b68345ae.js";import"./cimAnalyzer.214d7b31.js";import"./ExpandedCIM.71204243.js";import"./schemaUtils.1b08168f.js";import"./createSymbolSchema.3658b6d7.js";import"./MD5.97b39efc.js";import"./util.5d34afc0.js";import"./ComputedAttributeStorage.b99ddfc9.js";import"./centroid.18ac297c.js";import"./GraphicsView.0e930102.js";let y=class extends S(_){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(t=>{const i=this._popupTemplates.get(t),s=t.hitTest(e);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=i;return s}).flat().map(t=>({type:"graphic",graphic:t,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.handles.add([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:t}of e){const i=g.fromJSON(o),s=new w(i.features),p=t.drawingInfo,c=r?f.fromJSON(r):null,a=u(p.renderer),m=new v({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new V(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=m,this._popupTemplates.set(m,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=d([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const ne=y;export{ne as default};