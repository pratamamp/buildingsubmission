import{bH as b,bI as x,fK as y,bJ as s,fM as k}from"./index.ce207a0f.js";import{a as r,t as w,f as D}from"./dom.6d780cb1.js";import{g as I}from"./guid.d207555c.js";import{c as A}from"./observers.06e41a21.js";import{c as M,d as B}from"./conditionalSlot.637354b7.js";import{d as C}from"./action.92de23ef.js";import{d as O}from"./icon.158665a2.js";import{d as K}from"./loader.acdbfaa1.js";import{d as _}from"./popover.fac29868.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */function u(t,e){return(t+e)%e}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */const m={menu:"menu",defaultTrigger:"default-trigger"},c={tooltip:"tooltip",trigger:"trigger"},P={menu:"ellipsis"},S="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size-1);color:var(--calcite-ui-text-2)}.menu ::slotted(calcite-action){margin:0.125rem;display:-ms-flexbox;display:flex;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}::slotted(calcite-action[active]){outline:2px solid var(--calcite-ui-brand);outline-offset:0px}.default-trigger{position:relative;height:100%;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;height:100%;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch}.menu{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}",d=["ArrowUp","ArrowDown"],f=["ArrowUp","ArrowDown","End","Home"],T=b(class extends x{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionMenuOpenChange=y(this,"calciteActionMenuOpenChange",7),this.expanded=!1,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.actionElements=[],this.mutationObserver=A("mutation",()=>this.getActions()),this.guid=`calcite-action-menu-${I()}`,this.menuId=`${this.guid}-menu`,this.menuButtonId=`${this.guid}-menu-button`,this.activeMenuItemIndex=-1,this.connectMenuButtonEl=()=>{const{el:t,menuButtonId:e,menuId:n,open:a,label:o}=this,i=r(t,c.trigger)||this.defaultMenuButtonEl;this.menuButtonEl!==i&&(this.disconnectMenuButtonEl(),this.menuButtonEl=i,this.setTooltipReferenceElement(),i&&(i.active=a,i.setAttribute("aria-controls",n),i.setAttribute("aria-expanded",w(a)),i.setAttribute("aria-haspopup","true"),i.id||(i.id=e),i.label||(i.label=o),i.text||(i.text=o),i.addEventListener("click",this.menuButtonClick),i.addEventListener("keydown",this.menuButtonKeyDown),i.addEventListener("keyup",this.menuButtonKeyUp)))},this.disconnectMenuButtonEl=()=>{const{menuButtonEl:t}=this;!t||(t.removeEventListener("click",this.menuButtonClick),t.removeEventListener("keydown",this.menuButtonKeyDown),t.removeEventListener("keyup",this.menuButtonKeyUp))},this.setDefaultMenuButtonEl=t=>{this.defaultMenuButtonEl=t,this.connectMenuButtonEl()},this.handleCalciteActionClick=()=>{this.open=!1,this.setFocus()},this.menuButtonClick=()=>{this.toggleOpen()},this.updateTooltip=t=>{const e=t.target.assignedElements({flatten:!0}).filter(n=>n==null?void 0:n.matches("calcite-tooltip"));this.tooltipEl=e[0],this.setTooltipReferenceElement()},this.setTooltipReferenceElement=()=>{const{tooltipEl:t,expanded:e,menuButtonEl:n}=this;t&&(t.referenceElement=e?null:n)},this.updateAction=(t,e)=>{const{guid:n,activeMenuItemIndex:a}=this,o=`${n}-action-${e}`;t.tabIndex=-1,t.setAttribute("role","menuitem"),t.id||(t.id=o),t.active=e===a},this.updateActions=t=>{t==null||t.forEach(this.updateAction)},this.getActions=()=>{const{el:t}=this,e=r(t,{all:!0,matches:"calcite-action"});this.updateActions(e),this.actionElements=e,this.connectMenuButtonEl()},this.menuButtonKeyUp=t=>{const{key:e}=t,{actionElements:n}=this;!this.isValidKey(e,d)||(t.preventDefault(),n.length&&(this.toggleOpen(!0),this.handleActionNavigation(e,n)))},this.menuButtonKeyDown=t=>{const{key:e}=t;!this.isValidKey(e,d)||t.preventDefault()},this.menuActionsContainerKeyDown=t=>{const{key:e}=t,{actionElements:n,activeMenuItemIndex:a}=this;if(e==="Tab"){this.open=!1;return}if(e===" "||e==="Enter"){t.preventDefault();const o=n[a];o?o.click():this.toggleOpen(!1);return}this.isValidKey(e,f)&&t.preventDefault()},this.menuActionsContainerKeyUp=t=>{const{key:e}=t,{actionElements:n}=this;if(e==="Escape"){this.toggleOpen(!1);return}!this.isValidKey(e,f)||(t.preventDefault(),n.length&&this.handleActionNavigation(e,n))},this.handleActionNavigation=(t,e)=>{const n=this.activeMenuItemIndex;t==="Home"&&(this.activeMenuItemIndex=0),t==="End"&&(this.activeMenuItemIndex=e.length-1),t==="ArrowUp"&&(this.activeMenuItemIndex=u(Math.max(n-1,-1),e.length)),t==="ArrowDown"&&(this.activeMenuItemIndex=u(n+1,e.length))},this.toggleOpenEnd=()=>{this.setFocus(),this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)},this.toggleOpen=(t=!this.open)=>{this.el.addEventListener("calcitePopoverOpen",this.toggleOpenEnd),this.open=t}}connectedCallback(){var t;(t=this.mutationObserver)===null||t===void 0||t.observe(this.el,{childList:!0,subtree:!0}),this.getActions(),M(this)}disconnectedCallback(){var t;(t=this.mutationObserver)===null||t===void 0||t.disconnect(),this.disconnectMenuButtonEl(),B(this)}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(t){this.activeMenuItemIndex=this.open?0:-1,this.menuButtonEl&&(this.menuButtonEl.active=t),this.calciteActionMenuOpenChange.emit(t)}closeCalciteActionMenuOnClick(t){t.composedPath().includes(this.el)||(this.open=!1)}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){D(this.open?this.menuEl:this.menuButtonEl)}renderMenuButton(){const{label:t,scale:e}=this;return s("slot",{name:c.trigger},s("calcite-action",{class:m.defaultTrigger,icon:P.menu,ref:this.setDefaultMenuButtonEl,scale:e,text:t}))}renderMenuItems(){const{actionElements:t,activeMenuItemIndex:e,open:n,menuId:a,menuButtonEl:o,label:i,placement:p,overlayPositioning:h,flipPlacements:g}=this,l=t[e],v=(l==null?void 0:l.id)||null;return s("calcite-popover",{disablePointer:!0,flipPlacements:g,label:i,offsetDistance:0,open:n,overlayPositioning:h,placement:p,referenceElement:o},s("div",{"aria-activedescendant":v,"aria-labelledby":o==null?void 0:o.id,class:m.menu,id:a,onClick:this.handleCalciteActionClick,onKeyDown:this.menuActionsContainerKeyDown,onKeyUp:this.menuActionsContainerKeyUp,ref:E=>this.menuEl=E,role:"menu",tabIndex:-1},s("slot",null)))}render(){return s(k,null,this.renderMenuButton(),this.renderMenuItems(),s("slot",{name:c.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(t,e){return!!e.find(n=>n===t)}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}static get style(){return S}},[1,"calcite-action-menu",{expanded:[516],flipPlacements:[16],label:[1],open:[1540],overlayPositioning:[1,"overlay-positioning"],placement:[513],scale:[513],activeMenuItemIndex:[32],setFocus:[64]},[[8,"click","closeCalciteActionMenuOnClick"]]]);function U(){if(typeof customElements>"u")return;["calcite-action-menu","calcite-action","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-menu":customElements.get(e)||customElements.define(e,T);break;case"calcite-action":customElements.get(e)||C();break;case"calcite-icon":customElements.get(e)||O();break;case"calcite-loader":customElements.get(e)||K();break;case"calcite-popover":customElements.get(e)||_();break}})}U();export{T as A,c as S,U as d};