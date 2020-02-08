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
    selectMenu(state, val) {
      if (val.name !== "home") {
        state.currentMenu = val;
        let result = state.tabsList.findIndex(item => item.name == val.name);
        if (result == -1) {
          console.log("mutations");
          state.tabsList.push(val);
        }
      } else {
        state.currentMenu = null;
      }
    },
    closeTab(state, val) {
      let result = state.tabsList.findIndex(item => item.name === val.name);
      state.tabsList.splice(result, 1);
    },
    isCollapse(state) {
      console.log("sssssssss");
      state.isCollapse = !state.isCollapse;
    }
  }
};
