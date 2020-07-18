<template>
  <div class="detail">
    <navbar style="z-index:999;background:white;">
      <div slot="left" @click="back">
        <img src="../assets/img/back.svg" alt />
      </div>
      <div slot="center" class="content">
        <div
          v-for="(item,i) in title"
          :key="i"
          :class="{'active':i==index}"
          @click="btn(i)"
        >{{item}}</div>
      </div>
    </navbar>
    <scroll class="croll" :proty="3">
    <swiper :banners="topimage" class="height"></swiper>
    <goodsinfo :Goods="Goods"></goodsinfo>
    <shopinfos :shop="Shop"></shopinfos>
    <params :itemparams="itemparams"></params>
    </scroll>
  </div>
</template>
<script>
import {getDetail} from "../network/home.js"
import navbar from "../components/common/navbar";
import swiper from "../components/detail/swiper";
import goodsinfo from "../components/detail/goodsinfo.vue";
import shopinfos from "../components/detail/shopinfos"
import scroll from "../components/common/scroll"
import params from "../components/detail/params"
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      title: ["商品", "参数", "评论", "推荐"],
      index: 0,
      topimage: null,
      Goods:{},
      Shop:{},
      itemparams:{}
    };
  },
  created() {
    this.iid = this.$route.query.iid;
    getDetail(this.iid).then(res => {
      const dt = res.data.result;
      console.log(dt);
      this.topimage = dt.itemInfo.topImages;
      class goods {
        constructor(iteminfo,colums,services) {
          this.title = iteminfo.title;
          this.desc = iteminfo.desc;
          this.neworice = iteminfo.price;
          this.oldpreice = iteminfo.oldPrice;
          this.discount = iteminfo.discountDesc;
          this.colums = colums;
          this.services = services;
          this.realprice = iteminfo.lowNowPrice;
        }
      }
       class shop {
    constructor(shopinfo) {
        this.logo = shopinfo.shopLogo
        this.name = shopinfo.name
        this.fans = shopinfo.cFans
        this.sells = shopinfo.cSells
        this.score = shopinfo.score
        this.goodscount = shopinfo.cGoods
    }
}
      this.Goods = new goods(dt.itemInfo,dt.columns,dt.shopInfo.services);
      this.Shop = new shop(dt.shopInfo);
       this.$set(this.itemparams,"rule",dt.itemParams.rule.tables);
      this.$set(this.itemparams,"info",dt.itemParams.info.set);
     console.log(this.itemparams.rule);
    });
  },
  mounted() {},
  components: {
    navbar,
    swiper,
    goodsinfo,
    shopinfos,
    scroll,
    params
  },
  methods: {
    btn(i) {
      this.index = i;
    },
    back(){
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.detail{
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: white;
}
.content {
  display: flex;
}
.content div {
  flex: 1;
}
.active {
  color: red;
}
.croll{
  
height: calc(100% - 44px);
  overflow: hidden;
}
</style>