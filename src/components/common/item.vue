<template>
    <div class="t_item" :class="{'active':this.$route.path==this.path}" @click="btn">
        <slot name="item-active-img" v-if="this.$route.path==this.path"></slot>
        <slot name="item-img" v-else></slot>       
        <slot name="item-text"></slot>
    </div>
</template>
<script>
export default {
    props:{path:String},
    methods:{
          btn(){
              this.$router.replace(this.path)
          }
    }
}
</script>
<style>
.t_item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.active{
  color: red;
}
img{
    width: 20px;
}
</style>