<template>
<div>
  <van-tabbar v-model="active" active-color="red">
    <van-tabbar-item name="home" icon="home-o" to="/Mister" >首页</van-tabbar-item>
    <van-tabbar-item name="search" icon="apps-o" to="/Lister">分类</van-tabbar-item>
    <van-tabbar-item name="friends" icon="eye-o" to="/Discover">识物</van-tabbar-item>
    <van-tabbar-item name="setting" icon="shopping-cart-o"  to="/Car">购物车</van-tabbar-item>
    <van-tabbar-item name="setting" icon="manager-o"  to="/Login">个人</van-tabbar-item>
  </van-tabbar>
</div>
</template>


<script>
  import { Tabbar, TabbarItem } from 'vant';
  export default {
    name: "Footer",
    data() {
      return {
        active: 'home',


      }
    },
    components:{
      [Tabbar.name]:Tabbar,
      [TabbarItem.name]:TabbarItem,

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
