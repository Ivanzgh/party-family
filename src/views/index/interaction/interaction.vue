<template>
  <div class="interaction">
    <Header :title="title"></Header>
    <div class="interaction-warp clearfix" v-for="(item,index) in ActionData" :key="index">
      <div class="userinfo">
        <img :src="item.header" alt="">
        <div class="detail">
          <div class="username">{{item.username}}</div>
          <div class="date">
            <img src="/static/imgs/时间.png" alt="">
            <span>{{item.currentTime}}</span>
            <img src="/static/imgs/声音.png" alt="">
            <span>公开</span>
          </div>
        </div>
        <div class="action">党员互动</div>
      </div>
      <div class="content">{{item.content}}</div>
      <div class="reply fr">
        <img src="/static/imgs/回复.png" alt="">
        <span>回复</span>
      </div>
    </div>
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
        title: '党员云互动',
        ActionData: []
      }
    },
    methods: {
      getActionData() {
        this.$axios.get('/forum/forumList.do?page=1&rows=10&type=0&cates=0').then(res => {
          if (res.code == 1) {
            this.ActionData = res.rows
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .interaction-warp{
    width: 416px;
    height: 141px;
    .userinfo{
      width: 382px;
      height: 46px;
      img{
        width: 36px;
        height: 36px;
      }
      .detail{
        width: 173px;
        height: 21px;
      }
      .action{
        width: 66px;
        height: 26px;
      }
    }
    .content{
      width: 386px;
      height: 40px;
    }
    .reply{
      width: 382px;
      height: 22px;
    }
  }
</style>
