<template>
      <div class="warpper">
     <div>a</div>
     <div>a</div>
     <div></div>
     <div></div>
     <div></div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            warpper:null
        }
    },
    mounted(){
       this.warpper=new BScroll(document.querySelector('.warpper'),{})
    }
}
</script>
<style scoped>
.warpper{
    height: 100%;
    width: 30%;
    background-color: red;
    overflow: hidden;
    /* overflow-y: scroll; */
}
</style>