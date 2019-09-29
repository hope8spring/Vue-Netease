<template>
  <div class="headerB">
    <div class="hea">
      <img class="header-img" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" >
      <form action="/" class="search" >
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          show-action:true

        />
      </form>
      <!--<van-search placeholder="请输入搜索关键词" v-model="value" class="search" ></van-search>-->
      <button class="btn">登录</button>
    </div>
  </div>
</template>

<script>
  import { Search,Swipe, SwipeItem,} from 'vant';
  export default {
    name: "headerB",
    data(){
      return{
        value:'请输入搜索关键词',
        banData:[],
        policy:[],
        slide:[],

      }
    },
    components:{
      [Search.name]:Search,
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem,

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus.styl"
  .headerB
    .hea
      width rem(750)
      height rem(88)
      display flex
      align-items center
      justify-content center
      .search
        width rem(442)
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
</style>
