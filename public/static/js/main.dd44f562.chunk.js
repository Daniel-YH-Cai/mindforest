(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t.p+"static/media/1.450a123f.jpeg"},13:function(e,a,t){},16:function(e,a,t){e.exports=t(29)},25:function(e,a,t){},27:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(15),c=t.n(r),s=t(2),i=t(3),o=t(5),m=t(4),u=t(6),d=t(11),p=t(0),b=t(9),f=t(8),v=t.n(f),E=(t(13),t(10)),h=t.n(E),g=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).onSubmit=function(a){var t=/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;try{e.state.data;!0===t.test(e.state.email)&&(window.location="/#/signup/verify")}catch(a){e.state.data;!1===t.test(e.state.email)&&(window.location="/")}console.log(e.state),e.setState({errors:e.state})},e.changeHandle=function(a){e.setState(Object(b.a)({},a.target.name,a.target.value))},e.state={username:"",email:"",password:"",errors:{}},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.username,t=e.email,n=e.password,r=e.errors;return l.a.createElement("div",{className:"form-horizontal"},l.a.createElement("form",{onSubmit:this.onSubmit,action:"/signup",method:"POST"},l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("img",{src:h.a,className:"logo",alt:"\u80cc\u666f\u56fe"}),l.a.createElement("span",{className:"title"},"Sign Up")),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-person-circle"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===r.email}),type:"text",name:"username",value:a,onChange:this.changeHandle,placeholder:"username"}),""===r.email?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Email address should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-envelope-fill"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===r.email}),type:"text",name:"email",value:t,onChange:this.changeHandle,placeholder:"email address"}),""===r.email?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Email address should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-key-fill"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===r.password}),type:"password",name:"password",value:n,onChange:this.changeHandle,placeholder:"password"}),""===r.password?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Password should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{class:"btn btn-primary",type:"submit",className:"submitbutton"},"Sign up"))))}}]),a}(n.Component),N=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 "}),l.a.createElement("div",{className:"col-md-6 "},l.a.createElement(g,null)),l.a.createElement("div",{className:"col-md-3 "}))}}]),a}(n.Component),O=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{class:"container"})}}]),a}(n.Component),y=(t(25),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-faded"},l.a.createElement("div",{className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"/"},"Mind Forest")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"/signup"},"Sign up")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"/login"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"/forget"},"Forget password")))))}}]),a}(n.Component)),j=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).onSubmit=function(e){console.log(t.state),t.setState({errors:t.state})},t.changeHandle=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.state={email:"",password:"",errors:{}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password,n=e.errors;return l.a.createElement("div",{className:"form-horizontal"},l.a.createElement("form",{onSubmit:this.onSubmit,action:"/login",method:"POST"},l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("img",{src:h.a,className:"logo",alt:"\u80cc\u666f\u56fe"}),l.a.createElement("span",{className:"title"},"Login")),l.a.createElement("div",{className:"clearfix"},l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-envelope-fill"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===n.email}),type:"text",name:"email",value:a,onChange:this.changeHandle,placeholder:"email address"}),""===n.email?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Email address should not be empty."):"")),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-key-fill"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===n.password}),type:"password",name:"password",value:t,onChange:this.changeHandle,placeholder:"password"}),""===n.password?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Password should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{class:"btn btn-primary",type:"submit",className:"submitbutton"},"Login"))))}}]),a}(n.Component),w=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"}),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(j,null)),l.a.createElement("div",{className:"col-md-3"}))}}]),a}(n.Component),S=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).onSubmit=function(a){var t=/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;try{e.state.data;!0===t.test(e.state.email)&&(window.location="/#/forget/verify")}catch(a){e.state.data;!1===t.test(e.state.email)&&(window.location="/")}console.log(e.state),e.setState({errors:e.state})},e.changeHandle=function(a){e.setState(Object(b.a)({},a.target.name,a.target.value))},e.state={email:"",errors:{}},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.errors;return l.a.createElement("div",{className:"form-horizontal"},l.a.createElement("form",{onSubmit:this.onSubmit,action:"/forget",method:"POST"},l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("img",{src:h.a,className:"logo",alt:"\u80cc\u666f\u56fe"}),l.a.createElement("span",{className:"title"},"Forget Password")),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-envelope-fill"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===t.email}),type:"text",name:"email",value:a,onChange:this.changeHandle,placeholder:"email address"}),""===t.email?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Email address should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{class:"btn btn-primary",type:"submit",className:"submitbutton"},"Send verification email"),l.a.createElement("hr",null))))}}]),a}(n.Component),x=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"}),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(S,null)),l.a.createElement("div",{className:"col-md-3"}))}}]),a}(n.Component),k=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).onSubmit=function(a){console.log(e.state),e.setState({errors:e.state})},e.changeHandle=function(a){e.setState(Object(b.a)({},a.target.name,a.target.value))},e.state={verification:"",errors:{}},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.verification,t=e.errors;return l.a.createElement("div",{className:"form-horizontal"},l.a.createElement("form",{onSubmit:this.onSubmit,action:"/signup/verify",method:"POST"},l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("img",{src:h.a,className:"logo",alt:"\u80cc\u666f\u56fe"}),l.a.createElement("span",{className:"title"},"Verify")),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-envelope-fill"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===t.email}),type:"text",name:"verification",value:a,onChange:this.changeHandle,placeholder:"verification"}),""===t.email?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"verification should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{class:"btn btn-primary",type:"submit",className:"submitbutton"},"Verify"))))}}]),a}(n.Component),C=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"}),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(k,null)),l.a.createElement("div",{className:"col-md-3"}))}}]),a}(n.Component),z=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).onSubmit=function(a){console.log(e.state),e.setState({errors:e.state})},e.changeHandle=function(a){e.setState(Object(b.a)({},a.target.name,a.target.value))},e.state={verification:"",password:"",errors:{}},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.verification,t=e.password,n=e.errors;return l.a.createElement("div",{className:"form-horizontal"},l.a.createElement("form",{onSubmit:this.onSubmit,action:"/forget/verify",method:"POST"},l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("img",{src:h.a,className:"logo",alt:"\u80cc\u666f\u56fe"}),l.a.createElement("span",{className:"title"},"Verify")),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-envelope-fill"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===n.verification}),type:"text",name:"verification",value:a,onChange:this.changeHandle,placeholder:"verification"}),""===n.verification?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"verification should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-key-fill"}),l.a.createElement("input",{className:v()("form-control",{"is-invalid":""===n.password}),type:"password",name:"password",value:t,onChange:this.changeHandle,placeholder:"new password"}),""===n.password?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"New password should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{class:"btn btn-primary",type:"submit",className:"submitbutton"},"Verify"))))}}]),a}(n.Component),H=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"}),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(z,null)),l.a.createElement("div",{className:"col-md-3"}))}}]),a}(n.Component),P=(t(27),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"bg"},l.a.createElement(d.a,null,l.a.createElement(y,null),l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/signup",element:l.a.createElement(N,null)}),l.a.createElement(p.a,{exact:!0,path:"/login",element:l.a.createElement(w,null)}),l.a.createElement(p.a,{exact:!0,path:"/forget",element:l.a.createElement(x,null)}),l.a.createElement(p.a,{exact:!0,path:"/signup/verify",element:l.a.createElement(C,null)}),l.a.createElement(p.a,{exact:!0,path:"/forget/verify",element:l.a.createElement(H,null)}),l.a.createElement(p.a,{exact:!0,path:"/",element:l.a.createElement(O,null)}))))}}]),a}(n.Component));c.a.render(l.a.createElement(P,null),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.dd44f562.chunk.js.map