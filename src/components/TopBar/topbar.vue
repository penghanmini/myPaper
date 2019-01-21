/**
* 作者: penghan
* 日期: 2019-01-18
* 描述:
*/
<template>
    <div class="topBar">
      <el-menu
        :default-active="$route.path"
        active-text-color="#b4a078"
        class="el-menu-demo"
        mode="horizontal"
        :router="true"
        @select="handleSelect">
        <el-menu-item
          v-for="(item,index) in options.data"
          :key='index' :index="item.frontUrl.toString()"
          v-show="item.show"
        >
          <span slot="title">
            {{item.label}}
          </span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
    export default {
        name: "topbar",
        components: {},
        props: ['options'],
        data() {
            return {
              categoryList: [],
            }
        },
        mounted() {

        },
        methods: {
          handleSelect(key,keyPath){

          },
        }
    }
</script>

<style scoped lang='less'>
  .topBar{
    padding: 20px 400px;
    /deep/.el-menu.el-menu--horizontal{
      border-bottom: none;
    }
    /deep/.el-menu-item{
      height: 50px;
      padding: 0;
      margin: 0 20px;
      &:hover{
        color: #b4a078;
      }
    }
  }
</style>
