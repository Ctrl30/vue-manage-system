<template>
  <el-container style="height:100%;">
    <el-aside width="auto">
      <component-aside></component-aside>
    </el-aside>
    <el-container>
      <el-header>
        <component-header></component-header>
      </el-header>
      <component-tab></component-tab>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ComponentHeader from "../components/ComponentHeader";
import ComponentAside from "../components/ComponentAside";
import ComponentTab from "../components/ComponentTab";
export default {
  components: {
    ComponentHeader,
    ComponentAside,
    ComponentTab
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #333;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
