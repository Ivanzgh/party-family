<template>
  <div class="myparty">
    <div class="myparty-warp">
      <div class="myparty-title">
        我的党建
      </div>
      <div class="myparty-userinfo">
        <div class="userinfo-wrap" v-if="Object.keys(this.$store.state.token).length == 0">
          <img src="/static/imgs/bt_bg.png" alt="">
          <div class="user-login">
            <router-link to="/login">你还没有登录，请登录</router-link>
          </div>
        </div>
        <div class="userinfo-wrap" v-else>
          <img :src="this.$store.state.userInfo.header" alt="">
          <div class="user-login">{{this.$store.state.userInfo.username}}</div>
        </div>
      </div>
    </div>
    <div class="userinfo clearfix">
      <div class="info-item clearfix">
        <router-link to="/userinfo">
          <img src="/static/imgs/person.png" class="img-f fl" alt="">
          <span>个人信息</span>
          <img src="/static/imgs/right.png" class="img-r fr" alt="">
        </router-link>
      </div>
      <div class="info-item clearfix">
        <router-link to="/integral">
          <img src="/static/imgs/lxjf.png" class="img-f fl" alt="">
          <span>个人量化积分</span>
          <img src="/static/imgs/right.png" class="img-r fr" alt="">
        </router-link>
      </div>
      <div class="info-item clearfix">
        <router-link to="/changePassword">
          <img src="/static/imgs/xgmm.png" class="img-f fl" alt="">
          <span>修改密码</span>
          <img src="/static/imgs/right.png" class="img-r fr" alt="">
        </router-link>
      </div>
      <div class="info-item clearfix">
        <router-link to="/partyFeePayment">
          <img src="/static/imgs/dfjn.png" class="img-f fl" alt="">
          <span>党费缴纳</span>
          <img src="/static/imgs/right.png" class="img-r fr" alt="">
        </router-link>
      </div>
    </div>
    <div class="btn" v-if="!Object.keys(this.$store.state.token).length == 0">
      <van-button type="danger" round size="large" @click="logout">退出登录</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo : {
          header: '',
          username: '',
          id : '',
          homedown: '',
          address: '',
          nation: '',
          wxNum: '',
          qqNum: '',
          sex: '',
          education: '',
          jobRank: '',
          salary: '',
          joinPartyTime: '',
          lastPayTime: '',
          partyIdentity: ''
        }
      }
    },
    methods : {
      logout() {
        this.$store.commit('CHANGE_USERINFO',this.userInfo);
        this.$store.commit('DEL_TOKEN');
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped lang="scss">
  .myparty-title {
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    width: 404px;
    height: 44px;
    line-height: 44px;
    padding: 0 5px;
    background: #c50206;
  }

  .myparty-userinfo {
    width: 414px;
    height: 155px;
    background: #c50206;
    display: flex;
    justify-content: center;
    align-items: center;

    .userinfo-wrap {
      width: 110px;
      height: 76px;
      text-align: center;

      img {
        width: 69px;
        height: 69px;
        border-radius: 50%;
      }
      .user-login{
        font-size: 16px;
      }
      .user-login a {
        width: 110px;
        height: 16px;
        display: block;
        text-decoration: none;
        font-size: 11px;
        color: #fff;
      }
    }
  }

  .userinfo {
    width: 414px;
    height: 213px;
    .info-item {
      width: 374px;
      height: 54px;
      line-height: 54px;
      padding: 0 20px;
      border-bottom: 1px solid #666;
      color: #333;
      a{
        display: block;
        width: 374px;
        height: 54px;
      }

      span{
        font-size: 16px;
        color: #666;
      }

      .img-f {
        width: 32px;
        display: block;
        padding: 10px 0;
        margin-right: 10px;
      }
      .img-r {
        width: 10px;
        height: 20px;
        display: block;
        padding: 10px 0 0;
      }
    }
  }

  .btn{
    padding: 30px 20px;
  }
</style>
