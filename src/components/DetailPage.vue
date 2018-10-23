<template>
  <div class="news-details">
    <Header :title="title"></Header>

    <div class="news-content">
      <div class="news-title">
        {{this.detailsData.title}}
      </div>
      <div class="news-info" v-html="this.detailsData.content"></div>
    </div>
  </div>
</template>

<script>
  import Header from './Header'
  export default {
    components : {
      Header
    },
    data() {
      return {
        title : '信工新闻眼',
        detailsData: {}
      }
    },
    methods: {
      getDetailsData() {
        this.$axios.get(`/news/newsContent.do?newsId=${this.$route.query.id}`).then(res => {
          if (res.code == 1) {
            this.detailsData = res.data
          }
        })
      }
    },
    created() {
      this.getDetailsData()
    }
  }
</script>

<style scoped lang="scss">
  .news-content {
    margin: 0 auto;
    width: 355.33px;

    .news-title {
      width: 355.33px;
      height: 57.33px;
      font-size: 24px;
      margin: 10px 0;
    }

    .news-info {
      font-size: 12px;
      width: 355.33px;

      /deep/ img{
        width: 100%;
      }
      /deep/ p{
        margin-bottom: 10px;
        font-size: 12px;
        line-height: 2;
      }
    }
  }

</style>
