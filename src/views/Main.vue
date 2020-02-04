<template>
  <el-container style="height:100%;">
    <el-aside width="200px">
      <component-aside></component-aside>
    </el-aside>
    <el-container>
      <el-header>
        <component-header></component-header>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import ComponentHeader from "../components/ComponentHeader";
import ComponentAside from "../components/ComponentAside";
export default {
  components: {
    ComponentHeader,
    ComponentAside
  }
};
</script>

<style lang="scss" scoped></style>
