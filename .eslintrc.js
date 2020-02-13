module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      "error",
      {
        semi: true, //配置不需要封号
        // singleQuote: false //配置单引号
        // printWidth: 300
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
