/**
* 作者: penghan
* 日期: 2019-01-15
* 描述:
*/
<template>
    <div class="search">
      <img class="topImg" src="http://yanxuan.nosdn.127.net/46257a372b912aeb579759c5f7d1d72a.gif">
      <div>
        <el-input v-model="inputContent" class="searchInput" placeholder="2019贺新年，年货节"></el-input>
        <i class="el-icon-search" @click="handleSearch" style="color: #b4a078; padding: 50px 15px 0 15px; cursor: pointer;"></i>
        <el-badge :value="message" class="item">
          <img class="messageInfo" src="@/assets/shopping.png">
        </el-badge>
      </div>
    </div>
</template>

<script>
    export default {
        name: "headerSearch",
        components: {},
        props: [],
        data() {
            return {
              message: 0,
              inputContent: '',
            }
        },
        mounted() {

        },
        methods: {
          handleSearch(){
            let vm = this;
            console.log(vm.inputContent);
          },
        }
    }
</script>

<style scoped lang='less'>
  .search{
    display: flex;
    flex-flow: nowrap;
    align-items: center;
    justify-content: center;
    .topImg{
      height: 140px;
      width: 400px;
    }
    .searchInput{
      width: 200px;
      margin-left: 50px;
    }
    /deep/.el-input__inner{
      border: none;
      border-radius: unset;
      line-height: unset;
      height: unset;
      padding: unset;
      border-bottom: 1px solid #b4a078;
    }
    .item{
      cursor: pointer;
      .messageInfo{
        height: 20px;
        width: 20px;
      }
    }
  }
</style>
