<template>
  <div class="warpper" ref="bbb">
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
    //定义滑动对象
    this.warpper = new BScroll(this.$refs.bbb, {
  click:true
    });
  }
};
</script>
<style scoped>
.warpper{
    width: 70%;
    height: calc(100% - 49px);
    position: relative;
}
.content{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
</style>
