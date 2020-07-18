<template>
  <div class="bb">
    <div class="comment">
      <div class="item1">用户评价</div>
      <div class="item2">更多</div>
    </div>
    <div class="session">
        <div>
            <img style="width:20%" :src="rate.user.avatar">
            <span style="vertical-align: 10px;">{{rate.user.uname}}</span>
        </div>
        <div style="font-size:18px;padding:20px">{{rate.content}}</div>
        <div style="text-align:center">{{rate.style}}</div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
  props: {
    rate: {
      type: Object
    }
  }
};
</script>
<style scoped>
.bb {
  margin-top: 20px;
  border-top: 3px solid rgb(233, 229, 229);
  width: 100%;
}
.comment {
  width: 100%;
  border-bottom: 2px solid rgb(223, 220, 220);
  height: 50px;
}
.comment .item1,
.item2 {
  width: 50%;
  display: inline-block;
  font-size: 20px;
  line-height: 50px;
}
.item2 {
  text-align: right;
}
</style>