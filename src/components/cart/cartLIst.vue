<template>
<div class="cartList">
    <scroll class="scroll">
         <div v-for="(v,i) in list" :key="i" class="cartshop">
             <div class="left">
                 <div class="bo" :class="{'active':v.checked}" @click="btn(i)"></div>
             </div>
             <div class="center">
                 <img :src="v.image" alt="">
             </div>
             <div class="right">
                 <div class="right-item" style="font-weight:bold;padding:5px">{{v.title}}</div>
                 <div class="right-item">{{v.desc}}</div>
                 <div class="right-bottom">
                     <div style="width:50%;display:inline-block">{{v.price}}</div>
                     <div style="width:50%;display:inline-block;text-align:right">x{{v.count}}</div>
                 </div>
             </div>
         </div>
    </scroll>
    </div>    
</template>
<script>
import scroll from "../common/scroll"
import {mapGetter, mapGetters} from "vuex"
export default {
    data(){
        return {
           
        }
    },
    computed:{
        ...mapGetters({
            list:"cartlist"
        })
    },
    components:{
        scroll
    },
    methods:{
        btn(i){
            this.list[i].checked=!this.list[i].checked;
        }
    }
    
}
</script>
<style scoped>
.cartList{
    height: calc(100% - 133px);
}
.scroll{
    height: 100%;
    overflow: hidden;
}
.cartshop{
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 170px;
     border-bottom: 1px solid #ddd;
}
.cartshop .left{
    width: 10%;
    height: 100%;

}
.cartshop .left .bo{
    margin-top: 55px;
    width: 30px;
    height: 30px;
    border-radius: 60px;
    border: 1px solid rgb(211, 205, 205);
}
.cartshop .center
{
    width: 30%;
    text-align: center;
    
}
.cartshop .center img{
    width: 80%;
    margin-top: 20px;
    border-radius: 10px;
}
.cartshop .right{
    width: 60%;
   
}
.cartshop .right .right-item{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
}
.cartshop .right .right-bottom{
margin-top: 60px;
height: 40%;
line-height: 40%;
font-size: 18px;
}
.active{
    background-color: salmon;
}
</style>