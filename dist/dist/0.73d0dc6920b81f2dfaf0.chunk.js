webpackJsonp([0],{100:function(e,t,r){"use strict";function n(e){c||r(329)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(279),o=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(t,e,function(){return i[e]})}(a);var s=r(335),l=r.n(s),c=!1,u=r(9),d=n,p=u(o.a,l.a,!1,d,"data-v-3ea82706",null);p.options.__file="src/views/operationManagement/videoDetail.vue",t.default=p.exports},250:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(251),o=n(i),a=r(63),s=(n(a),r(19)),l=n(s);l.default.get("clientId")&&l.default.get("clientId");t.default={props:{multiple:{type:Boolean,default:!1},id:{type:String,required:!0},isImg:{type:Boolean,default:!1},maxNum:{type:Number,default:10},renew:{type:Boolean,default:!1}},data:function(){return{isRenew:!1,region:"oss-cn-shanghai",folder:"herbsDood",expiration:"",client:"",storeAs:"",file:"",percent:"",tempCheckpoint:"",resultUpload:[]}},methods:{doUpload:function(){var e=this,t=this;this.$axios.get(this.serviceurl+"/oss/sts/policy/authorization/DUIKA_TEST_OSS?folder="+this.folder).then(function(r){if(0===r.data.retCode){e.expiration=r.data.data.Expiration;var n=new OSS.Wrapper({region:e.region,accessKeyId:r.data.data.AccessKeyId,accessKeySecret:r.data.data.AccessKeySecret,stsToken:r.data.data.SecurityToken,bucket:r.data.data.bucketName});e.client=n;var i=document.getElementById(e.id);if(e.isImg&&!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(i.files[0].name))return e.$Message.warning("请上传图片！"),!1;i.files&&function(){for(var r=document.getElementById(e.id).files,i=0;i<r.length;i++)!function(i){var a=r[i];e.$emit("fileName",a.name),e.$emit("fileSize",a.size);var s=(new Date).getTime(),l=a.name.split(".")[0]+s+"."+a.name.split(".")[1],c=e.folder+"/"+l;e.storeAs=c,e.file=a,n.multipartUpload(c,a,{progress:o.default.mark(function e(r,n){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.tempCheckpoint=n,t.percent=r,t.$emit("percent",r);case 5:case"end":return e.stop()}},e,this)})}).then(function(t){t.res.requestUrls&&(e.resultUpload[0]=t.res.requestUrls[0].split("?")[0],i==r.length-1&&e.$emit("url",e.resultUpload))}).catch(function(t){e.isRenew=!0,e.$Message.warning("上传失败！")})}(i)}()}else e.$Message.warning(r.data.retMsg||"文件上传授权失败！")})},continueUpload:function(){var e=this,t=this;(!this.expiration||new Date>this.expiration)&&this.$http.get(this.serviceurl+"/oss/sts/policy/authorization/DUIKA_TEST_OSS?folder="+this.folder).then(function(t){if(0===t.data.retCode){e.expiration=t.data.data.Expiration;var r=new OSS.Wrapper({region:e.region,accessKeyId:t.data.data.AccessKeyId,accessKeySecret:t.data.data.AccessKeySecret,stsToken:t.data.data.SecurityToken,bucket:t.data.data.bucketName});e.client=r}else e.$Message.warning(t.data.retMsg||"文件上传授权失败！")}),this.client.multipartUpload(this.storeAs,this.file,{checkpoint:this.tempCheckpoint,progress:o.default.mark(function e(r,n){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.tempCheckpoint=n,t.percent=r,t.$emit("percent",r);case 5:case"end":return e.stop()}},e,this)})}).then(function(t){t.res.requestUrls&&(e.resultUpload[0]=t.res.requestUrls[0].split("?")[0],e.$emit("url",e.resultUpload))}).catch(function(t){e.isRenew=!0,e.$Message.warning("上传失败！")})}}}},251:function(e,t,r){e.exports=r(255)},252:function(e,t,r){"use strict";function n(e){c||r(253)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(250),o=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(t,e,function(){return i[e]})}(a);var s=r(257),l=r.n(s),c=!1,u=r(9),d=n,p=u(o.a,l.a,!1,d,null,null);p.options.__file="src/views/my-components/ali-upload.vue",t.default=p.exports},253:function(e,t,r){var n=r(254);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(16)("0d2aba44",n,!1,{})},254:function(e,t,r){t=e.exports=r(15)(!1),t.push([e.i,"\n.oss_file {\r\n  display: inline-block;\r\n  position: relative;\r\n  overflow: hidden;\n}\n.oss_file input {\r\n  padding-top: 100%;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  opacity: 0;\r\n  filter: alpha(opacity=0);\r\n  cursor: pointer;\r\n  width: 100%;\r\n  height: 100%;\n}\r\n",""])},255:function(e,t,r){var n=function(){return this}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r(256),i)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},256:function(e,t){!function(t){"use strict";function r(e,t,r,n){var o=t&&t.prototype instanceof i?t:i,a=Object.create(o.prototype),s=new f(n||[]);return a._invoke=c(e,r,s),a}function n(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function i(){}function o(){}function a(){}function s(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function l(e){function t(r,i,o,a){var s=n(e[r],e,i);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&y.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,o,a)},function(e){t("throw",e,o,a)}):Promise.resolve(c).then(function(e){l.value=e,o(l)},a)}a(s.arg)}function r(e,r){function n(){return new Promise(function(n,i){t(e,r,n,i)})}return i=i?i.then(n,n):n()}var i;this._invoke=r}function c(e,t,r){var i=$;return function(o,a){if(i===E)throw new Error("Generator is already running");if(i===U){if("throw"===o)throw a;return m()}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var l=u(s,r);if(l){if(l===M)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===$)throw i=U,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=E;var c=n(e,t,r);if("normal"===c.type){if(i=r.done?U:S,c.arg===M)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(i=U,r.method="throw",r.arg=c.arg)}}}function u(e,t){var r=e.iterator[t.method];if(r===g){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=g,u(e,t),"throw"===t.method))return M;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return M}var i=n(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,M;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=g),t.delegate=null,M):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,M)}function d(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function p(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function f(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(d,this),this.reset(!0)}function h(e){if(e){var t=e[w];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(y.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=g,t.done=!0,t};return n.next=n}}return{next:m}}function m(){return{value:g,done:!0}}var g,v=Object.prototype,y=v.hasOwnProperty,x="function"==typeof Symbol?Symbol:{},w=x.iterator||"@@iterator",b=x.asyncIterator||"@@asyncIterator",_=x.toStringTag||"@@toStringTag",I="object"==typeof e,k=t.regeneratorRuntime;if(k)return void(I&&(e.exports=k));k=t.regeneratorRuntime=I?e.exports:{},k.wrap=r;var $="suspendedStart",S="suspendedYield",E="executing",U="completed",M={},R={};R[w]=function(){return this};var T=Object.getPrototypeOf,O=T&&T(T(h([])));O&&O!==v&&y.call(O,w)&&(R=O);var C=a.prototype=i.prototype=Object.create(R);o.prototype=C.constructor=a,a.constructor=o,a[_]=o.displayName="GeneratorFunction",k.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===o||"GeneratorFunction"===(t.displayName||t.name))},k.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,a):(e.__proto__=a,_ in e||(e[_]="GeneratorFunction")),e.prototype=Object.create(C),e},k.awrap=function(e){return{__await:e}},s(l.prototype),l.prototype[b]=function(){return this},k.AsyncIterator=l,k.async=function(e,t,n,i){var o=new l(r(e,t,n,i));return k.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},s(C),C[_]="Generator",C[w]=function(){return this},C.toString=function(){return"[object Generator]"},k.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},k.values=h,f.prototype={constructor:f,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.method="next",this.arg=g,this.tryEntries.forEach(p),!e)for(var t in this)"t"===t.charAt(0)&&y.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=g)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,n){return o.type="throw",o.arg=e,r.next=t,n&&(r.method="next",r.arg=g),!!n}if(this.done)throw e;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return t("end");if(i.tryLoc<=this.prev){var a=y.call(i,"catchLoc"),s=y.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return t(i.catchLoc,!0);if(this.prev<i.finallyLoc)return t(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return t(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return t(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,M):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),M},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),p(r),M}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;p(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:h(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=g),M}}}(function(){return this}()||Function("return this")())},257:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.renew&&e.isRenew&&1!=e.percent?r("Button",{attrs:{type:"primary"},on:{click:e.continueUpload}},[e._v("继续上传")]):r("div",{staticClass:"oss_file"},[e._t("default",[r("Button",{attrs:{type:"primary"}},[e._v("点击上传")])]),e._v(" "),r("input",{attrs:{type:"file",id:e.id,multiple:e.multiple},on:{change:e.doUpload}})],2)],1)},i=[];n._withStripped=!0;var o={render:n,staticRenderFns:i};t.default=o},279:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(252),o=n(i),a=r(331),s=n(a);t.default={components:{aliUpload:o.default,videoUpload:s.default},data:function(){return{flag:null,videoTag:[],appResourceInfoExDto:{appResourcesInfo:{},ids:[]},ids:[],formItem:{name:"",synopsis:"",type:1,details:"",image:"",resType:1,video:"",url:""},disabledGroup:"",ruleValidate:{name:[{required:!0,message:"不能为空",trigger:"blur"}],synopsis:[{required:!0,message:"不能为空",trigger:"blur"}],ids:[{required:!0,message:"不能为空",trigger:"blur"}],imageUrl:[{required:!0,message:"不能为空",trigger:"blur"}]}}},created:function(){if(this.getTag(),this.flag=this.$route.query.flag,2===this.flag){this.formItem=this.$route.query.videoInfo,1===this.formItem.resType?this.disabledGroup="视频源文件":this.disabledGroup="视频链接";var e=this.formItem.typeName,t=e.split(",");this.ids=t}},methods:{getTag:function(){var e=this,t=e.serviceurl+"/herbsfoods/getAppTag",r={type:2};e.$http(t,r,"","get").then(function(t){0===t.data.retCode?e.videoTag=t.data.data:e.$Message.warning(t.data.retMsg)}).catch(function(t){e.$Message.error("请求错误")})},changeRodio:function(e){this.formItem.resType="视频源文件"===e?1:2},saveOperation:function(){1===this.flag?this.addOperation():this.editOperation()},choiceTag:function(e){var t=this;this.ids=e,this.appResourceInfoExDto.ids=[],this.ids.map(function(e){t.videoTag.map(function(r){e===r.name&&(t.appResourceInfoExDto.ids=t.appResourceInfoExDto.ids.concat(r.id))})})},addOperation:function(){var e=this,t=e.serviceurl+"/herbsfoods/operationMgtAdd";e.formItem.createTime=(new Date).getTime(),e.appResourceInfoExDto.appResourcesInfo=e.formItem;var r=e.appResourceInfoExDto;e.$http(t,"",r,"post").then(function(t){0===t.data.retCode?(e.$Message.success("视频添加成功！"),e.$router.push({name:"videoManage"})):e.$Message.warning(t.data.retMsg)}).catch(function(t){e.$Message.error("请求错误")})},editOperation:function(){var e=this,t=e.serviceurl+"/herbsfoods/operationMgtEdit";e.formItem.updateTime=(new Date).getTime(),e.appResourceInfoExDto.appResourcesInfo=e.formItem;var r=e.appResourceInfoExDto;e.$http(t,"",r,"post").then(function(t){0===t.data.retCode?(e.$Message.success("修改成功！"),e.$router.push({name:"videoManage"})):e.$Message.warning(t.data.retMsg)}).catch(function(t){e.$Message.error("请求错误")})},goBack:function(){this.$router.push({name:"videoManage"})},getUploadUrl:function(e){this.formItem.image=e[0]},getVideoUploadUrl:function(e){this.formItem.video=e[0]}}}},280:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(251),o=n(i),a=r(63),s=(n(a),r(19)),l=n(s);l.default.get("clientId")&&l.default.get("clientId");t.default={props:{multiple:{type:Boolean,default:!1},id:{type:String,required:!0},isImg:{type:Boolean,default:!1},maxNum:{type:Number,default:10},renew:{type:Boolean,default:!1}},data:function(){return{isRenew:!1,region:"oss-cn-shanghai",folder:"herbsDood",expiration:"",client:"",storeAs:"",file:"",percent:"",tempCheckpoint:"",resultUpload:[]}},methods:{doUpload:function(){var e=this,t=this;this.$axios.get(this.serviceurl+"/oss/sts/policy/authorization/DUIKA_TEST_OSS?folder="+this.folder).then(function(r){if(0===r.data.retCode){e.expiration=r.data.data.Expiration;var n=new OSS.Wrapper({region:e.region,accessKeyId:r.data.data.AccessKeyId,accessKeySecret:r.data.data.AccessKeySecret,stsToken:r.data.data.SecurityToken,bucket:r.data.data.bucketName});e.client=n;var i=document.getElementById(e.id);if(e.isImg&&!/\.(mp4)$/.test(i.files[0].name))return e.$Message.warning("请上传视频！"),!1;i.files&&function(){for(var r=document.getElementById(e.id).files,i=0;i<r.length;i++)!function(i){var a=r[i];e.$emit("fileName",a.name),e.$emit("fileSize",a.size);var s=(new Date).getTime(),l=a.name.split(".")[0]+s+"."+a.name.split(".")[1],c=e.folder+"/"+l;e.storeAs=c,e.file=a,n.multipartUpload(c,a,{progress:o.default.mark(function e(r,n){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.tempCheckpoint=n,t.percent=r,t.$emit("percent",r);case 5:case"end":return e.stop()}},e,this)})}).then(function(t){t.res.requestUrls&&(e.resultUpload[0]=t.res.requestUrls[0].split("?")[0],i==r.length-1&&e.$emit("url",e.resultUpload))}).catch(function(t){e.isRenew=!0,e.$Message.warning("上传失败！")})}(i)}()}else e.$Message.warning(r.data.retMsg||"文件上传授权失败！")})},continueUpload:function(){var e=this,t=this;(!this.expiration||new Date>this.expiration)&&this.$http.get(this.serviceurl+"/oss/sts/policy/authorization/DUIKA_TEST_OSS?folder="+this.folder).then(function(t){if(0===t.data.retCode){e.expiration=t.data.data.Expiration;var r=new OSS.Wrapper({region:e.region,accessKeyId:t.data.data.AccessKeyId,accessKeySecret:t.data.data.AccessKeySecret,stsToken:t.data.data.SecurityToken,bucket:t.data.data.bucketName});e.client=r}else e.$Message.warning(t.data.retMsg||"文件上传授权失败！")}),this.client.multipartUpload(this.storeAs,this.file,{checkpoint:this.tempCheckpoint,progress:o.default.mark(function e(r,n){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.tempCheckpoint=n,t.percent=r,t.$emit("percent",r);case 5:case"end":return e.stop()}},e,this)})}).then(function(t){t.res.requestUrls&&(e.resultUpload[0]=t.res.requestUrls[0].split("?")[0],e.$emit("url",e.resultUpload))}).catch(function(t){e.isRenew=!0,e.$Message.warning("上传失败！")})}}}},329:function(e,t,r){var n=r(330);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(16)("0c93fc2e",n,!1,{})},330:function(e,t,r){t=e.exports=r(15)(!1),t.push([e.i,"\n.video-list[data-v-3ea82706] {\n  font-size: 14px;\n}\n.video-list[data-v-3ea82706] .ivu-input {\n  width: 22%;\n}\n.video-list .video-tip[data-v-3ea82706] {\n  display: -ms-flexbox;\n  display: flex;\n}\n.video-list .video-tip button[data-v-3ea82706] {\n  margin-right: 20px;\n}\n.video-list .logo-img-load[data-v-3ea82706] {\n  position: relative;\n  margin-top: -20px;\n}\n.video-list .logo-img-load .logo-img[data-v-3ea82706] {\n  width: 100px;\n  height: 100px;\n  border-radius: 5px;\n  border: 1px solid #4444445e;\n}\n.video-list .logo-img-load .logo-img img[data-v-3ea82706] {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n}\n.video-list .logo-img-load .logo-img video[data-v-3ea82706] {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n}\n.video-list .logo-img-load .img-upload[data-v-3ea82706] {\n  position: absolute;\n  top: 62px;\n  left: 20px;\n}\n.video-list .logo-img-load[data-v-3ea82706] .ivu-btn {\n  width: 85%;\n  background: #fff;\n  border-color: #4444445e;\n  border-radius: 20px;\n  height: 23px;\n  color: #444;\n  line-height: 13px;\n  padding-left: 5px;\n}\n.video-list .logo-img-load .img-tips[data-v-3ea82706] {\n  position: absolute;\n  bottom: -7px;\n  left: 105px;\n}\n",""])},331:function(e,t,r){"use strict";function n(e){c||r(332)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(280),o=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(t,e,function(){return i[e]})}(a);var s=r(334),l=r.n(s),c=!1,u=r(9),d=n,p=u(o.a,l.a,!1,d,null,null);p.options.__file="src/views/my-components/video-upload.vue",t.default=p.exports},332:function(e,t,r){var n=r(333);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(16)("3ec5b3b1",n,!1,{})},333:function(e,t,r){t=e.exports=r(15)(!1),t.push([e.i,"\n.oss_file {\n    display: inline-block;\n    position: relative;\n    overflow: hidden;\n}\n.oss_file input {\n    padding-top: 100%;\n    position: absolute;\n    right: 0;\n    top: 0;\n    opacity: 0;\n    filter: alpha(opacity=0);\n    cursor: pointer;\n    width: 100%;\n    height: 100%;\n}\n",""])},334:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.renew&&e.isRenew&&1!=e.percent?r("Button",{attrs:{type:"primary"},on:{click:e.continueUpload}},[e._v("继续上传")]):r("div",{staticClass:"oss_file"},[e._t("default",[r("Button",{attrs:{type:"primary"}},[e._v("点击上传")])]),e._v(" "),r("input",{attrs:{type:"file",id:e.id,multiple:e.multiple},on:{change:e.doUpload}})],2)],1)},i=[];n._withStripped=!0;var o={render:n,staticRenderFns:i};t.default=o},335:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-body video-list"},[r("Form",{attrs:{model:e.formItem,rules:e.ruleValidate,"label-width":80}},[r("FormItem",{attrs:{label:"视频名称",prop:"name"}},[r("Input",{attrs:{placeholder:"12字以内",maxlength:12},model:{value:e.formItem.name,callback:function(t){e.$set(e.formItem,"name",t)},expression:"formItem.name"}})],1),e._v(" "),r("FormItem",{attrs:{label:"视频简介",prop:"synopsis"}},[r("Input",{attrs:{type:"textarea",placeholder:"300字以内",maxlength:300,autosize:{minRows:4,maxRows:5}},model:{value:e.formItem.synopsis,callback:function(t){e.$set(e.formItem,"synopsis",t)},expression:"formItem.synopsis"}})],1),e._v(" "),r("FormItem",{attrs:{label:"视频标签",prop:"ids"}},[r("div",{staticClass:"video-tip"},[r("CheckboxGroup",{on:{"on-change":e.choiceTag},model:{value:e.ids,callback:function(t){e.ids=t},expression:"ids"}},e._l(e.videoTag,function(e){return r("Checkbox",{key:e.id,attrs:{label:e.name}})}),1),e._v(" "),r("p",{staticStyle:{color:"blue"}},[e._v("没有想要的标签？前往添加")])],1)]),e._v(" "),r("FormItem",{attrs:{label:"视频主图",prop:"imageUrl"}},[r("div",{staticClass:"logo-img-load"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formItem.image,expression:"formItem.image"}],attrs:{type:"hidden"},domProps:{value:e.formItem.image},on:{input:function(t){t.target.composing||e.$set(e.formItem,"image",t.target.value)}}}),e._v(" "),r("div",{staticClass:"logo-img"},[r("img",{attrs:{src:e.formItem.image,alt:""}})]),e._v(" "),r("div",{staticClass:"img-upload"},[r("ali-upload",{attrs:{id:"banner",isImg:!0,maxNum:1},on:{url:e.getUploadUrl}})],1),e._v(" "),r("p",{staticClass:"img-tips"},[e._v("规格尺寸：750*400")])])]),e._v(" "),r("FormItem",[r("RadioGroup",{on:{"on-change":e.changeRodio},model:{value:e.disabledGroup,callback:function(t){e.disabledGroup=t},expression:"disabledGroup"}},[r("Radio",{attrs:{label:"视频源文件"}}),e._v(" "),r("Radio",{attrs:{label:"视频链接"}})],1)],1),e._v(" "),"视频源文件"===e.disabledGroup?r("FormItem",{attrs:{label:"上传视频",prop:"video"}},[r("div",{staticClass:"logo-img-load"},[r("Input",{attrs:{type:"hidden"},model:{value:e.formItem.video,callback:function(t){e.$set(e.formItem,"video",t)},expression:"formItem.video"}}),e._v(" "),r("div",{staticClass:"logo-img"},[r("video",{attrs:{src:e.formItem.video}})]),e._v(" "),r("div",{staticClass:"img-upload"},[r("video-upload",{attrs:{id:"banner1",isImg:!0,maxNum:1},on:{url:e.getVideoUploadUrl}})],1),e._v(" "),r("p",{staticClass:"img-tips"},[e._v("文件大小格式")])],1)]):e._e(),e._v(" "),"视频链接"===e.disabledGroup?r("FormItem",{attrs:{prop:"video"}},[r("Input",{attrs:{placeholder:"http://"},model:{value:e.formItem.url,callback:function(t){e.$set(e.formItem,"url",t)},expression:"formItem.url"}}),e._v(" "),r("p",{staticStyle:{color:"red"}},[e._v("视频链接")])],1):e._e(),e._v(" "),"视频源文件"===e.disabledGroup?r("FormItem",{attrs:{label:"详情介绍",prop:"textarea"}},[r("Input",{attrs:{type:"textarea",placeholder:"主要用料",autosize:{minRows:7,maxRows:5}},model:{value:e.formItem.details,callback:function(t){e.$set(e.formItem,"details",t)},expression:"formItem.details"}})],1):e._e(),e._v(" "),r("FormItem",[r("Button",{staticClass:"btn btn-blue",on:{click:e.saveOperation}},[e._v("保存")]),e._v(" "),r("Button",{staticClass:"btn btn-blue",staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.goBack()}}},[e._v("取消")])],1)],1)],1)},i=[];n._withStripped=!0;var o={render:n,staticRenderFns:i};t.default=o}});