<template>
  <div class="longinPhone">
    <div class="content">
      <div class="phone">请输入手机号</div>
      <div class="borderPx"></div>
      <div class="verification">
        <div class="verificationCode">请输入短信验证码</div>
        <div class="getCode">获取验证码</div>
      </div>
      <div class="borderPx"></div>
      <div class="borderPx"></div>
      <div class="question">
        <div class="textA">遇到问题？</div>
        <div class="textB">使用密码登录</div>
      </div>
      <div class="borderPx"></div>
      <div class="longin">登录</div>
      <div class="agree">
        <i class="iconfont icon-tongyi"></i>
        <span class="text">我同意服务条款</span>
      </div>
      <div class="else">
        其他登录方式 &gt;
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LonginPhone"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus.styl"
  .longinPhone
    width rem(750)
    height rem(667*2)
    position relative
    .content
      width rem(700)
      position absolute
      right 0
      left 0
      top rem(300)
      bottom 0
      margin auto
      .phone
        margin-top rem(30)
        font-size rem(32)
        color #3c3c3c3
        margin-bottom rem(30)
      .borderPx
        width rem(700)
        border-1px(#d3d3d3)
      .verification
        width rem(700)
        display flex
        justify-content space-between
        align-items center
        font-size rem(32)
        color #3c3c3c3
        margin-bottom rem(30)
        margin-top rem(30)
        .verificationCode
          font-size rem(32)
          color #3c3c3c3
          .getCode
            width rem(200)
            height rem(200)
            border rem(1) solid #333
      .borderPx
        width rem(700)
        border-1px(#d3d3d3)
      .question
        width rem(700)
        display flex
        justify-content space-between
        align-items center
        font-size rem(32)
        color #3c3c3c3
        margin-bottom rem(30)
        margin-top rem(30)
        .textA
          zoom 1
        .textB
          zoom 1
      .borderPx
        width rem(700)
        border-1px(#d3d3d3)
      .longin
        background-color darkred
        width rem(600)
        height rem(90)
        font-size rem(32)
        color #fff
        text-align center
        line-height rem(90)
        margin-top rem(30)
        margin-left rem(50)
      .agree
        text-align center
        .iconfont
          font-size rem(32)
          display inline-block
          color #4d555d
        .text
          font-size rem(32)
          color #3c3c3c
          display inline-block
      .else
        font-size rem(32)
        text-align center

</style>
