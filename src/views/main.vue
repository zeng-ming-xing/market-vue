<template>
  <div class="main">
    <navbar class="main-nav">
      <div slot="center">购物街</div>
    </navbar>
    <tabcontrl :title="['流行','新款','精选']" @cut="qiehuan" v-show="tabshow" class="fixed"></tabcontrl>
    <scroll class="content" ref="scl" @pullingUp="loadMore" :proty="3">
      <mainswiper :banners="banners" class="height"></mainswiper>
      <navcenter :recommends=" recommends"></navcenter>
      <feature :keywords="keywords" :dKeyword="dKeyword" ></feature>
      <tabcontrl :title="['流行','新款','精选']" @cut="qiehuan" ref="ccc"></tabcontrl>
      <goodslist :goods="goods[current].list"></goodslist>
    </scroll>
    <!--native修饰符，在监听组件的事件的时候必须加native修饰符才能正确监听-->
    <backtop class="back" @click.native="backclick" v-show="displ"></backtop>
  </div>
</template>
<script>
import navbar from "../components/common/navbar.vue";
import { getmaindata, gethomegoods } from "../network/home.js";
import mainswiper from "../components/swiper/mainswiper.vue";
import navcenter from "../components/connet/navcenter.vue";
import feature from "../components/connet/feature.vue";
import tabcontrl from "../components/connet/tabcontrl";
import goodslist from "../components/connet/goodslist";
import scroll from "../components/common/scroll";
import backtop from "../components/common/backtop";
export default {
  data() {
    return {
      banners: [],
      recommends: [],
      keywords: [],
      dKeyword: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      current: "pop",
      scrolltop: 0,
      displ: false,
      tabshow:false
    };
  },
  components: {
    navbar,
    mainswiper,
    navcenter,
    feature,
    tabcontrl,
    goodslist,
    scroll,
    backtop
  },
  created() {
    getmaindata().then(
      res => {
        this.banners = res["data"]["data"]["banner"].list;
        this.recommends = res["data"]["data"].recommend.list;
        this.keywords = res["data"]["data"].keywords.list;
        this.dKeyword = res["data"]["data"].dKeyword.list;
      },
      this.gethomegoods("pop"),
      this.gethomegoods("new"),
      this.gethomegoods("sell")
    );
  },
  mounted() {
    this.$refs.scl.scroll.on("scroll", position => {
      const y=Math.abs(position.y)
      //元素距离父元素顶部的距离
      const aa=this.$refs.ccc.$el.offsetTop
      if (y < aa) {
        this.displ = false;
        this.tabshow=false
      } else {
        this.displ = true;
        this.tabshow=true
      }
    })
  },
  methods: {
    gethomegoods(type) {
      const p = this.goods[type].page + 1;
      gethomegoods(type, p).then(res => {
        console.log(res.data.data.list);
        //...表示将该数组展开进行结构赋值
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page +=1;
        this.$refs.scl.scroll.finishPullUp();
      });
    },
    qiehuan(index) {
      switch (index) {
        case 0:
          this.current = "pop";
          break;
        case 1:
          this.current = "new";
          break;
        case 2:
          this.current = "sell";
          break;
      }
    },
    backclick() {
      this.$refs.scl.scroll.scrollTo(0, 0, 1000);
    },
    loadMore() {
       this.gethomegoods(this.current);
     this.$refs.scl.scroll.refresh();
    }
  }
};
</script>
<style scoped>
.main {
  /*vh代表的是视口高度 */
  height: 100vh;
  overflow: hidden;
}
.main-nav {
  font: 1.5em;
  color: white;
  background-color: tomato;
  position: fixed;
  width: 100%;
  z-index: 999;
}
.hegiht {
  margin-top: 44px;
}
.content {
  height: calc(100% - 93px);
  margin-top: 44px;
  overflow: hidden;
}
.fixed{
  position: fixed;
  top: 44px;
  z-index: 9999;
}

/* .stop {
  position: sticky;
  top: 44px;
} */
</style>