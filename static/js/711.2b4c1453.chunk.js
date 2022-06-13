"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[711],{2711:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(1161),a=n(885),s=n(2791),c=n(5048),i=n(4942),l=n(1413),o="form_form__8HMbI",u="form_input__YqRKK",m="form_btn__qqDOA",d="form_label__hvBm1",f=n(184),h=function(e){var t=e.onSubmit,n=(0,s.useState)({name:"",number:""}),r=(0,a.Z)(n,2),c=r[0],h=r[1],_=function(e){var t=e.target,n=t.name,r=t.value;h((0,l.Z)((0,l.Z)({},c),{},(0,i.Z)({},n,r)))},b=c.name,p=c.number;return(0,f.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault(),t(c),h({name:"",number:""})},children:[(0,f.jsx)("label",{className:d,htmlFor:"name",children:"Name"}),(0,f.jsx)("input",{value:b,type:"text",name:"name",id:"name",placeholder:"Enter Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:_,className:u}),(0,f.jsx)("br",{}),(0,f.jsx)("label",{className:d,htmlFor:"tel",children:"Number"}),(0,f.jsx)("input",{value:p,type:"tel",name:"number",id:"tel",placeholder:"Enter Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:_,className:u}),(0,f.jsx)("br",{}),(0,f.jsx)("button",{className:m,type:"submit",children:"Add Contact"})]})},_=h;h.defaultProps={onSubmit:function(){}};var b="contactItem_item__fFB7E",p="contactItem_btn__Ycsdp",x=function(e){var t=e.options,n=e.deleteNumber,r=(0,a.Z)(t,3),s=r[0],c=r[1],i=r[2];return(0,f.jsxs)("li",{className:b,children:[s,": ",c,(0,f.jsx)("button",{type:"button",className:p,onClick:function(){return n(i)},children:"Delete"})]})},v="contactList_list__i384l",N=function(e){var t=e.contacts,n=e.deleteNumber,r=t.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,f.jsx)(x,{options:[r,a,t],deleteNumber:n},t)}));return(0,f.jsx)("ul",{className:v,children:r})},j=N;N.defaultProps={contacts:[]};var C="filter_filter__wTVQD",g="filter_filterInput__tqGr6",Z=function(e){var t=e.onChange,n=e.filter;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("label",{className:C,htmlFor:"filter",children:[" ","Find by Name"]}),(0,f.jsx)("input",{type:"text",value:n,name:"filter",id:"filter",placeholder:"Find Contact by Name",className:g,onChange:t})]})},k=n(1116),w=function(e){return e.contacts.items},y=function(e){return e.contacts.loading},F=function(e){return e.contacts.error},A=n(4295),q={container:"myNumbers_container__GX25n"},S=function(){var e=(0,c.v9)(w,c.wU),t=(0,c.v9)(y,c.wU),n=(0,c.v9)(F,c.wU),r=(0,c.I0)(),i=(0,s.useState)(""),l=(0,a.Z)(i,2),o=l[0],u=l[1];(0,s.useEffect)((function(){r((0,A.sb)())}),[r]);var m=(0,s.useCallback)((function(e){return r((0,A.uK)(e))}),[r]),d=(0,s.useCallback)((function(e){return r((0,A.zY)(e))}),[r]),h=(0,s.useCallback)((function(e){return u(e.target.value)}),[u]);return(0,f.jsxs)("div",{className:q.container,children:[(0,f.jsx)(_,{onSubmit:m}),(0,f.jsx)("h2",{className:q.title,children:"Contacts"}),(0,f.jsx)(Z,{onChange:h,filter:o}),n&&(0,f.jsx)("div",{className:q.error,children:n}),t&&(0,f.jsx)(k.Z,{}),(0,f.jsx)(j,{contacts:function(){if(!o)return e;var t=o.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),deleteNumber:d})]})},z=function(){return(0,f.jsx)(r.Z,{title:"PhoneBook",children:(0,f.jsx)(S,{})})}},1161:function(e,t,n){n.d(t,{Z:function(){return i}});var r="section_section__CRLm3",a="section_title__9rYps",s=n(184),c=function(e){var t=e.title,n=e.children;return(0,s.jsxs)("div",{className:r,children:[(0,s.jsx)("h2",{className:a,children:t}),n]})};c.defaultProps={title:""};var i=c}}]);
//# sourceMappingURL=711.2b4c1453.chunk.js.map