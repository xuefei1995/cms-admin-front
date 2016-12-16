webpackJsonp([8,6],{0:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var u=n(23),r=a(u),o=n(64),i=a(o),l=n(9),s=a(l),c=n(185),f=a(c),d=n(94),p=a(d),h=n(129),g=a(h),m=n(90),v=a(m),b=n(172),y=a(b);n(79),n(77),n(78);var x=n(175),M=a(x),_=n(171),k=a(_);s.default.use(p.default),s.default.use(g.default),s.default.use(v.default),s.default.http.options.root="http://42.96.203.79:8080",s.default.http.options.emulateJSON=!0,s.default.globalOptions={uploadUrl:"http://42.96.203.79:22222/upload"},(0,i.default)(k.default).forEach(function(t){s.default.filter(t,k.default[t])}),s.default.mixin({computed:{headers:function(){return{Authorization:M.default.state.token}}},methods:{post:function(t,e,n){return this.$http.post(t,e,(0,r.default)({headers:this.headers},n))},put:function(t,e,n){return this.$http.put(t,e,(0,r.default)({headers:this.headers},n))},get:function(t,e,n){return this.$http.get(t+"?"+this.serialize(e),(0,r.default)({headers:this.headers},n))},delete:function(t,e,n){return this.$http.delete(t+"?"+this.serialize(e),(0,r.default)({headers:this.headers},n))},serialize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="";return(0,i.default)(t).forEach(function(n){var a=t[n];null!==a&&void 0!==a&&(e+=n+"="+a+"&")}),e.substr(0,e.length-1)}}});var $=new g.default({routes:y.default});$.beforeEach(function(t,e,n){0===t.matched.length?($.push({name:"no-page",params:{message:t.path}}),n()):t.meta.authorization!==!1&&M.default.state.login===!1?!function(){var e=p.default.Loading.service({text:"loading"});M.default.dispatch("login").then(function(t){e.close(),n()}).catch(function(){$.replace({name:"login",query:{redirect:t.fullPath}}),e.close()})}():n()});var w=new s.default({el:"#app",router:$,store:M.default,template:"<App/>",components:{App:f.default}}),E={0:"Cannot connect to server",404:"request does not exist",500:"server exception"};s.default.http.interceptors.push(function(t,e){e(function(t){if(t.ok){var e=t.data;e.success?t.data=e.data:(w.$message.error(e.msg),t.ok=!1)}else{var n=t.status;switch(n){case 401:w.$message.error("login expired, please re-login"),$.replace({name:"login",query:{redirect:w.$route.fullPath}});break;default:w.$message.error(E[n]||t.body)}}})})},77:function(t,e){},78:function(t,e){},79:function(t,e){},86:function(t,e){},171:function(t,e,n){"use strict";var a=n(173);e.datetime=function(t){if(t){var e=new Date(t);t=(0,a.dateFormat)(e,"yyyy-MM-dd hh:mm")}return t},e.html2text=function(t){return t&&(t=t.replace(/<[^>]*>/g,"")),t},e.substr=function(t,e,n){return t&&(t=t.substr(e,n)),t},e.maxlength=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t&&t.length>e&&(t=t.substr(0,e),n&&(t+="...")),t}},172:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={authorization:!1};e.default=[{path:"/login",name:"login",meta:a,component:function(t){return n.e(5,function(e){var n=[e(191)];t.apply(null,n)}.bind(this))}},{path:"/test",meta:a,component:function(t){return n.e(1,function(e){var n=[e(193)];t.apply(null,n)}.bind(this))}},{path:"/",name:"index",component:function(t){return n.e(3,function(e){var n=[e(190)];t.apply(null,n)}.bind(this))},children:[{path:"no-page/:message",name:"no-page",title:"",meta:a,component:function(t){return n.e(4,function(e){var n=[e(192)];t.apply(null,n)}.bind(this))}},{path:"article",name:"article",component:function(t){return n.e(0,function(e){var n=[e(187)];t.apply(null,n)}.bind(this))}},{path:"catalog",name:"catalog",component:function(t){return n.e(2,function(e){var n=[e(189)];t.apply(null,n)}.bind(this))}}]}]},173:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var u=n(64),r=a(u);e.dateFormat=function(t,e){var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};return/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),(0,r.default)(n).forEach(function(t){new RegExp("("+t+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[t]:("00"+n[t]).substr((""+n[t]).length)))}),e}},175:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(170),r=a(u),o=n(9),i=a(o),l=n(128),s=a(l);i.default.use(s.default);var c=window.localStorage;e.default=new s.default.Store({state:{user:{},login:!1,token:""},mutations:{LOGIN:function(t,e){var n=e.user,a=e.token;t.user=n,t.login=!0,t.token=a,c.setItem("token",a)},LOGOUT:function(t){t.login=!1,t.token="",c.clear()}},actions:{login:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.getItem("token");return new r.default(function(t,a){n?i.default.http.get("user/"+n).then(function(a){var u=a.data,r=u;return e("LOGIN",{user:r,token:n}),t(r),r}).catch(function(t){a(t)}):a("no token")})}}})},176:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},185:function(t,e,n){var a,u;n(86),a=n(176);var r=n(199);u=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(u=a=a.default),"function"==typeof u&&(u=u.options),u.render=r.render,u.staticRenderFns=r.staticRenderFns,t.exports=a},199:function(t,e){t.exports={render:function(){var t=this;return t._h("div",{attrs:{id:"app"}},[t._h("router-view")])},staticRenderFns:[]}}});
//# sourceMappingURL=app.7bf94086ce75a36abf63.js.map