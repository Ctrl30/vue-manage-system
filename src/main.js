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
// 路由拦截
// router.beforeEach((to, from, next) => {
//   // 防止刷新后vuex里丢失token
//   store.commit("getToken");
//   // 防止刷新后vuex里丢失标签列表tagList
//   store.commit("getMenu");
//   let token = store.state.user.token;
//   console.log("toooooo", to);
//   if (!token && to.name !== "login") {
//     console.log("loginnnn");
//     // next({ name: "login" });
//     next({ name: "login" });
//   } else {
//     console.log("aaaaaaaa");
//     next();
//   }
// });
router.beforeEach((to, from, next) => {
  // 防止刷新后vuex里丢失token
  store.commit("getToken");
  // 防止刷新后vuex里丢失标签列表tagList
  store.commit("getMenu");
  let token = store.state.user.token;
  console.log("token", token);
  // 过滤登录页，防止死循环
  if (!token && to.name !== "login") {
    console.log("aaa");
    next({ name: "login" });
  } else {
    console.log("bbbbbb");
    next();
  }
});
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    //刷新的时候动态添加路由
    this.$store.commit("addMenu", router);
  }
}).$mount("#app");
