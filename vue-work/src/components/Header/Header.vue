<template>
  <div>
    <div class="head">
      <van-icon name="wap-home-o" class="wapHome"  @click="$router.replace(`/Mister`)"/>
      <slot name="conTent">
       <!-- <div class="textContent">
          <span class="textA">发现</span>
          <span class="textB">甄选家</span>
        </div>-->
      </slot>
      <div class="icon">
        <van-icon name="search" />
        <van-icon name="shopping-cart-o" />
      </div>
    </div>
    <div class="borderPX"></div>
  </div>
</template>

<script>
  import { Icon} from 'vant';
  export default {
    name: "Header",
    components:{
      [Icon.name]:Icon,

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus.styl"
  .head
    width rem(750)
    display flex
    justify-content space-between
    .wapHome
      font-size rem(60)
      color #7b7b7b
      margin rem(10)
  .textContent
    display flex
    justify-content center
    align-items center
    .textA
      font-size rem(35)
      font-weight bold
      color red
      margin-right  rem(20)
    .textB
      font-size rem(30)
  .icon
    display inline-block
    font-size rem(60)
    margin rem(10)

  .borderPX
    border-1px(#7b7b7b)
</style>
