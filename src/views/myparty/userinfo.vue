<template>
  <div class="userinfo">
    <div class="common-header clearfix">
      <van-icon name="arrow-left" style="padding-top: 10px;float: left;"
                @click.native="handleClick"/>
      个人信息
      <div class="update fr" @click="update" v-if="isDisabled">编辑</div>
      <div class="update fr" @click="save" v-else>保存</div>
    </div>
    <div class="hehe" style="height: 44px;"></div>
    <div class="info-list ">
      <ul>
        <li class="van-cell clearfix">
          <span class="left fl">头像</span>
          <div class="img-warp fr">
            <van-uploader :after-read="onRead" :disabled="isDisabled">
              <img :src="userInfo.header" alt="" class="fr" ref="userImg" v-model="userInfo.header">
            </van-uploader>
          </div>
        </li>
        <li class="van-cell clearfix">
          <span class="left fl">姓名</span>
          <div class="img-warp fr">
            <van-field class="fr van-filed" type="text" :disabled="isDisabled"
                       v-model="userInfo.username" input-align="right">
            </van-field>
          </div>
        </li>
        <li class="van-cell">
          <span class="left">身份证号</span>
          <div class="img-warp">
            <van-field class="fr van-filed" type="text" :disabled="isDisabled"
                       v-model="userInfo.id" input-align="right">
            </van-field>
          </div>
        </li>
        <li class="van-cell">
          <span class="left">家庭住址</span>
          <div class="img-warp">
            <van-field class="fr van-filed" type="text" :disabled="isDisabled"
                       v-model="userInfo.hometown" input-align="right">
            </van-field>
          </div>
        </li>
        <li class="van-cell">
          <span class="left">工作地址</span>
          <div class="img-warp">
            <van-field class="fr van-filed" type="text" :disabled="isDisabled"
                       v-model="userInfo.address" input-align="right">
            </van-field>
          </div>
        </li>
        <li class="van-cell">
          <span class="left">民族</span>
          <div class="img-warp">
            <van-field class="fr van-filed" type="text" :disabled="isDisabled"
                       v-model="userInfo.nation" input-align="right">
            </van-field>
          </div>
        </li>
        <li class="van-cell">
          <span class="left">微信号</span>
          <div class="img-warp">
            <van-field class="fr van-filed" type="text" :disabled="isDisabled"
                       v-model="userInfo.wxNum" input-align="right">
            </van-field>
          </div>
        </li>
        <li class="van-cell">
          <span class="left">qq号</span>
          <div class="img-warp">
            <van-field class="fr van-filed" type="text" :disabled="isDisabled"
                       v-model="userInfo.qqNum" input-align="right">
            </van-field>
          </div>
        </li>
        <li class="van-cell">
          <span class="left">性别</span>
          <div class="img-warp">
            <van-field class="fr van-filed" type="text" :disabled="isDisabled"
                       v-model="userInfo.sex" input-align="right">
            </van-field>
          </div>
        </li>
        <li class="van-cell">
          <span class="left">最高学历</span>
          <div class="img-warp">
            <van-field class="fr van-filed" type="text" :disabled="isDisabled"
                       v-model="userInfo.education" input-align="right">
            </van-field>
          </div>
        </li>
        <li class="van-cell">
          <span class="left">职称</span>
          <div class="img-warp">
            <van-field class="fr van-filed" type="text" :disabled="isDisabled"
                       v-model="userInfo.jobRank" input-align="right">
            </van-field>
          </div>
        </li>
        <li class="van-cell">
          <span class="left">薪资水平</span>
          <div class="img-warp">
            <van-field class="fr van-filed" type="text" :disabled="isDisabled"
                       v-model="userInfo.salary" input-align="right">
            </van-field>
          </div>
        </li>
        <li class="van-cell">
          <span class="left">入党时间</span>
          <div class="img-warp">
            <van-field class="fr van-filed" type="text" :disabled="isDisabled"
                       v-model="userInfo.joinPartyTime" input-align="right">
            </van-field>
          </div>
        </li>
        <li class="van-cell">
          <span class="left">党费最后缴纳时间</span>
          <div class="img-warp">
            <van-field class="fr van-filed" type="text" :disabled="isDisabled"
                       v-model="userInfo.lastPayTime" input-align="right">
            </van-field>
          </div>
        </li>
        <li class="van-cell">
          <span class="left">当前身份</span>
          <div class="img-warp">
            <van-field class="fr van-filed" type="text" :disabled="isDisabled"
                       v-model="userInfo.partyIdentity" input-align="right">
            </van-field>
          </div>
        </li>
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
      onRead(file) {
        console.log(file);
        //将原图片显示为选择的图片
        this.$refs.userImg.src = file.content;
      },
      getUserInfo() {
        this.$axios.get('/user/userInfo.do').then(res => {
          if (res.code == 1) {
            this.userInfo = res.data
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
      height: 50px;
      .left {
        width: 50%;
      }
      .img-warp {
        width: 50%;
        .van-filed {
          padding: 0;
        }
      }
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
</style>
