import{$ as i,a2 as _,I as S,lN as f,kn as v,t as p,r as n,R as C,d$ as D,lO as w,lP as G,e5 as x,d6 as P,y as u,kw as H,kc as k,kK as I,ga as O,a0 as l,a1 as R,A as E,ab as N}from"./index.52935b46.js";let e=class extends _{constructor(t){super(t),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.events=new S.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}set graphic(t){this._circleCollisionCache=null,this._originalSymbol=t.symbol,this._set("graphic",t),this.attachSymbolChanged()}get elevationInfo(){const t="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,a=f(this.graphic),o=t?t.offset:0;return new v({mode:a,offset:o})}set focusedSymbol(t){t!==this._get("focusedSymbol")&&(this._set("focusedSymbol",t),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(t){t!==this._get("grabbing")&&(this._set("grabbing",t),this._updateGraphicSymbol())}set hovering(t){t!==this._get("hovering")&&(this._set("hovering",t),this._updateGraphicSymbol())}set selected(t){t!==this._get("selected")&&(this._set("selected",t),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:t?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(t){const a=this.graphic;if(a.visible===!1)return null;const o=a.geometry;if(p(o))return null;const s=this._get("focusedSymbol"),y=n(s)?s:a.symbol;return this.view.type==="2d"?this._intersectDistance2D(this.view,t,o,y):this._intersectDistance3D(this.view,t,a)}attach(){this.attachSymbolChanged(),n(this.layer)&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),n(this.layer)&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=C(()=>{var t;return(t=this.graphic)==null?void 0:t.symbol},t=>{n(t)&&t!==this.focusedSymbol&&t!==this._originalSymbol&&(this._originalSymbol=t,this._focused&&n(this.focusedSymbol)&&(this.graphic.symbol=this.focusedSymbol))},D)}detachSymbolChanged(){n(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&n(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(t,a,o,s){if(s=s||w(o),p(s))return null;const y=1;let r=this._circleCollisionCache;if(o.type!=="point"||s.type!=="simple-marker")return G(a,o,t)?y:null;if(p(r)||!r.originalPoint.equals(o)){const h=o,c=t.spatialReference;if(x(h.spatialReference,c)){const g=P(h,c);r={originalPoint:h.clone(),mapPoint:g,radiusPx:u(s.size)},this._circleCollisionCache=r}}if(n(r)){const h=H(a,$),c=t.toScreen(r.mapPoint),g=r.radiusPx,b=c.x+u(s.xoffset),m=c.y-u(s.yoffset);return k(h,[b,m])<g*g?y:null}return null}_intersectDistance3D(t,a,o){const s=t.toMap(a,{include:[o]});return s&&I(s,d,t.renderSpatialReference)?O(d,t.state.camera.eye):null}};i([l({constructOnly:!0,nonNullable:!0})],e.prototype,"graphic",null),i([l()],e.prototype,"elevationInfo",null),i([l({constructOnly:!0,nonNullable:!0})],e.prototype,"view",void 0),i([l({value:null})],e.prototype,"focusedSymbol",null),i([l({constructOnly:!0})],e.prototype,"layer",void 0),i([l()],e.prototype,"interactive",void 0),i([l()],e.prototype,"selectable",void 0),i([l()],e.prototype,"grabbable",void 0),i([l({value:!1})],e.prototype,"grabbing",null),i([l()],e.prototype,"dragging",void 0),i([l()],e.prototype,"hovering",null),i([l({value:!1})],e.prototype,"selected",null),i([l()],e.prototype,"cursor",void 0),e=i([R("esri.views.interactive.GraphicManipulator")],e);const d=E(),$=N();export{e as C};
