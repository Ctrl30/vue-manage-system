import Mock from "mockjs";
import homeApi from "./home";

// 设置200-2000ms延时请求到数据
Mock.setup({
  timeout: "200-2000"
});

// 首页相关api
Mock.mock(/\/home\/getData/, "get", homeApi.getStatisticalData);
