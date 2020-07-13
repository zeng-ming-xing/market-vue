<template>
    <div class="feature">
       <a href="https://act.mogujie.com/zzlx67">
       <img src="../../assets/img/recommend_bg.jpg" alt=""></a>
    </div>
</template>
<script>
export default {
    props:{
        keywords:{
            type:Array,
            defalut:[]
        },
        dKeyword:{
            type:Array,
            defalut:[]
        }
    },
    mounted(){
        console.log(this.keywords);
    }
}
</script>
<style  scoped>
.feature{
    width: 100%;
}
.feature img{
    width: 100%;
}

</style>>

