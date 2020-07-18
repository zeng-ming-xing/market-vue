<template>
<div class="swiper" >
      <div class="scroll" ref="aaa" :style="{marginLeft:this.index * -this.elwidth+'px' }" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
        <div v-for="(item,i) in banners" :key="i" class="swiperbox">
            <img :src="item"/>
        </div>
      </div>
      <div class="swiperradio" @touchstart.stop="stoptimer" @touchend.stop="startTimer">
        <div v-for="(item,i) in banners" :key="i" :class="{indexactive:i==index,radio:i!=index}" @click.prevent="btn(i)" ></div>
      </div>
    </div>
</template>
<script>
export default {
    props:{
        banners:{
        type:Array,
        default:[]
    }},
  data() {
    return {
      index:0,
      timer:null,
      endpagex:0,
      startpagex:0,
      distance:0,
      elwidth:0,
      leng:0
    };
  },
  created() {



  },
  mounted(){
    
//开启定时器
this.startTimer()
//获取元素的css属性
let menuList = document.querySelector(".scroll");
let cc=menuList.getElementsByClassName("swiperbox");
 //console.log(cc);
let width = window.getComputedStyle(menuList).width;
this.elwidth=parseInt(width)/4;


  },
  methods: {
    //开始计时器函数
      startTimer(){
        this.timer=setInterval(()=>{
          if(this.index+1==this.banners.length)
          {
            this.index=0
          }
          else{this.index++;}
        },3000)  
      },
      //停止计时器
      stoptimer(){
        clearInterval(this.timer);
      },
      //点击切换图片
      btn(i){
        this.index=i;
      },
      //获取开始点击的位置
      touchStart(e){
        this.stoptimer()
        this.startpagex=e.touches[0].pageX;
        console.log(e);
      },
      //获取移动的位置
      touchMove(e){
     this.endpagex=e.touches[0].pageX;
      },
      //获取移动的距离,并且进行滑动
      touchEnd(e){
        this.distance=this.endpagex-this.startpagex;
        //console.log(this.distance);
        //console.log(this.elwidth*0.3);
      if(this.distance==0){return }
      else if(this.distance>0&&this.distance<this.elwidth*0.5){
        if(this.index==0){}else{        this.index--;
       // console.log("左滑");
        }
      }
      else if(this.distance<0&&this.distance<-(this.elwidth)*0.3)
      {
        if(this.index+1==this.banners.length){ }else{     this.index++;
        //console.log("右滑");
        }
      }
      this.startTimer();
      }  
  }
};
</script>
<style scoped>
.main-nav {
  font: 18px;
  color: white;
  background-color: tomato; 
}
.swiper {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.swiper .scroll {
  width: 400%;
  display: flex;
  transition:margin 2s ;
  height: 40vh;
}
.swiper .scroll .swiperbox {
 width: 25%;
  flex-shrink: 0;
  height: 100%;

}
.swiper .scroll .swiperbox img {
  width: 100%;
}
.swiper .swiperradio {
  z-index:9999999;
  width: 100%;
  height: 40px;
  bottom: 8px;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
}
.swiper .swiperradio .radio {
  width: 8px;
  height: 8px;
    background-color: thistle;
  margin: 6px;
  border-radius: 30px;
}
.swiper .swiperradio .indexactive{
background-color: white;
  margin: 6px;
  border-radius: 30px;
    width: 8px;
  height: 8px;
}
</style>