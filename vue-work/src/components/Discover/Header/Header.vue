<template>
  <div class="Header">
    <div class="head">
    <van-icon name="wap-home-o" class="wapHome"/>
    <div class="textContent">
      <span class="textA">发现</span>
      <span class="textB">甄选家</span>
    </div>
    <div class="icon">
      <van-icon name="search" />
      <van-icon name="shopping-cart-o" />
    </div>
    </div>
    <div class="borderPX"></div>
    <Taber>
        <van-tabs slot="navTop" class="tabs" swipeable v-model="active" animated sticky title-active-color="#B4282D" >
          <van-tab title="推荐" to="/Mister"  class="tabsB" ></van-tab>
          <van-tab title="居家生活" to="/Lister" class="tabsB"></van-tab>
          <van-tab title="服饰鞋包" to="/Discover" class="tabsB"></van-tab>
          <van-tab title="美食酒水" to="/Car" class="tabsB"></van-tab>
          <van-tab title="美食酒水" to="/Car" class="tabsB"></van-tab>
          <van-tab title="美食酒水" to="/Car" class="tabsB"></van-tab>
          <van-tab title="美食酒水" to="/Car" class="tabsB"></van-tab>
          <van-tab title="美食酒水" to="/Car" class="tabsB"></van-tab>
        </van-tabs>
    </Taber>
  </div>

</template>

<script>
  import Taber from '../../../components/Taber/Tab';
  import { Icon } from 'vant';
  export default {
    name: "Header",
    components:{
      Taber,
      [Icon.name]:Icon
    },
    data(){
      return{
        active:'推荐'
      }
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus.styl"
  .Header
    width rem(750)

    .head
      width rem(750)
      display flex
      justify-content space-between
      .wapHome
        font-size rem(60)
        color #7b7b7b
        margin rem(10)
     .textContent
       .textA
          font-size rem(35)
          font-weight bold
          color red
          margin-right  rem(20)
       .textB
          font-size rem(30)
     .icon
       display inline-block
       font-size rem(60)
       margin rem(10)

  .borderPX
    border-1px(#7b7b7b)




</style>
