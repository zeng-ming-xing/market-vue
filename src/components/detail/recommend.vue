<template>
  <div class="recommend">
      <div v-for="(item,i) in skus.skus" :key="i" class="reco">
          <img :src="item.img" alt="" @load="roll"> <span style="display:block">{{item.style}}</span>
         </div></div>    
</template>
<script>
export default {
    data(){
        return {
            imgnum:0
        }
    },
    props:{skus:{type:Object}},
    methods:{
        roll(){
            //图片加载完成时调用的函数，当全部图片加载完成时向父组件发射时间
             if(this.imgnum==this.skus.skus.length-1){
                 this.$emit("refsh")                
             }
             else{this.imgnum+=1;}
        }
    }
}
</script>
<style scoped>
.recommend{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.reco{
  flex: 1;
  width: 47%;
  text-align: center;
}
.reco>img{
    width: 170px;
    border-radius:10px ;
}
</style>