<template>
  <div class="Mister">
    <!--首页头部-->
    <div class="header">
      <img class="header-img" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      <van-search placeholder="请输入搜索关键词" v-model="value" class="search" ></van-search>
      <button class="btn">登录</button>
    </div>
    <!--标签页-->
    <Taber></Taber>
    <!--轮播图-->
    <van-swipe :autoplay="3000" indicator-color="white" class="swipe-img">
      <van-swipe-item>
        <img src="https://yanxuan.nosdn.127.net/7d874fbc2320cd2ea8c124b61a75b15c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://yanxuan.nosdn.127.net/a94a7fe5ae37149aa304144c87dc3188.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://yanxuan.nosdn.127.net/a412dcf435135e294edbcad885786060.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://yanxuan.nosdn.127.net/dcde0a26e79861fe54baee8ddeab2053.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </van-swipe-item>

    </van-swipe>

  </div>
</template>


<script>
  import { Search,Swipe, SwipeItem,} from 'vant';
  import Taber from '../../components/Taber/Tab'
  export default {
    name: "Mister",
   data(){
      return{
        value:'请输入搜索关键词',
      }
   },
    components:{
      [Search.name]:Search,
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem,
      Taber
  }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus.styl';

  .Mister
    .header
      display flex
      padding rem(16) rem(30)
      align-items center
      justify-content center
      .search
        width rem(442)
        height rem(56)
        background #ed0048
        color #660c0b
        border-radius rem(10)
      header-img
        width  rem(138)
        height rem(40)
        margin-right rem(20)
        display inline-block
      .btn
        font-size rem(24)
        background-color transparent
        outline none
        border #fa002f rem(1) solid
        color darkred
        width rem(74)
        height rem(40)
        border-radius rem(10)


    .swipe-img
      text-align center


</style>
