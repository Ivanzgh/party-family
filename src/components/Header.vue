<template>
  <div>
    <div class="common-header clearfix">
      <van-icon name="arrow-left" style="padding-top: 10px;float: left;"
                @click.native="handleClick"/>
      {{title}}
    </div>
    <!--加一个空的div解决fixed脱离文档流的问题-->
    <div class="hehe" style="height: 44px;"></div>
  </div>
</template>

<script>
    export default {
      props : {
        title : {
          type : String,
          require : true
        }
      },
        methods : {
          handleClick() {
            //返回上级路由
            this.$router.back(-1)
          },
        }
    }
</script>

<style scoped lang="scss">

</style>
