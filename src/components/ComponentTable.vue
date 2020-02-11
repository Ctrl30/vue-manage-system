<template>
  <div class="common-table">
    <el-table
      :data="tableData"
      height="90%"
      stripe
      v-loading="config.loading"
      @selection-change="handleSelectionChange"
      >>
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="序号" width="85">
        <template slot-scope="scope">
          <span style="margin-left:10px">{{
            (config.page - 1) * 20 + scope.$index + 1
          }}</span>
          <!-- <el-button type="text" size="small">编辑</el-button> -->
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in tableLabel"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        show-overflow-tooltip
        :width="item.width ? item.width : '125px'"
      >
        <template slot-scope="scope">
          <span style="margin-left:10px">{{ scope.row[item.prop] }}</span>
          <!-- <span style="margin-left:10px">{{ scope.row }}</span> -->
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="pager"
      layout="prev, pager, next"
      :total="config.total"
      :current-page.sync="config.page"
      @current-change="changePage"
      :page-size="20"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    tableLabel: Array,
    tableData: Array,
    config: Object
  },
  methods: {
    handleEdit(row) {
      console.log("handleEdit", row);
      this.$emit("edit", row);
    },
    handleDelete(row) {
      this.$emit("delete", row);
      console.log("handleDelete", row);
    },
    changePage(page) {
      this.$emit("changePage", page);
      console.log("aaa", this.config);
    },
    handleSelectionChange(val) {
      console.log("handleSelectionChange", val);
      this.$emit("deletemore", val);
    }
  }
};
</script>

<style lang="scss" scoped>
.common-table {
  height: calc(100% - 62px);
  position: relative;
  .pager {
    position: absolute;
    bottom: 0;
    right: 20px;
  }
}
</style>
