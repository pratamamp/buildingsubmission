import{q as h,du as m,fx as o,r as g,bq as _,aT as d,bN as f,bY as w,h as q,f as u,an as E,p as F,s as S,aS as x}from"./index.52935b46.js";import{u as T}from"./FeatureStore.d8739ab5.js";import{Y as b}from"./QueryEngine.9ca689c7.js";import{O as I,L as j}from"./geojson.6b6e84aa.js";import{m as C}from"./sourceUtils.728c506e.js";import{K as P}from"./wfsUtils.e27dfe61.js";import"./PooledRBush.88201bbf.js";import"./optimizedFeatureQueryEngineAdapter.5c61cb3b.js";import"./centroid.296f6ecc.js";import"./QueryEngineCapabilities.c2e9875c.js";import"./timeSupport.a1a47a12.js";import"./xmlUtils.986ddba5.js";class G{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,r=await P(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(s=>s.name),signal:e});await I(r),h(e);const a=j(r,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!m(this._queryEngine.spatialReference,o))for(const s of a)g(s.geometry)&&(s.geometry=_(d(f(s.geometry,this._queryEngine.geometryType,!1,!1),o,this._queryEngine.spatialReference)));let n=1;for(const s of a){const i={};C(this._fieldsIndex,i,s.attributes,!0),s.attributes=i,s.attributes[t]==null&&(s.objectId=s.attributes[t]=n++)}return a}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:r,getFeatureOutputFormat:a,spatialReference:n,fields:s,geometryType:i,featureType:p,objectIdField:y,customParameters:c}=e;this._featureType=p,this._customParameters=c,this._getFeatureUrl=r,this._getFeatureOutputFormat=a,this._fieldsIndex=new w(s),await this._checkProjection(n),h(t),this._queryEngine=new b({fields:s,geometryType:i,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new T({geometryType:i,hasM:!1,hasZ:!1})});const l=await this._snapshotFeatures(q(t.signal));return this._queryEngine.featureStore.addMany(l),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=E(this._snapshotFeatures),this._snapshotTask.promise.then(r=>{this._queryEngine.featureStore.clear(),r&&this._queryEngine.featureStore.addMany(r)},r=>{this._queryEngine.featureStore.clear(),F(r)||S.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await x(o,e)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{G as default};
