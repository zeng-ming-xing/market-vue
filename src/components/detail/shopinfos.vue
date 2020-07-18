<template>
    <div class="shop">
        <div>
            <img :src="shop.logo" alt="" style="width:30%">
            <span style="font-size:24px;vertical-align:super">{{shop.name}}</span>
        </div>
        <div class="con">
            <div class="con-item">
                <div class="item"><div>{{shop.sells}}</div><div>销量</div></div>
                <div class="item"><div>{{shop.goodscount}}</div><div>全部宝贝</div></div>
            </div>
            <div class="con-item">
                <div v-for="(item,i) in shop.score" :key="i">
                    <span>{{item.name}}</span>
                    <span>{{item.score}}</span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        shop:{
            type:Object
        }
    }
}
</script>
<style scoped>
.shop{
    padding: 20px;
    margin-top: 20px;
}
.con{
    display: flex;
    height: 100px;
}
.con-item{
    flex: 1;
    display: flex;
    
}
.con-item .item{
    flex: 1;
    font-size: 20px;
    text-align: center;
}
</style>