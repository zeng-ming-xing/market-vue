<template>
  <div class="wrapper" ref="wap">

    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
    name:"scroll",
    props:{
        proty:{
            type:Number,
            default:0
        }
    },
    data(){
        return {
            scroll:null
        }
    },
    mounted(){
        //如果ref绑定在一个组件中，我们拿到的是一个组件对象
        //如果绑定在一个普通元素中，我们拿到的是一个元素对象
this.scroll=new BScroll(this.$refs.wap,{
  probeType:this.proty,
  click:true,
  //开启上拉加载更多功能
  pullUpLoad:true
      }) ,
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    }
}
</script>
<style scoped>
</style>