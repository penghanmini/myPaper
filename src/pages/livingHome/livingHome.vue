/**
* 作者: penghan
* 日期: 2019-01-15
* 描述:
*/
<template>
    <div class="livingHome">
      <el-carousel :interval="5000" arrow="always" height="420">
        <el-carousel-item v-for="(item,index) in carouselList" :key="index">
          <img :src="item">
        </el-carousel-item>
      </el-carousel>
      <div class="main">
        <div class="main_1">
          <div class="category">
            <div class="subtitle">分类：</div>
            <span v-for="item in categoryList" :key="item.categoryId" :class="{'active': item.active}" @click="clickCategory(item)">{{item.label}}</span>
          </div>
          <div class="address">
            <div class="subtitle">配送地区：</div>
            <span v-for="item in addressList" :key="item.id" :class="{'active': item.active}" @click="clickAddress(item)">{{item.name}}</span>
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
                <span class="newProject_text_1">{{item.activeText}}</span>
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
    export default {
        name: "livingHome",
        components: {},
        props: [],
        data() {
            return {
              carouselList: [
                'https://yanxuan.nosdn.127.net/874de1f81d910dd5efee2817babc7977.jpg?imageView&quality=95&thumbnail=1090x310',
                'https://yanxuan.nosdn.127.net/c85b03119e81390003edbd0dddf485cd.jpg?imageView&quality=95&thumbnail=1090x310',
                'https://yanxuan.nosdn.127.net/eea03529f52942c111107af728a771ec.jpg?imageView&quality=95&thumbnail=1090x310',
              ],
              categoryList:[
                {label: '全部',active: true,categoryId: 1},
                {label: '床品件套',active: false,categoryId: 2},
                {label: '被枕',active: false,categoryId: 3},
                {label: '家具',active: false,categoryId: 4},
                {label: '灯具',active: false,categoryId: 5},
                {label: '收纳',active: false,categoryId: 6},
                {label: '布艺软装',active: false,categoryId: 7},
                {label: '家饰',active: false,categoryId: 8},
                {label: '旅行用品',active: false,categoryId: 9},
                {label: '晾晒除味',active: false,categoryId: 10},
                {label: '家庭医疗',active: false,categoryId: 11},
                {label: '宠物',active: false,categoryId: 12},
              ],
              addressList:[
                {name:'全部',active:true,id:1},
                {name:'香港',active:false,id:2},
                {name:'澳门',active:false,id:3},
                {name:'台湾',active:false,id:4},
                {name:'日韩',active:false,id:5},
                {name:'亚洲',active:false,id:6},
                {name:'欧洲',active:false,id:7},
                {name:'美洲',active:false,id:8},
              ],
              mainData: [
                {title: '床品件套',remark: '甄选品质，睡眠美学',goodsList: [
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
              shili:{
                id:2,
                src: '',
                activeType: 1,
                activeText: '',
                remark: '',
                newPrice: '￥',
                oldPrice: '',
                mean:'',
              },
            }
        },
        mounted() {

        },
        methods: {
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
            padding: 2px 5px;
            margin: 10px 80px;
          }
        }
      }
    }
  }
</style>
