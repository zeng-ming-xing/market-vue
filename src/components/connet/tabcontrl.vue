<template>
    <div class="tabcontrl">
        <div v-for="(item,i) in title" :key="i" class="tab-item" @click="btn(i)">
            <span :class="{active:i==index}">{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            index:0
        }
    },
    props:{
        title:{
            type:Array,
            defalut:[]
        }
    },
    methods:{
        btn(i){
          this.index=i;
          this.$emit("cut",i);
        }
    }
}
</script>
<style  scoped>
.tabcontrl{
display: flex;
width: 100%;
height: 50px;
text-align: center;
background-color: rgb(245, 241, 241);
}
.tab-item{
    flex: 1;
    line-height: 50px;
    font-size: 20px;
}
.active{
color: coral;
padding-bottom: 2px;
border-bottom: 2px solid coral;
}
</style>