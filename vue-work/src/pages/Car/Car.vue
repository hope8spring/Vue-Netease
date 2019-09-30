<template>
  <div>
    <Carinner></Carinner>
    <Footer></Footer>
  </div>
</template>

<script>
  import Carinner from '../../components/Car/Carinner'
  import Footer from '../../components/Footer/Footer';
  export default {
    name: "Car",
    components:{
      Carinner,
      Footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
