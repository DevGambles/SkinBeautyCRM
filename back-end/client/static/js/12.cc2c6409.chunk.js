(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[12],{513:function(e,a,t){},523:function(e,a,t){"use strict";var n=t(5),r=t(6),s=t(0),c=t.n(s),l=t(1),o=t.n(l),i=t(3),u=t.n(i),m=t(4),p=["className","cssModule","color","body","inverse","outline","tag","innerRef"],b={tag:m.p,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},d=function(e){var a=e.className,t=e.cssModule,s=e.color,l=e.body,o=e.inverse,i=e.outline,b=e.tag,d=e.innerRef,f=Object(r.a)(e,p),g=Object(m.l)(u()(a,"card",!!o&&"text-white",!!l&&"card-body",!!s&&(i?"border":"bg")+"-"+s),t);return c.a.createElement(b,Object(n.a)({},f,{className:g,ref:d}))};d.propTypes=b,d.defaultProps={tag:"div"},a.a=d},524:function(e,a,t){"use strict";var n=t(5),r=t(6),s=t(0),c=t.n(s),l=t(1),o=t.n(l),i=t(3),u=t.n(i),m=t(4),p=["className","cssModule","innerRef","tag"],b={tag:m.p,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},d=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,l=e.tag,o=Object(r.a)(e,p),i=Object(m.l)(u()(a,"card-body"),t);return c.a.createElement(l,Object(n.a)({},o,{className:i,ref:s}))};d.propTypes=b,d.defaultProps={tag:"div"},a.a=d},541:function(e,a,t){"use strict";var n=t(5),r=t(6),s=t(10),c=t(9),l=t(0),o=t.n(l),i=t(1),u=t.n(i),m=t(3),p=t.n(m),b=t(4),d=["className","cssModule","inline","tag","innerRef"],f={children:u.a.node,inline:u.a.bool,tag:b.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,c=e.tag,l=e.innerRef,i=Object(r.a)(e,d),u=Object(b.l)(p()(a,!!s&&"form-inline"),t);return o.a.createElement(c,Object(n.a)({},i,{ref:l,className:u}))},a}(l.Component);g.propTypes=f,g.defaultProps={tag:"form"},a.a=g},611:function(e,a,t){"use strict";var n=t(5),r=t(6),s=t(0),c=t.n(s),l=t(1),o=t.n(l),i=t(3),u=t.n(i),m=t(4),p=["className","cssModule","tag"],b={tag:m.p,className:o.a.string,cssModule:o.a.object},d=function(e){var a=e.className,t=e.cssModule,s=e.tag,l=Object(r.a)(e,p),o=Object(m.l)(u()(a,"card-header"),t);return c.a.createElement(s,Object(n.a)({},l,{className:o}))};d.propTypes=b,d.defaultProps={tag:"div"},a.a=d},612:function(e,a,t){"use strict";var n=t(5),r=t(6),s=t(0),c=t.n(s),l=t(1),o=t.n(l),i=t(3),u=t.n(i),m=t(4),p=["className","cssModule","tag"],b={tag:m.p,className:o.a.string,cssModule:o.a.object},d=function(e){var a=e.className,t=e.cssModule,s=e.tag,l=Object(r.a)(e,p),o=Object(m.l)(u()(a,"card-title"),t);return c.a.createElement(s,Object(n.a)({},l,{className:o}))};d.propTypes=b,d.defaultProps={tag:"div"},a.a=d},739:function(e,a,t){"use strict";t.r(a);var n=t(12),r=t(13),s=t(14),c=t(15),l=t(0),o=t.n(l),i=t(574),u=t(542),m=t(523),p=t(611),b=t(612),d=t(524),f=t(5),g=t(9),v=t(1),h=t.n(v),j=t(3),E=t.n(j),N=o.a.createContext({}),y=t(4),O={tag:y.p,activeTab:h.a.any,className:h.a.string,cssModule:h.a.object},T=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(g.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.tag,r=Object(y.m)(this.props,Object.keys(O)),s=Object(y.l)(E()("tab-content",a),t);return o.a.createElement(N.Provider,{value:{activeTabId:this.state.activeTab}},o.a.createElement(n,Object(f.a)({},r,{className:s})))},a}(l.Component),M=T;T.propTypes=O,T.defaultProps={tag:"div"};var R=t(6),w=["className","cssModule","tabId","tag"],P={tag:y.p,className:h.a.string,cssModule:h.a.object,tabId:h.a.any};function C(e){var a=e.className,t=e.cssModule,n=e.tabId,r=e.tag,s=Object(R.a)(e,w),c=function(e){return Object(y.l)(E()("tab-pane",a,{active:n===e}),t)};return o.a.createElement(N.Consumer,null,(function(e){var a=e.activeTabId;return o.a.createElement(r,Object(f.a)({},s,{className:c(a)}))}))}C.propTypes=P,C.defaultProps={tag:"div"};var x=t(541),S=t(571),k=t(572),I=t(733),q=t(263),J=t(21),W=t(65),A=t(23),B=t(511),D=[{value:"SkinBeautyEnhance",label:"SkinBeautyEnhance"}],F=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=a.call.apply(a,[this].concat(s))).state={email:"",password:"",name:"",confirmPass:"",location:"SkinBeautyEnhance"},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithJWT(e.state.email,e.state.password,e.state.name,e.state.location)},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(x.a,{action:"/",onSubmit:this.handleRegister},o.a.createElement(S.a,{className:"form-label-group"},o.a.createElement(k.a,{type:"text",placeholder:"Name",required:!0,value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})}}),o.a.createElement(I.a,null,"Name")),o.a.createElement(S.a,{className:"form-label-group"},o.a.createElement(k.a,{type:"email",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),o.a.createElement(I.a,null,"Email")),o.a.createElement(S.a,{className:"form-label-group"},o.a.createElement(k.a,{type:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),o.a.createElement(I.a,null,"Password")),o.a.createElement(S.a,{className:"form-label-group"},o.a.createElement(k.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}),o.a.createElement(I.a,null,"Confirm Password")),o.a.createElement(S.a,{className:"form-label-group"},o.a.createElement(B.a,{className:"React",classNamePrefix:"select",defaultValue:D[0],name:"location",options:D,value:D.find((function(e){return e.value})),onChange:function(a){return e.setState({location:a.target.value})}}),o.a.createElement(I.a,null,"Location")),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement(q.a.Ripple,{color:"primary",outline:!0,onClick:function(){A.a.push("/pages/login")}},"Login"),o.a.createElement(q.a.Ripple,{color:"primary",type:"submit"},"Register")))}}]),t}(o.a.Component),L=Object(J.b)((function(e){return{}}),{signupWithJWT:W.e})(F),V=t.p+"static/media/register.a93fbf3b.jpg",z=(t(513),function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=a.call.apply(a,[this].concat(s))).state={activeTab:"1"},e.toggle=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(i.a,{className:"m-0 justify-content-center"},o.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},o.a.createElement(m.a,{className:"bg-authentication rounded-0 mb-0 w-100"},o.a.createElement(i.a,{className:"m-0"},o.a.createElement(u.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-1 py-0"},o.a.createElement("img",{className:"mr-1",src:V,alt:"registerImg"})),o.a.createElement(u.a,{lg:"6",md:"12",className:"p-0"},o.a.createElement(m.a,{className:"rounded-0 mb-0 p-2"},o.a.createElement(p.a,{className:"pb-1 pt-50"},o.a.createElement(b.a,null,o.a.createElement("h4",{className:"mb-0"},"Create Account"))),o.a.createElement("p",{className:"px-2 auth-title mb-0"},"Fill the below form to create a new account."),o.a.createElement(d.a,{className:"pt-1 pb-50"},o.a.createElement(M,{activeTab:this.state.activeTab},o.a.createElement(C,{tabId:"1"},o.a.createElement(L,null))))))))))}}]),t}(o.a.Component));a.default=z}}]);
//# sourceMappingURL=12.cc2c6409.chunk.js.map