<template>
  <div id="app">
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
