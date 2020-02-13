<template>
  <!-- @open="handleOpen" -->
  <!-- @close="handleClose" -->
  <el-menu
    default-active="/"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
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
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
    noChildren() {
      return this.asideData.filter(item => !item.children);
    },
    hasChildren() {
      return this.asideData.filter(item => item.children);
    },
    menu() {
      return this.store.state.menu;
    }
  },
  data() {
    return {
      // isCollapse: false,
      asideData: [
        {
          path: "/",
          label: "首页",
          name: "home",
          icon: "s-home"
        },
        {
          path: "/video",
          label: "视频管理",
          name: "video",
          icon: "video-play"
        },
        {
          path: "/user",
          label: "用户管理",
          name: "user",
          icon: "user"
        },
        {
          label: "其他页面",
          icon: "setting",
          name: "setting",
          children: [
            {
              path: "/page1",
              label: "页面1",
              name: "page1",
              icon: "setting"
            },
            {
              path: "/page2",
              label: "页面2",
              name: "page2",
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
      this.$router.push({ name: item.name });
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
