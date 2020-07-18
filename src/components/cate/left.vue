<template>
  <div class="warpper" ref="aaa">
    <div class="content">
       <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      warpper: null
    };
  },
  mounted() {
    this.warpper = new BScroll(this.$refs.aaa, {
click:true
    });
   
  }
};
</script>
<style scoped>

</style>