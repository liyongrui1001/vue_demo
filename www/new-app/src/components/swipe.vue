<template>
  <div class="swipe">
      <swipe class="m_banner my-swipe">
            <swipe-item :class="'slide'+item.id" v-for="(item,index) in indexbanner " :key="item.id">
               <router-link :to="item.router"><img :src="item.src"></router-link>
            </swipe-item>
        </swipe>
  </div>
</template>
<script>
    import 'vue-swipe/dist/vue-swipe.css';
    import { Swipe, SwipeItem } from 'vue-swipe';
    export default{
        data(){
            return{
                indexbanner:[]
            }
        },
        components:{
  			'swipe': Swipe,
  			'swipe-item': SwipeItem
        },
        mounted(){
            this.axios({
                url:"http://localhost:3000/indexbanner",
                method:"get"
            }).then((res)=>{
                this.indexbanner=res.data;
            }).catch((res)=>{
                console.log(res);
            })
        }
    } 
</script>
<style>
    .my-swipe {
    height: 133.48px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  .slide1 {
    height:inherit;
    background-color: #0089dc;
    color: #fff;
  }

  .slide2 {
    height:inherit;
    background-color: #ffd705;
    color: #000;
  }
</style>
