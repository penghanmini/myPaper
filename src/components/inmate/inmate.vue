/**
* 作者: penghan
* 日期: 2019-01-15
* 描述:
*/
<template>
    <div class="inmate">
      <div class="bedding">
        <div>床品</div>
        <div v-for="item in inmateInfo">
          <img src={{item.src}} />
          <span>{{item.label}}</span>
        </div>
      </div>
      <div class="bedding">
        <div>家居家装</div>
        <div></div>
      </div>
      <div class="bedding">
        <div>收纳</div>
        <div></div>
      </div>
      <div class="bedding">
        <div>医疗宠物</div>
        <div></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "inmate",
        components: {},
        props: [],
        data() {
            return {
              inmateInfo: [
                {src: 'https://yanxuan.nosdn.127.net/785a1507ce654746875063805c6c4235.png',label:'床品套件'}
              ]
            }
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style scoped lang='less'>

</style>
