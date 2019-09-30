<template>
  <div class="List">
    <van-search placeholder="请输入搜索关键词" v-model="value" class="search"/>
    <div class="borderPX"></div>
  <van-sidebar v-model="activeKey"  class="navigation">
    <van-sidebar-item v-for="(Lis,index) in LeftList" :title="Lis.name" @click="to(index)" v-if="LeftList"/>
  </van-sidebar>
    <!--右边数据-->
  <div class="RightLister"  v-if="newArr.length">
      <img  class="RightBgImg"   :src="newArr[0].bannerUrl" alt="" v-if="newArr.length"  >
      <ul class="RightContent">
        <li class="Lister" v-for="itmes in newArr[0].subCateList">
          <img  class="ListerImg" :src="itmes.wapBannerUrl" alt="">
          <span class="text">{{itmes.name}}</span>
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
  const OK=0;
  export default {
    name: "Left",
    components:{
      [Sidebar.name]:Sidebar,
      [SidebarItem.name]:SidebarItem,
      [Search.name]:Search,
      Footer,

    },
    methods:{
      to(index){
          this.newArr=this.LeftList.filter((item,i)=>{
            return i===index;
          });
      /*  console.log(this.newArr[0].subCateList);*/
      },

    },
    data() {
      return {
        activeKey: 0,
        LeftList:[],
        newArr:[],
        value:'瘦',
        subCateList:[]
      };
    },
    async mounted(){

      const LeftLists=await axios.get("/categoryList");

      if(LeftLists.data.errno === OK){
        this.newArr.push(LeftLists.data.category[0]);
      /*  this.subCateList.push(this.newArr[0])*/
       /* this.subCateList.push(this.newArr.subCateList)*/
        this.subCateList=this.newArr[0].subCateList;
        console.log(this.newArr[0]);
        this.LeftList=LeftLists.data.category;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus.styl';
  .List
    width rem(750)
    position relative
    .search
      zoom 1
    .borderPX
     border-1px(#7b7b7b)
    .navigation
      width rem(200)
      color plum
    .RightLister
      position absolute
      top rem(120)
      right rem(20)
      .RightBgImg
        width rem(500)
      .RightContent
        display flex
        justify-content end
        flex-wrap wrap
        width rem(500)
        .Lister
          margin-left rem(2)
          margin-bottom rem(30)
          width rem(150)
          height rem(150)
          position relative
          .ListerImg
            width rem(150)
            height rem(150)
            border-radius 50%
            background-size:cover;
            display inline-block
          .text
            font-size rem(24)
            position absolute
            display inline-block
            bottom rem(-35)
            left rem(30)





</style>
