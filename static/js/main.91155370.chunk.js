(this["webpackJsonppersonal-assistant"]=this["webpackJsonppersonal-assistant"]||[]).push([[0],{37:function(e,t,n){e.exports=n(50)},43:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a,o,c,l,i,r,s,d,u,m,p,f,h,b,E,j,g,x,v,O=n(0),w=n.n(O),y=n(26),L=n.n(y),T=n(9),k=(n(42),n(43),n(16)),C=n(4),S=n(2),H=n(3),N=H.a.ul(a||(a=Object(S.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center; \n  background-color: black;\n  font-weight: bold;\n  list-style: none;\n  height: 50px;\n"]))),z=Object(H.a)(k.b)(o||(o=Object(S.a)(["\n  text-decoration: none;\n  color: #6699cc;\n  font-weight: bold;\n  font-size: 20px;\n  padding: 10px;\n\n  &:hover {\n    background: #6699cc;\n    color: white;\n  }\n"]))),D=function(){return w.a.createElement(N,null,w.a.createElement("li",null,w.a.createElement(z,{to:"/"},"Home")),w.a.createElement("li",null,w.a.createElement(z,{to:"/addTodo"},"Add Todo")),w.a.createElement("li",null,w.a.createElement(z,{to:"/history"},"History")))},M=H.a.button(c||(c=Object(S.a)(["\n  background: #6699cc; \n  color: white;\n  padding: 10px;\n  margin-top: 10px;\n  font-size: 15px;\n  width: 100%;\n"]))),A=H.a.input(l||(l=Object(S.a)(["\n  font-size: 15px;\n  padding: 10px;\n  margin-top: 25px;\n  background: #ff7f7;\n  width: 100%;\n"]))),F=H.a.form(i||(i=Object(S.a)(["\n  width: 40%;\n  @media (max-width: 800px) {\n    width: 80%;\n  }\n"]))),I=H.a.div(r||(r=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n"]))),J=n(17),P=n(33),q=n(36),B=H.a.h3(s||(s=Object(S.a)(["\n  text-align: center;\n"]))),R=function(e){var t=e.modalCloseHandler,n=e.todo,a=e.setTodo,o=e.todosList,c=e.setTodosList;return w.a.createElement("div",null,w.a.createElement(B,null,"Plan to complete on"),w.a.createElement(P.a,{onChange:function(e){c([].concat(Object(J.a)(o),[{id:Object(q.a)(),todo:n,date:e,status:new Date>e?"failed":"inprogress"}])),a(""),t()},className:"calendar"}))},G=function(e){var t=e.isOpen,n=e.modalCloseHandler,a=e.todo,o=e.setTodo,c=e.todosList,l=e.setTodosList,i=t?"modal display-block":"modal display-none";return w.a.createElement("div",{className:i},w.a.createElement("section",{className:"modal-main"},w.a.createElement(R,{todo:a,setTodo:o,todosList:c,setTodosList:l,modalCloseHandler:n})))},K=function(e){var t=e.todosList,n=e.setTodosList,a=Object(O.useState)(""),o=Object(T.a)(a,2),c=o[0],l=o[1],i=Object(O.useState)(!1),r=Object(T.a)(i,2),s=r[0],d=r[1];return w.a.createElement(I,null,w.a.createElement(F,{onSubmit:function(e){e.preventDefault(),c&&d(!0)}},w.a.createElement(A,{type:"text",value:c,onChange:function(e){return l(e.target.value)}}),w.a.createElement(M,{type:"submit"},"Add Todo")),w.a.createElement(G,{todo:c,setTodo:l,todosList:t,setTodosList:n,isOpen:s,modalCloseHandler:function(){return d(!1)}}))},Q=H.a.div(d||(d=Object(S.a)(["\n  width: 100%;\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n"]))),U=H.a.div(u||(u=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n"]))),V=n(23),W=n(31),X=n(32),Y=H.a.div(m||(m=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Z=H.a.div(p||(p=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),$=H.a.div(f||(f=Object(S.a)(["\n  width: 30%;\n  justify-content: space-between;\n  display: flex;\n  margin: 10px;\n  border-radius: 5px;\n  padding: 5px;\n\n  @media (max-width: 600px) {\n    width: 72%;\n  }\n  \n"]))),_=function(e){var t=e.todo,n=e.todosList,a=e.setTodosList;return w.a.createElement(Y,null,w.a.createElement($,{className:t.status},w.a.createElement("div",null,w.a.createElement("h3",null,t.todo),w.a.createElement("small",null,t.date.toLocaleDateString())),"inprogress"===t.status&&w.a.createElement(Z,null,w.a.createElement("button",{onClick:function(){console.log(n);var e=Object(J.a)(n);e[n.indexOf(t)]=Object(V.a)(Object(V.a)({},t),{},{status:"success"}),a(e)},className:"complete-button"},"Mark Complete"),w.a.createElement("button",{onClick:function(){a(n.filter((function(e){return e.id!==t.id})))},className:"remove-button"},w.a.createElement(W.a,{icon:X.a,color:"crimson"})))))},ee=H.a.div(h||(h=Object(S.a)(["\n  margin-top: 25px;\n  margin-bottom: 7px;\n  width: 30%;\n  display: flex;\n  align-items: center;\n\n   @media (max-width: 600px) {\n    width: 80%;\n  }\n"]))),te=H.a.input(b||(b=Object(S.a)(["\n  width: 100%;\n  padding: 10px;\n"]))),ne=H.a.div(E||(E=Object(S.a)(["\n  background: #6699cc;\n  padding: 10px;\n"]))),ae=function(e){var t=e.todosList,n=e.setSearchedTodos,a=Object(O.useRef)();return w.a.createElement(ee,null,w.a.createElement(te,{ref:a,onChange:function(){var e=t.filter((function(e){return e.todo.toLowerCase().includes(a.current.value.toLowerCase())}));n(e)}}),w.a.createElement(ne,null,"Search"))},oe=H.a.div(j||(j=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  width: 50%;\n  margin-top: 25px;\n\n  @media (max-width: 600px) {\n    width: 90%;\n  }\n"]))),ce=H.a.button(g||(g=Object(S.a)(["\n  width: 100%;\n  &:focus {\n    color: white;\n    background: black;\n  }\n"]))),le=function(e){var t=e.choiceHandler;return w.a.createElement(oe,null,w.a.createElement(ce,{onClick:t,value:"inprogress"},"In Progress"),w.a.createElement(ce,{onClick:t,value:"success"},"Success"),w.a.createElement(ce,{onClick:t,value:"failed"},"Failed"))},ie=function(e){var t=e.todosList,n=e.setTodosList,a=Object(O.useState)(""),o=Object(T.a)(a,2),c=o[0],l=o[1],i=Object(O.useState)(""),r=Object(T.a)(i,2),s=r[0],d=r[1];Object(O.useEffect)((function(){t.map((function(e){new Date>e.date&&(e.status="failed")}))}));var u=s||t,m=c?u.map((function(e){if(e.status===c)return w.a.createElement(_,{key:e.id,todo:e,todosList:t,setTodosList:n})})):u.map((function(e){return w.a.createElement(_,{key:e.id,todosList:t,setTodosList:n,todo:e})}));return w.a.createElement(w.a.Fragment,null,w.a.createElement(U,null,w.a.createElement(ae,{todosList:t,setSearchedTodos:d})),w.a.createElement(Q,null,w.a.createElement(le,{choiceHandler:function(e){l(e.target.value)}})),w.a.createElement("div",null,m))},re=H.a.div(x||(x=Object(S.a)(["\n  width: 50vw;\n  height: 60vh;\n  background: rgba(0, 0, 100, 0.2);\n  margin-top: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-size: 50px;\n  transition: width 2s linear, height 2s linear, border-radius 2s ease-in;\n\n  &:hover {\n    width: 70vw;\n    height: 70vh;\n  }\n\n  @media (max-width: 600px) {\n    width: 90vw;\n    height: 65vh;\n  }\n"]))),se=H.a.div(v||(v=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n"]))),de=function(){var e=Object(O.useState)({}),t=Object(T.a)(e,2),n=t[0],a=t[1];return Object(O.useEffect)((function(){fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(e){a(e[Math.floor(100*Math.random())]),console.log(e)}))}),[]),w.a.createElement(se,null,w.a.createElement(re,null,n.text))},ue=function(){var e=Object(O.useState)([]),t=Object(T.a)(e,2),n=t[0],a=t[1];return w.a.createElement(k.a,null,w.a.createElement(D,null),w.a.createElement(C.c,null,w.a.createElement(C.a,{path:"/addTodo"},w.a.createElement(K,{todosList:n,setTodosList:a})),w.a.createElement(C.a,{path:"/history"},w.a.createElement(ie,{todosList:n,setTodosList:a})),w.a.createElement(C.a,{path:"/"},w.a.createElement(de,null))))};L.a.render(w.a.createElement(ue,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.91155370.chunk.js.map