<template>
  <div>
    <div class="common-header ">
      通知早知道
    </div>
    <div class="hehe" style="height: 44px;"></div>
    <div class="notice-content " v-for="(item ,index) in noticeData" :key="index">
      <router-link :to="{path:'/noticeDetail',query:{id:item.newsId}}" >
        <div class="notice-img fl">
          <img src="/static/imgs/iconfont_gonggaotongzhi.png" alt="">
        </div>
        <div class="notice-info fl">
          <div class="notice-header">
            {{item.title}}
          </div>
          <div class="notice-date">
            {{item.currentTime}}
          </div>
        </div>
      </router-link>
    </div>
    <div class="notice-bottom">
      没有数据了
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        noticeData: []
      }
    },
    methods: {
      getNoticeData() {
        this.$axios.get('/news/newsList.do?page=1&rows=10&type=2').then(res => {
          if (res.code == 1) {
            this.noticeData = res.rows
          }
        })
      }
    },

    created() {
      this.getNoticeData()
    }
  }
</script>

<style scoped lang="scss">
  .notice-content{
     width: 355px;
     height: 77px;
     padding: 10px;
     border-bottom: 1px solid #999;

     a{
       text-decoration: none;
       color: #333;
     }

     .notice-img{
       width: 79px;
       height: 76px;
       display: flex;
       justify-content: center;
       align-items: center;
       img{
         width: 34px;
         height: 37px;
       }
     }

     .notice-info{
       width: 274px;
       height: 76px;
       .notice-header{
         font-size: 16px;
         width: 274px;
         height: 40px;
       }
       .notice-date{
         font-size: 12px;
         width: 274px;
         height: 20px;
         padding-top: 8px;
       }

     }
   }

  .notice-bottom{
    font-size: 16px;
    color: #999;
    text-align: center;
  }
</style>
