import{e as r,g as s,v as c,im as l,eU as y,n as m,fJ as f,b4 as u,io as d,ip as g,bL as R}from"./index.ce207a0f.js";var n;let t=n=class extends f{constructor(a){super(a),this.geometry=null,this.type="clip"}writeGeometry(a,i,o,e){if(e.layer&&e.layer.spatialReference&&!e.layer.spatialReference.equals(this.geometry.spatialReference)){if(!u(a.spatialReference,e.layer.spatialReference))return void(e&&e.messages&&e.messages.push(new d("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})));const p=new c;g(a,p,e.layer.spatialReference),i[o]=p.toJSON(e)}else i[o]=a.toJSON(e);delete i[o].spatialReference}clone(){return new n({geometry:R(this.geometry),type:this.type})}};r([s({type:c}),l()],t.prototype,"geometry",void 0),r([y(["web-scene","portal-item"],"geometry")],t.prototype,"writeGeometry",null),r([s({type:["clip","mask","replace"],nonNullable:!0}),l()],t.prototype,"type",void 0),t=n=r([m("esri.layers.support.SceneModification")],t);const w=t;export{w as f};