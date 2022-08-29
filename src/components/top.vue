<template>
  <div id="top">
    <div class="bigMoudl">
      <img src="" alt="">
      <div class="ul">
        <div class="li" @click="toHome">监控中心</div>
        <div class="li" @click="toUser">用户中心</div>
        <div class="li">基础数据</div>
        <div class="li">销售模块</div>
        <div class="li">生产模块</div>
      </div>
    </div>
    <div class="userMsag">
      <i class="el-icon-search"></i>
      <i class="el-icon-bell"></i>
      <i class="el-icon-help"></i>
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" alt="">姓名<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <i class="el-icon-sort"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data() {
    return {}
  },
  methods: {
    toHome() {
      this.$router.push("/Home")
    },
    toUser() {
      this.$router.push("/User")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

#top {
  width: 100%;
  background: #6085FE;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .bigMoudl {
    height: 100%;
    display: flex;
    align-items: center;
    .ul {
      height: 48px;
      align-items: center;
      .li {
        padding: 0 10px;
        height: 48px;
        line-height: 48px;
        float: left;
        display: inline-block;
        margin-right: 20px;
        color: #C7D4FE;
        font-size: 14px;
        font-weight: 400;
      }
      .li:hover {
        background-color: #365FE5;
        color: #FFFFFF;
        cursor: pointer;
      }
    }
  }
  .userMsag {
    height: 100%;
    display: flex;
    align-items: center;
    >i, .el-dropdown span {
      margin-right: 25px;
      height: 48px;
      display: flex;
      align-items: center;
      >img {
        width: 24px;
        height: 24px;
        border-radius: 12px;
        margin-right: 8px;
      }
    }
  }
}
</style>
