<template>
  <div>
    <Header :title="title"></Header>
    <div class="update-password">
      <p>旧密码：</p>
      <input type="password" class="input">
      <p>新密码：</p>
      <input type="password" class="input">
      <p>确定密码：</p>
      <input type="password" class="input">
      <van-button type="danger" size="large">确定</van-button>
    </div>
  </div>

</template>

<script>
  import Header from '../../components/Header'
  export default {
    components : {
      Header
    },
    data() {
      return {
        title: '修改密码'
      }
    },
  }
</script>

<style scoped lang="scss">
  .update-password {
    width: 331px;
    height: 315px;
    margin: 60px auto;
    p{
      font-size: 18px;
    }

    .input {
      height: 46px;
      width: 331px;
      margin: 10px 0;
      border: 1px solid #999;
      border-radius: 6px;
    }
  }
</style>
