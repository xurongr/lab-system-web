webpackJsonp([30],{228:function(t,n,e){"use strict";function i(t){l||e(418)}Object.defineProperty(n,"__esModule",{value:!0});var a=e(324),o=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);var r=e(420),c=e.n(r),l=!1,u=e(6),d=i,m=u(o.a,c.a,!1,d,"data-v-443763ce",null);m.options.__file="src/views/communicationManagement/telephoneBill/buyRechargeCard.vue",n.default=m.exports},324:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={computed:{buyList:function(){var t=this;return this.items.forEach(function(n,e){var i=parseInt(n.number)?parseInt(n.number):0;if(t.denominationObj[n.id]){var a=t.denominationObj[n.id],o=a.price,s=a.denomination;t.$set(t.items[e],"price",o),t.$set(t.items[e],"totalDenomination",s*i)}t.$set(t.items[e],"totalPrice",n.price*i)}),this.items},count:function(){var t=this;this.form=[];var n={totalDenomination:0,totalPrice:0};return this.buyList.forEach(function(e){t.form.push({id:+e.id,number:+e.number}),n.totalDenomination+=100*e.totalDenomination,n.totalPrice+=100*e.totalPrice}),n}},data:function(){return{loading:!1,denomination:"",denominationList:[],denominationObj:{},items:[{id:"",number:0}],form:[]}},created:function(){this.getDenominationList()},methods:{handleAdd:function(){this.items.push({id:this.denomination,number:0})},getDenominationList:function(){var t=this;this.$http({url:this.serviceurl+"/weteam-service/mgt/listAllDenomination",method:"get"}).then(function(n){0===n.data.retCode?(t.denominationList=n.data.data,t.items[0].id=t.denomination=t.denominationList[0]?t.denominationList[0].id:"",t.denominationList.forEach(function(n){var e={};e.price=n.price,e.denomination=n.denomination,t.denominationObj[n.id]=e})):t.$Message.warning(n.data.retMsg)}).catch(function(t){})},numberBlur:function(t,n){""===t&&(this.items[n].number=0)},numberKeyup:function(t,n){/^\d*$/.test(t)||(isNaN(parseInt(t))?this.items[n].number=0:this.items[n].number=Math.abs(parseInt(t)))},addCompanyAccount:function(){var t=this;if(this.loading=!0,this.form.filter(function(t){return 0==t.number}).length>0)return this.$Message.warning("购买数量不能为0"),void(this.loading=!1);this.$http({url:this.serviceurl+"/weteam-service/mgt/addCompanyAccount",method:"post",data:this.form}).then(function(n){0===n.data.retCode?(t.$Message.success("申购成功！"),t.$router.push({name:"telephoneBill"})):t.$Message.warning(n.data.retMsg),t.loading=!1}).catch(function(n){t.loading=!1})},cancel:function(){this.$router.push({name:"telephoneBill"})}}}},418:function(t,n,e){var i=e(419);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(14)("38db7e47",i,!1,{})},419:function(t,n,e){n=t.exports=e(13)(!1),n.push([t.i,"\n.item-list[data-v-443763ce] {\n  list-style: none;\n  margin-bottom: 20px;\n}\n.item-list .item[data-v-443763ce] {\n  line-height: 32px;\n  margin-bottom: 10px;\n}\n.census[data-v-443763ce] {\n  font-size: 14px;\n  line-height: 24px;\n}\n.census label[data-v-443763ce] {\n  width: 50px;\n  float: left;\n}\n.census ul[data-v-443763ce] {\n  list-style: none;\n  margin-left: 50px;\n}\n.census .price[data-v-443763ce] {\n  font-size: 20px;\n  color: red;\n}\n",""])},420:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main-body"},[e("ul",{staticClass:"item-list"},t._l(t.items,function(n,i){return e("li",{key:i,staticClass:"item"},[e("Row",[e("Col",{attrs:{span:"4"}},[e("span",{staticClass:"cc-float-l"},[t._v("话费面额选择:  ")]),t._v(" "),e("Select",{staticClass:"cc-w-150",model:{value:n.id,callback:function(e){t.$set(n,"id",e)},expression:"item.id"}},t._l(t.denominationList,function(n){return e("Option",{key:n.id,attrs:{value:n.id}},[t._v(t._s(n.denomination))])}))],1),t._v(" "),e("Col",{attrs:{span:"2"}},[t._v("\n          售价:\n          "),e("span",[t._v(t._s(n.price))])]),t._v(" "),e("Col",{attrs:{span:"4"}},[e("span",{staticClass:"cc-float-l"},[t._v("数量:  ")]),t._v(" "),e("Input",{staticClass:"cc-w-200",attrs:{type:"text",placeholder:""},on:{"on-blur":function(e){t.numberBlur(n.number,i)},"on-keyup":function(e){t.numberKeyup(n.number,i)}},model:{value:n.number,callback:function(e){t.$set(n,"number",e)},expression:"item.number"}})],1),t._v(" "),e("Col",{attrs:{span:"3"}},[t._v("\n          总面额:\n          "),e("span",[t._v(t._s(n.totalDenomination))])]),t._v(" "),e("Col",{attrs:{span:"3"}},[t._v("\n          总售价:\n          "),e("span",[t._v(t._s(n.totalPrice))])]),t._v(" "),e("Col",{attrs:{span:"2",offset:"1"}},[0===i?e("Button",{staticClass:"cc-w-100",attrs:{type:"primary",icon:"plus-round"},on:{click:t.handleAdd}}):t._e()],1)],1)],1)})),t._v(" "),e("div",{staticClass:"census"},[e("div",[e("label",[t._v("订单：")]),t._v(" "),e("ul",[e("li",[t._v("总面额："+t._s(t.count.totalDenomination/100))]),t._v(" "),e("li",[t._v("总售价："+t._s(t.count.totalPrice/100))])])]),t._v(" "),e("div",[e("label",[t._v("应付：")]),t._v(" "),e("div",{staticClass:"price"},[t._v("¥"+t._s(t.count.totalPrice/100))])])]),t._v(" "),e("div",{staticClass:"cc-text-center"},[e("Button",{attrs:{type:"ghost"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),e("Button",{attrs:{type:"primary",loading:t.loading},on:{click:t.addCompanyAccount}},[t._v("提交申购")])],1)])},a=[];i._withStripped=!0;var o={render:i,staticRenderFns:a};n.default=o}});