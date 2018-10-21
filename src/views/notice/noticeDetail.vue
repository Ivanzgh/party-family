<template>
  <div v-model="DetailsData">
    <Header :title="title"></Header>
    <div class="notice-title">
      {{this.DetailsData.title}}
    </div>
    <div class="notice-content" v-html="this.DetailsData.content"></div>
    <!--<div class="notice-date">-->
      <!--{{this.DetailsData.currentTime}}-->
    <!--</div>-->
    <!--<div class="author">-->
      <!--{{this.DetailsData.author}}-->
    <!--</div>-->
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
        title : '通知早知道',
        DetailsData : {}

      }
    },
    methods : {
      getNoticeDetails() {
        this.$axios.get(`/news/newsContent.do?newsId=${this.$route.query.id}`).then(res => {
          this.DetailsData = res.data
        })
      }
    },
    created() {
      this.getNoticeDetails()
    }
  }
</script>

<style scoped lang="scss">
  .notice-title{
    font-size: 22px;
    font-weight: 700;
  }
  .notice-img{
    width: 394px;
    height: 261px;
  }
  .notice-content{
    width: 394px;
    height: 100%;
    font-size: 16px;
    font-weight: 500;
  }
</style>
