import{$ as p,a0 as f,a1 as g,f as y,c_ as I,r as v,dq as V,dr as T,ds as q,dt as Q,R as S,du as b,dv as F,p as m,bo as d,s as U}from"./index.52935b46.js";import{r as x,o as w,n as _}from"./imageUtils.92c7006d.js";import{f as C}from"./LayerView2D.9ada509f.js";import{u as R}from"./LayerView.5d769fe2.js";import{i as P}from"./RefreshableLayerView.1b2a9213.js";import"./BitmapTileContainer.da95e958.js";import"./Bitmap.a95cf8d5.js";import"./utils.88e80f44.js";import"./EffectView.d573d8e0.js";import"./Utils.e2c1ea7d.js";import"./number.08b65821.js";import"./enums.05a6ea95.js";import"./enums.de935fa5.js";import"./Texture.7634927e.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.60b69a2c.js";import"./alignmentUtils.63b4d661.js";import"./definitions.6dca4f7b.js";import"./TileContainer.16d059f5.js";import"./WGLContainer.3dee497f.js";import"./pixelUtils.2d74e066.js";import"./VertexArrayObject.b7add78f.js";import"./vec4f32.8f10672a.js";import"./ProgramTemplate.a2b1ea90.js";import"./StyleDefinition.5774ff26.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";const k=e=>{let t=class extends e{async fetchPopupFeatures(s,a){const{layer:l}=this;if(!s)throw new y("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:l});if(l.type!=="tile")throw new y("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:l.type});const h=this.get("view.scale"),o=l.allSublayers.toArray().filter(i=>{const r=i.minScale===0||h<=i.minScale,n=i.maxScale===0||h>=i.maxScale;return i.popupTemplate&&i.popupEnabled&&i.visible&&r&&n});return I(o.map(async i=>{const r=i.createQuery(),n=v(a)?a.event:null,c=V({renderer:i.renderer,event:n});return r.geometry=this.createFetchPopupFeaturesQueryGeometry(s,c),r.outFields=await i.popupTemplate.getRequiredFields(),(await i.queryFeatures(r)).features})).then(i=>[].concat(...i.map(r=>r.value).filter(Boolean)))}};return p([f()],t.prototype,"layer",void 0),t=p([g("esri.layers.mixins.TileLayerView")],t),t},E=[0,0];let u=class extends k(P(x(C(R)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new T(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new q({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(t,s)=>this.fetchTile(t,s)}),this._tileStrategy=new Q({cachePolicy:"keep",resampling:this.resampling,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add(S(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t;return b((t=this.layer.tileInfo)==null?void 0:t.spatialReference,e)}createFetchPopupFeaturesQueryGeometry(e,t){return F(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>this._enqueueTileFetch(e)))}isUpdating(){var e,t;return(t=(e=this._fetchQueue)==null?void 0:e.updating)!=null?t:!1}acquireTile(e){const t=this._bitmapView.createTile(e),s=t.bitmap;return[s.x,s.y]=this._tileInfoView.getTileCoords(E,t.key),s.resolution=this._tileInfoView.getTileResolution(t.key),[s.width,s.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const s="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:a,resamplingLevel:l=0}=t;if(!s)try{return await this._fetchImage(e,a)}catch(i){if(!m(i)&&!this.resampling)return w(this._tileInfoView.tileInfo.size);if(l<3){const r=this._tileInfoView.getTileParentId(e.id);if(r){const n=new d(r),c=await this.fetchTile(n,{...t,resamplingLevel:l+1});return _(this._tileInfoView,c,n,e)}}throw i}const h=new d(0,0,0,0);let o;try{if(await s.fetchAvailabilityUpsample(e.level,e.row,e.col,h,{signal:a}),h.level!==e.level&&!this.resampling)return w(this._tileInfoView.tileInfo.size);o=await this._fetchImage(h,a)}catch(i){if(m(i))throw i;o=await this._fetchImage(e,a)}return this.resampling?_(this._tileInfoView,o,h,e):o}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){m(t)||U.getLogger(this.declaredClass).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}};p([f()],u.prototype,"_fetchQueue",void 0),p([f()],u.prototype,"resampling",null),u=p([g("esri.views.2d.layers.TileLayerView2D")],u);const ue=u;export{ue as default};