<template>
    <div class="nav-center">
      <div v-for="(item,i) in recommends" :key="i" class="center-item">
        <a :href="item.link">
        <img :src="item.image" alt="">
       <div>{{item.title}}</div>
        </a>
      </div>
      <div class="btm-bd"></div>
    </div>
</template>
<script>
export default {
    props:{
        recommends:{
            type:Array,
            defalut:[]
        }
    }
}
</script>
<style  scoped>
.nav-center{
  padding-top: 5px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 50px;
}
.nav-center .center-item{
  flex: 1;
  text-align: center; 
}
.nav-center .center-item a{
  text-decoration: none;
  color: cadetblue;
  font-size: 1.2em;
}
.nav-center .center-item img{
width: 65%;
}
.btm-bd{
  position: absolute;
  bottom: 0;
  background-color: rgba(213, 214, 212,0.4);
  width: 100%;
  height: 10px;
}
</style>