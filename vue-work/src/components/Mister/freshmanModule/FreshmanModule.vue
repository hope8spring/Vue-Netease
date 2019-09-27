<template>
  <!--新人专享-->
  <div class="Freshman">
    <div class="FreshmanTitle">-&nbsp;新人专享礼&nbsp;-</div>
    <div class="left">
      <span class="text">新人专享礼包</span>
      <img  class="img" src="https://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
    </div>
    <div class="rightTop">
      <span class="textA">福利社</span>
      <span class="textB">今日特价</span>
      <img class="img" src="https://yanxuan-item.nosdn.127.net/5e948fbad2f43381444a150848c4dd1a.png?imageView&thumbnail=200x200&quality=75" alt="">
      <div class="round">
        <span class="textA">￥20.9</span>
        <span class="textB">￥25.9</span>
      </div>
    </div>
    <div class="rightBottom">
      <div  class="textA">福利社</div>
      <div class="textB">今日特价</div>
      <img class="img" src="https://yanxuan-item.nosdn.127.net/5e948fbad2f43381444a150848c4dd1a.png?imageView&thumbnail=200x200&quality=75" alt="">
      <div class="round">
        <span class="textA">￥20.9</span>
        <span class="textB">￥25.9</span>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "FreshmanModule"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus.styl"
  .Freshman
    width rem(750)
    display inline-block
    .FreshmanTitle
      font-size rem(32)
      height rem(80)
      width rem(750)
      text-align center
      line-height rem(80)
      color darkslategrey
      margin-top rem(-20)
    .left
      float left
      width rem(350)
      height rem(300)
      background-color #F9E9CF
      display inline-block
      position relative
      .text
        color #333
        font-size rem(32)
        margin-left rem(20)
        margin-top rem(20)
        display block
      .img
        width rem(200)
        height rem(200)
        position absolute
        top 0
        bottom rem(-20)
        right  0
        left 0
        margin auto
    .rightTop
      width rem(350)
      height rem(145)
      float right
      background-color #2fb5dd
      .textA
        font-size rem(24)
      .textB
        font-size rem(12)
      .img
        width rem(200)
        height rem(132)
        text-align center
        line-height rem(132)
      .round
        zoom 1
        .textA
          font-size rem(24)
        .textB
          font-size rem(24)
    .rightBottom
      float right
      width rem(350)
      height rem(145)
      background-color #0d3add
      .textA
        font-size rem(24)
      .textB
        font-size rem(24)
      .img
        width rem(187)
        height rem(132)
      .round

        .textA
          font-size rem(10)
        .textB
          font-size rem(10)
</style>
