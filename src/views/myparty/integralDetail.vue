<template>
    <div class="integralDetail">
      <Header :title="title"></Header>
      <div class="list">
        <div class="list-item" v-for="(item,index) in integralData" :key="index">
          <div class="clearfix">
            <div class="info fl">{{item.typeName}}</div>
            <div class="score fr">+{{item.singleDesc}}</div>
          </div>
          <div class="date">{{item.timeFormat}}</div>
        </div>
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
          title : '积分明细',
          integralData : []
        }
      },
      methods: {
        getIntegralDetail() {
          this.$axios.get('/integral/integralList.do?page=1&rows=10').then(res => {
            console.log(res.rows)
            if (res.code == 1) {
              this.integralData = res.rows
            }
          })
        }
      },
      created() {
        this.getIntegralDetail()
      }
    }
</script>

<style scoped lang="scss">
  .list-item{
    width: 382px;
    height: 48px;
    padding: 16px;
    .info{
      width: 126px;
      height: 20px;
      font-size: 18px;
      margin-bottom: 8px;
    }
    .score{
      color: #f00;
    }
    .date{
      width: 126px;
      height: 20px;
      font-size: 12px;
    }
  }
</style>
