import Mock from "mockjs";

// 图表数据
let List = [];
export default {
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          vue: Mock.Random.float(100, 8000, 0, 2),
          wechat: Mock.Random.float(100, 8000, 0, 2),
          ES6: Mock.Random.float(100, 8000, 0, 2),
          Redis: Mock.Random.float(100, 8000, 0, 2),
          React: Mock.Random.float(100, 8000, 0, 2),
          antd: Mock.Random.float(100, 8000, 0, 2)
        })
      );
    }
    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: "element",
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "vue",
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "小程序",
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "ES6",
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "antd",
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "React",
            value: Mock.Random.float(1000, 10000, 0, 2)
          }
        ],
        // 柱状图
        userData: [
          {
            date: "周一",
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: "周二",
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: "周三",
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: "周四",
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: "周五",
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: "周六",
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: "周日",
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          }
        ],
        // 折线图
        orderData: {
          date: [
            "20200201",
            "20200202",
            "20200203",
            "20200204",
            "20200205",
            "20200206",
            "20200207"
          ],
          data: List
        },
        tableData: [
          {
            name: "ES6",
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: "小程序",
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: "Vue",
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: "antd",
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: "React",
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: "Redis",
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          }
        ]
      }
    };
  }
};
