<template>
 <div class="category">
     <left class="content">
         <div v-for="(item,i) in list" :key="i" class="cate" @click="getdata(i)">
             <div>{{item.title}}</div>
         </div>
     </left>
     <right>
         <div  v-for="(item,i) in categorys" :key="i" class="right-item">
             <a :href="item.link">
                 <img :src="item.image" alt="">
             </a>
             <span>{{item.title}}</span>
         </div>
     </right>
 </div>
</template>
<script>
import left from "../components/cate/left"
import {getcategory} from '../network/home'
import {getSubcategory} from '../network/home'
import {getCategoryDetail} from '../network/home'
import right from '../components/cate/right'
export default {
    data(){
        return {
          list:[],
          categorys:[]
        }
    },
    components:{
        left,
        right
    },
    created(){
       this.getcategory()
    },
    methods:{
        getcategory(){
            getcategory().then(res=>{
            this.list=res.data.data.category.list
            console.log(this.list);
            this.getdata(0);
            })
            
        },
        getdata(i){
            console.log(this.list[i].maitKey);
            getSubcategory(this.list[i].maitKey).then(res=>{
                this.categorys=res.data.data.list
                console.log(this.categorys);
            })
        }
    }
}
</script>
<style scoped>
.category{
    height: 100vh;
    display: flex;
}
.content{
    height: calc(100% - 49px);
    position: relative;
    width: 30%;
}
.cate{
    text-align: center;
    padding: 20px;
    border-bottom: 1px solid rgb(224, 219, 219);
}
.right-item{
    width: 33%;
    padding-bottom: 9px;
    text-align: center;   
}
.right-item img{
    width: 100%;
    padding: 3px;
}
.right-item span{
    padding: 3px;
}
</style>