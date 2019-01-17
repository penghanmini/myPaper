/**
* 作者: penghan
* 日期: 2019-01-09
* 描述:
*/
<template>
  <div class="panda">
    <headers></headers>
    <headerSearch></headerSearch>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="首页" name="1">
        <index></index>
      </el-tab-pane>
      <el-tab-pane label="居家" name="2">
        <livingHome></livingHome>
      </el-tab-pane>
      <el-tab-pane label="鞋包配饰" name="3">
        <shoeBag></shoeBag>
      </el-tab-pane>
      <el-tab-pane label="服装" name="4">服装</el-tab-pane>
      <el-tab-pane label="电器" name="5">电器</el-tab-pane>
      <el-tab-pane label="洗护" name="6">洗护</el-tab-pane>
      <el-tab-pane label="饮食" name="7">饮食</el-tab-pane>
      <el-tab-pane label="餐厨" name="8">餐厨</el-tab-pane>
      <el-tab-pane label="婴童" name="9">婴童</el-tab-pane>
      <el-tab-pane label="文体" name="10">文体</el-tab-pane>
      <el-tab-pane label="特色区" name="11">特色区</el-tab-pane>
    </el-tabs>
    <div class="footer">
      <p class="text_1">
        <span>关于我们 |</span>
        <span> 帮助中心 |</span>
        <span> 售后服务 |</span>
        <span> 配送与验收 |</span>
        <span> 商务合作 |</span>
        <span> 企业采购 |</span>
        <span> 开放平台 |</span>
        <span> 搜索推荐 |</span>
        <span> 友情链接 </span>
      </p>
      <p class="text_1">
        <span>食品经营许可证：XXXXXXXX</span>
        <span>出版物经营许可证：XXXXXXXX</span>
        <span>妙得ICP证号：ICP XXXXXXXX</span>
        <span>第二类医疗器械经营备案</span>
        <span>营业执照</span>
        <span>Panda公司版权所有 &copy; 1997-2019</span>
      </p>
      <p class="text_1">
        <img style="height: 25px; width: 25px;" src="//yanxuan.nosdn.127.net/4be60bc9f13202d3f1e79cf430927786.png">
        <span>川公网安备 XXXXXXX号</span>
        <span>单用途商业预付卡备案证： XXXXXXXX</span>
        <img style="height: 25px; width: 23px;" src="//yanxuan.nosdn.127.net/86f32b668af6e537389a77480fb5c74d.gif">
      </p>
    </div>
  </div>
</template>

<script>
  import headers from '@/components/header/headers'
  import headerSearch from '@/components/headerSearch/headerSearch'
  import index from './index/index'
  import livingHome from './livingHome/livingHome'
  import shoeBag from './shoeBag/shoeBag'
    export default {
        name: "layout",
        components: {
          headers,
          headerSearch,
          index,
          livingHome,
          shoeBag,
        },
        props: [],
        data() {
            return {
              activeName: '1',
            }
        },
        mounted() {

        },
        methods: {
          handleClick(tab,event){

          },
        }
    }
</script>

<style scoped lang='less'>
  .panda{
    /deep/.el-tabs__header{
      padding: 0 400px;
    }
    /deep/.el-tabs__item{
      font-weight: bold;
    }
    /deep/.el-tabs__nav-wrap::after{
      background-color: #fff;
    }
    /deep/.el-tabs__active-bar{
      background-color: #b4a078;
    }
    /deep/.el-tabs__item.is-active{
      color: #b4a078;
    }
    /deep/.el-tabs__item:hover{
      color: #b4a078;
    }
    .footer{
      background-color: #303133;
      height: 150px;
      color: #909399;
      font-size: 12px;
      padding-top: 20px;
      span{
        &:hover{
          color: #fff;
        }
      }
      .text_1{
        line-height: 30px;
      }
    }
  }
</style>
