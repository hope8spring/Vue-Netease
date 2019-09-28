<template>
  <div class="SupplyingTitle" >
    <span class="textA">{{title}}</span>
    <span class="textB">更多&gt;</span>
  </div>
</template>

<script>
  export default {
    name: "CopeTitle",
    props:{
      title:String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus.styl"
  .SupplyingTitle
    width rem(750)
    height rem(100)
    padding ren(50)
    font-size #333
    display flex
    justify-content space-between
    align-items center
    .textA
      font-size rem(32)
      margin-left rem(20)
    .textB
      font-size rem(32)
      margin-right rem(20)
</style>
