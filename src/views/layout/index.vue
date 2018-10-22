<template>
  <div class="tabcontainer">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Tabbar from '../../components/Tabbar'
  export default {
    components : {
      Tabbar
    },
  }
</script>

<style scoped lang="scss">
.tabcontainer{
  width: 100%;
  height: 100%;
}
</style>
