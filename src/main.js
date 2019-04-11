import Vue from "vue";
import iView from "iview";
import { router } from "./router/index";
import { appRouter } from "./router/router";
import store from "./store";
import App from "./app.vue";
import "iview/dist/styles/iview.css";
import util from "./libs/util";
import config from "./utils/config";
import Cookies from "js-cookie";
import axios from "axios";
import { formatDate, timestamp } from "./utils/date.js";
import "@/styles/commoon.less";
import "@/styles/btn.less";
import { Store } from "vuex";
import "promise-polyfill";
import VueAMap from "vue-amap";
Vue.use(iView);

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "50aa0319de07a778b590c9fb3bb03ea1",
  plugin: ["AMap.ToolBar", "AMap.Geolocation"],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4"
});

if (Cookies.get("token") && Cookies.get("clientId")) {
  axios.defaults.headers.common["Authorization"] = Cookies.get("token");
  axios.defaults.headers.common["clientId"] = Cookies.get("clientId");
}

Vue.prototype.$http = axios;
Vue.prototype.Cookies = Cookies;
Vue.prototype.serviceurl = config.serviceurl;
Vue.prototype.formatDate = formatDate;
Vue.prototype.timestamp = timestamp;

new Vue({
  el: "#app",
  router: router,
  store: store,
  render: h => h(App),
  data: {
    currentPageName: ""
  },
  mounted() {
    this.currentPageName = this.$route.name;
    // 显示打开的页面的列表
    this.$store.commit("setOpenedList");
    this.$store.commit("initCachepage");
  },
  created() {
    // window.document.title = Cookies.get("name");
      window.document.title = '百草膳';
    let tagsList = [];
    appRouter.map(item => {
      if (item.children.length <= 1) {
        tagsList.push(item.children[0]);
      } else {
        tagsList.push(...item.children);
      }
    });
    this.$store.commit("setTagsList", tagsList);
  }
});
