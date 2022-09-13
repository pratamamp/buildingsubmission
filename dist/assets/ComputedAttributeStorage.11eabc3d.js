import{e as _,r as l,bN as B,bO as P,t as d,L as H,au as Y,bP as Z,bQ as J,bR as Q,bS as g,bT as X,bU as V,s as q,bV as W,bh as K,p as N,f as D,bW as tt,bX as et,al as st,bY as rt,K as it,h as f,W as nt}from"./index.52935b46.js";import{e as at}from"./centroid.296f6ecc.js";import{S as ot,T as ht,P as ut,w as k,N as dt,O as ct}from"./definitions.6dca4f7b.js";import{c as lt,u as _t,f as y,e as ft,i as gt,n as pt,l as mt,r as yt,s as O,a as h}from"./visualVariablesUtils.53aa19cb.js";import{m as bt}from"./Utils.e2c1ea7d.js";import{G as p}from"./enums.de935fa5.js";class x{constructor(t,e){this._mask=0,this._buf=t,this._mask=e}static fromBuffer(t,e){return new x(t,e)}static create(t,e=4294967295){const s=new Uint32Array(Math.ceil(t/32));return new x(s,e)}_getIndex(t){return Math.floor(t/32)}has(t){const e=this._mask&t;return!!(this._buf[this._getIndex(e)]&1<<e%32)}hasRange(t,e){let s=t,r=e;for(;s%32&&s!==r;){if(this.has(s))return!0;s++}for(;r%32&&s!==r;){if(this.has(s))return!0;r--}if(s===r)return!1;for(let i=s/32;i!==r/32;i++)if(this._buf[i])return!0;return!1}set(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]|=r}setRange(t,e){let s=t,r=e;for(;s%32&&s!==r;)this.set(s++);for(;r%32&&s!==r;)this.set(r--);if(s!==r)for(let i=s/32;i!==r/32;i++)this._buf[i]=4294967295}unset(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]&=4294967295^r}resize(t){const e=this._buf,s=new Uint32Array(Math.ceil(t/32));s.set(e),this._buf=s}or(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=t._buf[e];return this}and(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=t._buf[e];return this}xor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=t._buf[e];return this}ior(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=~t._buf[e];return this}iand(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=~t._buf[e];return this}ixor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=~t._buf[e];return this}any(){for(let t=0;t<this._buf.length;t++)if(this._buf[t])return!0;return!1}copy(t){for(let e=0;e<this._buf.length;e++)this._buf[e]=t._buf[e];return this}clone(){return new x(this._buf.slice(),this._mask)}clear(){for(let t=0;t<this._buf.length;t++)this._buf[t]=0}forEachSet(t){for(let e=0;e<this._buf.length;e++){let s=this._buf[e],r=32*e;if(s)for(;s;)1&s&&t(r),s>>>=1,r++}}countSet(){let t=0;return this.forEachSet(e=>{t++}),t}}let S=0;var R;const F=(R=_("featurelayer-simplify-thresholds"))!=null?R:[.5,.5,.5,.5],xt=F[0],It=F[1],St=F[2],At=F[3];var $;const E=($=_("featurelayer-simplify-payload-size-factors"))!=null?$:[1,2,4],Tt=E[0],zt=E[1],Ct=E[2];var G;const Ft=(G=_("featurelayer-simplify-mobile-factor"))!=null?G:2,wt=_("esri-mobile");class v{constructor(t,e){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this.instance=t,this._layerSchema=e}static createInstance(){return S++,S=S>65535?0:S,S}get isEmpty(){return l(this._deleted)&&this._deleted.countSet()===this.getSize()}set level(t){this._level=t}getAreaSimplificationThreshold(t,e){let s=1;const r=wt?Ft:1;e>4e6?s=Ct*r:e>1e6?s=zt*r:e>5e5?s=Tt*r:e>1e5&&(s=r);let i=0;t>4e3?i=At*s:t>2e3?i=St*s:t>100?i=It:t>15&&(i=xt);let n=8;return this._level<4?n=1:this._level<5?n=2:this._level<6&&(n=4),i*n}setArcadeSpatialReference(t){this._arcadeSpatialReference=t}attachStorage(t){this._storage=t}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(t){return this.getComputedNumericAtIndex(0)}setComputedNumeric(t,e){return this.setComputedNumericAtIndex(e,0)}getComputedString(t){return this.getComputedStringAtIndex(0)}setComputedString(t,e){return this.setComputedStringAtIndex(0,e)}getComputedNumericAtIndex(t){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),t)}setComputedNumericAtIndex(t,e){this._storage.setComputedNumericAtIndex(this.getDisplayId(),t,e)}getComputedStringAtIndex(t){return this._storage.getComputedStringAtIndex(this.getDisplayId(),t)}setComputedStringAtIndex(t,e){return this._storage.setComputedStringAtIndex(this.getDisplayId(),t,e)}transform(t,e,s,r){const i=this.copy();return i._tx+=t,i._ty+=e,i._sx*=s,i._sy*=r,i}readAttribute(t,e=!1){const s=this._readAttribute(t,e);if(s!==void 0)return s;for(const r of this._joined){r.setIndex(this.getIndex());const i=r._readAttribute(t,e);if(i!==void 0)return i}}readAttributes(){const t=this._readAttributes();for(const e of this._joined){e.setIndex(this.getIndex());const s=e._readAttributes();for(const r of Object.keys(s))t[r]=s[r]}return t}joinAttributes(t){this._joined.push(t)}readArcadeFeature(){return this}geometry(){const t=this.readHydratedGeometry(),e=B(t,this.geometryType,this.hasZ,this.hasM),s=P(e);return s&&(s.spatialReference=this._arcadeSpatialReference),s}field(t){if(this.hasField(t))return this.readAttribute(t,!0);for(const e of this._joined)if(e.setIndex(this.getIndex()),e.hasField(t))return e._readAttribute(t,!0);throw new Error(`Field ${t} does not exist`)}setField(t,e){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.getFieldNames()}castToText(){return JSON.stringify(this.readLegacyFeature())}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(t=null){return{attributes:this._readAttributes(),geometry:(t==null?void 0:t.keepGeometryType)===!0?this.geometry():this.geometry().toJSON()}}castAsJsonAsync(t=null,e=null){return Promise.resolve(this.castAsJson(e))}removeIds(t){if(d(this._objectIdToIndex)){const s=new Map,r=this.getCursor();for(;r.next();)s.set(r.getObjectId(),r.getIndex());this._objectIdToIndex=s}const e=this._objectIdToIndex;for(const s of t)e.has(s)&&this.removeAtIndex(e.get(s))}removeAtIndex(t){d(this._deleted)&&(this._deleted=x.create(this.getSize())),this._deleted.set(t)}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const t=this.getCursor();for(;t.next();)yield t.readOptimizedFeature()}_getExists(){return d(this._deleted)||!this._deleted.has(this.getIndex())}_computeCentroid(){if(this.geometryType!=="esriGeometryPolygon")return null;const t=this.readUnquantizedGeometry();if(!t||t.hasIndeterminateRingOrder)return null;const e=H(this.getQuantizationTransform(),null);return at(new Y,t,this.hasM,this.hasZ,e)}copyInto(t){t.seen=this.seen,t._storage=this._storage,t._arcadeSpatialReference=this._arcadeSpatialReference,t._joined=this._joined,t._tx=this._tx,t._ty=this._ty,t._sx=this._sx,t._sy=this._sy,t._deleted=this._deleted,t._objectIdToIndex=this._objectIdToIndex}}function Dt({coords:u,lengths:t}){let e=0;for(const s of t){for(let r=1;r<s;r++)u[2*(e+r)]+=u[2*(e+r)-2],u[2*(e+r)+1]+=u[2*(e+r)-1];e+=s}}class m extends v{constructor(t,e,s){super(t,s),this._featureIndex=-1,this._dateFields=new Set,this._geometryType=s==null?void 0:s.geometryType,this._features=e}static fromFeatures(t,e){const{objectIdField:s,geometryType:r}=e,i=Z([],t,r,!1,!1,s);for(let n=0;n<i.length;n++)i[n].displayId=t[n].displayId;return m.fromOptimizedFeatures(i,e)}static fromFeatureSet(t,e){const s=J(t,e.objectIdField);return m.fromOptimizedFeatureSet(s,e)}static fromOptimizedFeatureSet(t,e){const{features:s}=t,r=m.fromOptimizedFeatures(s,e);r._exceededTransferLimit=t.exceededTransferLimit,r._transform=t.transform;for(const i of t.fields)i.type==="esriFieldTypeDate"&&r._dateFields.add(i.name);return r}static fromOptimizedFeatures(t,e,s){const r=v.createInstance(),i=new m(r,t,e);return i._transform=s,i}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(t){const e=new Set(t);this._features=this._features.filter(s=>!e.has(s.objectId))}append(t){for(const e of t)this._features.push(e)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t}getObjectId(){return this._current.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t}copy(){const t=new m(this.instance,this._features,this.fullSchema());return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return Q(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readGeometry();return B(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return d(t)?null:{x:t.coords[0]*this._sx+this._tx,y:t.coords[1]*this._sy+this._ty}}readGeometryArea(){return g(this._current)?X(this._current.geometry,2):0}readUnquantizedGeometry(){const t=this.readGeometry();if(this.geometryType==="esriGeometryPoint"||!t)return t;const e=t.clone();return Dt(e),e}readHydratedGeometry(){const t=this._current.geometry;if(d(t))return null;const e=t.clone();return l(this._transform)&&V(e,e,this.hasZ,this.hasM,this._transform),e}getXHydrated(){if(!g(this._current))return 0;const t=this._current.geometry.coords[0],e=this.getQuantizationTransform();return d(e)?t:t*e.scale[0]+e.translate[0]}getYHydrated(){if(!g(this._current))return 0;const t=this._current.geometry.coords[1],e=this.getQuantizationTransform();return d(e)?t:e.translate[1]-t*e.scale[1]}getX(){return g(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return g(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!g(this._current))return null;const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const s of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=s;return t}readCentroid(){if(!g(this._current))return null;if(d(this._current.centroid)){const e=this._computeCentroid();if(d(e))return null;e.coords[0]=(e.coords[0]-this._tx)/this._sx,e.coords[1]=(e.coords[1]-this._ty)/this._sy,this._current.centroid=e}const t=this._current.centroid.clone();return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sx+this._ty,t}hasField(t){return t in this._current.attributes?!0:this.getFieldNames().map(e=>e.toLowerCase()).includes(t.toLowerCase())}getFieldNames(){return Object.keys(this._current.attributes)}_readAttribute(t,e){const s=this._current.attributes[t];if(s!==void 0)return s!=null&&e&&this._dateFields.has(t)?new Date(s):s;const r=this.readAttributes(),i=t.toLocaleLowerCase().trim();for(const n in r)if(n.toLocaleLowerCase().trim()===i){const a=this._current.attributes[n];return a!=null&&e&&this._dateFields.has(n)?new Date(a):a}}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._dateFields=this._dateFields}_readAttributes(){return this._current.attributes}}const b=q.getLogger("esri.views.layers.2d.features.support.AttributeStore"),z=pt(mt,b),A={sharedArrayBuffer:_("esri-shared-array-buffer"),atomics:_("esri-atomics")};function U(u,t){return e=>t(u(e))}class Et{constructor(t,e,s,r){this.size=0,this.texelSize=4;const{pixelType:i,layout:n,textureOnly:a}=r;this.textureOnly=a||!1,this.pixelType=i,this._ctype=e,this.layout=n,this._resetRange(),this._shared=t,this.size=s,a||(this.data=this._initData(i,s,t,e))}get buffer(){return it(this.data,t=>t.buffer)}unsetComponentAllTexels(t,e){const s=f(this.data);for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(t,e){const s=f(this.data);for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(t,e,s){const r=f(this.data);for(const i of s)r[i*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}setComponentTexel(t,e,s){f(this.data)[s*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}unsetComponentTexel(t,e,s){f(this.data)[s*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}getData(t,e){const s=y(t);return f(this.data)[s*this.texelSize+e]}setData(t,e,s){const r=y(t),i=1<<e;(this.layout&i)!=0?(this.data[r*this.texelSize+e]=s,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)):b.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===p.UNSIGNED_BYTE&&this._shared&&A.atomics&&this._ctype!=="local"&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===p.UNSIGNED_BYTE&&this._shared&&A.atomics&&this._ctype!=="local"&&Atomics.store(this.data,0,0)}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),s=f(this.data);e.set(s),this.data=e}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,s=this.texelSize;if(t>e)return null;this._resetRange();const r=!(this._shared||this._ctype==="local"),i=this.pixelType,n=this.layout,a=f(this.data);return{start:t,end:e,data:r&&a.slice(t*s,(e+1)*s)||null,pixelType:i,layout:n}}_initData(t,e,s,r){const i=s&&r!=="local"?SharedArrayBuffer:ArrayBuffer,n=bt(t),a=new n(new i(e*e*4*n.BYTES_PER_ELEMENT));for(let o=0;o<a.length;o+=4)a[o+1]=255;return a}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class Gt{constructor(t,e,s=()=>{}){this._client=t,this.config=e,this._notifyChange=s,this._attributeComputeMap=new Map,this._blocks=new Array,this._filters=new Array(ot),this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._idsToHighlight=new Set;const r=e.supportsTextureFloat?p.FLOAT:p.UNSIGNED_BYTE;z(`Creating AttributeStore ${A.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:p.UNSIGNED_BYTE,layout:1},{pixelType:p.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:p.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:r,layout:15},{pixelType:r,layout:15},{pixelType:r,layout:15},{pixelType:r,layout:15}],this._blocks=this._blockDescriptors.map(()=>null)}destroy(){this._abortController.abort()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}isUpdating(){return!!this._currUpdate||!!this._nextUpdate}update(t,e){this.config=e;const s=e.schema.processors[0].storage,r=W(this._schema,s);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),r&&(_("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",r),t.storage.data=!0,this._schema=s,this._attributeComputeMap.clear(),!d(s))){switch(s.target){case"feature":this._targetType=_t;break;case"aggregate":this._targetType=lt}if(s.type==="subtype")for(const i in s.mapping){const n=s.mapping[i];if(l(n)&&l(n.vvMapping))for(const a of n.vvMapping)this._bindAttribute(a)}else{if(l(s.vvMapping))for(const i of s.vvMapping)this._bindAttribute(i);if(l(s.attributeMapping))for(const i of s.attributeMapping)this._bindAttribute(i)}}}onTileData(t,e){if(d(e.addOrUpdate))return;const s=e.addOrUpdate.getCursor();for(;s.next();){const r=s.getDisplayId();this.setAttributeData(r,s)}}invalidateResources(){this._createResourcesPromise=null,this._abortController.abort(),this._abortController=new AbortController}async setHighlight(t,e){const r=this._getBlock(0),i=e.map(n=>y(n));r.lock(),r.unsetComponentAllTexels(0,1),r.setComponent(0,1,i),r.unlock(),this._idsToHighlight.clear();for(const n of t)this._idsToHighlight.add(n);await this.sendUpdates()}async updateFilters(t,e,s){const{service:r,spatialReference:i}=s,{filters:n}=e,a=n.map((o,c)=>this._updateFilter(o,c,r,i));(await Promise.all(a)).some(o=>o)&&(t.storage.filters=!0,_("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(t,e,s,r){const i=y(t);this._ensureSizeForTexel(i),this._getBlock(e).setData(t,s,r)}getData(t,e,s){return this._getBlock(e).getData(t,s)}getHighlightFlag(t){return this._idsToHighlight.has(t)?ht:0}unsetAttributeData(t){const e=y(t);this._getBlock(0).setData(e,0,0)}setAttributeData(t,e){const s=y(t);if(this._ensureSizeForTexel(s),this._getBlock(0).setData(s,0,this.getFilterFlags(e)),this._targetType!==ft(t))return;const r=this._attributeComputeMap,i=this.config.supportsTextureFloat?1:2,n=4;r.size&&r.forEach((a,o)=>{const c=o*i%n,T=Math.floor(o*i/n),I=this._getBlock(T+ut),w=a(e);if(this.config.supportsTextureFloat)I.setData(s,c,w);else if(w===k)I.setData(s,c,255),I.setData(s,c+1,255);else{const M=nt(Math.round(w),-32767,32766)+32768,j=255&M,L=(65280&M)>>8;I.setData(s,c,j),I.setData(s,c+1,L)}})}sendUpdates(){if(_("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._notifyChange(),this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=K(),this._nextUpdate.promise;const t={blocks:this._blocks.map(e=>l(e)?e.toMessage():null)};return this._currUpdate=this._createResources().then(()=>{const e=()=>{if(this._currUpdate=null,this._nextUpdate){const r=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then(()=>r.resolve())}else _("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::No additional updates queued");this._notifyChange()};_("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::client.update");const s=this._client.update(t,this._signal).then(e).catch(e);return this._client.render(this._signal),s}).catch(e=>{if(N(e))return this._createResourcesPromise=null,this._createResources();this._notifyChange(),b.error(new D("mapview-attribute-store","Encountered an error during client update",e))}),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t){function e(){return t.normalizationField?n=>{const a=n.readAttribute(t.normalizationField);return a?n.readAttribute(t.field)/a:null}:n=>n.readAttribute(t.field)}function s(){return t.normalizationField&&b.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),n=>n.getComputedNumericAtIndex(t.fieldIndex)}let r;if(t.fieldIndex!=null)r=s();else{if(!t.field)return;r=e()}t.valueRepresentation&&(r=U(r,n=>yt(n,t.valueRepresentation)));const i=n=>n===null||isNaN(n)||n===1/0?k:n;this._attributeComputeMap.set(t.binding,U(r,i))}_createResources(){if(l(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(dt),this._getBlock(ct),z("Initializing AttributeStore");const t={shared:A.sharedArrayBuffer&&this._client.type!=="local",size:this._size,blocks:tt(this._blocks,s=>({textureOnly:s.textureOnly,buffer:s.buffer,pixelType:s.pixelType}))},e=this._client.initialize(t,this._signal).catch(s=>{N(s)?this._createResourcesPromise=null:b.error(new D("mapview-attribute-store","Encountered an error during client initialization",s))});return this._createResourcesPromise=e,e.then(()=>d(this._createResourcesPromise)?this._createResources():void 0),e}_getBlock(t){const e=this._blocks[t];if(l(e))return e;z(`Initializing AttributeBlock at index ${t}`);const s=A.sharedArrayBuffer,r=this._client.type,i=new Et(s,r,this._size,this._blockDescriptors[t]);return this._blocks[t]=i,this._createResourcesPromise=null,i}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return z("Expanding block size to",t,this._blocks),et(this._blocks,e=>e.expand(t)),this._createResourcesPromise=null,this._size=t,0}return b.error(new D("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,e,s,r){const i=this._filters[e],n=l(i)&&i.hash;if(!i&&!t||n===JSON.stringify(t))return!1;if(d(t)){if(!i)return!1;const o=1<<e+1,c=this._getBlock(0);return this._filters[e]=null,c.setComponentAllTexels(0,o),this.sendUpdates(),!0}return await(await this._getFilter(e,s)).update(t,r),!0}async _getFilter(t,e){const s=this._filters[t];if(l(s))return s;const{default:r}=await st(()=>import("./FeatureFilter.71ddbf26.js"),["assets/FeatureFilter.71ddbf26.js","assets/index.52935b46.js","assets/index.be38f7b7.css","assets/timeSupport.a1a47a12.js","assets/FeatureStore2D.f7b490da.js","assets/CircularArray.c3ac6658.js","assets/centroid.296f6ecc.js","assets/definitions.6dca4f7b.js","assets/visualVariablesUtils.53aa19cb.js","assets/Utils.e2c1ea7d.js","assets/number.08b65821.js","assets/enums.05a6ea95.js","assets/enums.de935fa5.js","assets/Texture.7634927e.js","assets/VertexElementDescriptor.d386088d.js","assets/visualVariablesUtils.baa0fa5a.js"]),i=new r({geometryType:e.geometryType,hasM:!1,hasZ:!1,timeInfo:e.timeInfo,fieldsIndex:new rt(e.fields)});return this._filters[t]=i,i}isVisible(t){return!!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let e=0;const s=gt(t.getDisplayId());for(let i=0;i<this._filters.length;i++){const n=!!(s&1<<i),a=this._filters[i];e|=(!n||d(a)||a.check(t)?1:0)<<i}let r=0;if(this._idsToHighlight.size){const i=t.getObjectId();r=this.getHighlightFlag(i)}return e<<1|r}}class Mt{constructor(){this._freeIds=[],this._idCounter=1}createId(t=!1){return O(this._getFreeId(),t)}releaseId(t){this._freeIds.push(t)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}function C(u,t,e){if(!(u.length>t))for(;u.length<=t;)u.push(e)}class Bt{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new Mt,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const t=this._bitsets.length;return this._bitsets.push(x.create(this._allocatedSize,h)),t+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]),C(this._numerics[t],e,0)}_ensureInstanceId(t){C(this._instanceIds,t,0)}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]),C(this._strings[t],e,null)}createDisplayId(t=!1){const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),O(e,t)}releaseDisplayId(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(t&h)}getComputedNumeric(t,e){return this.getComputedNumericAtIndex(t&h,0)}setComputedNumeric(t,e,s){return this.setComputedNumericAtIndex(t&h,s,0)}getComputedString(t,e){return this.getComputedStringAtIndex(t&h,0)}setComputedString(t,e,s){return this.setComputedStringAtIndex(t&h,0,s)}getComputedNumericAtIndex(t,e){const s=t&h;return this._ensureNumeric(e,s),this._numerics[e][s]}setComputedNumericAtIndex(t,e,s){const r=t&h;this._ensureNumeric(e,r),this._numerics[e][r]=s}getInstanceId(t){const e=t&h;return this._ensureInstanceId(e),this._instanceIds[e]}setInstanceId(t,e){const s=t&h;this._ensureInstanceId(s),this._instanceIds[s]=e}getComputedStringAtIndex(t,e){const s=t&h;return this._ensureString(e,s),this._strings[e][s]}setComputedStringAtIndex(t,e,s){const r=t&h;this._ensureString(e,r),this._strings[e][r]=s}getXMin(t){return this._bounds[4*(t&h)]}getYMin(t){return this._bounds[4*(t&h)+1]}getXMax(t){return this._bounds[4*(t&h)+2]}getYMax(t){return this._bounds[4*(t&h)+3]}setBounds(t,e){const s=e.readHydratedGeometry();if(!s||!s.coords.length)return!1;let r=1/0,i=1/0,n=-1/0,a=-1/0;s.forEachVertex((c,T)=>{r=Math.min(r,c),i=Math.min(i,T),n=Math.max(n,c),a=Math.max(a,T)});const o=t&h;return C(this._bounds,4*o+4,0),this._bounds[4*o]=r,this._bounds[4*o+1]=i,this._bounds[4*o+2]=n,this._bounds[4*o+3]=a,!0}}export{v as A,Gt as R,m as d,Bt as r,x as t};
