<template>
  <header>
    <div class="l-content">
      <el-button
        type="primary"
        icon="el-icon-menu"
        size="mini"
        @click="isCollapse"
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: current.path }" v-if="current">{{
          current.label
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="userImg" alt="" srcset="" class="userImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-setting">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-close" @click.native="logout"
            >退出</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },
  data() {
    return {
      userImg: require("../assets/images/user.png")
    };
  },
  methods: {
    ...mapMutations({
      isCollapse: "isCollapse"
    }),
    logout() {
      this.$store.commit("clearToken");
      this.$store.commit("clearMenu");
      location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
}
.l-content {
  .el-button {
    margin-right: 20px;
  }
  display: flex;
  align-items: center;
}
.r-content {
  .userImg {
    width: 33px;
    border-radius: 50%;
  }
}
</style>
<style>
.el-breadcrumb__item .el-breadcrumb__inner {
  color: #f4f4f4;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #ccc;
}
</style>
