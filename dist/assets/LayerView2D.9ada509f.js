import{$ as e,a1 as c,cp as q,a0 as s,bO as $,dw as A,cE as x,ar as j,cq as O,dx as U,f as C,R as d,dy as u,dz as M}from"./index.52935b46.js";import{s as N}from"./utils.88e80f44.js";let g=class extends q{};g=e([c("esri.views.layers.support.ClipArea")],g);const y=g;var f;let o=f=class extends y{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new f({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};e([s({type:[Number,String],json:{write:!0}})],o.prototype,"left",void 0),e([s({type:[Number,String],json:{write:!0}})],o.prototype,"right",void 0),e([s({type:[Number,String],json:{write:!0}})],o.prototype,"top",void 0),e([s({type:[Number,String],json:{write:!0}})],o.prototype,"bottom",void 0),e([s({readOnly:!0})],o.prototype,"version",null),o=f=e([c("esri.views.layers.support.ClipRect")],o);const P=o;var m;const _={base:A,key:"type",typeMap:{extent:x,polygon:j}};let h=m=class extends y{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new m({geometry:this.geometry.clone()})}};e([s({types:_,json:{read:$,write:!0}})],h.prototype,"geometry",void 0),e([s({readOnly:!0})],h.prototype,"version",null),h=m=e([c("esri.views.layers.support.Geometry")],h);const V=h;let l=class extends y{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};e([s({type:[[[Number]]],json:{write:!0}})],l.prototype,"path",void 0),e([s({readOnly:!0})],l.prototype,"version",null),l=e([c("esri.views.layers.support.Path")],l);const L=l,v=O.ofType({key:"type",base:y,typeMap:{rect:P,path:L,geometry:V}}),D=b=>{let i=class extends b{constructor(){super(...arguments),this.attached=!1,this.clips=new v,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1}initialize(){var n,p,w,R;const t=(p=(n=this.view)==null?void 0:n.spatialReferenceLocked)!=null?p:!0;((w=this.view)==null?void 0:w.spatialReference)&&t&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new C("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new N),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([d(()=>this.suspended,r=>{this.container&&(this.container.visible=!r),this.view&&!r&&this.updateRequested&&this.view.requestUpdate()},u),d(()=>{var r,S;return(S=(r=this.layer)==null?void 0:r.opacity)!=null?S:1},r=>{this.container&&(this.container.opacity=r)},u),d(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",r=>{this.container&&(this.container.blendMode=r)},u),d(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,r=>{this.container&&(this.container.effect=r)},u),M(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)})]),(R=this.view)!=null&&R.whenLayerView?this.view.whenLayerView(this.layer).then(r=>{r===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var a;const t=(a=this.view)==null?void 0:a.spatialReference;return t==null||this.supportsSpatialReference(t)}get updating(){var t;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!((t=this.updatingHandles)!=null&&t.updating))}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(t){const a=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!a)return!0;const{minScale:n,maxScale:p}=a;return(n===0||t<=n)&&(p===0||t>=p)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1}hitTest(t,a){return Promise.resolve(null)}supportsSpatialReference(t){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const t=super.getSuspendInfo(),a=!this.spatialReferenceSupported,n=this.visibleAtCurrentScale;return a&&(t.spatialReferenceNotSupported=a),n&&(t.outsideScaleRange=n),t}};return e([s()],i.prototype,"attached",void 0),e([s({type:v,set(t){const a=U(t,this._get("clips"),v);this._set("clips",a)}})],i.prototype,"clips",void 0),e([s()],i.prototype,"container",void 0),e([s()],i.prototype,"moving",void 0),e([s({readOnly:!0})],i.prototype,"spatialReferenceSupported",null),e([s({readOnly:!0})],i.prototype,"updateParameters",void 0),e([s()],i.prototype,"updateRequested",void 0),e([s()],i.prototype,"updating",null),e([s()],i.prototype,"view",void 0),e([s({readOnly:!0})],i.prototype,"visibleAtCurrentScale",null),i=e([c("esri.views.2d.layers.LayerView2D")],i),i};export{D as f};
