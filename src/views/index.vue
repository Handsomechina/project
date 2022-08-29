<template>
  <div id="cont">
    <top></top>
    <div id="contont">
      <left></left>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import left from '@/components/left';
import top from '@/components/top';
export default {
  name: 'Index',
  components: {
    left,
    top,
  },
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>
