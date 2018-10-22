<template>
  <div class="interaction">
    <Header :title="title"></Header>
    <div class="interaction-warp clearfix" v-for="(item,index) in ActionData" :key="index">
      <div class="userinfo clearfix">
          <img :src="item.header" alt="" class="fl">
          <div class="detail fl">
            <div class="username">{{item.username}}</div>
            <div class="date clearfix">
              <img src="/static/imgs/时间.png" alt="" class="fl">
              <div class="fl time">{{item.currentTime}}</div>
              <img src="/static/imgs/声音.png" alt="" class="fl">
              <div class="fl time">公开</div>
            </div>
          </div>
          <div class="action fr"></div>
      </div>
      <div class="content">{{item.content}}</div>
      <div class="reply clearfix">
        <div class="fr">
          <img src="/static/imgs/回复.png" alt="">
          <span>回复</span>
        </div>
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
    },
    created() {
      this.getActionData()
    }
  }
</script>

<style scoped lang="scss">
  .interaction-warp{
    width: 345.33px;
    height: 111px;
    padding: 15px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    .userinfo{
      width: 343.33px;
      height: 45.67px;
      img{
        width: 33.35px;
        height: 33.35px;
      }
      .detail{
        width: 173px;
        height: 40px;
        margin-left: 10px;
        span{
          font-size: 16px;
        }
        .username{
          width: 172.58px;
          height: 20px;
          font-size: 16px;
          padding-bottom: 10px;
        }
        .date{
          width: 172.58px;
          height: 20.67px;
          .time{
            font-size: 12px;
            margin-right: 2px;
          }
          img{
            width: 12.92px;
            height: 13.33px;
          }
        }
      }
      .action{
        width: 66px;
        height: 26px;
        background: url("/static/imgs/党员互动icon.png") no-repeat;
      }
    }
    .content{
      width: 345.33px;
      height: 40px;
      font-size: 16px;
      padding-top: 6px;
    }
    .reply{
      width: 343.33px;
      height: 22px;
      font-size: 16px;
      img{
        width: 16px;
        height: 17px;
      }
    }
  }
</style>
