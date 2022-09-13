import{$ as o,a0 as u,a1 as y,a2 as T,e as v,s as $,b0 as g,c1 as E,c2 as S,c3 as w}from"./index.52935b46.js";const _=-1;let l=class extends T{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=v("mapview-transitions-duration"),this.effects=[]}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(d(t))}catch(e){this._transitionTo([]),$.getLogger(this.declaredClass).warn("Invalid Effect",{effect:t,error:e})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t)}get transitioning(){return this._to!==null}canTransitionTo(t){try{return this.scale>0&&m(this._current,d(t),this.scale)}catch{return!1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}end(){this._applyTimeTransition(this.duration)}_transitionTo(t){this.scale>0&&m(this._current,t,this.scale)?(this._final=t,this._to=g(t),F(this._current,this._to,this.scale),this._from=g(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?g(this._current[0].effects):[])}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let r=0;r<this._current.length;r++){const n=this._current[r],i=this._from[r],c=this._to[r];n.scale=O(i.scale,c.scale,e);for(let s=0;s<n.effects.length;s++){const a=n.effects[s],h=i.effects[s],p=c.effects[s];a.interpolate(h,p,e)}}e===1&&(this._current=this._final,this._set("effects",this._current[0]?g(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(t){if(this._set("scale",t),this._current.length===0)return;const e=this._current,r=this._current.length-1;let n,i,c=1;if(e.length===1||t>=e[0].scale)i=n=e[0].effects;else if(t<=e[r].scale)i=n=e[r].effects;else for(let s=0;s<r;s++){const a=e[s],h=e[s+1];if(a.scale>=t&&h.scale<=t){c=(t-a.scale)/(h.scale-a.scale),n=a.effects,i=h.effects;break}}for(let s=0;s<this.effects.length;s++)this.effects[s].interpolate(n[s],i[s],c)}};function d(t){const e=E(t)||[];return b(e)?[{scale:_,effects:e}]:e}function m(t,e,r){var n,i,c,s;return!((n=t[0])!=null&&n.effects)||!((i=e[0])!=null&&i.effects)?!0:!((((c=t[0])==null?void 0:c.scale)===_||((s=e[0])==null?void 0:s.scale)===_)&&(t.length>1||e.length>1)&&r<=0)&&S(t[0].effects,e[0].effects)}function F(t,e,r){var h,p;const n=t.length>e.length?t:e,i=t.length>e.length?e:t,c=i[i.length-1],s=(h=c==null?void 0:c.scale)!=null?h:r,a=(p=c==null?void 0:c.effects)!=null?p:[];for(let f=i.length;f<n.length;f++)i.push({scale:s,effects:[...a]});for(let f=0;f<n.length;f++)i[f].scale=i[f].scale===_?r:i[f].scale,n[f].scale=n[f].scale===_?r:n[f].scale,w(i[f].effects,n[f].effects)}function O(t,e,r){return t+(e-t)*r}function b(t){const e=t[0];return!!e&&"type"in e}o([u()],l.prototype,"_to",void 0),o([u()],l.prototype,"duration",void 0),o([u({value:""})],l.prototype,"effect",null),o([u({readOnly:!0})],l.prototype,"effects",void 0),o([u({readOnly:!0})],l.prototype,"hasEffects",null),o([u({value:0})],l.prototype,"scale",null),o([u({readOnly:!0})],l.prototype,"transitioning",null),l=o([y("esri.layers.effects.EffectView")],l);export{l as h};
