/**
* 作者: penghan
* 日期: 2019-01-18
* 描述:
*/
<template>
  <el-dialog :visible.sync="options.visible" custom-class="myDialog" :show-close='!options.close' :close-on-click-modal='false' :width='options.width'  :before-close="options.handleClose" :append-to-body=true>
    <div slot="title" class="dialogTitleBar">
      <i v-if="options.arrow" class="el-icon-arrow-left" @click="options.arrowBack" style="cursor: pointer;margin-left:-90px"></i> {{ options.title }}
    </div>
    <slot name="dialogContent" ref="dialogContent"></slot>
    <div slot="footer" ref="dialogFooter"></div>
  </el-dialog>
</template>

<script>
  export default {
    props: ["options"],
    name: "Mdialog",
    components: {},
    data() {
      return {

      }
    },
    mounted: async function() {
      /*拖动*/
      var $box = $(".el-dialog__header");

      $box.mousedown(function(event) {

        var old_left = event.pageX;
        var old_top = event.pageY;

        var old_position_left = $(this).parents(".myDialog").position().left;
        var old_position_top = $(this).parents(".myDialog").position().top;

        $(document).mousemove(function(event) {
          var new_left = event.pageX;
          var new_top = event.pageY;

          var chang_x = new_left - old_left;
          var change_y = new_top - old_top;

          var new_position_left = old_position_left + chang_x;
          var new_position_top = old_position_top + change_y;
          $(".myDialog").css({
            left: new_position_left + 'px',
            top: new_position_top + 'px'
          })
        });
        $(document).mouseup(function() {
          $(document).off("mousemove");
        })
      });
    },
    methods: {
      getRefs(refName) {
        if(this.$refs[refName])
          return this.$refs[refName][0]
        else
          throw new Error(`the control ${refName} is undefined !`)
      },
      // handleClose(){
      //
      //   if(this.$props.options.closeFun){
      //
      //     this.$props.options.closeFun()
      //
      //   }
      // }
    }
  }
</script>

<style>
  .myDialog .dialogTitleBar {
    background-color: #f5f3ef;
    color: #b4a078;
    height: 60px;
    font-size: 20px;
    line-height: 60px;
    text-align: center;
    /*text-indent: 2em;*/
  }

  .myDialog.el-dialog{
    width: 539px;
  }
  .bigDialog .el-dialog {
    width: 850px;
  }
  .myDialog .el-dialog__body {
    padding: 20px 60px;
  }
  .myDialog .el-dialog__body .el-form-item__label{
    color: #757D8F;
  }
  .myDialog .el-dialog__header {
    padding: 0;
    position: relative;
  }

  .myDialog .el-dialog__headerbtn {
    top: 14px;
    right: 26px;
    font-size: 25px;
    font-weight: bold;
    color: #fff!important;
  }

  .myDialog .el-dialog__headerbtn .el-dialog__close {
    color: #b4a078 !important;
    background: #f5f3ef;
  }

  .myDialog .el-dialog__footer {
    padding: 0;
  }
  /*空的  暂无数据*/
  .myDialog /deep/ .el-table__empty-block{
    background: #FFF !important;
  }
</style>
