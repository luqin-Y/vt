<template lang="html">
  <div class="">
    <h1>使用store(VUEX)</h1>
    <hr>
    <selectSearch></selectSearch>
  </div>
</template>

<script>
  import selectSearch from '@/components/selectSearch'
  export default {
    created(){
      // console.log(this.$store.state.count)
    },
    data(){
      return{}
    },
    components:{
      selectSearch
    }
  }
</script>

<style lang="scss" scoped>
h1{
  color: #908acc;
  font-size: 38px;
}
</style>
