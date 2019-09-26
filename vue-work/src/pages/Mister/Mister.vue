<template>
  <div class="Mister">
    <!--首页头部-->
    <div class="headerB">
    <div class="hea">
      <img class="header-img" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" >
      <form action="/"  >
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
    <!--标签页-->
    <Taber></Taber>
    </div>
    <!--轮播图-->
    <van-swipe :autoplay="3000" indicator-color="white" class="swipe-img">
      <van-swipe-item v-for="ban in banData">
        <img :src="ban.bg" class="banDataImg">
      </van-swipe-item>
    </van-swipe>
    <!-- 小标签页-->
    <div class="desc">
      <div>
        <i class="icon">
        </i>
        <span class="text">{{policy.desc}}</span>
      </div>

    </div>
    <!--底部路由-->
    <Footer></Footer>
  </div>
</template>


<script>
  import { Search,Swipe, SwipeItem,} from 'vant';
  import Taber from '../../components/Taber/Tab'
  import Footer from '../../components/Footer/Footer'

  import axios from 'axios'
  export default {
    name: "Mister",
   data(){
      return{
        value:'请输入搜索关键词',
        banData:[],
        policy:[]
      }
   },
    components:{
      [Search.name]:Search,
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem,
      Taber,
      Footer
  },
    async created(){
      const a = await axios.get("/ban");
      this.banData =a.data.data;
      const b = await axios.get("/policyDescList");
      this.policy=b.data.data

    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus.styl';

  .Mister
    .headerB
      margin  rem(2) rem(0) rem(2) rem(16)
      .hea
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
      width rem(750)
      height rem(370)
      .banDataImg
        width rem(750)
        height rem(370)
    .desc
      width rem(750)
      font-size rem(25)
      display flex
      justify-content center
      .icon
        width rem(20)
        height rem(20)
      .text
        display inline-block
        margin rem(20)








</style>
