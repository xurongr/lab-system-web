webpackJsonp([8],{272:function(e,t,a){"use strict";function r(e,t){for(var a=0;a<e.length;a++)if(e[a].userId===t.userId)return a;return-1}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{isRadio:{type:Boolean,default:!1},url:{type:String,default:""},checkedData:{type:Array,default:function(){return[]}}},data:function(){return{checked:[],userList:[],search:"",resList:[],redio:""}},created:function(){this.getUser()},methods:{getUser:function(){var e=this;this.$http({url:this.serviceurl+"/weteam-service/"+this.url,method:"get"}).then(function(t){0===t.data.retCode&&t.data.data&&(e.userList=t.data.data)}).catch(function(e){})},checkChange:function(e){var t=this,a=[];e.forEach(function(e){a.push(t.resList[e])}),this.$emit("val",a)},radioChange:function(e){this.$emit("val",this.resList[e])},searchUser:function(){for(var e=this.userList,t=[],a=new RegExp(this.search),r=0;r<e.length;r++)(e[r].userName&&e[r].userName.match(a)||e[r].userPhone&&e[r].userPhone.match(a))&&t.push(e[r]);this.resList=t,this.checkedChange()},delChecked:function(e){this.checked.splice(e,1)},checkedChange:function(){var e=this;this.checked=[],this.checkedData.forEach(function(t){var a=r(e.resList,t);a>-1&&e.checked.push(a)})}}}},274:function(e,t,a){"use strict";function r(e){c||a(275)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(272),i=a.n(o);for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);var n=a(277),l=a.n(n),c=!1,m=a(6),u=r,d=m(i.a,l.a,!1,u,"data-v-1ea60565",null);d.options.__file="src/views/my-components/searchUser.vue",t.default=d.exports},275:function(e,t,a){var r=a(276);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(14)("57d962f4",r,!1,{})},276:function(e,t,a){t=e.exports=a(13)(!1),t.push([e.i,"\n.res-list[data-v-1ea60565] {\n  width: 300px;\n  height: 200px;\n  overflow-y: auto;\n  border: 1px solid #dddee1;\n  margin-top: 10px;\n  padding: 10px;\n}\n",""])},277:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Input",{staticClass:"cc-w-300",attrs:{placeholder:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),a("Button",{attrs:{type:"primary"},on:{click:e.searchUser}},[e._v("搜索")]),e._v(" "),a("div",{staticClass:"res-list"},[e.isRadio?a("RadioGroup",{on:{"on-change":e.radioChange},model:{value:e.redio,callback:function(t){e.redio=t},expression:"redio"}},e._l(e.resList,function(t,r){return a("p",{key:r},[a("Radio",{attrs:{label:r}},[e._v(e._s(t.userName+"  ("+t.userPhone+")"))])],1)})):a("CheckboxGroup",{on:{"on-change":e.checkChange},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},e._l(e.resList,function(t,r){return a("p",{key:r},[a("Checkbox",{attrs:{label:r}},[e._v(e._s(t.userName+"   ("+t.userPhone+")"))])],1)}))],1)],1)},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};t.default=i},321:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(274),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=new Date;t.default={data:function(){var e=this;return{formKey:0,modalShow:!1,allPeopleNum:0,peopleNum:0,selectedList:[],form:{actiMainID:1,actiName:"",remark:"",startTime:"",endTime:"",continueTime:"",type:1,totalMoney:"",totalNum:"",probability:"",maxNum:"",bigMoney:"",bigNum:"",object:1,singleMoney:"",companyUserList:[]},rules:{actiName:[{required:!0,message:"活动名称不能为空",trigger:"blur"},{max:20,message:"活动名称20字以内",trigger:"change"}],remark:[{required:!0,message:"活动名称不能为空",trigger:"blur"},{max:50,message:"活动名称50字以内",trigger:"change"}],startTime:[{required:!0,type:"date",message:"请选择开始时间",trigger:"change"}],endTime:[{required:!0,type:"date",message:"请选择结束时间",trigger:"change"}],continueTime:[{required:!0,message:"持续时间不能为空",trigger:"blur"},{validator:function(e,t,a,r,o){var i=[];/^[0-9]+$/.test(t)||a("持续时间为整数"),a(i)}}],totalMoney:[{required:!0,message:"红包总额不能为空",trigger:"blur"},{validator:function(e,t,a,r,o){var i=[];"0"===t&&a("红包总额不能为0"),/(^[1-9](\d+)?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/.test(t)||a("请输入最多两位小数的金额"),a(i)}}],totalNum:[{required:!0,message:"红包个数不能为空",trigger:"blur"},{validator:function(e,t,a,r,o){var i=[];/^[0-9]+$/.test(t)||a("红包个数为整数"),a(i)}}],bigMoney:[{required:!0,message:"大红包金额不能为空",trigger:"blur"},{validator:function(e,t,a,r,o){var i=[];/(^[1-9](\d+)?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/.test(t)||a("请输入最多两位小数的金额"),a(i)}}],bigNum:[{required:!0,message:"大红包个数不能为空",trigger:"blur"},{validator:function(e,t,a,r,o){var i=[];/^[0-9]+$/.test(t)||a("大红包个数为整数"),a(i)}}],probability:[{required:!0,message:"中奖概率不能为空",trigger:"blur"},{validator:function(e,t,a,r,o){var i=[];t>100&&a("中奖概率不能大于100%"),/^[0-9]+$/.test(t)||a("中奖概率为整数"),a(i)}}],maxNum:[{validator:function(e,t,a,r,o){var i=[];""===t||null===t||/^[0-9]+$/.test(t)||a("最多领取数为整数"),a(i)}}],singleMoney:[{required:!0,message:"单个红包金额不能为空",trigger:"blur"},{validator:function(e,t,a,r,o){var i=[];"0"===t&&a("单个红包金额不能为0"),/(^[1-9](\d+)?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/.test(t)||a("请输入最多两位小数的金额"),a(i)}}]},startTimeOptions:{disabledDate:function(t){return t&&e.formatDate(new Date(t),"yyyy-MM-dd")<e.formatDate(i,"yyyy-MM-dd")}},endTimeOptions:{disabledDate:function(t){return t&&e.formatDate(new Date(t),"yyyy-MM-dd")<e.formatDate(i,"yyyy-MM-dd")}}}},components:{searchUser:o.default},created:function(){this.getOrgList(),this.$route.query.id&&this.getActivityDetail()},methods:{startTimeChange:function(e){var t=this;this.endTimeOptions={disabledDate:function(e){var a=t.form.startTime?new Date(t.form.startTime).valueOf():"";return e&&t.formatDate(new Date(e),"yyyy-MM-dd")<t.formatDate(new Date(a),"yyyy-MM-dd")||t.formatDate(new Date(e),"yyyy-MM-dd")<t.formatDate(i,"yyyy-MM-dd")}}},endTimeChange:function(e){var t=this;this.startTimeOptions={disabledDate:function(e){var a=t.form.endTime?new Date(t.form.endTime).valueOf():"";return e&&t.formatDate(new Date(e),"yyyy-MM-dd")>t.formatDate(new Date(a),"yyyy-MM-dd")||t.formatDate(new Date(e),"yyyy-MM-dd")<t.formatDate(i,"yyyy-MM-dd")}}},getOrgList:function(){var e=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/user/org/list",method:"get"}).then(function(t){0===t.data.retCode?e.allPeopleNum=t.data.data.length:e.$Message.warning(t.data.retMsg)}).catch(function(e){})},getActivityDetail:function(){var e=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/activity/detail",method:"get",params:{id:this.$route.query.id}}).then(function(t){0===t.data.retCode?(e.form=t.data.data,e.form.actiMainID=+e.form.actiMainID,e.form.continueTime=""+e.form.continueTime,e.form.totalMoney=""+e.form.totalMoney,e.form.totalNum=""+e.form.totalNum,e.form.probability=""+e.form.probability,e.form.bigMoney=""+e.form.bigMoney,e.form.bigNum=""+e.form.bigNum,e.form.startTime=e.formatDate(new Date(t.data.data.startTime),"yyyy-MM-dd hh:mm:ss"),e.form.endTime=e.formatDate(new Date(t.data.data.endTime),"yyyy-MM-dd hh:mm:ss"),e.selectedList=e.form.companyUserList):e.$Message.warning(t.data.retMsg)}).catch(function(e){})},save:function(){var e=this;if(3===this.form.type&&0===this.form.object&&0===this.selectedList.length)return void this.$Message.warning("请选择加权红包发放的会员！");this.form.companyUserList=[],2===this.form.actiMainID&&0===this.form.object&&this.selectedList.forEach(function(t){e.form.companyUserList.push({comUserId:t.userId,userName:t.userName,phone:t.userPhone})}),this.$refs.form.validate(function(t){if(t){if(3!==e.form.type&&e.form.startTime.valueOf()>=e.form.endTime.valueOf())return void e.$Message.warning("结束时间必须大于开始时间！");if(2===e.form.type){if(+e.form.bigMoney>+e.form.totalMoney)return void e.$Message.warning("大红包金额不能大于红包总额！");if(+e.form.bigNum>+e.form.totalNum)return void e.$Message.warning("大红包个数不能大于红包个数！");if(e.form.bigMoney*e.form.bigNum>+e.form.totalMoney)return void e.$Message.warning("大红包总额不能大于红包总额！")}e.$route.query.id?e.edit():e.create()}})},create:function(){var e=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/activity/create",method:"post",data:this.form}).then(function(t){0===t.data.retCode?(e.$Message.success(t.data.retMsg||"新增成功！"),e.$router.push({name:"activityList"})):e.$Message.warning(t.data.retMsg||"新增失败！")}).catch(function(e){})},edit:function(){var e=this;this.form.id=this.$route.query.id,this.$http({url:this.serviceurl+"/weteam-service/mgt/activity/edit",method:"post",data:this.form}).then(function(t){0===t.data.retCode?(e.$Message.success(t.data.retMsg||"保存成功！"),e.$router.push({name:"activityList"})):e.$Message.warning(t.data.retMsg||"保存失败！")}).catch(function(e){})},actiMainIDChange:function(e){this.formKey+=1,this.$refs.form.resetFields(),this.form.object=1,this.form.maxNum="",1===e&&(this.form.type=1),2===e&&(this.form.type=3)},typeChange:function(e){this.form.totalMoney="",this.form.totalNum="",this.form.bigMoney="",this.form.bigNum="",this.form.probability="",this.form.maxNum=""},grantChange:function(e){this.selectedList=[],this.peopleNum=this.selectedList.length||0},other:function(){this.modalShow=!0},delItem:function(e){this.selectedList.splice(e,1),this.peopleNum=this.selectedList.length||0},getMemberList:function(e){this.selectedList=e,this.peopleNum=this.selectedList.length||0},toFixed2:function(e){return Math.floor(100*e)/100}}}},411:function(e,t,a){var r=a(412);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(14)("5e216e19",r,!1,{})},412:function(e,t,a){t=e.exports=a(13)(!1),t.push([e.i,"\n.selected-item[data-v-df24bfe6] {\n  margin: 10px;\n  position: relative;\n  display: inline-block;\n}\n.selected-item .del-item[data-v-df24bfe6] {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  z-index: 99;\n  font-size: 20px;\n  cursor: pointer;\n}\n",""])},413:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-body"},[a("Form",{key:e.formKey,ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":120}},[a("FormItem",{attrs:{label:"活动类型："}},[a("RadioGroup",{on:{"on-change":e.actiMainIDChange},model:{value:e.form.actiMainID,callback:function(t){e.$set(e.form,"actiMainID",t)},expression:"form.actiMainID"}},[a("Radio",{attrs:{label:1,disabled:!!e.$route.query.id}},[e._v("红包雨")]),e._v(" "),a("Radio",{attrs:{label:2,disabled:!!e.$route.query.id}},[e._v("加权红包")])],1)],1),e._v(" "),a("FormItem",{attrs:{label:"活动名称：",prop:"actiName"}},[a("Input",{staticClass:"cc-w-300",attrs:{placeholder:"20字以内",disabled:!(!e.$route.query.id||3!==e.form.type)},model:{value:e.form.actiName,callback:function(t){e.$set(e.form,"actiName",t)},expression:"form.actiName"}})],1),e._v(" "),a("FormItem",{attrs:{label:"活动描述：",prop:"remark"}},[a("Input",{staticClass:"cc-w-300",attrs:{type:"textarea",placeholder:"50字以内",disabled:!(!e.$route.query.id||3!==e.form.type)},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),e._v(" "),1===e.form.actiMainID?[a("FormItem",{attrs:{label:"开始时间：",prop:"startTime"}},[a("DatePicker",{staticClass:"cc-w-300",attrs:{format:"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择开始时间",options:e.startTimeOptions},on:{"on-change":e.startTimeChange},model:{value:e.form.startTime,callback:function(t){e.$set(e.form,"startTime",t)},expression:"form.startTime"}})],1),e._v(" "),a("FormItem",{attrs:{label:"结束时间：",prop:"endTime"}},[a("DatePicker",{staticClass:"cc-w-300",attrs:{format:"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择结束时间",options:e.endTimeOptions},on:{"on-change":e.endTimeChange},model:{value:e.form.endTime,callback:function(t){e.$set(e.form,"endTime",t)},expression:"form.endTime"}})],1),e._v(" "),a("FormItem",{attrs:{label:"持续时间：",prop:"continueTime"}},[a("Input",{staticClass:"cc-w-300",attrs:{placeholder:"例如：20S，输入20"},model:{value:e.form.continueTime,callback:function(t){e.$set(e.form,"continueTime",t)},expression:"form.continueTime"}})],1),e._v(" "),a("FormItem",{attrs:{label:"红包类型："}},[a("RadioGroup",{on:{"on-change":e.typeChange},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("Radio",{attrs:{label:1,disabled:!!e.$route.query.id}},[e._v("普通红包")]),e._v(" "),a("Radio",{attrs:{label:2,disabled:!!e.$route.query.id}},[e._v("随机红包")])],1)],1),e._v(" "),a("FormItem",{attrs:{label:"红包总额：",prop:"totalMoney"}},[a("Input",{staticClass:"cc-w-300",attrs:{placeholder:"输入红包总额：例如：10000"},model:{value:e.form.totalMoney,callback:function(t){e.$set(e.form,"totalMoney",t)},expression:"form.totalMoney"}})],1),e._v(" "),a("FormItem",{attrs:{label:"红包个数：",prop:"totalNum"}},[a("Input",{staticClass:"cc-w-300",attrs:{placeholder:"输入红包个数，例如：200"},model:{value:e.form.totalNum,callback:function(t){e.$set(e.form,"totalNum",t)},expression:"form.totalNum"}}),e._v(" "),1===e.form.type?a("span",[e._v("统计：每个红包"+e._s(e.form.totalMoney&&e.form.totalNum?e.toFixed2(e.form.totalMoney/e.form.totalNum):0))]):e._e(),e._v(" "),2===e.form.type?a("span",[e._v("红包为大小随机")]):e._e()],1),e._v(" "),2===e.form.type?[a("FormItem",{attrs:{label:"大红包金额：",prop:"bigMoney"}},[a("Input",{staticClass:"cc-w-300",attrs:{placeholder:"红包最大，例如：188"},model:{value:e.form.bigMoney,callback:function(t){e.$set(e.form,"bigMoney",t)},expression:"form.bigMoney"}})],1),e._v(" "),a("FormItem",{attrs:{label:"大红包个数：",prop:"bigNum"}},[a("Input",{staticClass:"cc-w-300",attrs:{placeholder:"红包个数，例如：10"},model:{value:e.form.bigNum,callback:function(t){e.$set(e.form,"bigNum",t)},expression:"form.bigNum"}}),e._v(" "),a("span",[e._v("统计：大红包总额"+e._s(e.form.bigMoney&&e.form.bigNum?e.toFixed2(e.form.bigMoney*e.form.bigNum):0))])],1)]:e._e(),e._v(" "),a("FormItem",{attrs:{label:"中奖概率：",prop:"probability"}},[a("Input",{staticClass:"cc-w-300",attrs:{placeholder:"输入中奖概率，例如：50"},model:{value:e.form.probability,callback:function(t){e.$set(e.form,"probability",t)},expression:"form.probability"}}),e._v("%\n      ")],1),e._v(" "),a("FormItem",{attrs:{label:"最多领取数：",prop:"maxNum"}},[a("Input",{staticClass:"cc-w-300",attrs:{placeholder:"不填写，默认无限次"},model:{value:e.form.maxNum,callback:function(t){e.$set(e.form,"maxNum",t)},expression:"form.maxNum"}}),e._v(" "),a("span",[e._v("每个会员最多领取次数")])],1)]:e._e(),e._v(" "),2===e.form.actiMainID?[a("FormItem",{attrs:{label:"发放对象："}},[a("RadioGroup",{on:{"on-change":e.grantChange},model:{value:e.form.object,callback:function(t){e.$set(e.form,"object",t)},expression:"form.object"}},[a("Radio",{attrs:{label:1,disabled:!!e.$route.query.id}},[e._v("全部")]),e._v(" "),a("Radio",{attrs:{label:0,disabled:!!e.$route.query.id},nativeOn:{click:function(t){return e.other(t)}}},[e._v("选择其他")])],1),e._v(" "),a("div",{staticClass:"cc-m-t-20"},e._l(e.selectedList,function(t,r){return a("div",{key:r,staticClass:"selected-item"},[a("Icon",{staticClass:"del-item",attrs:{type:"close-circled"},nativeOn:{click:function(t){e.delItem(r)}}}),e._v(" "),a("Input",{staticClass:"cc-w-150",attrs:{placeholder:"",readonly:""},model:{value:t.userName,callback:function(a){e.$set(t,"userName",a)},expression:"item.userName"}})],1)}))],1),e._v(" "),a("FormItem",{attrs:{label:"单个红包：",prop:"singleMoney"}},[a("Input",{staticClass:"cc-w-300",attrs:{placeholder:"单个红包金额，例如：50",disabled:!!e.$route.query.id},model:{value:e.form.singleMoney,callback:function(t){e.$set(e.form,"singleMoney",t)},expression:"form.singleMoney"}}),e._v(" "),a("span",[e._v("累计："+e._s(e.toFixed2(0===e.form.object?e.peopleNum*e.form.singleMoney:e.allPeopleNum*e.form.singleMoney)||0))])],1)]:e._e(),e._v(" "),a("FormItem",[a("router-link",{attrs:{to:{name:"activityList"}}},[a("Button",[e._v("取消")])],1),e._v(" "),a("Button",{attrs:{type:"primary",disabled:!(!e.$route.query.id||3!==e.form.type)},on:{click:e.save}},[e._v("发布")])],1)],2),e._v(" "),a("Modal",{attrs:{title:" "},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[a("searchUser",{key:e.modalShow,ref:"searchUser",attrs:{checkedData:e.selectedList,url:"mgt/user/org/list"},on:{val:e.getMemberList}}),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"})],1)],1)},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};t.default=i},99:function(e,t,a){"use strict";function r(e){c||a(411)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(321),i=a.n(o);for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);var n=a(413),l=a.n(n),c=!1,m=a(6),u=r,d=m(i.a,l.a,!1,u,"data-v-df24bfe6",null);d.options.__file="src/views/activityManagement/addActivity.vue",t.default=d.exports}});