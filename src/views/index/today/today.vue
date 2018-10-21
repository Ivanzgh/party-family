<template>
    <div class="today">
      <Header :title="title"></Header>

      <div class="content" v-html="todayData"></div>
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
          title: '历史上的今天',
          todayData : []
        }
      },
      methods: {
        getNewsEyeData() {
          this.$axios.get('/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70503%2Findex.html').then(res => {
              this.todayData = res
          })
        }
      },

      created() {
        this.getNewsEyeData()
      }
    }
</script>

<style scoped>

</style>
