<template>
  <div class="routCont user">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <table-cont :tableData="tabData">
      <template #search>
          <el-form :inline="true" label-position="top" size="mini" :model="formInline" class="demo-form-inline">
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button size="mini" type="primary">查询</el-button>
              <el-button size="mini">重置</el-button>
            </el-form-item>
          </el-form>
      </template>
      <template #button>
        <el-button size="mini" type="primary">合并开票</el-button>
      </template>
      <template #tabs>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first"></el-tab-pane>
          <el-tab-pane label="配置管理" name="second"></el-tab-pane>
          <el-tab-pane label="角色管理" name="third"></el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
        </el-tabs>
      </template>
      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名">
      </el-table-column>
      <el-table-column
          prop="data"
          label="时间">
      </el-table-column>
    </table-cont>
  </div>
</template>

<script>
import tableCont from "@/components/Ptable";
import {listGet, listPOST} from "../../../api/user";

export default {
  name: 'User',
  components: {tableCont},
  data() {
    return {
      tabData: {
        list: [{'data':'2021-10-1','name':'first bold','address':'德玛西亚'},{'data':'2021-10-1','name':'first bold','address':'德玛西亚'}],
        currentPage: 1,
        pageSize: 10,
        total: 100
      },
      formInline: {},
      activeName: "first",
    }
  },
  mounted() {
    this.list();
  },
  methods: {
    list() {
      listGet(this.tabData).then()
      listPOST(this.tabData).then()
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
