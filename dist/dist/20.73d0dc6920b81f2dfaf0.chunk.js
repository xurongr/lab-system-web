webpackJsonp([20],{237:function(e,t,a){"use strict";function n(e){o||a(348)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(285),s=a.n(l);for(var i in l)"default"!==i&&function(e){a.d(t,e,function(){return l[e]})}(i);var r=a(350),c=a.n(r),o=!1,u=a(9),v=n,d=u(s.a,c.a,!1,v,"data-v-ed48554c",null);d.options.__file="src/views/memberManagement/index.vue",t.default=d.exports},285:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{current:1,pageNo:0,total:0,userList:[],pageNo1:0,keyword:"",phone:"",shopName:"",level:-1,levelList:[{value:-1,label:"全部"}],state:-1,stateList:[{value:-1,label:"全部"},{value:1,label:"启用"},{value:4,label:"禁用"}],start:1,levelSet:!1,userId:null,levelId:-1,parentId:null,table:[{title:"序号",type:"index",align:"center",width:60},{title:"会员名称",align:"center",key:"nickName"},{title:"手机号码",align:"center",key:"phone"},{title:"店铺名称",align:"center",key:"shopName"},{title:"会员等级",align:"center",key:"levelName"},{title:"复购金额30%",align:"center",key:"repeatPurchase"},{title:"可提现金额70%",align:"center",key:"withdrawable"},{title:"性别",align:"center",key:"gender",width:80,render:function(e,t){return e("p",0===t.row.gender?"未知":1===t.row.gender?"男":"女")}},{title:"生日",align:"center",key:"birth"},{title:"状态",align:"center",key:"status",width:100,render:function(e,t){return e("div",[e("span",{style:{color:4===t.row.status?"red":"444"}},0===t.row.status?"未使用":1===t.row.status?"启动":2===t.row.status?"挂失":3===t.row.status?"注销":4===t.row.status?"禁用":"删除")])}},{title:"创建时间",align:"center",key:"createTime"},{title:"最后一次登录时间",align:"center",key:"lastLoginTime"}]}},created:function(){this.getLevelList(),this.getUserList()},methods:{isLevelSet:function(){null===this.userId?this.$Message.warning("请选择用户！"):this.levelSet=!0},changePage:function(e){this.pageNo=e-1,this.getUserList()},searchMem:function(){this.pageNo=0,this.getUserList()},getUserList:function(){var e=this,t=this.serviceurl+"/backstage/userInfo/pageUser",a=void 0,n=void 0;a=-1===e.level?"":e.level,n=-1===e.state?"":e.state;var l={keyword:e.keyword,phone:e.phone,shopName:e.shopName,levelId:a,status:n,pageNo:e.pageNo,pageSize:10},s=null;e.$http(t,l,s,"get").then(function(t){s=t.data,0===s.retCode?(e.userList=s.data.data,e.total=parseInt(s.data.total)):e.$Message.warning(s.retMsg)}).catch(function(e){})},getLevelList:function(){var e=this,t=this.serviceurl+"/backstage/level/pageLevelManage",a={pageNo:e.pageNo1,pageSize:10},n=null,l=[];e.$http(t,a,n,"get").then(function(t){n=t.data,0===n.retCode?(l=l.concat(n.data.data),l.length<n.data.retCode?(e.pageNo1++,e.getLevelList()):(l.map(function(t){e.levelList.push({value:t.id,label:t.levelName})}),l=[])):e.$Message.warning(n.retMsg)}).catch(function(t){e.$Message.error("请求错误")})},choiceUser:function(e,t){this.userId=parseInt(e.id),this.levelId=e.levelId,this.parentId=e.recommenderId,this.start=e.status},levelSetBtn:function(){var e=this,t=e.serviceurl+"/backstage/userInfo/setUserLevel",a=void 0;a=null===e.parentId||"undefined"===e.parentId||""===e.parentId?{userId:e.userId,levelId:e.levelId}:{userId:e.userId,levelId:e.levelId,parentId:e.parentId},e.$http(t,a,"","get").then(function(t){0===t.data.retCode?(e.$Message.success("用户等级修改成功！"),e.levelSet=!1,e.userId=null,e.getUserList()):e.$Message.warning(t.data.retMsg)}).catch(function(t){e.$Message.error("请求错误")})},statusChange:function(e){if(null===this.userId)this.$Message.warning("请选择用户！");else{var t=this,a=t.serviceurl+"/backstage/userInfo/mdifyUserStatus",n={userId:t.userId,status:e};t.$http(a,n,"","get").then(function(e){0===e.data.retCode?(t.$Message.success("用户状态修改成功！"),1===t.start?t.start=4:t.start=1,t.userId=null,t.getUserList()):t.$Message.warning(e.data.retMsg)}).catch(function(e){t.$Message.error("请求错误")})}}}}},348:function(e,t,a){var n=a(349);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(16)("66a4156a",n,!1,{})},349:function(e,t,a){t=e.exports=a(15)(!1),t.push([e.i,"\n.level-setting[data-v-ed48554c] {\n  font-size: 14px;\n}\n.level-setting p[data-v-ed48554c] {\n  padding-top: 10px;\n}\n.level-setting p[data-v-ed48554c]:nth-child(1) {\n  text-align: center;\n  padding-top: 0;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.level-setting p[data-v-ed48554c]:nth-child(3) {\n  color: red;\n  font-size: 12px;\n  text-indent: 6em;\n}\n.level-setting .level-btn[data-v-ed48554c] {\n  text-align: center;\n  margin-top: 20px;\n}\n",""])},350:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"cc-m-b-10 member-list-search"},[a("div",{staticClass:"m-search-top"},[a("div",{staticClass:"m-search-top-left"},[a("p",[e._v("会员名称   "),a("Input",{staticStyle:{width:"110px"},attrs:{placeholder:"关键字模糊搜索"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),e._v(" "),a("p",[e._v("手机号码   "),a("Input",{staticStyle:{width:"110px"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),e._v(" "),a("p",[e._v("店铺名称   "),a("Input",{staticStyle:{width:"110px"},model:{value:e.shopName,callback:function(t){e.shopName=t},expression:"shopName"}})],1),e._v(" "),a("p",[e._v("\n                    等级   \n                    "),a("Select",{staticStyle:{width:"130px"},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}},e._l(e.levelList,function(t){return a("Option",{key:t.value,attrs:{placeholder:"全部",value:t.value}},[e._v(e._s(t.label))])}),1)],1),e._v(" "),a("p",[e._v("\n                    状态   \n                    "),a("Select",{staticStyle:{width:"130px"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},e._l(e.stateList,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}),1)],1)]),e._v(" "),a("p",{staticStyle:{"font-size":"18px","font-weight":"600","line-height":"32px"}},[e._v("会员总数："+e._s(e.total))])]),e._v(" "),a("div",{staticClass:"m-search-btn"},[a("Button",{staticClass:"btn btn-blue",on:{click:e.searchMem}},[e._v("查询")]),e._v(" "),a("Button",{staticClass:"btn btn-blue",on:{click:e.isLevelSet}},[e._v("等级设置")]),e._v(" "),4===e.start?a("Button",{staticClass:"btn btn-blue",on:{click:function(t){return e.statusChange(1)}}},[e._v("启用")]):e._e(),e._v(" "),1===e.start?a("Button",{staticClass:"btn btn-blue",on:{click:function(t){return e.statusChange(4)}}},[e._v("禁用")]):e._e(),e._v(" "),a("Button",{staticClass:"btn btn-blue",on:{click:function(t){return e.statusChange(5)}}},[e._v("删除")])],1)]),e._v(" "),a("div",{staticClass:"main-body"},[a("Table",{staticClass:"cc-m-t-20",attrs:{border:"",columns:e.table,data:e.userList,"highlight-row":!0},on:{"on-row-click":e.choiceUser}}),e._v(" "),a("div",{staticClass:"page"},[a("Page",{key:e.total,staticClass:"cc-m-t-20",attrs:{total:e.total,current:e.current},on:{"on-change":e.changePage}})],1)],1),e._v(" "),a("Modal",{attrs:{"footer-hide":!0,styles:{top:"30%"}},model:{value:e.levelSet,callback:function(t){e.levelSet=t},expression:"levelSet"}},[a("div",{staticClass:"level-setting"},[a("p",[e._v("等级设置")]),e._v(" "),a("p",[a("span",{staticStyle:{color:"#fff"}},[e._v("*")]),e._v("父级账户  \n                "),a("Select",{staticStyle:{width:"75%"},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}},e._l(e.levelList,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}),1)],1),e._v(" "),a("p",[e._v("父级账户设置，没有则不设置")]),e._v(" "),a("p",[a("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v("账户等级  \n                "),a("Select",{staticStyle:{width:"75%"},model:{value:e.levelId,callback:function(t){e.levelId=t},expression:"levelId"}},e._l(e.levelList,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}),1)],1),e._v(" "),a("div",{staticClass:"level-btn"},[a("Button",{staticClass:"btn btn-blue",on:{click:e.levelSetBtn}},[e._v("提交")])],1)])])],1)},l=[];n._withStripped=!0;var s={render:n,staticRenderFns:l};t.default=s}});