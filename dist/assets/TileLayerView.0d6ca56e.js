import{e as p,g as h,n as m,s as n,E as w,l as d,g8 as f}from"./index.ce207a0f.js";const F=u=>{let a=class extends u{async fetchPopupFeatures(l,o){const{layer:r}=this;if(!l)throw new n("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r});if(r.type!=="tile")throw new n("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:r.type});const s=this.get("view.scale"),c=r.allSublayers.toArray().filter(e=>{const t=e.minScale===0||s<=e.minScale,i=e.maxScale===0||s>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&i});return w(c.map(async e=>{const t=e.createQuery(),i=d(o)?o.event:null,y=f({renderer:e.renderer,event:i});return t.geometry=this.createFetchPopupFeaturesQueryGeometry(l,y),t.outFields=await e.popupTemplate.getRequiredFields(),(await e.queryFeatures(t)).features})).then(e=>[].concat(...e.map(t=>t.value).filter(Boolean)))}};return p([h()],a.prototype,"layer",void 0),a=p([m("esri.layers.mixins.TileLayerView")],a),a};export{F as i};