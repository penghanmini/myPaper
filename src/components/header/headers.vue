/**
* 作者: penghan
* 日期: 2019-01-14
* 描述:
*/
<template>
  <div class="headers">
    <span class="title">好的生活，没那么贵</span>
    <div class="moreBtn">
      <span>登陆</span>
      <span>注册</span>
      <span>我的订单</span>
      <span>会员</span>
      <span>熊猫家</span>
      <span>企业采购</span>
      <span>客户服务</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "headers",
        components: {},
        props: [],
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style scoped lang='less'>
  .headers{
    height: 30px;
    width: 100%;
    background-color: #333;
    color: #ccc;
    font-size: 12px;
    line-height: 30px;
    display: flex;
    flex-flow: nowrap;
    justify-content: space-around;
    .title{
      &:hover{
        color: #fff;
      }
    }
    .moreBtn{
      span{
        margin: 0 5px;
        cursor: pointer;
        &:hover{
          color: #fff;
        }
      }
    }
  }
</style>
