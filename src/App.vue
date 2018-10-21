<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .clearfix::after{
    content: '';
    clear: both;
    display: block;
    visibility: hidden;
    height: 0;
    width: 0;
  }
  .common-header{
    padding: 0 10px;
    margin: 0 auto;
    color: #fff ;
    background: #c50206;
    font-size: 18px;
    text-align: center;
    width: 394px;
    height: 44px;
    line-height: 43px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
</style>
