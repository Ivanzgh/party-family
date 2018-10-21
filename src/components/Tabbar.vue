<template>
  <div class="tabbar clearfix"
       v-if="$route.path === '/index' || $route.path === '/notice' || $route.path === '/myparty'">
    <div class="common fl">
      <router-link to="/index"
                   :style="$route.path === '/index' ? 'color: #f00;border-top: 2px solid #f00' : 'color: #666;'">
        <div class="img-h">
          <img :src="$route.path === '/index' ? '/static/imgs/党_red.png' : '/static/imgs/党_grey.png'" alt="">
        </div>
        <div class="desc">首页</div>
      </router-link>
    </div>
    <div class="common fl">
      <router-link to="/notice"
                   :style="$route.path === '/notice' ? 'color: #f00;border-top: 2px solid #f00' : 'color: #666;'">
        <div class="img-h">
          <img :src="$route.path === '/notice' ? '/static/imgs/消息_red.png' : '/static/imgs/消息_grey.png'" alt="">
        </div>
        <div class="desc">通知早知道</div>
      </router-link>
    </div>
    <div class="common fl">
      <router-link to="myparty"
                   :style="$route.path === '/myparty' ? 'color: #f00;border-top: 2px solid #f00' : 'color: #666;'">
        <div class="img-h">
          <img :src="$route.path === '/myparty' ? '/static/imgs/会员_red.png' : '/static/imgs/会员_grey.png'" alt="">
        </div>
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
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #fff;
    .common {
      width: 33.3333%;
      height: 48px;
      text-align: center;
      color: #666;

      a {
        display: block;
        width: 100%;
        height: 100%;
      }
      .img-h {
        height: 32px;
        img {
          width: 21px;
          height: 22px;
        }
      }

      .desc {
        height: 14px;
        font-size: 10px;
      }
    }
  }
</style>
