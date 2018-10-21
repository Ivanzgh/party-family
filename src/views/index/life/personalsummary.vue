<template>
  <div class="personalsummary">
    <Header :title="title"></Header>
    <div class="content">
      <div class="upload-img ">
        <!--显示图片-->
        <div v-for="(img,index) in dynamicPics">
          <img class="img-add" :src="img" @click="clickImg(img,index)"/>
        </div>
        <div v-show="isAddImg">
          <van-uploader :after-read="onRead" accept="image/*" multiple>
            <img class="img-add" src="/static/imgs/upload.png"/>
          </van-uploader>
        </div>
        <!--弹窗-->
        <van-dialog v-model="isSelectImg"  @click="previewImg"></van-dialog>
      </div>

      <van-button class="btn" type="danger" size="large" @click="handleClick">提交</van-button>
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
        title: '个人总结',
        dynamicPics: [],     //存放添加图片
        isSelectImg: false,  //开启弹窗标志
        viewImg: {},         //放置预览图片信息
      }
    },

    computed: {
      isAddImg() {
        //如果已经9张了，isAddImg为false，隐藏加号
        if (this.dynamicPics.length >= 9) {
          return false;
        } else {
          return true;
        }
      },
    },

    methods: {
      onRead(file) {
        this.$axios.post('/image/uploadBase64.do').then(res => {
          this.dynamicPics.push(file.content);
        })
      },
      //点击图片事件
      clickImg(url, index) {
        //获得图片的url和index，传给弹窗
        this.viewImg = {
          url: url,
          index: index,
        };
        //打开弹窗
        this.isSelectImg = true;

      },

      //预览图片返回
      previewImg(value) {
        //关闭弹窗
        this.isSelectImg = false;
        //点击删除时，返回图片在数组中的index
        if (value !== null) {
          console.log('删除图片', value.index);
          this.dynamicPics.splice(value.index, 1);
        }
      },


      handleClick() {
        this.$axios.post('/nationComment/submitSummary.do').then(res => {
          if (res.code == 1) {
            Toast('个人总结提交成功~');
          } else {
            Toast('个人总结不能重复提交')
          }
        })
      },
    }
  }
</script>

<style scoped lang="scss">
  .content {
    height: 500px;
    position: relative;
    .upload-img {
      width: 118px;
      height: 118px;
      margin: 20px;
      img {
        width: 118px;
        height: 118px;
      }
    }
    .btn {
      position: absolute;
      top: 100%;
    }
  }
</style>
