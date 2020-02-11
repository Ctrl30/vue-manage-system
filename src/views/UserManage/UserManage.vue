<template>
  <div class="manage">
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '编辑用户'"
      :visible.sync="dialogVisible"
    >
      <component-form :formLabel="operateFormLabel" :form="operateForm">
      </component-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
    <div class="manage-header">
      <div class="operate">
        <el-button type="primary" @click="adduser"> 新增</el-button>
        <el-button type="primary" @click="delall"> 一键删除</el-button>
      </div>

      <component-form inline :formLabel="formLabel" :form="searchForm">
        <el-button type="primary"> 搜索</el-button>
      </component-form>
      <!-- <ComponentForm /> -->
    </div>
    <div class="manage-content">
      <component-table
        :tableData="tableData"
        :tableLabel="tableLabel"
        :config="config"
        @changePage="getList"
        @edit="editUser"
        @delete="deleteUser"
        @deletemore="delmore"
      />
      <!-- <ComponentTable /> -->
    </div>
  </div>
</template>

<script>
import ComponentForm from "../../components/ComponentForm";
import ComponentTable from "../../components/ComponentTable";
export default {
  components: {
    ComponentTable,
    ComponentForm
  },
  data() {
    return {
      dialogVisible: false,
      operateType: "add",
      searchForm: {
        keyword: ""
      },
      formLabel: [
        {
          label: "",
          model: "keyword"
          // type:''
        }
      ],
      config: {
        page: 1,
        total: 20,
        loading: false
      },
      tableData: [],
      tableLabel: [
        {
          prop: "name",
          label: "姓名"
        },
        {
          prop: "age",
          label: "年龄"
        },
        {
          prop: "sexLabel",
          label: "性别"
        },
        {
          prop: "birth",
          label: "出生日期",
          width: "200px"
        },
        {
          prop: "addr",
          label: "地址",
          width: "320px"
        }
      ],
      operateForm: {
        name: "",
        addr: "",
        sex: "",
        age: "",
        birth: ""
      },
      operateFormLabel: [
        {
          model: "name",
          label: "姓名"
        },
        {
          model: "age",
          label: "年龄"
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          option: [
            {
              label: "男",
              value: 1
            },
            {
              label: "女",
              value: 0
            }
          ]
        },
        {
          model: "addr",
          label: "地址"
        },
        {
          model: "birth",
          label: "出生日期",
          type: "date"
        }
      ],
      selectRows: []
    };
  },
  methods: {
    getList() {
      this.config.loading = true;
      this.$http
        .get("/api/user/getUser", {
          params: {
            page: this.config.page
          }
        })
        .then(res => {
          this.tableData = res.data.list.map(item => {
            item.sexLabel = item.sex === 0 ? "女" : "男";
            return item;
          });
          this.config.total = res.data.count;
          this.config.loading = false;
        });
    },
    changePage(page) {
      console.log(page);
    },
    editUser(row) {
      this.dialogVisible = true;
      this.operateType = "edit";
      this.operateForm = row;
    },
    deleteUser(row) {
      this.$confirm("是否删除用户", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http
            .get("/api/user/del", {
              params: {
                id: row.id
              }
            })
            .then(res => {
              console.log("delete", res);
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.getList();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    confirm() {
      if (this.operateType === "edit") {
        this.$http.post("/api/user/edit", this.operateForm).then(res => {
          console.log("res", res);
          this.dialogVisible = false;
          this.getList();
        });
      } else {
        this.$http.post("/api/user/add", this.operateForm).then(res => {
          console.log("res", res);
          this.dialogVisible = false;
          this.getList();
        });
      }
    },
    delmore(rows) {
      this.selectRows = rows;
    },
    delall() {
      let rows = this.selectRows;
      let ids = rows.map(item => {
        return item.id;
      });
      ids = ids.join(",");
      this.$confirm("是否批量删除", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http
            .get("/api/user/batchremove", {
              params: {
                ids
              }
            })
            .then(res => {
              console.log("deleteaaaa", res);
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.getList();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    adduser() {
      this.dialogVisible = true;
      this.operateType = "add";
      // this.operateForm = row;
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/common";
</style>
