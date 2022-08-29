<template>
  <div id="login">
    <div class="logincont">
      <el-form ref="userSubmit" :model="userSubmit" label-width="60px">
        <el-form-item label="账号">
          <el-input placeholder="请输入账号" prefix-icon="el-icon-user" v-model="userSubmit.name" />
        </el-form-item>
        <el-form-item label="密码">
        <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="userSubmit.psd" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      userSubmit: {
        name: "",
        psd: ""
      }
    }
  },
  mounted() {
    
  },
  methods: {
    onSubmit() {
      this.$router.push("/Home")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#login {
  width: 100%;
  height: 100%;
  background: url('../assets/loginBJ.jpg') no-repeat center;
  display: flex;
  align-items: center;
  .logincont {
    width: 30%;
    height: 200px;
    background-color: #fff;
    border-radius: 6px;
    margin-left: 4%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
