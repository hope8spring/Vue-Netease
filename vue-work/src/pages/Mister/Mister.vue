<template>
  <div class="Mister">
    <!--首页头部-->
    <headerB></headerB>
    <!--标签页-->
    <Taber></Taber>
    <!--轮播图-->
    <van-swipe :autoplay="3000" indicator-color="white" class="swipe-img">
      <van-swipe-item v-for="ban in banData">
        <img :src="ban.bg" class="banDataImg">
      </van-swipe-item>
    </van-swipe>
    <!-- 小标签页-->
    <div class="desc">
      <div class="inerDesc">
        <img :src="policy[0].icon"  v-if="policy.length" class="descImg" >
        <span class="text">{{policy[0].desc}}</span>
      </div>
      <div class="inerDesc">
          <img :src="policy[1].icon" v-if="policy.length" class="descImg">
         <span class="text">{{policy[1].desc}}</span>
      </div>
      <div class="inerDesc">
          <img :src="policy[2].icon" v-if="policy.length" class="descImg">
          <span class="text">{{policy[2].desc}}</span>
      </div>
    </div>
    <!--图片-->
    <ul class="swipe-slide">
        <li class="swipeSlideLi">
          <div class="swipiner" v-for="item in slide" v-if="item.liA" >
            <div class="liImg">
              <img class="img" :src="items.lide" v-for="items in item.liA">
            </div>
            <div class="lispan">
              <span v-for="items in item.liA">{{items.text}}</span>
            </div>
          </div>
       </li>
        <li class="swipeSlideLi">
          <div class="swipiner" v-for="item in slide" v-if="item.liB" >
            <div class="liImg">
              <img class="img" :src="items.lide" v-for="items in item.liB">
            </div>
            <div class="lispan">
              <span v-for="items in item.liB">{{items.text}}</span>
            </div>
          </div>
        </li>
     </ul>
    <!--新人freshmanModule专享-->
    <FreshmanModule></FreshmanModule>

    <!--品牌制造商直供-->
    <Supplying></Supplying>

    <!--专题精选-->
    <Topics></Topics>

    <!--swiper-container-->
    <swiperContainer></swiperContainer>
    <!--底部路由-->
    <Footer></Footer>
  </div>
</template>

<script>
  import { Search,Swipe, SwipeItem,} from 'vant';
  import Taber from '../../components/Taber/Tab'
  import Footer from '../../components/Footer/Footer'
  import FreshmanModule from '../../components/Mister/freshmanModule/FreshmanModule.vue'
  import swiperContainer from '../../components/Mister/swiperContainer/swiper-container.vue'
  import headerB from '../../components/Mister/headerB/headerB.vue'
  import Supplying from '../../components/Mister/Supplying/Supplying.vue'
  import Topics from '../../components/Mister/Topics/Topics.vue'
  import axios from 'axios'
  export default {
    name: "Mister",
   data(){
      return{
        banData:[],
        policy:[],
        slide:[],

      }
   },
    components:{
      [Search.name]:Search,
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem,
      Taber,
      Footer,
      FreshmanModule,
      swiperContainer,
      headerB,
      Supplying,
      Topics
  },
    async created(){
      const banDataS = await axios.get("/ban");
      this.banData =banDataS.data.data;
      const policyS = await axios.get("/policyDescList");
      this.policy=policyS.data.data;
    /*  const slideS = await axios.get("/swipeSlide");
      this.slide=slideS.data.data
*/
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus.styl';
/*  html,body
    width 100%
    height 100%
    overflow hidden*/
    .Mister
      width rem(750)
      /*<!--首页头部-->*/
      /* <!--轮播图-->*/
      .swipe-img
        text-align center
        width rem(750)
        height rem(370)
        .banDataImg
          width rem(750)
          height rem(370)
      /*<!-- 小标签页-->*/
      .desc
        width rem(750)
        height rem(72)
        display flex
        justify-content center
        flex 1
        margin-bottom rem(-20)
        margin-top rem(20)
        .inerDesc
          display flex
          width rem(228)
          height rem(36)
          justify-content center
          margin-top rem(15)
          .descImg
            width rem(32)
            height rem(32)
            display inline-block
            text-align center
            vertical-align middle
            line-height rem(32)
          .text
            font-size rem(24)
            display inline-block
            color #333
            height rem(32)
            text-align center
      .swipe-slide
        width rem(750)
        .swipeSlideLi
          margin-bottom rem(-30)
          font-size rem(10)
          display flex
          justify-content center
          flex 1
          .swipiner
            width rem(750)
            /*position relative*/
            margin rem(20)
            .liImg
              width rem(750)
              display flex
              justify-content space-around
              .img
                width rem(110)
                height rem(110)
                display block
            .lispan
              width rem(750)
              display flex
              justify-content space-around
              span
                width rem(110)
                text-align center
                font-size rem(24)
                color #333

    /*图swiper-container片*/

</style>
