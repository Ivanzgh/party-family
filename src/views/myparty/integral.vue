<template>
  <div class="integral">
    <Header :title="title"></Header>

    <div class="integral-img">
      <img src="/static/imgs/jifen.png" alt="">
      <span class="score">66.6</span>
    </div>

    <div>
      <div class="jfmx clearfix">
        <router-link to="/integralDetail">
          <img src="/static/imgs/lxjf.png" class="img-f fl" alt="">
          <span>积分明细</span>
          <img src="/static/imgs/right.png" class="img-r fr" alt="">
        </router-link>
      </div>
      <div class="jfgz clearfix">
        <span>积分规则</span>
        <img src="/static/imgs/wenhao.png" class="ji-img fr" alt="">
      </div>
      <div class="list">
        <div class="list-item clearfix"><span class="fl">登录APP</span><span class="fr">5</span></div>
        <div class="list-item clearfix"><span class="fl">完善个人信息</span><span class="fr">2</span></div>
        <div class="list-item clearfix"><span class="fl">查看积分</span><span class="fr">1</span></div>
        <div class="list-item clearfix"><span class="fl">按时缴纳党费</span><span class="fr">10</span></div>
        <div class="list-item clearfix"><span class="fl">查看通知</span><span class="fr">2</span></div>
        <div class="list-item clearfix"><span class="fl">了解学院工作动态</span><span class="fr">5</span></div>
        <div class="list-item clearfix"><span class="fl">上交思想汇报经审核通过</span><span class="fr">5</span></div>
        <div class="list-item clearfix"><span class="fl">主动学习相关文件</span><span class="fr">10</span></div>
        <div class="list-item clearfix"><span class="fl">认真撰写心得总结并上交，经审核通过</span><span class="fr">5</span></div>
        <div class="list-item clearfix"><span class="fl">提交个人总结，并参与评议</span><span class="fr">2</span></div>
        <div class="list-item clearfix"><span class="fl">积极参与互动</span><span class="fr">5</span></div>
        <div class="list-item clearfix"><span class="fl">学习党建知识</span><span class="fr">5</span></div>
        <div class="list-item clearfix"><span class="fl">学习党史</span><span class="fr">10</span></div>
        <div class="list-item clearfix"><span class="fl">创先争优事迹</span><span class="fr">10</span></div>
        <div class="list-item clearfix"><span class="fl">学党章，学习近平总书记系列讲话</span><span class="fr">10</span></div>
        <div class="list-item clearfix"><span>用镜头记录两学一做过程中令人感动的人和事</span><span class="fr">3</span></div>
        <div class="list-item clearfix"><span>关注并积极参与特色活动</span><span class="fr">5</span></div>
        <div class="list-item clearfix"><span>制度化、常态化建设</span><span class="fr">5</span></div>
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
        title: '个人量化积分'
      }
    }
  }
</script>

<style scoped lang="scss">
  .integral-img {
    position: relative;
    height: 144.92px;
    img {
      width: 375.33px;
      height: 144.92px;
    }
    .score {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 16px;

    }
  }

  .jfmx {
    width: 355.33px;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    color: #333;
    a {
      display: block;
      width: 355.33px;
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
      width: 8px;
      height: 16px;
      display: block;
      padding: 16px 0 0;
    }
  }

  .jfgz {
    width: 355.33px;
    height: 18px;
    font-size: 16px;
    color: #666;
    background: #e4e4e4;
    padding: 10px;
    .ji-img {
      display: block;
      width: 18px;
      height: 18px;
    }
  }

  .list-item {
    font-size: 16px;
    width: 345.33px;
    height: 24px;
    padding: 5px 15px;
    color: #666;
    border-bottom: 1px solid #ddd;
  }
</style>
