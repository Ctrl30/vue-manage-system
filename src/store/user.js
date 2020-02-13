import Cookie from "js-cookie";
export default {
  state: {
    token: ""
  },
  mutations: {
    //   设置token
    setToken(state, val) {
      state.token = val;
      Cookie.set("token", val);
    },
    // 清除token
    clearToken(state) {
      state.token = "";
      Cookie.remove("token");
      console.log("clearToken", Cookie.get("token"));
    },
    // 获取token 避免刷新的时候token丢失
    getToken(state) {
      state.token = Cookie.get("token");
    }
  },
  action: {}
};
