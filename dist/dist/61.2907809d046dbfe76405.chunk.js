webpackJsonp([61],{249:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(345),s=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var i=a(453),c=a.n(i),u=a(6),l=u(s.a,c.a,!1,null,null,null);l.options.__file="src/views/IM/customerService/customerService.vue",e.default=l.exports},345:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){var t=this;return{query:{page:0,size:10,state:"",leaveName:"",str:""},total:0,current:1,table:[{title:"序号",type:"index",width:100,align:"center"},{title:"标题",key:"title"},{title:"内容",key:"content"},{title:"留言人",key:"leaveName"},{title:"联系方式",key:"leavePhone"},{title:"状态",key:"state",render:function(t,e){var a="";switch(e.row.state){case 0:a="未回复";break;case 1:a="已回复";break;case 2:a="后台删除";break;case 3:a="移动端删除"}return t("p",a)}},{title:"更新时间",key:"updateTime"},{title:"操作",key:"action",width:200,align:"center",render:function(e,a){return e("div",{style:{margin:"15px 0"}},[e("Badge",{props:{count:a.row.unreadNum,"overflow-count":999},style:{marginRight:"25px"}},[e("Button",{on:{click:function(){t.$router.push({name:"reply",query:{id:a.row.id}})}}},"回复")]),e("Button",{on:{click:function(){t.$Modal.confirm({title:"删除",content:"确认删除?",onOk:function(){t.del(a.row.id)}})}}},"删除")])}}],tableData:[]}},created:function(){this.getCusLeaveList()},methods:{getCusLeaveList:function(){var t=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/leave/getCusLeave",method:"get",params:this.query}).then(function(e){0===e.data.retCode?(t.tableData=e.data.data.data,t.total=parseInt(e.data.data.total)):t.$Message.warning(e.data.retMsg)}).catch(function(t){})},pageChange:function(t){this.query.page=t-1,this.getCusLeaveList()},statusChange:function(t){this.query.state=-1===t?"":t},search:function(){this.query.page=0,this.current=1,this.getCusLeaveList()},del:function(t){var e=this;this.$http({url:this.serviceurl+"/weteam-service//mgt/leave/deleteLeaveMessage",method:"get",params:{id:t}}).then(function(t){0===t.data.retCode?(e.getCusLeaveList(),e.$Message.success(t.data.retMsg||"操作成功！")):e.$Message.warning(t.data.retMsg||"操作失败！")}).catch(function(t){})}}}},453:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-body"},[a("Row",{attrs:{type:"flex",justify:"space-between"}},[a("Col",{attrs:{span:"4"}}),t._v(" "),a("Col",{staticClass:"cc-text-right",attrs:{span:"20"}},[t._v("\n          状态：\n          "),a("Select",{staticClass:"cc-w-100 cc-text-left",on:{"on-change":t.statusChange}},[a("Option",{attrs:{value:-1}},[t._v("全部")]),t._v(" "),a("Option",{attrs:{value:0}},[t._v("未回复")]),t._v(" "),a("Option",{attrs:{value:1}},[t._v("已回复")]),t._v(" "),a("Option",{attrs:{value:3}},[t._v("移动端删除")])],1),t._v("\n            \n          留言人：\n          "),a("Input",{staticClass:"cc-w-200",attrs:{placeholder:"输入留言人"},model:{value:t.query.leaveName,callback:function(e){t.$set(t.query,"leaveName",e)},expression:"query.leaveName"}}),t._v("\n            \n          关键字：\n          "),a("Input",{staticClass:"cc-w-200",attrs:{placeholder:"输入关键字搜索"},model:{value:t.query.str,callback:function(e){t.$set(t.query,"str",e)},expression:"query.str"}}),t._v("\n            \n          "),a("Button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("搜索")])],1)],1),t._v(" "),a("Table",{staticClass:"cc-m-t-20",attrs:{border:"",columns:t.table,data:t.tableData}}),t._v(" "),a("Page",{staticClass:"cc-m-t-20",attrs:{total:t.total,current:t.current},on:{"update:current":function(e){t.current=e},"on-change":t.pageChange}})],1)},s=[];n._withStripped=!0;var r={render:n,staticRenderFns:s};e.default=r}});