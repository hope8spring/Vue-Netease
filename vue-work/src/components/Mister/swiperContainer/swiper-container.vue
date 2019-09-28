<template>
  <!--swiper-container-->
  <div class="swiper-container">
    <img  class="containerBgimg" src="https://yanxuan.nosdn.127.net/959e2edb6b5a070d8c3571967ea9a704.gif" alt="">
    <ul class="containerContent">
      <li class="ContentLis">
        <div class="titleText">9.9超值专区</div>
        <span class="text">190款商品定价直降</span>
        <div class="LisContent">
          <img  class="LisImgA"  src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img class="LisImgB"  src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75">
        </div>
      </li>
      <li class="ContentLis">
        <div class="titleText">9.9超值专区</div>
        <span class="text">190款商品定价直降</span>
        <div class="LisContent">
          <img  class="LisImgA"  src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img class="LisImgB"  src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75">
        </div>
      </li>
      <li class="ContentLis">
        <div class="titleText">9.9超值专区</div>
        <span class="text">190款商品定价直降</span>
        <div class="LisContent">
          <img  class="LisImgA"  src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img class="LisImgB"  src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75">
        </div>
      </li>
      <li class="ContentLis">
        <div class="titleText">9.9超值专区</div>
        <span class="text">190款商品定价直降</span>
        <div class="LisContent">
          <img  class="LisImgA"  src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img class="LisImgB"  src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75">
        </div>
      </li>
    </ul>

  </div>
</template>
<script>
  export default {
    name: "swiperContainer"
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus.styl"
  .swiper-container
    display inline-block
    width rem(750)
    .containerBgimg
      width rem(750)
      height rem(127)
    .containerContent
      width rem(750)
      text-align center
      .ContentLis
        position relative
        margin-right rem(5)
        margin-bottom rem(5)
        display inline-block
        width rem(343)
        height rem(264)
        background-color #F5F5F5
        .titleText
          font-size rem(32)
          position absolute
          left rem(8)
          top rem(5)
          color #333
        .text
          margin-left rem(-128)
          font-size rem(24)
          left rem(8)
          color #7F7F7F
        .LisContent
          zoom 1
          .LisImgA
            width rem(150)
            height rem(150)
          .LisImgB
            width rem(150)
            height rem(150)

</style>
