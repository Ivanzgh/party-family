<template>
  <div class="login">
    <Header :title="title"></Header>

    <div class="login-content">
      <div class="logo">
        <img src="/static/imgs/logo.png" alt="">
      </div>
      <div class="login-detail">
        <input class="van-cell" v-model="userInfo.id_card" type="text" placeholder="身份证号"/>
        <input class="van-cell" v-model="userInfo.password" type="password" placeholder="密码"/>
        <van-button type="danger" size="large" @click="login">登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'

  export default {
    components: {
      Header
    },
    data() {
      return {
        title: '登录',
        userInfo: {
          id_card: '1001',
          password: '123456'
        },
      }
    },
    methods: {
      login() {
        let formData = new FormData();
        formData.append('id_card', this.userInfo.id_card);
        formData.append('password', this.userInfo.password);
        this.$axios.post('/user/userLogin.do', formData).then(res => {
          if (res.code == 1) {
            this.$store.commit('CHANGE_USERINFO', res.data);
            // this.$router.push('/myparty');

            //根据store中set_token方法将token保存至sessionStorage中，
            // data["Authentication-Token"]，获取token的value值
            this.$store.commit('SET_TOKEN', res.token);

            if (this.$store.state.token) {
              this.$router.push('/myparty')
              // this.$router.replace({
              //   path: '/login',
              //   query: {redirect: this.$router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
              // })
              console.log(this.$store.state.token)
            } else {
              this.$router.replace('/login')
            }
          }
        }).catch(err => {
          console.log(err)
        })
      },
    }
  }
</script>

<style scoped lang="scss">
  .login-content {
    position: absolute;
    top: 43px;
    left: 0;
    right: 0;
    bottom: 0;
    height: auto;
    width: auto;
    background: #c50206;

    .logo {
      width: 374px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;
      img {
        display: block;
        width: 224px;
        height: 54px;
      }
    }
    .login-detail {
      width: 330px;
      height: 168px;
      margin: 0 auto;

      .van-cell {
        margin-bottom: 15px;
        background: #c50206;
        color: #fff;
        border: 1px solid #ff0;
        border-radius: 4px;
      }
    }
  }

</style>
