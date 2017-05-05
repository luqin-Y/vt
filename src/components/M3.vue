<template lang="html">
  <div class="">
    <h1>search</h1>
    <h1>父子组件之间的传值</h1>


    <select-searcha :datas='data' v-on:oook='updata'></select-searcha>

  </div>
</template>



<script>
  import selectSearcha from '@/components/selectSearcha'
  export default {
    // 注册组件
    components: {
      selectSearcha,
    },
    data (){
      return {
        data:{
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value: '选项1',
          sInput:''
        }
      }
    },
    methods:{
      updata:function (data) {
        console.log('================');
        console.log(data);
        console.log('================');
      }
    }
  }

</script>

<style lang="scss">
  h1{
    font-size: 30px;
    color: #823844;
  }
</style>
