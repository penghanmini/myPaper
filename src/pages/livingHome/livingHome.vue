/**
* 作者: penghan
* 日期: 2019-01-15
* 描述:
*/
<template>
    <div class="livingHome">
      <el-carousel :interval="5000" arrow="always" height="420">
        <el-carousel-item v-for="(item,index) in carouselList" :key="index">
          <img :src="item.src">
        </el-carousel-item>
      </el-carousel>
      <div class="main">
        <div class="main_1">
          <div class="category">
            <div class="subtitle">分类：</div>
            <span v-for="item in categoryList" :key="item.categoryId" :class="{'active': item.active}" @click="clickCategory(item)">{{item.name}}</span>
          </div>
          <div class="address">
            <div class="subtitle">配送地区：</div>
            <span v-for="item in addressList" :key="item.id" :class="{'active': item.active}" @click="clickAddress(item)">{{item.addressCnName}}</span>
          </div>
        </div>
        <div class="main_2" v-for="data in mainData">
          <div style="margin-bottom: 40px;">
            <p style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">{{data.title}}</p>
            <p>{{data.remark}}</p>
          </div>
          <div style="display: flex; flex-flow: wrap; justify-content: initial;">
            <div class="oneGoods" v-for="item in data.goodsList" :key="item.id" @click="toProductDetail(item)">
              <img style="height: 245px; width: 245px;" :src="item.samllimg">
              <div style="margin-top: 15px; border-bottom: 1px solid #E4E7ED;">
                <span class="newProject_text_1" :class="{'noNull': item.activeText}">{{item.activeText}}</span>
                <p>{{item.name}}</p>
                <p><span style="color: #d7282d">{{item.newprice}}</span><span class="delete">{{item.oldprice}}</span></p>
              </div>
              <p v-if="item.remark && item.remark.length<=15" style="color: #909399;">{{item.remark}}</p>
              <p v-if="item.remark && item.remark.length>15" style="color: #909399;">{{item.remark.substr(0,15) + '...'}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import layoutApi from '@/api/layoutApi'
  import livingHomeApi from '@/api/livingHomeApi'
    export default {
        name: "livingHome",
        components: {},
        props: [],
        data() {
            return {
              carouselList: [],
              categoryList:[],
              addressList:[],
              mainData: [
                {title: '床品件套',remark: '甄选品质，睡眠美学',goodsList: []},
                {title: '被枕垫褥',remark: '陷入柔暖，美梦时刻',goodsList: []},
                {title: '家具',remark: '品质家具，质感生活',goodsList: []},
                {title: '灯具',remark: '一盏灯，温暖一个家',goodsList: []},
                {title: '收纳',remark: '收纳神器大集结',goodsList: []},
                {title: '布艺软装',remark: '趣意点缀，家中有格',goodsList: []},
                {title: '家饰',remark: '装点家的格调',goodsList: []},
                {title: '旅行用品',remark: '出行小物，贴心相伴',goodsList: []},
                {title: '晾晒除味',remark: '居家晾晒必备好物',goodsList: []},
                {title: '家庭医疗',remark: '专业家庭医用好物',goodsList: []},
                {title: '宠物',remark: '抑菌除味，打造宠物舒适空间',goodsList: []},
              ],
            }
        },
        mounted() {
          this.initData();
          this.getGoodsList();
        },
        methods: {
          //初始化页面
          initData(){
            let vm = this;
            //轮播图
            layoutApi.carousel({
              carouselType: 2
            }).then(({data})=>{
              vm.carouselList = data.data;
            })
            //分类
            layoutApi.getCategory({
              category: 'category_1',
            }).then(({data})=>{
              data.data.forEach((v)=>{
                v.active = false;
              })
              data.data.unshift({
                category: 'category_1',
                name: '全部',
                secondCate: 0,
                active: true,
              })
              vm.categoryList = data.data;
            })
            //配送地区
            layoutApi.address().then(({data})=>{
              data.data.forEach((v)=>{
                v.active = false
              })
              data.data.unshift({
                addressCnName: "全部",
                category: "0",
                active: true,
                id: 0
              })
              vm.addressList = data.data;
            })
          },
          //获取二级分类
          getGoodsList(){
            let vm = this;
            for(let i=0;i<vm.mainData.length;i++){
              livingHomeApi.goodsList({
                type: i+1,
              }).then(({data})=>{
                vm.mainData[i].goodsList=data.data;
              })
            }
          },
          //选择一级分类
          clickCategory(row){
            let vm = this
            if(row.active){return false;}
            else{
              vm.categoryList.forEach((v)=>{
                v.active = false
              })
              row.active = true;
            }
          },
          //选择收货地址
          clickAddress(row){
            let vm = this
            if(row.active){return false;}
            else{
              vm.addressList.forEach((v)=>{
                v.active = false
              })
              row.active = true;
            }
          },
          //点击商品进入详情页
          toProductDetail(row){
            this.$router.push({
              path: "/productDetails",
              query:{
                id: row.id,
              }
            })
          },
        }
    }
</script>

<style scoped lang='less'>
  .livingHome{
    padding: 50px 410px;
    background-color: #F5F5F5;
    font-size: 14px;
    .main{
      margin: 50px 0px;
      padding: 15px 25px;
      background-color: #fff;
      .main_1{
        text-align: left;
        .active{
          color: #b4a078;
        }
        .category{
          display: flex;
          flex-flow: nowrap row;
          padding: 20px 0;
          border-bottom: 1px dashed #E4E7ED;
          .subtitle{
            width: 70px;
            color: #999;
          }
          span{
            padding: 0 15px;
            cursor: pointer;
            &:hover{
              color: #b4a078;
            }
          }
        }
        .address{
          display: flex;
          flex-flow: nowrap row;
          padding: 20px 0;
          border-bottom: 1px solid #E4E7ED;
          .subtitle{
            width: 70px;
            color: #999;
          }
          span{
            padding: 0 15px;
            cursor: pointer;
            &:hover{
              color: #b4a078;
            }
          }
        }
      }
      .main_2{
        margin: 50px 0px;
        .oneGoods{
          display: flex;
          flex-flow: nowrap column;
          justify-content: center;
          margin-left: 10px;
          font-size: 14px;
          &:hover{
            background-color: #F5F5F5;
            transform: scale(1.01);
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
