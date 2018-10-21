<template>
  <div class="userinfo">
    <div class="common-header clearfix">
      <van-icon name="arrow-left" style="padding-top: 10px;float: left;"
                @click.native="handleClick"/>
      个人信息
      <div class="update fr" @click="update" v-if="{isDisabled : true}">编辑</div>
      <div class="update fr" @click="save" v-else>保存</div>
    </div>
    <div class="hehe" style="height: 44px;"></div>
    <div class="info-list ">
      <ul>
        <!--<li class="van-cell clearfix">-->
          <!--<span class="left">头像</span>-->
          <!--<div class="img-warp">-->
            <!--<img :src="this.$store.state.userInfo.header" alt="" class="fr">-->
          <!--</div>-->
        <!--</li>-->
        <li class="van-cell">
          <span class="left">姓名</span>
          <div class="img-warp">
            <van-field class="fr" type="text" :disabled="isDisabled"
                       v-model="userInfo.username">
            </van-field>
          </div>
        </li>
        <!--<li class="van-cell">-->
          <!--<span class="left">身份证号</span>-->
          <!--<div class="img-warp">-->
            <!--<span class="fr">{{this.$store.state.userInfo.id}}</span>-->
          <!--</div>-->
        <!--</li>-->
        <!--<li class="van-cell">-->
          <!--<span class="left">家庭住址</span>-->
          <!--<div class="img-warp">-->
            <!--<span class="fr">{{this.$store.state.userInfo.hometown}}</span>-->
          <!--</div>-->
        <!--</li>-->
        <!--<li class="van-cell">-->
          <!--<span class="left">工作地址</span>-->
          <!--<div class="img-warp">-->
            <!--<span class="fr">{{this.$store.state.userInfo.address}}</span>-->
          <!--</div>-->
        <!--</li>-->
        <!--<li class="van-cell">-->
          <!--<span class="left">民族</span>-->
          <!--<div class="img-warp">-->
            <!--<span class="fr">{{this.$store.state.userInfo.nation}}</span>-->
          <!--</div>-->
        <!--</li>-->
        <!--<li class="van-cell">-->
          <!--<span class="left">微信号</span>-->
          <!--<div class="img-warp">-->
            <!--<span class="fr">{{this.$store.state.userInfo.wxNum}}</span>-->
          <!--</div>-->
        <!--</li>-->
        <!--<li class="van-cell">-->
          <!--<span class="left">qq号</span>-->
          <!--<div class="img-warp">-->
            <!--<span class="fr">{{this.$store.state.userInfo.qqNum}}</span>-->
          <!--</div>-->
        <!--</li>-->
        <!--<li class="van-cell">-->
          <!--<span class="left">性别</span>-->
          <!--<div class="img-warp">-->
            <!--<span class="fr">{{this.$store.state.userInfo.sex}}</span>-->
          <!--</div>-->
        <!--</li>-->
        <!--<li class="van-cell">-->
          <!--<span class="left">最高学历</span>-->
          <!--<div class="img-warp">-->
            <!--<span class="fr">{{this.$store.state.userInfo.education}}</span>-->
          <!--</div>-->
        <!--</li>-->
        <!--<li class="van-cell">-->
          <!--<span class="left">职称</span>-->
          <!--<div class="img-warp">-->
            <!--<span class="fr">{{this.$store.state.userInfo.jobRank}}</span>-->
          <!--</div>-->
        <!--</li>-->
        <!--<li class="van-cell">-->
          <!--<span class="left">薪资水平</span>-->
          <!--<div class="img-warp">-->
            <!--<span class="fr">{{this.$store.state.userInfo.salary}}</span>-->
          <!--</div>-->
        <!--</li>-->
        <!--<li class="van-cell">-->
          <!--<span class="left">入党时间</span>-->
          <!--<div class="img-warp">-->
            <!--<span class="fr">{{this.$store.state.userInfo.joinPartyTime}}</span>-->
          <!--</div>-->
        <!--</li>-->
        <!--<li class="van-cell">-->
          <!--<span class="left">党费最后缴纳时间</span>-->
          <!--<div class="img-warp">-->
            <!--<span class="fr">{{this.$store.state.userInfo.lastPayTime}}</span>-->
          <!--</div>-->
        <!--</li>-->
        <!--<li class="van-cell">-->
          <!--<span class="left">当前身份</span>-->
          <!--<div class="img-warp">-->
            <!--<span class="fr">{{this.$store.state.userInfo.partyIdentity}}</span>-->
          <!--</div>-->
        <!--</li>-->
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: {},
        isDisabled: true
      }
    },
    methods: {
      handleClick() {
        this.$router.push('/myparty')
      },
      getUserInfo() {
        this.$axios.get('/user/userInfo.do').then(res => {
          if (res.code == 1) {
            this.userInfo = res.data
            console.log(res.data)
          }
        })
      },
      update() {
        this.isDisabled = false;
      },
      save() {
        let formData = new FormData();
        formData.append('username', this.userInfo.username);
        this.$axios.post('/user/modifyInfo.do', formData).then(res => {
          this.$store.commit('CHANGE_USERINFO', this.userInfo);
          this.isDisabled = true;
          // this.getUserInfo()
        })
      }
    },
    created() {
      this.getUserInfo()
    }
  }
</script>

<style scoped lang="scss">
  .info-list {
    height: 100%;
    .van-cell {
      line-height: 30px;
      border-bottom: 1px solid #ddd;
      .left {
        width: 50%;
      }
      .img-warp {
        width: 50%;
      }
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
</style>
