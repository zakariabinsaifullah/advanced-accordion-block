!function(e){function t(o){if(n[o])return n[o].exports;var l=n[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=wp.blockEditor},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(2)},function(e,t,n){"use strict";var o=n(3),l=n(4),a=n(6),r=(n.n(a),n(7)),c=(n.n(r),n(0)),__=(n.n(c),wp.i18n.__);(0,wp.blocks.registerBlockType)("aab/accordion-block",{title:__("Accordion Block"),description:__("Accordion Block allows you to showcase your content in accordion behavior."),icon:"menu-alt3",category:"accordiion-block",keywords:[__("Accordion Block")],attributes:o.a,edit:l.a,save:function(e){var t=e.attributes,n=t.className,o=t.heading,l=t.headingTag,a=t.headingColor,r=t.showIcon,i=t.iconClass,s=t.borderTopWidth,d=t.borderBottomWidth,p=t.borderTopColor,u=t.borderBottomColor;return wp.element.createElement("div",{className:n+" single-accordion-container",style:{borderTop:s+"px solid "+p,borderBottom:d+"px solid "+u}},wp.element.createElement("div",{className:"accordion-head",style:{color:a}},wp.element.createElement("div",{className:"accordion-heading"},wp.element.createElement(c.RichText.Content,{tagName:l,value:o})),r&&wp.element.createElement("div",{className:"collapse-icon"},wp.element.createElement("span",{className:"dashicons dashicons-"+i}))),wp.element.createElement("div",{className:"accordion-body"},wp.element.createElement(c.InnerBlocks.Content,null)))}})},function(e,t,n){"use strict";var o={heading:{type:"string",default:"Accordion Heading"},headingTag:{type:"string",default:"h4"},headingColor:{type:"string",default:"#000000"},showIcon:{type:"boolean",default:!0},iconClass:{type:"string",default:"plus-alt2"},borderTopWidth:{type:"number",default:1},borderBottomWidth:{type:"number",default:0},borderTopColor:{type:"string",default:"#cccccc"},borderBottomColor:{type:"string",default:"#cccccc"},makeActive:{type:"boolean",default:!1},active:{type:"string",default:"active"}};t.a=o},function(e,t,n){"use strict";var o=n(0),l=(n.n(o),n(5)),a=(n.n(l),wp.element.Fragment),r=[{label:"h1",value:"h1"},{label:"h2",value:"h2"},{label:"h3",value:"h3"},{label:"h4",value:"h4"},{label:"h5",value:"h5"},{label:"h6",value:"h6"}],c=[{label:"Plus Minus",value:"plus-alt2"},{label:"Arrow Up Down",value:"arrow-down-alt2"},{label:"Open Close",value:"plus-alt"}],i=function(e){var t=e.attributes,n=e.setAttributes,i=t.className,s=t.heading,d=t.headingTag,p=t.headingColor,u=t.showIcon,m=t.iconClass,h=t.borderTopWidth,b=t.borderBottomWidth,g=t.borderTopColor,w=t.borderBottomColor;return wp.element.createElement(a,null,wp.element.createElement(o.InspectorControls,null,wp.element.createElement(l.PanelBody,{initialOpen:!0,title:"Container Options"},wp.element.createElement(l.RangeControl,{label:"Top Border Width",value:h,onChange:function(e){return n({borderTopWidth:e})},min:0,max:50}),wp.element.createElement(l.RangeControl,{label:"Bottom Border Width",value:b,onChange:function(e){return n({borderBottomWidth:e})},min:0,max:50})),wp.element.createElement(o.PanelColorSettings,{title:"Borders Colors",initialOpen:!1,colorSettings:[{value:g,onChange:function(e){return n({borderTopColor:e})},label:"Top Border Color"},{value:w,onChange:function(e){return n({borderBottomColor:e})},label:"Bottom Border Color"}]}),wp.element.createElement(l.PanelBody,{initialOpen:!1,title:"Heading Options"},wp.element.createElement(l.SelectControl,{label:"Heading Tag",options:r,onChange:function(e){return n({headingTag:e})},value:d}),wp.element.createElement(l.ToggleControl,{label:"Show Expand Icon",checked:u,onChange:function(){return n({showIcon:!u})}}),u&&wp.element.createElement(a,null,wp.element.createElement(l.SelectControl,{label:"Select Icon Type",options:c,onChange:function(e){n({iconClass:e})},value:m}))),wp.element.createElement(o.PanelColorSettings,{title:"Heading Color",initialOpen:!1,colorSettings:[{value:p,onChange:function(e){return n({headingColor:e})},label:"Heading Color"}]})),wp.element.createElement("div",{className:i+" single-accordion-container",style:{borderTop:h+"px solid "+g,borderBottom:b+"px solid "+w}},wp.element.createElement("div",{className:"accordion-head",style:{color:p}},wp.element.createElement("div",{className:"accordion-heading"},wp.element.createElement(o.RichText,{tagName:d,value:s,onChange:function(e){return n({heading:e})}})),u&&wp.element.createElement("div",{className:"collapse-icon"},wp.element.createElement("span",{className:"dashicons dashicons-"+m}))),wp.element.createElement("div",{className:"accordion-body"},wp.element.createElement(o.InnerBlocks,{allowedBlocks:!0,template:[["core/paragraph",{placeholder:"Write content here.."}]]}))))};t.a=i},function(e,t){e.exports=wp.components},function(e,t){},function(e,t){}]);