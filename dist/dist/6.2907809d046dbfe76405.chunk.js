webpackJsonp([6],{264:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(268),o=n(i),a=r(56),s=(n(a),r(19)),c=n(s),u=c.default.get("clientId")?"/"+c.default.get("clientId"):"";e.default={props:{multiple:{type:Boolean,default:!1},id:{type:String,required:!0},isImg:{type:Boolean,default:!1},maxNum:{type:Number,default:10},renew:{type:Boolean,default:!1}},data:function(){return{isRenew:!1,region:"oss-cn-shanghai",folder:"teamAdmin"+u,expiration:"",client:"",storeAs:"",file:"",percent:"",tempCheckpoint:"",resultUpload:[]}},methods:{doUpload:function(){var t=this,e=this;this.$http.get(this.serviceurl+"/weteam-service/oss/sts/policy/authorization/DUIKA_TEST_OSS?folder="+this.folder).then(function(r){if(0===r.data.retCode){t.expiration=r.data.data.Expiration;var n=new OSS.Wrapper({region:t.region,accessKeyId:r.data.data.AccessKeyId,accessKeySecret:r.data.data.AccessKeySecret,stsToken:r.data.data.SecurityToken,bucket:r.data.data.bucketName});t.client=n;var i=document.getElementById(t.id);if(t.isImg&&!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(i.files[0].name))return t.$Message.warning("请上传图片！"),!1;i.files&&function(){for(var r=document.getElementById(t.id).files,i=0;i<r.length;i++)!function(i){var a=r[i];t.$emit("fileName",a.name),t.$emit("fileSize",a.size);var s=(new Date).getTime(),c=a.name.split(".")[0]+s+"."+a.name.split(".")[1],u=t.folder+"/"+c;t.storeAs=u,t.file=a,n.multipartUpload(u,a,{progress:o.default.mark(function t(r,n){return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.tempCheckpoint=n,e.percent=r,e.$emit("percent",r);case 5:case"end":return t.stop()}},t,this)})}).then(function(e){e.res.requestUrls&&(t.resultUpload[0]=e.res.requestUrls[0].split("?")[0],i==r.length-1&&t.$emit("url",t.resultUpload))}).catch(function(e){t.isRenew=!0,t.$Message.warning("上传失败！")})}(i)}()}else t.$Message.warning(r.data.retMsg||"文件上传授权失败！")})},continueUpload:function(){var t=this,e=this;(!this.expiration||new Date>this.expiration)&&this.$http.get(this.serviceurl+"/weteam-service/oss/sts/policy/authorization/DUIKA_TEST_OSS?folder="+this.folder).then(function(e){if(0===e.data.retCode){t.expiration=e.data.data.Expiration;var r=new OSS.Wrapper({region:t.region,accessKeyId:e.data.data.AccessKeyId,accessKeySecret:e.data.data.AccessKeySecret,stsToken:e.data.data.SecurityToken,bucket:e.data.data.bucketName});t.client=r}else t.$Message.warning(e.data.retMsg||"文件上传授权失败！")}),this.client.multipartUpload(this.storeAs,this.file,{checkpoint:this.tempCheckpoint,progress:o.default.mark(function t(r,n){return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.tempCheckpoint=n,e.percent=r,e.$emit("percent",r);case 5:case"end":return t.stop()}},t,this)})}).then(function(e){e.res.requestUrls&&(t.resultUpload[0]=e.res.requestUrls[0].split("?")[0],t.$emit("url",t.resultUpload))}).catch(function(e){t.isRenew=!0,t.$Message.warning("上传失败！")})}}}},265:function(t,e,r){"use strict";function n(t){u||r(266)}Object.defineProperty(e,"__esModule",{value:!0});var i=r(264),o=r.n(i);for(var a in i)"default"!==a&&function(t){r.d(e,t,function(){return i[t]})}(a);var s=r(271),c=r.n(s),u=!1,l=r(6),f=n,d=l(o.a,c.a,!1,f,null,null);d.options.__file="src/views/my-components/ali-upload.vue",e.default=d.exports},266:function(t,e,r){var n=r(267);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(14)("0d2aba44",n,!1,{})},267:function(t,e,r){e=t.exports=r(13)(!1),e.push([t.i,"\n.oss_file {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n}\n.oss_file input {\n  padding-top: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n}\n",""])},268:function(t,e,r){t.exports=r(269)},269:function(t,e,r){var n=function(){return this}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(270),i)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},270:function(t,e){!function(e){"use strict";function r(t,e,r,n){var o=e&&e.prototype instanceof i?e:i,a=Object.create(o.prototype),s=new p(n||[]);return a._invoke=u(t,r,s),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function i(){}function o(){}function a(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(r,i,o,a){var s=n(t[r],t,i);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&y.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},a)}a(s.arg)}function r(t,r){function n(){return new Promise(function(n,i){e(t,r,n,i)})}return i=i?i.then(n,n):n()}var i;this._invoke=r}function u(t,e,r){var i=O;return function(o,a){if(i===E)throw new Error("Generator is already running");if(i===L){if("throw"===o)throw a;return m()}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var c=l(s,r);if(c){if(c===M)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===O)throw i=L,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=E;var u=n(t,e,r);if("normal"===u.type){if(i=r.done?L:k,u.arg===M)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(i=L,r.method="throw",r.arg=u.arg)}}}function l(t,e){var r=t.iterator[e.method];if(r===g){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=g,l(t,e),"throw"===e.method))return M;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return M}var i=n(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,M;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=g),e.delegate=null,M):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,M)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function d(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function h(t){if(t){var e=t[_];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(y.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=g,e.done=!0,e};return n.next=n}}return{next:m}}function m(){return{value:g,done:!0}}var g,v=Object.prototype,y=v.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},_=w.iterator||"@@iterator",b=w.asyncIterator||"@@asyncIterator",x=w.toStringTag||"@@toStringTag",S="object"==typeof t,$=e.regeneratorRuntime;if($)return void(S&&(t.exports=$));$=e.regeneratorRuntime=S?t.exports:{},$.wrap=r;var O="suspendedStart",k="suspendedYield",E="executing",L="completed",M={},I={};I[_]=function(){return this};var T=Object.getPrototypeOf,U=T&&T(T(h([])));U&&U!==v&&y.call(U,_)&&(I=U);var j=a.prototype=i.prototype=Object.create(I);o.prototype=j.constructor=a,a.constructor=o,a[x]=o.displayName="GeneratorFunction",$.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===o||"GeneratorFunction"===(e.displayName||e.name))},$.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(j),t},$.awrap=function(t){return{__await:t}},s(c.prototype),c.prototype[b]=function(){return this},$.AsyncIterator=c,$.async=function(t,e,n,i){var o=new c(r(t,e,n,i));return $.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},s(j),j[x]="Generator",j[_]=function(){return this},j.toString=function(){return"[object Generator]"},$.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},$.values=h,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.method="next",this.arg=g,this.tryEntries.forEach(d),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=g)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return o.type="throw",o.arg=t,r.next=e,n&&(r.method="next",r.arg=g),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var a=y.call(i,"catchLoc"),s=y.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,M):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),M},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),d(r),M}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;d(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:h(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=g),M}}}(function(){return this}()||Function("return this")())},271:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.renew&&t.isRenew&&1!=t.percent?r("Button",{attrs:{type:"primary"},on:{click:t.continueUpload}},[t._v("继续上传")]):r("div",{staticClass:"oss_file"},[t._t("default",[r("Button",{attrs:{type:"primary"}},[t._v("点击上传")])]),t._v(" "),r("input",{attrs:{type:"file",id:t.id,multiple:t.multiple},on:{change:t.doUpload}})],2)],1)},i=[];n._withStripped=!0;var o={render:n,staticRenderFns:i};e.default=o},310:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(265),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={data:function(){return{form:{type:0,continueTime:"",img:"",url:""},rules:{continueTime:[{required:!0,message:"持续时间不能为空",trigger:"blur"},{validator:function(t,e,r,n,i){var o=[];/^(3|4|5)$/.test(e)||r("持续时间至少3秒不超过5秒"),r(o)}}],img:[{required:!0,message:"请上传图片",trigger:"change"}]}}},components:{aliUpload:i.default},created:function(){this.$route.query.id&&this.getOpenScreenDetail()},methods:{getOpenScreenDetail:function(){var t=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/openScreenAdvertisingDetails",method:"get",params:{id:this.$route.query.id}}).then(function(e){0===e.data.retCode?(t.form.id=e.data.data.id,t.form.type=e.data.data.type,t.form.continueTime=e.data.data.continueTime,t.form.img=e.data.data.img,t.form.url=e.data.data.url):t.$Message.warning(e.data.retMsg)}).catch(function(t){})},handleSubmit:function(t){var e=this;this.$refs.form.validate(function(t){t&&(e.$route.query.id?e.editOpenScreen():e.addOpenScreen())})},addOpenScreen:function(){var t=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/insertOpenScreenAdvertising",method:"post",data:this.form}).then(function(e){0===e.data.retCode?(t.$Message.success("开屏广告新增成功！"),t.$router.push({name:"openScreenManagement"})):t.$Message.warning(e.data.retMsg)}).catch(function(t){})},getUploadUrl:function(t){this.form.img=t[0]+"?x-oss-process=image/resize,m_fill,limit_0,h_1344,w_750"},editOpenScreen:function(){var t=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/updateOpenScreenAdvertising",method:"post",data:this.form}).then(function(e){0===e.data.retCode?(t.$Message.success("开屏广告编辑成功！"),t.$router.push({name:"openScreenManagement"})):t.$Message.warning(e.data.retMsg)}).catch(function(t){})}}}},387:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-body"},[r("Form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":80}},[r("FormItem",{attrs:{label:"类型"}},[r("RadioGroup",{model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[r("Radio",{attrs:{label:0}},[t._v("随机显示")]),t._v(" "),r("Radio",{attrs:{label:1}},[t._v("固定显示")])],1)],1),t._v(" "),r("FormItem",{attrs:{label:"持续时间",prop:"continueTime"}},[r("Input",{staticClass:"cc-w-300",attrs:{placeholder:""},model:{value:t.form.continueTime,callback:function(e){t.$set(t.form,"continueTime",e)},expression:"form.continueTime"}}),t._v(" "),r("p",[t._v("至少3秒不超过5秒")])],1),t._v(" "),r("FormItem",{attrs:{label:"图片",prop:"img"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.img,expression:"form.img"}],attrs:{type:"hidden"},domProps:{value:t.form.img},on:{input:function(e){e.target.composing||t.$set(t.form,"img",e.target.value)}}}),t._v(" "),r("img",{attrs:{src:t.form.img,alt:"",width:"375",height:"667"}}),t._v(" "),r("div",[r("ali-upload",{attrs:{id:"openScreen",isImg:!0,maxNum:1},on:{url:t.getUploadUrl}})],1),t._v("banner图片750*1334px\n    ")]),t._v(" "),r("FormItem",{attrs:{label:"图片跳转url"}},[r("Input",{staticClass:"cc-w-300",attrs:{placeholder:""},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1),t._v(" "),r("FormItem",{attrs:{label:""}},[t.$route.query.id?r("Button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("保存")]):r("Button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("新增")]),t._v(" "),r("router-link",{attrs:{to:{name:"openScreenManagement"}}},[r("Button",{attrs:{type:"primary"}},[t._v("返回")])],1)],1)],1)],1)},i=[];n._withStripped=!0;var o={render:n,staticRenderFns:i};e.default=o},92:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(310),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,function(){return n[t]})}(o);var a=r(387),s=r.n(a),c=r(6),u=c(i.a,s.a,!1,null,null,null);u.options.__file="src/views/teamManagement/openScreenManagement/addOpenScreen.vue",e.default=u.exports}});