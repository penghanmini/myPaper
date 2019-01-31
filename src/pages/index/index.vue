/**
* 作者: penghan
* 日期: 2019-01-15
* 描述:
*/
<template>
    <div class="index">
      <el-carousel :interval="5000" arrow="always" height="420">
        <el-carousel-item v-for="(item,index) in carouselList" :key="index">
          <img :src="item.src">
        </el-carousel-item>
      </el-carousel>
      <div class="main">
        <!--年货集市-->
        <div class="market">
          <img src="https://yanxuan.nosdn.127.net/15468656784950180.png"/>
          <img class="market_img" @click="handleMarket(item)" v-for="(item,index) in marketList" :key="index" :src="item.src">
        </div>
        <!--品牌制造商-->
        <div class="brandManufacturer">
          <div class="title">
            <p>
              <span class="text_1">品牌制造商</span>
              <span class="text_2">工厂直达消费者，剔除品牌溢价</span>
            </p>
            <p class="text_3" @click="toBrand">更多制造商></p>
          </div>
          <div class="moreImg">
            <div class="brand_text" @click="toBrand">
              <div style="position: absolute; top: 10px; left: 130px;">
                <p class="brand_text_1">海外制造商</p>
                <p>9.9元起</p>
              </div>
              <img src="http://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg">
            </div>
            <div class="brand_text" @click="toBrand">
              <div style="position: absolute; top: 10px; left: 130px;">
                <p class="brand_text_1">CK制造商</p>
                <p class="brand_text_2">25元起</p>
              </div>
              <img style="margin: 10px 10px 0 10px;" src="http://yanxuan.nosdn.127.net/c1e97be1b9730360c9c228b6a6448bca.png">
            </div>
            <div style="display: flex;flex-flow: nowrap column;">
              <div class="brand_text" @click="toBrand">
                <div style="position: absolute; top: 10px; left: 15px;">
                  <p class="brand_text_1">新秀丽制造商</p>
                  <p class="brand_text_2">34.9元起</p>
                </div>
                <img src="http://yanxuan.nosdn.127.net/957c8d117473d103b52ff694f372a346.png">
              </div>
              <div class="brand_text" @click="toBrand">
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
            <p class="text_3" @click="toNewProduct">更多新品></p>
          </div>
          <div style="display: flex; flex-flow: wrap; justify-content: initial;padding: 20px 400px 50px 400px;">
            <div class="oneGoods" v-for="item in newProjectList"  @click="toProductDetails(item)">
              <img :src="item.samllimg">
              <div style="margin-top: 15px; border-bottom: 1px solid #E4E7ED;">
                <span class="newProject_text_1" :class="{'noNull': item.activeText}">{{item.activeText}}</span>
                <p>{{item.name}}</p>
                <p><span style="color: #d7282d">{{item.newPrice}}</span><span class="delete">{{item.oldPrice}}</span></p>
              </div>
              <p style="color: #909399;" v-if="item.remark && item.remark.length<=15">{{item.remark}}</p>
              <p style="color: #909399;" v-if="!item.remark">{{item.remark}}</p>
              <p style="color: #909399;" v-else-if="item.remark && item.remark.length>15">{{item.remark.substr(0,15)+"..."}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import layoutApi from '@/api/layoutApi'
  import indexApi from '@/api/indexApi'
    export default {
        name: "index",
        components: {},
        props: [],
        data() {
            return {
              carouselList:[],
              marketList: [],
              newProjectList: [],
            }
        },
        mounted() {
          this.getCarousel()
        },
        methods: {
          //页面初始化
          getCarousel(){
            //获取首页轮播图
            layoutApi.carousel({
              carouselType: 1
            }).then(({data})=>{
              this.carouselList = data.data;
            })
            //首页集市
            indexApi.indexMarket().then(({data})=>{
              this.marketList = data.data
            })
            //新品首发
            indexApi.indexNewProject().then(({data})=>{
              this.newProjectList = data.data;
            })
          },
          //点击集市图片
          handleMarket(row){
            this.$router.push({
              path: "/" + row.belong,
            })
          },
          //进入品牌制造商
          toBrand(){
            this.$router.push({
              path: "/brandManufacturer",
            })
          },
          //进入新品页面
          toNewProduct(){
            this.$router.push({
              path: "/newProduct",
            })
          },
          toProductDetails(row){
            this.$router.push({
              path: "/productDetails",
              query:{
                id: row.id,
              }
            })
          }
        },
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
          cursor: pointer;
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
        .oneGoods{
          display: flex;
          flex-flow: nowrap column;
          justify-content: center;
          margin-right: 10px;
          font-size: 14px;
          &:hover{
            background-color: #F5F5F5;
            transform: scale(1.01);
          }
          img{
            width: 265px;
            height: 265px;
          }
          .newProject_text_1{
            background-color: #FF6347;
            color: #fff;
            margin: 10px 80px;
          }
          .noNull{
            padding: 2px 5px;
          }
        }
      }
    }
  }
</style>
