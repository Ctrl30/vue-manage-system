<template>
  <div>
    <el-form
      :model="form"
      status-icon
      ref="form"
      label-width="100px"
      :inline="inline"
    >
      <el-form-item
        v-for="item in formLabel"
        :key="item.model"
        :label="item.label"
      >
        <el-input
          v-model="form[item.model]"
          :placeholder="'请输入' + item.label"
          v-if="!item.type"
        ></el-input>
        <el-select
          v-model="form[item.model]"
          :placeholder="'请输入' + item.label"
          v-if="item.type === 'select'"
        >
          <el-option
            v-for="item in item.option"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-switch
          v-model="form[item.model]"
          v-if="item.type === 'switch'"
        ></el-switch>
        <el-date-picker
          v-if="item.type === 'date'"
          type="date"
          placeholder="选择日期"
          v-model="form[item.model]"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <slot></slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    inline: Boolean,
    form: Object,
    formLabel: Array
  }
};
</script>

<style scoped></style>
