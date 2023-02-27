import{e as u,g as f,jJ as V,n as j,b5 as v,s as T,w as N,i as I}from"./index.f5fb6b4d.js";import{T as F,F as R}from"./rasterProjectionHelper.9c2f5670.js";import{s as L}from"./popupUtils.8bfceb75.js";const C=S=>{let s=class extends S{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.tileInfo=null}get fullExtent(){return this._getfullExtent()}_getfullExtent(){return this.projectFullExtent(this.view.spatialReference)}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}get datumTransformation(){return F(v(this.layer.fullExtent),this.view.spatialReference,!0)}supportsSpatialReference(e){return!!this.projectFullExtent(e)}projectFullExtent(e){const r=v(this.layer.fullExtent),t=F(r,e,!1);return R(r,e,t)}async fetchPopupFeatures(e,r){var b,w;const{layer:t}=this;if(!e)throw new T("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:t});const{popupEnabled:a}=t,i=L(t,r);if(!a||N(i))throw new T("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:i});const l=[],{value:n,magdirValue:p}=await t.identify(e,{timeExtent:this.timeExtent});let g="";if(n&&n.length){g=t.type==="imagery-tile"&&t.hasStandardTime()&&n[0]!=null?n.map(d=>t.getStandardTimeValue(d)).join(", "):n.join(", ");const m={ObjectId:0},E="Raster.ServicePixelValue";m[E]=this._formatAttributeValue(g,E);const y=(w=(b=t.rasterInfo)==null?void 0:b.attributeTable)==null?void 0:w.features;if(y&&y.length>0){const d=y.filter(o=>{const c=o.attributes.value||o.attributes.Value||o.attributes.VALUE;return String(c)===g});if(d.length>0){const o=d[0];if(o){for(const c in o.attributes)if(o.attributes.hasOwnProperty(c)){const _=this._rasterFieldPrefix+c;m[_]=this._formatAttributeValue(o.attributes[c],_)}}}}const x=t.rasterInfo.dataType;x!=="vector-magdir"&&x!=="vector-uv"||(m["Raster.Magnitude"]=p==null?void 0:p[0],m["Raster.Direction"]=p==null?void 0:p[1]);const h=new I(this.fullExtent.clone(),null,m);h.layer=t,h.sourceLayer=h.layer,l.push(h)}return l}_formatAttributeValue(e,r){if(typeof e=="string"){const t=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,a=this._getFieldInfo(t,r),i=a&&a.format;if(i){let l,n;return e.trim().includes(",")?(l=",",n=l+" ",this._formatDelimitedString(e,l,n,i)):e.trim().includes(" ")?(l=n=" ",this._formatDelimitedString(e,l,n,i)):this._formatNumberFromString(e,i)}}return e}_getFieldInfo(e,r){if(!e||!e.length||!r)return;const t=r.toLowerCase();let a;return e.some(i=>!(!i.fieldName||i.fieldName.toLowerCase()!==t&&i.fieldName.toLowerCase()!==t.replace(/ /g,"_"))&&(a=i,!0)),a}_formatDelimitedString(e,r,t,a){return e&&r&&t&&a?e.trim().split(r).map(i=>this._formatNumberFromString(i,a)).join(t):e}_formatNumberFromString(e,r){if(!e||!r)return e;const t=Number(e);return isNaN(t)?e:r.format(t)}};return u([f()],s.prototype,"layer",void 0),u([f(V)],s.prototype,"timeExtent",void 0),u([f()],s.prototype,"view",void 0),u([f()],s.prototype,"fullExtent",null),u([f()],s.prototype,"tileInfo",void 0),u([f({readOnly:!0})],s.prototype,"hasTilingEffects",null),s=u([j("esri.views.layers.ImageryTileLayerView")],s),s};export{C as m};