 <template>
  <div class="table">
    <!--搜索功能-->
    <div class="search">
      <slot name="search"></slot>
    </div>
    <div class="consequence">
      <!--功能按钮-->
      <div class="button">
        <slot name="button"></slot>
      </div>
      <!--选项卡功能-->
      <div class="tabs">
        <slot name="tabs"></slot>
      </div>
      <!--表格功能-->
      <el-table
        :data="tableData.list"
        fit
        stripe
        show-header
        size="mini"
        :highlight-current-row="true"
        style="width: 100%">
        <slot></slot>
      </el-table>
      <!--分页功能-->
      <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageparm.total"
          :page-size="pageparm.pageSize"
          :current-page.sync="pageparm.currentPage"
          :page-sizes="[10, 30, 50, 100]"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: ['tableData'],
  data() {
    return {
      listLoading: false,
      tabList: [],
      pageparm: {
        currentPage: this.tableData.currentPage,
        pageSize: this.tableData.pageSize,
        total: this.tableData.total
      }
    }
  },
  mounted() {
    console.log(this.tableData);
  },
  methods: {
    handleSizeChange(val){
      this.pageparm.pageSize = val
      this.pageparm.currentPage = 1
      this.$emit('callFather', this.pageparm)
    },
    handleCurrentChange(val) {
      this.pageparm.currentPage = val
      this.$emit('callFather', this.pageparm)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
