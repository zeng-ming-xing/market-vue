<template>
    <div class="goodslist">
          <div v-for="(item,i) in goods" :key="i" class="goodsitem">
               
                    <img :src="item.show.img" alt="" @click="detail(i)">
               
                <div class="item-info">
                <p>{{item.title}}</p>
                <span style="color:red">{{item.price}}</span>
                <span class="collect" >{{item.cfav}}</span>
                </div>
          </div>                
    </div>
</template>
<script>
export default {
    props:{
        goods:{
            type:Array,
            defalut:[]
        }
    },
    methods:{
        detail(i){
            this.$router.push({
                path:"/detail",
                query:{
                    iid:this.goods[i].iid
                }
            })
        }
    }
}
</script>
<style scoped>
.goodslist{
    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;  
}
.goodsitem{
  width: 48%;
  padding-bottom: 10px;
text-align: center;
 font-size: 18px;
}
.goodsitem img{
    width: 100%;
    border-radius: 5px;
}
.goodsitem .item-info{
    text-align: center;
}
.goodsitem .item-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.goodsitem .item-info .collect{
 margin-left: 10px;
}
.goodsitem .item-info .collect::before{
    background: url("../../assets/img/collect.svg") 0 0/14px 14px;
}
</style>