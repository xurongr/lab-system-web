webpackJsonp([40],{257:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(353),n=a.n(r);for(var s in r)"default"!==s&&function(t){a.d(e,t,function(){return r[t]})}(s);var i=a(467),o=a.n(i),c=a(6),u=c(n.a,o.a,!1,null,null,null);u.options.__file="src/views/shopManagement/sold.vue",e.default=u.exports},353:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){var t=this;return{query:{page:0,size:10,type:2,status:""},total:0,table:[{title:"订单号",key:"orderSn"},{title:"商品图片",key:"",width:220,render:function(t,e){return t("img",{attrs:{src:e.row.productImg},style:{width:"187.5px",height:"67.5px"}})}},{title:"商品名称",key:"productName"},{title:"价格",key:"salePrice"},{title:"买家",key:"userName"},{title:"时间",key:"",render:function(e,a){return e("p",t.formatDate(new Date(a.row.createTime),"yyyy-MM-dd hh:mm"))}},{title:"状态",key:"status",render:function(t,e){var a="";switch(e.row.status){case 1:a="未确认";break;case 2:a="已取消";break;case 3:a="已确认"}return t("p",{},a)}},{title:"操作",key:"action",width:400,align:"center",render:function(e,a){var r=[];switch(a.row.status){case 1:r=[e("Button",{style:{marginRight:"5px"},on:{click:function(){t.chgStatus(a.row.orderId,2)}}},"取消订单"),e("Button",{style:{marginRight:"5px"},on:{click:function(){t.chgStatus(a.row.orderId,3)}}},"确认")];break;case 2:case 3:r=[e("Button",{style:{marginRight:"5px"},on:{click:function(){t.$Modal.confirm({title:"确认删除",content:"是否确认删除订单？",onOk:function(){t.chgStatus(a.row.orderId,4)}})}}},"删除")]}return e("div",r)}}],tableData:[]}},created:function(){this.getOrderList()},methods:{getOrderList:function(){var t=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/order/my/page",method:"get",params:this.query}).then(function(e){0===e.data.retCode?(t.tableData=e.data.data.data,t.total=parseInt(e.data.data.total)):t.$Message.warning(e.data.retMsg)}).catch(function(t){})},pageChange:function(t){this.query.page=t-1,this.getOrderList()},statusChange:function(t){-1!==t?this.query.status=t:delete this.query.status,this.getOrderList()},chgStatus:function(t,e){var a=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/order/chgStatus",method:"get",params:{orderId:t,status:e}}).then(function(t){0===t.data.retCode?(a.getOrderList(),a.$Message.warning(t.data.retMsg||"操作成功！")):a.$Message.warning(t.data.retMsg||"操作失败！")}).catch(function(t){})}}}},467:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-body"},[a("h2",[t._v("我已卖出")]),t._v(" "),a("Menu",{attrs:{mode:"horizontal","active-name":-1},on:{"on-select":t.statusChange}},[a("MenuItem",{attrs:{name:-1}},[t._v("全部")]),t._v(" "),a("MenuItem",{attrs:{name:3}},[t._v("已确认")]),t._v(" "),a("MenuItem",{attrs:{name:1}},[t._v("未确认")])],1),t._v(" "),a("Table",{staticClass:"cc-m-t-20",attrs:{border:"",columns:t.table,data:t.tableData}}),t._v(" "),a("Page",{staticClass:"cc-m-t-20",attrs:{total:t.total},on:{"on-change":t.pageChange}})],1)},n=[];r._withStripped=!0;var s={render:r,staticRenderFns:n};e.default=s}});