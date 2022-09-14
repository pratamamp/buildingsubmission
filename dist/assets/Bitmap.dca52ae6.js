import{l as d,w as u,dC as _,cV as p,e9 as f,cZ as l,eb as n,cY as m,f8 as B,ea as w,d0 as R,cG as c,cH as v,cO as k,cy as T}from"./index.ce207a0f.js";class M{constructor(t,e,i){this.pixelBlock=t,this.extent=e,this.originalPixelBlock=i}get width(){return d(this.pixelBlock)?this.pixelBlock.width:0}get height(){return d(this.pixelBlock)?this.pixelBlock.height:0}render(t){const e=this.pixelBlock;if(u(e))return;const i=this.filter({pixelBlock:e});if(u(i.pixelBlock))return;const r=i.pixelBlock.getAsRGBA(),h=t.createImageData(i.pixelBlock.width,i.pixelBlock.height);h.data.set(r),t.putImageData(h,0,0)}getRenderedRasterPixels(){const t=this.filter({pixelBlock:this.pixelBlock});return u(t.pixelBlock)?null:{width:t.pixelBlock.width,height:t.pixelBlock.height,renderedRasterPixels:new Uint8Array(t.pixelBlock.getAsRGBA().buffer)}}}function b(s){return s&&"render"in s}function D(s){return s&&!("render"in s)}function E(s){const t=document.createElement("canvas");return t.width=s.width,t.height=s.height,s.render(t.getContext("2d")),t}function x(s,t,e){const i={target:R.TEXTURE_2D,pixelFormat:c.RGBA,internalFormat:c.RGBA,dataType:v.UNSIGNED_BYTE,wrapMode:k.CLAMP_TO_EDGE};return t&&e&&(i.width=t,i.height=e),new T(s,i)}class A extends _{constructor(t=null,e,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return this._height!==void 0?this._height:this.sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){this._source=t,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return this._width!==void 0?this._width:this.sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:p()}}setTransform(t){const e=f(this.transforms.dvs),[i,r]=t.toScreenNoRotation([0,0],[this.x,this.y]),h=this.resolution/this.pixelRatio/t.resolution,o=h*this.width,a=h*this.height,g=Math.PI*this.rotation/180;l(e,e,n(i,r)),l(e,e,n(o/2,a/2)),m(e,e,-g),l(e,e,n(-o/2,-a/2)),B(e,e,n(o,a)),w(this.transforms.dvs,t.displayViewMat3,e)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}updateTexture(t){var i;if(!this.stage)return(i=this._texture)==null||i.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=x(t,this.sourceWidth,this.sourceHeight):this._texture=x(t));const e=this.source;if(e){if(this._texture.resize(this.sourceWidth,this.sourceHeight),b(e))if(e instanceof M){const r=e.getRenderedRasterPixels();this._texture.setData(d(r)?r.renderedRasterPixels:null)}else this._texture.setData(E(e));else D(e)&&this._texture.setData(e);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}export{M as i,A as v};