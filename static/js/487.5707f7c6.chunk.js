"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[487],{854:function(n,e,t){var r=t(137),a=t(184);e.Z=function(n){n.children;return(0,a.jsx)(r.gy,{type:"TailSpin",color:"#02be6e",height:100,width:100})}},174:function(n,e,t){t.d(e,{Z:function(){return Z}});t(791);var r,a,u,c,o=t(689),i=t(168),s=t(924),p=t(87),f=s.ZP.ul(r||(r=(0,i.Z)(["\n  list-style: none;\n"]))),l=s.ZP.li(a||(a=(0,i.Z)(["\n  &:hover,\n  &:focus {\n    h4 {\n      color: #6c2ffc;\n      transition: color 0.3s ease-in-out;\n    }\n  }\n"]))),h=(0,s.ZP)(p.rU)(u||(u=(0,i.Z)(["\n  text-decoration: none;\n"]))),v=s.ZP.h4(c||(c=(0,i.Z)(["\n  color: black;\n  margin: 10px;\n"]))),d=t(184),Z=function(n){var e=n.movies,t=(0,o.TH)();return(0,d.jsx)(f,{children:e.map((function(n){var e=n.id,r=n.title;return r&&(0,d.jsx)(l,{children:(0,d.jsx)(h,{to:"/movies/".concat(e),state:{from:t},children:(0,d.jsx)(v,{children:r})})},e)}))})}},487:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,a,u,c=t(854),o=t(174),i=t(439),s=t(791),p=t(168),f=t(924),l=f.ZP.form(r||(r=(0,p.Z)(["\n  display: flex;\n  gap: 15px;\n  margin-left: 25px;\n"]))),h=f.ZP.input(a||(a=(0,p.Z)(["\n  border-radius: 4px;\n"]))),v=f.ZP.button(u||(u=(0,p.Z)(["\n  border-radius: 4px;\n"]))),d=t(184),Z=function(n){var e=n.handleSubmit,t=(0,s.useState)(""),r=(0,i.Z)(t,2),a=r[0],u=r[1];return(0,d.jsxs)(l,{onSubmit:function(n){n.preventDefault(),e(a),u("")},children:[(0,d.jsx)(h,{name:"movie",required:!0,value:a,onChange:function(n){u(n.target.value)}}),(0,d.jsx)(v,{type:"submit",children:"Search Movie"})]})},m=t(861),x=t(757),w=t.n(x),b=t(87),y=t(390),k=function(){var n=(0,s.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,s.useState)(null),u=(0,i.Z)(a,2),c=u[0],o=u[1],p=(0,s.useState)(!1),f=(0,i.Z)(p,2),l=f[0],h=f[1],v=(0,b.lr)(),d=(0,i.Z)(v,2),Z=d[0],x=d[1],k=Z.get("query");(0,s.useEffect)((function(){if(h(!0),k){var n=function(){var n=(0,m.Z)(w().mark((function n(){var e,t;return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,y.Ph)(k);case 3:e=n.sent,t=e.data,r(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),o("Try to reload the page");case 11:return n.prev=11,h(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[k]);return{movies:t,error:c,loading:l,handleSubmit:function(n){x({query:n})}}},g=function(){var n=k(),e=n.movies,t=n.error,r=n.isLoading,a=n.handleSubmit;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Z,{handleSubmit:a}),r&&(0,d.jsx)(c.Z,{}),t&&(0,d.jsx)("h3",{children:"Try to reload the page"}),e.length>0&&(0,d.jsx)(o.Z,{movies:e})]})}},390:function(n,e,t){t.d(e,{Gc:function(){return f},N6:function(){return p},Ph:function(){return s},jr:function(){return l},oO:function(){return i}});var r=t(861),a=t(757),u=t.n(a),c=t(294),o="6737ef5101d688762393da727963265b";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.Z)("/trending/all/day?api_key=".concat(o));case 3:return e=n.sent,n.abrupt("return",e);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.Z)("/search/movie?api_key=".concat(o,"&query=").concat(e,"&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/movie/".concat(e,"?api_key=").concat(o));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.Z)("/movie/".concat(e,"/credits?api_key=").concat(o));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.Z)("/movie/".concat(e,"/reviews?api_key=").concat(o));case 3:return t=n.sent,n.abrupt("return",t);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=487.5707f7c6.chunk.js.map