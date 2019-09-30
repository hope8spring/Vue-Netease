<template>
  <div class="Lister">
    <Left></Left>


  </div>

</template>

<script>
  import Left from '../../components/Lister/Left'
  export default {
    name: "Lister",

    components:{
      Left
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus.styl';
  .Lister
    width rem(750)
    div
      height rem(20)
</style>
