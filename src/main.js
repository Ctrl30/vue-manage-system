import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";

// 全局配置
import "element-ui/lib/theme-chalk/index.css";
import "./assets/scss/reset.scss";
import http from "./api/config";
import "./mock";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$http = http;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
