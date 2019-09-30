<template>
  <div class="Header">
    <HeaderS>
       <div class="textContent" slot="conTent">
          <span class="textA">发现</span>
          <span class="textB">甄选家</span>
        </div>
    </HeaderS>
    <van-tabs slot="navTop" class="tabs" swipeable v-model="active" animated sticky title-active-color="#B4282D" >
          <van-tab  title="推荐" class="tabsB" > <Banner></Banner></van-tab>
          <van-tab title="居家生活" class="tabsB">
            <Banner></Banner>
          </van-tab>
          <van-tab title="服饰鞋包"  class="tabsB">
            <Banner></Banner>
          </van-tab>
          <van-tab title="美食酒水"  class="tabsB">
            <Banner></Banner>
          </van-tab>
          <van-tab title="美食酒水"  class="tabsB">
            <Banner></Banner>
          </van-tab>
          <van-tab title="美食酒水"  class="tabsB">
            <Banner></Banner>
          </van-tab>
    </van-tabs>
  </div>

</template>

<script>

  import Banner from '../../../components/Discover/Banner/Banner.vue';
  import HeaderS from '../../../components/Header/Header.vue';

  import { Icon,Tabs,Tab} from 'vant';
  export default {
    name: "Header",
    data(){
      return{
        active:'推荐',
        path:''
      }
    },
    components:{
      [Icon.name]:Icon,
      [Tabs.name]:Tabs,
      [Tab.name]:Tab,
      Banner,
      HeaderS
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus.styl"
  .Header
    width rem(750)





</style>
