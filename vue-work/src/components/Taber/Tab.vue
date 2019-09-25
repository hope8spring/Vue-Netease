<template>
  <div>
    <!--标签页-->
    <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import {Tab, Tabs } from 'vant';
  export default {
    name: "Tab",
    data(){
      return{
        active:''
      }
    },
    components:{
      [Tab.name]:Tab,
      [Tabs.name]:Tabs
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
