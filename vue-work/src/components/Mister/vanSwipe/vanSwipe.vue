<template>
  <div>
  <van-swipe :autoplay="3000" indicator-color="white" class="swipe-img">
    <van-swipe-item v-for="ban in banData">
      <img :src="ban.bg" class="banDataImg">
    </van-swipe-item>
  </van-swipe>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "vanSwipe",
    data(){
      return{
        banData:[],
      }
    },

    async created(){
      const banDataS = await axios.get("/ban");
      this.banData =banDataS.data.data;
      const policyS = await axios.get("/policyDescList");
      this.policy=policyS.data.data;
      const slideS = await axios.get("/swipeSlide");
      this.slide=slideS.data.data

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus.styl"
  .swipe-img
    text-align center
    width rem(750)
    height rem(370)
    .banDataImg
      width rem(750)
      height rem(370)
</style>
