<template>
  <div>
    <div class="banner" v-model="swipeData">
      <van-swipe :autoplay="3000" :height="212">
        <van-swipe-item>
          <img :src="swipeData[0].imgUrl" alt="">
          <div class="desc">
            {{swipeData[0].title}}
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <img :src="swipeData[1].imgUrl" alt="">
          <div class="desc">
            {{swipeData[1].title}}
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <img :src="swipeData[2].imgUrl" alt="">
          <div class="desc">
            {{swipeData[2].title}}
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <img :src="swipeData[3].imgUrl" alt="">
          <div class="desc">
            {{swipeData[3].title}}
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swipeData: [],
      }
    },
    methods: {
      getSwiper() {
        this.$axios.get('/carousel/carouselList.do?type=0').then(res => {
          if (res.code == 1) {
            this.swipeData = res.rows
          }
        })
      }
    },
    created() {
      this.getSwiper()
    }
  }
</script>

<style scoped lang="scss">
  .banner {
    width: 375px;
    height: 187.5px;
    img {
      width: 375px;
      height: 187.5px;
      position: relative;
    }

    .desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 20px;
      background: rgba(0, 0, 0, .5);
      color: #fff;
      font-size: 12px;
    }
  }
</style>
