/**
* 作者: penghan
* 日期: 2019-01-15
* 描述:
*/
<template>
    <div class="index">
      <el-carousel :interval="5000" arrow="always" height="420">
        <el-carousel-item v-for="(item,index) in carouselList" :key="index">
          <img :src="item">
        </el-carousel-item>
      </el-carousel>
      <div class="main">
        <!--年货集市-->
        <div class="market">
          <img src="https://yanxuan.nosdn.127.net/15468656784950180.png"/>
          <img v-for="(item,index) in marketList" :key="index" :src="item">
        </div>
        <!--品牌制造商-->
        <div class="brandManufacturer">
          <div class="title">
            <p>
              <span class="text_1">品牌制造商</span>
              <span class="text_2">工厂直达消费者，剔除品牌溢价</span>
            </p>
            <p class="text_3">更多制造商></p>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        components: {},
        props: [],
        data() {
            return {
              carouselList:[
                'https://yanxuan.nosdn.127.net/92ef3b8c5a071205881fc3d2dd239a2e.jpg?imageView&quality=95&thumbnail=1920x420',
                'https://yanxuan.nosdn.127.net/81d976a1372ba92e1df73c96e4a447e8.jpg?imageView&quality=95&thumbnail=1920x420',
                'https://yanxuan.nosdn.127.net/ef9b42036d43e8fe0edbe4d722cbaa7b.jpg?imageView&quality=95&thumbnail=1920x420',
                'https://yanxuan.nosdn.127.net/ece59ae8e8a70ded51a387055e19fcf0.jpg?imageView&quality=95&thumbnail=1920x420',
                'https://yanxuan.nosdn.127.net/ece59ae8e8a70ded51a387055e19fcf0.jpg?imageView&quality=95&thumbnail=1920x420',
                'https://yanxuan.nosdn.127.net/0c90345ede8cc7b4e959ae113f701d95.jpg?imageView&quality=95&thumbnail=1920x420',
                'https://yanxuan.nosdn.127.net/d763efe3fe66123069fe0705b158de54.jpg?imageView&quality=95&thumbnail=1920x420',
                'https://yanxuan.nosdn.127.net/f4766822f76274a3987466280d1c0d38.jpg?imageView&quality=95&thumbnail=1920x420',
              ],
              marketList: [
                'https://yanxuan.nosdn.127.net/15468656849650181.png',
                'https://yanxuan.nosdn.127.net/15468657004320182.png',
                'https://yanxuan.nosdn.127.net/15469338844231471.png',
                'https://yanxuan.nosdn.127.net/15468657087870184.png',
                'https://yanxuan.nosdn.127.net/15469338976701472.png',
                'https://yanxuan.nosdn.127.net/15468657715450186.png',
                'https://yanxuan.nosdn.127.net/15468657745740187.png',
                'https://yanxuan.nosdn.127.net/15470888713462407.png',
                'https://yanxuan.nosdn.127.net/15468658381750192.png',
                'https://yanxuan.nosdn.127.net/15468658414510193.png',
                'https://yanxuan.nosdn.127.net/15468658456620194.png',
                'https://yanxuan.nosdn.127.net/15468658499210195.png',
              ],
            }
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style scoped lang='less'>
  .index{
    margin-top: 20px;
    /deep/.el-carousel__container{
      height: 420px;
    }
    .main{
      .market{
        background-color: #F5DEB3;
        padding: 0 300px;
        padding-bottom: 50px;
      }
      .title{
        padding: 0 400px;
        display: flex;
        flex-flow: nowrap;
        justify-content: space-between;
        .text_1{
          font-size: 28px;
          font-weight: bold;
        }
        .text_2{
          font-size: 14px;
        }
        .text_3{
          font-size: 14px;
          line-height: 40px;
        }
      }
      .brandManufacturer{

      }
    }
  }
</style>
