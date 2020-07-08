/**
* 作者: penghan
* 日期: 2019-03-01
* 描述:
*/
<template>
    <div class="purchasePage">
        <div class="text">请扫码支付</div>
        <div class="img"></div>
    </div>
</template>

<script>
    export default {
        name: "purchasePage",
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
  .purchasePage{
    padding: 20px;
    .text{
      width: 100%;
      font-size: 20px;
    }
    .img{
      background: url('../../../static/images/purchasePage.png') no-repeat;
      background-size: 100% 100%;
      height: 350px;
      width: 350px;
    }
  }
</style>
