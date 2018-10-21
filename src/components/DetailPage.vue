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
    width: 394px;

    .news-title {
      width: 394px;
      height: 86px;
      font-size: 24px;
    }
    .news-img img {
      width: 394px;
      height: 261px;
    }
    .news-info {
      font-size: 12px;
      width: 394px;
    }
  }

</style>
