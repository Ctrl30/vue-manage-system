<template>
  <div style="padding: 20px">
    <el-form :model="form" label-width="120">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item align="center">
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$http.post("/api/permission/getMenu", this.form).then(res => {
        // console.log(res);
        res = res.data;
        if (res.code === 20000) {
          // 登录前清除menu  避免用户二次登录
          this.$store.commit("clearMenu");
          // 登录操作
          this.$store.commit("setMenu", res.data.menu);
          //动态添加路由
          this.$store.commit("addMenu", this.$router);
          //   登录之后跳转到首页
          this.$router.push({ name: "home" });
        } else {
          this.$message.warning(res.data.message);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
