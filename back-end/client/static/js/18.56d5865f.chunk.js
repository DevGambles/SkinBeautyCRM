(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[18],{523:function(e,a,t){"use strict";var s=t(5),r=t(6),n=t(0),o=t.n(n),c=t(1),l=t.n(c),i=t(3),u=t.n(i),m=t(4),d=["className","cssModule","color","body","inverse","outline","tag","innerRef"],f={tag:m.p,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.color,c=e.body,l=e.inverse,i=e.outline,f=e.tag,b=e.innerRef,p=Object(r.a)(e,d),g=Object(m.l)(u()(a,"card",!!l&&"text-white",!!c&&"card-body",!!n&&(i?"border":"bg")+"-"+n),t);return o.a.createElement(f,Object(s.a)({},p,{className:g,ref:b}))};b.propTypes=f,b.defaultProps={tag:"div"},a.a=b},524:function(e,a,t){"use strict";var s=t(5),r=t(6),n=t(0),o=t.n(n),c=t(1),l=t.n(c),i=t(3),u=t.n(i),m=t(4),d=["className","cssModule","innerRef","tag"],f={tag:m.p,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,c=e.tag,l=Object(r.a)(e,d),i=Object(m.l)(u()(a,"card-body"),t);return o.a.createElement(c,Object(s.a)({},l,{className:i,ref:n}))};b.propTypes=f,b.defaultProps={tag:"div"},a.a=b},542:function(e,a,t){"use strict";var s=t(5),r=t(6),n=t(0),o=t.n(n),c=t(1),l=t.n(c),i=t(3),u=t.n(i),m=t(4),d=["className","cssModule","widths","tag"],f=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:f,offset:f})]),p={tag:m.p,xs:b,sm:b,md:b,lg:b,xl:b,className:l.a.string,cssModule:l.a.object,widths:l.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,n=e.widths,c=e.tag,l=Object(r.a)(e,d),i=[];n.forEach((function(a,s){var r=e[a];if(delete l[a],r||""===r){var n=!s;if(Object(m.j)(r)){var o,c=n?"-":"-"+a+"-",d=h(n,a,r.size);i.push(Object(m.l)(u()(((o={})[d]=r.size||""===r.size,o["order"+c+r.order]=r.order||0===r.order,o["offset"+c+r.offset]=r.offset||0===r.offset,o)),t))}else{var f=h(n,a,r);i.push(f)}}})),i.length||i.push("col");var f=Object(m.l)(u()(a,i),t);return o.a.createElement(c,Object(s.a)({},l,{className:f}))};v.propTypes=p,v.defaultProps=g,a.a=v},574:function(e,a,t){"use strict";var s=t(5),r=t(6),n=t(0),o=t.n(n),c=t(1),l=t.n(c),i=t(3),u=t.n(i),m=t(4),d=["className","cssModule","noGutters","tag","form","widths"],f=l.a.oneOfType([l.a.number,l.a.string]),b={tag:m.p,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,c=e.tag,l=e.form,i=e.widths,f=Object(r.a)(e,d),b=[];i.forEach((function(a,t){var s=e[a];if(delete f[a],s){var r=!t;b.push(r?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var p=Object(m.l)(u()(a,n?"no-gutters":null,l?"form-row":"row",b),t);return o.a.createElement(c,Object(s.a)({},f,{className:p}))};g.propTypes=b,g.defaultProps=p,a.a=g},745:function(e,a,t){"use strict";t.r(a);var s=t(12),r=t(13),n=t(14),o=t(15),c=t(0),l=t.n(c),i=t(574),u=t(542),m=t(523),d=t(524),f=t.p+"static/media/logo3x.e3f64604.png",b=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(i.a,{className:"m-0"},l.a.createElement(u.a,{sm:"12"},l.a.createElement(m.a,{className:"auth-card bg-transparent shadow-none rounded-0 mb-0 w-100"},l.a.createElement(d.a,{className:"text-center"},l.a.createElement("img",{src:f,alt:"ErrorImg",className:"img-fluid align-self-center"}),l.a.createElement("h1",{className:"font-large-2 my-1"},"404 - Page Not Found!"),l.a.createElement("p",{className:"pt-2 mb-0"},"Oops.\u2026 Looks like the link you are looking for is no longer valid."),l.a.createElement("p",{className:"pb-2"},"Please contact Skin Beauty Enhance at +1(905) 275-1309 or info@skinbeautyenhance.com")))))}}]),t}(l.a.Component);a.default=b}}]);
//# sourceMappingURL=18.56d5865f.chunk.js.map