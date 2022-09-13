import{d7 as u,d8 as p,da as n,db as b}from"./index.52935b46.js";import{a as o}from"./dom.6d780cb1.js";import{c as x,d as h}from"./conditionalSlot.14b9b076.js";import{u as y}from"./interactive.890c7fc0.js";import"./observers.e1b59ee4.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */const e={container:"container",contentContainer:"content-container",nestedContainer:"nested-container",contentContainerButton:"content-container--button",content:"content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",actionsEnd:"actions-end",hasCenterContent:"has-center-content"},i={actionsStart:"actions-start",contentStart:"content-start",contentEnd:"content-end",actionsEnd:"actions-end"},g="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family)}.container *{-webkit-box-sizing:border-box;box-sizing:border-box}.nested-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.content-container{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:stretch;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.content-container--button{cursor:pointer;border-style:none;background-color:var(--calcite-ui-foreground-1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;text-align:initial}.content-container--button:hover{background-color:var(--calcite-ui-foreground-2)}.content-container--button:hover .label,.content-container--button:hover .description{color:var(--calcite-ui-text-1)}.content-container--button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.content-container--button .content-start,.content-container--button .content-end{pointer-events:none}.content{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child{margin:0px;padding-top:0.25rem;padding-bottom:0.25rem}.label{color:var(--calcite-ui-text-1)}.description{margin-top:0.125rem;color:var(--calcite-ui-text-3)}.content-start{-ms-flex-pack:start;justify-content:flex-start}.content-end{-ms-flex-pack:end;justify-content:flex-end}.content-start,.content-end{-ms-flex:1 1 auto;flex:1 1 auto}.has-center-content .content-start,.has-center-content .content-end{-ms-flex:0 1 auto;flex:0 1 auto}.actions-start,.actions-end,.content-start,.content-end{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){-ms-flex-item-align:center;align-self:center;padding-left:0.75rem;padding-right:0.75rem}.actions-start ::slotted(calcite-action),.actions-end ::slotted(calcite-action){-ms-flex-item-align:stretch;align-self:stretch;color:inherit}::slotted(calcite-list-item-group),::slotted(calcite-list-item){padding-left:0.5rem}",c=u(class extends p{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.nonInteractive=!1,this.disabled=!1}componentDidRender(){y(this)}connectedCallback(){x(this)}disconnectedCallback(){h(this)}async setFocus(){var t;(t=this.focusEl)===null||t===void 0||t.focus()}renderActionsStart(){const{el:t}=this;return o(t,i.actionsStart)?n("div",{class:e.actionsStart},n("slot",{name:i.actionsStart})):null}renderActionsEnd(){const{el:t}=this;return o(t,i.actionsEnd)?n("div",{class:e.actionsEnd},n("slot",{name:i.actionsEnd})):null}renderContentStart(){const{el:t}=this;return o(t,i.contentStart)?n("div",{class:e.contentStart},n("slot",{name:i.contentStart})):null}renderContentEnd(){const{el:t}=this;return o(t,i.contentEnd)?n("div",{class:e.contentEnd},n("slot",{name:i.contentEnd})):null}renderContent(){const{label:t,description:a}=this;return!!t||!!a?n("div",{class:e.content},t?n("div",{class:e.label},t):null,a?n("div",{class:e.description},a):null):null}renderContentContainer(){const{description:t,disabled:a,label:d,nonInteractive:m}=this,r=!!d||!!t,s=[this.renderContentStart(),this.renderContent(),this.renderContentEnd()];return m?n("div",{class:{[e.contentContainer]:!0,[e.hasCenterContent]:r},ref:()=>this.focusEl=null},s):n("button",{class:{[e.contentContainer]:!0,[e.contentContainerButton]:!0,[e.hasCenterContent]:r},disabled:a,ref:f=>this.focusEl=f},s)}render(){return n(b,{role:"listitem"},n("div",{class:e.container},this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),n("div",{class:e.nestedContainer},n("slot",null)))}get el(){return this}static get style(){return g}},[1,"calcite-list-item",{nonInteractive:[516,"non-interactive"],description:[1],disabled:[516],label:[1],setFocus:[64]}]);function l(){if(typeof customElements>"u")return;["calcite-list-item"].forEach(a=>{switch(a){case"calcite-list-item":customElements.get(a)||customElements.define(a,c);break}})}l();const E=c,S=l;export{E as CalciteListItem,S as defineCustomElement};