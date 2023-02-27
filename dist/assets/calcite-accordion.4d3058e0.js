import{bK as l,bL as d,fK as p,bM as n}from"./index.f5fb6b4d.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */const h="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-accordion-item-spacing-unit:0.25rem;--calcite-accordion-icon-margin:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-icon-margin:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-icon-margin:1rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:block;max-width:100%;line-height:1.5rem;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}.accordion--transparent{--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}.accordion--minimal{--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0}.accordion{border-width:1px;border-bottom-width:0px;border-style:solid;border-color:var(--calcite-ui-border-2)}",c=l(class extends d{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteAccordionChange=p(this,"calciteAccordionChange",7),this.appearance="default",this.iconPosition="end",this.iconType="chevron",this.scale="m",this.selectionMode="multi",this.items=[],this.sorted=!1,this.sortItems=t=>t.sort((i,e)=>i.position-e.position).map(i=>i.item)}componentDidLoad(){this.sorted||(this.items=this.sortItems(this.items),this.sorted=!0)}render(){return n("div",{class:{"accordion--transparent":this.appearance==="transparent","accordion--minimal":this.appearance==="minimal",accordion:this.appearance==="default"}},n("slot",null))}calciteAccordionItemKeyEvent(t){const i=t.detail.item,e=t.detail.parent;if(this.el===e){const s=i.key,a=t.target,r=this.itemIndex(a)===0,m=this.itemIndex(a)===this.items.length-1;switch(s){case"ArrowDown":m?this.focusFirstItem():this.focusNextItem(a);break;case"ArrowUp":r?this.focusLastItem():this.focusPrevItem(a);break;case"Home":this.focusFirstItem();break;case"End":this.focusLastItem();break}}}registerCalciteAccordionItem(t){const i={item:t.target,parent:t.detail.parent,position:t.detail.position};this.el===i.parent&&this.items.push(i)}updateActiveItemOnChange(t){this.requestedAccordionItem=t.detail.requestedAccordionItem,this.calciteAccordionChange.emit({requestedAccordionItem:this.requestedAccordionItem})}focusFirstItem(){const t=this.items[0];this.focusElement(t)}focusLastItem(){const t=this.items[this.items.length-1];this.focusElement(t)}focusNextItem(t){const i=this.itemIndex(t),e=this.items[i+1]||this.items[0];this.focusElement(e)}focusPrevItem(t){const i=this.itemIndex(t),e=this.items[i-1]||this.items[this.items.length-1];this.focusElement(e)}itemIndex(t){return this.items.indexOf(t)}focusElement(t){t.focus()}get el(){return this}static get style(){return h}},[1,"calcite-accordion",{appearance:[513],iconPosition:[513,"icon-position"],iconType:[513,"icon-type"],scale:[513],selectionMode:[513,"selection-mode"]},[[0,"calciteAccordionItemKeyEvent","calciteAccordionItemKeyEvent"],[0,"calciteAccordionItemRegister","registerCalciteAccordionItem"],[0,"calciteAccordionItemSelect","updateActiveItemOnChange"]]]);function o(){if(typeof customElements>"u")return;["calcite-accordion"].forEach(i=>{switch(i){case"calcite-accordion":customElements.get(i)||customElements.define(i,c);break}})}o();const u=c,g=o;export{u as CalciteAccordion,g as defineCustomElement};