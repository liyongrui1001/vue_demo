<template>
  <div class="newsview">
      <div class="mobile">
            
        <!--header 开始-->
        <header>
            <div class="header"> <a class="new-a-back" href="javascript:history.back();"> <span><img src="http://localhost:8080/src/assets/images/iconfont-fanhui.png"></span> </a>
            <h2>互联网新闻</h2>
            <div class="head_right" style="top:13px;"><router-link to="/newslist" style="color:#FFFFFF; font-size:14px;">返回列表</router-link></div>
            </div>
        </header>
        <!--header 结束-->
            <div class="news_view w">
                <h1>{{news.title}}</h1>
                <div class="news_tags"><span>时间：{{news.time|date}}</span><span>来源：{{news.author}}</span><span>浏览：{{news.count}}次</span></div>
            <div class="news_content">
                <span style="text-align:center; width:100%; float:left;"><img :src="'http://localhost:8080/'+news.src" /></span>
                <p>
                    <span style="font-size:16px;">&nbsp;&nbsp;&nbsp;&nbsp;{{news.content}}</span>
                </p>
                <br />
            </div>    
        </div>
        
        <returntop></returntop>
        <slot></slot>
        
        </div>
  </div>
</template>
<script>
import returntop from "./returntop.vue";
    export default{
        data(){
            return {
                news:[]
            }
        },
        components:{
            returntop
        },
        mounted(){
            this.axios({
                url:"http://localhost:3000/newsview",
                method:"get",
                params:{
                    id:this.$route.params.id
                }
            }).then((res)=>{
                // console.log(res);
                this.news=res.data[0];
                // console.log(this.bllist)
            }).catch((res)=>{
                console.log(res);
            })
        }
    }
</script>
<style>
    @import "../assets/css/news.css";
</style>