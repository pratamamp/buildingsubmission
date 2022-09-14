import{bH as g,bI as v,fK as d,fL as x,bJ as o,bK as y}from"./index.ce207a0f.js";import{d as k,f as E,u as P,c as C,C as m}from"./popper.28b8c32e.js";import{g as D}from"./guid.d207555c.js";import{t as f,q as H,b as R}from"./dom.6d780cb1.js";import{H as L}from"./Heading.326c3126.js";import{d as _}from"./action.92de23ef.js";import{d as A}from"./icon.158665a2.js";import{d as B}from"./loader.acdbfaa1.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */const r={container:"container",arrow:"arrow",imageContainer:"image-container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContent:"header-content",heading:"heading"},S={close:"Close"},F="auto",h="aria-controls",u="aria-expanded",M=2;class O{constructor(){this.registeredElements=new WeakMap,this.registeredElementCount=0,this.queryPopover=t=>{const{registeredElements:i}=this,a=t.find(n=>i.has(n));return i.get(a)},this.clickHandler=t=>{const i=t.composedPath(),a=this.queryPopover(i);if(a){a.toggle();return}R(t.target,"calcite-popover").filter(n=>n.autoClose&&n.open&&!i.includes(n)).forEach(n=>n.toggle(!1))}}registerElement(t,i){this.registeredElementCount++,this.registeredElements.set(t,i),this.registeredElementCount===1&&this.addListeners()}unregisterElement(t){this.registeredElements.delete(t)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}addListeners(){document.addEventListener("pointerdown",this.clickHandler,{capture:!0})}removeListeners(){document.removeEventListener("pointerdown",this.clickHandler,{capture:!0})}}const I='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^=bottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}:host([data-popper-placement][data-popper-reference-hidden]){pointer-events:none;opacity:0}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-popper-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:start;justify-content:flex-start;border-width:0px;border-bottom-width:1px;border-style:solid;background-color:var(--calcite-ui-foreground-1);border-bottom-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;white-space:normal;padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}.container.has-header{-ms-flex-direction:column;flex-direction:column}.content{display:-ms-flexbox;display:flex;height:100%;width:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-item-align:center;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex:0 0 auto;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){height:100%}',b=new O,$=g(class extends v{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePopoverClose=d(this,"calcitePopoverClose",7),this.calcitePopoverOpen=d(this,"calcitePopoverOpen",7),this.autoClose=!1,this.closeButton=!1,this.dismissible=!1,this.disableFlip=!1,this.disablePointer=!1,this.offsetDistance=k,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement=F,this.intlClose=S.close,this.guid=`calcite-popover-${D()}`,this.activeTransitionProp="opacity",this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?E(t,e):null},this.setUpReferenceElement=()=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement();const{el:e,referenceElement:t,effectiveReferenceElement:i}=this;t&&!i&&console.warn(`${e.tagName}: reference-element id "${t}" was not found.`,{el:e}),this.addReferences(),this.createPopper()},this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{const{effectiveReferenceElement:e,open:t}=this;!e||e.setAttribute(u,f(t))},this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();e.setAttribute(h,t),b.registerElement(e,this.el),this.setExpandedAttr()},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;!e||(e.removeAttribute(h),e.removeAttribute(u),b.unregisterElement(e))},this.hide=()=>{this.open=!1},this.transitionEnd=e=>{e.propertyName===this.activeTransitionProp&&(this.open?this.calcitePopoverOpen.emit():this.calcitePopoverClose.emit())}}flipPlacementsHandler(){this.setFilteredPlacements()}offsetDistanceOffsetHandler(){this.reposition()}offsetSkiddingHandler(){this.reposition()}openHandler(){this.reposition(),this.setExpandedAttr()}placementHandler(){this.reposition()}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){this.setFilteredPlacements()}componentWillLoad(){this.setUpReferenceElement()}componentDidLoad(){this.reposition()}disconnectedCallback(){this.removeReferences(),this.destroyPopper()}async reposition(){const{popper:e,el:t,placement:i}=this,a=this.getModifiers();e?await P({el:t,modifiers:a,placement:i,popper:e}):this.createPopper()}async setFocus(e){var t;const{closeButtonEl:i}=this;if(e==="close-button"&&i){x(i),i.setFocus();return}(t=this.el)===null||t===void 0||t.focus()}async toggle(e=!this.open){this.open=e}getReferenceElement(){const{referenceElement:e,el:t}=this;return(typeof e=="string"?H(t,{id:e}):e)||null}getModifiers(){const{arrowEl:e,disableFlip:t,disablePointer:i,offsetDistance:a,offsetSkidding:n,filteredFlipPlacements:s}=this,l={name:"flip",enabled:!t};s&&(l.options={fallbackPlacements:s});const c={name:"arrow",enabled:!i};e&&(c.options={element:e});const p={name:"offset",enabled:!0,options:{offset:[n,a]}},w={name:"eventListeners",enabled:this.open};return[c,l,p,w]}createPopper(){this.destroyPopper();const{el:e,placement:t,effectiveReferenceElement:i,overlayPositioning:a}=this,n=this.getModifiers();this.popper=C({el:e,modifiers:n,overlayPositioning:a,placement:t,referenceEl:i})}destroyPopper(){const{popper:e}=this;e&&e.destroy(),this.popper=null}renderCloseButton(){const{dismissible:e,closeButton:t,intlClose:i}=this;return e||t?o("div",{class:r.closeButtonContainer},o("calcite-action",{class:r.closeButton,onClick:this.hide,ref:a=>this.closeButtonEl=a,text:i},o("calcite-icon",{icon:"x",scale:"m"}))):null}renderHeader(){const{heading:e,headingLevel:t}=this,i=e?o(L,{class:r.heading,level:t||M},e):null;return i?o("div",{class:r.header},i,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:e,heading:t,label:i,open:a,disablePointer:n}=this,s=e&&a,l=!s,c=n?null:o("div",{class:r.arrow,ref:p=>this.arrowEl=p});return o(y,{"aria-hidden":f(l),"aria-label":i,"calcite-hydrated-hidden":l,id:this.getId(),role:"dialog"},o("div",{class:{[m.animation]:!0,[m.animationActive]:s},onTransitionEnd:this.transitionEnd},c,o("div",{class:{[r.hasHeader]:!!t,[r.container]:!0}},this.renderHeader(),o("div",{class:r.content},o("slot",null)),t?null:this.renderCloseButton())))}get el(){return this}static get watchers(){return{flipPlacements:["flipPlacementsHandler"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return I}},[1,"calcite-popover",{autoClose:[516,"auto-close"],closeButton:[516,"close-button"],dismissible:[516],disableFlip:[516,"disable-flip"],disablePointer:[516,"disable-pointer"],flipPlacements:[16],heading:[1],headingLevel:[2,"heading-level"],label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[1,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],intlClose:[1,"intl-close"],effectiveReferenceElement:[32],reposition:[64],setFocus:[64],toggle:[64]}]);function T(){if(typeof customElements>"u")return;["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach(t=>{switch(t){case"calcite-popover":customElements.get(t)||customElements.define(t,$);break;case"calcite-action":customElements.get(t)||_();break;case"calcite-icon":customElements.get(t)||A();break;case"calcite-loader":customElements.get(t)||B();break}})}T();export{$ as P,T as d};