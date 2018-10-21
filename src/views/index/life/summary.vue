<template>
  <div class="think">
    <Header :title="title"></Header>
    <div class="thinkinfo">
      <div class="think-img">
        <img src="/static/imgs/reviewing.png" alt="">
      </div>
      <div class="desc">
        <span>正在审核中</span>
      </div>
      <div class="think-btn">
        <button class="btn" @click="handleClick">关闭</button>
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
        title: '心得总结'
      }
    },
    methods: {
      getThink() {
        this.$axios.get('/report/reportInfo.do?user_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHQiOjE1NDA1NDA5NjExNjMsInVpZCI6MiwicHdkIjoiZTEwYWRjMzk0OWJhNTlhYmJlNTZlMDU3ZjIwZjg4M2UiLCJpYXQiOjE1Mzk5MzYxNjExNjN9.WeS8V4xFWpIAPTJIUp1m05-bP3CNpHJDAu_5VloMXfg')
          .then(res => {
            this.thinkData = res
          })
      },
      handleClick() {
        this.$router.back(-1)
      }
    }
  }
</script>

<style scoped lang="scss">
  .thinkinfo {
    margin: 0 auto ;
    .think-img{
      margin-top: 50px;
      width: 414px;
      height: 106px;
      text-align: center;
      img{
        width: 101px;
        height: 101px;
      }
    }
    .desc{
      text-align: center;
      width: 394px;
      height: 20px;
      font-size: 14px;
      color: #666;
      padding: 10px;
    }
    .think-btn{
      width: 414px;
      height: 150px;
      text-align: center;
      .btn{
        width: 249px;
        height: 40px;
        line-height: 40px;
        margin-top: 80px;
        color: #fff;
        font-size: 16px;
        background: #c50206;
        border-radius: 10px;
      }
    }

  }
</style>
