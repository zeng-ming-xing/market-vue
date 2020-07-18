<template>
 <div class="params">
     <div style="color:red;font-size:30px;text-align:center">产品参数</div>
     <table class="table">
         <tr v-for="(item,i) in itemparams.rule" :key="i" class="tr">
             <td v-for="(v,index) in item" :key="index">{{v}}</td>
         </tr>
     </table>
     <table class="table">
         <tr v-for="(v,i) in itemparams.info" :key="i" class="tr">
             <td style="width:20%">{{v.key}}</td>
             <td style="color:red">{{v.value}}</td>
         </tr>
     </table>
     </div>    
</template>
<script>
export default {
    props:{
        itemparams:{
            type:Object
        }
    }
}
</script>
<style scoped>
.table,.tr,td{
    border: 1px solid rgb(231, 227, 227);
    border-collapse: collapse;
}
.table,.tr{
    width: 100%;
  
}
.tr{
    height: 40px;
    line-height: 40px;
    font-size: 20px;
}
</style>