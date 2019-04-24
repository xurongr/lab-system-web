webpackJsonp([19],{243:function(a,t,e){"use strict";function i(a){m||e(362)}Object.defineProperty(t,"__esModule",{value:!0});var n=e(289),o=e.n(n);for(var s in n)"default"!==s&&function(a){e.d(t,a,function(){return n[a]})}(s);var d=e(364),r=e.n(d),m=!1,l=e(9),v=i,c=l(o.a,r.a,!1,v,"data-v-b19b7af6",null);c.options.__file="src/views/financialManagement/index.vue",t.default=c.exports},289:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{pageNo:0,shopId:1,startTime:"",endTime:"",shopList:[],shopSeclect:[],moneyInfo:[],tableData:[],dataSummaryDetailDto:[],dataSummaryDetailDtos:[],orderType:1,table:[{title:"序号",type:"index",align:"center",width:60},{title:"时间",align:"center",key:"date"},{title:"总金额",align:"center",key:"totalMoney"},{title:"微信收入",align:"center",key:"wxIncome"},{title:"收益复购",align:"center",key:"repeatIncome"},{title:"订单量",align:"center",key:"orderCount"},{title:"直推奖励",align:"center",key:"directPush"},{title:"间推奖励",align:"center",key:"indirectPush"},{title:"市场补贴",align:"center",key:"marketSubsidy"},{title:"公排奖励",align:"center",key:"publicRanking"},{title:"门店补贴",align:"center",key:"shopSubsidy"},{title:"剩余利润",align:"center",key:"profit"}]}},created:function(){this.getShopList(),this.getDataSum(),this.getSumByData()},methods:{getShopList:function(){var a=this,t=a.serviceurl+"/backstage/shop/pageShop",e={pageNo:a.pageNo,pageSize:10};a.$http(t,e,"","get").then(function(t){if(0===t.data.retCode){a.shopList=a.shopList.concat(t.data.data.data);var e=parseInt(t.data.data.total);a.shopList.length<e&&(a.pageNo++,a.getShopList()),a.shopList.map(function(t){a.shopSeclect.push({value:t.id,label:t.shopName})})}else a.$Message.warning(t.data.retMsg)}).catch(function(t){a.$Message.error("请求错误")})},changeTime:function(a){this.startTime=a[0],this.endTime=a[1],""===a[0]&&(this.startTime=""),""===a[1]&&(this.endTime="")},searchFinan:function(){this.pageNo=0,this.getDataSum(),this.getSumByData()},getDataSum:function(){var a=this,t=a.serviceurl+"/backstage/financial/getDataSummary",e={shopId:a.shopId,startTime:a.startTime,endTime:a.endTime},i=null;a.$http(t,e,i,"get").then(function(t){i=t.data,0===i.retCode?a.moneyInfo=i.data:a.$Message.warning(i.retMsg)}).catch(function(t){a.$Message.error("请求错误")})},changeTab:function(a){this.orderType=a+1,this.getSumByData()},getSumByData:function(){var a=this,t=a.serviceurl+"/backstage/financial/getDataSummaryByDate",e={shopId:a.shopId,orderType:a.orderType,startTime:a.startTime,endTime:a.endTime},i=null;a.$http(t,e,i,"get").then(function(t){i=t.data,0===i.retCode?(a.dataSummaryDetailDto=i.data.dataSummaryDetailDto,a.dataSummaryDetailDtos=i.data.dataSummaryDetailDtos):a.$Message.warning(i.retMsg)}).catch(function(t){a.$Message.error("请求错误")})}}}},362:function(a,t,e){var i=e(363);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);e(16)("0032843a",i,!1,{})},363:function(a,t,e){t=a.exports=e(15)(!1),t.push([a.i,"\n.financial-data[data-v-b19b7af6] .ivu-tabs-bar {\n  margin-bottom: 0;\n}\n.financial-data-top[data-v-b19b7af6] {\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 15px;\n}\n.financial-data-top p[data-v-b19b7af6] {\n  margin-right: 25px;\n}\n.financial-data-sum[data-v-b19b7af6] {\n  background-color: #cccccc99;\n  margin-bottom: 30px;\n  font-size: 16px;\n}\n.financial-data-sum-cont[data-v-b19b7af6] {\n  height: 100px;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: center;\n  width: 90%;\n  margin: 0 auto;\n}\n.financial-data-sum-cont .cont-total[data-v-b19b7af6] {\n  width: 25%;\n  padding-top: 20px;\n}\n.financial-data-sum-cont .cont-total p[data-v-b19b7af6] {\n  line-height: 30px;\n}\n.financial-data-sum-cont .cont-total span[data-v-b19b7af6] {\n  font-size: 20px;\n  letter-spacing: 1px;\n}\n.financial-data-sum-cont .cont-sum[data-v-b19b7af6] {\n  font-size: 18px;\n  font-weight: 600;\n}\n.financial-data-detail[data-v-b19b7af6] {\n  background-color: #cccccc99;\n  padding: 8px;\n  color: #000;\n}\n.financial-data-detail .detail[data-v-b19b7af6] {\n  display: -ms-flexbox;\n  display: flex;\n  text-align: center;\n  border: 1px solid #44444454;\n  background-color: #fff;\n  margin: 6px 0 10px;\n}\n.financial-data-detail .detail div[data-v-b19b7af6] {\n  width: 11.1111%;\n  padding: 12px;\n}\n.financial-data-detail .detail div p[data-v-b19b7af6] {\n  line-height: 50px;\n}\n",""])},364:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"main-body financial-data"},[e("div",{staticClass:"financial-data-top"},[e("p",[a._v("门店选择   \n            "),e("Select",{staticStyle:{width:"130px"},model:{value:a.shopId,callback:function(t){a.shopId=t},expression:"shopId"}},a._l(a.shopSeclect,function(t){return e("Option",{key:t.value,attrs:{value:t.value}},[a._v(a._s(t.label))])}),1)],1),a._v(" "),e("p",[a._v("时间   "),e("DatePicker",{staticStyle:{width:"150px",color:"#444"},attrs:{type:"datetimerange",placeholder:"选择时间段"},on:{"on-change":a.changeTime}})],1),a._v(" "),e("Button",{staticClass:"btn btn-b-hover",on:{click:a.searchFinan}},[a._v("查询")])],1),a._v(" "),e("div",{staticClass:"financial-data-sum"},[e("div",{staticClass:"financial-data-sum-cont"},[e("div",{staticClass:"cont-total cont-sum"},[e("p",[a._v("总金额")]),a._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:a.moneyInfo.totalMoney,expression:"moneyInfo.totalMoney"}]},[a._v(a._s(a.moneyInfo.totalMoney))]),a._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!a.moneyInfo.totalMoney,expression:"!moneyInfo.totalMoney"}]},[a._v("0")])]),a._v(" "),e("div",{staticClass:"cont-total"},[e("p",[a._v("充值金额")]),a._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:a.moneyInfo.rechargeMoney,expression:"moneyInfo.rechargeMoney"}]},[a._v(a._s(a.moneyInfo.rechargeMoney))]),a._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!a.moneyInfo.rechargeMoney,expression:"!moneyInfo.rechargeMoney"}]},[a._v("0")])]),a._v(" "),e("div",{staticClass:"cont-total"},[e("p",[a._v("消费金额")]),a._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:a.moneyInfo.consumeMoney,expression:"moneyInfo.consumeMoney"}]},[a._v(a._s(a.moneyInfo.consumeMoney))]),a._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!a.moneyInfo.consumeMoney,expression:"!moneyInfo.consumeMoney"}]},[a._v("0")])]),a._v(" "),e("div",{staticClass:"cont-total"},[e("p",[a._v("定制金额")]),a._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:a.moneyInfo.customizedMoney,expression:"moneyInfo.customizedMoney"}]},[a._v(a._s(a.moneyInfo.customizedMoney))]),a._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!a.moneyInfo.customizedMoney,expression:"!moneyInfo.customizedMoney"}]},[a._v("0")])])])]),a._v(" "),e("Tabs",{attrs:{type:"card"},on:{"on-click":a.changeTab}},[e("TabPane",{attrs:{label:"充值金额"}},[e("div",{staticClass:"financial-data-detail"},[e("p",[a._v("充值金额汇总及分配明细")]),a._v(" "),e("div",{staticClass:"detail"},[e("div",[e("p",[a._v("微信收入")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.wxIncome?a.dataSummaryDetailDto.wxIncome:0))])]),a._v(" "),e("div",[e("p",[a._v("收益复购")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.repeatIncome?a.dataSummaryDetailDto.repeatIncome:0))])]),a._v(" "),e("div",[e("p",[a._v("订单量")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.orderCount?a.dataSummaryDetailDto.orderCount:0))])]),a._v(" "),e("div",[e("p",[a._v("直推奖励")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.directPush?a.dataSummaryDetailDto.directPush:0))])]),a._v(" "),e("div",[e("p",[a._v("间推奖励")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.indirectPush?a.dataSummaryDetailDto.indirectPush:0))])]),a._v(" "),e("div",[e("p",[a._v("市场补贴")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.marketSubsidy?a.dataSummaryDetailDto.marketSubsidy:0))])]),a._v(" "),e("div",[e("p",[a._v("公排奖励")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.shopSubsidy?a.dataSummaryDetailDto.shopSubsidy:0))])]),a._v(" "),e("div",[e("p",[a._v("门店补贴")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.shopSubsidy?a.dataSummaryDetailDto.shopSubsidy:0))])]),a._v(" "),e("div",[e("p",[a._v("剩余利润")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.profit?a.dataSummaryDetailDto.profit:0))])])]),a._v(" "),e("p",[a._v("数据明细")]),a._v(" "),e("Table",{staticClass:"cc-m-t-10",attrs:{height:"280",border:"",columns:a.table,data:a.dataSummaryDetailDtos}})],1)]),a._v(" "),e("TabPane",{attrs:{label:"消费金额"}},[e("div",{staticClass:"financial-data-detail"},[e("p",[a._v("充值金额汇总及分配明细")]),a._v(" "),e("div",{staticClass:"detail"},[e("div",[e("p",[a._v("微信收入")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.wxIncome?a.dataSummaryDetailDto.wxIncome:0))])]),a._v(" "),e("div",[e("p",[a._v("收益复购")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.repeatIncome?a.dataSummaryDetailDto.repeatIncome:0))])]),a._v(" "),e("div",[e("p",[a._v("订单量")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.orderCount?a.dataSummaryDetailDto.orderCount:0))])]),a._v(" "),e("div",[e("p",[a._v("直推奖励")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.directPush?a.dataSummaryDetailDto.directPush:0))])]),a._v(" "),e("div",[e("p",[a._v("间推奖励")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.indirectPush?a.dataSummaryDetailDto.indirectPush:0))])]),a._v(" "),e("div",[e("p",[a._v("市场补贴")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.marketSubsidy?a.dataSummaryDetailDto.marketSubsidy:0))])]),a._v(" "),e("div",[e("p",[a._v("公排奖励")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.shopSubsidy?a.dataSummaryDetailDto.shopSubsidy:0))])]),a._v(" "),e("div",[e("p",[a._v("门店补贴")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.shopSubsidy?a.dataSummaryDetailDto.shopSubsidy:0))])]),a._v(" "),e("div",[e("p",[a._v("剩余利润")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.profit?a.dataSummaryDetailDto.profit:0))])])]),a._v(" "),e("p",[a._v("数据明细")]),a._v(" "),e("Table",{staticClass:"cc-m-t-10",attrs:{height:"280",border:"",columns:a.table,data:a.dataSummaryDetailDtos}})],1)]),a._v(" "),e("TabPane",{attrs:{label:"定制金额"}},[e("div",{staticClass:"financial-data-detail"},[e("p",[a._v("充值金额汇总及分配明细")]),a._v(" "),e("div",{staticClass:"detail"},[e("div",[e("p",[a._v("微信收入")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.wxIncome?a.dataSummaryDetailDto.wxIncome:0))])]),a._v(" "),e("div",[e("p",[a._v("收益复购")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.repeatIncome?a.dataSummaryDetailDto.repeatIncome:0))])]),a._v(" "),e("div",[e("p",[a._v("订单量")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.orderCount?a.dataSummaryDetailDto.orderCount:0))])]),a._v(" "),e("div",[e("p",[a._v("直推奖励")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.directPush?a.dataSummaryDetailDto.directPush:0))])]),a._v(" "),e("div",[e("p",[a._v("间推奖励")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.indirectPush?a.dataSummaryDetailDto.indirectPush:0))])]),a._v(" "),e("div",[e("p",[a._v("市场补贴")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.marketSubsidy?a.dataSummaryDetailDto.marketSubsidy:0))])]),a._v(" "),e("div",[e("p",[a._v("公排奖励")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.shopSubsidy?a.dataSummaryDetailDto.shopSubsidy:0))])]),a._v(" "),e("div",[e("p",[a._v("门店补贴")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.shopSubsidy?a.dataSummaryDetailDto.shopSubsidy:0))])]),a._v(" "),e("div",[e("p",[a._v("剩余利润")]),e("p",[a._v(a._s(a.dataSummaryDetailDto.profit?a.dataSummaryDetailDto.profit:0))])])]),a._v(" "),e("p",[a._v("数据明细")]),a._v(" "),e("Table",{staticClass:"cc-m-t-10",attrs:{height:"280",border:"",columns:a.table,data:a.dataSummaryDetailDtos}})],1)])],1)],1)},n=[];i._withStripped=!0;var o={render:i,staticRenderFns:n};t.default=o}});