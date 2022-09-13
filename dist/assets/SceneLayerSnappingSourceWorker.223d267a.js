import{A as p,q as x,t as b,L as S,hC as E,g0 as g,ga as _,fJ as C,gp as u,$ as v,a1 as V}from"./index.52935b46.js";import{v as $,l as P,d as j}from"./lineSegment.42c0099b.js";import{E as f,Q as y,_ as I}from"./sphere.fe54e1ae.js";import{G as L}from"./Octree.74aeccc1.js";import{extractComponentsEdgeLocationsLayout as T}from"./EdgeProcessingWorker.b91b210a.js";import"./vectorStacks.a7af424f.js";import"./quatf64.b60d4974.js";import"./mat4f64.84d5c445.js";import"./plane.1ed71234.js";import"./Util.221caaac.js";import"./deduplicate.ee0b1de6.js";import"./InterleavedLayout.b5350ce1.js";import"./BufferView.43fc091d.js";import"./types.25c129c5.js";import"./VertexAttribute.5551e0d8.js";import"./glUtil.345a77b1.js";import"./enums.de935fa5.js";import"./VertexElementDescriptor.d386088d.js";let l=class{constructor(){this._idToComponent=new Map,this._components=new L(t=>t.bounds),this._edges=new L(t=>t.bounds),this._tmpLineSegment=$(),this._tmpP1=p(),this._tmpP2=p(),this._tmpP3=p(),this.remoteClient=null}async fetchCandidates(t,o){await Promise.resolve(),x(o),await this._ensureEdgeLocations(t,o);const e=[];return this._edges.forEachNeighbor(n=>this._addCandidates(t,n,e),t.bounds),{result:{candidates:e}}}async _ensureEdgeLocations(t,o){const e=[];if(this._components.forEachNeighbor(s=>{if(b(s.info)){const{id:r,uid:d}=s;e.push({id:r,uid:d})}},t.bounds),!e.length)return;const n={components:e},i=await this.remoteClient.invoke("fetchAllEdgeLocations",n,S(o,{}));for(const s of i.components)this._setFetchEdgeLocations(s)}async add(t){const o=new m(t.id,t.bounds);return this._idToComponent.set(o.id,o),this._components.add([o]),{result:{}}}async remove(t){const o=this._idToComponent.get(t.id);if(o){const e=[];this._edges.forEachNeighbor(n=>{n.component===o&&e.push(n)},o.bounds),this._edges.remove(e),this._components.remove([o]),this._idToComponent.delete(o.id)}return{result:{}}}_setFetchEdgeLocations(t){const o=this._idToComponent.get(t.id);if(b(o)||t.uid!==o.uid)return;const e=T.createView(t.locations),n=new Array(e.count),i=p(),s=p();for(let a=0;a<e.count;a++){const h=I(),c=f(h);e.position0.getVec(a,i),e.position1.getVec(a,s),E(c,c,i,.5),E(c,c,s,.5),g(c,c,t.origin),h[3]=_(c,i);const w=new k(o,a,h);n[a]=w}this._edges.add(n);const{objectIds:r,origin:d}=t;o.info={locations:e,objectIds:r,origin:d}}_addCandidates(t,o,e){const{locations:n,origin:i,objectIds:s}=o.component.info,r=n.position0.getVec(o.index,this._tmpP1),d=n.position1.getVec(o.index,this._tmpP2);g(r,r,i),g(d,d,i);const a=s[n.componentIndex.get(o.index)];this._addEdgeCandidate(t,a,r,d,e),this._addVertexCandidate(t,a,r,e),this._addVertexCandidate(t,a,d,e)}_addEdgeCandidate(t,o,e,n,i){if(!(t.types&C.EDGE))return;const s=f(t.bounds),r=P(e,n,this._tmpLineSegment),d=j(r,s,this._tmpP3);if(!y(t.bounds,d))return null;i.push({type:"edge",objectId:o,target:u(d),distance:_(s,d),start:u(e),end:u(n)})}_addVertexCandidate(t,o,e,n){if(!(t.types&C.VERTEX))return;const i=f(t.bounds);if(!y(t.bounds,e))return null;n.push({type:"vertex",objectId:o,target:u(e),distance:_(i,e)})}};function Y(){return new l}l=v([V("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],l);class m{constructor(o,e){this.id=o,this.bounds=e,this.info=null,this.uid=++m.uid}}m.uid=0;class k{constructor(o,e,n){this.component=o,this.index=e,this.bounds=n}}export{l as SceneLayerSnappingSourceWorker,Y as default};
