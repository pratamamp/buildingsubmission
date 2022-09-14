import{dh as l,W as d,g7 as o,a6 as p,y as u,ai as y,an as a,e as i,g as s,n as h}from"./index.ce207a0f.js";let t=class extends l(d(o(p.EventedMixin(u)))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if(e.name!=="layerview:create-error"){const r=this.layer&&this.layer.id||"no id",n=this.layer&&this.layer.title||"no title";y.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${n}', id: '${r}')`,e)}})}get fullOpacity(){return a(this.get("layer.opacity"),1)*a(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&((e=this.layer)==null?void 0:e.legendEnabled)===!0}get updating(){var e;return!(!((e=this.updatingHandles)!=null&&e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return((e=this.layer)==null?void 0:e.visible)===!0}set visible(e){e!==void 0?this._override("visible",e):this._clearOverride("visible")}canResume(){var e,r,n;return this.visible&&((e=this.layer)==null?void 0:e.loaded)&&!((r=this.parent)!=null&&r.suspended)&&((n=this.view)==null?void 0:n.ready)||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},r=this;return r.view&&r.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};i([s()],t.prototype,"fullOpacity",null),i([s()],t.prototype,"layer",void 0),i([s()],t.prototype,"parent",void 0),i([s({readOnly:!0})],t.prototype,"suspended",null),i([s({readOnly:!0})],t.prototype,"suspendInfo",null),i([s({readOnly:!0})],t.prototype,"legendEnabled",null),i([s({type:Boolean,readOnly:!0})],t.prototype,"updating",null),i([s({readOnly:!0})],t.prototype,"updatingProgress",null),i([s()],t.prototype,"visible",null),i([s()],t.prototype,"view",void 0),t=i([h("esri.views.layers.LayerView")],t);const v=t;export{v as u};