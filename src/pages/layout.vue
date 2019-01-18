/**
* 作者: penghan
* 日期: 2019-01-09
* 描述:
*/
<template>
  <div class="panda">
    <headers></headers>
    <headerSearch></headerSearch>
    <topBar :options="topBarOption"></topBar>
    <router-view/>
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
  import topBar from '@/components/TopBar/topBar'
    export default {
        name: "layout",
        components: {
          headers,
          headerSearch,
          topBar
        },
        props: [],
        data() {
            return {
              topBarOption: {
                title: '左侧菜单数据配置',
                data: [
                  {
                    show: true,
                    label: '首页',
                    frontUrl: '/index',
                  },
                  {
                    show: true,
                    label: '居家',
                    frontUrl: '/livingHome',
                  },
                  {
                    show: true,
                    label: '鞋包配饰',
                    frontUrl: '/shoeBag',
                  },
                  {
                    show: true,
                    label: '服装',
                    frontUrl: '/cloth',
                  },
                  {
                    show: true,
                    label: '电器',
                    frontUrl: '/electric',
                  },
                  {
                    show: true,
                    label: '洗护',
                    frontUrl: '/personalCare',
                  },
                  {
                    show: true,
                    label: '饮食',
                    frontUrl: '/diet',
                  },
                  {
                    show: true,
                    label: '餐厨',
                    frontUrl: '/kitchen',
                  },
                  {
                    show: true,
                    label: '婴童',
                    frontUrl: '/baby',
                  },
                  {
                    show: true,
                    label: '文体',
                    frontUrl: '/literaryForm',
                  },
                  {
                    show: true,
                    label: '特色区',
                    frontUrl: '/special',
                  },
                ],
              },
            }
        },
        mounted() {

        },
        methods: {

        }
    }
</script>

<style scoped lang='less'>
  .panda{

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
