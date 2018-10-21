<template>
    <div class="review">
      <Header :title="title"></Header>
      <div class="content">
        <div class="content-warp">
          <div class="btn">
            <router-link to="/personalsummary">
              <van-button  type="danger" size="normal" class="van-btn">个人总结</van-button>
            </router-link>
          </div>
          <div class="btn">
            <router-link to="/discuss">
              <van-button  type="danger" size="normal" class="van-btn">民主评议</van-button>
            </router-link>
          </div>
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
            title : '民主评议'
          }
        }
    }
</script>

<style scoped lang="scss">
  .content{
    width: 100%;
    height: 100%;
    .content-warp{
      width: 414px;
      height: 154px;
      position: absolute;
      top: 30%;
      .btn{
        padding: 10px;
        text-align: center;
        .van-btn{
          width: 217px;
          height: 57px;
        }
      }
    }
  }

</style>
