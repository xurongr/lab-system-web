webpackJsonp([11],{236:function(t,e,s){"use strict";function r(t){l||s(345)}Object.defineProperty(e,"__esModule",{value:!0});var a=s(284),o=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);var i=s(347),u=s.n(i),l=!1,c=s(9),f=r,d=c(o.a,u.a,!1,f,"data-v-1ac9f1a5",null);d.options.__file="src/views/systemManagement/rewardSettings.vue",e.default=d.exports},284:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{formCustom:{resKey:"",value:""},sysResourcesConfigDtoList:[],ruleCustom:{resKey:[{required:!0,trigger:"blur"}],value:[{required:!0,trigger:"blur"}]}}},created:function(){},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){t?e.setReword():e.$Message.error("请填写完整!")})},setReword:function(){var t=this,e=this,s=e.serviceurl+"/backstage/sys/config/modify";e.sysResourcesConfigDtoList[0]=e.formCustom;var r=e.sysResourcesConfigDtoList;e.$http(s,"",r,"post").then(function(s){0===s.data.retCode?e.$Message.success("修改成功"):t.$Message.warning(s.data.retMsg||"修改失败！")}).catch(function(t){e.$Message.warning("请求错误！")})}}}},345:function(t,e,s){var r=s(346);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);s(16)("3e6c66c5",r,!1,{})},346:function(t,e,s){e=t.exports=s(15)(!1),e.push([t.i,"\n.reward[data-v-1ac9f1a5] .ivu-input {\n  width: 300px;\n}\n.reward .tips[data-v-1ac9f1a5] {\n  position: absolute;\n  top: 0;\n  left: 310px;\n  color: red;\n}\n.reward button[data-v-1ac9f1a5] {\n  border-radius: 20px;\n  width: 100px;\n}\n",""])},347:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-body reward"},[s("Form",{ref:"formCustom",attrs:{model:t.formCustom,rules:t.ruleCustom,"label-width":150}},[s("FormItem",{attrs:{label:"推广会员可提现比例：",prop:"resKey"}},[s("div",{staticStyle:{position:"relative"}},[s("Input",{attrs:{placeholder:"示例：70%，不设置，默认100%"},model:{value:t.formCustom.resKey,callback:function(e){t.$set(t.formCustom,"resKey",e)},expression:"formCustom.resKey"}}),t._v(" "),s("p",{staticClass:"tips"},[t._v("提示：可提现比例为会员推广收益可提现部分，不可提现部分设置单独账户")])],1)]),t._v(" "),s("FormItem",{attrs:{label:"推广会员收益条件：",prop:"value"}},[s("div",{staticStyle:{position:"relative"}},[s("Input",{attrs:{placeholder:"示例：充值卡余额大于10，不设置，默认不做限制"},model:{value:t.formCustom.value,callback:function(e){t.$set(t.formCustom,"value",e)},expression:"formCustom.value"}}),t._v(" "),s("p",{staticClass:"tips"},[t._v("提示：充值卡余额应大于多少，推广会员才能产生推广收益，此为触发阈值设置")])],1)]),t._v(" "),s("FormItem",[s("Button",{staticClass:"btn btn-blue",attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formCustom")}}},[t._v("保存")])],1)],1)],1)},a=[];r._withStripped=!0;var o={render:r,staticRenderFns:a};e.default=o}});