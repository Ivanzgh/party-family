<template>
  <div class="tabcontainer">
    <router-view></router-view>
    <!--底部标签栏-->
    <Tabbar></Tabbar>
    <!--<div class="tabbar">-->
      <!--<van-tabbar v-model="active">-->
        <!--<van-tabbar-item to="/index">-->
          <!--<span>首页</span>-->
          <!--<img-->
            <!--slot="icon"-->
            <!--slot-scope="props"-->
            <!--:src="props.active ? icon.active  : icon.normal"-->
          <!--&gt;-->
        <!--</van-tabbar-item>-->
        <!--<van-tabbar-item icon="chat" to="/notice">通知早知道</van-tabbar-item>-->
        <!--<van-tabbar-item icon="contact" to="/myparty">我的党建</van-tabbar-item>-->
      <!--</van-tabbar>-->
    <!--</div>-->
  </div>
</template>

<script>
  import Tabbar from '../../components/Tabbar'
  export default {
    components : {
      Tabbar
    },
    data() {
      return {
        // active: 0,
        // icon: {
        //   active: '/static/imgs/党_red.png',
        //   normal: '/static/imgs/党_grey.png',
        // },
        // icon: {
        //   active: '/static/imgs/消息_red.png',
        //   normal: '/static/imgs/消息_grey.png',
        // },
        // icon: {
        //   active: '/static/imgs/会员_red.png',
        //   normal: '/static/imgs/会员_grey.png',
        // },
      }
    },
  }
</script>

<style scoped lang="scss">

</style>
