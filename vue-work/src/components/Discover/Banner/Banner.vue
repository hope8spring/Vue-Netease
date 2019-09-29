<template>
  <div class="Banner">
    <div class="bgBannerNon">
      <img  class="img" src="https://yanxuan.nosdn.127.net/2079bbd71b87befd24070a83f1080e58.jpg?imageView&quality=65&thumbnail=690y376" alt="">    </div>
    <div class="bgBannerTwo">
      <span class="text">新鲜的，有创意的，可以打开你新世界大门的好物，给你意想不到的生活惊喜！</span>
      <img  class="img" src="https://yanxuan.nosdn.127.net/2c278f4048125b135ab8e3303de65b19.jpg?imageView&quality=65&thumbnail=690y376" alt="">    </div>
    <div class="InternalSelection">
      <div class="selectionRight">

      </div>
      <div class="selectionLeft">
        <img  class="img" src="https://yanxuan.nosdn.127.net/3fb07b212a1c1d3a704f596ed5c31b2e.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Banner"
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
      zoom 1
      .selectionRight
        zoom 1
      .selectionLeft
        .img
         width rem(750)











</style>
