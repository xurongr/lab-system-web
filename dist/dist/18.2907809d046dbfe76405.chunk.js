webpackJsonp([18],{250:function(t,e,a){"use strict";function n(t){u||a(454)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(346),i=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,function(){return r[t]})}(o);var s=a(460),c=a.n(s),u=!1,l=a(6),d=n,f=l(i.a,c.a,!1,d,"data-v-83880524",null);f.options.__file="src/views/communicationManagement/telephoneBill/index.vue",e.default=f.exports},346:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=a(456),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={data:function(){var t=this;return{totalBalance:0,query:{pageNo:0,pageSize:10},total:0,current:1,table:[{title:"序号",type:"index",width:100,align:"center"},{title:"购买时间",key:"purchaseTime"},{title:"总面额",key:"totalDenomination"},{title:"总售价",key:"totalPrice"},{title:"状态",key:"state",render:function(t,e){var a="";switch(e.row.state){case 0:a="未打款";break;case 1:a="待发货";break;case 2:a="已发货"}return t("p",a)}},{title:"操作",key:"action",width:300,align:"center",render:function(e,a){return e("div",[e("Button",{style:{marginRight:"5px",display:0==a.row.state?"inline-block":"none"},on:{click:function(){t.confirmOrder(a.row.id)}}},"确认打款"),e("Button",{style:{marginRight:"5px"},on:{click:function(){t.$router.push({name:"rechargeDetail",query:{purchaseId:a.row.id}})}}},"订单详情"),e("Button",{style:{marginRight:"5px"},on:{click:function(){t.$Modal.confirm({title:"确认删除",content:"确认删除？",onOk:function(){t.deleteOrder(a.row.id)}})}}},"删除")])}}],tableData:[]}},created:function(){this.getCompanyPurchaseList(),this.getTotalBalance()},methods:(n={getCompanyPurchaseList:function(){var t=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/listCompanyPurchase",method:"get",params:this.query}).then(function(e){0===e.data.retCode?(t.tableData=e.data.data.data,t.total=parseInt(e.data.data.total)):t.$Message.warning(e.data.retMsg)}).catch(function(t){})},getTotalBalance:function(){var t=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/getTotalBalance",method:"get"}).then(function(e){0===e.data.retCode?t.totalBalance=e.data.data.totalBalance:t.$Message.warning(e.data.retMsg)}).catch(function(t){})},confirmOrder:function(t){var e=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/confirmOrder",method:"get",params:{orderId:t}}).then(function(t){0===t.data.retCode?(e.getCompanyPurchaseList(),e.$Message.warning(t.data.retMsg||"操作成功!")):e.$Message.warning(t.data.retMsg||"操作失败!")}).catch(function(t){})},deleteOrder:function(t){var e=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/deleteOrder",method:"get",params:{orderId:t}}).then(function(t){0===t.data.retCode?(e.getCompanyPurchaseList(),e.$Message.warning(t.data.retMsg||"删除成功!")):e.$Message.warning(t.data.retMsg||"删除失败!")}).catch(function(t){})}},(0,i.default)(n,"getTotalBalance",function(){var t=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/getTotalBalance",method:"get"}).then(function(e){0===e.data.retCode?t.totalBalance=e.data.data.totalBalance:t.$Message.warning(e.data.retMsg)}).catch(function(t){})}),(0,i.default)(n,"pageChange",function(t){this.query.pageNo=t-1,this.getCompanyPurchaseList()}),n)}},454:function(t,e,a){var n=a(455);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(14)("21043e20",n,!1,{})},455:function(t,e,a){e=t.exports=a(13)(!1),e.push([t.i,"\n.amount[data-v-83880524] {\n  overflow: hidden;\n  text-align: center;\n}\n.amount .amount-item[data-v-83880524] {\n  float: left;\n  width: 70%;\n}\n.amount .amount-item b[data-v-83880524] {\n  font-size: 30px;\n}\n.amount .btn-wrap[data-v-83880524] {\n  padding-top: 20px;\n}\n",""])},456:function(t,e,a){"use strict";e.__esModule=!0;var n=a(457),r=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t,e,a){return e in t?(0,r.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},457:function(t,e,a){t.exports={default:a(458),__esModule:!0}},458:function(t,e,a){a(459);var n=a(2).Object;t.exports=function(t,e,a){return n.defineProperty(t,e,a)}},459:function(t,e,a){var n=a(7);n(n.S+n.F*!a(5),"Object",{defineProperty:a(3).f})},460:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-body"},[a("Card",{attrs:{"dis-hover":!0}},[a("Row",[a("Col",{attrs:{span:"8"}},[a("div",{staticClass:"amount"},[a("div",{staticClass:"amount-item"},[a("div",{staticClass:"price"},[a("b",[t._v(t._s(t.totalBalance))]),t._v(" 元\n            ")]),t._v(" "),a("p",[t._v("账户余额")])]),t._v(" "),a("div",{staticClass:"btn-wrap"},[a("router-link",{attrs:{to:{name:"buyRechargeCard"}}},[a("Button",{attrs:{type:"primary"}},[t._v("购买")])],1),t._v(" "),a("router-link",{attrs:{to:{name:"telephoneDetails"}}},[a("Button",{attrs:{type:"primary"}},[t._v("充值明细")])],1)],1)])]),t._v(" "),a("Col",{attrs:{span:"10",offset:"1"}},[a("div",{staticClass:"tips"},[a("h5",[t._v("温馨提示：")]),t._v(" "),a("p",[t._v("1、账户余额：所有未使用充值卡，面值数总和；")]),t._v(" "),a("p",[t._v("2、购买：选择各种面额的充值卡，进行充值，充值收款账户（银行卡：中国民生银行福州闽都支行6226221580468475 沈洋 支付宝：13506975235 沈洋）；")]),t._v(" "),a("p",[t._v("3、购买记录：查看购买充值卡明细及购买成功情况，已打款请在订单上，点击“确定打款”，以便及时发放充值卡")])])])],1)],1),t._v(" "),a("h2",{staticClass:"cc-m-t-20"},[t._v("购买明细")]),t._v(" "),a("Table",{staticClass:"cc-m-t-20",attrs:{border:"",columns:t.table,data:t.tableData}}),t._v(" "),a("Page",{staticClass:"cc-m-t-20",attrs:{total:t.total,current:t.current},on:{"update:current":function(e){t.current=e},"on-change":t.pageChange}})],1)},r=[];n._withStripped=!0;var i={render:n,staticRenderFns:r};e.default=i}});