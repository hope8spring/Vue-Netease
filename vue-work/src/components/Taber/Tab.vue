<template>
  <div>
    <!--标签页-->
    <van-tabs  class="tabs" swipeable v-model="active" animated sticky title-active-color="#B4282D" >
      <van-tab title="推荐" to="/Mister"  class="tabsB" ></van-tab>
      <van-tab title="居家生活" to="/Lister" class="tabsB"></van-tab>
      <van-tab title="服饰鞋包" to="/Discover" class="tabsB"></van-tab>
      <van-tab title="美食酒水" to="/Car" class="tabsB"></van-tab>
      <van-tab title="美食酒水" to="/Car" class="tabsB"></van-tab>
      <van-tab title="美食酒水" to="/Car" class="tabsB"></van-tab>
      <van-tab title="美食酒水" to="/Car" class="tabsB"></van-tab>
      <van-tab title="美食酒水" to="/Car" class="tabsB"></van-tab>
    </van-tabs>
    <i class="icon">
      <span class="back"></span>
      <van-icon name="arrow-down" class="icon-img"/>
    </i>
  </div>
</template>

<script>
  import {Tab, Tabs,icon } from 'vant';
  export default {
    name: "Tab",
    data(){
      return{
        active:'推荐',
        animated:true,
        swipeable:true,
        sticky:true
      }
    },
    components:{
      [Tab.name]:Tab,
      [Tabs.name]:Tabs,
      [icon.name]:icon
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus.styl"
  .van-tab
    position relative
    width rem (750)
    height rem(60)
  .icon
    position absolute
    text-align center
    font-size rem(30)
    display inline-block
    right rem(0)
    top rem(160)
    .back
      width rem(120)
      height rem(50)
      background-color #fff
      opacity 1
      display inline-block
      position relative
      line-grid create
    .icon-img
      text-align center
      position absolute
      top rem(10)
      right rem(50)
      z-index 1

</style>
