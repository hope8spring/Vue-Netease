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
        <span class="textC">￥25.9</span>
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
    clearFix()
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
      margin-left rem(20)
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
        bottom rem(-50)
        right  0
        left 0
        margin auto

    .rightTop
      margin-right rem(20)
      width rem(350)
      height rem(145)
      float right
      background-color #F9E9CF
      position relative
      margin-bottom rem(5)
      .textA
        font-size rem(32)
        display inline
        margin-left rem(10)
        position absolute
        top rem(20)
        left rem(20)
      .textB
        position absolute
        top rem(65)
        left rem(26)
        font-size rem(24)
        color #3c3c3c
      .img
        width rem(160)
        height rem(150)
        text-align center
        line-height rem(132)
        display inline-block
        position: absolute
        right rem(20)
      .round
        position absolute
        bottom rem(10)
        right rem(10)
        width rem(80)
        height rem(80)
        background-color #ffc693
        border-radius 50%
        .textA
          width rem(90)
          height rem(90)
          font-size rem(23)
          margin-left rem(-23)
          text-align center
        .textB
          font-size rem(20)
          margin-left rem(-20)
          margin-top rem(-20)
          text-decoration line-through
    .rightBottom
      margin-right rem(20)
      width rem(350)
      height rem(145)
      float right
      background-color #f9cac7
      position relative
      .textA
        font-size rem(32)
        display inline
        margin-left rem(10)
        position absolute
        top rem(20)
        left rem(20)
      .textB
        position absolute
        top rem(65)
        left rem(26)
        font-size rem(24)
        color #3c3c3c
        background-color rgba(0,0,0,0.2)
      .img
        width rem(160)
        height rem(150)
        text-align center
        line-height rem(132)
        display inline-block
        position: absolute
        right rem(20)
      .round
        position absolute
        bottom rem(10)
        right rem(10)
        width rem(80)
        height rem(80)
        background-color #ffefd5
        border-radius 50%
        .textA
          width rem(90)
          height rem(90)
          font-size rem(23)
          margin-left rem(-23)
          text-align center
        .textC
          font-size rem(20)
          color #93410b
          position absolute
          left rem(10)
          bottom rem(5)
          text-decoration line-through




</style>
