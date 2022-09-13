import{pj as x,eC as I,aL as N,r as n,$ as t,a0 as s,a1 as h,a2 as O,t as p,jP as f,a8 as E,kn as L,pm as k,cq as S,d_ as C,R as F,dy as R,dx as D,K as g,h as K,mD as B,ex as G,ms as H,pn as J,kd as Q,f0 as U,f2 as V,f6 as W}from"./index.52935b46.js";import{w as v}from"./persistable.eb01740e.js";import"./multiOriginJSONSupportUtils.8128aa52.js";let X=0,a=class extends x(I(N(O))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${X++}`,this.title=null}get parent(){return this._get("parent")}set parent(e){const i=this.parent;if(n(i))switch(i.type){case"line-of-sight":i.removeAnalysis(this);break;case"2d":case"3d":i.analyses.includes(this)&&i.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(n)}};t([s({type:String,constructOnly:!0,clonable:!1})],a.prototype,"id",void 0),t([s({type:String})],a.prototype,"title",void 0),t([s({constructOnly:!0})],a.prototype,"type",void 0),t([s({clonable:!1,value:null})],a.prototype,"parent",null),t([s({readOnly:!0})],a.prototype,"extent",void 0),t([s({readOnly:!0})],a.prototype,"isEditable",null),t([s({readOnly:!0})],a.prototype,"requiredPropertiesForEditing",void 0),t([s({readOnly:!0})],a.prototype,"nonEditableMessage",void 0),a=t([h("esri.analysis.Analysis")],a);const Y=a;function _(e,i){return j(e)===j(i)}function j(e){if(p(e))return null;const i=e.layer!=null?e.layer.id:"";let r=null;return r=e.objectId!=null?e.objectId:e.layer!=null&&"objectIdField"in e.layer&&e.layer.objectIdField!=null&&e.attributes!=null?e.attributes[e.layer.objectIdField]:e.uid,r==null?null:`o-${i}-${r}`}const A={json:{write:{writer:Z,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:ee}}}};function Z(e,i){var r;p(e)||((r=e.layer)==null?void 0:r.objectIdField)==null||e.attributes==null||(i.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})}function ee(e){if(e.layerId!=null&&e.objectId!=null)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}let y=class extends x(I(O)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return f(this.position,e.position)&&f(this.elevationInfo,e.elevationInfo)&&_(this.feature,e.feature)}};t([s({type:E}),v()],y.prototype,"position",void 0),t([s({type:L}),v()],y.prototype,"elevationInfo",void 0),t([s(A)],y.prototype,"feature",void 0),y=t([h("esri.analysis.LineOfSightAnalysisObserver")],y);const q=y;let u=class extends x(k){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return f(this.position,e.position)&&f(this.elevationInfo,e.elevationInfo)&&_(this.feature,e.feature)}};t([s({type:E}),v()],u.prototype,"position",void 0),t([s({type:L}),v()],u.prototype,"elevationInfo",void 0),t([s(A)],u.prototype,"feature",void 0),u=t([h("esri.analysis.LineOfSightAnalysisTarget")],u);const z=u,$=S.ofType(z);let l=class extends Y{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null,this.nonEditableMessage="Assign an observer location to the analysis to allow editing."}initialize(){this.own(F(()=>this._computeExtent(),e=>{(p(e)||p(e.pending))&&this._set("extent",n(e)?e.extent:null)},R))}get targets(){return this._get("targets")||new $}set targets(e){this._set("targets",D(e,this.targets,$))}get spatialReference(){return n(this.observer)&&n(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[g(this.observer,e=>e.position)]}async waitComputeExtent(){const e=this._computeExtent();return n(e)?K(e.pending):null}_computeExtent(){const e=this.spatialReference;if(p(this.observer)||p(this.observer.position)||p(e))return null;const i=d=>Q(d.position,d.elevationInfo)==="absolute-height",r=this.observer.position,w=B(r.x,r.y,r.z,r.x,r.y,r.z);for(const d of this.targets)if(n(d.position)){const c=G(d.position,e);if(n(c.pending))return{pending:c.pending,extent:null};if(n(c.geometry)){const{x:P,y:T,z:M}=c.geometry;H(w,[P,T,M])}}const b=J(w,e);return i(this.observer)&&this.targets.every(i)||(b.zmin=null,b.zmax=null),{pending:null,extent:b}}clear(){this.observer=null,this.targets.removeAll()}};t([s({type:["line-of-sight"]})],l.prototype,"type",void 0),t([s({type:q,json:{read:!0,write:!0}})],l.prototype,"observer",void 0),t([s({cast:C,type:$,nonNullable:!0,json:{read:!0,write:!0}})],l.prototype,"targets",null),t([s({value:null,readOnly:!0})],l.prototype,"extent",void 0),t([s({readOnly:!0})],l.prototype,"spatialReference",null),t([s({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",null),t([s({readOnly:!0})],l.prototype,"nonEditableMessage",void 0),l=t([h("esri.analysis.LineOfSightAnalysis")],l);const m=l,te=S.ofType(z);let o=class extends U(V(W)){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new m,this.opacity=1}initialize(){this.own(F(()=>this.analysis,(e,i)=>{n(i)&&i.parent===this&&(i.parent=null),n(e)&&(e.parent=this)},R))}async load(){return n(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return g(this.analysis,e=>e.observer)}set observer(e){g(this.analysis,i=>i.observer=e)}get targets(){return n(this.analysis)?this.analysis.targets:null}set targets(e){g(this.analysis,i=>i.targets=e)}get fullExtent(){return n(this.analysis)?this.analysis.extent:null}get spatialReference(){return n(this.analysis)?this.analysis.spatialReference:null}removeAnalysis(e){this.analysis===e&&(this.analysis=new m)}};t([s({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),t([s({type:["LineOfSightLayer"]})],o.prototype,"operationalLayerType",void 0),t([s({type:q,json:{read:!0,write:{ignoreOrigin:!0}}})],o.prototype,"observer",null),t([s({type:te,json:{read:!0,write:{ignoreOrigin:!0}}})],o.prototype,"targets",null),t([s({nonNullable:!0,json:{read:!1,write:!1}})],o.prototype,"analysis",void 0),t([s({readOnly:!0})],o.prototype,"fullExtent",null),t([s({readOnly:!0})],o.prototype,"spatialReference",null),t([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],o.prototype,"opacity",void 0),t([s({type:["show","hide"]})],o.prototype,"listMode",void 0),o=t([h("esri.layers.LineOfSightLayer")],o);const re=o;export{re as default};
