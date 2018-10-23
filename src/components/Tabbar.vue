<template>
  <div class="tabbar clearfix"
       v-if="$route.path === '/index' || $route.path === '/notice' || $route.path === '/myparty'">
    <div class="common fl">
      <router-link to="/index"
                   :style="$route.path === '/index' ? 'color: #f00;border-top: 2px solid #f00' : 'color: #666;'">
        <img :src="$route.path === '/index' ? '/static/imgs/党_red.png' : '/static/imgs/党_grey.png'" alt="">
        <div class="desc">首页</div>
      </router-link>
    </div>
    <div class="common fl">
      <router-link to="/notice"
                   :style="$route.path === '/notice' ? 'color: #f00;border-top: 2px solid #f00' : 'color: #666;'">
        <img :src="$route.path === '/notice' ? '/static/imgs/消息_red.png' : '/static/imgs/消息_grey.png'" alt="">
        <div class="desc">通知早知道</div>
      </router-link>
    </div>
    <div class="common fl">
      <router-link to="myparty"
                   :style="$route.path === '/myparty' ? 'color: #f00;border-top: 2px solid #f00' : 'color: #666;'">
        <img :src="$route.path === '/myparty' ? '/static/imgs/会员_red.png' : '/static/imgs/会员_grey.png'" alt="">
        <div class="desc">我的党建</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .tabbar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 49px;
    line-height: 19px;
    z-index: 5;
    background: #fff;
    .common {
      width: 33.3333%;
      text-align: center;
      color: #666;
      height: 100%;
      a {
        display: block;
        width: 100%;
        height: 100%;
      }
      img {
        width: 21px;
        height: 22px;
        margin: 0 auto;
      }
      .desc {
        height: 14px;
        font-size: 10px;
        text-align: center;
      }
    }
  }
</style>
