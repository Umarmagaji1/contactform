(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t(61)},58:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),o=t.n(c),l=t(3),s=t(4),i=t(6),m=t(5),u=t(7),p=t(63),h=t(65),d=t(64),b=t(8),f=t.n(b),v=t(12),E=t(13),y=t.n(E),g=t(29),N=t(17),C=r.a.createContext(),O=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(N.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(N.a)({},e,{contacts:[a.payload].concat(Object(g.a)(e.contacts))});case"UPDATE_CONTACT":return Object(N.a)({},e,{contacts:e.contacts.map(function(e){return e.id===a.payload.id?e=a.payload:e})});default:return e}},j=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState(function(a){return O(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(C.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),k=C.Consumer,x=t(62),w=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onDeleteClick=function(){var e=Object(v.a)(f.a.mark(function e(a,t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t({type:"DELETE_CONTACT",payload:a}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:"DELETE_CONTACT",payload:a});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone,l=this.state.showContactInfo;return r.a.createElement(k,null,function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-content mb-2"},r.a.createElement("h2",{className:"card-header"},n," ",r.a.createElement("i",{onClick:function(){e.setState({showContactInfo:!e.state.showContactInfo})},className:"fa fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement(x.a,{to:"/contacts/edit/".concat(t)},r.a.createElement("i",{className:"fa fa-pencil",style:{cursor:"pointer",float:"right",color:"black"}})),r.a.createElement("i",{onClick:e.onDeleteClick.bind(e,t,s),className:"fa fa-times",style:{cursor:"pointer",float:"right",color:"red"}})),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email:",c),r.a.createElement("li",{className:"list-group-item"},"Phone:",o)):null)})}}]),a}(n.Component),A=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){var a=e.contacts;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a.map(function(e){return r.a.createElement(w,{key:e.id,contact:e})}))})}}]),a}(n.Component),S=function(e){var a=e.branding;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-danger mb-3"},r.a.createElement("div",{className:"container"},r.a.createElement(x.a,{to:"/",className:"navbar-brand"},a),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(x.a,{to:"/",className:"navbar-brand"},r.a.createElement("i",{className:"fa fa-home"})," Home"),r.a.createElement(x.a,{to:"/contacts/add",className:"navbar-brand"},r.a.createElement("i",{className:"fa fa-plus"})," Add"),r.a.createElement(x.a,{to:"/about",className:"navbar-brand"},r.a.createElement("i",{className:"fa fa-question"})," About")))))))},T=t(14),D=t(1),q=t.n(D),P=t(27),_=t.n(P),R=function(e){var a=e.label,t=e.name,n=e.placeholder,c=e.value,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:o,name:t,className:_()("form-control",{"is-invalid":s}),placeholder:n,value:c,onChange:l,error:s}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};R.prototype={label:q.a.string.isRequired,name:q.a.string.isRequired,placeholder:q.a.string.isRequired,value:q.a.string.isRequired,type:q.a.string.isRequired,onChange:q.a.func.isRequired},R.defaultProps={type:"text"};var I=R,L=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:""},t.onSubmit=function(){var e=Object(v.a)(f.a.mark(function e(a,n){var r,c,o,l,s,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,y.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,a({type:"ADD_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:"",errors:""}),t.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t.onChange=function(e){t.setState(Object(T.a)({},e.target.name,e.target.value))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card  mb-2"},r.a.createElement("h3",{className:"card-title"},"Add Contact"),r.a.createElement("div",{className:"card-content"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(I,{label:"Name",name:"name",placeholder:"Enter Name...",value:t,type:"text",onChange:e.onChange,error:o.name}),r.a.createElement(I,{label:"Email",name:"email",placeholder:"Enter email...",value:n,type:"email",onChange:e.onChange,error:o.email}),r.a.createElement(I,{label:"Phone",name:"phone",placeholder:"Enter phone...",value:c,type:"text",onChange:e.onChange,error:o.phone}),r.a.createElement("button",{type:"submit",className:"btn btn-light btn-block"},"Submit")))))})}}]),a}(n.Component),M=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:""},t.onSubmit=function(){var e=Object(v.a)(f.a.mark(function e(a,n){var r,c,o,l,s,i,m;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=t.props.match.params.id,e.next=15,y.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,a({type:"UPDATE_CONTACT",payload:m.data}),t.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t.onChange=function(e){t.setState(Object(T.a)({},e.target.name,e.target.value))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var a,t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,y.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card  mb-2"},r.a.createElement("h3",{className:"card-title"},"Edit Contact"),r.a.createElement("div",{className:"card-content"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(I,{label:"Name",name:"name",placeholder:"Enter Name...",value:t,type:"text",onChange:e.onChange,error:o.name}),r.a.createElement(I,{label:"Email",name:"email",placeholder:"Enter email...",value:n,type:"email",onChange:e.onChange,error:o.email}),r.a.createElement(I,{label:"Phone",name:"phone",placeholder:"Enter phone...",value:c,type:"text",onChange:e.onChange,error:o.phone}),r.a.createElement("button",{type:"submit",className:"btn btn-light btn-block"},"Update")))))})}}]),a}(n.Component),U=function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"display-4"},"About Contact List"),r.a.createElement("p",{className:"lead"},"A simple app to manage contact"),r.a.createElement("p",{className:"text-secondary"},"version 1.0.0"))},B=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry page does not exist"))},F=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"test Component"))}}]),a}(n.Component),J=(t(58),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(S,{branding:"Contact Manager"}),r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:A}),r.a.createElement(d.a,{exact:!0,path:"/contacts/add",component:L}),r.a.createElement(d.a,{exact:!0,path:"/contacts/edit/:id",component:M}),r.a.createElement(d.a,{exact:!0,path:"/about",component:U}),r.a.createElement(d.a,{exact:!0,path:"/test",component:F}),r.a.createElement(d.a,{component:B})))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.c52854b4.chunk.js.map