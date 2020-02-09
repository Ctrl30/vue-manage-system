<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">Polaris</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>
            上次登陆时间:
            <span>2020-02-01</span>
          </p>
          <p>
            上次登陆地点:
            <span>福建省厦门市集美区</span>
          </p>
        </div>
      </el-card>
      <el-card shadow="hover" style="height:532px;margin-top:30px;">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            show-overflow-tooltip
            :prop="key"
            :label="val"
            v-for="(val, key) in tabelLabel"
            :key="key"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <el-card shadow="hover">
        <div class="num">
          <el-card
            shadow="hover"
            v-for="item in countData"
            :key="item.name"
            :body-style="{ display: 'flex', padding: 0 }"
          >
            <i
              class="icon"
              :class="`el-icon-${item.icon}`"
              :style="{ backgroundColor: item.color }"
            ></i>
            <div class="detail">
              <p class="number">$ {{ item.value }}</p>
              <p class="txt">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
        <el-card shadow="hover">
          <Echart style="height:280px" :chartData="echartData.order"> </Echart>
        </el-card>
        <div class="graph">
          <el-card shadow="hover">
            <Echart style="height:260px" :chartData="echartData.user"></Echart>
          </el-card>
          <el-card shadow="hover">
            <Echart
              :chartData="echartData.video"
              style="height: 260px"
              :isAxisChart="false"
            ></Echart>
          </el-card>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import Echart from "../../components/EChar";
export default {
  components: {
    Echart
  },
  data() {
    return {
      userImg: require("@/assets/images/user.png"),
      tableData: [],
      tabelLabel: {
        name: "课程名",
        todayBuy: "今日购买",
        totalBuy: "总购买",
        monthBuy: "本月购买"
      },
      countData: [
        {
          name: "今日支付订单",
          value: "5123",
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "今日收藏订单",
          value: "4215",
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "今日未支付订单",
          value: "7352",
          icon: "s-goods",
          color: "#5abeff"
        },
        {
          name: "今月支付订单",
          value: "2345",
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "今月收藏订单",
          value: "7498",
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "今月未支付订单",
          value: "8675",
          icon: "s-goods",
          color: "#5abeff"
        }
      ],
      echartData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        video: {
          series: []
        }
      }
    };
  },
  methods: {
    getTableData() {
      this.$http("/home/getData").then(res => {
        this.tableData = res.data.data.tableData;
        console.log(res.data.data);
        // 订单折线图
        const order = res.data.data.orderData;
        this.echartData.order.xData = order.date;
        // 第一步 取出series中的nama部分----键名
        let keyArray = Object.keys(order.data[0]);
        console.log("keyArray", keyArray);
        keyArray.forEach(key => {
          this.echartData.order.series.push({
            name: key,
            data: order.data.map(item => item[key]),
            type: "line"
          });
        });
        this.echartData.order.series;
        // 用户柱状图
        const users = res.data.data.userData;
        // let keys = Object.keys(users.data[0]);
        // users.forEach(item => {
        //   this.echartData.xData.push(item.date);
        // });
        // 用户柱状图
        this.echartData.user.xData = users.map(item => item.date);
        this.echartData.user.series.push({
          name: "新增用户",
          data: users.map(item => item.new),
          type: "bar"
        });
        this.echartData.user.series.push({
          name: "活跃用户",
          data: users.map(item => item.active),
          type: "bar",
          barGap: 0
        });
        // 视频饼图
        const pies = res.data.data.videoData;
        this.echartData.video.series.push({
          data: pies,
          type: "pie"
        });
        // console.log("chartData", this.echartData.user);
      });
    }
  },
  mounted() {
    this.getTableData();
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/home.scss";
</style>
