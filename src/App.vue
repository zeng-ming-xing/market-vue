<template>
  <div id="app">
    <!--keepalive可以保存离开页面时当前页面的状态，保存位置，数据等-->
    <keep-alive>  </keep-alive>
    <router-view></router-view>
 
    <maintabbar></maintabbar>
  </div>
</template>
<script>
import maintabbar from "./components/connet/maintabbar"
export default {
  name:"app",
  components: {
maintabbar
  }
};
</script>
<style>
@import "assets/css/base.css";
</style>
