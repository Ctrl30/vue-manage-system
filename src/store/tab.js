import Cookie from "js-cookie";
export default {
  state: {
    currentMenu: null,
    isCollapse: false,
    menu: [],
    tabsList: [
      {
        path: "/",
        label: "首页",
        name: "home",
        icon: "home"
      }
    ]
  },
  mutations: {
    // 登录时设置menu
    setMenu(state, val) {
      state.menu = val;
      Cookie.set("menu", JSON.stringify(val));
    },
    // 退出时清空menu
    clearMenu(state) {
      state.menu = [];
      Cookie.remove("menu");
    },
    addMenu(state, router) {
      if (!Cookie.get("menu")) {
        return;
      }
      let menu = JSON.parse(Cookie.get("menu"));
      state.menu = menu;
      let currentMenu = [
        // 布局组件
        {
          path: "/",
          component: () => import("@/views/Main"),
          children: []
        }
      ];
      // 对menu遍历 设置到children里
      menu.forEach(item => {
        if (item.children) {
          item.children = item.children.map(item => {
            item.component = () => import(`@/views/${item.url}`);
            return item;
          });
          currentMenu[0].children.push(...item.children);
        } else {
          item.component = () => import(`@/views/${item.url}`);
          currentMenu[0].children.push(item);
        }
      });
      console.log("current,", currentMenu);
      router.addRoutes(currentMenu);
      // router.addRoutes(currentMenu);
    },
    selectMenu(state, val) {
      if (val.name !== "home") {
        state.currentMenu = val;
        let result = state.tabsList.findIndex(item => item.name === val.name);
        result === -1 ? state.tabsList.push(val) : "";
        Cookie.set("tagList", JSON.stringify(state.tabsList));
      } else {
        state.currentMenu = null;
      }
      // if (val.name !== "home") {
      //   state.currentMenu = val;
      //   let result = state.tabsList.findIndex(item => item.name == val.name);
      //   if (result == -1) {
      //     console.log("mutations");
      //     state.tabsList.push(val);
      //   }
      // } else {
      //   state.currentMenu = null;
      // }
    },
    getMenu(state) {
      if (Cookie.get("tagList")) {
        let tagList = JSON.parse(Cookie.get("tagList"));
        state.tabsList = tagList;
      }
    },
    closeTab(state, val) {
      let result = state.tabsList.findIndex(item => item.name === val.name);
      state.tabsList.splice(result, 1);
      Cookie.set("tagList", JSON.stringify(state.tabsList));
    },
    isCollapse(state) {
      console.log("sssssssss");
      state.isCollapse = !state.isCollapse;
    }
  }
};
