<template>
  <div class="life">
    <Header :title="title"></Header>

    <div class="life-img"></div>

    <div class="life-conent">
      <div class="conent-warp clearfix">
        <div class="conent-item fl">
          <router-link to="/political">
            <img src="/static/imgs/icon1.png" alt="">
            <div class="desc">政治学习</div>
          </router-link>
        </div>
        <div class="conent-item fl">
          <router-link to="/think">
            <img src="/static/imgs/icon2.png" alt="">
            <div class="desc">思想汇报</div>
          </router-link>
        </div>
        <div class="conent-item fl">
          <router-link to="/summary">
            <img src="/static/imgs/icon3.png" alt="">
            <div class="desc">心得总结</div>
          </router-link>
        </div>
      </div>
      <div class="conent-warp clearfix">
        <div class="conent-item fl">
          <router-link to="/review">
            <img src="/static/imgs/icon4.png" alt="">
            <div class="desc">民主评议</div>
          </router-link>
        </div>
        <div class="conent-item fl">
          <router-link to="/organization">
            <img src="/static/imgs/icon5.png" alt="">
            <div class="desc">流动党员找组织</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../../components/Header'

  export default {
    components: {
      Header
    },
    data() {
      return {
        title: '掌上组织生活'
      }
    },
  }
</script>

<style scoped lang="scss">
  .life-img {
    width: 414px;
    height: 205px;
    background: url("/static/imgs/timg.jpg") no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  }

  .life-conent {
    width: 414px;
    height: 314px;

    img {
      width: 100px;
      height: 100px;
    }

    .conent-warp {
      height: 157px;
    }
    .conent-item {
      text-align: center;
      width: 33%;
      padding: 20px 0;
      .desc{
        font-size: 16px;
        color: #666;
      }
    }
  }

</style>
