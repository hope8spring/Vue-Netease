<template>
  <div class="List">
    <van-search placeholder="请输入搜索关键词" v-model="value" class="search"/>
  <van-sidebar v-model="activeKey"  class="navigation">
    <van-sidebar-item v-for="(Lis,index) in LeftList" :title="Lis.name"  @click="to(index)" />
  </van-sidebar>
    <!--右边数据-->
    <div class="RightLister">
      <img  class="RightBgImg" src="https://yanxuan.nosdn.127.net/01467535cd09249bd5cf0ae110845892.jpg?imageView&quality=75&thumbnail=0x196" alt="">
      <ul class="RightContent">
        <li class="RightLister">
          <img  class="ListerImg"  src="http://yanxuan.nosdn.127.net/4628932649a190c464d138c9236591fa.png" alt="">
          <span class="text">明星商品</span>
        </li>
      </ul>

    </div>

  <Footer></Footer>
  </div>
</template>

<script>

  import { Sidebar, SidebarItem ,Search } from 'vant';
  import axios from 'axios';
  import Footer from '../../components/Footer/Footer'
  export default {
    name: "Left",
    components:{
      [Sidebar.name]:Sidebar,
      [SidebarItem.name]:SidebarItem,
      [Search.name]:Search,
      Footer
    },
    methods:{
      to(index){
        this.newArr=this.LeftList.filter((item,i)=>{
          return i===index
        })
        console.log(this.newArr);
      }

    },
    data() {
      return {
        activeKey: 0,
        LeftList:[],
        newArr:{}

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
    .search
      zoom 1
    .navigation
      zoom 1

</style>
