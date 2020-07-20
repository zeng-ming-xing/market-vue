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
          @click="btn(i,$event)"
        >{{item}}</div>
      </div>
    </navbar>
    <scroll class="croll" :proty="3" ref="coll">
      <swiper :banners="topimage" class="height"></swiper>
      <goodsinfo :Goods="Goods"></goodsinfo>
      <shopinfos :shop="Shop"></shopinfos>
      <params :itemparams="itemparams" ref="aaa"></params>
      <bb :rate="rate.list" ref="bbb"></bb>
      <recommend :skus="skus" ref="ccc" @refsh="resh"></recommend>
    </scroll> 
    <div class="cart">
      <div class="left">
        <div><span>客服</span></div>
        <div><span>店铺</span></div>
        <div><span>收藏</span> </div>
      </div>
      <div class="right"><div @click="addshop">加入购物车</div>
      <div>购买</div></div>
    </div>
  </div>
</template>
<script>
import { getDetail } from "../network/home.js";
import navbar from "../components/common/navbar";
import swiper from "../components/detail/swiper";
import goodsinfo from "../components/detail/goodsinfo.vue";
import shopinfos from "../components/detail/shopinfos";
import scroll from "../components/common/scroll";
import params from "../components/detail/params";
import bb from "../components/detail/bb";
import recommend from "../components/detail/recommend";
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      title: ["商品", "参数", "评论", "推荐"],
      index: 0,
      topimage: null,
      Goods: {},
      Shop: {},
      itemparams: {},
      rate: {},
      skus: {}
    };
  },
  created() {
    //获取数据
    this.iid = this.$route.query.iid;
    getDetail(this.iid).then(res => {
      const dt = res.data.result;
      console.log(dt);
      this.topimage = dt.itemInfo.topImages;
      class goods {
        constructor(iteminfo, colums, services) {
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
          this.logo = shopinfo.shopLogo;
          this.name = shopinfo.name;
          this.fans = shopinfo.cFans;
          this.sells = shopinfo.cSells;
          this.score = shopinfo.score;
          this.goodscount = shopinfo.cGoods;
        }
      }
      this.Goods = new goods(dt.itemInfo, dt.columns, dt.shopInfo.services);
      this.Shop = new shop(dt.shopInfo);
      this.$set(this.itemparams, "rule", dt.itemParams.rule.tables[0]);
      this.$set(this.itemparams, "info", dt.itemParams.info.set);
      this.$set(this.rate, "list", dt.rate.list[0]);
      this.$set(this.skus, "skus", dt.skuInfo.skus);
       console.log(this.topimage);
    });
  },
  mounted() {
    //滚动时切换主题
    this.$refs.coll.scroll.on("scroll", position => {
      let distence = this.$refs.aaa.$el.offsetTop - 5;
      let distence2 = this.$refs.bbb.$el.offsetTop - 5;
      let distence3 = this.$refs.ccc.$el.offsetTop - 5;
      if (
        Math.abs(position.y) >= distence &&
        Math.abs(position.y) < distence2
      ) {
        this.index = 1;
      }
      if (
        Math.abs(position.y) >= distence2 &&
        Math.abs(position.y) < distence3
      ) {
        this.index = 2;
      }
      if (Math.abs(position.y) >= distence3) {
        this.index = 3;
      }
      if (Math.abs(position.y) <= distence) {
        this.index = 0;
      }
    });
  },
  components: {
    navbar,
    swiper,
    goodsinfo,
    shopinfos,
    scroll,
    params,
    bb,
    recommend
  },
  methods: {
    btn(i, ev) {
      //点击滚动到相应位置
      console.log(ev);
      this.index = i;
      if (i == 0) {
        console.log(this.$refs.coll);
        this.$refs.coll.scroll.scrollTo(0, 0, 1000);
      }
      if (i == 1) {
        let distence = this.$refs.aaa.$el.offsetTop;
        this.$refs.coll.scroll.scrollTo(0, -distence, 1000);
      }
      if (i == 2) {
        let distence2 = this.$refs.bbb.$el.offsetTop;
        this.$refs.coll.scroll.scrollTo(0, -distence2, 1000);
      }
      if (i == 3) {
        let distence3 = this.$refs.ccc.$el.offsetTop;
        this.$refs.coll.scroll.scrollTo(0, -distence3, 1000);
      }
    },
    back() {
      //返回到上一级页面
      this.$router.go(-1);
    },
    addshop(){
      //获取商品信息
     const product={};
     product.image=this.topimage[0];
     product.title=this.Goods.title;
     product.desc=this.Goods.desc;
     product.price=this.Goods.neworice;
     product.iid=this.iid;
     //将商品添加到购物车，这里使用vuex进行状态管理
       this.$store.dispatch("addcart",product)
      },
    resh(){
      //当推荐的图片加载完成的回调函数
      this.$refs.coll.scroll.refresh();
    }
  }
}

</script>
<style scoped>
.detail {
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
.croll {
  height: calc(100% - 100px);
  overflow: hidden;
}
.cart {
  width: 100%;
  height: 46px;
  display: flex;
  flex-wrap: nowrap;
}
.cart .left ,.right{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.cart .left div{
  flex: 1;
  text-align: center;
  line-height: 100%;
  border-right: 1px solid rgb(168, 166, 166);
}
.cart .right div{
  flex: 1;
  text-align: center;
   border-right: 1px solid rgb(168, 166, 166);
}
</style>