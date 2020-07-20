<template>
  <div class="bottom">
    <div class="contrl">
      <div class="btn" :class="{'active':isselectedall}" @click="btn1"></div>
      <div class="all">全选</div>
    </div>
    <div class="num">合计{{total}}</div>
    <div class="sum">   去计算{{len}}</div>
  </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    computed:{
        total(){
            //返回商品总价格
            return this.$store.state.catList.filter(item=>{
                return item.checked==true
            }).reduce((prevalue,item)=>{
                return prevalue + Number(item.price.slice(1))* item.count;
            }, 0).toFixed(2)
        },
        len(){
            //返回商品数量
           return  this.$store.state.catList.filter(item=>{
                return item.checked==true
            }).length
        },
        isselectedall(){
            //判断是否全部选中
           return !(this.$store.state.catList.length?this.$store.state.catList.filter(item=>{return item.checked==false}).length:true)
        }
    },
    methods:{
        btn1(){
            //当商品全部选中
           if(this.isselectedall){
               this.$store.state.catList.map(item=>{
                   item.checked=false
               })
           }
           //有部分选中
           else{
this.$store.state.catList.map(item=>{
                   item.checked=true
               })
           }
        }
    }
}
</script>
<style scoped>
.bottom {
  width: 100%;
  height: 40px;
  background-color: rgb(230, 230, 238);
  display: flex;
}
.contrl {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  width: 25px;
  height: 25px;
  border-radius: 30px;
  border: 1px solid;
}
.all {
 
  
  font-size: 18px;
 
}
.num{
    width: 50%;
     font-size: 20px;
     margin-top: 10px;
}
.sum{
    width: 25%;
    font-size: 20px;
    background-color: rgb(238, 192, 192);
    text-align: center;
    vertical-align: middle;
}
.active{
    background-color: tomato;
}
</style>