<template>
  <!-- @open="handleOpen" -->
  <!-- @close="handleClose" -->
  <el-menu
    default-active="/"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item
      :index="item.path"
      v-for="(item, index) in noChildren"
      :key="index"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      :index="item.path"
      v-for="(item, index) in hasChildren"
      :key="index"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <!-- <template slot="title">{{ child.label }}</template> -->
        <el-menu-item
          :index="child.path"
          v-for="(child, subindex) in item.children"
          :key="subindex"
          @click="clickMenu(child)"
          >{{ child.label }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  computed: {
    noChildren() {
      return this.asideData.filter(item => !item.children);
    },
    hasChildren() {
      return this.asideData.filter(item => item.children);
    }
  },
  data() {
    return {
      asideData: [
        {
          path: "/",
          label: "首页",
          icon: "home"
        },
        {
          path: "/video",
          label: "视频管理",
          icon: "video-play"
        },
        {
          path: "/user",
          label: "用户管理",
          icon: "user"
        },
        {
          label: "其他页面",
          icon: "setting",
          children: [
            {
              path: "/page1",
              label: "页面1",
              icon: "setting"
            },
            {
              path: "/page2",
              label: "页面2",
              icon: "setting"
            }
          ]
        }
      ]
    };
  },
  methods: {
    clickMenu(item) {
      console.log("item", item);
      this.$store.commit("selectMenu", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
}
</style>
