webpackJsonp([13],{227:function(t,e,n){"use strict";function r(t){l||n(415)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(323),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n(417),c=n.n(s),l=!1,u=n(6),p=r,d=u(a.a,c.a,!1,p,"data-v-146313c1",null);d.options.__file="src/views/IM/customerService/reply.vue",e.default=d.exports},264:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(268),a=r(i),o=n(56),s=(r(o),n(19)),c=r(s),l=c.default.get("clientId")?"/"+c.default.get("clientId"):"";e.default={props:{multiple:{type:Boolean,default:!1},id:{type:String,required:!0},isImg:{type:Boolean,default:!1},maxNum:{type:Number,default:10},renew:{type:Boolean,default:!1}},data:function(){return{isRenew:!1,region:"oss-cn-shanghai",folder:"teamAdmin"+l,expiration:"",client:"",storeAs:"",file:"",percent:"",tempCheckpoint:"",resultUpload:[]}},methods:{doUpload:function(){var t=this,e=this;this.$http.get(this.serviceurl+"/weteam-service/oss/sts/policy/authorization/DUIKA_TEST_OSS?folder="+this.folder).then(function(n){if(0===n.data.retCode){t.expiration=n.data.data.Expiration;var r=new OSS.Wrapper({region:t.region,accessKeyId:n.data.data.AccessKeyId,accessKeySecret:n.data.data.AccessKeySecret,stsToken:n.data.data.SecurityToken,bucket:n.data.data.bucketName});t.client=r;var i=document.getElementById(t.id);if(t.isImg&&!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(i.files[0].name))return t.$Message.warning("请上传图片！"),!1;i.files&&function(){for(var n=document.getElementById(t.id).files,i=0;i<n.length;i++)!function(i){var o=n[i];t.$emit("fileName",o.name),t.$emit("fileSize",o.size);var s=(new Date).getTime(),c=o.name.split(".")[0]+s+"."+o.name.split(".")[1],l=t.folder+"/"+c;t.storeAs=l,t.file=o,r.multipartUpload(l,o,{progress:a.default.mark(function t(n,r){return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.tempCheckpoint=r,e.percent=n,e.$emit("percent",n);case 5:case"end":return t.stop()}},t,this)})}).then(function(e){e.res.requestUrls&&(t.resultUpload[0]=e.res.requestUrls[0].split("?")[0],i==n.length-1&&t.$emit("url",t.resultUpload))}).catch(function(e){t.isRenew=!0,t.$Message.warning("上传失败！")})}(i)}()}else t.$Message.warning(n.data.retMsg||"文件上传授权失败！")})},continueUpload:function(){var t=this,e=this;(!this.expiration||new Date>this.expiration)&&this.$http.get(this.serviceurl+"/weteam-service/oss/sts/policy/authorization/DUIKA_TEST_OSS?folder="+this.folder).then(function(e){if(0===e.data.retCode){t.expiration=e.data.data.Expiration;var n=new OSS.Wrapper({region:t.region,accessKeyId:e.data.data.AccessKeyId,accessKeySecret:e.data.data.AccessKeySecret,stsToken:e.data.data.SecurityToken,bucket:e.data.data.bucketName});t.client=n}else t.$Message.warning(e.data.retMsg||"文件上传授权失败！")}),this.client.multipartUpload(this.storeAs,this.file,{checkpoint:this.tempCheckpoint,progress:a.default.mark(function t(n,r){return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.tempCheckpoint=r,e.percent=n,e.$emit("percent",n);case 5:case"end":return t.stop()}},t,this)})}).then(function(e){e.res.requestUrls&&(t.resultUpload[0]=e.res.requestUrls[0].split("?")[0],t.$emit("url",t.resultUpload))}).catch(function(e){t.isRenew=!0,t.$Message.warning("上传失败！")})}}}},265:function(t,e,n){"use strict";function r(t){l||n(266)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(264),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n(271),c=n.n(s),l=!1,u=n(6),p=r,d=u(a.a,c.a,!1,p,null,null);d.options.__file="src/views/my-components/ali-upload.vue",e.default=d.exports},266:function(t,e,n){var r=n(267);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(14)("0d2aba44",r,!1,{})},267:function(t,e,n){e=t.exports=n(13)(!1),e.push([t.i,"\n.oss_file {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n}\n.oss_file input {\n  padding-top: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n}\n",""])},268:function(t,e,n){t.exports=n(269)},269:function(t,e,n){var r=function(){return this}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(270),i)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},270:function(t,e){!function(e){"use strict";function n(t,e,n,r){var a=e&&e.prototype instanceof i?e:i,o=Object.create(a.prototype),s=new f(r||[]);return o._invoke=l(t,n,s),o}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function i(){}function a(){}function o(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(n,i,a,o){var s=r(t[n],t,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&y.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,a,o)},function(t){e("throw",t,a,o)}):Promise.resolve(l).then(function(t){c.value=t,a(c)},o)}o(s.arg)}function n(t,n){function r(){return new Promise(function(r,i){e(t,n,r,i)})}return i=i?i.then(r,r):r()}var i;this._invoke=n}function l(t,e,n){var i=M;return function(a,o){if(i===E)throw new Error("Generator is already running");if(i===S){if("throw"===a)throw o;return g()}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var c=u(s,n);if(c){if(c===$)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===M)throw i=S,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=E;var l=r(t,e,n);if("normal"===l.type){if(i=n.done?S:C,l.arg===$)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=S,n.method="throw",n.arg=l.arg)}}}function u(t,e){var n=t.iterator[e.method];if(n===v){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=v,u(t,e),"throw"===e.method))return $;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return $}var i=r(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,$;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=v),e.delegate=null,$):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,$)}function p(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function d(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function f(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(p,this),this.reset(!0)}function h(t){if(t){var e=t[_];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(y.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=v,e.done=!0,e};return r.next=r}}return{next:g}}function g(){return{value:v,done:!0}}var v,m=Object.prototype,y=m.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},_=w.iterator||"@@iterator",x=w.asyncIterator||"@@asyncIterator",b=w.toStringTag||"@@toStringTag",k="object"==typeof t,L=e.regeneratorRuntime;if(L)return void(k&&(t.exports=L));L=e.regeneratorRuntime=k?t.exports:{},L.wrap=n;var M="suspendedStart",C="suspendedYield",E="executing",S="completed",$={},O={};O[_]=function(){return this};var I=Object.getPrototypeOf,U=I&&I(I(h([])));U&&U!==m&&y.call(U,_)&&(O=U);var j=o.prototype=i.prototype=Object.create(O);a.prototype=j.constructor=o,o.constructor=a,o[b]=a.displayName="GeneratorFunction",L.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},L.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,o):(t.__proto__=o,b in t||(t[b]="GeneratorFunction")),t.prototype=Object.create(j),t},L.awrap=function(t){return{__await:t}},s(c.prototype),c.prototype[x]=function(){return this},L.AsyncIterator=c,L.async=function(t,e,r,i){var a=new c(n(t,e,r,i));return L.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},s(j),j[b]="Generator",j[_]=function(){return this},j.toString=function(){return"[object Generator]"},L.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},L.values=h,f.prototype={constructor:f,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(d),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=v),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var o=y.call(i,"catchLoc"),s=y.call(i,"finallyLoc");if(o&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&y.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,$):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),$},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),d(n),$}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;d(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:h(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=v),$}}}(function(){return this}()||Function("return this")())},271:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.renew&&t.isRenew&&1!=t.percent?n("Button",{attrs:{type:"primary"},on:{click:t.continueUpload}},[t._v("继续上传")]):n("div",{staticClass:"oss_file"},[t._t("default",[n("Button",{attrs:{type:"primary"}},[t._v("点击上传")])]),t._v(" "),n("input",{attrs:{type:"file",id:t.id,multiple:t.multiple},on:{change:t.doUpload}})],2)],1)},i=[];r._withStripped=!0;var a={render:r,staticRenderFns:i};e.default=a},323:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(265),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={components:{aliUpload:i.default},data:function(){return{msgData:[],form:{content:"",imageList:[],pid:this.$route.query.id,type:1},previewerModal:!1,previewerItem:""}},created:function(){this.getMessage()},methods:{getMessage:function(){var t=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/leave/getMessage",method:"get",params:{id:this.$route.query.id}}).then(function(e){0===e.data.retCode?t.msgData=e.data.data:t.$Message.warning(e.data.retMsg)}).catch(function(t){})},replay:function(){var t=this;if(""==this.form.content)return void this.$Message.warning("回复内容不能为空！");this.$http({url:this.serviceurl+"/weteam-service/mgt/leave/responseMessage",method:"post",data:this.form}).then(function(e){0===e.data.retCode?(t.form.content="",t.form.imageList=[],t.$Message.success("回复成功！"),t.getMessage()):t.$Message.warning(e.data.retMsg)}).catch(function(t){})},getUploadUrl:function(t){this.form.imageList.push(t[0]+"?x-oss-process=image/resize,h_400,w_400")},previewer:function(t){this.previewerItem=t,this.previewerModal=!0}}}},415:function(t,e,n){var r=n(416);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(14)("4f232a45",r,!1,{})},416:function(t,e,n){e=t.exports=n(13)(!1),e.push([t.i,"\n.reply-list[data-v-146313c1] {\n  list-style: none;\n}\n.reply-list li[data-v-146313c1] {\n  margin-bottom: 15px;\n  padding: 15px;\n  border: 1px solid #ccc;\n}\n.reply-list li .msg-info[data-v-146313c1] {\n  font-size: 14px;\n}\n.reply-list li .msg-info label[data-v-146313c1] {\n  display: inline-block;\n  width: 80px;\n  text-align: right;\n  margin-right: 5px;\n}\n.reply-list li hr[data-v-146313c1] {\n  border: none;\n  height: 1px;\n  background: #ccc;\n  margin: 10px 0;\n}\n.reply-list li .cont[data-v-146313c1] {\n  font-size: 14px;\n}\n.reply-list li .cont label[data-v-146313c1] {\n  float: left;\n  display: block;\n  width: 80px;\n  text-align: right;\n  margin-right: 5px;\n}\n.reply-list li .cont .cont-item[data-v-146313c1] {\n  margin-left: 80px;\n  overflow: hidden;\n}\n.reply-list li .cont .img-group[data-v-146313c1] {\n  overflow: hidden;\n  padding-left: 85px;\n}\n.reply-list li .cont .img-group .img-wrap[data-v-146313c1] {\n  display: inline-block;\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n  margin-right: 10px;\n  text-align: center;\n  line-height: 200px;\n}\n.reply-list li .cont .img-group .img-wrap img[data-v-146313c1] {\n  max-width: 100%;\n  max-height: 100%;\n  vertical-align: middle;\n}\n.reply[data-v-146313c1] {\n  margin-bottom: 15px;\n  padding: 15px;\n  border: 1px solid #ccc;\n  font-size: 14px;\n}\n.reply label[data-v-146313c1] {\n  float: left;\n  display: block;\n  width: 80px;\n  text-align: right;\n  margin-right: 5px;\n}\n.reply .cont-item[data-v-146313c1] {\n  margin-left: 80px;\n  overflow: hidden;\n}\n.reply .btn-bar[data-v-146313c1] {\n  overflow: hidden;\n  margin: 10px 0;\n}\n.reply .img-group[data-v-146313c1] {\n  margin: 10px 0;\n}\n.reply .img-group .img-wrap[data-v-146313c1] {\n  display: inline-block;\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n  margin-left: 10px;\n  text-align: center;\n  line-height: 30px;\n}\n.reply .img-group .img-wrap img[data-v-146313c1] {\n  max-width: 100%;\n  max-height: 100%;\n  vertical-align: middle;\n}\n.previewer-wrap[data-v-146313c1] {\n  text-align: center;\n}\n.previewer-wrap img[data-v-146313c1] {\n  max-width: 100%;\n}\n",""])},417:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-body"},[n("ul",{staticClass:"reply-list"},t._l(t.msgData,function(e,r){return n("li",{key:r},[0===e.type?[n("div",{staticClass:"msg-info"},[n("label",[t._v("留言人：")]),n("span",[t._v(t._s(e.leaveName))]),t._v(" "),n("label",[t._v("联系方式：")]),n("span",[t._v(t._s(e.leavePhone))]),t._v(" "),n("label",[t._v("留言时间：")]),n("span",[t._v(t._s(e.createTime))])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"cont"},[n("label",[t._v("标题：")]),n("div",{staticClass:"cont-item"},[t._v(t._s(e.title))]),n("br"),t._v(" "),n("label",[t._v("内容：")]),n("div",{staticClass:"cont-item"},[t._v(t._s(e.content))]),n("br"),t._v(" "),e.imgList.length>0?n("div",{staticClass:"img-group"},t._l(e.imgList,function(e,r){return n("div",{key:r,staticClass:"img-wrap",on:{click:function(n){t.previewer(e)}}},[n("img",{attrs:{src:e,alt:""}})])})):t._e()])]:[n("div",{staticClass:"cont"},[n("label",[t._v(t._s(1===e.type?"内容：":"回复："))]),n("div",{staticClass:"cont-item"},[t._v(t._s(e.content))]),n("br"),t._v(" "),e.imgList.length>0?n("div",{staticClass:"img-group"},t._l(e.imgList,function(e,r){return n("div",{key:r,staticClass:"img-wrap",on:{click:function(n){t.previewer(e)}}},[n("img",{attrs:{src:e,alt:""}})])})):t._e(),t._v(" "),n("label",[t._v("回复时间：")]),n("div",{staticClass:"cont-item"},[t._v(t._s(e.createTime))]),n("br")])]],2)})),t._v(" "),n("div",{staticClass:"reply"},[n("label",[t._v("回复：")]),t._v(" "),n("div",{staticClass:"cont-item"},[n("Input",{attrs:{type:"textarea",placeholder:""},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}}),t._v(" "),n("div",{staticClass:"img-group"},t._l(t.form.imageList,function(t,e){return n("div",{key:e,staticClass:"img-wrap"},[n("img",{attrs:{src:t,alt:""}})])})),t._v(" "),n("div",{staticClass:"btn-bar"},[this.form.imageList.length<3?n("ali-upload",{staticClass:"cc-float-l cc-p-t-10",attrs:{id:"msg",isImg:!0},on:{url:t.getUploadUrl}},[n("div",[n("Icon",{attrs:{type:"image"}}),t._v(" 添加图片")],1)]):t._e(),t._v(" "),n("Button",{staticClass:"cc-float-r",attrs:{type:"primary"},on:{click:t.replay}},[t._v("回复")])],1)],1)]),t._v(" "),n("Modal",{attrs:{title:"图片预览"},model:{value:t.previewerModal,callback:function(e){t.previewerModal=e},expression:"previewerModal"}},[n("div",{staticClass:"previewer-wrap"},[n("img",{attrs:{src:t.previewerItem,alt:""}})])])],1)},i=[];r._withStripped=!0;var a={render:r,staticRenderFns:i};e.default=a}});