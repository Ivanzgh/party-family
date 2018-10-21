<template>
  <div class="discuss">
    <Header :title="title"></Header>
    <div class="content" v-html="this.discussData.content"></div>
    <div class="branch" v-for="(item,index) in branchData" :key="index">
      <van-picker :columns="columns" @change="onChange" />
    </div>
    <div class="next">
      <router-link to="/attendPerson">
        <button>下一步</button>
      </router-link>
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
          title: '民主评议',
          discussData : {},
          branchData : [],
          columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
        }
      },
      methods : {
        onChange(picker, value, index) {
          Toast(`当前值：${value}, 当前索引：${index}`);
        },
        getBranchData() {
          this.$axios.get('/branch/findAll.do').then(res => {
            if (res.code == 1 ) {
              this.branchData = res.rows
            }
          })
        },
        getDiscussData() {
          this.$axios.get('/nationComment/getComment.do').then(res => {
              console.log(res)
              this.discussData = res
          })
        }
      },
      created() {
        this.getBranchData()
        this.getDiscussData()
      }
    }
</script>

<style scoped lang="scss">
  .content{
    width: 414px;
    height: 400px;
  }
</style>
