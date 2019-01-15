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
          <img class="market_img" v-for="(item,index) in marketList" :key="index" :src="item">
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
          <div class="moreImg">
            <div class="brand_text">
              <div style="position: absolute; top: 10px; left: 130px;">
                <p class="brand_text_1">海外制造商</p>
                <p>9.9元起</p>
              </div>
              <img src="http://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg">
            </div>
            <div class="brand_text">
              <div style="position: absolute; top: 10px; left: 130px;">
                <p class="brand_text_1">CK制造商</p>
                <p class="brand_text_2">25元起</p>
              </div>
              <img style="margin: 10px 10px 0 10px;" src="http://yanxuan.nosdn.127.net/c1e97be1b9730360c9c228b6a6448bca.png">
            </div>
            <div style="display: flex;flex-flow: nowrap column;">
              <div class="brand_text">
                <div style="position: absolute; top: 10px; left: 15px;">
                  <p class="brand_text_1">新秀丽制造商</p>
                  <p class="brand_text_2">34.9元起</p>
                </div>
                <img src="http://yanxuan.nosdn.127.net/957c8d117473d103b52ff694f372a346.png">
              </div>
              <div class="brand_text">
                <div style="position: absolute; top: 10px; left: 15px;">
                  <p class="brand_text_1">MUJI制造商</p>
                  <p class="brand_text_2">35元起</p>
                </div>
                <img src="http://yanxuan.nosdn.127.net/574cea67f235598950acdbae4b5bdd5b.jpg">
              </div>
            </div>
          </div>
        </div>
        <div class="newProject">
          <div class="title">
            <p>
              <span class="text_1">新品首发</span>
              <span class="text_2">为你寻觅世间好物</span>
            </p>
            <p class="text_3">更多新品></p>
          </div>
          <div style="display: flex;flex-flow: nowrap row; justify-content: center;">
            <div class="oneProject">
              <img src="https://yanxuan.nosdn.127.net/79dce49ffebf3b0fda025adcf802b80d.png?quality=95&thumbnail=265x265&imageView">
              <div>
                <span class="newProject_text_1">年货节特卖</span>
                <p>祺宴 糕饼礼盒 1.15千克</p>
                <p><span>￥149 </span><span class="delete">￥198</span></p>
              </div>
            </div>
            <div class="oneProject">
              <img src="https://yanxuan.nosdn.127.net/f25b1102215f6b22e833665bef22157f.png?quality=95&thumbnail=265x265&imageView">
              <div>
                <span  class="newProject_text_1">年货节特卖</span>
                <p>祺宴 坚果礼盒 840克</p>
                <p><span>￥225 </span><span class="delete">￥298</span></p>
              </div>
            </div>
            <div class="oneProject">
              <img src="https://yanxuan.nosdn.127.net/d0125f6c41beb964722a96bcc93c9c59.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView">
              <div>
                <span  class="newProject_text_1">吃货福利</span>
                <p>茅台王子酒 金王子53° 500毫升</p>
                <p><span>￥218 </span><span class="delete">￥388</span></p>
              </div>
            </div>
            <div class="oneProject">
              <img src="https://yanxuan.nosdn.127.net/a695a85621b21d2842435fe485b80f6b.jpg?quality=95&thumbnail=265x265&imageView&quality=95&thumbnail=265x265&imageView">
              <div>
                <span  class="newProject_text_1">满减</span>
                <p>西班牙制造 高浓VC保湿抗皱安瓶</p>
                <p><span>￥289 | </span><span style="color: #909399;"> 海外制造商</span></p>
              </div>
            </div>
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
              brandManufacturerList:[
                'http://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg',
                'http://yanxuan.nosdn.127.net/c1e97be1b9730360c9c228b6a6448bca.png',
                'http://yanxuan.nosdn.127.net/957c8d117473d103b52ff694f372a346.png',
                'http://yanxuan.nosdn.127.net/574cea67f235598950acdbae4b5bdd5b.jpg',
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
        .market_img{
          &:hover{
            transform: scale(1.01);
          }
        }
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
        padding-bottom: 50px;
        .moreImg{
          display: flex;
          flex-flow: nowrap;
          justify-content: center;
          img{
            margin-top: 10px;
          }
          .brand_text{
            position: relative;
            &:hover{
              transform: scale(1.02);
              transition: 0.35s;
            }
            .brand_text_1{
              font-size: 24px;
              font-weight: bold;
            }
          }
        }
      }
      .newProject{
        padding-bottom: 50px;
        .oneProject{
          display: flex;
          flex-flow: nowrap column;
          justify-content: center;
          margin-left: 10px;
          font-size: 14px;
          &:hover{
            background-color: #F5F5F5;
            transform: scale(1.01);
          }
          div{
            margin-top: 15px;
          }
          .newProject_text_1{
            background-color: #FF6347;
            color: #fff;
            padding: 2px 5px;
            margin: 10px 80px;
          }
          .delete{
            text-decoration:line-through;
            color: #909399;
          }
        }
      }
    }
  }
</style>
