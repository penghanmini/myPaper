/**
* 作者: penghan
* 日期: 2019-01-18
* 描述:
*/
<template>
    <div class="cloth">
      <el-carousel :interval="5000" arrow="always" height="420">
        <el-carousel-item v-for="(item,index) in carouselList" :key="index">
          <img :src="item.src">
        </el-carousel-item>
      </el-carousel>
      <div class="main">
        <div class="main_1">
          <div class="category">
            <div class="subtitle">分类：</div>
            <div style="display: flex; flex-flow: wrap row;">
              <span v-for="item in categoryList" :key="item.categoryId" :class="{'active': item.active}" @click="clickCategory(item)">{{item.name}}</span>
            </div>
          </div>
          <div class="address">
            <div class="subtitle">配送地区：</div>
            <span v-for="item in addressList" :key="item.id" :class="{'active': item.active}" @click="clickAddress(item)">{{item.addressCnName}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import layoutApi from '@/api/layoutApi'
  import clothApi from '@/api/clothApi'
    export default {
        name: "cloth",
        components: {},
        props: [],
        data() {
            return {
              carouselList: [],
              categoryList:[],
              addressList:[],
            }
        },
        mounted() {
          let vm = this;
          vm.initData();
        },
        methods: {
          //页面初始化
          initData(){
            let vm = this;
            //轮播图
            layoutApi.carousel({
              carouselType: 4
            }).then(({data})=>{
              vm.carouselList = data.data;
            })
            //分类
            layoutApi.getCategory({
              category: 'category_3',
            }).then(({data})=>{
              data.data.forEach((v)=>{
                v.active = false;
              })
              data.data.unshift({
                category: 'category_3',
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
        }
    }
</script>

<style scoped lang='less'>
  .cloth{
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
            width: 100px;
            line-height: 30px;
            color: #999;
          }
          span{
            padding: 0 15px;
            line-height: 30px;
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
