<template>
    <div class="cart">
         <navbar class="nav">
             <div slot="center">购物车({{length}})</div>
         </navbar>
    <cartList></cartList>
    <bottombar></bottombar>
    </div>
</template>
<script>
import navbar from "../components/common/navbar"
import cartList from "../components/cart/cartLIst"
import bottombar from "../components/cart/bottombar"
//引入mapgetter语法
import {mapGetters} from "vuex"
export default {
    name:"cart",
    components:{
        navbar,
    cartList,
    bottombar,
    },
    computed:{
        //vuex中的语法  将状态管理中的getter属性映射到全局  供其他组件使用
      ...mapGetters({
          length:"cartL"
      })
    }
}
</script>
<style>
.cart{
    height: 100vh;
    width: 100%;
}
.nav{
    background-color: rgb(245, 87, 87);
    font-size: 18px;
    color: white;
}
</style>