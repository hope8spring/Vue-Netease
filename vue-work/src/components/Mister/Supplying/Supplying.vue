<template>
  <div class="Supplying">
    <CopeTitle :title="`品牌制作商提供`">

    </CopeTitle>
    <ul class="SupplyingUl">
      <li class="lis">
        <span class="title">海外制造商</span>
        <img  class="img" src="https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?" alt="">
        <div class="botoom">
          <span class="textA">9.9元起</span>
          <span class="textB">上新</span>
        </div>
        </li>
      <li class="lis">
        <span class="title">海外制造商</span>
        <img  class="img" src="https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?" alt="">
        <div class="botoom">
          <span class="textA">9.9元起</span>

        </div>
      </li>
      <li class="lis">
        <span class="title">海外制造商</span>
        <img  class="img" src="https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?" alt="">
        <div class="botoom">
          <span class="textA">9.9元起</span>
        </div>
      </li>
      <li class="lis">
        <span class="title">海外制造商</span>
        <img  class="img" src="https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?" alt="">
        <div class="botoom">
          <span class="textA">9.9元起</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Supplying",
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus.styl"
  .Supplying
    width rem(750)
    margin
    .SupplyingUl
      clearFix()
      display flex
      flex-wrap wrap
      justify-content center
      width rem(750)

      .lis
        width rem(350)
        height rem(300)
        margin rem(5)
        background-color #EEEEEE
        position relative
        .title
          width rem(350)
          font-size rem(25)
          color #333
          text-align center
          display block
          padding-top rem(20)
          z-index 999
          position relative
        .botoom
          text-align center
          width rem(350)
          height rem(20)
          margin-top rem(-50)
          position relative
          z-index 99999
          .textA
            width rem(350)
            font-size rem(20)
            color #7F7F7F
            margin-right rem(8)
            text-align center
          .textB
            width rem(50)
            background-color #CBb693
            color #fff
            font-size rem(24)
            padding rem(2)
            text-align center
        .img
          width rem(350)
          height rem(300)
          text-align center
          position absolute
          top 0




</style>
