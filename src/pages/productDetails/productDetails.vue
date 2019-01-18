/**
* 作者: penghan
* 日期: 2019-01-18
* 描述:
*/
<template>
    <div class="productDetail">
      <div class="main">
        <div class="left">
          <el-carousel>
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="right">
          <p class="title">祺宴 糕饼礼盒 1.15千克</p>
          <p class="subtitle">严选9款精致糕饼，盛情礼赠，节节“糕”升</p>
          <div class="detail">
            <div class="divFlex">
              <div class="text_left">活动价</div>
              <div>
                <span class="text_newPrice">￥149</span>
                <span class="text_oldPrice">￥198</span>
                <span class="activeText">年货节特卖</span>
              </div>
            </div>
            <div class="divFlex">
              <div class="text_left">配送</div>
              <div>
                <span>至</span>
                <el-select
                  v-model="address"
                  size="small"
                  placeholder="请选择地址"
                ></el-select>
              </div>

            </div>
            <div class="divFlex_1">
              <div class="text_left">服务</div>
              <div class="text_right" @click="service">
                <p>･ 不支持30天无忧退换货 </p>
                <p>･ 48小时快速退款</p>
                <p>･ 满88元免邮费</p>
                <p>･ 网易自营品牌</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Dialog :options="serveOption">
        <template slot="dialogContent" class="dialog">
          <p style="color: #b4a078; font-size: 18px;">･ 不支持30天无忧退换货 </p>
          <p class="dialogSubTitle">食品、贴身衣物、积分兑换等特殊商品，无质量问题不支持退换货。</p>
          <p style="color: #b4a078; font-size: 18px;">･ 48小时快速退款</p>
          <p class="dialogSubTitle">收到退货包裹并确认无误后，将在48小时内办理退款，退款将原路返回，不同银行处理时间不同，预计1-5个工作日到账。</p>
          <p style="color: #b4a078; font-size: 18px;">･ 满88元免邮费</p>
          <p class="dialogSubTitle">单笔订单金额（不含运费），大陆地区满88元免邮，不满88元收取10元邮费；港澳台地区满500元免邮，不满500元收取30元运费；海外地区以下单页提示运费为准。</p>
          <p style="color: #b4a078; font-size: 18px;">･ 网易自营品牌</p>
          <p class="dialogSubTitle">网易原创生活类电商品牌，所有商品均为网易自营，品质保证。</p>
        </template>
      </Dialog>
    </div>
</template>

<script>
  import Dialog from '@/components/dialog/Dialog'
    export default {
        name: "productDetails",
        components: {
          Dialog,
        },
        props: [],
        data() {
            return {
              address:'',
              serveOption: {
                title: '服务',
                visible: false,
                width: '30%',
              }
            }
        },
        mounted() {

        },
        methods: {
          service(){
            this.serveOption.visible = true;
          },
        }
    }
</script>

<style scoped lang='less'>
  .productDetail{
    padding: 20px 400px;
    .main{
      display: flex;
      flex-flow: nowrap;
      .left{
        width: 430px;
        height: 430px;
        border: 1px solid #F2F6FC;
      }
      .right{
        width: 500px;
        text-align: left;
        margin-left: 50px;
        p{
          margin-top: 0;
          margin-bottom: 10px;
        }
        .title{
          font-size: 20px;
          font-weight: 700;
        }
        .subtitle{
          width: 300px;
          font-size: 14px;
          color: #999;
        }
        .detail{
          background-color: #f5f3ef;
          font-size: 14px;
          height: 300px;
          padding: 5px 5px;
          color: #666;
          .divFlex{
            display: flex;
            flex-flow: nowrap;
            align-items: center;
            margin-top: 10px;
          }
          .divFlex_1{
            display: flex;
            flex-flow: nowrap;
            margin-top: 10px;
          }
          /deep/.el-select>.el-input{
            width: 100px;
          }
          .text_left{
            width: 60px;
            color:  #909399;
          }
          .text_right{
            &:hover{
              text-decoration: underline;
            }
          }
          .text_newPrice{
            color: #d7282d;
            font-size: 28px;
            font-weight: 700;
          }
          .text_oldPrice{
            text-decoration:line-through;
            color: #909399;
          }
          .activeText{
            background-color: #FF6347;
            color: #fff;
            margin: 0px 80px;
          }
        }
      }
    }
    .dialog{
      .dialogTitle{
        color: #b4a078;
        font-size: 18px;
      }
      .dialogSubTitle{
        color: #909399;
        font-size: 14px;
        padding-left: 20px;
      }
    }
  }
</style>
