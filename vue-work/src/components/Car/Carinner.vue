<template>
  <div class="carIner">
    <div class="header">
      <span class="textA">购物车</span>
      <span class="textB">领劵</span>
    </div>
    <ul class="nav">
      <li class="navLis">
        <van-icon name="circle" class="icon"/>
        <span class="text">30天无忧退还</span>
      </li>
      <li class="navLis">
        <van-icon name="circle" class="icon"/>
        <span class="text">30天无忧退还</span>
      </li>
      <li class="navLis">
        <van-icon name="circle" class="icon"/>
        <span class="text">30天无忧退还</span>
      </li>
    </ul>
    <div class="content">
      <img class="img" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
      <button class="btn" @click="$router.replace(`/Login`)">登录</button>
    </div>

  </div>
</template>

<script>
  import { Icon } from 'vant'
  export default {
    name: "Carinner",
    components:{
      [Icon.name]:Icon,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus.styl"
  .carIner
    position relative
    width rem(750)
    height rem(667*2)
    background-color #f1f1f1
    .header
      display flex
      justify-content space-between
      width rem(750)
      height rem(80)
      align-items center
      background-color #f6f6f6
      .textA
        font-size rem(40)
        color #3c3c3c
        margin-left rem(20)
      .textB
        margin-right rem(20)
        font-size rem(32)
        color darkred
    .nav
      display flex
      justify-content space-between
      width rem(750)
      height rem(80)
      background-color #d3d3d3
      align-items center
      .navLis
        display flex
        justify-content space-around
        align-items center
        margin 0 rem(20)
        width rem(300)
        .icon
          font-size rem(16)
        .text
          font-size rem(25)
          margin-left rem(-30)
    .content
      width rem(750)
      height 100%
      .img
        text-align center
        position absolute
        top 0
        bottom 0
        right 0
        left 0
        margin auto
      .btn
        position absolute
        top 0
        bottom rem(-350)
        right 0
        left 0
        margin auto
        width rem(350)
        height rem(80)
        background-color darkred
        outline none
        color #fff
        font-size rem(32)
        box-shadow none


</style>
