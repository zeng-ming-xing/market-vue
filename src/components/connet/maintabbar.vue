<template>
  <div class="miantabbar">
    
    <tabbar>
      <item path="/main">
      <img slot="item-img" src="../../assets/img/home.png" alt="">
        <img slot="item-active-img" src="../../assets/img/home-active.png" alt="">
        <div slot="item-text">首页</div>
      </item>
      <item path="/category">
      <img slot="item-img" src="../../assets/img/category2.png" alt="">
        <img slot="item-active-img" src="../../assets/img/Category.png" alt="">
        <div slot="item-text">分类</div>
      </item>
      <item path="/cart">
      <img slot="item-img" src="../../assets/img/category2.png"  alt="">
        <img slot="item-active-img" src="../../assets/img/category1.png" alt="" >
        <div slot="item-text">购物车</div>
      </item>
      <item path="/profile">
      <img slot="item-img" src="../../assets/img/my.png" alt="">
        <img slot="item-active-img" src="../../assets/img/wo.png" alt="">
        <div slot="item-text">我的</div>
      </item>
    </tabbar>
  </div>
</template>
<script>
import item from "../common/item.vue";
import tabbar from "../common/tabbar.vue";
export default {
  components: {
    tabbar,
    item
  }
};
</script>
<style>

</style>
