<template>
  <div>
    <Header :title="title"></Header>
    <div class="desc">请选择支付方式</div>
    <div class="ltem">
      <div class="item clearfix" @click="wxShow=true">
        <img src="/static/imgs/wx.png" alt="" class="img-f fl">
        <span>微信</span>
        <img src="/static/imgs/right.png" class="img-r fr" alt="">
      </div>
      <van-popup v-model="wxShow" close-on-click-overlay><img src="/static/imgs/wxPay.jpg" alt="" class="pay"></van-popup>
      <div class="item clearfix" @click="zgbShow=true">
        <img src="/static/imgs/zfb.png" alt="" class="img-f fl">
        <span>支付宝</span>
        <img src="/static/imgs/right.png" class="img-r fr" alt="">
      </div>
      <van-popup v-model="zgbShow" close-on-click-overlay><img src="/static/imgs/zfbPay.jpg" alt="" class="pay"></van-popup>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    components : {
      Header
    },
    data() {
      return {
        title : '党费缴纳',
        wxShow: false,
        zgbShow: false
      }
    },
  }
</script>

<style scoped lang="scss">
  .desc {
    font-size: 16px;
    margin: 20px 0 10px;
  }

  .pay{
    width: 300px;
    height: 300px;
  }
  .item {
    height: 40px;
    line-height: 40px;
    padding: 10px;
    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    .img-r {
      width: 10px;
      height: 20px;
      display: block;
      padding: 10px 0 0;
    }
  }
</style>
