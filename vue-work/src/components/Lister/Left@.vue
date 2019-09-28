<template>
  <div class="List">
  <van-sidebar v-model="activeKey" >
    <van-sidebar-item v-for="(Lis,index) in LeftList" :title="Lis.name" @click="to(index)" />
   <!-- <van-sidebar-item title="居家"  to="/Msiter"/>
    <van-sidebar-item title="鞋包服饰" />
    <van-sidebar-item title="服装" />
    <van-sidebar-item title="电器" />
    <van-sidebar-item title="洗护" />
    <van-sidebar-item title="饮食" />
    <van-sidebar-item title="餐厨" />
    <van-sidebar-item title="婴童" />
    <van-sidebar-item title="文体" />
    <van-sidebar-item title="特色区" />-->
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
    methods:{
      to(index){
      this.newArr = this.LeftList.filter((item,i) =>{
         return i ===index
       })
        console.log(this.newArr);
      }
    },
    data() {
      return {
        activeKey: 0,
        LeftList:[],
        newArr:[],
      };
    },
    async created(){
      const LeftLists=await axios.get("/categoryList");
      this.LeftList=LeftLists.data.category;


    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus.styl';
  .List
    width rem(750)
</style>
