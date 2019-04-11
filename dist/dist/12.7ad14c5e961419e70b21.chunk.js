webpackJsonp([12],{204:function(e,t,r){"use strict";function s(e){d||r(250)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(231),n=r.n(o);for(var a in o)"default"!==a&&function(e){r.d(t,e,function(){return o[e]})}(a);var i=r(252),l=r.n(i),d=!1,c=r(6),p=s,u=c(n.a,l.a,!1,p,null,null);u.options.__file="src/views/login.vue",t.default=u.exports},231:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(88),o=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={data:function(){var e=this;return{formShow:0,form:{clientId:"",password:"",username:""},registerForm:{phone:"",inviteCode:"",newPasswd:"",passwdCheck:""},rules:{username:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]},registerRules:{phone:[{required:!0,message:"手机号不能为空",trigger:"blur"}],inviteCode:[{required:!0,message:"邀请码不能为空",trigger:"blur"}],newPasswd:[{required:!0,validator:function(t,r,s){""===r?s(new Error("请输入密码！")):(""!==e.registerForm.passwdCheck&&e.$refs.registerForm.validateField("passwdCheck"),s())},trigger:"blur"}],passwdCheck:[{required:!0,validator:function(t,r,s){""===r?s(new Error("请再次输入密码！")):r!==e.registerForm.newPasswd?s(new Error("两次密码输入不一致！")):s()},trigger:"blur"}]}}},created:function(){var e=o.default.loginUrl,t=e.split("?")[1].split("=")[1].split("#")[0];this.getBaseInfo(t)},methods:{getBaseInfo:function(e){var t=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/company/app/show",method:"get",params:{code:e}}).then(function(e){0===e.data.retCode?(t.form.clientId=e.data.data.appKey,window.document.title=e.data.data.name,t.Cookies.set("name",e.data.data.name),e.data.data.appKey||t.$Message.warning("appKey不存在！")):t.$Message.warning(e.data.retMsg||"获取团队信息失败！")}).catch(function(e){})},login:function(){var e=this;this.form.clientId?this.$http({url:this.serviceurl+"/weteam-service/mgt/login",method:"post",data:this.form}).then(function(t){if(0===t.data.retCode){e.Cookies.set("user",e.form.username),e.Cookies.set("token",t.data.data.authToken);var r=t.data.data.isAdmin?0:"";e.Cookies.set("access",r),e.Cookies.set("clientId",e.form.clientId),e.$http.defaults.headers.common.Authorization=t.data.data.authToken,e.$http.defaults.headers.common.clientId=e.form.clientId,e.$router.push({name:"home_index"})}else e.$Message.warning(t.data.retMsg||"用户名或密码错误！")}).catch(function(t){e.$Message.warning("用户名或密码错误！")}):this.$Message.warning("appKey无效！")},handleSubmit:function(){var e=this;this.$refs.loginForm.validate(function(t){t&&e.login()})},register:function(){var e=this;delete this.registerForm.passwdCheck,this.$http({url:this.serviceurl+"/weteam-service/mgt/user/regist",headers:{clientId:this.form.clientId},method:"post",data:this.registerForm}).then(function(t){0===t.data.retCode?(e.formShow=0,e.$Message.success(t.data.retMsg||"注册成功！")):(e.registerForm.passwdCheck=e.registerForm.newPasswd,e.$Message.warning(t.data.retMsg),"请直接登录"==t.data.retMsg&&(e.formShow=0))}).catch(function(e){})},registerSubmit:function(){var e=this;this.$refs.registerForm.validate(function(t){t&&e.register()})}}}},250:function(e,t,r){var s=r(251);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r(14)("449b86e6",s,!1,{})},251:function(e,t,r){t=e.exports=r(13)(!1),t.push([e.i,"\n.login {\n  width: 100%;\n  height: 100%;\n  background-image: url('https://file.iviewui.com/iview-admin/login_bg.jpg');\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.login-con {\n  position: absolute;\n  right: 160px;\n  top: 50%;\n  transform: translateY(-60%);\n  width: 300px;\n}\n.login-con-header {\n  font-size: 16px;\n  font-weight: 300;\n  text-align: center;\n  padding: 30px 0;\n}\n.login-con .form-con {\n  padding: 10px 0 0;\n}\n.login-con .login-tip {\n  font-size: 10px;\n  text-align: center;\n  color: #c3c3c3;\n}\n",""])},252:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login",on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSubmit(t)}}},[r("div",{directives:[{name:"show",rawName:"v-show",value:0==e.formShow,expression:"formShow == 0"}],staticClass:"login-con"},[r("Card",{attrs:{bordered:!1}},[r("p",{attrs:{slot:"title"},slot:"title"},[r("Icon",{attrs:{type:"log-in"}}),e._v("\n                欢迎登录\n            ")],1),e._v(" "),r("div",{staticClass:"form-con"},[r("Form",{ref:"loginForm",attrs:{model:e.form,rules:e.rules}},[r("FormItem",{attrs:{prop:"username"}},[r("Input",{attrs:{placeholder:"请输入用户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[r("Icon",{attrs:{size:16,type:"person"}})],1)])],1),e._v(" "),r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[r("Icon",{attrs:{size:14,type:"locked"}})],1)])],1),e._v(" "),r("FormItem",[r("Button",{attrs:{type:"primary",long:""},on:{click:e.handleSubmit}},[e._v("登录")])],1),e._v(" "),r("FormItem",{staticClass:"cc-text-center"},[r("Button",{attrs:{type:"text"},on:{click:function(t){e.formShow=1}}},[e._v("第一次登陆，立即注册")])],1)],1)],1)])],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:1==e.formShow,expression:"formShow == 1"}],staticClass:"login-con"},[r("Card",{attrs:{bordered:!1}},[r("p",{attrs:{slot:"title"},slot:"title"},[r("Icon",{attrs:{type:"log-in"}}),e._v("\n                注册\n            ")],1),e._v(" "),r("div",{staticClass:"form-con"},[r("Form",{ref:"registerForm",attrs:{model:e.registerForm,rules:e.registerRules,"label-width":80}},[r("FormItem",{attrs:{label:"手机号",prop:"phone"}},[r("Input",{attrs:{placeholder:""},model:{value:e.registerForm.phone,callback:function(t){e.$set(e.registerForm,"phone",t)},expression:"registerForm.phone"}})],1),e._v(" "),r("FormItem",{attrs:{label:"邀请码",prop:"inviteCode"}},[r("Input",{attrs:{placeholder:""},model:{value:e.registerForm.inviteCode,callback:function(t){e.$set(e.registerForm,"inviteCode",t)},expression:"registerForm.inviteCode"}})],1),e._v(" "),r("FormItem",{attrs:{label:"设置密码",prop:"newPasswd"}},[r("Input",{attrs:{type:"password",placeholder:""},model:{value:e.registerForm.newPasswd,callback:function(t){e.$set(e.registerForm,"newPasswd",t)},expression:"registerForm.newPasswd"}})],1),e._v(" "),r("FormItem",{attrs:{label:"确认密码",prop:"passwdCheck"}},[r("Input",{attrs:{type:"password",placeholder:""},model:{value:e.registerForm.passwdCheck,callback:function(t){e.$set(e.registerForm,"passwdCheck",t)},expression:"registerForm.passwdCheck"}})],1),e._v(" "),r("div",{staticClass:"cc-m-b-20"},[r("Button",{attrs:{type:"primary",long:""},on:{click:e.registerSubmit}},[e._v("注册")])],1),e._v(" "),r("div",{staticClass:"cc-text-center"},[r("Button",{attrs:{type:"text"},on:{click:function(t){e.formShow=0}}},[e._v("登陆")])],1)],1)],1)])],1)])},o=[];s._withStripped=!0;var n={render:s,staticRenderFns:o};t.default=n}});