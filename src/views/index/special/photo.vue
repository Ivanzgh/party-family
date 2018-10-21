<template>
    <div class="activity">
      <Header :title="title"></Header>

      <div class="activity-warp">
        <div class="activity-item fl" v-for="(item,index) in photoData" :key="index">
          <img :src="item.pic" alt="">
          <div class="desc">{{item.title}}</div>
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
            title: '随时随地拍',
            photoData : []
          }
        },
      methods : {
          getPhotoData() {
            this.$axios.get('/news/newsList.do?page=1&rows=10&type=7').then(res => {
              if (res.code == 1) {
                this.photoData = res.rows
              }
            })
          }
      },
      created() {
          this.getPhotoData()
      }
    }
</script>

<style scoped lang="scss">
  .activity-item{
    width: 177px;
    height: 175px;
    margin: 15px;
    text-align: center;
    font-size: 14px;
    img{
      width: 175px;
      height: 131px;
    }
    .desc{
      width: 175px;
      height: 39px;
    }
  }
</style>
