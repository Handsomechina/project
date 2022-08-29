<template>
  <div class="routCont">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small" @click="toUser">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-calendar v-model="today"></el-calendar>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      today: new Date(),
    }
  },
  mounted() {
    
  },
  methods: {
     toUser(){
       this.$router.push("/User")
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 .el-calendar {
   width: 100%;
 }
 .el-carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
 }
 .el-carousel__item h3 {
    color: #475669;
    font-size: 28px;
    opacity: 0.75;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
