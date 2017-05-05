<template lang="html">
  <div class="m-search">

    <div class="m-select-con">

      <el-select  class="m-select" v-model="datas.value" placeholder="请选择">
        <el-option
          v-for="item in datas.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-input class="m-input" v-model="datas.sInput" placeholder="请输入内容"></el-input>
    </div>
    <el-button class="" type="success" v-on:click="okAction">确定</el-button>

  </div>
</template>

<script>
  export default {
    data (){
      return {

      }
    },
    componentName: "selectSearcha",
    props:['datas'],
    methods:{
      okAction:function () {
        this.$emit('oook',{c:this.datas.sInput,v:this.datas.value});

        console.log(this.datas.sInput);
        console.log(this.datas.value);
      }
    }
  }
</script>


<style lang="scss"  >
  .m-search{
    width: 50%;
    margin: 0 auto;
    h1{
      font-size: 32px;
      color: #f40;
    }
    .m-select-con{
      width: 80%;
      border:1px solid #bfcbd9;
      border-radius: 4px;
      display: inline-block;
      & .m-input{
        width: 73%;
        display: inline-block;
        padding: 0;
        margin: 0;
        input{
          border-style:none !important;
        }
      }
      & .m-select{
        border-style:none;
        width: 25%;
        display: inline-block;
        padding: 0;
        margin: 0;

        input{
          background-color: transparent;
          // background-color: green;
          border-style:none !important;
          text-align: center;
        }
      }
    }
    .el-select-dropdown{
      text-align: center;
    }
  }
</style>

<style lang="scss" scoped>
  .el-scrollbar__view{
    li{
      text-align: center;
    }
    .el-select-dropdown__item.selected.hover {
        background-color: #13ce66;
    }
    .el-select-dropdown__item.selected {
      color: #fff;
      background-color: #13ce66;
    }
  }
</style>
