<template>
  <div class="List">

  <van-sidebar v-model="activeKey" v-for="Lis in LeftList">
    <van-sidebar-item :title="Lis.name" />

  </van-sidebar>
  </div>
</template>

<script>
  import { Sidebar, SidebarItem } from 'vant';
  import axios from 'axios';
  export default {
    name: "Left",
    components:{
      [Sidebar.name]:Sidebar,
      [SidebarItem.name]:SidebarItem
    },
    data() {
      return {
        activeKey: 0,
        LeftList:[]
      };
    },
    async created(){
      const LeftLists=await axios.get("/categoryList");
      this.LeftList=LeftLists.data.category;
      console.log(this.LeftList.name);

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus.styl';
  .List
    width rem(750)
</style>
