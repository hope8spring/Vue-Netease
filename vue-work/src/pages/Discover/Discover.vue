<template>
  <div class="Discover">
   <Hea></Hea>
    <Footer></Footer>
  </div>
</template>

<script>
  import Hea from '../../components/Discover/Header/Header.vue';
  import Footer from '../../components/Footer/Footer';
  export default {
    name: "Discover",
    components:{
      Hea,
      Footer

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus.styl';
  .Discover
    width rem(750)
    height rem(99999)
</style>
