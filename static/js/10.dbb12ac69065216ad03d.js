webpackJsonp([10,11],{201:function(e,t,s){t=e.exports=s(2)(),t.push([e.id,".login{color:#eee;display:-ms-flexbox;display:flex;height:100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.login .title{font-size:2em;font-weight:100;margin-bottom:1em}.login form{width:300px}",""])},227:function(e,t,s){var o=s(201);"string"==typeof o&&(o=[[e.id,o,""]]);s(3)(o,{});o.locals&&(e.exports=o.locals)},409:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={beforeRouteEnter:function(e,t,s){s(function(t){"out"===e.query.logout&&t.$store.dispatch("logout")}),s()},data:function(){return{user:{username:"",password:""},rules:{username:{required:!0},password:{required:!0}},loading:!1}},methods:{onSubmit:function(e){var t=this;this.loading=!0,this.$post("user/token",this.user).then(function(e){var s=e.data,o=s;return t.$store.dispatch("login",o).then(function(e){t.$message.success("login success");var s=t.$route.query.redirect||"/";return s&&t.$router.replace(s),e})}).catch(function(){t.loading=!1})}}}},433:function(e,t,s){var o,r;s(227),o=s(409);var n=s(444);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=n.render,r.staticRenderFns=n.staticRenderFns,e.exports=o},444:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main-bg"},[s("div",{staticClass:"login"},[s("el-form",{ref:"login",staticClass:"login-form",attrs:{"label-position":"top",rules:e.rules,model:e.user}},[s("div",{staticClass:"title"},[e._v("LOGIN")]),s("el-form-item",{attrs:{prop:"username"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-input",attrs:{autocomplete:"off",placeholder:"Email"},domProps:{value:e._s(e.user.username)},on:{input:function(t){t.target.composing||(e.user.username=t.target.value)}}})]),s("el-form-item",{attrs:{prop:"password"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-input",attrs:{type:"password",autocomplete:"off",placeholder:"Password"},domProps:{value:e._s(e.user.password)},on:{input:function(t){t.target.composing||(e.user.password=t.target.value)}}})]),s("el-form-item",[s("button",{staticClass:"btn btn-block",attrs:{type:"submit"},on:{click:function(t){t.preventDefault(),e.onSubmit(t)}}},[e._v("登录")])])],1)],1)])},staticRenderFns:[]}}});