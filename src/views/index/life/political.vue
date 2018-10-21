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
    components: {
      Header,
      ListPage
    },
    data() {
      return {
        title: '政治学习',
        listData: []
      }
    },
    methods: {
      getListData() {
        this.$axios.get('/news/newsList.do?page=1&rows=10&type=8').then(res => {
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

<style scoped lang="scss">

</style>

