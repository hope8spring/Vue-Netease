<template>
  <div class="Discover">
   <Hea></Hea>
   <Banner></Banner>
  </div>
</template>

<script>
  import Hea from '../../components/Discover/Header/Header.vue';
  import Banner from '../../components/Discover/Banner/Banner.vue';
  export default {
    name: "Discover",
    components:{
      Hea,
      Banner
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus.styl';
  .Discover
    width rem(750)
    height rem(99999)
</style>
