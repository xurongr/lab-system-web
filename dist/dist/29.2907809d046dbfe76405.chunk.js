webpackJsonp([29],{231:function(t,e,a){"use strict";function n(t){u||a(427)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(327),i=a.n(r);for(var c in r)"default"!==c&&function(t){a.d(e,t,function(){return r[t]})}(c);var s=a(429),o=a.n(s),u=!1,l=a(6),d=n,f=l(i.a,o.a,!1,d,"data-v-05d6f9ec",null);f.options.__file="src/views/communicationManagement/telephoneBill/rechargeDetail.vue",e.default=f.exports},327:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{query:{pageNo:0,pageNumber:10,purchaseId:this.$route.query.purchaseId},total:0,current:1,table:[{title:"序号",type:"index",width:100,align:"center"},{title:"购买时间",key:"createTime"},{title:"套餐面额",key:"denomination"},{title:"购买数量",key:"num"},{title:"套餐价格",key:"price"}],tableData:[]}},created:function(){this.getPageOrderDeatilsDeatils()},methods:{getPageOrderDeatilsDeatils:function(){var t=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/pageOrderDeatilsDeatils",method:"get",params:this.query}).then(function(e){0===e.data.retCode?(t.tableData=e.data.data.data,t.total=parseInt(e.data.data.total)):t.$Message.warning(e.data.retMsg)}).catch(function(t){})},pageChange:function(t){this.query.pageNo=t-1,this.getPageOrderDeatilsDeatils()}}}},427:function(t,e,a){var n=a(428);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(14)("81eb96cc",n,!1,{})},428:function(t,e,a){e=t.exports=a(13)(!1),e.push([t.i,"\n.amount[data-v-05d6f9ec] {\n  overflow: hidden;\n  text-align: center;\n}\n.amount .amount-item[data-v-05d6f9ec] {\n  float: left;\n  width: 70%;\n}\n.amount .amount-item b[data-v-05d6f9ec] {\n  font-size: 30px;\n}\n.amount .btn-wrap[data-v-05d6f9ec] {\n  padding-top: 20px;\n}\n",""])},429:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-body"},[a("h2",{staticClass:"cc-m-t-20"},[t._v("订单详情")]),t._v(" "),a("Table",{staticClass:"cc-m-t-20",attrs:{border:"",columns:t.table,data:t.tableData}}),t._v(" "),a("Page",{staticClass:"cc-m-t-20",attrs:{total:t.total,current:t.current},on:{"update:current":function(e){t.current=e},"on-change":t.pageChange}})],1)},r=[];n._withStripped=!0;var i={render:n,staticRenderFns:r};e.default=i}});