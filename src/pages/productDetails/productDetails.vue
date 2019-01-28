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
          <div class="proDetail">
            <span>数量</span>
            <el-input-number v-model="number" @change="handleChange" :min="1" label="描述文字"></el-input-number>
          </div>
          <div class="moreBtn">
            <el-button class="newShop">立即购买</el-button>
            <el-button class="addShopCar">加入购物车</el-button>
            <el-button class="collect"><i class="el-icon-star-off" style="margin-right: 5px;"></i>收藏</el-button>
          </div>
        </div>
      </div>
      <div class="moreInfo">
        <el-tabs type="border-card" v-model="activeName" @tab-click="tabsChange" class="tabs">
          <el-tab-pane label="详情" name="detail">
            <template>
              <div class="detailText">
                <div style="width: 80px;">产地：</div>
                <div>熊猫基地</div>
              </div>
              <div class="detailText">
                <div style="width: 80px;">规格：</div>
                <div>通用规格</div>
              </div>
              <div class="detailText">
                <div style="width: 80px;">维护方式：</div>
                <div>自由维护</div>
              </div>
              <div class="detailText">
                <div style="width: 80px;">材料：</div>
                <div>原材料</div>
              </div>
              <div class="detailText">
                <div style="width: 80px;">生产商家：</div>
                <div>熊猫家</div>
              </div>
              <div class="detailText">
                <div style="width: 80px;">相关认证：</div>
                <div>
                  Ökotex Standed 100 class1 国际环保纺织品认证等级一级<br/>
                  Nomite REG1006 防敏防螨认证<br/>
                  Downafresh greenline REG1006 欧洲羽绒羽毛清洁认证<br/>
                  SGS 国标纺织品认证
                </div>
              </div>
            </template>
          </el-tab-pane>
          <el-tab-pane label="评价" name="evaluate">

          </el-tab-pane>
          <el-tab-pane label="质检报告" name="qualityReport">

          </el-tab-pane>
          <el-tab-pane label="常见问题" name="FAQ">

          </el-tab-pane>
        </el-tabs>
      </div>
      <Dialog :options="serveOption">
        <template slot="dialogContent" class="dialog">
          <p style="color: #b4a078; font-size: 18px;">･ 不支持30天无忧退换货 </p>
          <div>食品、贴身衣物、积分兑换等特殊商品，无质量问题不支持退换货。</div>
          <p style="color: #b4a078; font-size: 18px;">･ 48小时快速退款</p>
          <div>收到退货包裹并确认无误后，将在48小时内办理退款，退款将原路返回，不同银行处理时间不同，预计1-5个工作日到账。</div>
          <p style="color: #b4a078; font-size: 18px;">･ 满88元免邮费</p>
          <div>单笔订单金额（不含运费），大陆地区满88元免邮，不满88元收取10元邮费；港澳台地区满500元免邮，不满500元收取30元运费；海外地区以下单页提示运费为准。</div>
          <p style="color: #b4a078; font-size: 18px;">･ 网易自营品牌</p>
          <div>网易原创生活类电商品牌，所有商品均为网易自营，品质保证。</div>
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
              },
              number: '',//商品数量
              activeName: 'detail',//下部tabs绑定值
            }
        },
        mounted() {

        },
        methods: {
          service(){
            this.serveOption.visible = true;
          },
          //选择商品数量
          handleChange(val){
            console.log(val);
          },
          //tabs选择
          tabsChange(tabs,path){
            console.log(tabs);
          },
        }
    }
</script>

<style scoped lang='less'>
  .productDetail{
    border-top: 1px solid #F2F6FC;
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
        .proDetail{
          margin-top: 30px;
          font-size: 12px;
          color: #666;
          span{
            padding: 0 40px 0 10px;
          }
        }
        .moreBtn{
          margin-top: 30px;
          .newShop{
            height: 50px;
            width: 170px;
            color: #b4a078;
            border: 1px solid #b4a078;
            background-color: #f5f3ef;
          }
          .addShopCar{
            height: 50px;
            width: 170px;
            color: #fff;
            border: 1px solid #b4a078;
            background-color: #b4a078;
          }
          .collect{
            height: 50px;
            width: 120px;
            border: 1px solid #CCC;
            color: #999;
          }
        }
      }
    }
    .moreInfo{
      margin-top: 50px;
      .tabs{
        width: 90%;
        min-height: 500px;
        margin-right: 10px;
        /deep/.el-tabs__item{
          width: 100px;
          background-color: #f5f5f5;
          &:hover{
            color: #b4a078;
          }
        }
        /deep/.el-tabs__item.is-active{
          color: #b4a078;
          background-color: #fff;
        }
      }
      .detailText{
        color: #999;
        width: 100%;
        padding-left: 10px;
        font-size: 14px;
        min-height: 80px;
        text-align: left;
        display: flex;
        flex-flow: nowrap row;
        align-items: center;
        justify-content: left;
        border-bottom: 1px dashed #e8e8e8;
      }
    }
    .dialog{
      .dialogTitle{
        color: #b4a078;
        font-size: 18px;
      }
    }
  }
</style>
