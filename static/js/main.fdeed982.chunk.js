(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={contactList:"ContactList_contactList__3HQy2",contactItem:"ContactList_contactItem__2iHk0"}},11:function(e,t,n){e.exports={inputLabel:"Filter_inputLabel__1H-K2",inputFilter:"Filter_inputFilter__3kwvx"}},19:function(e,t,n){},2:function(e,t,n){e.exports={ContactForm:"ContactForm_ContactForm__3OVGp",align:"ContactForm_align__2el38",inputLabel:"ContactForm_inputLabel__3gcsj",formInput:"ContactForm_formInput__1Ma-q",radioAlign:"ContactForm_radioAlign__4oZuQ",radioTitle:"ContactForm_radioTitle__ZLEVI",radioLabel:"ContactForm_radioLabel__16Dz_",btnSubmit:"ContactForm_btnSubmit__2XURy"}},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),i=(n(18),n(19),n(13)),l=n(3);var s=n(7),u=n.n(s),b=n(2),m=n.n(b),d=n(0);function j(e){var t=e.contacts,n=e.onSubmit,c=Object(a.useState)(""),r=Object(l.a)(c,2),o=r[0],i=r[1],s=Object(a.useState)(""),b=Object(l.a)(s,2),j=b[0],p=b[1],h=Object(a.useState)("home"),f=Object(l.a)(h,2),O=f[0],v=f[1],g=u.a.generate(),x=u.a.generate(),_=function(){i(""),p(""),v("home")},y=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":p(a);break;case"contactType":v(a);break;default:return}};return Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),t.find((function(e){return e.name===o})))return alert("".concat(o," is already in contacts"));n({id:u.a.generate(),name:o,number:j,contactType:O}),_()},className:m.a.ContactForm,children:[Object(d.jsxs)("div",{className:m.a.align,children:[Object(d.jsxs)("label",{htmlFor:g,className:m.a.inputLabel,children:["Name",Object(d.jsx)("input",{className:m.a.formInput,type:"text",name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off",id:g,placeholder:"Enter name",onChange:y})]}),Object(d.jsxs)("label",{htmlFor:x,className:m.a.inputLabel,children:["Number",Object(d.jsx)("input",{className:m.a.formInput,type:"tel",name:"number",value:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:x,placeholder:"+380...",onChange:y})]})]}),Object(d.jsx)("p",{className:m.a.radioTitle,children:"Choose type of contact"}),Object(d.jsxs)("div",{className:m.a.radioAlign,children:[Object(d.jsxs)("label",{className:m.a.radioLabel,children:[Object(d.jsx)("input",{type:"radio",name:"contactType",value:"home",onChange:y,checked:"home"===O}),"Home"]}),Object(d.jsxs)("label",{className:m.a.radioLabel,children:[Object(d.jsx)("input",{type:"radio",name:"contactType",value:"work",onChange:y,checked:"work"===O}),"Work"]}),Object(d.jsxs)("label",{className:m.a.radioLabel,children:[Object(d.jsx)("input",{type:"radio",name:"contactType",value:"other",onChange:y,checked:"other"===O}),"Other"]})]}),Object(d.jsx)("button",{className:m.a.btnSubmit,type:"submit",disabled:!o,children:"Add contact"})]})}var p,h=n(8),f=n.n(h),O=["title","titleId"];function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function x(e,t){var n=e.title,c=e.titleId,r=g(e,O);return a.createElement("svg",v({id:"Layer_1",enableBackground:"new 0 0 512 512",height:512,viewBox:"0 0 512 512",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},r),n?a.createElement("title",{id:c},n):null,p||(p=a.createElement("g",null,a.createElement("path",{d:"m424 64h-88v-16c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16h-88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zm-216-16c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96z"}),a.createElement("path",{d:"m78.364 184c-2.855 0-5.13 2.386-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042c.136-2.852-2.139-5.238-4.994-5.238zm241.636 40c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z"}))))}var _=a.forwardRef(x),y=(n.p,function(e){var t=e.name,n=e.number,a=e.contactType,c=e.onDelete;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:t}),Object(d.jsxs)("div",{className:f.a.align,children:[Object(d.jsx)("p",{children:n}),Object(d.jsxs)("p",{className:f.a.contactType,children:["(",a,")"]})]}),Object(d.jsx)("button",{className:f.a.btnDelete,onClick:c,children:Object(d.jsx)(_,{width:"25",height:"20"})})]})}),C=n(10),N=n.n(C),w=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(d.jsx)("ul",{className:N.a.contactList,children:t.map((function(e){var t=e.id,a=e.name,c=e.number,r=e.contactType;return Object(d.jsx)("li",{className:N.a.contactItem,children:Object(d.jsx)(y,{name:a,number:c,contactType:r,onDelete:function(){return n(t)}})},t)}))})},k=n(11),L=n.n(k),F=function(e){var t=e.value,n=e.onChange;return Object(d.jsxs)("label",{className:L.a.inputLabel,children:["Find contact by name",Object(d.jsx)("input",{className:L.a.inputFilter,type:"text",name:"filter",value:t,placeholder:"Start to type",onChange:n})]})};n(29);function S(){var e=function(e,t){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),c=Object(l.a)(n,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,o]}("contacts",[]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),s=o[0],u=o[1],b=function(){var e=s.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"App-header",children:"Phonebook"}),Object(d.jsx)(j,{contacts:n,onSubmit:function(e){var t=e.name,n=e.number,a=e.contactType,r=e.id;c((function(e){return[{name:t,number:n,contactType:a,id:r}].concat(Object(i.a)(e))}))}}),Object(d.jsx)("h2",{className:"App-header",children:"Contacts"}),Object(d.jsx)(F,{value:s,onChange:function(e){u(e.currentTarget.value)}}),0!==b.length?Object(d.jsx)(w,{contacts:b,onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))})),u("")}}):Object(d.jsx)("p",{className:"plug-paragraph",children:"No contact exists"})]})}o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={align:"Contact_align__2Sc5b",contactType:"Contact_contactType__3inJ6",btnDelete:"Contact_btnDelete__2nzJd"}}},[[30,1,2]]]);
//# sourceMappingURL=main.fdeed982.chunk.js.map