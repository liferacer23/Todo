(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var o=c(1),n=c.n(o),s=c(9),a=c.n(s),l=(c(15),c(4)),d=c(2),i=(c(16),c(10)),r=c(3),u=c(6),j=c(0),b=function(e){var t=e.text,c=e.todos,n=e.todo,s=e.setTodos,a=Object(o.useState)(!1),l=Object(d.a)(a,2),i=l[0],b=l[1];return Object(j.jsxs)("div",{className:"todo ".concat(n.delete?"fall":""),children:[Object(j.jsx)("button",{onClick:function(e){b(!i),e.preventDefault(),s(c.map((function(e){return e.id===n.id?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn",children:Object(j.jsx)(r.a,{className:"check ".concat(n.completed?"checked":"")})}),Object(j.jsx)("input",{placeholder:t,className:"todo-item ".concat(n.completed?"completed":"")}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),s(c.map((function(e){return e.id===n.id?Object(u.a)(Object(u.a)({},e),{},{delete:!e.delete}):e}))),s(c.filter((function(e){return e.id!==n.id})))},className:"trash-btn",children:Object(j.jsx)("i",{className:"trash",children:Object(j.jsx)(r.b,{})})})]})},O=function(e){var t=e.todos,c=e.setTodos,o=e.filteredTodos;return Object(j.jsx)("div",{className:"todo-container",children:Object(j.jsx)("ul",{className:"todo-list",children:o.map((function(e){return Object(j.jsx)(b,{todo:e,setTodos:c,todos:t,text:e.text},e.id)}))})})},m=function(e){var t=e.setStatus,c=e.setInputText,o=e.todos,n=e.setTodos,s=e.inputText,a=e.filteredTodos;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"TODO"})}),Object(j.jsxs)("div",{className:"input-section",children:[Object(j.jsx)("input",{value:s,onChange:function(e){c(e.target.value)},type:"text",className:"todo-input"}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),n([].concat(Object(i.a)(o),[{text:s,completed:!1,delete:!1,id:100*Math.random()}])),c("")},className:"todo-button",type:"submit",children:Object(j.jsx)(r.c,{className:"plus-icon"})})]}),Object(j.jsx)(O,{filteredTodos:a,setTodos:n,todos:o}),Object(j.jsx)("div",{className:"select",children:Object(j.jsxs)("div",{onClick:function(e){e.preventDefault(),t(e.target.value)},name:"todos",className:"filter-todo",children:[Object(j.jsxs)("button",{value:"all",className:"number-display",children:[o.length," Items left"]}),Object(j.jsxs)("div",{className:"filter-display",children:[Object(j.jsx)("button",{value:"all",children:"All"}),Object(j.jsx)("button",{value:"completed",children:"Completed"}),Object(j.jsx)("button",{value:"uncompleted",children:"Uncompleted"})]}),Object(j.jsx)("button",{className:"clear-completed",value:"Clear Completed",children:"Clear Completed"})]})})]})})};var f=function(){var e,t=Object(o.useState)(""),c=Object(d.a)(t,2),n=c[0],s=c[1],a=Object(o.useState)([]),i=Object(d.a)(a,2),r=i[0],u=i[1],b=Object(o.useState)("all"),O=Object(d.a)(b,2),f=O[0],p=O[1],x=Object(o.useState)([]),h=Object(d.a)(x,2),v=h[0],N=h[1];Object(o.useEffect)((function(){S()}),[]),Object(o.useEffect)((function(){g(),T()}),[f,r]);var g=function(){switch(f){case"completed":N(r.filter((function(e){return!0===e.completed})));break;case"uncompleted":N(r.filter((function(e){return!1===e.completed})));break;default:N(r)}},T=function(){localStorage.setItem("todo",JSON.stringify(r))},S=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todo",JSON.stringify(r)));u(e)}};return Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("header",{}),Object(j.jsx)(m,(e={filteredTodos:v,setTodos:u,todos:r,status:f,setStatus:p,inputText:n},Object(l.a)(e,"todos",r),Object(l.a)(e,"setTodos",u),Object(l.a)(e,"setInputText",s),e))]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,o=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),o(e),n(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),p()}},[[18,1,2]]]);
//# sourceMappingURL=main.bda484a5.chunk.js.map