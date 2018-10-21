<template>
  <div class="clearfix">
    <!--头部-->
    <div class="common-header header clearfix">
      <div class="header-img fl">
        <img src="/static/imgs/logo.png" alt="">
      </div>
      <div class="header-btn fr" v-if="Object.keys(this.$store.state.token).length == 0 ">
        <router-link to="/login">登录</router-link>
      </div>
    </div>
    <div class="hehe" style="height: 44px;"></div>

    <Swiper></Swiper>

    <div class="content">
      <div class="content-warp clearfix">
        <div class="fl content-item">
          <router-link to="/newseye">
            <img src="/static/imgs/icon_01.png" alt="">
            <div class="desc">信工新闻眼</div>
          </router-link>
        </div>
        <div class="fl content-item">
          <router-link to="/life">
            <img src="/static/imgs/icon_02.png" alt="">
            <div class="desc">掌上组织生活</div>
          </router-link>
        </div>
        <div class="fl content-item">
          <router-link to="/interaction">
            <img src="/static/imgs/icon_03.png" alt="">
            <div class="desc">党员云互动</div>
          </router-link>
        </div>
      </div>
      <div class="content-warp clearfix">
        <div class="fl content-item">
          <router-link to="/building">
            <img src="/static/imgs/icon_04.png" alt="">
            <div class="desc">党建一点通</div>
          </router-link>
        </div>
        <div class="fl content-item">
          <router-link to="/showidentity">
            <img src="/static/imgs/icon_05.png" alt="">
            <div class="desc">党员亮身份</div>
          </router-link>
        </div>
        <div class="fl content-item">
          <router-link to="/today">
            <img src="/static/imgs/icon_06.png" alt="">
            <div class="desc">历史上的今天</div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="content-banner"></div>

    <div class="content-bottom clearfix">
      <div class="content-left fl"></div>
      <div class="content-middle fl">
        <div class="middle-top">
          <router-link to="/study"></router-link>
        </div>
        <div class="middle-bottom">
          <router-link to="/system"></router-link>
        </div>
      </div>
      <div class="content-right fl">
        <div class="rignt-top">
          <router-link to="/photo"></router-link>
        </div>
        <div class="right-bottom">
          <router-link to="/activity"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from '@/components/Swiper'

  export default {
    components: {
      Swiper
    },
  }
</script>

<style scoped lang="scss">
  /*头部样式*/
  .header {
    z-index: 1;
    .header-img img {
      padding: 6px 0;
      height: 32px;
      width: 136px;
    }

    .header-btn a {
      display: flex;
      justify-content: center;
      width: 40px;
      height: 34px;
      font-size: 17px;
      margin-right: 12px;
      color: #fff;
      background: #c50206;
      text-decoration: none;
    }
  }

  /*内容样式*/
  .content {
    width: 414px;
    height: 218px;
    background: url("/static/imgs/bt_bg.png") no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    color: #666;

    img {
      width: 50px;
      height: 50px;
    }

    .content-warp {
      height: 108px;

      .content-item {
        text-align: center;
        width: 33%;
        padding: 9px 0;
      }
      .desc {
        font-size: 12px;
        height: 20px;
        color: #666;
      }
    }
  }

  .content-banner {
    width: 414px;
    height: 100px;
    background: url("/static/imgs/banner01.png") no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  }

  .content-bottom {
    width: 414px;
    height: 182px;
    background: url("/static/imgs/tese.png") no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    margin-bottom: 54px;

    a {
      display: block;
      width: 138px;
      height: 91px;
    }

    .content-left {
      width: 138px;
      height: 182px;
    }
    .content-middle {
      width: 138px;
      height: 182px;

      .middle-top {
        height: 91px;
      }
      .middle-bottom {
        height: 91px;
      }
    }
    .content-right {
      width: 138px;
      height: 182px;
      .rignt-top {
        height: 91px;
      }
      .rignt-bottom {
        height: 91px;
      }
    }
  }


</style>
