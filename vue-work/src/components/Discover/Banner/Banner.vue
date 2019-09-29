<template>
  <div class="Banner">
    <div class="bgBannerNon">
      <img  class="img" src="https://yanxuan.nosdn.127.net/2079bbd71b87befd24070a83f1080e58.jpg?imageView&quality=65&thumbnail=690y376" alt="">    </div>
    <div class="bgBannerTwo">
      <span class="text">新鲜的，有创意的，可以打开你新世界大门的好物，给你意想不到的生活惊喜！</span>
      <img  class="img" src="https://yanxuan.nosdn.127.net/2c278f4048125b135ab8e3303de65b19.jpg?imageView&quality=65&thumbnail=690y376" alt="">    </div>
    <div class="InternalSelection">
      <div class="selectionRight">
        <div class="title">
          <img class="img" src="https://yanxuan.nosdn.127.net/6bbce2ec26816a0068fa1f76c9d4ef77.png?imageView&quality=65&thumbnail=56y56" alt="">
          <span class="titleText">网易员工严选</span>
        </div>
        <div class="contentTitle">吃过猫山王，其他榴莲皆路人</div>
        <span class="contentBottom">开盒即食，全程冷鲜速达</span>
        <div class="search">
          <van-icon name="eye-o" class="icon"/>
          <div class="searchText">
              <span class="text">16w</span>
              <span class="text">人看过</span>
            </div>
        </div>
      </div>
      <div class="selectionLeft">
        <img  class="img" src="https://yanxuan.nosdn.127.net/3fb07b212a1c1d3a704f596ed5c31b2e.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import { Icon } from 'vant';
  export default {
    name: "Banner"
    ,components:{
      [Icon.name]:Icon
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus.styl"
  .Banner
    display flex
    justify-content center
    width rem(750)
    flex-wrap wrap
    .bgBannerNon
      margin-top rem(20)
      .img
        width rem(700)
        height rem(350)
        display inline-block
        border-radius 2%
        text-align center
        line-height rem(350)
    .bgBannerTwo
      borderColorPx(#d3d3d3)
      text-align center
      .text
        width rem(700)
        display inline-block
        font-size rem(32)
      .img
        border-radius 2%
        width rem(700)
    .InternalSelection
      width rem(700)
      display flex
      justify-content space-between
      .selectionRight
        position relative
        .title
          display flex
          align-items center
          .img
            width rem(80)
            height rem(80)
            border-radius 50%
            display inline-block
          .titleText
            display inline-block
            font-size rem(30)
            color #3c3c3c
        .contentTitle
          display inline-block
          font-size rem(40)
        .contentBottom
          display inline-block
          position absolute
          left rem(10)
          bottom rem(50)
          font-size rem(28)
          color #333
        .search
          position absolute
          bottom rem(30)
          height rem(50)
          left rem(10)
          display inline-block
          .icon
            font-size rem(32)
            display inline-block
            vertical-align middle
          .searchText
            display inline-block
            vertical-align middle
            font-size rem(24)
            color #3c3c3
      .selectionLeft
        width rem(350)
        height rem(300)
        .img
          width rem(350)
          height rem(300)














</style>
