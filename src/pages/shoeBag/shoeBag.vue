/**
* 作者: penghan
* 日期: 2019-01-16
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
          <div>
            <span v-for="item in categoryList" :key="item.categoryId" :class="{'active': item.active}" @click="clickCategory(item)">{{item.name}}</span>
          </div>

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
          <div class="oneGoods" v-for="item in data.goodsList">
            <img :src="item.src">
            <div style="margin-top: 15px; border-bottom: 1px solid #E4E7ED;">
              <span class="newProject_text_1" :class="{'noNull': item.activeText}">{{item.activeText}}</span>
              <p>{{item.remark}}</p>
              <p><span style="color: #FF0000">{{item.newPrice}}</span><span class="delete">{{item.oldPrice}}</span></p>
            </div>
            <p style="color: #909399;">{{item.mean}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import layoutApi from '@/api/layoutApi'
  import shoeBagApi from '@/api/shoeBagApi'
    export default {
        name: "ShoeBag",
        components: {},
        props: [],
        data() {
            return {
              carouselList: [],
              categoryList:[],
              addressList:[],
              mainData: [
                {title: '行李箱',remark: '带着梦想即刻出发',goodsList: [
                    {
                      id:1,
                      src: 'https://yanxuan.nosdn.127.net/c74e2290b4cde2661affe43d52143b98.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '新品',
                      remark: '霓裳凤翎刺绣婚庆十件套',
                      newPrice: '￥2399',
                      oldPrice: '',
                      mean:'凤翎精致蕾丝刺绣，百支奢密风光大嫁',
                    },
                    {
                      id:2,
                      src: 'https://yanxuan.nosdn.127.net/5240f52c0f410054fe9c20abc54aa7b9.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: 'APP特惠',
                      remark: '60s锦眠贡缎四件套',
                      newPrice: '￥469',
                      oldPrice: '',
                      mean:'400根纯棉贡缎，入门奢享高阶柔滑',
                    },
                    {
                      id:4,
                      src: 'https://yanxuan.nosdn.127.net/20f2330e0de7b764c14ae8105229592a.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '年货节特卖',
                      remark: '猪莉·粉糖四件套',
                      newPrice: '￥359',
                      oldPrice: '￥439',
                      mean:'少女粉糯贡缎，猪莉甜美相赠',
                    },

                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/9cc53c0ab9ec374184859824cec18764.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '',
                      remark: '21s素暖轻磨毛四件套',
                      newPrice: '￥279.3',
                      oldPrice: '￥399',
                      mean:'厚实粗犷肌理感，越睡越舒适',
                    },
                  ]},
                {title: '被枕',remark: '陷入柔暖，美梦时刻',goodsList: [
                    {
                      id:1,
                      src: 'https://yanxuan.nosdn.127.net/c74e2290b4cde2661affe43d52143b98.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '新品',
                      remark: '霓裳凤翎刺绣婚庆十件套',
                      newPrice: '￥2399',
                      oldPrice: '',
                      mean:'凤翎精致蕾丝刺绣，百支奢密风光大嫁',
                    },
                    {
                      id:2,
                      src: 'https://yanxuan.nosdn.127.net/5240f52c0f410054fe9c20abc54aa7b9.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: 'APP特惠',
                      remark: '60s锦眠贡缎四件套',
                      newPrice: '￥469',
                      oldPrice: '',
                      mean:'400根纯棉贡缎，入门奢享高阶柔滑',
                    },
                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/20f2330e0de7b764c14ae8105229592a.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '年货节特卖',
                      remark: '猪莉·粉糖四件套',
                      newPrice: '￥359',
                      oldPrice: '￥439',
                      mean:'少女粉糯贡缎，猪莉甜美相赠',
                    },

                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/9cc53c0ab9ec374184859824cec18764.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '三石福利价',
                      remark: '21s素暖轻磨毛四件套',
                      newPrice: '￥279.3',
                      oldPrice: '￥399',
                      mean:'厚实粗犷肌理感，越睡越舒适',
                    },
                  ]},
                {title: '家具',remark: '品质家具，质感生活',goodsList: [
                    {
                      id:1,
                      src: 'https://yanxuan.nosdn.127.net/c74e2290b4cde2661affe43d52143b98.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '新品',
                      remark: '霓裳凤翎刺绣婚庆十件套',
                      newPrice: '￥2399',
                      oldPrice: '',
                      mean:'凤翎精致蕾丝刺绣，百支奢密风光大嫁',
                    },
                    {
                      id:2,
                      src: 'https://yanxuan.nosdn.127.net/5240f52c0f410054fe9c20abc54aa7b9.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: 'APP特惠',
                      remark: '60s锦眠贡缎四件套',
                      newPrice: '￥469',
                      oldPrice: '',
                      mean:'400根纯棉贡缎，入门奢享高阶柔滑',
                    },
                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/20f2330e0de7b764c14ae8105229592a.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '年货节特卖',
                      remark: '猪莉·粉糖四件套',
                      newPrice: '￥359',
                      oldPrice: '￥439',
                      mean:'少女粉糯贡缎，猪莉甜美相赠',
                    },

                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/9cc53c0ab9ec374184859824cec18764.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '三石福利价',
                      remark: '21s素暖轻磨毛四件套',
                      newPrice: '￥279.3',
                      oldPrice: '￥399',
                      mean:'厚实粗犷肌理感，越睡越舒适',
                    },
                  ]},
                {title: '灯具',remark: '一盏灯，温暖一个家',goodsList: [
                    {
                      id:1,
                      src: 'https://yanxuan.nosdn.127.net/c74e2290b4cde2661affe43d52143b98.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '新品',
                      remark: '霓裳凤翎刺绣婚庆十件套',
                      newPrice: '￥2399',
                      oldPrice: '',
                      mean:'凤翎精致蕾丝刺绣，百支奢密风光大嫁',
                    },
                    {
                      id:2,
                      src: 'https://yanxuan.nosdn.127.net/5240f52c0f410054fe9c20abc54aa7b9.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: 'APP特惠',
                      remark: '60s锦眠贡缎四件套',
                      newPrice: '￥469',
                      oldPrice: '',
                      mean:'400根纯棉贡缎，入门奢享高阶柔滑',
                    },
                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/20f2330e0de7b764c14ae8105229592a.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '年货节特卖',
                      remark: '猪莉·粉糖四件套',
                      newPrice: '￥359',
                      oldPrice: '￥439',
                      mean:'少女粉糯贡缎，猪莉甜美相赠',
                    },

                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/9cc53c0ab9ec374184859824cec18764.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '三石福利价',
                      remark: '21s素暖轻磨毛四件套',
                      newPrice: '￥279.3',
                      oldPrice: '￥399',
                      mean:'厚实粗犷肌理感，越睡越舒适',
                    },
                  ]},
                {title: '收纳',remark: '收纳神器大集结',goodsList: [
                    {
                      id:1,
                      src: 'https://yanxuan.nosdn.127.net/c74e2290b4cde2661affe43d52143b98.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '新品',
                      remark: '霓裳凤翎刺绣婚庆十件套',
                      newPrice: '￥2399',
                      oldPrice: '',
                      mean:'凤翎精致蕾丝刺绣，百支奢密风光大嫁',
                    },
                    {
                      id:2,
                      src: 'https://yanxuan.nosdn.127.net/5240f52c0f410054fe9c20abc54aa7b9.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: 'APP特惠',
                      remark: '60s锦眠贡缎四件套',
                      newPrice: '￥469',
                      oldPrice: '',
                      mean:'400根纯棉贡缎，入门奢享高阶柔滑',
                    },
                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/20f2330e0de7b764c14ae8105229592a.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '年货节特卖',
                      remark: '猪莉·粉糖四件套',
                      newPrice: '￥359',
                      oldPrice: '￥439',
                      mean:'少女粉糯贡缎，猪莉甜美相赠',
                    },

                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/9cc53c0ab9ec374184859824cec18764.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '三石福利价',
                      remark: '21s素暖轻磨毛四件套',
                      newPrice: '￥279.3',
                      oldPrice: '￥399',
                      mean:'厚实粗犷肌理感，越睡越舒适',
                    },
                  ]},
                {title: '布艺软装',remark: '趣意点缀，家中有格',goodsList: [
                    {
                      id:1,
                      src: 'https://yanxuan.nosdn.127.net/c74e2290b4cde2661affe43d52143b98.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '新品',
                      remark: '霓裳凤翎刺绣婚庆十件套',
                      newPrice: '￥2399',
                      oldPrice: '',
                      mean:'凤翎精致蕾丝刺绣，百支奢密风光大嫁',
                    },
                    {
                      id:2,
                      src: 'https://yanxuan.nosdn.127.net/5240f52c0f410054fe9c20abc54aa7b9.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: 'APP特惠',
                      remark: '60s锦眠贡缎四件套',
                      newPrice: '￥469',
                      oldPrice: '',
                      mean:'400根纯棉贡缎，入门奢享高阶柔滑',
                    },
                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/20f2330e0de7b764c14ae8105229592a.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '年货节特卖',
                      remark: '猪莉·粉糖四件套',
                      newPrice: '￥359',
                      oldPrice: '￥439',
                      mean:'少女粉糯贡缎，猪莉甜美相赠',
                    },

                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/9cc53c0ab9ec374184859824cec18764.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '三石福利价',
                      remark: '21s素暖轻磨毛四件套',
                      newPrice: '￥279.3',
                      oldPrice: '￥399',
                      mean:'厚实粗犷肌理感，越睡越舒适',
                    },
                  ]},
                {title: '家饰',remark: '装点家的格调',goodsList: [
                    {
                      id:1,
                      src: 'https://yanxuan.nosdn.127.net/c74e2290b4cde2661affe43d52143b98.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '新品',
                      remark: '霓裳凤翎刺绣婚庆十件套',
                      newPrice: '￥2399',
                      oldPrice: '',
                      mean:'凤翎精致蕾丝刺绣，百支奢密风光大嫁',
                    },
                    {
                      id:2,
                      src: 'https://yanxuan.nosdn.127.net/5240f52c0f410054fe9c20abc54aa7b9.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: 'APP特惠',
                      remark: '60s锦眠贡缎四件套',
                      newPrice: '￥469',
                      oldPrice: '',
                      mean:'400根纯棉贡缎，入门奢享高阶柔滑',
                    },
                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/20f2330e0de7b764c14ae8105229592a.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '年货节特卖',
                      remark: '猪莉·粉糖四件套',
                      newPrice: '￥359',
                      oldPrice: '￥439',
                      mean:'少女粉糯贡缎，猪莉甜美相赠',
                    },

                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/9cc53c0ab9ec374184859824cec18764.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '三石福利价',
                      remark: '21s素暖轻磨毛四件套',
                      newPrice: '￥279.3',
                      oldPrice: '￥399',
                      mean:'厚实粗犷肌理感，越睡越舒适',
                    },
                  ]},
                {title: '旅行用品',remark: '出行小物，贴心相伴',goodsList: [
                    {
                      id:1,
                      src: 'https://yanxuan.nosdn.127.net/c74e2290b4cde2661affe43d52143b98.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '新品',
                      remark: '霓裳凤翎刺绣婚庆十件套',
                      newPrice: '￥2399',
                      oldPrice: '',
                      mean:'凤翎精致蕾丝刺绣，百支奢密风光大嫁',
                    },
                    {
                      id:2,
                      src: 'https://yanxuan.nosdn.127.net/5240f52c0f410054fe9c20abc54aa7b9.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: 'APP特惠',
                      remark: '60s锦眠贡缎四件套',
                      newPrice: '￥469',
                      oldPrice: '',
                      mean:'400根纯棉贡缎，入门奢享高阶柔滑',
                    },
                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/20f2330e0de7b764c14ae8105229592a.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '年货节特卖',
                      remark: '猪莉·粉糖四件套',
                      newPrice: '￥359',
                      oldPrice: '￥439',
                      mean:'少女粉糯贡缎，猪莉甜美相赠',
                    },

                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/9cc53c0ab9ec374184859824cec18764.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '三石福利价',
                      remark: '21s素暖轻磨毛四件套',
                      newPrice: '￥279.3',
                      oldPrice: '￥399',
                      mean:'厚实粗犷肌理感，越睡越舒适',
                    },
                  ]},
                {title: '晾晒除味',remark: '居家晾晒必备好物',goodsList: [
                    {
                      id:1,
                      src: 'https://yanxuan.nosdn.127.net/c74e2290b4cde2661affe43d52143b98.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '新品',
                      remark: '霓裳凤翎刺绣婚庆十件套',
                      newPrice: '￥2399',
                      oldPrice: '',
                      mean:'凤翎精致蕾丝刺绣，百支奢密风光大嫁',
                    },
                    {
                      id:2,
                      src: 'https://yanxuan.nosdn.127.net/5240f52c0f410054fe9c20abc54aa7b9.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: 'APP特惠',
                      remark: '60s锦眠贡缎四件套',
                      newPrice: '￥469',
                      oldPrice: '',
                      mean:'400根纯棉贡缎，入门奢享高阶柔滑',
                    },
                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/20f2330e0de7b764c14ae8105229592a.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '年货节特卖',
                      remark: '猪莉·粉糖四件套',
                      newPrice: '￥359',
                      oldPrice: '￥439',
                      mean:'少女粉糯贡缎，猪莉甜美相赠',
                    },

                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/9cc53c0ab9ec374184859824cec18764.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '三石福利价',
                      remark: '21s素暖轻磨毛四件套',
                      newPrice: '￥279.3',
                      oldPrice: '￥399',
                      mean:'厚实粗犷肌理感，越睡越舒适',
                    },
                  ]},
                {title: '家庭医疗',remark: '专业家庭医用好物',goodsList: [
                    {
                      id:1,
                      src: 'https://yanxuan.nosdn.127.net/c74e2290b4cde2661affe43d52143b98.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '新品',
                      remark: '霓裳凤翎刺绣婚庆十件套',
                      newPrice: '￥2399',
                      oldPrice: '',
                      mean:'凤翎精致蕾丝刺绣，百支奢密风光大嫁',
                    },
                    {
                      id:2,
                      src: 'https://yanxuan.nosdn.127.net/5240f52c0f410054fe9c20abc54aa7b9.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: 'APP特惠',
                      remark: '60s锦眠贡缎四件套',
                      newPrice: '￥469',
                      oldPrice: '',
                      mean:'400根纯棉贡缎，入门奢享高阶柔滑',
                    },
                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/20f2330e0de7b764c14ae8105229592a.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '年货节特卖',
                      remark: '猪莉·粉糖四件套',
                      newPrice: '￥359',
                      oldPrice: '￥439',
                      mean:'少女粉糯贡缎，猪莉甜美相赠',
                    },

                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/9cc53c0ab9ec374184859824cec18764.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '三石福利价',
                      remark: '21s素暖轻磨毛四件套',
                      newPrice: '￥279.3',
                      oldPrice: '￥399',
                      mean:'厚实粗犷肌理感，越睡越舒适',
                    },
                  ]},
                {title: '宠物',remark: '抑菌除味，打造宠物舒适空间',goodsList: [
                    {
                      id:1,
                      src: 'https://yanxuan.nosdn.127.net/c74e2290b4cde2661affe43d52143b98.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '新品',
                      remark: '霓裳凤翎刺绣婚庆十件套',
                      newPrice: '￥2399',
                      oldPrice: '',
                      mean:'凤翎精致蕾丝刺绣，百支奢密风光大嫁',
                    },
                    {
                      id:2,
                      src: 'https://yanxuan.nosdn.127.net/5240f52c0f410054fe9c20abc54aa7b9.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: 'APP特惠',
                      remark: '60s锦眠贡缎四件套',
                      newPrice: '￥469',
                      oldPrice: '',
                      mean:'400根纯棉贡缎，入门奢享高阶柔滑',
                    },
                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/20f2330e0de7b764c14ae8105229592a.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '年货节特卖',
                      remark: '猪莉·粉糖四件套',
                      newPrice: '￥359',
                      oldPrice: '￥439',
                      mean:'少女粉糯贡缎，猪莉甜美相赠',
                    },

                    {
                      id:3,
                      src: 'https://yanxuan.nosdn.127.net/9cc53c0ab9ec374184859824cec18764.jpg?quality=95&thumbnail=245x245&imageView',
                      activeType: 1,
                      activeText: '三石福利价',
                      remark: '21s素暖轻磨毛四件套',
                      newPrice: '￥279.3',
                      oldPrice: '￥399',
                      mean:'厚实粗犷肌理感，越睡越舒适',
                    },
                  ]},
              ],
            }
        },
        mounted() {
          this.initData();
        },
        methods: {
          //页面初始化
          initData(){
            let vm = this;
            //轮播图
            layoutApi.carousel({
              carouselType: 3
            }).then(({data})=>{
              vm.carouselList = data.data;
            })
            //分类
            layoutApi.getCategory({
              category: 'category_2',
            }).then(({data})=>{
              data.data.forEach((v)=>{
                v.active = false;
              })
              data.data.unshift({
                category: 'category_2',
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
            line-height: 30px;
            color: #999;
          }
          span{
            padding-right: 30px;
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
