module.exports = {
  devServer: {
    port: 8000,
    open: true
    // proxy: {}
  },
  css: {
    loaderOptions: {
      sass: {
        // 旧版配置
        // data: `@import "@/assets/scss/_variable.scss";`
        // 新版配置
        prependData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  }
};
