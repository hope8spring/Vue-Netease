<template>
  <div>
    <HeaderS>
      <div class="textContent" slot="conTent">
        <img class="textB" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      </div>
    </HeaderS>
    <phoneContent></phoneContent>

  </div>
</template>

<script>
  import HeaderS from '../../components/Header/Header.vue';
  import phoneContent from '../../components/Login/LoginPhone/LonginPhone.vue';

  export default {
    name: "LonginPhone",
    components:{
      HeaderS,
      phoneContent
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
