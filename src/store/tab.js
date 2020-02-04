export default {
  state: {
    menu: [],
    currentMenu: {}
  },
  mutations: {
    selectMenu(state, val) {
      console.log("mutations");
      state.currentMenu = val;
    }
  }
};
