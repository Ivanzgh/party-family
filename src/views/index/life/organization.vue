<template>
  <div class="map">
    <Header :title="title"></Header>

    <div id="container" class="container"></div>
  </div>
</template>

<script>
  import Header from '../../../components/Header'
  // import BMap from 'BMap'
  export default {
    components: {
      Header
    },
    data() {
      return {
        title: '流动党员找组织'
      }
    },
    methods: {

      initBap() {
        var map = new BMap.Map("container"); // 创建地图实例
        var point = new BMap.Point(116.331398, 39.897445); // 创建点坐标
        map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.ScaleControl());
        map.addControl(new BMap.OverviewMapControl());
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用

// var opts = {type: BMAP_NAVIGATION_CONTROL_ZOOM}
// map.addControl(new BMap.NavigationControl(opts)); 自定义控件

      }
    },
    mounted() {
      this.initBap()
    }
  }
</script>

<style scoped lang="scss">
  html {
    height: 100%
  }

  body {
    height: 100%;
    margin: 0px;
    padding: 0px
  }

  #container {
    height: 1070px;
  }
</style>
