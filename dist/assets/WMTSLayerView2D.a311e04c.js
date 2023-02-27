import{ai as w,pF as g,pG as I,pH as S,I as T,ex as f,H as h,iz as d,e as n,g as m,n as v}from"./index.f5fb6b4d.js";import{r as V,n as y}from"./imageUtils.3932c59a.js";import{f as x}from"./LayerView2D.6e98822d.js";import{u as M}from"./LayerView.7cdf36e9.js";import{i as q}from"./RefreshableLayerView.b2ca769b.js";import"./BitmapTileContainer.d6511bb6.js";import"./Bitmap.f5a93781.js";import"./brushes.e5622ff7.js";import"./pixelUtils.96348421.js";import"./definitions.8fc39ccc.js";import"./Utils.cfa3e151.js";import"./number.08b65821.js";import"./enums.05a6ea95.js";import"./ProgramTemplate.44984610.js";import"./MaterialKey.60c2c315.js";import"./alignmentUtils.63b4d661.js";import"./utils.8844d0fd.js";import"./StyleDefinition.5774ff26.js";import"./GeometryUtils.8166011b.js";import"./TileContainer.0413ca01.js";import"./WGLContainer.51623c6d.js";import"./Container.42f5d0eb.js";import"./EffectView.8649e1d9.js";const R=[102113,102100,3857,3785,900913],Q=[0,0],b=w.getLogger("esri.views.2d.layers.WMTSLayerView2D");let r=class extends q(V(x(M))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){if(!this.tileMatrixSet)return;const{tileInfo:e}=this.tileMatrixSet;this._tileInfoView=new g(e),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:16,process:(t,i)=>this.fetchTile(t,i)}),this._tileStrategy=new S({cachePolicy:"keep",resampling:!0,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.handles.add(T(()=>{var t,i;return[(i=(t=this.layer)==null?void 0:t.activeLayer)==null?void 0:i.styleId,this.tileMatrixSet]},()=>this._refresh()),this.declaredClass),super.attach()}detach(){var e,t;super.detach(),this.handles.remove(this.declaredClass),(e=this._tileStrategy)==null||e.destroy(),(t=this._fetchQueue)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(Q,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){this.updateRequested||this.suspended||this._refresh()}isUpdating(){var e,t;return(t=(e=this._fetchQueue)==null?void 0:e.updating)!=null?t:!1}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:o=0}=t;if(!i)return this._fetchImage(e,s);const a=new f(0,0,0,0);let u;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,a,{signal:s}),u=await this._fetchImage(a,s)}catch(l){if(h(l))throw l;if(o<3){const c=this._tileInfoView.getTileParentId(e.id);if(c){const p=new f(c),_=await this.fetchTile(p,{...t,resamplingLevel:o+1});return y(this._tileInfoView,_,p,e)}}throw l}return y(this._tileInfoView,u,a,e)}canResume(){const e=super.canResume();return e&&this.tileMatrixSet!==null}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets.some(t=>d(t.tileInfo.spatialReference,e))}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){h(t)||b.error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then(i=>{e.bitmap.source=i}).catch(i=>{h(i)||(e.bitmap.source=null)}).finally(()=>{e.requestRender(),t.fulfilled=!0})};this._tileRequests.set(e,t)})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find(s=>d(s.tileInfo.spatialReference,t));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(s=>R.includes(s.tileInfo.spatialReference.wkid))),i}};n([m()],r.prototype,"_fetchQueue",void 0),n([m({readOnly:!0})],r.prototype,"tileMatrixSet",null),r=n([v("esri.views.2d.layers.WMTSLayerView2D")],r);const ee=r;export{ee as default};