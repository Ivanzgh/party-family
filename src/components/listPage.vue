<template>
  <div>
    <div class="list-content clearfix"
         v-for="(item ,index) in listData"
         :key="index"
         :label="item"
    >
      <router-link :to="{path:'/detailPage',query:{id:item.newsId}}">
        <div class="list-img fl">
          <img :src="item.pic" alt="">
        </div>
        <div class="list-info fl">
          <div class="list-header">
            {{item.title}}
          </div>
          <div class="list-date clearfix">
            <div class="list-time fl">
              {{item.currentTime}}
            </div>
            <div class="list-looknum fr">
              <img src="/static/imgs/12-eye.png" alt="">
              {{item.count}}
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="list-bottom">
      没有数据了
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      listData: {
        type: Array,
        require: true
      },
    }
  }
</script>

<style scoped lang="scss">
  .list-content {
    width: 355.33px;
    height: 80px;
    padding: 10px;
    border-bottom: 1px solid #999;

    a {
      text-decoration: none;
      color: #333;
    }

    .list-img {
      width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .list-info {
      padding-left: 10px;
      width: 265.33px;
      height: 80px;
      .list-header {
        width: 100%;
        height: 40px;
        font-size: 16px;
      }
      .list-date {
        width: 100%;
        height: 13px;
        font-size: 9px;
        padding-top: 30px;
      }
    }
  }

  .list-bottom {
    font-size: 16px;
    color: #999;
    text-align: center;
  }
</style>
