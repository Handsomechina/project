<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less">
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  #cont {
    width: 100%;
    height: 100%;
    #top {
      width: 100%;
      height: 48px;
    }
    #contont {
      width: 100%;
      height: calc(100% - 48px);
      display: flex;
      #left {
        width: 200px;
        height: 100%;
        box-shadow: 2px 0px 6px 0px rgba(0, 21, 41, 0.12);
      }
      .routCont {
        padding: 20px 0 0 20px;
        height: calc(100% - 20px);
        width: calc(100% - 220px);
        background: #F5F5F5;
        overflow: auto;
      }
    }
  }
  
}
</style>
