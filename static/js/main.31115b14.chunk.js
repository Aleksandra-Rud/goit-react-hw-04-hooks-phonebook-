(this["webpackJsonpgoit-react-hw-04-hooks-phonebook-"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook-"]||[]).push([[0],[,,,function(t,e,n){t.exports={formLbl:"Form_formLbl__tPF02",inputLbl:"Form_inputLbl__2Pduc",btnInput:"Form_btnInput__3mWfA"}},function(t,e,n){t.exports={contactLists:"ContactList_contactLists__2qu83",contactItem:"ContactList_contactItem__27boU",contactName:"ContactList_contactName__aoe0B",deleteContactBtn:"ContactList_deleteContactBtn__1LpuW"}},,,,function(t,e,n){t.exports={filteredInputLabel:"Filter_filteredInputLabel__2OMbP",filteredInput:"Filter_filteredInput__iiz_3"}},,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),i=(n(15),n(9)),s=n(2),l=n(3),u=n.n(l),b=n(20),m=n(0);var d=function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),d=l[0],j=l[1],f=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":j(a);break;default:return}},p=function(){o(""),j("")},O=Object(b.a)(),h=Object(b.a)();return Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=Object(b.a)();e({id:n,name:r,number:d}),p()},children:[Object(m.jsxs)("label",{htmlFor:O,className:u.a.formLbl,children:[" ","Name",Object(m.jsx)("input",{type:"text",name:"name",value:r,onChange:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:u.a.inputLbl})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{htmlFor:h,className:u.a.formLbl,children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",value:d,onChange:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:u.a.inputLbl})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",className:u.a.btnInput,children:"Add Contact"})]})},j=n(4),f=n.n(j);var p=function(t){var e=t.contacts,n=t.deleteContact;return Object(m.jsx)("ul",{className:f.a.contactLists,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(m.jsxs)("li",{className:f.a.contactItem,children:[Object(m.jsxs)("p",{className:f.a.contactName,children:[e,": ",Object(m.jsx)("span",{className:f.a.contactNumber,children:a})]}),Object(m.jsx)("button",{type:"button",onClick:function(){return n(c)},className:f.a.btnDelete,children:"Delete"})]},c)}))})},O=n(8),h=n.n(O),x=function(t){var e=t.value,n=t.filteredValue;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("label",{className:h.a.filterInputLabel,children:"Find contacts by name"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:h.a.filteredInput,type:"text",name:"filter",value:e,onChange:n,placeholder:"Contact"})]})},_=(n(17),[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]);var C=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),l=o[0],u=o[1];return Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("contacts"));c(t||_)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(d,{onSubmit:function(t){if(n.some((function(e){return e.name.toLowerCase().includes(t.name.toLowerCase())})))return alert("".concat(t.name," is already in contacts"));c([t].concat(Object(i.a)(n)))}}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(x,{value:l,filteredValue:function(t){u(t.target.value)}})]}),Object(m.jsx)("div",{children:Object(m.jsx)(p,{title:"Contacts",deleteContact:function(t){c(Object(i.a)(n.filter((function(e){return e.id!==t}))))},contacts:function(){var t=l.toLocaleLowerCase().trim();return n.filter((function(e){return e.name.toLocaleLowerCase().trim().includes(t)}))}()})})]})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root")),L()}],[[18,1,2]]]);
//# sourceMappingURL=main.31115b14.chunk.js.map