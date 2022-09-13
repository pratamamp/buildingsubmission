import{aq as V,t as R,ap as A,bj as J,bk as S,aV as N,aE as X,aR as j,av as q,az as b,aK as z,bl as E,bm as K,bn as f}from"./index.52935b46.js";function Q(t){return k(t,!0)}function U(t){return k(t,!1)}function k(t,s){if(R(t))return null;const i=t.spatialReference,n=A(i),e="toJSON"in t?t.toJSON():t;if(!n)return e;const h=J(i)?102100:4326,u=S[h].maxX,m=S[h].minX;if(N(e))return T(e,u,m);if(X(e))return e.points=e.points.map(o=>T(o,u,m)),e;if(j(e))return B(e,n);if(q(e)||b(e)){const o=z(F,e),r={xmin:o[0],ymin:o[1],xmax:o[2],ymax:o[3]},x=f(r.xmin,m)*(2*u),l=x===0?e:E(e,x);return r.xmin+=x,r.xmax+=x,r.xmax>u?L(l,u,s):r.xmin<m?L(l,m,s):l}return e}function B(t,s){if(!s)return t;const i=D(t,s).map(n=>n.extent);return i.length<2?i[0]||t:i.length>2?(t.xmin=s.valid[0],t.xmax=s.valid[1],t):{rings:i.map(n=>[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]])}}function T(t,s,i){if(Array.isArray(t)){const n=t[0];if(n>s){const e=f(n,s);t[0]=n+e*(-2*s)}else if(n<i){const e=f(n,i);t[0]=n+e*(-2*i)}}else{const n=t.x;if(n>s){const e=f(n,s);t.x+=e*(-2*s)}else if(n<i){const e=f(n,i);t.x+=e*(-2*i)}}return t}function D(t,s){const i=[],{ymin:n,ymax:e,xmin:h,xmax:u}=t,m=t.xmax-t.xmin,[o,r]=s.valid,{x,frameId:l}=w(t.xmin,s),{x:c,frameId:p}=w(t.xmax,s),M=x===c&&m>0;if(m>2*r){const g={xmin:h<u?x:c,ymin:n,xmax:r,ymax:e},O={xmin:o,ymin:n,xmax:h<u?c:x,ymax:e},P={xmin:0,ymin:n,xmax:r,ymax:e},C={xmin:o,ymin:n,xmax:0,ymax:e},_=[],y=[];v(g,P)&&_.push(l),v(g,C)&&y.push(l),v(O,P)&&_.push(p),v(O,C)&&y.push(p);for(let d=l+1;d<p;d++)_.push(d),y.push(d);i.push(new a(g,[l]),new a(O,[p]),new a(P,_),new a(C,y))}else x>c||M?i.push(new a({xmin:x,ymin:n,xmax:r,ymax:e},[l]),new a({xmin:o,ymin:n,xmax:c,ymax:e},[p])):i.push(new a({xmin:x,ymin:n,xmax:c,ymax:e},[l]));return i}function w(t,s){const[i,n]=s.valid,e=2*n;let h,u=0;return t>n?(h=Math.ceil(Math.abs(t-n)/e),t-=h*e,u=h):t<i&&(h=Math.ceil(Math.abs(t-i)/e),t+=h*e,u=-h),{x:t,frameId:u}}function v(t,s){const{xmin:i,ymin:n,xmax:e,ymax:h}=s;return I(t,i,n)&&I(t,i,h)&&I(t,e,h)&&I(t,e,n)}function I(t,s,i){return s>=t.xmin&&s<=t.xmax&&i>=t.ymin&&i<=t.ymax}function L(t,s,i=!0){const n=!b(t);if(n&&K(t),i)return new G().cut(t,s);const e=n?t.rings:t.paths,h=n?4:2,u=e.length,m=-2*s;for(let o=0;o<u;o++){const r=e[o];if(r&&r.length>=h){const x=[];for(const l of r)x.push([l[0]+m,l[1]]);e.push(x)}}return n?t.rings=e:t.paths=e,t}class a{constructor(s,i){this.extent=s,this.frameIds=i}}const F=V();class G{constructor(){this.linesIn=[],this.linesOut=[]}cut(s,i){let n;if(this.xCut=i,s.rings)this.closed=!0,n=s.rings,this.minPts=4;else{if(!s.paths)return null;this.closed=!1,n=s.paths,this.minPts=2}for(const h of n){if(!h||h.length<this.minPts)continue;let u=!0;for(const m of h)u?(this.moveTo(m),u=!1):this.lineTo(m);this.closed&&this.close()}this._pushLineIn(),this._pushLineOut(),n=[];for(const h of this.linesIn)h&&h.length>=this.minPts&&n.push(h);const e=-2*this.xCut;for(const h of this.linesOut)if(h&&h.length>=this.minPts){for(const u of h)u[0]+=e;n.push(h)}return this.closed?s.rings=n:s.paths=n,s}moveTo(s){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(s[0]),this._moveTo(s[0],s[1],this._prevSide),this._prevPt=s,this._firstPt=s}lineTo(s){const i=this._side(s[0]);if(i*this._prevSide==-1){const n=this._intersect(this._prevPt,s);this._lineTo(this.xCut,n,0),this._prevSide=0,this._lineTo(s[0],s[1],i)}else this._lineTo(s[0],s[1],i);this._prevSide=i,this._prevPt=s}close(){const s=this._firstPt,i=this._prevPt;s[0]===i[0]&&s[1]===i[1]||this.lineTo(s),this._checkClosingPt(this.lineIn),this._checkClosingPt(this.lineOut)}_moveTo(s,i,n){this.closed?(this.lineIn.push([n<=0?s:this.xCut,i]),this.lineOut.push([n>=0?s:this.xCut,i])):(n<=0&&this.lineIn.push([s,i]),n>=0&&this.lineOut.push([s,i]))}_lineTo(s,i,n){this.closed?(this._addPolyVertex(this.lineIn,n<=0?s:this.xCut,i),this._addPolyVertex(this.lineOut,n>=0?s:this.xCut,i)):n<0?(this._prevSide===0&&this._pushLineOut(),this.lineIn.push([s,i])):n>0?(this._prevSide===0&&this._pushLineIn(),this.lineOut.push([s,i])):this._prevSide<0?(this.lineIn.push([s,i]),this.lineOut.push([s,i])):this._prevSide>0&&(this.lineOut.push([s,i]),this.lineIn.push([s,i]))}_addPolyVertex(s,i,n){const e=s.length;e>1&&s[e-1][0]===i&&s[e-2][0]===i?s[e-1][1]=n:s.push([i,n])}_checkClosingPt(s){const i=s.length;i>3&&s[0][0]===this.xCut&&s[i-2][0]===this.xCut&&s[1][0]===this.xCut&&(s[0][1]=s[i-2][1],s.pop())}_side(s){return s<this.xCut?-1:s>this.xCut?1:0}_intersect(s,i){const n=(this.xCut-s[0])/(i[0]-s[0]);return s[1]+n*(i[1]-s[1])}_pushLineIn(){this.lineIn&&this.lineIn.length>=this.minPts&&this.linesIn.push(this.lineIn),this.lineIn=[]}_pushLineOut(){this.lineOut&&this.lineOut.length>=this.minPts&&this.linesOut.push(this.lineOut),this.lineOut=[]}}export{U as f,Q as p};