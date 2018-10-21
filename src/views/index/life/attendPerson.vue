<template>
  <div class="attendPerson">
    <Header :title="title"></Header>

    <div class="list" v-for="(item,index) in attendPersonData" :key="index">
      <div class="list-item clearfix">
        <img :src="item.header" alt="">
        <span>{{item.username}}</span>
        <span>{{item.branchName}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../../components/Header'
  export default {
    components:{
      Header
    },
    data() {
      return {
        title : '参评党员',
        attendPersonData: []
      }
    },
    methods: {
      getAttendData() {
        this.$axios.get('/nationComment/userList.do?select_branch=2EB3C14ACAA54EABBF7D8D0D6C37BFEF&user_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHQiOjE1NDA2NDIxMDMwMTAsInVpZCI6MiwicHdkIjoiZTEwYWRjMzk0OWJhNTlhYmJlNTZlMDU3ZjIwZjg4M2UiLCJpYXQiOjE1NDAwMzczMDMwMTB9.KoY3_aRlDfsxQb6FnW-eX4y2Wr7q9IdHmPK__UW9HKc&page=1&rows=10')
          .then(res => {
            if (res.code == 1) {
              this.attendPersonData = res.rows
            }
          })
      }
    },
    created() {
      this.getAttendData()
    }
  }
</script>

<style scoped lang="scss">
  .list-item {
    width: 416px;
    height: 54px;
    img {
      width: 32px;
      height: 32px;
    }
  }
</style>
