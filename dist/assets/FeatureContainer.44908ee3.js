import{cV as k,fq as re,fr as ae,ea as ne,ei as oe,eC as he,eg as de,cU as ue,l as p,w as _,ai as le,f2 as A,ey as f,ag as D,b5 as c,s as j,eE as H,f3 as ce,fs as x,cO as X,cG as Z,cH as J,cN as W,cy as ee,d0 as _e,an as O,d3 as pe,d4 as Ee,cu as xe,dZ as fe,cT as g,ft as Re,dg as ge,fu as ve}from"./index.f5fb6b4d.js";import{o as L,c as te,P as N,B as I,C as U,D as $,E as q,F as z,G as C,H as B,M as me,O as Te,N as be,R as ye}from"./definitions.8fc39ccc.js";import{n as Se,l as ke,f as Y}from"./visualVariablesUtils.7c48bcc0.js";import{m as T,l as ze,J as K,Q as G}from"./Utils.cfa3e151.js";import{o as Ce}from"./TileContainer.0413ca01.js";import{e as we,c as Me}from"./utils.8844d0fd.js";class De{acquire(e){return{refCount:1,version:-1,labelMat2d:k(),tileMat3:k(),dvs:k()}}release(e){}}class y extends re{constructor(e,t,s){super(e,t,s,L,L)}destroy(){super.destroy(),this._transforms&&y.TransformCache.release(this.key.hash)}setTransform(e,t){const s=t/(e.resolution*e.pixelRatio),i=this.transforms.tileMat3,[r,n]=e.toScreenNoRotation([0,0],[this.x,this.y]),o=this.width/this.rangeX*s,a=this.height/this.rangeY*s;ae(i,o,0,0,0,a,0,r,n,1),ne(this.transforms.dvs,e.displayViewMat3,i);const d=this.transforms.labelMat2d,u=e.getScreenTransform(d,t),l=ue();oe(l,[this.x,this.y],u),he(d,l),de(d,e.viewMat2d,d)}_createTransforms(){return y.TransformCache.acquire(this.key.hash)}}y.TransformCache=new De;const b=2147483647;class R{constructor(e){this._head=e,this._cursor=e}static from(e,t=0,s=e.byteLength/h.BYTES_PER_RECORD-t){const i=new h(new Int32Array(e,t*h.BYTES_PER_RECORD,s*h.ELEMENTS_PER_RECORD));return new R(i)}size(){let e=this._cursor,t=0;for(;e;)t+=e.size(),e=e._link;return t}get id(){return this._cursor.id}set id(e){this._cursor.id=e}get materialKey(){return this._cursor.materialKey}set materialKey(e){this._cursor.materialKey=e}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(e){this._cursor.indexFrom=e}get indexCount(){return this._cursor.indexCount}set indexCount(e){this._cursor.indexCount=e}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(e){this._cursor.vertexFrom=e}get vertexCount(){return this._cursor.vertexCount}set vertexCount(e){this._cursor.vertexCount=e}get sortKey(){return this._cursor.sortKey}set sortKey(e){this._cursor.sortKey=e}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(e){let t=e;for(this._cursor=this._head;this._cursor;){const s=this._cursor.size();if(t<s)return this._cursor._index=t,!0;t-=s,this._cursor=this._cursor._link}return!1}forEach(e){const t=this.getCursor();for(;t.next();)e(t)}link(e){if(!this._head)return void(this._head=e._head);let t=this._head;for(;t._link;)t=t._link;t._link=e._head,t._link._indexStart=t._indexStart+t.size()}getCursor(){return this.copy()}lookup(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}copy(){var i;const e=new R((i=this._head)==null?void 0:i.copy());if(!e._head)return e;let t=e._head,s=e._head._link;for(;s;)t._link=s.copy(),t=s,s=t._link;return e}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){var e;return(e=this._cursor.peekId())!=null?e:this._cursor._link.peekId()}delete(e){let t=this._head,s=null;for(;t;){if(t.delete(e))return t.isEmpty()&&(p(s)&&(s._link=t._link),t===this._head&&(this._head=t._link),t===this._cursor&&(this._cursor=t._link)),!0;s=t,t=t._link}return!1}}R.ELEMENTS_PER_RECORD=te,R.BYTES_PER_RECORD=R.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;class h{constructor(e){this._link=null,this._index=-1,this._indexStart=0,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=e}static from(e,t=0,s=e.byteLength/this.BYTES_PER_RECORD-t){return new h(new Int32Array(e,t*this.BYTES_PER_RECORD,s*this.ELEMENTS_PER_RECORD))}delete(e){const t=this._index,s=this.lookup(e);if(s)for(this.id=b,++this._deletedCount;this.next()&&this.id===e;)this.id=b,++this._deletedCount;return this._index=t,s}isEmpty(){return this._deletedCount===this.size()}link(e){this._link?this._link.link(e):this._link=e}lookup(e){if(_(this._offsets.instance)){this._offsets.instance=new Map;const s=this.copy();s._index=-1;let i=0;for(;s.next();)s.id!==i&&(this._offsets.instance.set(s.id,s._index),i=s.id)}if(!this._offsets.instance.has(e))return!1;const t=this._index;return this._index=this._offsets.instance.get(e),this.id!==b||(this._index=t,!1)}get id(){return this._packedRecords[this._index*h.ELEMENTS_PER_RECORD]}set id(e){this._packedRecords[this._index*h.ELEMENTS_PER_RECORD]=e}get materialKey(){return this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+1]}set materialKey(e){this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+1]=e}get insertAfter(){return this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+3]}set indexFrom(e){this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+3]=e}get indexCount(){return this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+4]}set indexCount(e){this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+4]=e}get vertexFrom(){return this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+5]}set vertexFrom(e){this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+5]=e}get vertexCount(){return this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+6]}set vertexCount(e){this._packedRecords[this._index*h.ELEMENTS_PER_RECORD+6]=e}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*h.ELEMENTS_PER_RECORD+7]}set sortKey(e){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*h.ELEMENTS_PER_RECORD+7]=e}get index(){return this._index}size(){return this._packedRecords.length/h.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===b;);return this._index<this.size()}peekId(){const e=(this._index+1)*h.ELEMENTS_PER_RECORD;return e>=this._packedRecords.length?0:this._packedRecords[e]}getCursor(){return this.copy()}copy(){const e=new h(this._packedRecords);return e._indexStart=this._indexStart,e._link=this._link,e._index=this._index,e._offsets=this._offsets,e._deletedCount=this._deletedCount,e}}h.ELEMENTS_PER_RECORD=te,h.BYTES_PER_RECORD=h.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;const P=le.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),w=Se(ke,P);class Q{constructor(e,t,s){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:i,pixelType:r,textureOnly:n}=e,o=T(r);this.shared=s,this.pixelType=r,this.size=t,this.textureOnly=n,n||(this.data=new o(c(i))),this._resetRange()}destroy(){f(this._texture,e=>e.dispose());for(const e in this._fbos)f(this._fbos[e],t=>{e==="0"&&t.detachColorTexture(),t.dispose()}),this._fbos[e]=null;this._texture=null}get _textureDesc(){return{target:_e.TEXTURE_2D,wrapMode:X.CLAMP_TO_EDGE,pixelFormat:Z.RGBA,dataType:this.pixelType,samplingMode:W.NEAREST,width:this.size,height:this.size}}setData(e,t,s){const i=Y(e),r=c(this.data),n=i*this.texelSize+t;!r||n>=r.length||(r[n]=s,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i))}getData(e,t){if(_(this.data))return null;const s=Y(e)*this.texelSize+t;return!this.data||s>=this.data.length?null:this.data[s]}getTexture(e){return O(this._texture,()=>this._initTexture(e))}getFBO(e,t=0){if(_(this._fbos[t])){const s={colorTarget:pe.TEXTURE,depthStencilTarget:Ee.NONE},i=t===0?this.getTexture(e):this._textureDesc;this._fbos[t]=new xe(e,s,i)}return this._fbos[t]}get locked(){return!(this.pixelType!==J.UNSIGNED_BYTE||!this.shared||this.textureOnly||!D("esri-atomics")||!this.data)&&Atomics.load(this.data,0)===1}get hasDirty(){const e=this.dirtyStart;return this.dirtyEnd>=e}updateTexture(e,t){if(!this.locked){try{const s=this.dirtyStart,i=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const r=c(this.data).buffer,n=this.getTexture(e),o=4,a=(s-s%this.size)/this.size,d=(i-i%this.size)/this.size,u=a,l=this.size,v=d,m=a*this.size*o,S=(l+v*this.size)*o-m,V=T(this.pixelType),se=new V(r,m*V.BYTES_PER_ELEMENT,S),ie=this.size,F=v-u+1;if(F>this.size)return void P.error(new j("mapview-webgl","Out-of-bounds index when updating AttributeData"));n.updateData(0,0,u,ie,F,se)}catch{}t()}}update(e){const{data:t,start:s,end:i}=e;if(p(t)){const r=this.data,n=s*this.texelSize;for(let o=0;o<t.length;o++){const a=1<<o%this.texelSize;e.layout&a&&(r[n+o]=t[o])}}this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,i)}resize(e,t){const s=this.size;if(this.size=t,this.textureOnly)return void(s!==this.size&&(this._lastTexture=this._texture,this._texture=null));const i=T(this.pixelType);this.destroy(),this.data=new i(c(e.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(e){const t=new ee(e,this._textureDesc,O(this.data,void 0));if(p(this._lastTexture)&&this._fbos[0]){const s=this._lastTexture.descriptor.width,i=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,n=this._lastTexture.descriptor.pixelFormat,o=this.getFBO(e),a=ze(r),d=new(T(r))(new ArrayBuffer(s*i*a*this.texelSize)),u=e.getBoundFramebufferObject(),{x:l,y:v,width:m,height:S}=e.getViewport();e.bindFramebuffer(o),o.readPixels(0,0,s,i,n,r,d),t.updateData(0,0,0,2*s,i/2,d),e.setViewport(l,v,m,S),e.bindFramebuffer(u)}return this.destroy(),this._texture=t,this._texture}}class Oe{constructor(e){this._onUpdate=e,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(e){const{blocks:t,shared:s,size:i}=e;if(this.shared=s,this.size=i,w("Initializing AttributeStoreView",e),_(this._data))this._data=A(t,r=>new Q(r,i,s));else for(let r=0;r<this._data.length;r++){const n=this._data[r],o=t[r];p(o)&&(_(n)?this._data[r]=new Q(o,i,s):n.resize(o,i))}this._initialized=!0}destroy(){f(this._data,e=>A(e,t=>t.destroy())),f(this._defaultTexture,e=>e.dispose())}isEmpty(){const e=this._data;return _(e)}isUpdating(){const e=p(this._pendingAttributeUpdate),t=e;return D("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${t}
  -> hasPendingUpdate ${e}`),t}getBlock(e){return _(this._data)?null:this._data[e]}setLabelMinZoom(e,t){this.setData(e,0,1,t)}getLabelMinZoom(e){return this.getData(e,0,1,255)}getFilterFlags(e){return this.getData(e,0,0,0)}getVVSize(e){return this.getData(e,N,0,0)}getData(e,t,s,i){if(!this._data)return 0;const r=c(this._data)[t];if(_(r))return 0;const n=r.getData(e,s);return p(n)?n:i}setData(e,t,s,i){const r=c(this._data)[t];c(r).setData(e,s,i)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(e){if(this._pendingAttributeUpdate)return void P.error(new j("mapview-webgl","Tried to update attribute data with a pending update"));const t=H();return w("AttributeStoreView Update Requested",e),this._pendingAttributeUpdate={data:e,resolver:t},t.promise}update(){if(this._initialized&&p(this._pendingAttributeUpdate)){D("esri-2d-update-debug")&&console.debug("AttributeStoreView::update");const{data:e,resolver:t}=this._pendingAttributeUpdate,s=c(this._data);for(let i=0;i<e.blocks.length;i++){const r=e.blocks[i],n=s[i];f(n,o=>f(r,a=>{w(`Updating block ${i}`,a),o.update(a)}))}this._pendingAttributeUpdate=null,t(),this._onUpdate()}}bindTextures(e,t=!0){this.update();const s=this._getDefaultTexture(e);if(!this._initialized)return e.bindTexture(s,I),void(t&&(e.bindTexture(s,U),e.bindTexture(s,$),e.bindTexture(s,q),e.bindTexture(s,z),e.bindTexture(s,C),e.bindTexture(s,B)));const i=c(this._data);this._locked&&!this._forceNextUpload||(ce(i,r=>r.updateTexture(e,()=>this._onUpdate())),this._forceNextUpload=!1),e.bindTexture(x(i[me],s,r=>r.getTexture(e)),I),t&&(e.bindTexture(x(i[Te],s,r=>r.getTexture(e)),B),e.bindTexture(x(i[be],s,r=>r.getTexture(e)),U),e.bindTexture(x(i[N],s,r=>r.getTexture(e)),$),e.bindTexture(x(i[ye],s,r=>r.getTexture(e)),q),e.bindTexture(x(i[z],s,r=>r.getTexture(e)),z),e.bindTexture(x(i[C],s,r=>r.getTexture(e)),C))}_getDefaultTexture(e){if(_(this._defaultTexture)){const t={wrapMode:X.CLAMP_TO_EDGE,pixelFormat:Z.RGBA,dataType:J.UNSIGNED_BYTE,samplingMode:W.NEAREST,width:1,height:1};this._defaultTexture=new ee(e,t,new Uint8Array(4))}return this._defaultTexture}}function M(E,e){const t=e.length;if(E<e[0].value||t===1)return e[0].size;for(let s=1;s<t;s++)if(E<e[s].value){const i=(E-e[s-1].value)/(e[s].value-e[s-1].value);return e[s-1].size+i*(e[s].size-e[s-1].size)}return e[t-1].size}class Pe{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=we}getSizeVVFieldStops(e){const t=this._vvSizeFieldStops;switch(t.type){case"static":return t;case"level-dependent":return O(t.levels[e],()=>{let s=1/0,i=0;for(const a in t.levels){const d=parseFloat(a),u=Math.abs(e-d);u<s&&(s=u,i=d)}if(s===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const r=2**((e-i)/2),n=c(t.levels[i]),o=new Float32Array(n.values);return o[2]*=r,o[3]*=r,{sizes:c(n.sizes),values:o}})}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){p(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,s){this._updateEffects(s),this._vvInfo=t,this._technique=Me(e),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,e)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:fe("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(e){p(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(e,t){const s=this._vvMaterialParameters;if(s.vvOpacityEnabled=!1,s.vvSizeEnabled=!1,s.vvColorEnabled=!1,s.vvRotationEnabled=!1,!e)return;const i=e.size;if(i){if(s.vvSizeEnabled=!0,i.minMaxValue){const a=i.minMaxValue;let d,u;if(K(a.minSize)&&K(a.maxSize))if(G(a.minSize)&&G(a.maxSize))d=g(a.minSize),u=g(a.maxSize);else{const l=t.scale;d=g(M(l,a.minSize.stops)),u=g(M(l,a.maxSize.stops))}this.vvSizeMinMaxValue.set([a.minDataValue,a.maxDataValue,d,u])}if(i.scaleStops&&(this.vvSizeScaleStopsValue=g(M(t.scale,i.scaleStops.stops))),i.unitValue){const a=Re(t.spatialReference)/ge[i.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=a/t.resolution}i.fieldStops&&(this._vvSizeFieldStops=i.fieldStops)}const r=e.color;r&&(s.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors));const n=e.opacity;n&&(s.vvOpacityEnabled=!0,this.vvOpacityValues.set(n.values),this.vvOpacities.set(n.opacities));const o=e.rotation;o&&(s.vvRotationEnabled=!0,s.vvRotationType=o.type)}}class Ue extends Ce{constructor(e){super(e),this._rendererInfo=new Pe,this._materialItemsRequestQueue=new ve,this.attributeView=new Oe(()=>this.onAttributeStoreUpdate())}destroy(){this.removeAllChildren(),this.children.forEach(e=>e.destroy()),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,s){this._rendererInfo.setInfo(e,t,s),this.requestRender()}async getMaterialItems(e,t){if(!e||e.length===0)return null;const s=H();return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:s}),this.requestRender(),s.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,{items:t,abortOptions:s,resolver:i}){const{painter:r,pixelRatio:n}=e,o=t.map(a=>r.textureManager.rasterizeItem(a.symbol,n,a.glyphIds,s));Promise.all(o).then(a=>{if(!this.stage)return void i.reject();const d=a.map((u,l)=>({id:t[l].id,mosaicItem:u}));i.resolve(d)},i.reject)}}export{y as c,R as i,Ue as o};