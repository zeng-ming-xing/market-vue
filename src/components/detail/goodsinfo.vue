<template>
    <div class="goodsinfo">
       <div class="main-info">
           <p class="fon">{{Goods.title}}</p>
           <div class="price">
               <span style="color:red;font-size:24px">{{Goods.oldpreice}}</span>
               <span style="text-decoration:line-through;">{{Goods.realprice?Goods.realprice:''}}</span>
               <span style="background:red;color:white;border-radius: 10px;">{{Goods.discount?Goods.discount:''}}</span>
           </div>
           <div class="hort">
            <div v-for="(item,i) in Goods.colums" :key="i" class="hort-item">
                {{item}}
            </div>
           </div>
           <div class="send">
               <div v-for="(item,i) in Goods.services" :key="i" class="send-item">
                   <img :src="item.icon" alt="">
                   <span>{{item.name}}</span>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    name:"detailinfo",
    data(){
        return {}
    },
    props:{
        Goods:{
        type:Object
        }
    },

}
</script>
<style scoped>
.fon{

    font-size:20px;
    font-weight: bold;
    
}
.hort{
    display: flex;
    border-bottom: 5px solid rgb(245, 243, 243);
}
.hort-item{
    padding: 5px;
    height: 20px;
    line-height: 20px;
    flex: 1;
    text-align: center;
}
.send{
    display: flex;
    font-size:12px ;
    justify-content: center;
    align-items: center;
}
.send-item{
    flex: 1;
    white-space: nowrap;
}
</style>