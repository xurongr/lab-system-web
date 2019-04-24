webpackJsonp([1],{248:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(249),a=n(o),i=r(63),s=(n(i),r(19)),c=n(s);c.default.get("clientId")&&c.default.get("clientId");e.default={props:{multiple:{type:Boolean,default:!1},id:{type:String,required:!0},isImg:{type:Boolean,default:!1},maxNum:{type:Number,default:10},renew:{type:Boolean,default:!1}},data:function(){return{isRenew:!1,region:"oss-cn-shanghai",folder:"herbsDood",expiration:"",client:"",storeAs:"",file:"",percent:"",tempCheckpoint:"",resultUpload:[]}},methods:{doUpload:function(){var t=this,e=this;this.$axios.get(this.serviceurl+"/oss/sts/policy/authorization/DUIKA_TEST_OSS?folder="+this.folder).then(function(r){if(0===r.data.retCode){t.expiration=r.data.data.Expiration;var n=new OSS.Wrapper({region:t.region,accessKeyId:r.data.data.AccessKeyId,accessKeySecret:r.data.data.AccessKeySecret,stsToken:r.data.data.SecurityToken,bucket:r.data.data.bucketName});t.client=n;var o=document.getElementById(t.id);if(t.isImg&&!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(o.files[0].name))return t.$Message.warning("请上传图片！"),!1;o.files&&function(){for(var r=document.getElementById(t.id).files,o=0;o<r.length;o++)!function(o){var i=r[o];t.$emit("fileName",i.name),t.$emit("fileSize",i.size);var s=(new Date).getTime(),c=i.name.split(".")[0]+s+"."+i.name.split(".")[1],l=t.folder+"/"+c;t.storeAs=l,t.file=i,n.multipartUpload(l,i,{progress:a.default.mark(function t(r,n){return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.tempCheckpoint=n,e.percent=r,e.$emit("percent",r);case 5:case"end":return t.stop()}},t,this)})}).then(function(e){e.res.requestUrls&&(t.resultUpload[0]=e.res.requestUrls[0].split("?")[0],o==r.length-1&&t.$emit("url",t.resultUpload))}).catch(function(e){t.isRenew=!0,t.$Message.warning("上传失败！")})}(o)}()}else t.$Message.warning(r.data.retMsg||"文件上传授权失败！")})},continueUpload:function(){var t=this,e=this;(!this.expiration||new Date>this.expiration)&&this.$http.get(this.serviceurl+"/oss/sts/policy/authorization/DUIKA_TEST_OSS?folder="+this.folder).then(function(e){if(0===e.data.retCode){t.expiration=e.data.data.Expiration;var r=new OSS.Wrapper({region:t.region,accessKeyId:e.data.data.AccessKeyId,accessKeySecret:e.data.data.AccessKeySecret,stsToken:e.data.data.SecurityToken,bucket:e.data.data.bucketName});t.client=r}else t.$Message.warning(e.data.retMsg||"文件上传授权失败！")}),this.client.multipartUpload(this.storeAs,this.file,{checkpoint:this.tempCheckpoint,progress:a.default.mark(function t(r,n){return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.tempCheckpoint=n,e.percent=r,e.$emit("percent",r);case 5:case"end":return t.stop()}},t,this)})}).then(function(e){e.res.requestUrls&&(t.resultUpload[0]=e.res.requestUrls[0].split("?")[0],t.$emit("url",t.resultUpload))}).catch(function(e){t.isRenew=!0,t.$Message.warning("上传失败！")})}}}},249:function(t,e,r){t.exports=r(253)},250:function(t,e,r){"use strict";function n(t){l||r(251)}Object.defineProperty(e,"__esModule",{value:!0});var o=r(248),a=r.n(o);for(var i in o)"default"!==i&&function(t){r.d(e,t,function(){return o[t]})}(i);var s=r(255),c=r.n(s),l=!1,u=r(9),p=n,d=u(a.a,c.a,!1,p,null,null);d.options.__file="src/views/my-components/ali-upload.vue",e.default=d.exports},251:function(t,e,r){var n=r(252);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(16)("0d2aba44",n,!1,{})},252:function(t,e,r){e=t.exports=r(15)(!1),e.push([t.i,"\n.oss_file {\r\n  display: inline-block;\r\n  position: relative;\r\n  overflow: hidden;\n}\n.oss_file input {\r\n  padding-top: 100%;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  opacity: 0;\r\n  filter: alpha(opacity=0);\r\n  cursor: pointer;\r\n  width: 100%;\r\n  height: 100%;\n}\r\n",""])},253:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(254),o)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},254:function(t,e){!function(e){"use strict";function r(t,e,r,n){var a=e&&e.prototype instanceof o?e:o,i=Object.create(a.prototype),s=new h(n||[]);return i._invoke=l(t,r,s),i}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function a(){}function i(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(r,o,a,i){var s=n(t[r],t,o);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&y.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(l).then(function(t){c.value=t,a(c)},i)}i(s.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function l(t,e,r){var o=L;return function(a,i){if(o===E)throw new Error("Generator is already running");if(o===S){if("throw"===a)throw i;return g()}for(r.method=a,r.arg=i;;){var s=r.delegate;if(s){var c=u(s,r);if(c){if(c===M)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===L)throw o=S,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=E;var l=n(t,e,r);if("normal"===l.type){if(o=r.done?S:$,l.arg===M)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=S,r.method="throw",r.arg=l.arg)}}}function u(t,e){var r=t.iterator[e.method];if(r===m){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=m,u(t,e),"throw"===e.method))return M;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return M}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,M;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=m),e.delegate=null,M):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,M)}function p(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function d(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(p,this),this.reset(!0)}function f(t){if(t){var e=t[b];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(y.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=m,e.done=!0,e};return n.next=n}}return{next:g}}function g(){return{value:m,done:!0}}var m,v=Object.prototype,y=v.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},b=w.iterator||"@@iterator",x=w.asyncIterator||"@@asyncIterator",_=w.toStringTag||"@@toStringTag",I="object"==typeof t,k=e.regeneratorRuntime;if(k)return void(I&&(t.exports=k));k=e.regeneratorRuntime=I?t.exports:{},k.wrap=r;var L="suspendedStart",$="suspendedYield",E="executing",S="completed",M={},O={};O[b]=function(){return this};var U=Object.getPrototypeOf,j=U&&U(U(f([])));j&&j!==v&&y.call(j,b)&&(O=j);var N=i.prototype=o.prototype=Object.create(O);a.prototype=N.constructor=i,i.constructor=a,i[_]=a.displayName="GeneratorFunction",k.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},k.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,i):(t.__proto__=i,_ in t||(t[_]="GeneratorFunction")),t.prototype=Object.create(N),t},k.awrap=function(t){return{__await:t}},s(c.prototype),c.prototype[x]=function(){return this},k.AsyncIterator=c,k.async=function(t,e,n,o){var a=new c(r(t,e,n,o));return k.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},s(N),N[_]="Generator",N[b]=function(){return this},N.toString=function(){return"[object Generator]"},k.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},k.values=f,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(d),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=m)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=m),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var i=y.call(o,"catchLoc"),s=y.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,M):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),M},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),d(r),M}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;d(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:f(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=m),M}}}(function(){return this}()||Function("return this")())},255:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.renew&&t.isRenew&&1!=t.percent?r("Button",{attrs:{type:"primary"},on:{click:t.continueUpload}},[t._v("继续上传")]):r("div",{staticClass:"oss_file"},[t._t("default",[r("Button",{attrs:{type:"primary"}},[t._v("点击上传")])]),t._v(" "),r("input",{attrs:{type:"file",id:t.id,multiple:t.multiple},on:{change:t.doUpload}})],2)],1)},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};e.default=a},275:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(250),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{aliUpload:o.default},data:function(){return{flag:null,shop:{status:1,shopName:"",shopDescribe:"",shopowner:"",contactInfo:"",shopLogo:"",addr:"",longitude:"",latitude:""}}},created:function(){this.flag=this.$route.query.flag,2===this.flag&&(this.shop=this.$route.query.shopInfo)},methods:{getUploadUrl:function(t){this.shop.shopLogo=t[0]+"?x-oss-process=image/resize,m_fill,limit_0,h_390,w_750"},saveShop:function(){var t=this,e=t.serviceurl+"/backstage/shop/addOrModifyShop";2===t.flag&&(t.shop.updateTime=(new Date).getTime());var r=t.shop;t.$http(e,"",r,"post").then(function(e){0===e.data.retCode?(1===t.flag?t.$Message.success("店铺添加成功！"):t.$Message.success("店铺修改成功！"),t.$router.push({name:"storeManagement"})):1===t.flag?t.$Message.warning(e.data.retMsg||"店铺添加失败！"):t.$Message.warning(e.data.retMsg||"店铺修改失败！")}).catch(function(e){t.$Message.error("请求错误")})}}}},319:function(t,e,r){var n=r(320);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(16)("5895b628",n,!1,{})},320:function(t,e,r){e=t.exports=r(15)(!1),e.push([t.i,"\n.add-store[data-v-10ceba3a] {\n  font-size: 14px;\n}\n.add-store[data-v-10ceba3a] .ivu-input {\n  width: 22%;\n}\n.add-store .logo-img-load[data-v-10ceba3a] {\n  position: relative;\n  margin-top: -20px;\n}\n.add-store .logo-img-load .logo-img[data-v-10ceba3a] {\n  width: 100px;\n  height: 100px;\n  border-radius: 5px;\n  border: 1px solid #4444445e;\n}\n.add-store .logo-img-load .logo-img img[data-v-10ceba3a] {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n}\n.add-store .logo-img-load .img-upload[data-v-10ceba3a] {\n  position: absolute;\n  top: 62px;\n  left: 20px;\n}\n.add-store .logo-img-load[data-v-10ceba3a] .ivu-btn {\n  width: 85%;\n  background: #fff;\n  border-color: #4444445e;\n  border-radius: 20px;\n  height: 23px;\n  color: #444;\n  line-height: 13px;\n  padding-left: 5px;\n}\n.add-store .logo-img-load .img-tips[data-v-10ceba3a] {\n  position: absolute;\n  bottom: -7px;\n  left: 105px;\n}\n",""])},321:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-body add-store"},[r("Form",{attrs:{model:t.shop,"label-width":80}},[r("FormItem",{attrs:{label:"店铺名称"}},[r("Input",{model:{value:t.shop.shopName,callback:function(e){t.$set(t.shop,"shopName",e)},expression:"shop.shopName"}})],1),t._v(" "),r("FormItem",{attrs:{label:"店铺描述"}},[r("Input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:5}},model:{value:t.shop.shopDescribe,callback:function(e){t.$set(t.shop,"shopDescribe",e)},expression:"shop.shopDescribe"}})],1),t._v(" "),r("FormItem",{attrs:{label:"负责人"}},[r("Input",{model:{value:t.shop.shopowner,callback:function(e){t.$set(t.shop,"shopowner",e)},expression:"shop.shopowner"}})],1),t._v(" "),r("FormItem",{attrs:{label:"联系方式"}},[r("Input",{attrs:{placeholder:"客服号码"},model:{value:t.shop.contactInfo,callback:function(e){t.$set(t.shop,"contactInfo",e)},expression:"shop.contactInfo"}})],1),t._v(" "),r("FormItem",{attrs:{label:"店铺logo"}},[r("div",{staticClass:"logo-img-load"},[r("Input",{attrs:{type:"hidden"},model:{value:t.shop.shopLogo,callback:function(e){t.$set(t.shop,"shopLogo",e)},expression:"shop.shopLogo"}}),t._v(" "),r("div",{staticClass:"logo-img"},[r("img",{attrs:{src:t.shop.shopLogo,alt:""}})]),t._v(" "),r("div",{staticClass:"img-upload"},[r("ali-upload",{attrs:{id:"banner",isImg:!0,maxNum:1},on:{url:t.getUploadUrl}})],1),t._v(" "),r("p",{staticClass:"img-tips"},[t._v("规格尺寸：100*100")])],1)]),t._v(" "),r("FormItem",{attrs:{label:"店铺地址"}},[r("Input",{model:{value:t.shop.addr,callback:function(e){t.$set(t.shop,"addr",e)},expression:"shop.addr"}})],1),t._v(" "),r("FormItem",{attrs:{label:"经纬度"}},[r("Input",{model:{value:t.shop.longitude,callback:function(e){t.$set(t.shop,"longitude",e)},expression:"shop.longitude"}})],1),t._v(" "),r("FormItem",[r("Button",{staticClass:"btn btn-blue",on:{click:t.saveShop}},[t._v("保存")]),t._v(" "),r("Button",{staticClass:"btn btn-blue",staticStyle:{"margin-left":"8px"}},[t._v("取消")])],1)],1)],1)},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};e.default=a},99:function(t,e,r){"use strict";function n(t){l||r(319)}Object.defineProperty(e,"__esModule",{value:!0});var o=r(275),a=r.n(o);for(var i in o)"default"!==i&&function(t){r.d(e,t,function(){return o[t]})}(i);var s=r(321),c=r.n(s),l=!1,u=r(9),p=n,d=u(a.a,c.a,!1,p,"data-v-10ceba3a",null);d.options.__file="src/views/storeManagement/storeInfo.vue",e.default=d.exports}});