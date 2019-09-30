<template>
  <div class="LoginIner">
    <HeaderS>
       <div class="textContent" slot="conTent">
         <img class="textB" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
       </div>
    </HeaderS>
    <div class="content">
      <img  class="img"  src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      <div class="contentPhone">
        <van-icon  name="phone-circle-o" class="iconPhone" />
        <span class="text" @click="$router.replace(`/LoginPhone`)">手机号快捷登录</span>
      </div>
      <div class="contentEmail">
        <van-icon name="envelop-o"  class="iconEmail"/>
        <span class="text">邮箱登录</span>
      </div>
   </div>
    <ul class="bottom">
      <li class="bottomLis">
        <i class="iconfont icon-weibo"></i>
        <span class="text">微信</span>
      </li>
      <li class="bottomLis">
        <i class="iconfont icon-weixin"></i>
        <span class="text">微信</span>
      </li>
      <li class="bottomLis">
        <i class="iconfont icon-qq"></i>
        <span class="text">qq</span>
      </li>
    </ul>
    <Footer></Footer>
  </div>
</template>

<script>

  import HeaderS from '../../components/Header/Header.vue';
  import Footer from '../../components/Footer/Footer';
  import {Icon} from 'vant'
  export default {
    name: "Login",
    components:{
      HeaderS,
      Footer,
      [Icon.name]:Icon


    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus.styl"
  .LoginIner
    width rem(750)
    height rem(667*2)
    .content
      position relative
      height rem(1034)
      background-color #e2e2e2
      .img
        width rem(350)
        text-align center
        position absolute
        right 0
        left 0
        top rem(-150)
        bottom 0
        margin auto
      .contentPhone
        background-color darkred
        width rem(600)
        height rem(90)
        justify-content center
        display flex
        align-items center
        position absolute
        right 0
        left 0
        top rem(300)
        bottom 0
        margin auto
        .iconPhone
          text-align center
          display inline-block
          font-size rem(26)
          color #fff
        .text
          font-size rem(26)
          color #fff
      .contentEmail
        background-color darkred
        width rem(600)
        height rem(90)
        justify-content center
        display flex
        align-items center
        position absolute
        right 0
        left 0
        top rem(500)
        bottom 0
        margin auto
        .iconEmail
          text-align center
          display inline-block
          font-size rem(26)
          color #fff
        .text
          font-size rem(26)
          color #fff
    .bottom
      background-color #e2e2e2
      width rem(750)
      height rem(200)
      display flex
      align-items center
      justify-content center
      .bottomLis
        text-align center
        width rem(200)
        height rem(200)
        .iconfont
          font-size rem(26)
          color #bbbbbb
          border-right  rem(1) solid #afafaf
          margin-right rem(10)
        .text
          font-size rem(30)
          margin-right rem(20)

</style>
