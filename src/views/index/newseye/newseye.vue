<template>
    <div class="newseye">
      <Header :title="title"></Header>
      <ListPage :listData="listData"></ListPage>
    </div>
</template>

<script>
  import Header from '../../../components/Header'
  import ListPage from '../../../components/listPage'
    export default {
      components : {
        Header,
        ListPage
      },
      data() {
          return {
            title: '信工新闻眼',
            listData : [],
          }
      },
      methods: {
        getListData() {
          this.$axios.get('/news/newsList.do?page=1&rows=10&type=0').then(res => {
            if (res.code == 1) {
              this.listData = res.rows
            }
          })
        }
      },
      created() {
        this.getListData()
      }
    }
</script>

<style scoped>

</style>
