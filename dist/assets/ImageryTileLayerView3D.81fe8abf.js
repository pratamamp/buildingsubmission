import{s as c,aT as g,b5 as u,w as p,l8 as f,g1 as b,dZ as I,e as o,g as h,n as w}from"./index.ce207a0f.js";import{n as T}from"./LayerView3D.a40b21a8.js";import{c as R}from"./TiledLayerView3D.0ddcfe97.js";import{m as v}from"./ImageryTileLayerView.24695da9.js";import{u as z}from"./LayerView.77dd4a59.js";import{i as S}from"./RefreshableLayerView.1651caec.js";import"./rasterProjectionHelper.001cd3c2.js";import"./popupUtils.9aa40f63.js";let s=class extends v(S(R(T(z)))){constructor(){super(...arguments),this.type="imagery-tile-3d",this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage(),this.fullExtent==null&&this.addResolvingPromise(Promise.reject(new c("layerview:spatial-reference-incompatible","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})));const e=g(()=>{var t,i;return(i=(t=this.view)==null?void 0:t.basemapTerrain)==null?void 0:i.tilingSchemeLocked}).then(()=>{const t=this.view.basemapTerrain.tilingScheme,{tileInfo:i}=this.layer,r=["png","png24","png32","jpg","mixed"].includes(i.format)&&t.compatibleWith(i);this.isAlignedMapTile=r;const l=r?i:t.toTileInfo();this.tileInfo=l,this.updatingHandles.add(()=>[this.layer.renderer,this.layer.interpolation,this.layer.bandIds,this.layer.multidimensionalDefinition],()=>this.refresh())});this.addResolvingPromise(e)}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null}get _blankTile(){const e=document.createElement("canvas"),t=e.getContext("2d"),[i,r]=this.tileInfo.size;return e.width=i,e.height=r,t.clearRect(0,0,i,r),t.getImageData(0,0,i,r)}get imageFormatIsOpaque(){return this.layer.tileInfo.format==="jpg"}get hasMixedImageFormats(){return this.layer.tileInfo.format==="mixed"}get dataLevelRange(){const e=this.tileInfo.lods,t=this.layer.tileInfo.lods,i=e[0].scale,r=t[t.length-1].scale;return this.levelRangeFromScaleRange(i,r)}_getfullExtent(){return this.projectFullExtent(this.view.basemapTerrain&&this.view.basemapTerrain.spatialReference!==null?this.view.basemapTerrain.spatialReference:this.view.spatialReference)}async fetchTile(e,t,i,r){const l=this.tileInfo,d=this._canSymbolizeInWebGL(),y={tileInfo:l,requestRawData:d,signal:u(r.signal),requestAsImageElement:this.isAlignedMapTile},n=await this.layer.fetchTile(e,t,i,y);if(n instanceof HTMLImageElement)return n;let m=n&&n.pixelBlock;if(p(m))return this._blankTile;if(!d&&(m=await this.layer.applyRenderer(n),p(m)))return this._blankTile;const a=new f([e,t,i],m,l.size[0],l.size[1]);return d?(a.symbolizerRenderer=this.layer.symbolizer.rendererJSON,a.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e)),a.transformGrid=n.transformGrid):a.isRendereredSource=!0,a.interpolation=this.layer.interpolation,a.bandIds=this.layer.bandIds,a}_getSymbolizerOptions(e){const t=this.tileInfo.lodAt(e).resolution;return{pixelBlock:null,isGCS:this.view.basemapTerrain?this.view.basemapTerrain.spatialReference.isGeographic:this.view.spatialReference.isGeographic,resolution:{x:t,y:t},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(e){this._canSymbolizeInWebGL()&&JSON.stringify(e.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(e.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e.lij[0])))}createFetchPopupFeaturesQueryGeometry(e,t){return b(e,t,this.view)}refresh(){this.emit("data-changed")}async doRefresh(){this.suspended||this.emit("data-changed")}_canSymbolizeInWebGL(){return I("3d").supportsTextureFloat&&this.layer.symbolizer.canRenderInWebGL}};o([h({readOnly:!0})],s.prototype,"_blankTile",null),o([h({readOnly:!0})],s.prototype,"imageFormatIsOpaque",null),o([h({readOnly:!0})],s.prototype,"hasMixedImageFormats",null),o([h({readOnly:!0})],s.prototype,"dataLevelRange",null),s=o([w("esri.views.3d.layers.ImageryTileLayerView3D")],s);const k=s;export{k as default};